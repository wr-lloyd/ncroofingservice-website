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
  color: 'green' | 'purple' | 'blue' | 'amber'
  mapRegion: 'durham' | 'chapel-hill' | 'raleigh' | 'granville'
}

export const regions: Region[] = [
  {
    id: 'durham-north',
    label: 'Durham & North Triangle',
    shortLabel: 'North Triangle',
    counties: ['Durham', 'Person'],
    primaryCounty: 'Durham',
    anchorCity: 'Durham',
    // Top 12 across Durham + Person counties
    displayCities: ['Durham', 'Roxboro', 'Bahama', 'Timberlake', 'Rougemont', 'Hurdle Mills', 'Gorman', 'Hester', 'Allensville', 'Helena', 'Bethel Hill', 'Mount Tirzah'],
    lead: {
      name: 'Randy Butler',
      title: 'Regional Lead',
      phone: '(336) ROOFING',
      phoneRaw: '+13367663464',
      email: 'info@ncroofingservice.com',
      photo: '/images/team/randy-north-400x400.jpg',
      bio: 'Born and raised in Durham County, Randy knows every neighborhood and building code in the North Triangle. 15+ years in roofing.',
    },
    color: 'green',
    mapRegion: 'durham',
  },
  {
    id: 'greater-granville',
    label: 'Greater Granville',
    shortLabel: 'Granville',
    counties: ['Granville'],
    primaryCounty: 'Granville',
    anchorCity: 'Oxford',
    // Top 12 across Granville County (incorporated + recognized communities)
    displayCities: ['Oxford', 'Creedmoor', 'Butner', 'Stem', 'Stovall', 'Wilton', 'Berea', 'Bullock', 'Brassfield', 'Tar River', 'Cornwall', 'Knap of Reeds'],
    lead: {
      name: 'Marvin Jackson',
      title: 'Regional Lead',
      phone: '(336) ROOFING',
      phoneRaw: '+13367663464',
      email: 'marvin@ncroofingservice.com',
      photo: '/images/team/marvin-granville-400x400.jpg',
      bio: 'Granville County native with deep roots in Oxford and the surrounding communities. Trusted across the Greater Granville area for honest, quality work.',
    },
    color: 'amber',
    mapRegion: 'granville',
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
      name: 'Randy Butler',
      title: 'Owner & Regional Lead',
      phone: '(336) ROOFING',
      phoneRaw: '+13367663464',
      email: 'info@ncroofingservice.com',
      photo: '/images/team/randy-north-400x400.jpg',
      bio: 'Randy personally leads our Orange and Chatham County work — from historic Chapel Hill homes to new builds in Pittsboro. Same direct line, same standards as the Durham region.',
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
      photo: '/images/team/mike-east-400x400.jpg',
      bio: 'Serving Wake County and beyond with expertise in new construction and storm damage. Your go-to expert in the East Triangle.',
    },
    color: 'blue',
    mapRegion: 'raleigh',
  },
]

// County → Region ID lookup (source of truth for routing)
export const countyToRegionId: Record<string, string> = {
  'Durham': 'durham-north',
  'Person': 'durham-north',
  'Granville': 'greater-granville',
  'Orange': 'orange-west',
  'Chatham': 'orange-west',
  'Wake': 'wake-east',
  'Johnston': 'wake-east',
  'Franklin': 'wake-east',
}

// City → Region ID lookup (for form dropdown routing)
export const cityToRegionId: Record<string, string> = {
  // Durham & North Triangle (Durham, Person counties)
  'durham': 'durham-north',
  'roxboro': 'durham-north',
  'bahama': 'durham-north',
  'timberlake': 'durham-north',
  'rougemont': 'durham-north',
  'hurdle-mills': 'durham-north',
  'gorman': 'durham-north',
  'hester': 'durham-north',
  'allensville': 'durham-north',
  'helena': 'durham-north',
  'bethel-hill': 'durham-north',
  'mount-tirzah': 'durham-north',

  // Greater Granville (Granville County)
  'oxford': 'greater-granville',
  'creedmoor': 'greater-granville',
  'butner': 'greater-granville',
  'stem': 'greater-granville',
  'stovall': 'greater-granville',
  'wilton': 'greater-granville',
  'berea': 'greater-granville',
  'bullock': 'greater-granville',
  'brassfield': 'greater-granville',
  'tar-river': 'greater-granville',
  'cornwall': 'greater-granville',
  'knap-of-reeds': 'greater-granville',

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
  phone: '(336) ROOFING',
  phoneRaw: '+13367663464',
  email: 'info@ncroofingservice.com',
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
