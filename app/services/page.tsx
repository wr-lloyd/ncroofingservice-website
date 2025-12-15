import Link from 'next/link'

export const metadata = {
  title: 'Roofing Services | B&C Roofing and Repair | Rougemont NC',
  description: 'Professional roofing services: roof repair, replacement, FORTIFIED roofing, insurance claim support. GAF, Owens Corning, CertainTeed certified. Free inspections.',
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
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">Roofing Services</h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              From emergency repairs to complete replacements, we provide the highest level of service 
              and quality workmanship. Certified by GAF, Owens Corning, and CertainTeed.
            </p>
          </div>
        </div>
      </section>

      {/* Not Sure CTA */}
      <section className="py-8 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤔</span>
              <p className="text-white font-medium">Not sure what you need?</p>
            </div>
            <Link
              href="/start"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors"
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
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-slate-900/50 rounded-2xl p-8 border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 text-white`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-slate-400 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
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

      {/* Additional Services */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">We Also Provide</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Free Inspections', desc: 'Thorough roof assessment at no cost' },
              { title: 'Emergency Service', desc: '24/7 response for urgent issues' },
              { title: 'Commercial Roofing', desc: 'Flat roofs, TPO, EPDM systems' },
              { title: 'Gutter Services', desc: 'Installation, repair, and cleaning' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-white/5 text-center">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-slate-800 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm mb-6">Certified & Trusted By</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400">
            <span className="flex items-center gap-2">✓ GAF Certified</span>
            <span className="flex items-center gap-2">✓ Owens Corning</span>
            <span className="flex items-center gap-2">✓ CertainTeed</span>
            <span className="flex items-center gap-2">✓ FORTIFIED by IBHS</span>
            <span className="flex items-center gap-2">✓ BBB A+ Rated</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Schedule your free inspection and get an honest assessment from local experts you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 text-lg"
            >
              Start Your Roofing Journey
            </Link>
            <a
              href="tel:+19194758841"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all text-lg"
            >
              Call (919) 475-8841
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
