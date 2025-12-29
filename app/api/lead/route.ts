import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend (for email notifications)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

interface LeadPayload {
  leadType: 'estimate' | 'triage' | 'schedule' | 'storm-check'
  name?: string
  phone?: string
  email?: string
  preferredContact?: string
  address?: string
  zip?: string
  city?: string
  state?: string
  issueType?: string
  roofType?: string
  roofAge?: string
  description?: string
  photoCount?: number
  preferredDate?: string
  preferredTime?: string
  notes?: string
  stormRisk?: string
  stormCount?: number
  metadata?: {
    userAgent?: string
    timestamp?: string
    urgency?: string
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
  }
}

// Simple in-memory rate limiting (in production, use Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5 // requests per minute
const RATE_WINDOW = 60000 // 1 minute in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)
  
  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_WINDOW })
    return true
  }
  
  if (record.count >= RATE_LIMIT) {
    return false
  }
  
  record.count++
  return true
}

// Map lead types to internal routing tags
function getRoutingTag(payload: LeadPayload): string {
  if (payload.issueType === 'leak' || payload.metadata?.urgency === 'priority') {
    return 'priority'
  }
  if (payload.issueType === 'hail' || payload.issueType === 'wind' || payload.leadType === 'triage') {
    return 'claims'
  }
  if (payload.leadType === 'estimate') {
    return 'sales'
  }
  return 'general'
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const payload: LeadPayload = await request.json()

    // Basic validation
    if (!payload.leadType) {
      return NextResponse.json(
        { error: 'leadType is required' },
        { status: 400 }
      )
    }

    // Check for honeypot (spam protection)
    const body = await request.text().catch(() => '')
    if (body.includes('"website"') && body.includes('website')) {
      // Honeypot triggered - likely spam
      return NextResponse.json({ success: true }) // Fake success to fool bots
    }

    // Add routing tag
    const routingTag = getRoutingTag(payload)

    // Format lead data for email/storage
    const leadData = {
      ...payload,
      routingTag,
      receivedAt: new Date().toISOString(),
      source: 'website',
    }

    // Log the lead
    console.log('📧 New Lead Received:', JSON.stringify(leadData, null, 2))

    const leadId = `lead_${Date.now()}`
    const errors: string[] = []

    // 1. Send email notification via Resend
    if (resend && process.env.LEAD_NOTIFICATION_EMAIL) {
      try {
        const isPriority = routingTag === 'priority' || routingTag === 'claims'
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'leads@ncroofingservice.com',
          to: process.env.LEAD_NOTIFICATION_EMAIL,
          subject: `${isPriority ? '🚨 ' : ''}[${routingTag.toUpperCase()}] New ${payload.leadType} Lead${payload.name ? ` - ${payload.name}` : ''}`,
          html: formatEmailHtml(leadData),
          text: formatEmailBody(leadData),
        })
        console.log('✅ Email notification sent')
      } catch (emailError) {
        console.error('❌ Email send failed:', emailError)
        errors.push('email')
      }
    } else {
      console.log('⚠️ Email not configured - missing RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL')
    }

    // 2. Log to Google Sheets (via Apps Script Web App)
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            leadId,
            timestamp: leadData.receivedAt,
            leadType: payload.leadType,
            routingTag,
            name: payload.name || '',
            phone: payload.phone || '',
            email: payload.email || '',
            address: payload.address || '',
            city: payload.city || '',
            state: payload.state || '',
            issueType: payload.issueType || '',
            roofType: payload.roofType || '',
            roofAge: payload.roofAge || '',
            description: payload.description || '',
            preferredDate: payload.preferredDate || '',
            preferredTime: payload.preferredTime || '',
            notes: payload.notes || '',
            stormRisk: payload.stormRisk || '',
            urgency: payload.metadata?.urgency || 'normal',
            source: payload.metadata?.utm_source || 'website',
          }),
        })
        console.log('✅ Google Sheets updated')
      } catch (sheetError) {
        console.error('❌ Google Sheets update failed:', sheetError)
        errors.push('sheets')
      }
    } else {
      console.log('⚠️ Google Sheets not configured - missing GOOGLE_SHEETS_WEBHOOK_URL')
    }

    return NextResponse.json({
      success: true,
      message: 'Lead received successfully',
      leadId,
      routingTag,
      ...(errors.length > 0 && { warnings: errors }),
    })

  } catch (error) {
    console.error('Lead API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    )
  }
}

// Format email body helper (plain text)
function formatEmailBody(lead: LeadPayload & { routingTag: string; receivedAt: string }): string {
  return `
NEW LEAD - ${lead.routingTag.toUpperCase()}
================================

Type: ${lead.leadType}
Received: ${lead.receivedAt}

CONTACT INFO
------------
Name: ${lead.name || 'Not provided'}
Phone: ${lead.phone || 'Not provided'}
Email: ${lead.email || 'Not provided'}
Preferred Contact: ${lead.preferredContact || 'Any'}

PROPERTY
--------
Address: ${lead.address || 'Not provided'}
City: ${lead.city || 'Not provided'}

DETAILS
-------
Issue Type: ${lead.issueType || 'Not specified'}
Roof Type: ${lead.roofType || 'Unknown'}
Roof Age: ${lead.roofAge || 'Unknown'}
Description: ${lead.description || 'None'}
Notes: ${lead.notes || 'None'}
${lead.stormRisk ? `Storm Risk: ${lead.stormRisk}` : ''}

SCHEDULING
----------
Preferred Date: ${lead.preferredDate || 'Not specified'}
Preferred Time: ${lead.preferredTime || 'Not specified'}

METADATA
--------
Photos Uploaded: ${lead.photoCount || 0}
Urgency: ${lead.metadata?.urgency || 'normal'}
Source: Website
  `.trim()
}

// Format email body helper (HTML)
function formatEmailHtml(lead: LeadPayload & { routingTag: string; receivedAt: string }): string {
  const isPriority = lead.routingTag === 'priority' || lead.routingTag === 'claims'
  const tagColor = isPriority ? '#dc2626' : lead.routingTag === 'sales' ? '#2563eb' : '#6b7280'
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <div style="background: ${tagColor}; color: white; padding: 15px 20px; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 20px;">
      ${isPriority ? '🚨 ' : '📧 '}New ${lead.leadType.charAt(0).toUpperCase() + lead.leadType.slice(1)} Lead
    </h1>
    <p style="margin: 5px 0 0; opacity: 0.9; font-size: 14px;">
      ${lead.routingTag.toUpperCase()} • ${new Date(lead.receivedAt).toLocaleString()}
    </p>
  </div>

  <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
    
    <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h2 style="margin: 0 0 10px; font-size: 16px; color: #374151;">Contact Info</h2>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${lead.name || 'Not provided'}</p>
      <p style="margin: 5px 0;"><strong>Phone:</strong> ${lead.phone ? `<a href="tel:${lead.phone}" style="color: #2563eb;">${lead.phone}</a>` : 'Not provided'}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> ${lead.email ? `<a href="mailto:${lead.email}" style="color: #2563eb;">${lead.email}</a>` : 'Not provided'}</p>
    </div>

    <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h2 style="margin: 0 0 10px; font-size: 16px; color: #374151;">Property</h2>
      <p style="margin: 5px 0;"><strong>Address:</strong> ${lead.address || 'Not provided'}</p>
      <p style="margin: 5px 0;"><strong>City:</strong> ${lead.city || 'Not provided'}</p>
    </div>

    <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h2 style="margin: 0 0 10px; font-size: 16px; color: #374151;">Details</h2>
      <p style="margin: 5px 0;"><strong>Issue:</strong> ${lead.issueType || 'Not specified'}</p>
      <p style="margin: 5px 0;"><strong>Roof Type:</strong> ${lead.roofType || 'Unknown'}</p>
      <p style="margin: 5px 0;"><strong>Roof Age:</strong> ${lead.roofAge || 'Unknown'}</p>
      ${lead.stormRisk ? `<p style="margin: 5px 0;"><strong>Storm Risk:</strong> <span style="color: ${lead.stormRisk === 'severe' || lead.stormRisk === 'high' ? '#dc2626' : '#f59e0b'};">${lead.stormRisk.toUpperCase()}</span></p>` : ''}
      ${lead.description ? `<p style="margin: 10px 0 5px;"><strong>Description:</strong></p><p style="margin: 5px 0; padding: 10px; background: #f3f4f6; border-radius: 4px;">${lead.description}</p>` : ''}
    </div>

    ${lead.preferredDate || lead.preferredTime ? `
    <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h2 style="margin: 0 0 10px; font-size: 16px; color: #374151;">Preferred Schedule</h2>
      <p style="margin: 5px 0;"><strong>Date:</strong> ${lead.preferredDate || 'Flexible'}</p>
      <p style="margin: 5px 0;"><strong>Time:</strong> ${lead.preferredTime || 'Flexible'}</p>
    </div>
    ` : ''}

  </div>

  <div style="text-align: center; padding: 15px; color: #6b7280; font-size: 12px;">
    Lead ID: ${lead.receivedAt ? `lead_${new Date(lead.receivedAt).getTime()}` : 'N/A'}<br>
    Received from NC Roofing Service Website
  </div>

</body>
</html>
  `.trim()
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: '/api/lead' })
}
