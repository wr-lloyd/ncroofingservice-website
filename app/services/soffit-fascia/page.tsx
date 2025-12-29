'use client'

import Link from 'next/link'

export default function SoffitFasciaPage() {
  const faqs = [
    {
      q: 'What is soffit and fascia?',
      a: 'Soffit is the material covering the underside of your roof overhang (eaves). Fascia is the vertical board at the edge of your roof where gutters attach. Together they protect your roof structure and provide essential attic ventilation.'
    },
    {
      q: 'Why is soffit ventilation important?',
      a: 'Vented soffit allows fresh air into your attic while hot, moist air exits through ridge vents. This circulation prevents moisture buildup (which causes mold and rot), reduces ice dams, and extends shingle life by keeping your roof deck cooler.'
    },
    {
      q: 'How do I know if my fascia needs replacing?',
      a: 'Signs include peeling paint, visible rot or soft spots, water stains, sagging gutters (fascia can\'t support them), or pest damage. We inspect fascia during every roof job and recommend replacement when needed.'
    },
    {
      q: 'Is soffit and fascia replacement included in a new roof?',
      a: 'We inspect them on every roof job. Minor repairs may be included, but significant rot or damage requires separate work. We always explain what\'s needed and why before proceeding.'
    },
    {
      q: 'What materials are best for soffit and fascia?',
      a: 'Aluminum and vinyl are most popular — they\'re durable, low-maintenance, and resist rot. Wood offers a traditional look but requires more upkeep. We\'ll recommend based on your home\'s style and budget.'
    },
  ]

  const components = [
    {
      name: 'Soffit',
      description: 'The underside covering of your roof overhang',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      functions: [
        'Provides crucial attic ventilation',
        'Keeps pests out of your attic',
        'Protects rafters from weather',
        'Gives a finished look to eaves',
      ],
      signs: [
        'Visible cracks or holes',
        'Peeling or flaking',
        'Signs of pest activity',
        'Moisture or mold stains',
      ],
    },
    {
      name: 'Fascia',
      description: 'The vertical board at the roof edge',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      functions: [
        'Supports your gutters',
        'Seals roof edge from water',
        'Protects roof rafters',
        'Provides clean finished edge',
      ],
      signs: [
        'Soft or rotting wood',
        'Peeling or bubbling paint',
        'Sagging gutters',
        'Animal or insect damage',
      ],
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-amber-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-4 transition-colors text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Soffit & Fascia
            </h1>
            <p className="text-slate-300 text-xl mb-6">
              The unsung heroes of your roofing system. Properly functioning soffit and fascia 
              protect your roof structure and keep your attic properly ventilated.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Inspected on Every Roof Job
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Ventilation Experts
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors shadow-lg"
              >
                Get Free Inspection
              </Link>
              <a
                href="tel:+19194758841"
                className="flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white px-6 py-4 rounded-xl font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (919) 475-8841
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Soffit & Fascia */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Understanding Your Roof Edge</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Most homeowners don&apos;t think about soffit and fascia until there&apos;s a problem. 
              Here&apos;s what these essential components do and how to know when they need attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {components.map((component) => (
              <div key={component.name} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* Header */}
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white">
                      {component.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{component.name}</h3>
                      <p className="text-amber-100">{component.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        What It Does
                      </h4>
                      <ul className="space-y-2">
                        {component.functions.map((func, idx) => (
                          <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            {func}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Warning Signs
                      </h4>
                      <ul className="space-y-2">
                        {component.signs.map((sign, idx) => (
                          <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventilation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Critical for Roof Health</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Why Attic Ventilation Matters
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Your soffit isn&apos;t just cosmetic — vented soffit panels are essential for proper attic airflow. 
                Without adequate ventilation, your roof can suffer from:
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { problem: 'Heat Buildup', effect: 'Premature shingle deterioration and higher cooling bills', icon: '🔥' },
                  { problem: 'Moisture Accumulation', effect: 'Mold growth, wood rot, and structural damage', icon: '💧' },
                  { problem: 'Ice Dams', effect: 'Water backup under shingles causing leaks', icon: '🧊' },
                  { problem: 'Reduced Shingle Life', effect: 'Voided warranties and early replacement', icon: '⏰' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-slate-900 font-semibold">{item.problem}</h3>
                      <p className="text-slate-600 text-sm">{item.effect}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-slate-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Balanced Ventilation System</h3>
              
              {/* Visual Diagram */}
              <div className="relative bg-white rounded-2xl p-6 shadow-inner mb-6">
                <div className="text-center">
                  {/* Ridge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      Hot Air Exits (Ridge Vent)
                    </div>
                  </div>
                  
                  {/* House */}
                  <div className="w-48 h-32 mx-auto relative">
                    <div className="absolute inset-x-0 top-0 h-16 bg-amber-200 clip-triangle"></div>
                    <div className="absolute inset-x-4 bottom-0 h-20 bg-slate-200 rounded-b-lg"></div>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-12 bg-amber-400 rounded-t-lg"></div>
                  </div>
                  
                  {/* Soffit */}
                  <div className="mt-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Cool Air Enters (Soffit Vents)
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 text-sm text-center">
                Cool air enters through soffit vents, rises as it warms, and exits through ridge vents — 
                creating continuous airflow that protects your roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Material Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Aluminum', 
                desc: 'The most popular choice. Durable, rust-proof, and available in many colors.',
                pros: ['Won\'t rot or rust', 'Many colors available', 'Low maintenance'],
                badge: 'Most Popular'
              },
              { 
                name: 'Vinyl', 
                desc: 'Budget-friendly option that resists moisture and never needs painting.',
                pros: ['Most affordable', 'Easy to install', 'Moisture resistant'],
                badge: 'Budget Friendly'
              },
              { 
                name: 'Wood', 
                desc: 'Traditional look for historic or custom homes. Requires maintenance.',
                pros: ['Classic aesthetics', 'Paintable any color', 'Natural appearance'],
                badge: 'Classic Look'
              },
            ].map((material) => (
              <div key={material.name} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full mb-4">
                  {material.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{material.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{material.desc}</p>
                <ul className="space-y-2">
                  {material.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <span className="text-slate-900 font-medium pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-amber-100 text-sm font-medium mb-6">
            <span>🔍</span> We Check Every Time
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Soffit & Fascia Inspection Included</h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Every roof inspection includes a thorough check of your soffit, fascia, and attic ventilation. 
            We&apos;ll let you know if anything needs attention — no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-amber-700 px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
            >
              Schedule Free Inspection
            </Link>
            <a
              href="tel:+19194758841"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Call (919) 475-8841
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

