import type { Metadata } from 'next'

import ContactCTA from '@/components/ContactCTA'
import { OFFICE_ADDRESS, OFFICE_EMAIL, OFFICE_PHONE, SITE_URL, FOUNDED_YEAR } from '@/lib/site'
import { team, memberPhotoUrl, memberProfileUrl } from '@/lib/team'
import { socialLinks } from '@/components/SocialLinks'

import Hero from './_sections/Hero'
import OwnerStory from './_sections/OwnerStory'
import TheCrew from './_sections/TheCrew'
import Timeline from './_sections/Timeline'
import Technology from './_sections/Technology'
import WhatToExpect from './_sections/WhatToExpect'
import Values from './_sections/Values'
import ConnectSocials from './_sections/ConnectSocials'

export const metadata: Metadata = {
  title: 'About Us | NC Roofing Service and Repair | Rougemont NC',
  description:
    'Meet the team at NC Roofing Service and Repair, LLC. Family-owned roofing company serving the NC Triangle since 2018. Owner Randall Butler and certified professionals.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About NC Roofing Service — Family-Owned Roofing in the NC Triangle',
    description:
      'Founded in 2018 by Randall Butler. GAF, Owens Corning, CertainTeed, and FORTIFIED certified. Meet the crew that protects roofs across Durham, Raleigh, and Chapel Hill.',
    url: '/about',
    type: 'website',
    images: [
      {
        url: '/images/about/team-jobsite-800x600.jpg',
        width: 800,
        height: 600,
        alt: 'NC Roofing Service crew on a Triangle, NC jobsite',
      },
    ],
  },
}

const aggregatedCertifications = Array.from(
  new Set(team.flatMap((m) => m.certifications ?? []))
)

const aggregatedAreaServed = Array.from(
  new Set(team.flatMap((m) => m.cities ?? []))
)

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  '@id': `${SITE_URL}/#organization`,
  name: 'NC Roofing Service and Repair, LLC',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logos/NC ROOFING SERVICE-01.png`,
  telephone: OFFICE_PHONE,
  email: OFFICE_EMAIL,
  foundingDate: `${FOUNDED_YEAR}-01-01`,
  founder: {
    '@type': 'Person',
    name: 'Randall Butler',
    url: `${SITE_URL}/team/randy-butler`,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: OFFICE_ADDRESS.street,
    addressLocality: OFFICE_ADDRESS.city,
    addressRegion: OFFICE_ADDRESS.region,
    postalCode: OFFICE_ADDRESS.postalCode,
    addressCountry: OFFICE_ADDRESS.country,
  },
  areaServed: aggregatedAreaServed.map((city) => ({
    '@type': 'City',
    name: city,
    containedInPlace: { '@type': 'State', name: 'North Carolina' },
  })),
  hasCredential: aggregatedCertifications.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    name: c,
  })),
  member: team.map((m) => ({
    '@type': 'Person',
    name: m.fullName,
    jobTitle: m.role,
    url: memberProfileUrl(m),
    image: memberPhotoUrl(m),
    telephone: m.directPhone,
    email: m.email,
  })),
  sameAs: socialLinks.map((s) => s.href),
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Hero />
      <OwnerStory />
      <TheCrew />
      <Timeline />
      <Technology />
      <WhatToExpect />
      <Values />
      <ConnectSocials />
      <ContactCTA />
    </main>
  )
}
