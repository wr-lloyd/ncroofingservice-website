import Link from 'next/link'

export const metadata = {
  title: 'Roofing & Exterior Services | NC Roofing Service and Repair | Rougemont NC',
  description: 'Professional roofing and exterior services: roof repair, replacement, FORTIFIED roofing, gutters, siding, soffit & fascia. GAF, Owens Corning, CertainTeed certified.',
}

const services = [
  {
    title: 'Roof Repair',
    slug: 'roof-repair',
    description: 'Fast, reliable repairs from leaks to storm damage. 24/7 emergency service available.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-amber-500 to-amber-600',
    features: ['Leak detection & repair', 'Shingle replacement', '24/7 emergency service'],
  },
  {
    title: 'Roof Replacement',
    slug: 'roof-replacement',
    description: 'Complete roof replacement with premium materials and extended warranties up to 50 years.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
    features: ['GAF, Owens Corning, CertainTeed', 'Up to 50-year warranties', 'Clean, fast installation'],
  },
  {
    title: 'Storm Damage & Insurance',
    slug: 'storm-damage-insurance',
    description: 'Storm damage assessment and insurance claim support. We document, advocate, and repair.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'from-blue-600 to-blue-700',
    features: ['Free damage assessment', 'Insurance claim support', 'Adjuster meeting assistance'],
  },
  {
    title: 'FORTIFIED Roofing',
    slug: 'fortified-roofing',
    description: 'Storm-resistant roofing that may qualify for insurance discounts. IBHS certified.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'from-green-500 to-green-600',
    features: ['Insurance discounts', 'Hurricane/wind resistant', 'Third-party verified'],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with roof image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598228723793-52759bba239c?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">Complete Home Protection</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">
              Roofing & Exterior{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8102E] to-[#a50d25]">Services</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              From emergency repairs to complete replacements, plus gutters, siding, and more. 
              We protect your entire home envelope with expert craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Not Sure CTA */}
      <section className="py-8 bg-[#C8102E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤔</span>
              <p className="text-white font-medium">Not sure what you need?</p>
            </div>
            <Link
              href="/start"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-6 py-3 rounded-[2px] font-semibold transition-colors"
            >
              Start Here — We&apos;ll Guide You
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#C8102E]/30 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-md`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#C8102E] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-[#C8102E] font-medium group-hover:text-[#a50d25] transition-colors">
                      Learn More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exterior Systems Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Exterior Systems
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
              Beyond the Roof
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Your roof works together with gutters, siding, and fascia to protect your home. 
              We service the complete exterior system — often during the same visit.
            </p>
          </div>

          {/* Image Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Gutters Card */}
            <Link href="/services/gutters" className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/images/services/cards/gutters-card-800x600.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/20 group-hover:via-slate-900/60 transition-all duration-300" />
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
                  Popular Add-On
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Gutters & Guards</h3>
                </div>
                <p className="text-slate-300 mb-4">Seamless aluminum gutters, downspouts, and leaf protection systems. Properly sized and pitched to protect your foundation.</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-md">Seamless Install</span>
                    <span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-md">Leaf Guards</span>
                  </div>
                  <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 inline-flex items-center gap-1 transition-colors">
                    Learn More
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Pergolas Card */}
            <Link href="/services/pergolas" className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/images/services/cards/pergolas-card-800x600.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/20 group-hover:via-slate-900/60 transition-all duration-300" />
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
                  Popular Add-On
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Pergolas & Covered Spaces</h3>
                </div>
                <p className="text-slate-300 mb-4">Custom pergolas, deck roofs, and covered patios. Designed by roofers to ensure perfect integration and zero leaks.</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-md">Custom Build</span>
                    <span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-md">Roof-Integrated</span>
                  </div>
                  <span className="text-[#C8102E] font-semibold group-hover:text-[#a50d25] inline-flex items-center gap-1 transition-colors">
                    Learn More
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Soffit & Fascia Card */}
            <Link href="/services/soffit-fascia" className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/images/services/cards/soffit-fascia-card-800x600.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/20 group-hover:via-slate-900/60 transition-all duration-300" />
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
                  With Every Roof
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Soffit & Fascia</h3>
                </div>
                <p className="text-slate-300 mb-4">Critical for attic ventilation and preventing water damage. We inspect and repair these on every roof job.</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-md">Ventilation</span>
                    <span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-md">Protection</span>
                  </div>
                  <span className="text-amber-400 font-semibold group-hover:text-amber-300 inline-flex items-center gap-1 transition-colors">
                    Learn More
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Value Proposition Bar */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Bundle & Save</p>
                  <p className="text-slate-400 text-xs">Combine with roof work for better pricing</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C8102E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Always Inspected</p>
                  <p className="text-slate-400 text-xs">Checked during every roof inspection</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Insurance Claims</p>
                  <p className="text-slate-400 text-xs">Often covered alongside roof damage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Quick Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Additional Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Free Inspections', desc: 'Complete roof & exterior assessment', icon: '🔍' },
              { title: '24/7 Emergency', desc: 'Urgent response for active leaks', icon: '⚡' },
              { title: 'Commercial', desc: 'Flat roofs, TPO, EPDM systems', icon: '🏢' },
              { title: 'Skylights', desc: 'Installation, repair, and replacement', icon: '☀️' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-slate-900 font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm mb-6">Certified & Trusted By</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-700">
            <span className="flex items-center gap-2">✓ GAF Certified</span>
            <span className="flex items-center gap-2">✓ Owens Corning</span>
            <span className="flex items-center gap-2">✓ CertainTeed</span>
            <span className="flex items-center gap-2">✓ FORTIFIED by IBHS</span>
            <span className="flex items-center gap-2">✓ BBB A+ Rated</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#C8102E] to-[#a50d25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Schedule your free inspection and get an honest assessment from local experts you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-8 py-4 rounded-[2px] font-semibold transition-all hover:scale-105 text-lg"
            >
              Start Your Roofing Journey
            </Link>
            <a
              href="tel:+19194758841"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-all text-lg"
            >
              Call (919) 475-8841
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
