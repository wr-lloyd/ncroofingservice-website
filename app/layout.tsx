import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import EmergencyBanner from '@/components/EmergencyBanner'
import ChatWidget from '@/components/ChatWidget'
import MobileCTA from '@/components/MobileCTA'
import './globals.css'

export const metadata: Metadata = {
  title: 'B&C Roofing and Repair | Rougemont NC | Free Roof Inspections',
  description: 'Certified roofing contractor in Rougemont, NC. GAF, Owens Corning & CertainTeed certified. FORTIFIED roofing specialists. Free inspections, insurance claim help. Call (919) 475-8841.',
  keywords: 'roofing Rougemont NC, roof repair Durham, roof replacement Raleigh, FORTIFIED roofing NC, storm damage roof repair, insurance claim roofing',
  openGraph: {
    title: 'B&C Roofing and Repair, LLC | Rougemont NC Roofing Experts',
    description: 'Certified, licensed and insured roofing professionals serving the Triangle. Free inspections, honest pricing, quality workmanship. BBB A+ rated.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              "name": "B&C Roofing and Repair, LLC",
              "image": "https://ncroofingservice.com/logo.png",
              "url": "https://ncroofingservice.com",
              "telephone": "+1-919-475-8841",
              "email": "bandc@ncroofingservice.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5950 Mt. Harmony Church Rd",
                "addressLocality": "Rougemont",
                "addressRegion": "NC",
                "postalCode": "27572",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.2185,
                "longitude": -78.9256
              },
              "founder": {
                "@type": "Person",
                "name": "Randall Butler"
              },
              "foundingDate": "2018",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "07:00",
                  "closes": "21:30"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "12:00",
                  "closes": "21:30"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "50",
                "bestRating": "5"
              },
              "priceRange": "$$",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Rougemont",
                  "containedInPlace": { "@type": "State", "name": "North Carolina" }
                },
                {
                  "@type": "City",
                  "name": "Durham",
                  "containedInPlace": { "@type": "State", "name": "North Carolina" }
                },
                {
                  "@type": "City",
                  "name": "Raleigh",
                  "containedInPlace": { "@type": "State", "name": "North Carolina" }
                },
                {
                  "@type": "City",
                  "name": "Chapel Hill",
                  "containedInPlace": { "@type": "State", "name": "North Carolina" }
                },
                {
                  "@type": "City",
                  "name": "Cary",
                  "containedInPlace": { "@type": "State", "name": "North Carolina" }
                },
                {
                  "@type": "City",
                  "name": "Hillsborough",
                  "containedInPlace": { "@type": "State", "name": "North Carolina" }
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Roofing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Roof Replacement",
                      "description": "Complete roof replacement with premium materials"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Roof Repair",
                      "description": "Professional roof leak and damage repair"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "FORTIFIED Roofing",
                      "description": "IBHS FORTIFIED certified storm-resistant roofing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Insurance Claim Support",
                      "description": "Help with roofing insurance claims and advocacy"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Free Roof Inspection",
                      "description": "Complimentary roof inspection and consultation"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.yelp.com/biz/b-and-c-roofing-and-repair-rougemont",
                "https://www.bbb.org/us/nc/rougemont/profile/roofing-contractors/bc-roofing-and-repair-llc"
              ],
              "knowsAbout": [
                "Roofing",
                "Roof Repair",
                "Roof Replacement", 
                "FORTIFIED Roofing",
                "Storm Damage Repair",
                "Insurance Claims"
              ],
              "slogan": "A roof is only as good as the roofer."
            })
          }}
        />
      </head>
      <body className="bg-slate-50">
        <EmergencyBanner />
        <Navigation />
        {children}
        <Footer />
        <ChatWidget />
        <MobileCTA />
      </body>
    </html>
  )
}
