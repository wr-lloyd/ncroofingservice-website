import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work | Roofing Projects Gallery | NC Roofing Service NC',
  description: 'See our completed roofing projects in the NC Triangle. Before and after photos of roof replacements, repairs, storm damage restorations, and FORTIFIED installations.',
  keywords: 'roofing photos NC, roof replacement gallery, before after roof, roofing projects Durham, Raleigh roof work, roof portfolio',
  alternates: { canonical: '/our-work' },
  openGraph: {
    title: 'Roofing Project Gallery | NC Roofing Service NC',
    description: 'Browse our portfolio of completed roof replacements, repairs, and storm damage restorations across the NC Triangle.',
    type: 'website',
  },
}

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}




