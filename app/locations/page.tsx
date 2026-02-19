import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Areas | NC Roofing Service | NC Triangle Locations',
  description: 'NC Roofing Service serves the entire NC Triangle including Durham, Raleigh, Cary, Chapel Hill, Apex, Wake Forest, and 30+ cities. Find roofing services near you.',
  keywords: 'NC Triangle roofing, roofing service areas, Durham roofer, Raleigh roofing, Chapel Hill roof repair, Wake County roofing',
  openGraph: {
    title: 'Service Areas | NC Roofing Service NC Triangle',
    description: 'Professional roofing services throughout the NC Triangle. Find your local roofing expert.',
    type: 'website',
  },
}

const regions = [
  {
    name: 'Durham & North Triangle',
    lead: 'Randy Butler',
    phone: '(919) 475-8841',
    phoneRaw: '+19194758841',
    counties: ['Durham County', 'Granville County', 'Person County'],
    color: 'green',
    cities: [
      { name: 'Durham', slug: 'durham', featured: true },
      { name: 'Roxboro', slug: 'roxboro', featured: false },
      { name: 'Oxford', slug: 'oxford', featured: false },
      { name: 'Butner', slug: null, featured: false },
      { name: 'Creedmoor', slug: null, featured: false },
      { name: 'Bahama', slug: null, featured: false },
      { name: 'Rougemont', slug: null, featured: false },
    ],
  },
  {
    name: 'Wake & East Triangle',
    lead: 'Mike Villarroel',
    phone: '(919) 521-9545',
    phoneRaw: '+19195219545',
    counties: ['Wake County', 'Johnston County', 'Franklin County'],
    color: 'blue',
    cities: [
      { name: 'Raleigh', slug: 'raleigh', featured: true },
      { name: 'Cary', slug: 'cary', featured: true },
      { name: 'Apex', slug: 'apex', featured: true },
      { name: 'Wake Forest', slug: 'wake-forest', featured: true },
      { name: 'Holly Springs', slug: 'holly-springs', featured: false },
      { name: 'Fuquay-Varina', slug: 'fuquay-varina', featured: false },
      { name: 'Garner', slug: 'garner', featured: false },
      { name: 'Morrisville', slug: 'morrisville', featured: false },
      { name: 'Clayton', slug: 'clayton', featured: false },
      { name: 'Knightdale', slug: 'knightdale', featured: false },
      { name: 'Smithfield', slug: 'smithfield', featured: false },
      { name: 'Rolesville', slug: null, featured: false },
    ],
  },
  {
    name: 'Orange & West Triangle',
    lead: 'Preston Mayo',
    phone: '(919) 525-1862',
    phoneRaw: '+19195251862',
    counties: ['Orange County', 'Chatham County'],
    color: 'purple',
    cities: [
      { name: 'Chapel Hill', slug: 'chapel-hill', featured: true },
      { name: 'Carrboro', slug: 'carrboro', featured: false },
      { name: 'Hillsborough', slug: 'hillsborough', featured: false },
      { name: 'Mebane', slug: 'mebane', featured: false },
      { name: 'Pittsboro', slug: 'pittsboro', featured: false },
      { name: 'Siler City', slug: null, featured: false },
      { name: 'Fearrington Village', slug: null, featured: false },
    ],
  },
]

export default function LocationsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">NC Triangle Coverage</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">
              Areas We Serve
            </h1>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              NC Roofing Service proudly serves 30+ cities across the NC Triangle. Find professional roofing services in your area.
            </p>
          </div>
        </div>
      </section>

      {/* Map Overview */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="text-4xl font-bold text-[#C8102E] mb-2">8</div>
              <div className="text-slate-600">Counties Served</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="text-4xl font-bold text-[#C8102E] mb-2">30+</div>
              <div className="text-slate-600">Cities & Towns</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="text-4xl font-bold text-[#C8102E] mb-2">3</div>
              <div className="text-slate-600">Regional Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {regions.map((region, idx) => (
              <div key={idx} className="border-b border-slate-200 pb-16 last:border-0 last:pb-0">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Region Header */}
                  <div className="lg:w-1/3">
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3 ${
                      region.color === 'green' ? 'bg-green-100 text-green-700' :
                      region.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {region.name}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      {region.counties.join(', ')}
                    </h2>
                    <div className="bg-slate-50 rounded-xl p-4 mb-4">
                      <p className="text-slate-600 text-sm mb-2">Your Local Expert:</p>
                      <p className="text-slate-900 font-bold">{region.lead}</p>
                      <a 
                        href={`tel:${region.phoneRaw}`}
                        className={`inline-flex items-center gap-2 mt-2 font-semibold ${
                          region.color === 'green' ? 'text-green-600' :
                          region.color === 'blue' ? 'text-[#C8102E]' :
                          'text-purple-600'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {region.phone}
                      </a>
                    </div>
                  </div>

                  {/* Cities Grid */}
                  <div className="lg:w-2/3">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Cities & Towns We Serve:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {region.cities.map((city, cityIdx) => (
                        city.slug ? (
                          <Link
                            key={cityIdx}
                            href={`/locations/${city.slug}`}
                            className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all ${
                              city.featured 
                                ? region.color === 'green' ? 'bg-green-50 border-green-200 hover:border-green-400' :
                                  region.color === 'blue' ? 'bg-blue-50 border-blue-200 hover:border-blue-400' :
                                  'bg-purple-50 border-purple-200 hover:border-purple-400'
                                : 'bg-slate-50 border-slate-200 hover:border-slate-400'
                            }`}
                          >
                            <span className="font-medium text-slate-900">{city.name}</span>
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ) : (
                          <div
                            key={cityIdx}
                            className="flex items-center justify-between px-4 py-3 rounded-lg border bg-slate-50 border-slate-200"
                          >
                            <span className="font-medium text-slate-700">{city.name}</span>
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            We serve many more areas throughout the Triangle. Give us a call to confirm service in your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19194758841"
              className="inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white px-8 py-4 rounded-[2px] font-bold transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (919) 475-8841
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-[2px] font-bold transition-colors text-lg"
            >
              Request a Callback
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}




