import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Free Roof Inspection | NC Roofing Service',
  description:
    'Schedule your free roof inspection with NC Roofing Service. Certified inspectors, no-cost evaluation, detailed report. Serving the NC Triangle since 2018.',
  keywords:
    'free roof inspection NC, schedule roof inspection, roof evaluation Raleigh, roof inspection Durham',
  alternates: { canonical: '/request-inspection' },
  openGraph: {
    title: 'Request a Free Roof Inspection | NC Roofing Service',
    description:
      'Certified roofing inspectors. Free, detailed inspection report. Schedule online in 30 seconds.',
    url: '/request-inspection',
    type: 'website',
  },
}

export default function RequestInspectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
