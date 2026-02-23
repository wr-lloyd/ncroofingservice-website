import { NextRequest, NextResponse } from 'next/server'

interface Submission {
  id: string
  type: 'storm-check' | 'inspection'
  address: string
  zip: string
  city: string
  reason?: string
  name?: string
  email?: string
  phone?: string
  notes?: string
  stormResults?: {
    stormCount: number
    overallRisk: string
  }
  timestamp: string
}

// In-memory storage (will persist during server runtime)
// For production, use Vercel KV, Postgres, or external database
const submissions: Submission[] = []

function generateId(): string {
  return `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { type, address, zip, city, reason, name, email, phone, notes, stormResults } = body
    
    if (!type || !address || !zip || !city) {
      return NextResponse.json(
        { error: 'Missing required fields: type, address, zip, city' },
        { status: 400 }
      )
    }
    
    if (type !== 'storm-check' && type !== 'inspection') {
      return NextResponse.json(
        { error: 'Invalid type. Must be "storm-check" or "inspection"' },
        { status: 400 }
      )
    }
    
    const submission: Submission = {
      id: generateId(),
      type,
      address,
      zip,
      city,
      timestamp: new Date().toISOString(),
    }
    
    if (type === 'inspection') {
      if (reason) submission.reason = reason
      if (name) submission.name = name
      if (email) submission.email = email
      if (phone) submission.phone = phone
      if (notes) submission.notes = notes
    }
    
    if (type === 'storm-check' && stormResults) {
      submission.stormResults = stormResults
    }
    
    submissions.unshift(submission)
    
    console.log(`[Submission] New ${type} submission:`, {
      id: submission.id,
      address: `${address}, ${city} ${zip}`,
      type,
      timestamp: submission.timestamp,
    })
    
    return NextResponse.json({ 
      success: true, 
      id: submission.id 
    })
    
  } catch (error) {
    console.error('[Submission] Error:', error)
    return NextResponse.json(
      { error: 'Failed to save submission' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    return NextResponse.json({ 
      submissions,
      count: submissions.length 
    })
  } catch (error) {
    console.error('[Submission] Error fetching:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}
