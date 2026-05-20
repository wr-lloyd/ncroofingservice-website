import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FORTIFIED Roofing in NC | IBHS Certified Installer',
  description:
    'FORTIFIED Roof, Silver, and Gold certified installation in the NC Triangle. Storm-resistant roofs that may qualify for homeowner insurance discounts.',
  keywords:
    'FORTIFIED roofing NC, IBHS FORTIFIED roof, hurricane resistant roof, insurance discount roof NC',
  alternates: { canonical: '/residential/fortified-roofing' },
  openGraph: {
    title: 'FORTIFIED Roofing in NC | IBHS Certified Installer',
    description:
      'IBHS FORTIFIED Roof installation. Engineered for high winds, sealed against water intrusion.',
    url: '/residential/fortified-roofing',
    type: 'website',
  },
}

export default function FortifiedRoofingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
