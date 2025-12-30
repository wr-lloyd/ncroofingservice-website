'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function GuttersPage() {
  const [showForm, setShowForm] = useState(false)

  const faqs = [
    {
      q: 'How do I know if I need new gutters?',
      a: 'Signs include visible cracks, rust, peeling paint, water pooling around your foundation, sagging gutters, or water marks beneath the gutters. If your gutters are over 20 years old, they may also need replacement.'
    },
    {
      q: 'What are seamless gutters?',
      a: 'Seamless gutters are custom-fabricated on-site to fit your home perfectly, with no joints except at corners and downspouts. This eliminates most leak points and creates a cleaner appearance.'
    },
    {
      q: 'Do I need gutter guards?',
      a: 'If you have trees near your home, gutter guards can save significant maintenance time and prevent clogs that lead to water damage. We offer several guard options depending on your situation and budget.'
    },
    {
      q: 'How often should gutters be cleaned?',
      a: 'Without guards, gutters should be cleaned at least twice a year — spring and fall. With quality guards, you may only need occasional inspection and minimal cleaning.'
    },
    {
      q: 'Can gutters be installed with a new roof?',
      a: 'Absolutely — this is the ideal time! We can ensure proper integration with drip edge and fascia, and bundling the work often saves on overall costs.'
    },
  ]

  const gutterTypes = [
    {
      name: 'Seamless Aluminum',
      desc: 'The most popular choice. Custom-fit to your home with no seams to leak.',
      features: ['No seams = fewer leaks', 'Multiple color options', '20+ year lifespan'],
      recommended: true,
    },
    {
      name: 'Copper Gutters',
      desc: 'Premium appearance that develops a beautiful patina over time.',
      features: ['Lifetime durability', 'Stunning aesthetics', 'No painting needed'],
      recommended: false,
    },
    {
      name: 'Galvanized Steel',
      desc: 'Heavy-duty option for areas with extreme weather or debris.',
      features: ['Extra strength', 'Handles heavy loads', 'Rust-resistant coating'],
      recommended: false,
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/services/heroes/gutters-hero-1920x1080.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-cyan-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/services" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-4 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Gutters & Gutter Guards
              </h1>
              <p className="text-slate-300 text-xl mb-6">
                Your gutters are the first line of defense for your foundation and landscaping. 
                We install seamless gutters that look great and protect your home for decades.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Seamless Installation
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free Estimate
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors shadow-lg"
                >
                  Get Free Estimate
                </button>
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

            {/* Info Card or Form */}
            <div>
              {showForm ? (
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Request Free Estimate</h3>
                  <p className="text-slate-600 mb-6">We&apos;ll measure your home and provide a detailed quote.</p>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white text-center px-6 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Continue to Form →
                  </Link>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">Why Gutters Matter</h3>
                  <div className="space-y-4">
                    {[
                      { icon: '💧', title: 'Foundation Protection', desc: 'Directs water away from your home\'s foundation' },
                      { icon: '🏠', title: 'Prevents Erosion', desc: 'Protects landscaping and prevents soil washout' },
                      { icon: '🛡️', title: 'Stops Water Damage', desc: 'Prevents fascia rot and basement flooding' },
                      { icon: '🎨', title: 'Curb Appeal', desc: 'Clean lines that complement your roofline' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <p className="text-white font-medium">{item.title}</p>
                          <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gutter Types */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Gutter Options</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We install several gutter types to match your needs and budget.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {gutterTypes.map((type) => (
              <div 
                key={type.name}
                className={`bg-white rounded-2xl p-8 border-2 transition-all ${
                  type.recommended 
                    ? 'border-cyan-400 shadow-lg shadow-cyan-500/10' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {type.recommended && (
                  <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{type.name}</h3>
                <p className="text-slate-600 mb-4">{type.desc}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gutter Guards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Stop Cleaning Forever</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Gutter Guard Systems
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Tired of climbing ladders to clean leaves and debris? Our gutter guard systems keep your gutters 
                flowing freely while eliminating dangerous maintenance.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Micro-Mesh Guards', desc: 'Finest filtration — blocks even pine needles and shingle grit' },
                  { title: 'Screen Guards', desc: 'Cost-effective protection for moderate debris areas' },
                  { title: 'Reverse Curve', desc: 'Uses surface tension to shed debris while capturing water' },
                ].map((guard, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold">{guard.title}</h3>
                      <p className="text-slate-600 text-sm">{guard.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Get Guard Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-50 to-slate-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    ROI Calculator
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Professional cleaning (2x/year)</span>
                      <span className="text-slate-900 font-medium">$300/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Over 20 years</span>
                      <span className="text-slate-900 font-medium">$6,000+</span>
                    </div>
                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Gutter guard investment</span>
                        <span className="text-cyan-600 font-bold">$1,500-2,500</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm text-center">
                  Plus: No more risky ladder climbing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Installation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Measure', desc: 'We measure your entire roofline for precise custom fabrication.' },
              { step: 2, title: 'Fabricate', desc: 'Gutters are formed on-site from continuous aluminum coils.' },
              { step: 3, title: 'Install', desc: 'Properly pitched and securely fastened to handle NC storms.' },
              { step: 4, title: 'Test', desc: 'We test water flow to ensure proper drainage away from your home.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
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

      {/* Bundle CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-cyan-100 text-sm font-medium mb-6">
            <span>💡</span> Pro Tip
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bundle Gutters with Your New Roof</h2>
          <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
            Getting a roof replacement? This is the perfect time to upgrade your gutters. 
            We can ensure seamless integration and often offer bundled pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cyan-50 text-cyan-700 px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
            >
              Get Bundled Quote
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


