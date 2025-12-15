import { NextRequest, NextResponse } from 'next/server'

interface LeadPayload {
  leadType: 'estimate' | 'triage' | 'schedule'
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

    // Log the lead (in production, store in database)
    console.log('📧 New Lead Received:', JSON.stringify(leadData, null, 2))

    // In production, you would:
    // 1. Store in database (Supabase, etc.)
    // 2. Send email notification
    // 3. Send SMS if urgent
    // 4. Push to CRM
    
    // For now, we'll use a simple email via mailto or external service
    // This could be enhanced with SendGrid, Resend, etc.
    
    // Example: Send to email service (uncomment when configured)
    /*
    if (process.env.EMAIL_SERVICE_URL) {
      await fetch(process.env.EMAIL_SERVICE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'bandc@ncroofingservice.com',
          subject: `[${routingTag.toUpperCase()}] New ${payload.leadType} Lead - ${payload.name}`,
          body: formatEmailBody(leadData)
        })
      })
    }
    */

    return NextResponse.json({
      success: true,
      message: 'Lead received successfully',
      leadId: `lead_${Date.now()}`,
      routingTag,
    })

  } catch (error) {
    console.error('Lead API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    )
  }
}

// Format email body helper
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

// Health check endpoint
export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: '/api/lead' })
}
