import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Storm Damage & Insurance Claims | NC Roofing Service',
  description:
    'Hail, wind, and storm damage roof repair in the NC Triangle. We help homeowners document damage and navigate insurance claims start-to-finish.',
  keywords:
    'storm damage roof NC, hail damage roof claim, insurance claim help roofing, wind damage roof Raleigh Durham',
  alternates: { canonical: '/residential/storm-damage' },
  openGraph: {
    title: 'Storm Damage & Insurance Claims | NC Roofing Service',
    description:
      'Free storm damage inspection. We document, photograph, and advocate with your insurer.',
    url: '/residential/storm-damage',
    type: 'website',
  },
}

export default function StormDamageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
