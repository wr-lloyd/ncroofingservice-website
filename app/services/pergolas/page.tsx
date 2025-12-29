'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PergolasPage() {
  const [showForm, setShowForm] = useState(false)

  const faqs = [
    {
      q: "What's the difference between a pergola and a covered patio?",
      a: "A pergola has an open lattice roof that provides partial shade and architectural interest, while a covered patio has a solid roof for full weather protection. We build both, and can help you decide which suits your lifestyle and home."
    },
    {
      q: "Can you attach a structure to my existing roof?",
      a: "Yes — roof tie-ins are one of our specialties. We properly flash and integrate new structures with your existing roofline to prevent leaks and ensure structural integrity. This is why having a roofing company handle these projects makes sense."
    },
    {
      q: "Do I need a permit for a pergola or deck roof?",
      a: "In most NC jurisdictions, yes. Structures over a certain size or attached to your home typically require permits. We handle the permit process and ensure all work meets local building codes."
    },
    {
      q: "What materials do you use for overhead structures?",
      a: "We use pressure-treated lumber, cedar, aluminum, and composite materials depending on your budget and aesthetic goals. For roofing, we can match your home's existing shingles or use metal, polycarbonate, or other options."
    },
    {
      q: "How long does a typical project take?",
      a: "Most pergolas take 2-4 days; covered patios and deck roofs typically take 1-2 weeks depending on size and complexity. We'll provide a detailed timeline during your consultation."
    },
    {
      q: "Can you add a roof to my existing pergola?",
      a: "Absolutely! We frequently upgrade existing pergolas with solid roofing, retractable canopies, or louvered systems. We'll assess the structure to ensure it can support the additional weight."
    },
  ]

  const structureTypes = [
    {
      name: 'Pergolas',
      desc: 'Open-air structures with slatted roofs that provide partial shade and define outdoor living spaces.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      features: ['Partial shade with airflow', 'Architectural character', 'Perfect for vines & plants', 'Customizable designs'],
      popular: true,
    },
    {
      name: 'Deck & Porch Roofs',
      desc: 'Solid roof extensions that protect your deck or porch from rain and sun while integrating with your home.',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      features: ['Full weather protection', 'Extends living space', 'Roof-integrated flashing', 'Matches existing shingles'],
      popular: false,
    },
    {
      name: 'Covered Patios',
      desc: 'Freestanding or attached structures with complete overhead coverage for year-round outdoor enjoyment.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      features: ['Full rain protection', 'Can include fans & lights', 'Multiple roof styles', 'Outdoor kitchen ready'],
      popular: false,
    },
  ]

  const benefits = [
    { icon: '🏠', title: 'Roof-Integrated', desc: 'Proper flashing and tie-ins prevent leaks at connection points' },
    { icon: '📐', title: 'Engineered Right', desc: 'Structures designed to handle NC wind and weather loads' },
    { icon: '🎨', title: 'Design Matched', desc: 'Materials and styles that complement your home\'s architecture' },
    { icon: '💧', title: 'Drainage Planning', desc: 'Integrated with your gutter system for proper water management' },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-emerald-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/services" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-4 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pergolas & Covered Spaces
              </h1>
              <p className="text-slate-300 text-xl mb-6">
                Transform your outdoor space with roof-adjacent structures built by roofing experts. 
                From elegant pergolas to full deck roofs — engineered to integrate seamlessly with your home.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Roof-Integrated
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free Design Consultation
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors shadow-lg"
                >
                  Get Free Consultation
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
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Request Design Consultation</h3>
                  <p className="text-slate-600 mb-6">Tell us about your vision and we&apos;ll help bring it to life.</p>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center px-6 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Continue to Form →
                  </Link>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">Why Choose a Roofer for This?</h3>
                  <div className="space-y-4">
                    {benefits.map((item, idx) => (
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

      {/* Structure Types */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Build</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From open-air pergolas to fully covered outdoor rooms — structures designed to complement your home and lifestyle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {structureTypes.map((type) => (
              <div 
                key={type.name}
                className={`bg-white rounded-2xl overflow-hidden border-2 transition-all hover:shadow-xl ${
                  type.popular 
                    ? 'border-emerald-400 shadow-lg shadow-emerald-500/10' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${type.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  {type.popular && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{type.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{type.desc}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Full-Service Outdoor Building</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                New Builds, Extensions & Repairs
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Whether you&apos;re dreaming of a new outdoor living space or need repairs to an existing structure, 
                we handle the entire project — from design through completion.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Custom Pergolas', desc: 'Designed and built to your specifications with premium materials' },
                  { title: 'Roof Extensions & Tie-Ins', desc: 'Extend your roofline over decks, porches, or patios' },
                  { title: 'Covered Patio Construction', desc: 'Complete outdoor rooms with solid roofing and optional enclosures' },
                  { title: 'Repairs & Upgrades', desc: 'Fix storm damage, upgrade existing structures, or add solid roofing to pergolas' },
                ].map((service, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold">{service.title}</h3>
                      <p className="text-slate-600 text-sm">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Discuss Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-slate-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔧</span>
                    Why Roofers Build Better Outdoor Structures
                  </h4>
                  <div className="space-y-4 text-sm">
                    {[
                      { point: 'Proper roof tie-ins', detail: 'We know how to connect to your existing roof without creating leak points' },
                      { point: 'Flashing expertise', detail: 'Critical waterproofing details that general contractors often miss' },
                      { point: 'Drainage integration', detail: 'We connect to or extend your gutter system properly' },
                      { point: 'Load calculations', detail: 'Structures engineered for NC weather including wind and snow loads' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="text-slate-900 font-medium">{item.point}</span>
                          <p className="text-slate-500">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Consultation', desc: 'We visit your property and discuss your vision, needs, and budget.' },
              { step: 2, title: 'Design', desc: 'We create a custom design that complements your home and meets code.' },
              { step: 3, title: 'Permitting', desc: 'We handle all permit applications and inspections.' },
              { step: 4, title: 'Build', desc: 'Expert construction with attention to every detail.' },
              { step: 5, title: 'Final Walk', desc: 'We review the completed project together and ensure you\'re thrilled.' },
            ].map((item, idx, arr) => (
              <div key={item.step} className="relative text-center">
                {/* Connector line */}
                {idx < arr.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-emerald-200"></div>
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Material Options</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We work with a range of materials to match your budget, style, and maintenance preferences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Frame Materials */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                Frame Materials
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Pressure-Treated Lumber', desc: 'Affordable and durable, ideal for painted structures', tag: 'Most Affordable' },
                  { name: 'Cedar', desc: 'Natural beauty with excellent rot resistance', tag: 'Natural Beauty' },
                  { name: 'Aluminum', desc: 'Zero maintenance, modern aesthetic, lifetime durability', tag: 'Low Maintenance' },
                  { name: 'Composite', desc: 'Wood look without the upkeep, won\'t rot or warp', tag: 'Best of Both' },
                ].map((material, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-4 p-3 bg-white rounded-lg">
                    <div>
                      <h4 className="text-slate-900 font-medium">{material.name}</h4>
                      <p className="text-slate-600 text-sm">{material.desc}</p>
                    </div>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full whitespace-nowrap">
                      {material.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Roofing Options */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                Roofing Options
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Asphalt Shingles', desc: 'Match your home\'s existing roof perfectly', tag: 'Seamless Match' },
                  { name: 'Standing Seam Metal', desc: 'Modern look with exceptional longevity', tag: 'Premium Choice' },
                  { name: 'Polycarbonate Panels', desc: 'Let light through while blocking UV and rain', tag: 'Light + Protection' },
                  { name: 'Open Lattice', desc: 'Classic pergola style with partial shade', tag: 'Traditional' },
                ].map((material, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-4 p-3 bg-white rounded-lg">
                    <div>
                      <h4 className="text-slate-900 font-medium">{material.name}</h4>
                      <p className="text-slate-600 text-sm">{material.desc}</p>
                    </div>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full whitespace-nowrap">
                      {material.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-slate-200">
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-emerald-100 text-sm font-medium mb-6">
            <span>💡</span> Perfect Timing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Building with Your New Roof?</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Planning a roof replacement? It&apos;s the ideal time to add a pergola, deck roof, or covered patio. 
            We can design and build both projects together for seamless integration and bundled savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
            >
              Start Your Project
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

