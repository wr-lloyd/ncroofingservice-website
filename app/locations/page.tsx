'use client'

import Link from 'next/link'
import Image from 'next/image'
import TriangleMap from '@/components/TriangleMap'

const localReps = [
  {
    name: 'Mike Villarroel',
    region: 'Greater Raleigh',
    mapRegion: 'raleigh' as const,
    phone: '(919) 521-9545',
    phoneRaw: '+19195219545',
    email: 'mike@ncroofingservice.com',
    cities: ['Raleigh', 'Cary', 'Wake Forest', 'Apex', 'Garner', 'Knightdale', 'Holly Springs', 'Fuquay-Varina'],
    color: 'blue',
    description: 'Serving the Raleigh metro area with expert roofing solutions. From downtown Raleigh to the growing communities of Wake County.',
  },
  {
    name: 'Randy Butler',
    region: 'Greater Durham',
    mapRegion: 'durham' as const,
    phone: '(919) 475-8841',
    phoneRaw: '+19194758841',
    email: 'bandc@ncroofingservice.com',
    cities: ['Durham', 'Rougemont', 'Butner', 'Creedmoor', 'Oxford', 'Bahama', 'Stem', 'Timberlake'],
    color: 'green',
    description: 'Your local Durham expert and company owner. Deep roots in the community with a commitment to quality that\'s personal.',
  },
  {
    name: 'Preston Mayo',
    region: 'Greater Chapel Hill',
    mapRegion: 'chapel-hill' as const,
    phone: '(919) 525-1862',
    phoneRaw: '+19195251862',
    email: 'preston@ncroofingservice.com',
    cities: ['Chapel Hill', 'Carrboro', 'Hillsborough', 'Mebane', 'Pittsboro', 'Siler City'],
    color: 'purple',
    description: 'Covering Chapel Hill and Orange County with the same dedication to craftsmanship that defines B&C Roofing.',
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
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Service Areas</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">Your Local Roofing Experts</h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              We&apos;re not a national call center — we&apos;re your neighbors. Meet the local experts who serve your community.
            </p>
          </div>
        </div>
      </section>

      {/* Local Reps Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Your Local Expert</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              When you call B&C, you&apos;ll talk to someone who knows your area — not a stranger reading from a script.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localReps.map((rep) => (
              <div 
                key={rep.name}
                className={`bg-slate-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-${rep.color}-500/30 transition-all`}
              >
                {/* Rep Header */}
                <div className={`relative bg-gradient-to-r ${
                  rep.color === 'blue' ? 'from-blue-600 to-blue-700' :
                  rep.color === 'green' ? 'from-green-600 to-green-700' :
                  'from-purple-600 to-purple-700'
                } p-6 overflow-hidden`}>
                  {/* Map in Header */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <TriangleMap highlightedRegion={rep.mapRegion} />
                  </div>
                  <div className="relative z-10 flex items-center gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{rep.name}</h3>
                      <p className="text-white/80">{rep.region}</p>
                    </div>
                  </div>
                </div>

                {/* Rep Details */}
                <div className="p-6">
                  <p className="text-slate-400 text-sm mb-6">{rep.description}</p>
                  
                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <a 
                      href={`tel:${rep.phone.replace(/[^0-9]/g, '')}`}
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">{rep.phone}</span>
                    </a>
                    <a 
                      href={`mailto:${rep.email}`}
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{rep.email}</span>
                    </a>
                  </div>

                  {/* Cities Served */}
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-3">Cities Served</h4>
                    <div className="flex flex-wrap gap-2">
                      {rep.cities.map((city) => (
                        <span 
                          key={city}
                          className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded-full"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link
                    href="/contact"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-colors ${
                      rep.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                      rep.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                      'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    Contact {rep.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Why It Matters</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Local Experts, Not a Call Center
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                When you work with B&C Roofing, you&apos;re not just another ticket number. Your local rep knows your neighborhood, 
                understands local weather patterns, and is invested in their community&apos;s homes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Fast Response Times</h3>
                    <p className="text-slate-400 text-sm">Your local rep is nearby — not across the country. Emergencies get handled quickly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Local Knowledge</h3>
                    <p className="text-slate-400 text-sm">We know Triangle weather, local building codes, and what works best for NC homes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Accountability</h3>
                    <p className="text-slate-400 text-sm">We live here too. Our reputation in the community matters to us personally.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/5">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Serving the Triangle Since 2018</h3>
                <p className="text-slate-400">Based in Rougemont, proudly serving the greater Raleigh-Durham-Chapel Hill area.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400">3</div>
                  <div className="text-slate-500 text-sm">Local Experts</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">20+</div>
                  <div className="text-slate-500 text-sm">Cities Covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">30</div>
                  <div className="text-slate-500 text-sm">Min Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Service Areas */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Complete Service Area</h2>
            <p className="text-slate-400">We serve the entire Triangle region and surrounding counties.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {localReps.map((rep) => (
              <div key={rep.region} className="bg-slate-900/50 rounded-xl p-6 border border-white/5">
                <h3 className={`font-bold mb-1 ${
                  rep.color === 'blue' ? 'text-blue-400' :
                  rep.color === 'green' ? 'text-green-400' :
                  'text-purple-400'
                }`}>{rep.region}</h3>
                <p className="text-slate-500 text-sm mb-4">Contact: {rep.name}</p>
                <ul className="space-y-2">
                  {rep.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2 text-slate-400 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            Don&apos;t see your city? Give us a call — we likely serve your area too!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Talk to Your Local Expert?</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Get a free inspection from someone who knows your neighborhood. No call centers, no runaround.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 text-lg"
            >
              Schedule Free Inspection
            </Link>
            <a
              href="tel:+19194758841"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all text-lg"
            >
              Call (919) 475-8841
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
