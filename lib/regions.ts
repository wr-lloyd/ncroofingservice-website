// lib/regions.ts
// Centralized region configuration - Single source of truth for all regional data

export interface RegionLead {
  name: string
  title: string
  phone: string
  phoneRaw: string
  email: string
  photo: string
  bio: string
}

export interface Region {
  id: string
  label: string
  shortLabel: string
  counties: string[]
  primaryCounty: string
  anchorCity: string
  displayCities: string[]
  lead: RegionLead
  color: 'green' | 'purple' | 'blue'
  mapRegion: 'durham' | 'chapel-hill' | 'raleigh'
}

export const regions: Region[] = [
  {
    id: 'durham-north',
    label: 'Durham & North Triangle',
    shortLabel: 'North Triangle',
    counties: ['Durham', 'Granville', 'Person'],
    primaryCounty: 'Durham',
    anchorCity: 'Durham',
    // Top 12 by population
    displayCities: ['Durham', 'Roxboro', 'Oxford', 'Butner', 'Creedmoor', 'Bahama', 'Timberlake', 'Rougemont', 'Stem', 'Stovall', 'Hurdle Mills', 'Gorman'],
    lead: {
      name: 'Randy Butler',
      title: 'Regional Lead',
      phone: '(919) 475-8841',
      phoneRaw: '+19194758841',
      email: 'bandc@ncroofingservice.com',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Born and raised in Durham County, Randy knows every neighborhood and building code in the North Triangle. 15+ years in roofing.',
    },
    color: 'green',
    mapRegion: 'durham',
  },
  {
    id: 'orange-west',
    label: 'Orange & West Triangle',
    shortLabel: 'West Triangle',
    counties: ['Orange', 'Chatham'],
    primaryCounty: 'Orange',
    anchorCity: 'Chapel Hill',
    // Top 12 by population
    displayCities: ['Chapel Hill', 'Carrboro', 'Mebane', 'Hillsborough', 'Siler City', 'Pittsboro', 'Fearrington Village', 'Efland', 'Cedar Grove', 'Goldston', 'Bennett', 'Bynum'],
    lead: {
      name: 'Preston Mayo',
      title: 'Regional Lead',
      phone: '(919) 525-1862',
      phoneRaw: '+19195251862',
      email: 'preston@ncroofingservice.com',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Chapel Hill resident specializing in historic homes and modern builds. Trusted by homeowners across Orange and Chatham counties.',
    },
    color: 'purple',
    mapRegion: 'chapel-hill',
  },
  {
    id: 'wake-east',
    label: 'Wake & East Triangle',
    shortLabel: 'East Triangle',
    counties: ['Wake', 'Johnston', 'Franklin'],
    primaryCounty: 'Wake',
    anchorCity: 'Raleigh',
    // Top 12 by population
    displayCities: ['Raleigh', 'Cary', 'Apex', 'Wake Forest', 'Holly Springs', 'Fuquay-Varina', 'Garner', 'Morrisville', 'Clayton', 'Knightdale', 'Smithfield', 'Rolesville'],
    lead: {
      name: 'Mike Villarroel',
      title: 'Regional Lead',
      phone: '(919) 521-9545',
      phoneRaw: '+19195219545',
      email: 'mike@ncroofingservice.com',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'Serving Wake County and beyond with expertise in new construction and storm damage. Your go-to expert in the East Triangle.',
    },
    color: 'blue',
    mapRegion: 'raleigh',
  },
]

// County → Region ID lookup (source of truth for routing)
export const countyToRegionId: Record<string, string> = {
  'Durham': 'durham-north',
  'Granville': 'durham-north',
  'Person': 'durham-north',
  'Orange': 'orange-west',
  'Chatham': 'orange-west',
  'Wake': 'wake-east',
  'Johnston': 'wake-east',
  'Franklin': 'wake-east',
}

// City → Region ID lookup (for form dropdown routing)
export const cityToRegionId: Record<string, string> = {
  // Durham & North Triangle (Durham, Granville, Person counties)
  'durham': 'durham-north',
  'roxboro': 'durham-north',
  'oxford': 'durham-north',
  'butner': 'durham-north',
  'creedmoor': 'durham-north',
  'bahama': 'durham-north',
  'timberlake': 'durham-north',
  'rougemont': 'durham-north',
  'stem': 'durham-north',
  'stovall': 'durham-north',
  'hurdle-mills': 'durham-north',
  'gorman': 'durham-north',
  
  // Orange & West Triangle (Orange, Chatham counties)
  'chapel-hill': 'orange-west',
  'carrboro': 'orange-west',
  'mebane': 'orange-west',
  'hillsborough': 'orange-west',
  'siler-city': 'orange-west',
  'pittsboro': 'orange-west',
  'fearrington-village': 'orange-west',
  'efland': 'orange-west',
  'cedar-grove': 'orange-west',
  'goldston': 'orange-west',
  'bennett': 'orange-west',
  'bynum': 'orange-west',
  
  // Wake & East Triangle (Wake, Johnston, Franklin counties)
  'raleigh': 'wake-east',
  'cary': 'wake-east',
  'apex': 'wake-east',
  'wake-forest': 'wake-east',
  'holly-springs': 'wake-east',
  'fuquay-varina': 'wake-east',
  'garner': 'wake-east',
  'morrisville': 'wake-east',
  'clayton': 'wake-east',
  'knightdale': 'wake-east',
  'smithfield': 'wake-east',
  'rolesville': 'wake-east',
}

// Default fallback for unknown locations
export const defaultContact = {
  label: 'Triangle Support Team',
  phone: '(919) 475-8841',
  phoneRaw: '+19194758841',
  email: 'bandc@ncroofingservice.com',
}

// Helper functions
export function getRegionById(id: string): Region | undefined {
  return regions.find(r => r.id === id)
}

export function getRegionByCity(citySlug: string): Region | undefined {
  const regionId = cityToRegionId[citySlug]
  return regionId ? getRegionById(regionId) : undefined
}

export function getRegionByCounty(county: string): Region | undefined {
  const regionId = countyToRegionId[county]
  return regionId ? getRegionById(regionId) : undefined
}

// Get all cities for form dropdown, grouped by region
export function getCitiesForDropdown(): { regionLabel: string; cities: { value: string; label: string }[] }[] {
  return regions.map(region => ({
    regionLabel: region.label,
    cities: region.displayCities.map(city => ({
      value: city.toLowerCase().replace(/\s+/g, '-'),
      label: city,
    })),
  }))
}
