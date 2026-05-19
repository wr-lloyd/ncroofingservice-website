import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const ALLOWED_LEAD_TYPES = ['estimate', 'triage', 'schedule', 'storm-check'] as const
type LeadType = typeof ALLOWED_LEAD_TYPES[number]

interface LeadPayload {
  leadType: LeadType
  name?: string
  phone?: string
  email?: string
  preferredContact?: string
  address?: string
  zip?: string
  city?: string
  state?: string
  county?: string
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
  website?: string // honeypot field — humans never fill this
  metadata?: {
    userAgent?: string
    timestamp?: string
    urgency?: string
    source?: string
    citySource?: string
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
  }
}

const MAX_FIELD_LENGTH = 2000
const MAX_PAYLOAD_BYTES = 10 * 1024 // 10 KB is plenty for a contact form
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60_000

const requestCounts = new Map<string, { count: number; resetTime: number }>()

function getClientIp(request: NextRequest): string {
  // On Vercel, x-real-ip is set by the platform. x-forwarded-for can be spoofed
  // by an upstream proxy, so prefer x-real-ip when available.
  const realIp = request.headers.get('x-real-ip')
  if (realIp) return realIp
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    // Take the leftmost (original client) — best effort.
    return forwarded.split(',')[0].trim()
  }
  return 'unknown'
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS })
    return true
  }

  if (record.count >= RATE_LIMIT) return false
  record.count++
  return true
}

function clipString(value: unknown, max = MAX_FIELD_LENGTH): string | undefined {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  if (!trimmed) return undefined
  return trimmed.length > max ? trimmed.slice(0, max) : trimmed
}

function isValidEmail(email: string): boolean {
  // Simple, permissive RFC-5322-ish pattern. Good enough for marketing forms.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitizePayload(raw: unknown): LeadPayload | { error: string } {
  if (!raw || typeof raw !== 'object') {
    return { error: 'Invalid payload' }
  }
  const r = raw as Record<string, unknown>

  if (typeof r.leadType !== 'string' || !ALLOWED_LEAD_TYPES.includes(r.leadType as LeadType)) {
    return { error: 'leadType must be one of: ' + ALLOWED_LEAD_TYPES.join(', ') }
  }

  const email = clipString(r.email, 320)
  if (email && !isValidEmail(email)) {
    return { error: 'Invalid email address' }
  }

  const photoCount = typeof r.photoCount === 'number' && r.photoCount >= 0 && r.photoCount <= 100
    ? Math.floor(r.photoCount)
    : undefined

  const stormCount = typeof r.stormCount === 'number' && r.stormCount >= 0 && r.stormCount <= 1000
    ? Math.floor(r.stormCount)
    : undefined

  const metadataRaw = r.metadata && typeof r.metadata === 'object' ? r.metadata as Record<string, unknown> : {}

  return {
    leadType: r.leadType as LeadType,
    name: clipString(r.name, 200),
    phone: clipString(r.phone, 50),
    email,
    preferredContact: clipString(r.preferredContact, 50),
    address: clipString(r.address, 300),
    zip: clipString(r.zip, 10),
    city: clipString(r.city, 100),
    state: clipString(r.state, 50),
    county: clipString(r.county, 100),
    issueType: clipString(r.issueType, 100),
    roofType: clipString(r.roofType, 100),
    roofAge: clipString(r.roofAge, 50),
    description: clipString(r.description),
    photoCount,
    preferredDate: clipString(r.preferredDate, 100),
    preferredTime: clipString(r.preferredTime, 100),
    notes: clipString(r.notes),
    stormRisk: clipString(r.stormRisk, 50),
    stormCount,
    website: clipString(r.website, 500),
    metadata: {
      userAgent: clipString(metadataRaw.userAgent, 500),
      timestamp: clipString(metadataRaw.timestamp, 100),
      urgency: clipString(metadataRaw.urgency, 50),
      source: clipString(metadataRaw.source, 100),
      citySource: clipString(metadataRaw.citySource, 100),
      utm_source: clipString(metadataRaw.utm_source, 100),
      utm_medium: clipString(metadataRaw.utm_medium, 100),
      utm_campaign: clipString(metadataRaw.utm_campaign, 100),
    },
  }
}

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
    const ip = getClientIp(request)

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Read body once, with a hard size limit before parsing.
    const rawText = await request.text()
    if (rawText.length > MAX_PAYLOAD_BYTES) {
      return NextResponse.json({ error: 'Payload too large' }, { status: 413 })
    }

    let parsed: unknown
    try {
      parsed = JSON.parse(rawText)
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }

    const sanitized = sanitizePayload(parsed)
    if ('error' in sanitized) {
      return NextResponse.json({ error: sanitized.error }, { status: 400 })
    }
    const payload = sanitized

    // Honeypot: a hidden `website` field that bots fill in but humans never see.
    // We return success to avoid signaling the trap.
    if (payload.website) {
      console.log('🪤 Honeypot triggered, ignoring submission from', ip)
      return NextResponse.json({ success: true, leadId: `lead_${Date.now()}` })
    }

    const routingTag = getRoutingTag(payload)
    const leadId = `lead_${Date.now()}`
    const receivedAt = new Date().toISOString()

    const leadData = { ...payload, routingTag, receivedAt, source: 'website' }

    if (process.env.NODE_ENV !== 'production') {
      console.log('📧 New Lead:', JSON.stringify(leadData, null, 2))
    } else {
      console.log(`📧 New ${payload.leadType} lead [${routingTag}] id=${leadId}`)
    }

    const errors: string[] = []

    // Email via Resend
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
      } catch (emailError) {
        console.error('❌ Email send failed:', emailError)
        errors.push('email')
      }
    }

    // Google Sheets webhook
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        const ctrl = new AbortController()
        const timeout = setTimeout(() => ctrl.abort(), 5000)
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            leadId,
            timestamp: receivedAt,
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
            source: payload.metadata?.utm_source || payload.metadata?.source || 'website',
          }),
          signal: ctrl.signal,
        })
        clearTimeout(timeout)
      } catch (sheetError) {
        console.error('❌ Google Sheets update failed:', sheetError)
        errors.push('sheets')
      }
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
ZIP: ${lead.zip || 'Not provided'}
County: ${lead.county || 'Not provided'}

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
Source: ${lead.metadata?.source || 'website'}
  `.trim()
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatEmailHtml(lead: LeadPayload & { routingTag: string; receivedAt: string }): string {
  const isPriority = lead.routingTag === 'priority' || lead.routingTag === 'claims'
  const tagColor = isPriority ? '#dc2626' : lead.routingTag === 'sales' ? '#2563eb' : '#6b7280'

  const e = (v?: string) => v ? escapeHtml(v) : ''
  const phone = lead.phone ? escapeHtml(lead.phone) : ''
  const email = lead.email ? escapeHtml(lead.email) : ''

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: ${tagColor}; color: white; padding: 15px 20px; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 20px;">
      ${isPriority ? '🚨 ' : '📧 '}New ${escapeHtml(lead.leadType.charAt(0).toUpperCase() + lead.leadType.slice(1))} Lead
    </h1>
    <p style="margin: 5px 0 0; opacity: 0.9; font-size: 14px;">
      ${escapeHtml(lead.routingTag.toUpperCase())} • ${escapeHtml(new Date(lead.receivedAt).toLocaleString())}
    </p>
  </div>
  <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
    <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h2 style="margin: 0 0 10px; font-size: 16px; color: #374151;">Contact Info</h2>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${e(lead.name) || 'Not provided'}</p>
      <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone ? `<a href="tel:${phone}" style="color: #2563eb;">${phone}</a>` : 'Not provided'}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> ${email ? `<a href="mailto:${email}" style="color: #2563eb;">${email}</a>` : 'Not provided'}</p>
    </div>
    <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h2 style="margin: 0 0 10px; font-size: 16px; color: #374151;">Property</h2>
      <p style="margin: 5px 0;"><strong>Address:</strong> ${e(lead.address) || 'Not provided'}</p>
      <p style="margin: 5px 0;"><strong>City:</strong> ${e(lead.city) || 'Not provided'}</p>
      <p style="margin: 5px 0;"><strong>ZIP:</strong> ${e(lead.zip) || 'Not provided'}</p>
    </div>
    <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h2 style="margin: 0 0 10px; font-size: 16px; color: #374151;">Details</h2>
      <p style="margin: 5px 0;"><strong>Issue:</strong> ${e(lead.issueType) || 'Not specified'}</p>
      <p style="margin: 5px 0;"><strong>Roof Type:</strong> ${e(lead.roofType) || 'Unknown'}</p>
      <p style="margin: 5px 0;"><strong>Roof Age:</strong> ${e(lead.roofAge) || 'Unknown'}</p>
      ${lead.stormRisk ? `<p style="margin: 5px 0;"><strong>Storm Risk:</strong> <span style="color: ${lead.stormRisk === 'severe' || lead.stormRisk === 'high' ? '#dc2626' : '#f59e0b'};">${escapeHtml(lead.stormRisk.toUpperCase())}</span></p>` : ''}
      ${lead.description ? `<p style="margin: 10px 0 5px;"><strong>Description:</strong></p><p style="margin: 5px 0; padding: 10px; background: #f3f4f6; border-radius: 4px;">${escapeHtml(lead.description)}</p>` : ''}
    </div>
    ${lead.preferredDate || lead.preferredTime ? `
    <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <h2 style="margin: 0 0 10px; font-size: 16px; color: #374151;">Preferred Schedule</h2>
      <p style="margin: 5px 0;"><strong>Date:</strong> ${e(lead.preferredDate) || 'Flexible'}</p>
      <p style="margin: 5px 0;"><strong>Time:</strong> ${e(lead.preferredTime) || 'Flexible'}</p>
    </div>` : ''}
  </div>
  <div style="text-align: center; padding: 15px; color: #6b7280; font-size: 12px;">
    Received from NC Roofing Service Website
  </div>
</body>
</html>`.trim()
}

export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: '/api/lead' })
}
