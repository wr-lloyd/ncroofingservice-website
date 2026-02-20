import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | NC Roofing Service and Repair | Rougemont NC',
  description: 'Contact NC Roofing Service for free roof inspections in the NC Triangle. Call (919) 475-8841 or request a callback. Serving Durham, Raleigh, Chapel Hill, Cary & surrounding areas.',
  keywords: 'contact roofer NC, roofing company phone number, free roof inspection Raleigh, Durham roofing contact, Chapel Hill roofer',
  openGraph: {
    title: 'Contact NC Roofing Service | Free Roof Inspections in NC Triangle',
    description: 'Get in touch with your local roofing experts. Free inspections, honest pricing, 30-minute callback guarantee during business hours.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

