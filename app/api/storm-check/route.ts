import { NextRequest, NextResponse } from 'next/server'

interface StormEvent {
  date: string
  type: 'hail' | 'wind' | 'tornado'
  severity: string
  distance: number
  description: string
  damageRisk: 'low' | 'moderate' | 'high' | 'severe'
  magnitude?: string
  location?: string
}

interface GeocodingResult {
  lat: number
  lon: number
  displayName: string
  county?: string
  state?: string
}

// SWDI (Severe Weather Data Inventory) Storm Report interface
// Based on the plsr (Preliminary Local Storm Reports) dataset
interface SWDIStormReport {
  ZTIME: string          // "20241015121500" format (YYYYMMDDHHMMSS)
  WSR_ID?: string        // Weather station ID
  CELL_ID?: string       // Storm cell ID
  RANGE?: string         // Range from radar
  AZIMUTH?: string       // Azimuth from radar
  SEVPROB?: string       // Severe probability
  PROB?: string          // Probability
  MAXSIZE?: string       // Maximum hail size
  TVS?: string           // Tornado vortex signature
  LAT: string            // Latitude
  LON: string            // Longitude
  EVENT_TYPE?: string    // "HAIL", "TORNADO", "TSTM WND DMG", etc.
  MAGNITUDE?: string     // Wind speed (MPH) or hail size (INCH)
  UNITS?: string         // "MPH", "INCH", etc.
  SOURCE?: string        // Report source
  LOCATION?: string      // Location description
  COUNTY?: string        // County name
  STATE?: string         // State abbreviation
  REMARKS?: string       // Detailed damage narrative
}

// Cache structure for storm events
interface CacheEntry {
  data: StormEvent[]
  timestamp: number
}

// In-memory cache for storm events (3 hour TTL)
const stormCache = new Map<string, CacheEntry>()
const CACHE_TTL = 3 * 60 * 60 * 1000 // 3 hours in milliseconds

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Generate monthly date ranges for SWDI API queries
 * SWDI has a maximum of 744 hours (~31 days) per query
 * @param months - Number of months to look back (default: 6)
 */
function generateMonthlyDateRanges(months: number = 6): Array<{ start: string; end: string }> {
  const ranges: Array<{ start: string; end: string }> = []
  const today = new Date()
  
  // Format as YYYYMMDD (required by SWDI API)
  const formatDate = (d: Date) => {
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}${month}${day}`
  }
  
  // Generate monthly ranges going back from today
  for (let i = 0; i < months; i++) {
    const endDate = new Date(today)
    endDate.setMonth(today.getMonth() - i)
    // Set to first of month if i > 0, otherwise use today
    if (i > 0) {
      endDate.setDate(1)
    }
    
    const startDate = new Date(endDate)
    startDate.setMonth(endDate.getMonth() - 1)
    if (i === 0) {
      startDate.setDate(1)
    }
    
    // Only add if end date is in the past or present
    if (endDate <= today) {
      ranges.push({
        start: formatDate(startDate),
        end: formatDate(endDate),
      })
    }
  }
  
  return ranges
}

/**
 * Parse CSV response from SWDI API into typed objects
 */
function parseCSVResponse(csvText: string): SWDIStormReport[] {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []
  
  // First line is headers
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''))
  const reports: SWDIStormReport[] = []
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    if (!line.trim()) continue
    
    // Handle CSV parsing with quoted fields
    const values: string[] = []
    let current = ''
    let inQuotes = false
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j]
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim())
        current = ''
      } else {
        current += char
      }
    }
    values.push(current.trim()) // Don't forget the last value
    
    // Map to object
    const report: Record<string, string> = {}
    headers.forEach((header, idx) => {
      report[header] = values[idx] || ''
    })
    
    // Only include if we have valid coordinates
    if (report.LAT && report.LON) {
      reports.push(report as unknown as SWDIStormReport)
    }
  }
  
  return reports
}

/**
 * Map SWDI event types to our simplified event types
 */
function mapEventType(eventType: string): 'hail' | 'wind' | 'tornado' {
  const typeLower = (eventType || '').toLowerCase()
  
  if (typeLower.includes('hail')) {
    return 'hail'
  }
  
  if (typeLower.includes('tornado') || typeLower.includes('funnel')) {
    return 'tornado'
  }
  
  // Default to wind for thunderstorm wind, wind damage, etc.
  return 'wind'
}

/**
 * Determine damage risk level based on event data
 */
function determineDamageRisk(
  eventType: string,
  magnitude?: string,
  remarks?: string
): 'low' | 'moderate' | 'high' | 'severe' {
  const typeLower = (eventType || '').toLowerCase()
  const remarksLower = (remarks || '').toLowerCase()
  
  // Tornado is always severe or high
  if (typeLower.includes('tornado')) {
    return 'severe'
  }
  
  // Check remarks for damage indicators
  if (remarksLower.includes('roof') || 
      remarksLower.includes('structur') || 
      remarksLower.includes('destroy') ||
      remarksLower.includes('major')) {
    return 'severe'
  }
  
  // Parse magnitude for hail/wind
  if (magnitude) {
    const value = parseFloat(magnitude)
    if (!isNaN(value)) {
      // Hail size (in inches)
      if (typeLower.includes('hail')) {
        if (value >= 2.0) return 'severe'      // Baseball or larger
        if (value >= 1.5) return 'high'        // Golf ball
        if (value >= 1.0) return 'moderate'    // Quarter
        return 'low'
      }
      
      // Wind speed (in MPH)
      if (typeLower.includes('wind') || typeLower.includes('tstm')) {
        if (value >= 80) return 'severe'
        if (value >= 65) return 'high'
        if (value >= 50) return 'moderate'
        return 'low'
      }
    }
  }
  
  // Check remarks for severity keywords
  if (remarksLower.includes('damage') || remarksLower.includes('tree')) {
    return 'moderate'
  }
  
  return 'low'
}

/**
 * Calculate distance between two coordinates (Haversine formula)
 */
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959 // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

/**
 * Format severity string for display
 */
function formatSeverity(report: SWDIStormReport): string {
  const eventType = (report.EVENT_TYPE || '').toLowerCase()
  
  if (report.MAGNITUDE && report.UNITS) {
    if (eventType.includes('hail')) {
      return `${report.MAGNITUDE}" diameter hail`
    }
    return `${report.MAGNITUDE} ${report.UNITS} winds`
  }
  
  if (report.MAXSIZE) {
    return `${report.MAXSIZE}" diameter hail`
  }
  
  return report.EVENT_TYPE || 'Severe Weather'
}

/**
 * Format date from SWDI ZTIME format (YYYYMMDDHHMMSS) to ISO string
 */
function formatZTime(ztime: string): string {
  if (!ztime || ztime.length < 8) return new Date().toISOString()
  
  const year = ztime.substring(0, 4)
  const month = ztime.substring(4, 6)
  const day = ztime.substring(6, 8)
  const hour = ztime.length >= 10 ? ztime.substring(8, 10) : '00'
  const minute = ztime.length >= 12 ? ztime.substring(10, 12) : '00'
  
  return new Date(`${year}-${month}-${day}T${hour}:${minute}:00Z`).toISOString()
}

// =============================================================================
// Cache Functions
// =============================================================================

/**
 * Get cached storm events if available and not expired
 */
function getCachedStorms(cacheKey: string): StormEvent[] | null {
  const entry = stormCache.get(cacheKey)
  if (!entry) return null
  
  const now = Date.now()
  if (now - entry.timestamp > CACHE_TTL) {
    stormCache.delete(cacheKey)
    return null
  }
  
  return entry.data
}

/**
 * Store storm events in cache
 */
function setCachedStorms(cacheKey: string, storms: StormEvent[]): void {
  stormCache.set(cacheKey, {
    data: storms,
    timestamp: Date.now(),
  })
}

/**
 * Clean expired cache entries
 */
function cleanExpiredCache(): void {
  const now = Date.now()
  const keysToDelete: string[] = []
  
  stormCache.forEach((entry, key) => {
    if (now - entry.timestamp > CACHE_TTL) {
      keysToDelete.push(key)
    }
  })
  
  keysToDelete.forEach(key => stormCache.delete(key))
}

// =============================================================================
// Geocoding
// =============================================================================

/**
 * Geocode address using Nominatim (free, no API key required)
 */
async function geocodeAddress(address: string): Promise<GeocodingResult | null> {
  console.log(`[Geocoding] Attempting to geocode: ${address}`)
  
  // Try multiple address variations to improve success rate
  const addressVariations = [
    address,
    address.replace(/\bStreet\b/gi, 'St').replace(/\bRoad\b/gi, 'Rd').replace(/\bAvenue\b/gi, 'Ave').replace(/\bDrive\b/gi, 'Dr').replace(/\bLane\b/gi, 'Ln'),
    address.replace(/\bSt\b/gi, 'Street').replace(/\bRd\b/gi, 'Road').replace(/\bAve\b/gi, 'Avenue').replace(/\bDr\b/gi, 'Drive').replace(/\bLn\b/gi, 'Lane'),
  ]
  
  // Extract city and state for fallback
  const cityStateMatch = address.match(/,?\s*([^,]+?)\s*,\s*([A-Z]{2}|[A-Za-z\s]+?)(?:\s+\d{5})?$/)
  let cityStateQuery = null
  if (cityStateMatch) {
    const city = cityStateMatch[1].trim()
    const state = cityStateMatch[2].trim()
    cityStateQuery = `${city}, ${state}`
    console.log(`[Geocoding] Extracted city/state: ${cityStateQuery}`)
  }
  
  // Try each variation with delays to respect rate limits
  for (let i = 0; i < addressVariations.length; i++) {
    const addressToTry = addressVariations[i]
    
    if (i > 0) {
      await new Promise(resolve => setTimeout(resolve, 1100))
    }
    
    try {
      const encodedAddress = encodeURIComponent(addressToTry)
      const apiUrl = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&addressdetails=1&limit=5&countrycodes=us`
      
      console.log(`[Geocoding] Trying variation ${i + 1}/${addressVariations.length}`)
      
      const response = await fetch(apiUrl, {
        headers: {
          'User-Agent': 'BandCRoofing/1.0 (bandc@ncroofingservice.com)',
        },
      })
      
      if (!response.ok) {
        console.error(`[Geocoding] API error:`, response.status)
        continue
      }
      
      const data = await response.json()
      
      if (data && data.length > 0) {
        let bestMatch = data[0]
        
        for (const result of data) {
          if (result.address?.house_number && result.address?.road) {
            bestMatch = result
            break
          }
        }
        
        const lat = parseFloat(bestMatch.lat)
        const lon = parseFloat(bestMatch.lon)
        
        if (isNaN(lat) || isNaN(lon)) continue
        
        console.log(`[Geocoding] ✓ Success: ${bestMatch.display_name}`)
        return {
          lat,
          lon,
          displayName: bestMatch.display_name,
          county: bestMatch.address?.county?.replace(/\s+County$/, '') || bestMatch.address?.county,
          state: bestMatch.address?.state,
        }
      }
    } catch (error) {
      console.error(`[Geocoding] Error:`, error)
      continue
    }
  }
  
  // Try city/state fallback
  if (cityStateQuery) {
    console.log(`[Geocoding] Trying city/state fallback: ${cityStateQuery}`)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1100))
      
      const encodedQuery = encodeURIComponent(cityStateQuery)
      const apiUrl = `https://nominatim.openstreetmap.org/search?q=${encodedQuery}&format=json&addressdetails=1&limit=1&countrycodes=us`
      
      const response = await fetch(apiUrl, {
        headers: {
          'User-Agent': 'BandCRoofing/1.0 (bandc@ncroofingservice.com)',
        },
      })
      
      if (response.ok) {
        const data = await response.json()
        if (data && data.length > 0) {
          const result = data[0]
          const lat = parseFloat(result.lat)
          const lon = parseFloat(result.lon)
          
          if (!isNaN(lat) && !isNaN(lon)) {
            console.log(`[Geocoding] ✓ Success with fallback: ${result.display_name}`)
            return {
              lat,
              lon,
              displayName: result.display_name,
              county: result.address?.county?.replace(/\s+County$/, '') || result.address?.county,
              state: result.address?.state,
            }
          }
        }
      }
    } catch (error) {
      console.error(`[Geocoding] Fallback error:`, error)
    }
  }
  
  console.error(`[Geocoding] ✗ Failed to geocode: ${address}`)
  return null
}

// =============================================================================
// SWDI API Integration
// =============================================================================

/**
 * Fetch storm events from NOAA SWDI (Severe Weather Data Inventory) API
 * 
 * Uses nx3hail (hail signatures) and nx3tvs (tornado vortex signatures) datasets
 * These provide radar-detected severe weather signatures within the bounding box.
 * 
 * This API is free and requires no authentication.
 * Maximum date range is 744 hours (~31 days) per query.
 * 
 * @param lat - User's latitude
 * @param lon - User's longitude
 * @param months - Number of months to look back (default: 6)
 * @returns Array of StormEvent objects
 */
async function fetchSWDIStormEvents(lat: number, lon: number, months: number = 6): Promise<StormEvent[]> {
  const allEvents: StormEvent[] = []
  const dateRanges = generateMonthlyDateRanges(months)
  
  // Create bounding box: ±0.25 degrees (~17 mile radius)
  const bboxBuffer = 0.25
  const minLon = lon - bboxBuffer
  const minLat = lat - bboxBuffer
  const maxLon = lon + bboxBuffer
  const maxLat = lat + bboxBuffer
  const bbox = `${minLon.toFixed(4)},${minLat.toFixed(4)},${maxLon.toFixed(4)},${maxLat.toFixed(4)}`
  
  // Datasets to query: hail signatures, tornado vortex signatures
  const datasets = ['nx3hail', 'nx3tvs']
  
  console.log(`[SWDI API] Querying with bbox: ${bbox}`)
  console.log(`[SWDI API] Date ranges: ${dateRanges.length} monthly chunks (${months} months)`)
  
  // Use all date ranges for the requested months
  const recentRanges = dateRanges
  
  for (const dataset of datasets) {
    for (const range of recentRanges) {
      try {
        // SWDI API format: /swdiws/csv/{dataset}/{startDate}:{endDate}?bbox={minLon,minLat,maxLon,maxLat}
        // Dates must be in YYYYMMDD format
        const apiUrl = `https://www.ncdc.noaa.gov/swdiws/csv/${dataset}/${range.start}:${range.end}?bbox=${bbox}`
        
        console.log(`[SWDI API] Fetching ${dataset} ${range.start} to ${range.end}...`)
        
        const response = await fetch(apiUrl, {
          headers: {
            'User-Agent': 'BandCRoofing/1.0 (bandc@ncroofingservice.com)',
          },
        })
        
        if (!response.ok) {
          console.warn(`[SWDI API] Error for ${dataset} ${range.start}-${range.end}: ${response.status}`)
          continue
        }
        
        const csvText = await response.text()
        
        // Check if response contains "summary" (means we got data)
        if (!csvText.includes('ZTIME') || csvText.includes('count,0')) {
          continue
        }
        
        const reports = parseCSVResponse(csvText)
        console.log(`[SWDI API] Found ${reports.length} ${dataset} reports`)
        
        // Transform SWDI reports to StormEvent format
        for (const report of reports) {
          const reportLat = parseFloat(report.LAT)
          const reportLon = parseFloat(report.LON)
          
          if (isNaN(reportLat) || isNaN(reportLon)) continue
          
          // Calculate distance from user's location
          const distance = calculateDistance(lat, lon, reportLat, reportLon)
          
          // Only include events within 20 miles
          if (distance > 20) continue
          
          // Determine event type based on dataset
          const eventType: 'hail' | 'wind' | 'tornado' = dataset === 'nx3hail' ? 'hail' : 'tornado'
          
          // Determine severity and risk
          const maxSize = parseFloat(report.MAXSIZE || '0')
          const sevProb = parseInt(report.SEVPROB || '0', 10)
          
          let damageRisk: 'low' | 'moderate' | 'high' | 'severe' = 'low'
          let severity = 'Detected'
          
          if (dataset === 'nx3hail') {
            // Hail size in inches
            if (maxSize >= 2.0) {
              damageRisk = 'severe'
              severity = `${maxSize}" hail (baseball+)`
            } else if (maxSize >= 1.5) {
              damageRisk = 'high'
              severity = `${maxSize}" hail (golf ball)`
            } else if (maxSize >= 1.0) {
              damageRisk = 'moderate'
              severity = `${maxSize}" hail (quarter)`
            } else if (maxSize >= 0.75) {
              damageRisk = 'low'
              severity = `${maxSize}" hail (penny)`
            } else {
              severity = `${maxSize}" hail (small)`
            }
          } else if (dataset === 'nx3tvs') {
            // Tornado vortex signature
            damageRisk = 'severe'
            severity = 'Tornado Vortex Signature'
          }
          
          // Build description
          const description = dataset === 'nx3hail'
            ? `Hail signature detected by radar (${report.WSR_ID || 'NEXRAD'}). Maximum size: ${maxSize}". Severe probability: ${sevProb}%.`
            : `Tornado vortex signature detected by radar (${report.WSR_ID || 'NEXRAD'}). Immediate severe weather threat.`
          
          allEvents.push({
            date: report.ZTIME,
            type: eventType,
            severity,
            distance: Math.round(distance * 10) / 10,
            description,
            damageRisk,
            magnitude: maxSize > 0 ? `${maxSize}"` : undefined,
            location: `${Math.round(distance * 10) / 10} miles away`,
          })
        }
        
        // Small delay between API calls to be respectful
        await new Promise(resolve => setTimeout(resolve, 200))
        
      } catch (error) {
        console.error(`[SWDI API] Error fetching ${dataset}:`, error)
        continue
      }
    }
  }
  
  // Deduplicate events that are very close in time and location
  const uniqueEvents: StormEvent[] = []
  for (const event of allEvents) {
    const isDuplicate = uniqueEvents.some(existing => {
      const timeDiff = Math.abs(new Date(event.date).getTime() - new Date(existing.date).getTime())
      return timeDiff < 3600000 && // Within 1 hour
             event.type === existing.type &&
             Math.abs(event.distance - existing.distance) < 2 // Within 2 miles
    })
    if (!isDuplicate) {
      uniqueEvents.push(event)
    }
  }
  
  // Sort by date (newest first)
  uniqueEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  console.log(`[SWDI API] Total unique events found: ${uniqueEvents.length}`)
  return uniqueEvents
}

/**
 * Get storm events for a specific location
 * Uses SWDI API - free, no authentication required
 * @param months - Number of months to look back (default: 6)
 */
async function getStormEventsForLocation(lat: number, lon: number, months: number = 6): Promise<StormEvent[]> {
  // Clean expired cache entries periodically
  cleanExpiredCache()
  
  // Create cache key based on location and months (rounded to ~1 mile precision)
  const cacheKey = `${lat.toFixed(2)}-${lon.toFixed(2)}-${months}m`
  
  // Check cache first
  const cachedStorms = getCachedStorms(cacheKey)
  if (cachedStorms !== null) {
    console.log(`[Storm Check] Using cached data (${cachedStorms.length} events, ${months} months)`)
    return cachedStorms
  }
  
  // Fetch from SWDI API
  let storms: StormEvent[] = []
  try {
    storms = await fetchSWDIStormEvents(lat, lon, months)
  } catch (error) {
    console.error('Error fetching SWDI storm data:', error)
    storms = []
  }
  
  // Cache results (even if empty) to avoid repeated API calls
  setCachedStorms(cacheKey, storms)
  
  return storms
}

// =============================================================================
// Risk Assessment
// =============================================================================

function calculateOverallRisk(storms: StormEvent[]): 'low' | 'moderate' | 'high' | 'severe' {
  if (storms.length === 0) return 'low'
  
  // Check for severe events in last 2 years
  const twoYearsAgo = new Date()
  twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2)
  
  const recentStorms = storms.filter(s => new Date(s.date) >= twoYearsAgo)
  
  if (recentStorms.some(s => s.damageRisk === 'severe')) return 'severe'
  if (recentStorms.filter(s => s.damageRisk === 'high').length >= 2) return 'severe'
  if (recentStorms.some(s => s.damageRisk === 'high')) return 'high'
  if (recentStorms.some(s => s.damageRisk === 'moderate')) return 'moderate'
  
  return 'low'
}

function generateRecommendation(storms: StormEvent[], overallRisk: string): string {
  if (storms.length === 0) {
    return 'Good news! No significant storm events have been recorded near your address in the past 5 years. However, regular roof inspections are still recommended every 2-3 years to catch any wear and tear.'
  }
  
  const severeStorms = storms.filter(s => s.damageRisk === 'severe' || s.damageRisk === 'high')
  const hailEvents = storms.filter(s => s.type === 'hail')
  const windEvents = storms.filter(s => s.type === 'wind')
  const tornadoEvents = storms.filter(s => s.type === 'tornado')
  
  if (overallRisk === 'severe') {
    let msg = `⚠️ URGENT: ${severeStorms.length} significant storm event(s) have been recorded near your address.`
    if (tornadoEvents.length > 0) {
      msg += ` This includes ${tornadoEvents.length} tornado report(s).`
    }
    if (hailEvents.length > 0) {
      msg += ` Hail damage is particularly common and often invisible from the ground.`
    }
    msg += ` We strongly recommend a professional inspection immediately - your insurance claim deadline may be approaching.`
    return msg
  }
  
  if (overallRisk === 'high') {
    return `Based on recent storm activity including ${hailEvents.length} hail event(s) and ${windEvents.length} wind event(s), we recommend scheduling a professional roof inspection. Storm damage is often not visible from the ground but can lead to leaks and costly repairs if left unchecked.`
  }
  
  if (overallRisk === 'moderate') {
    return `Several storm events have occurred in your area. While damage may not be certain, a professional inspection can identify any issues before they become expensive problems. Most inspections are free and take less than an hour.`
  }
  
  return 'No major storm damage indicators found, but regular maintenance inspections are still recommended to ensure your roof stays in good condition.'
}

// =============================================================================
// API Route Handler
// =============================================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { address, months = 6 } = body
    
    // Validate months parameter (must be 3, 6, 12, 18, or 24)
    const validMonths = [3, 6, 12, 18, 24]
    const monthsToUse = validMonths.includes(months) ? months : 6
    
    if (!address || typeof address !== 'string') {
      return NextResponse.json(
        { error: 'Address is required' },
        { status: 400 }
      )
    }
    
    // Geocode the address
    const geoResult = await geocodeAddress(address)
    
    if (!geoResult) {
      return NextResponse.json(
        { error: 'Could not find that address. Please try a more specific address including city and state.' },
        { status: 400 }
      )
    }
    
    // Check if address is in the US
    const usStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'District of Columbia']
    const stateAbbreviations = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC']
    
    const isUSAddress = geoResult.state && (
      usStates.some(state => geoResult.state?.includes(state)) ||
      stateAbbreviations.some(abbr => geoResult.state?.includes(abbr))
    )
    
    if (!isUSAddress) {
      return NextResponse.json(
        { error: 'Please enter a valid US address. Storm data is available for all US addresses.' },
        { status: 400 }
      )
    }
    
    // Get storm events for this location
    const storms = await getStormEventsForLocation(geoResult.lat, geoResult.lon, monthsToUse)
    const overallRisk = calculateOverallRisk(storms)
    
    // Calculate insurance deadline (1 year from most recent damaging storm)
    let insuranceDeadline: string | undefined
    const highRiskStorms = storms.filter(s => s.damageRisk === 'high' || s.damageRisk === 'severe')
    if (highRiskStorms.length > 0) {
      const mostRecent = new Date(highRiskStorms[0].date)
      const deadline = new Date(mostRecent)
      deadline.setFullYear(deadline.getFullYear() + 1)
      
      // Only show deadline if it hasn't passed
      if (deadline > new Date()) {
        insuranceDeadline = deadline.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      }
    }
    
    return NextResponse.json({
      success: true,
      address: geoResult.displayName,
      county: geoResult.county,
      state: geoResult.state,
      coordinates: { lat: geoResult.lat, lon: geoResult.lon },
      storms,
      overallRisk,
      insuranceDeadline,
      recommendation: generateRecommendation(storms, overallRisk),
    })
    
  } catch (error) {
    console.error('Storm check error:', error)
    return NextResponse.json(
      { error: 'An error occurred while checking storm data. Please try again.' },
      { status: 500 }
    )
  }
}
