import ncZipData from '@/data/nc-zip-cities.json'

export interface ZipEntry {
  preferred: string
  alternates: string[]
  county: string
}

export interface CityEntry {
  name: string
  county: string
  zipCount: number
}

interface NCZipData {
  zips: Record<string, ZipEntry>
  cities: CityEntry[]
}

const data = ncZipData as NCZipData

// Pre-build lowercase city index for faster searching
const citySearchIndex: { lowercase: string; entry: CityEntry }[] = data.cities.map(city => ({
  lowercase: city.name.toLowerCase(),
  entry: city
}))

/**
 * Look up a ZIP code to get its preferred city and county
 */
export function lookupZip(zip: string): ZipEntry | null {
  if (!zip || zip.length !== 5) return null
  return data.zips[zip] || null
}

/**
 * Search for cities matching a query string
 * Returns up to `limit` results, sorted by relevance (exact prefix matches first)
 */
export function searchCities(query: string, limit: number = 10): CityEntry[] {
  if (!query || query.length < 1) return []
  
  const lowerQuery = query.toLowerCase().trim()
  if (!lowerQuery) return []
  
  const results: { entry: CityEntry; score: number }[] = []
  
  for (const { lowercase, entry } of citySearchIndex) {
    if (lowercase.startsWith(lowerQuery)) {
      // Exact prefix match gets highest priority
      results.push({ entry, score: 0 })
    } else if (lowercase.includes(lowerQuery)) {
      // Contains match gets lower priority
      results.push({ entry, score: 1 })
    }
  }
  
  // Sort by score, then alphabetically
  results.sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score
    return a.entry.name.localeCompare(b.entry.name)
  })
  
  return results.slice(0, limit).map(r => r.entry)
}

/**
 * Check if a city is valid for a given ZIP code
 * Returns true if city matches the preferred or alternate cities for the ZIP
 */
export function isCityValidForZip(city: string, zip: string): boolean {
  const zipEntry = lookupZip(zip)
  if (!zipEntry) return true // If ZIP not found, don't block
  
  const lowerCity = city.toLowerCase().trim()
  const lowerPreferred = zipEntry.preferred.toLowerCase()
  
  if (lowerCity === lowerPreferred) return true
  
  // Check alternates
  for (const alt of zipEntry.alternates) {
    if (lowerCity === alt.toLowerCase()) return true
  }
  
  return false
}

/**
 * Get the suggested (preferred) city for a ZIP code
 */
export function getSuggestedCity(zip: string): string | null {
  const zipEntry = lookupZip(zip)
  return zipEntry?.preferred || null
}

/**
 * Get county for a ZIP code
 */
export function getCountyForZip(zip: string): string | null {
  const zipEntry = lookupZip(zip)
  return zipEntry?.county || null
}

/**
 * Check if a ZIP code is a valid NC ZIP
 */
export function isValidNCZip(zip: string): boolean {
  if (!zip || zip.length !== 5 || !/^\d{5}$/.test(zip)) return false
  return zip in data.zips
}

/**
 * Get all NC ZIP codes (useful for validation)
 */
export function getAllNCZips(): string[] {
  return Object.keys(data.zips)
}

/**
 * Get all NC cities (useful for dropdown)
 */
export function getAllNCCities(): CityEntry[] {
  return data.cities
}
