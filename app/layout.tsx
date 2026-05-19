import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ncroofingservice.com'),
  title: {
    default: 'NC Roofing Service and Repair | Rougemont NC | Professional Roofing & Exterior Systems',
    template: '%s | NC Roofing Service NC',
  },
  description:
    'Certified roofing contractor in Rougemont, NC. GAF, Owens Corning & CertainTeed certified. FORTIFIED roofing specialists. Free inspections, insurance claim help. Call (336) ROOFING.',
  keywords:
    'roofing Rougemont NC, roof repair Durham, roof replacement Raleigh, FORTIFIED roofing NC, storm damage roof repair, insurance claim roofing, Triangle roofing contractor',
  authors: [{ name: 'NC Roofing Service and Repair, LLC' }],
  creator: 'NC Roofing Service and Repair, LLC',
  publisher: 'NC Roofing Service and Repair, LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NC Roofing Service and Repair, LLC | Rougemont NC Roofing Experts',
    description:
      'Certified, licensed and insured roofing professionals serving the Triangle. Free inspections, honest pricing, quality workmanship. BBB A+ rated.',
    url: 'https://ncroofingservice.com',
    siteName: 'NC Roofing Service and Repair',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/logos/bnc_logo.png',
        width: 800,
        height: 600,
        alt: 'NC Roofing Service and Repair - NC Triangle Roofing Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NC Roofing Service and Repair | NC Triangle Roofing Experts',
    description:
      'Certified roofing contractor serving Rougemont, Durham, Raleigh & the NC Triangle. Free inspections. Call (336) ROOFING.',
    images: ['/images/logos/bnc_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-google-verification-code',
  },
}

// Global Local Business JSON-LD — emitted on every page (including bare
// surfaces like the team dot-cards), since this is a site-wide entity.
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: 'NC Roofing Service and Repair, LLC',
  image: 'https://ncroofingservice.com/logo.png',
  url: 'https://ncroofingservice.com',
  telephone: '+1-336-766-3464',
  email: 'info@ncroofingservice.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5950 Mt. Harmony Church Rd',
    addressLocality: 'Rougemont',
    addressRegion: 'NC',
    postalCode: '27572',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 36.2185, longitude: -78.9256 },
  founder: { '@type': 'Person', name: 'Randall Butler' },
  foundingDate: '2018',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '21:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:00',
      closes: '21:30',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
    bestRating: '5',
  },
  priceRange: '$$',
  areaServed: [
    'Rougemont',
    'Durham',
    'Raleigh',
    'Chapel Hill',
    'Cary',
    'Hillsborough',
  ].map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'State', name: 'North Carolina' },
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Roofing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Replacement', description: 'Complete roof replacement with premium materials' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Repair', description: 'Professional roof leak and damage repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FORTIFIED Roofing', description: 'IBHS FORTIFIED certified storm-resistant roofing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Insurance Claim Support', description: 'Help with roofing insurance claims and advocacy' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Free Roof Inspection', description: 'Complimentary roof inspection and consultation' } },
    ],
  },
  sameAs: [
    'https://www.yelp.com/biz/b-and-c-roofing-and-repair-rougemont',
    'https://www.bbb.org/us/nc/rougemont/profile/roofing-contractors/bc-roofing-and-repair-llc',
  ],
  knowsAbout: [
    'Roofing',
    'Roof Repair',
    'Roof Replacement',
    'FORTIFIED Roofing',
    'Storm Damage Repair',
    'Insurance Claims',
  ],
  slogan: 'Professional roofing and exterior systems for residential and commercial properties.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-white`}>{children}</body>
    </html>
  )
}
