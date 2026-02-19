import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// City data with SEO-optimized content
const cityData: Record<string, {
  name: string
  county: string
  region: string
  regionLead: { name: string; phone: string; phoneRaw: string }
  description: string
  highlights: string[]
  nearbyAreas: string[]
}> = {
  'durham': {
    name: 'Durham',
    county: 'Durham County',
    region: 'North Triangle',
    regionLead: { name: 'Randy Butler', phone: '(919) 475-8841', phoneRaw: '+19194758841' },
    description: 'Durham homeowners trust NC Roofing Service for quality roof repairs and replacements. From downtown Durham to Hope Valley, we serve all neighborhoods with expert craftsmanship and honest pricing.',
    highlights: ['Downtown Durham', 'Duke University area', 'Hope Valley', 'Southpoint', 'Research Triangle Park'],
    nearbyAreas: ['Chapel Hill', 'Raleigh', 'Cary', 'Hillsborough', 'Morrisville'],
  },
  'raleigh': {
    name: 'Raleigh',
    county: 'Wake County',
    region: 'East Triangle',
    regionLead: { name: 'Mike Villarroel', phone: '(919) 521-9545', phoneRaw: '+19195219545' },
    description: 'As the capital city grows, NC Roofing Service is proud to serve Raleigh homeowners with professional roofing services. From North Hills to Brier Creek, we provide free inspections and expert installations.',
    highlights: ['North Hills', 'Brier Creek', 'Downtown Raleigh', 'North Raleigh', 'Five Points'],
    nearbyAreas: ['Cary', 'Durham', 'Wake Forest', 'Garner', 'Knightdale'],
  },
  'cary': {
    name: 'Cary',
    county: 'Wake County',
    region: 'East Triangle',
    regionLead: { name: 'Mike Villarroel', phone: '(919) 521-9545', phoneRaw: '+19195219545' },
    description: 'Cary residents deserve top-quality roofing. NC Roofing Service serves all Cary neighborhoods including Preston, Lochmere, and MacGregor with GAF-certified installations and storm damage repair.',
    highlights: ['Preston', 'Lochmere', 'MacGregor', 'Waverly Place', 'Park West'],
    nearbyAreas: ['Raleigh', 'Apex', 'Morrisville', 'Holly Springs', 'Durham'],
  },
  'chapel-hill': {
    name: 'Chapel Hill',
    county: 'Orange County',
    region: 'West Triangle',
    regionLead: { name: 'Preston Mayo', phone: '(919) 525-1862', phoneRaw: '+19195251862' },
    description: 'From historic Franklin Street to new developments, NC Roofing Service serves Chapel Hill with care. We specialize in both modern builds and historic home restoration roofing.',
    highlights: ['Downtown Chapel Hill', 'Southern Village', 'Meadowmont', 'UNC Campus area', 'Governors Club'],
    nearbyAreas: ['Carrboro', 'Durham', 'Hillsborough', 'Pittsboro', 'Cary'],
  },
  'apex': {
    name: 'Apex',
    county: 'Wake County',
    region: 'East Triangle',
    regionLead: { name: 'Mike Villarroel', phone: '(919) 521-9545', phoneRaw: '+19195219545' },
    description: 'The Peak of Good Living deserves peak roofing service. NC Roofing Service has helped hundreds of Apex homeowners with roof replacements, repairs, and storm damage claims.',
    highlights: ['Downtown Apex', 'Beaver Creek', 'Scotts Mill', 'Haddon Hall', 'Salem Village'],
    nearbyAreas: ['Cary', 'Holly Springs', 'Fuquay-Varina', 'Raleigh', 'Morrisville'],
  },
  'wake-forest': {
    name: 'Wake Forest',
    county: 'Wake County',
    region: 'East Triangle',
    regionLead: { name: 'Mike Villarroel', phone: '(919) 521-9545', phoneRaw: '+19195219545' },
    description: 'Wake Forest families trust NC Roofing Service for their homes. We provide professional roof inspections, repairs, and full replacements throughout Wake Forest and surrounding areas.',
    highlights: ['Downtown Wake Forest', 'Heritage', 'Wakefield', 'Traditions', 'The Factory'],
    nearbyAreas: ['Raleigh', 'Rolesville', 'Youngsville', 'Knightdale', 'Durham'],
  },
  'hillsborough': {
    name: 'Hillsborough',
    county: 'Orange County',
    region: 'West Triangle',
    regionLead: { name: 'Preston Mayo', phone: '(919) 525-1862', phoneRaw: '+19195251862' },
    description: 'Historic Hillsborough deserves expert roofing care. NC Roofing Service specializes in both historic preservation and modern roofing solutions for Hillsborough homeowners.',
    highlights: ['Historic District', 'Churton Street', 'Collins Ridge', 'Waterstone', 'Forest Ridge'],
    nearbyAreas: ['Chapel Hill', 'Durham', 'Mebane', 'Carrboro', 'Efland'],
  },
  'holly-springs': {
    name: 'Holly Springs',
    county: 'Wake County',
    region: 'East Triangle',
    regionLead: { name: 'Mike Villarroel', phone: '(919) 521-9545', phoneRaw: '+19195219545' },
    description: 'Holly Springs is one of the fastest-growing towns in NC, and NC Roofing Service is here to serve. From new construction to aging roofs, we handle it all with expertise.',
    highlights: ['Downtown Holly Springs', '12 Oaks', 'Sunset Ridge', 'Bridgewater', 'Harmony'],
    nearbyAreas: ['Apex', 'Fuquay-Varina', 'Cary', 'Raleigh', 'Angier'],
  },
  'garner': {
    name: 'Garner',
    county: 'Wake County',
    region: 'East Triangle',
    regionLead: { name: 'Mike Villarroel', phone: '(919) 521-9545', phoneRaw: '+19195219545' },
    description: 'Garner homeowners count on NC Roofing Service for reliable service. We offer free inspections, competitive pricing, and quality workmanship on every roof.',
    highlights: ['Downtown Garner', 'White Oak', 'Cleveland', 'Timber Drive area', 'Lake Benson'],
    nearbyAreas: ['Raleigh', 'Clayton', 'Smithfield', 'Cary', 'Fuquay-Varina'],
  },
  'morrisville': {
    name: 'Morrisville',
    county: 'Wake County',
    region: 'East Triangle',
    regionLead: { name: 'Mike Villarroel', phone: '(919) 521-9545', phoneRaw: '+19195219545' },
    description: 'Located at the heart of the Triangle, Morrisville homes deserve quality roofing. NC Roofing Service serves Morrisville with GAF-certified installations and prompt service.',
    highlights: ['Park West', 'Breckenridge', 'Kitts Creek', 'Preston', 'Weston'],
    nearbyAreas: ['Cary', 'Durham', 'Raleigh', 'RTP', 'Apex'],
  },
  'carrboro': {
    name: 'Carrboro',
    county: 'Orange County',
    region: 'West Triangle',
    regionLead: { name: 'Preston Mayo', phone: '(919) 525-1862', phoneRaw: '+19195251862' },
    description: 'Carrboro\'s unique character deserves unique care. NC Roofing Service serves Carrboro homes with attention to detail and respect for the community\'s values.',
    highlights: ['Downtown Carrboro', 'Lake Hogan Farms', 'Winmore', 'Claremont', 'Quarterpath Trace'],
    nearbyAreas: ['Chapel Hill', 'Hillsborough', 'Durham', 'Pittsboro', 'Mebane'],
  },
  'pittsboro': {
    name: 'Pittsboro',
    county: 'Chatham County',
    region: 'West Triangle',
    regionLead: { name: 'Preston Mayo', phone: '(919) 525-1862', phoneRaw: '+19195251862' },
    description: 'As Chatham County\'s seat, Pittsboro is growing fast. NC Roofing Service provides professional roofing services to both new and established Pittsboro neighborhoods.',
    highlights: ['Downtown Pittsboro', 'The Veranda', 'Chatham Park', 'Powell Place', 'Fearrington'],
    nearbyAreas: ['Chapel Hill', 'Siler City', 'Sanford', 'Cary', 'Apex'],
  },
  'fuquay-varina': {
    name: 'Fuquay-Varina',
    county: 'Wake County',
    region: 'East Triangle',
    regionLead: { name: 'Mike Villarroel', phone: '(919) 521-9545', phoneRaw: '+19195219545' },
    description: 'Fuquay-Varina homeowners trust NC Roofing Service for quality work. From historic downtown to new developments, we serve all FV neighborhoods with professional roofing services.',
    highlights: ['Downtown Fuquay', 'Downtown Varina', 'Bentwinds', 'Sunset Lake', 'Mills Park'],
    nearbyAreas: ['Holly Springs', 'Apex', 'Garner', 'Angier', 'Lillington'],
  },
  'knightdale': {
    name: 'Knightdale',
    county: 'Wake County',
    region: 'East Triangle',
    regionLead: { name: 'Mike Villarroel', phone: '(919) 521-9545', phoneRaw: '+19195219545' },
    description: 'Knightdale is growing, and NC Roofing Service is here to help. We provide free roof inspections and expert service to all Knightdale homeowners.',
    highlights: ['Downtown Knightdale', 'Widewaters', 'Planters Walk', 'Mingo Creek', 'Knightdale Station'],
    nearbyAreas: ['Raleigh', 'Wake Forest', 'Zebulon', 'Wendell', 'Rolesville'],
  },
  'clayton': {
    name: 'Clayton',
    county: 'Johnston County',
    region: 'East Triangle',
    regionLead: { name: 'Mike Villarroel', phone: '(919) 521-9545', phoneRaw: '+19195219545' },
    description: 'Clayton homeowners deserve quality roofing at fair prices. NC Roofing Service serves Clayton with professional inspections, repairs, and replacements.',
    highlights: ['Downtown Clayton', 'Flowers Plantation', 'Riverwood', 'Glen Laurel', 'The Meadows'],
    nearbyAreas: ['Garner', 'Smithfield', 'Raleigh', 'Selma', 'Fuquay-Varina'],
  },
  'smithfield': {
    name: 'Smithfield',
    county: 'Johnston County',
    region: 'East Triangle',
    regionLead: { name: 'Mike Villarroel', phone: '(919) 521-9545', phoneRaw: '+19195219545' },
    description: 'As Johnston County\'s seat, Smithfield homes deserve expert roofing care. NC Roofing Service provides professional service throughout Smithfield.',
    highlights: ['Downtown Smithfield', 'Outlet Mall area', 'Buffalo Road', 'Booker Dairy', 'Four Oaks'],
    nearbyAreas: ['Clayton', 'Selma', 'Garner', 'Benson', 'Raleigh'],
  },
  'mebane': {
    name: 'Mebane',
    county: 'Orange County',
    region: 'West Triangle',
    regionLead: { name: 'Preston Mayo', phone: '(919) 525-1862', phoneRaw: '+19195251862' },
    description: 'Mebane sits at the crossroads of the Triangle and Triad. NC Roofing Service serves Mebane homeowners with quality roofing at competitive prices.',
    highlights: ['Downtown Mebane', 'Cates Farm', 'Hawfields', 'Mill Creek', 'Cameron Heights'],
    nearbyAreas: ['Hillsborough', 'Burlington', 'Graham', 'Chapel Hill', 'Durham'],
  },
  'roxboro': {
    name: 'Roxboro',
    county: 'Person County',
    region: 'North Triangle',
    regionLead: { name: 'Randy Butler', phone: '(919) 475-8841', phoneRaw: '+19194758841' },
    description: 'Person County homeowners in Roxboro trust NC Roofing Service. We provide professional roofing services throughout Roxboro and surrounding rural areas.',
    highlights: ['Downtown Roxboro', 'Hyco Lake area', 'Bushy Fork', 'Helena', 'Timberlake'],
    nearbyAreas: ['Durham', 'Oxford', 'South Boston VA', 'Danville VA', 'Yanceyville'],
  },
  'oxford': {
    name: 'Oxford',
    county: 'Granville County',
    region: 'North Triangle',
    regionLead: { name: 'Randy Butler', phone: '(919) 475-8841', phoneRaw: '+19194758841' },
    description: 'Oxford and Granville County homeowners count on NC Roofing Service for quality work. We serve Oxford with professional roofing services and honest pricing.',
    highlights: ['Downtown Oxford', 'Stovall', 'Creedmoor', 'Butner', 'Stem'],
    nearbyAreas: ['Durham', 'Roxboro', 'Henderson', 'Wake Forest', 'Louisburg'],
  },
}

// Generate static params for all city pages
export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city: city,
  }))
}

// Generate metadata for each city page
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params
  const data = cityData[city]
  
  if (!data) {
    return {
      title: 'Location Not Found',
    }
  }

  return {
    title: `Roofing Services in ${data.name}, NC | NC Roofing Service`,
    description: `Professional roof repair and replacement in ${data.name}, ${data.county}. Free inspections, storm damage repair, insurance claim help. Call ${data.regionLead.phone} for service in ${data.name}.`,
    keywords: `roofer ${data.name} NC, roof repair ${data.name}, roof replacement ${data.name}, ${data.county} roofing, storm damage ${data.name}`,
    openGraph: {
      title: `${data.name} NC Roofing Services | NC Roofing Service`,
      description: `Trusted roofing contractor serving ${data.name} and ${data.county}. GAF certified, free inspections, competitive pricing.`,
      type: 'website',
    },
  }
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const data = cityData[city]

  if (!data) {
    notFound()
  }

  // Generate local business schema for this city
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "NC Roofing Service and Repair, LLC",
    "url": `https://ncroofingservice.com/locations/${city}`,
    "telephone": data.regionLead.phoneRaw,
    "areaServed": {
      "@type": "City",
      "name": data.name,
      "containedInPlace": {
        "@type": "State",
        "name": "North Carolina"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rougemont",
      "addressRegion": "NC",
      "postalCode": "27572",
      "addressCountry": "US"
    }
  }

  return (
    <main className="pt-20">
      {/* Local Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">{data.county} • {data.region}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">
              Roofing Services in {data.name}, NC
            </h1>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-8">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${data.regionLead.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white px-8 py-4 rounded-[2px] font-bold transition-colors text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {data.regionLead.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-[2px] font-bold transition-colors text-lg"
              >
                Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Roofing Services We Offer in {data.name}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From minor repairs to complete replacements, we handle all your roofing needs with expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Roof Repair', desc: 'Quick fixes for leaks, missing shingles, and storm damage', href: '/services/roof-repair' },
              { title: 'Roof Replacement', desc: 'Complete tear-off and installation with premium materials', href: '/services/roof-replacement' },
              { title: 'Storm Damage', desc: 'Emergency repairs and insurance claim assistance', href: '/services/storm-damage-insurance' },
              { title: 'FORTIFIED Roofing', desc: 'Storm-resistant roofs with insurance discounts', href: '/services/fortified-roofing' },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group bg-slate-50 hover:bg-[#C8102E]/5 rounded-2xl p-6 border border-slate-200 hover:border-[#C8102E]/20 transition-all"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#C8102E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {data.name} Neighborhoods We Serve
              </h2>
              <p className="text-slate-600 mb-6">
                Our team knows {data.name} inside and out. We provide roofing services throughout {data.county}, including:
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {data.highlights.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white rounded-full text-slate-700 text-sm border border-slate-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-slate-600">
                Don&apos;t see your neighborhood? We likely serve it too! Call us at{' '}
                <a href={`tel:${data.regionLead.phoneRaw}`} className="text-[#C8102E] font-semibold hover:underline">
                  {data.regionLead.phone}
                </a>{' '}
                to confirm service in your area.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Nearby Areas We Also Serve
              </h2>
              <p className="text-slate-600 mb-6">
                In addition to {data.name}, NC Roofing Service serves these nearby communities:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {data.nearbyAreas.map((area, idx) => {
                  const slug = area.toLowerCase().replace(/\s+/g, '-')
                  const hasPage = cityData[slug]
                  return hasPage ? (
                    <Link
                      key={idx}
                      href={`/locations/${slug}`}
                      className="flex items-center gap-2 text-[#C8102E] hover:text-[#a50d25] font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {area}, NC
                    </Link>
                  ) : (
                    <span key={idx} className="flex items-center gap-2 text-slate-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {area}, NC
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Local Expert */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#C8102E] to-[#a50d25] rounded-[2px] p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your {data.region} Roofing Expert
            </h2>
            <p className="text-white/80 text-lg mb-2">
              {data.regionLead.name} serves {data.name} and surrounding areas
            </p>
            <p className="text-white/80 mb-8">
              Local knowledge, professional service, honest pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${data.regionLead.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-8 py-4 rounded-[2px] font-bold transition-colors text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {data.regionLead.phone}
              </a>
              <Link
                href="/storm-check"
                className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-bold transition-colors text-lg"
              >
                Check Storm Damage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why {data.name} Homeowners Choose NC Roofing Service
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Free Inspections', desc: 'No-obligation roof assessments with detailed reports' },
              { title: 'Insurance Experts', desc: 'We help with claims and work with all major insurers' },
              { title: 'Local & Licensed', desc: 'NC licensed, insured, and BBB A+ accredited' },
              { title: 'GAF Certified', desc: 'Factory-certified for the best manufacturer warranties' },
              { title: 'Honest Pricing', desc: 'Transparent quotes with no hidden fees or surprises' },
              { title: 'Quality Materials', desc: 'Premium shingles from GAF, Owens Corning & CertainTeed' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-[#C8102E] rounded-[2px] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}




