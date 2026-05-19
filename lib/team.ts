// Single source of truth for the team. Edit here to update About page,
// Team index, individual profile pages, vCard downloads, and JSON-LD schema.

export type TeamMember = {
  slug: string
  firstName: string
  lastName: string
  fullName: string
  role: string
  department: 'Field Leadership' | 'Operations' | 'Aerial & Inspections'
  type: 'field' | 'ops' | 'support'
  photo: string
  tagline: string
  bio: string
  territory?: string
  cities?: string[]
  yearsWithCompany?: number
  joinedYear?: number
  /** Direct cell if available, otherwise falls back to the main office line. */
  directPhone?: string
  /** Display string for the phone shown on the card. */
  phoneDisplay?: string
  email: string
  languages?: string[]
  certifications?: string[]
  facebook?: string
  instagram?: string
  linkedin?: string
}

export const OFFICE_PHONE = '+13367663464'
export const OFFICE_PHONE_DISPLAY = '(336) ROOFING'
export const OFFICE_PHONE_DIGITS = '(336) 766-3464'
export const OFFICE_EMAIL = 'info@ncroofingservice.com'
export const OFFICE_ADDRESS = {
  street: '5950 Mt. Harmony Church Rd',
  city: 'Rougemont',
  region: 'NC',
  postalCode: '27572',
  country: 'US',
}

export const team: TeamMember[] = [
  {
    slug: 'randy-butler',
    firstName: 'Randy',
    lastName: 'Butler',
    fullName: 'Randall "Randy" Butler',
    role: 'Owner & Founder',
    department: 'Field Leadership',
    type: 'field',
    photo: '/images/team/randy-north-400x400.jpg',
    tagline: 'Rougemont native. Roofing the Triangle since 2018.',
    bio: 'Randy founded NC Roofing Service in 2018 with a simple promise: treat every roof like it\'s on his own family\'s house. A lifelong Rougemont resident, he personally walks the Durham and Chapel Hill regions, climbs the ladders, and signs every estimate. When something on your roof needs answering, Randy is the one who picks up.',
    territory: 'Greater Durham & Chapel Hill',
    cities: ['Durham', 'Rougemont', 'Chapel Hill', 'Hillsborough'],
    joinedYear: 2018,
    email: 'randy@ncroofingservice.com',
    certifications: ['GAF Certified', 'Owens Corning Preferred', 'FORTIFIED by IBHS', 'CertainTeed'],
  },
  {
    slug: 'marvin-jackson',
    firstName: 'Marvin',
    lastName: 'Jackson',
    fullName: 'Marvin Jackson',
    role: 'Territory Lead — Granville',
    department: 'Field Leadership',
    type: 'field',
    photo: '/images/team/marvin-granville-400x400.jpg',
    tagline: 'Granville County born and raised. Your neighbor on the roof.',
    bio: 'Marvin grew up in Granville County and has spent his career protecting the homes of the same neighbors he grew up with. He runs every Oxford, Creedmoor, Butner, and Stem inspection personally — and he knows which storms came through your street last summer because he was probably on a roof during them.',
    territory: 'Greater Granville',
    cities: ['Oxford', 'Creedmoor', 'Butner', 'Stem'],
    email: 'marvin@ncroofingservice.com',
    certifications: ['GAF Certified', 'FORTIFIED by IBHS'],
  },
  {
    slug: 'mike-villarreal',
    firstName: 'Mike',
    lastName: 'Villarreal',
    fullName: 'Mike Villarreal',
    role: 'Territory Lead — Raleigh Metro',
    department: 'Field Leadership',
    type: 'field',
    photo: '/images/team/mike-east-400x400.jpg',
    tagline: 'Wake County\'s direct line to a real roofer.',
    bio: 'Mike runs the Raleigh metro for NC Roofing Service — Raleigh, Cary, Wake Forest, Apex, and everywhere in between. Bilingual, certified, and on-site personally for every estimate. If you live in Wake County and need a roof you can trust, Mike is the one to call.',
    territory: 'Greater Raleigh',
    cities: ['Raleigh', 'Cary', 'Wake Forest', 'Apex', 'Holly Springs', 'Garner'],
    email: 'mike@ncroofingservice.com',
    languages: ['English', 'Español'],
    certifications: ['GAF Certified', 'Owens Corning Preferred'],
  },
  {
    slug: 'bill-lloyd',
    firstName: 'Bill',
    lastName: 'Lloyd',
    fullName: 'Bill Lloyd',
    role: 'Operating Partner',
    department: 'Operations',
    type: 'ops',
    photo: '/images/team/bill-operations-400x400.jpg',
    tagline: 'The partner making sure we run as well as we roof.',
    bio: 'Bill helps lead the business from long-term planning to making sure every customer gets the NC Roofing Service experience start to finish. He\'s the person who keeps quality consistent across every crew, every territory, every season.',
    email: 'bill@ncroofingservice.com',
  },
  {
    slug: 'makenzie-flack',
    firstName: 'Makenzie',
    lastName: 'Flack',
    fullName: 'Makenzie Flack',
    role: 'Operations & Customer Care',
    department: 'Operations',
    type: 'ops',
    photo: '/images/team/makenzie-operations-400x400.jpg',
    tagline: 'When you call us, she\'s the reason nothing slips.',
    bio: 'Makenzie keeps the day-to-day moving — scheduling, communication, and customer follow-through. When you call or message NC Roofing Service, she\'s often who makes sure your question gets answered, your inspection gets booked, and your job stays on track.',
    email: 'makenzie@ncroofingservice.com',
  },
  {
    slug: 'max-taylor',
    firstName: 'Max',
    lastName: 'Taylor',
    fullName: 'Max Taylor',
    role: 'Aerial & Drone Inspections',
    department: 'Operations',
    type: 'ops',
    photo: '/images/team/max-drone-400x400.jpg',
    tagline: 'The Drone Guy — eyes in the sky on every Triangle roof.',
    bio: 'Max Taylor — better known around the shop as "The Drone Guy" — flies aerial inspections for every NC Roofing Service job. FAA Part 107 certified and trained on roofing-specific imaging, Max captures high-resolution photos and 4K video of every slope, valley, ridge, and flashing detail without anyone needing to set foot on a ladder. That means safer inspections for our crew, fewer scuffed shingles for you, and a documentation package detailed enough to back an insurance claim or a manufacturer warranty. After every storm, Max is up first — mapping hail strikes, wind-lifted shingles, and granule loss from above so Randy and the territory leads know exactly what they\'re walking into. If you\'ve ever wondered what your roof actually looks like, Max is the reason you\'ll see it for yourself.',
    territory: 'Aerial — Triangle-wide',
    cities: ['Durham', 'Raleigh', 'Chapel Hill', 'Cary', 'Apex', 'Oxford', 'Hillsborough', 'Wake Forest'],
    email: 'aerial@ncroofingservice.com',
    certifications: ['FAA Part 107 Remote Pilot', 'EagleView Aerial Imaging', 'Drone Roof Inspection Certified'],
  },
]

export function getAllTeamSlugs(): string[] {
  return team.map((m) => m.slug)
}

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug)
}

export function getTeamByDepartment() {
  return {
    field: team.filter((m) => m.type === 'field'),
    ops: team.filter((m) => m.type === 'ops'),
    support: team.filter((m) => m.type === 'support'),
  }
}

/** Phone shown on the card; falls back to the main office line. */
export function memberPhoneDisplay(m: TeamMember): string {
  return m.phoneDisplay ?? OFFICE_PHONE_DIGITS
}

/** tel: href for the call action; falls back to office line. */
export function memberPhoneHref(m: TeamMember): string {
  return m.directPhone ?? OFFICE_PHONE
}

/** sms: href with a pre-filled message so the rep knows where the lead came from. */
export function memberSmsHref(m: TeamMember): string {
  const phone = m.directPhone ?? OFFICE_PHONE
  const body = encodeURIComponent(
    `Hi ${m.firstName}, I saw your card on ncroofingservice.com and would like to talk about my roof.`
  )
  // Use ?body for iOS and &body for Android — most clients accept both.
  return `sms:${phone}?&body=${body}`
}

/** mailto: with subject + body pre-filled. */
export function memberMailHref(m: TeamMember): string {
  const subject = encodeURIComponent(`Roofing inquiry for ${m.firstName}`)
  const body = encodeURIComponent(
    `Hi ${m.firstName},\n\nI found your profile on ncroofingservice.com and would like to talk about a roofing project.\n\nThanks,`
  )
  return `mailto:${m.email}?subject=${subject}&body=${body}`
}

/** Inspection request with rep attribution so leads route to the right person. */
export function memberInspectionHref(m: TeamMember): string {
  return `/request-inspection?rep=${m.slug}`
}

/** Canonical profile URL — used for QR codes, sharing, vCard URL field. */
export function memberProfileUrl(m: TeamMember): string {
  return `https://ncroofingservice.com/team/${m.slug}`
}

/** Builds a vCard 3.0 string suitable for download as .vcf */
export function buildVCard(m: TeamMember): string {
  const phone = m.directPhone ?? OFFICE_PHONE
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${m.lastName};${m.firstName};;;`,
    `FN:${m.fullName}`,
    `ORG:NC Roofing Service and Repair, LLC`,
    `TITLE:${m.role}`,
    `TEL;TYPE=CELL,VOICE:${phone}`,
    `TEL;TYPE=WORK,VOICE:${OFFICE_PHONE}`,
    `EMAIL;TYPE=INTERNET,WORK:${m.email}`,
    `URL:${memberProfileUrl(m)}`,
    `ADR;TYPE=WORK:;;${OFFICE_ADDRESS.street};${OFFICE_ADDRESS.city};${OFFICE_ADDRESS.region};${OFFICE_ADDRESS.postalCode};${OFFICE_ADDRESS.country}`,
    `PHOTO;VALUE=URI:https://ncroofingservice.com${m.photo}`,
    `NOTE:${m.tagline}`,
    'END:VCARD',
  ]
  return lines.join('\r\n')
}
