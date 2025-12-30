import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Storm Damage Check | NC Roofing Service | NC Triangle',
  description: 'Check if recent storms damaged your roof. Enter your US address to see storm history and damage risk. Free professional inspections available. Insurance claim help.',
  keywords: 'storm damage roof NC, hail damage check, wind damage roof Raleigh, storm damage inspection Durham, roof insurance claim NC',
  openGraph: {
    title: 'Did a Storm Damage Your Roof? | Free Storm Check Tool',
    description: 'Enter your address to see recent hail, wind, and storm activity near your home. Find out if you qualify for an insurance claim.',
    type: 'website',
  },
}

export default function StormCheckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

