import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started | Roof Help & Tools | NC Roofing Service NC',
  description: 'Find the right roofing solution for your needs. Storm damage checker, problem finder, photo upload, insurance help, and scheduling tools. Free roof inspections in NC.',
  keywords: 'roof help NC, roofing tools, schedule roof inspection, roof problem finder, roof visualizer, roofing quote NC',
  openGraph: {
    title: 'Roofing Help & Tools | NC Roofing Service NC',
    description: 'Interactive tools to help diagnose roof issues, visualize new roofs, and schedule free inspections. Your roofing journey starts here.',
    type: 'website',
  },
}

export default function StartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
