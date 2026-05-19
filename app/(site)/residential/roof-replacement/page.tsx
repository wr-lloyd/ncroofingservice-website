'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ScheduleInspection, VisualizerCard } from '@/components/tools'

export default function RoofReplacementPage() {
  const [showScheduler, setShowScheduler] = useState(false)

  const faqs = [
    {
      q: 'How long does a roof replacement take?',
      a: 'Most residential roof replacements are completed in 1-3 days, depending on size, complexity, and weather. We\'ll give you a specific timeline before starting.'
    },
    {
      q: 'What happens to my old shingles?',
      a: 'We handle complete tear-off and disposal. All debris is removed and we do a thorough magnetic sweep for nails. Your property will be cleaner than when we arrived.'
    },
    {
      q: 'Which shingle brand is best?',
      a: 'We\'re certified by GAF, Owens Corning, and CertainTeed — all excellent brands. Each has different styles and warranties. We\'ll help you choose based on your priorities and budget.'
    },
    {
      q: 'What warranty do I get?',
      a: 'As a certified installer for all three major brands, we can offer extended manufacturer warranties up to 50 years that include workmanship coverage — warranties most contractors can\'t offer.'
    },
    {
      q: 'How much does a new roof cost?',
      a: 'Costs vary based on roof size, pitch, material choice, and complexity. Rather than guess, we provide free inspections with detailed, itemized quotes. No surprises.'
    },
    {
      q: 'Do you offer financing?',
      a: 'We can discuss payment options during your consultation. Many customers also use insurance for storm-related replacements.'
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background with roof image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/residential" className="inline-flex items-center gap-2 text-[#C8102E] hover:text-[#a50d25] mb-4 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Residential Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Roof Replacement
              </h1>
              <p className="text-slate-300 text-xl mb-6">
                A new roof is a major investment. We make it smooth with premium materials, 
                expert installation, and warranties that actually protect you.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Triple Certified
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8102E]/20 text-[#C8102E] rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Up to 50-Year Warranty
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowScheduler(true)}
                  className="flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white px-6 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
                >
                  Get Free Quote
                </button>
                <a
                  href="tel:+13367663464"
                  className="flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white px-6 py-4 rounded-[2px] font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (336) ROOFING
                </a>
              </div>
            </div>

            <div>
              {showScheduler ? (
                <ScheduleInspection />
              ) : (
                <VisualizerCard />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Replace with NC Roofing Service</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Warranties</h3>
              <p className="text-slate-600">Our certifications unlock manufacturer warranties up to 50 years — including workmanship coverage.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#C8102E]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Complete Transparency</h3>
              <p className="text-slate-600">Detailed quotes with every line item explained. No hidden fees, no surprises, no high-pressure tactics.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Clean, Fast Work</h3>
              <p className="text-slate-600">Most roofs done in 1-3 days. We protect your property, clean up daily, and do a final walk-through together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Complete Roofing System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              More Than Just Shingles
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              At NC Roofing Service, we believe in the <span className="text-slate-900 font-semibold">complete roofing system</span> approach. 
              While some contractors cut corners, we install all 9 essential components that manufacturers require for maximum protection and warranty coverage.
            </p>
          </div>

          {/* 9 Parts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* 1. Roof Deck */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#C8102E]/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-colors">
                  <span className="text-[#C8102E] font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">Roof Deck</h3>
                  <p className="text-slate-600 text-sm">The structural base (plywood or OSB) that everything attaches to. Must be solid, dry, and properly fastened.</p>
                </div>
              </div>
            </div>

            {/* 2. Drip Edge */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#C8102E]/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-colors">
                  <span className="text-[#C8102E] font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">Drip Edge</h3>
                  <p className="text-slate-600 text-sm">Metal flashing along eaves and rakes to direct water away from the deck and fascia, preventing rot.</p>
                </div>
              </div>
            </div>

            {/* 3. Ice & Water Shield */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#C8102E]/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-colors">
                  <span className="text-[#C8102E] font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">Ice & Water Shield</h3>
                  <p className="text-slate-600 text-sm">Self-adhering waterproof membrane in valleys, eaves, and penetrations to prevent leaks from ice dams and wind-driven rain.</p>
                </div>
              </div>
            </div>

            {/* 4. Underlayment */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#C8102E]/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-colors">
                  <span className="text-[#C8102E] font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">Underlayment</h3>
                  <p className="text-slate-600 text-sm">A protective layer over the entire deck (synthetic or felt) providing secondary water resistance beneath the shingles.</p>
                </div>
              </div>
            </div>

            {/* 5. Flashing */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#C8102E]/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-colors">
                  <span className="text-[#C8102E] font-bold text-lg">5</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">Flashing</h3>
                  <p className="text-slate-600 text-sm">Custom-installed metal at penetrations and transitions (chimneys, walls, skylights, valleys) to keep water out.</p>
                </div>
              </div>
            </div>

            {/* 6. Starter Strip */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#C8102E]/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-colors">
                  <span className="text-[#C8102E] font-bold text-lg">6</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">Starter Strip</h3>
                  <p className="text-slate-600 text-sm">The first row at eaves and rakes that seals the roof edge and helps shingles resist wind uplift.</p>
                </div>
              </div>
            </div>

            {/* 7. Shingles */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#C8102E]/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-colors">
                  <span className="text-[#C8102E] font-bold text-lg">7</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">Shingles</h3>
                  <p className="text-slate-600 text-sm">The primary weather-shedding layer and most visible component — what most people think of as &quot;the roof.&quot;</p>
                </div>
              </div>
            </div>

            {/* 8. Ventilation */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#C8102E]/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-colors">
                  <span className="text-[#C8102E] font-bold text-lg">8</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">Ventilation</h3>
                  <p className="text-slate-600 text-sm">Balanced airflow (soffit + ridge vents) to regulate attic temperature, prevent moisture, and extend roof life.</p>
                </div>
              </div>
            </div>

            {/* 9. Ridge Cap */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#C8102E]/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-colors">
                  <span className="text-[#C8102E] font-bold text-lg">9</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">Ridge Cap</h3>
                  <p className="text-slate-600 text-sm">Specialized shingles at the roof peak to protect the ridge and allow proper exhaust ventilation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why It Matters Callout */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Why This Matters</h3>
                <p className="text-slate-700 text-lg mb-4">
                  Most roof failures don&apos;t happen because of bad shingles — they happen because one of these system components was <span className="text-slate-900 font-semibold">skipped, rushed, or installed incorrectly</span>.
                </p>
                <p className="text-[#C8102E] font-medium">
                  A roof only performs as well as its weakest part. We don&apos;t cut corners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Premium Materials</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            We&apos;re certified installers for the three biggest names in roofing. Each offers different styles, colors, and warranty options.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'GAF', desc: 'America\'s #1 shingle brand. Timberline HDZ is their most popular line.', color: 'from-blue-600 to-blue-700' },
              { name: 'Owens Corning', desc: 'Known for durability and their signature TruDefinition colors.', color: 'from-pink-600 to-pink-700' },
              { name: 'CertainTeed', desc: 'Premium options with excellent color variety and Landmark series.', color: 'from-green-600 to-green-700' },
            ].map((brand) => (
              <div key={brand.name} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className={`w-16 h-16 bg-gradient-to-br ${brand.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="text-white font-bold">{brand.name.slice(0, 2).toUpperCase()}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{brand.name}</h3>
                <p className="text-slate-600">{brand.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available in Your Area */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-slate-900 text-center mb-6">Roof Replacement Available In</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Raleigh', 'Durham', 'Cary', 'Chapel Hill'].map((city) => (
              <Link 
                key={city}
                href={`/locations/${city.toLowerCase().replace(' ', '-')}-nc/roof-replacement`}
                className="px-4 py-2 bg-slate-100 hover:bg-brand-red/10 text-slate-700 hover:text-brand-red rounded-lg text-sm transition-colors"
              >
                {city}, NC
              </Link>
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
              <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
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

      {/* Related Services & Resources */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Related Services & Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/residential/storm-damage" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-red/30 transition-colors group">
              <h3 className="font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">Storm Damage Repair</h3>
              <p className="text-slate-600 text-sm">Insurance claim help and emergency repairs after severe weather.</p>
            </Link>
            <Link href="/residential/fortified-roofing" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-red/30 transition-colors group">
              <h3 className="font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">FORTIFIED Roofing</h3>
              <p className="text-slate-600 text-sm">Hurricane-resistant roofs with potential insurance discounts.</p>
            </Link>
            <Link href="/resources/roof-replacement-cost-guide" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-red/30 transition-colors group">
              <h3 className="font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">Cost Guide</h3>
              <p className="text-slate-600 text-sm">Detailed guide to roof replacement costs in North Carolina.</p>
            </Link>
            <Link href="/certifications" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-red/30 transition-colors group">
              <h3 className="font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">Our Certifications</h3>
              <p className="text-slate-600 text-sm">Why our certifications mean better warranties for you.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#C8102E] to-[#a50d25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for a New Roof?</h2>
          <p className="text-white/80 text-lg mb-8">Get a free inspection and detailed quote. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-8 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:+13367663464"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Call (336) ROOFING
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
