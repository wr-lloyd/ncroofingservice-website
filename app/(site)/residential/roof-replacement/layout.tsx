import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roof Replacement in the NC Triangle | NC Roofing Service',
  description:
    'Complete roof replacement for NC Triangle homeowners. GAF, Owens Corning, CertainTeed certified. Financing available, insurance claim help, free inspection.',
  keywords:
    'roof replacement Raleigh, roof replacement Durham, new roof NC, asphalt shingle replacement, full roof replacement Triangle',
  alternates: { canonical: '/residential/roof-replacement' },
  openGraph: {
    title: 'Roof Replacement in the NC Triangle | NC Roofing Service',
    description:
      'Premium full roof replacement. Certified installers, top manufacturers, free inspection.',
    url: '/residential/roof-replacement',
    type: 'website',
  },
}

export default function RoofReplacementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
