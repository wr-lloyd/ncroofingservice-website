'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SidingPage() {
  const [activeType, setActiveType] = useState<string | null>(null)

  const faqs = [
    {
      q: 'How do I know if my siding needs replacement?',
      a: 'Signs include warping, cracking, fading that won\'t clean, rot (wood siding), bubbling or blistering, loose or missing pieces, and increased energy bills. If you\'re painting more than every 5-7 years, replacement may be more economical.'
    },
    {
      q: 'Is storm-damaged siding covered by insurance?',
      a: 'Yes! Hail, wind, and fallen debris damage are typically covered by homeowner\'s insurance. We help document the damage and work with your adjuster to ensure fair compensation.'
    },
    {
      q: 'How long does siding installation take?',
      a: 'Most homes can be completed in 3-7 days depending on size and complexity. We\'ll give you a specific timeline during your estimate.'
    },
    {
      q: 'What\'s the best siding for North Carolina weather?',
      a: 'Vinyl and fiber cement both perform excellently in NC. Vinyl handles humidity well and is low maintenance. Fiber cement offers superior durability and a more premium look.'
    },
    {
      q: 'Can you match my existing siding for repairs?',
      a: 'In most cases, yes. We maintain relationships with suppliers and can often match discontinued profiles. For older siding, we\'ll show you options and find the closest match.'
    },
  ]

  const sidingTypes = [
    {
      id: 'vinyl',
      name: 'Vinyl Siding',
      tagline: 'Affordable & Low Maintenance',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      color: 'from-blue-500 to-blue-600',
      description: 'The most popular choice for NC homes. Modern vinyl siding is durable, energy-efficient, and comes in hundreds of colors and styles.',
      pros: ['Most affordable option', 'Never needs painting', 'Resists moisture & insects', 'Wide variety of styles'],
      cons: ['Can crack in extreme cold', 'May fade over 15-20 years'],
      lifespan: '20-40 years',
      maintenance: 'Occasional washing',
    },
    {
      id: 'fiber-cement',
      name: 'Fiber Cement (James Hardie)',
      tagline: 'Premium Durability',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      color: 'from-emerald-500 to-emerald-600',
      description: 'The gold standard for durability. James Hardie fiber cement resists fire, termites, rot, and extreme weather while offering authentic wood-grain textures.',
      pros: ['Fire resistant (non-combustible)', 'Termite & rot proof', 'Holds paint 2x longer', 'Authentic wood appearance'],
      cons: ['Higher initial cost', 'Requires professional install'],
      lifespan: '50+ years',
      maintenance: 'Repaint every 15-20 years',
    },
    {
      id: 'wood',
      name: 'Wood Siding',
      tagline: 'Classic Beauty',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      color: 'from-amber-500 to-amber-600',
      description: 'Nothing matches the natural beauty of real wood. Cedar and redwood offer natural insect resistance and can be painted or stained any color.',
      pros: ['Unmatched aesthetics', 'Natural insulation', 'Eco-friendly & renewable', 'Adds home value'],
      cons: ['Requires regular maintenance', 'Susceptible to moisture/insects'],
      lifespan: '20-40 years with maintenance',
      maintenance: 'Seal/paint every 3-7 years',
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-emerald-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-4 transition-colors text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siding Repair & Replacement
            </h1>
            <p className="text-slate-300 text-xl mb-6">
              Your siding is your home&apos;s armor against the elements — and a major part of its curb appeal. 
              We repair storm damage and install premium siding that lasts.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Storm Damage Experts
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Insurance Claim Help
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white px-6 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+19194758841"
                className="flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white px-6 py-4 rounded-[2px] font-semibold transition-colors"
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

      {/* Storm Damage Banner */}
      <section className="py-8 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">⚡</span>
              <div>
                <p className="text-white font-bold text-lg">Storm Damage? Your Insurance May Cover It</p>
                <p className="text-orange-100 text-sm">Hail, wind, and debris damage are typically covered. We help with the entire claim process.</p>
              </div>
            </div>
            <Link
              href="/services/storm-damage-insurance"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-6 py-3 rounded-[2px] font-semibold transition-colors whitespace-nowrap"
            >
              Learn About Claims
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Siding Types */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Siding Options</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We install and repair all major siding types. Click to explore which option is right for your home.
            </p>
          </div>

          {/* Siding Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sidingTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(activeType === type.id ? null : type.id)}
                className={`text-left bg-white rounded-2xl overflow-hidden border-2 transition-all ${
                  activeType === type.id 
                    ? 'border-emerald-400 shadow-lg shadow-emerald-500/10' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div 
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url('${type.image}')` }}
                />
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${type.color} text-white text-xs font-bold rounded-full mb-3`}>
                    {type.tagline}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{type.name}</h3>
                  <p className="text-slate-600 text-sm mb-3">{type.description}</p>
                  <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                    {activeType === type.id ? 'Click to collapse' : 'Click for details'}
                    <svg className={`w-4 h-4 transition-transform ${activeType === type.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Expanded Details */}
          {activeType && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg animate-in slide-in-from-top-4 duration-300">
              {sidingTypes.filter(t => t.id === activeType).map((type) => (
                <div key={type.id} className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.name}</h3>
                    <p className="text-slate-600 mb-6">{type.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Lifespan</p>
                        <p className="text-slate-900 font-bold">{type.lifespan}</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Maintenance</p>
                        <p className="text-slate-900 font-bold">{type.maintenance}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-green-600 font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Pros
                      </h4>
                      <ul className="space-y-2">
                        {type.pros.map((pro, idx) => (
                          <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-amber-600 font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Considerations
                      </h4>
                      <ul className="space-y-2">
                        {type.cons.map((con, idx) => (
                          <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                            <span className="text-amber-500 mt-1">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Siding Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Quality Siding Matters</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Siding isn&apos;t just about looks — it&apos;s your home&apos;s protective envelope working alongside your roof.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Weather Protection', desc: 'Shields your home from rain, wind, hail, and UV damage' },
              { icon: '🌡️', title: 'Energy Efficiency', desc: 'Insulated siding can reduce heating/cooling costs 20%+' },
              { icon: '🏠', title: 'Curb Appeal', desc: 'New siding can transform your home\'s appearance instantly' },
              { icon: '💰', title: 'Home Value', desc: 'Siding replacement offers 70-80% ROI at resale' },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center p-6 bg-slate-50 rounded-2xl">
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-slate-900 font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Installation Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Inspect', desc: 'Assess existing siding and wall condition' },
              { step: 2, title: 'Remove', desc: 'Careful removal of old siding and inspection of sheathing' },
              { step: 3, title: 'Prep', desc: 'Install house wrap and any needed repairs' },
              { step: 4, title: 'Install', desc: 'Precise installation with proper ventilation' },
              { step: 5, title: 'Detail', desc: 'Trim, caulk, and final walkthrough' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-[#C8102E] rounded-[2px] flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#C8102E] to-[#a50d25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Home&apos;s Exterior?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free estimate and see what new siding could do for your home&apos;s protection and appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-8 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+19194758841"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Call (919) 475-8841
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}





