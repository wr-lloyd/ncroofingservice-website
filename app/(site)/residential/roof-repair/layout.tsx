import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roof Repair in the NC Triangle | NC Roofing Service',
  description:
    'Fast, reliable roof repair across the NC Triangle. Leak repair, storm damage, missing shingles. 24/7 emergency service. Free inspection.',
  keywords:
    'roof repair Raleigh, roof leak repair Durham, emergency roof repair, missing shingles, storm damage repair Triangle',
  alternates: { canonical: '/residential/roof-repair' },
  openGraph: {
    title: 'Roof Repair in the NC Triangle | NC Roofing Service',
    description:
      'Same-week repairs, 24/7 emergency tarping. Honest assessments and clear pricing.',
    url: '/residential/roof-repair',
    type: 'website',
  },
}

export default function RoofRepairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
