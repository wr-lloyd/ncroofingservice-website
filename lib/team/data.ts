// The team. This is the single source of truth — every team-aware surface
// (About "The Crew" section, profile pages, vCards, JSON-LD, QR codes,
// sitemap) reads from this array.
//
// Ordering matters: it controls the visual order on About#crew. Field
// Leadership renders first (Randy → Mike → Marvin), then Operations
// (Bill → Makenzie → Max).

export type Department = 'Field Leadership' | 'Operations'

export type TeamMember = {
  slug: string
  firstName: string
  lastName: string
  fullName: string
  role: string
  department: Department
  photo: string
  tagline: string
  bio: string
  territory?: string
  cities?: string[]
  joinedYear?: number
  /** Direct cell. Required now that every team member has one. */
  directPhone: string
  /** Pretty display string for the direct cell. */
  phoneDisplay: string
  email: string
  languages?: string[]
  certifications?: string[]
  /** Optional marketing badge shown on the crew card (e.g. "The Drone Guy"). */
  badge?: string
}

export const team: TeamMember[] = [
  // ---- Field Leadership ----
  {
    slug: 'randy-butler',
    firstName: 'Randy',
    lastName: 'Butler',
    fullName: 'Randall "Randy" Butler',
    role: 'Owner & Founder',
    department: 'Field Leadership',
    photo: '/images/team/randy-north-400x400.jpg',
    tagline: 'Rougemont native. Roofing the Triangle since 2018.',
    bio: "Randy founded NC Roofing Service in 2018 with a simple promise: treat every roof like it's on his own family's house. A lifelong Rougemont resident, he personally walks the Durham and Chapel Hill regions, climbs the ladders, and signs every estimate. When something on your roof needs answering, Randy is the one who picks up.",
    territory: 'Greater Durham & Chapel Hill',
    cities: ['Durham', 'Rougemont', 'Chapel Hill', 'Hillsborough'],
    joinedYear: 2018,
    directPhone: '+13365834885',
    phoneDisplay: '(336) 583-4885',
    email: 'randy@ncroofingservice.com',
    certifications: ['GAF Certified', 'Owens Corning Preferred', 'FORTIFIED by IBHS', 'CertainTeed'],
  },
  {
    slug: 'mike-villarreal',
    firstName: 'Mike',
    lastName: 'Villarreal',
    fullName: 'Mike Villarreal',
    role: 'Territory Lead — Raleigh Metro',
    department: 'Field Leadership',
    photo: '/images/team/mike-east-400x400.jpg',
    tagline: "Wake County's direct line to a real roofer.",
    bio: 'Mike runs the Raleigh metro for NC Roofing Service — Raleigh, Cary, Wake Forest, Apex, and everywhere in between. Bilingual, certified, and on-site personally for every estimate. If you live in Wake County and need a roof you can trust, Mike is the one to call.',
    territory: 'Greater Raleigh',
    cities: ['Raleigh', 'Cary', 'Wake Forest', 'Apex', 'Holly Springs', 'Garner'],
    directPhone: '+19193354958',
    phoneDisplay: '(919) 335-4958',
    email: 'mike@ncroofingservice.com',
    languages: ['English', 'Español'],
    certifications: ['GAF Certified', 'Owens Corning Preferred'],
  },
  {
    slug: 'marvin-jackson',
    firstName: 'Marvin',
    lastName: 'Jackson',
    fullName: 'Marvin Jackson',
    role: 'Territory Lead — Granville',
    department: 'Field Leadership',
    photo: '/images/team/marvin-granville-400x400.jpg',
    tagline: 'Granville County born and raised. Your neighbor on the roof.',
    bio: 'Marvin grew up in Granville County and has spent his career protecting the homes of the same neighbors he grew up with. He runs every Oxford, Creedmoor, Butner, and Stem inspection personally — and he knows which storms came through your street last summer because he was probably on a roof during them.',
    territory: 'Greater Granville',
    cities: ['Oxford', 'Creedmoor', 'Butner', 'Stem'],
    directPhone: '+13365596603',
    phoneDisplay: '(336) 559-6603',
    email: 'marvin@ncroofingservice.com',
    certifications: ['GAF Certified', 'FORTIFIED by IBHS'],
  },

  // ---- Operations ----
  {
    slug: 'bill-lloyd',
    firstName: 'Bill',
    lastName: 'Lloyd',
    fullName: 'Bill Lloyd',
    role: 'Operating Partner',
    department: 'Operations',
    photo: '/images/team/bill-operations-400x400.jpg',
    tagline: 'The partner making sure we run as well as we roof.',
    bio: "Bill helps lead the business from long-term planning to making sure every customer gets the NC Roofing Service experience start to finish. He's the person who keeps quality consistent across every crew, every territory, every season.",
    directPhone: '+19193559657',
    phoneDisplay: '(919) 355-9657',
    email: 'bill@ncroofingservice.com',
  },
  {
    slug: 'makenzie-flack',
    firstName: 'Makenzie',
    lastName: 'Flack',
    fullName: 'Makenzie Flack',
    role: 'Operations & Customer Care',
    department: 'Operations',
    photo: '/images/team/makenzie-operations-400x400.jpg',
    tagline: "When you call us, she's the reason nothing slips.",
    bio: "Makenzie keeps the day-to-day moving — scheduling, communication, and customer follow-through. When you call or message NC Roofing Service, she's often who makes sure your question gets answered, your inspection gets booked, and your job stays on track.",
    directPhone: '+19842096989',
    phoneDisplay: '(984) 209-6989',
    email: 'makenzie@ncroofingservice.com',
  },
  {
    slug: 'max-taylor',
    firstName: 'Max',
    lastName: 'Taylor',
    fullName: 'Max Taylor',
    role: 'Aerial & Drone Inspections',
    department: 'Operations',
    photo: '/images/team/max-drone-400x400.jpg',
    tagline: 'The Drone Guy — eyes in the sky on every Triangle roof.',
    bio: 'Max Taylor — better known around the shop as "The Drone Guy" — flies aerial inspections for every NC Roofing Service job. FAA Part 107 certified and trained on roofing-specific imaging, Max captures high-resolution photos and 4K video of every slope, valley, ridge, and flashing detail without anyone needing to set foot on a ladder. That means safer inspections for our crew, fewer scuffed shingles for you, and a documentation package detailed enough to back an insurance claim or a manufacturer warranty. After every storm, Max is up first — mapping hail strikes, wind-lifted shingles, and granule loss from above so Randy and the territory leads know exactly what they\'re walking into. If you\'ve ever wondered what your roof actually looks like, Max is the reason you\'ll see it for yourself.',
    territory: 'Aerial — Triangle-wide',
    cities: ['Durham', 'Raleigh', 'Chapel Hill', 'Cary', 'Apex', 'Oxford', 'Hillsborough', 'Wake Forest'],
    directPhone: '+12096411840',
    phoneDisplay: '(209) 641-1840',
    email: 'aerial@ncroofingservice.com',
    badge: 'The Drone Guy',
    certifications: [
      'FAA Part 107 Remote Pilot',
      'EagleView Aerial Imaging',
      'Drone Roof Inspection Certified',
    ],
  },
]
