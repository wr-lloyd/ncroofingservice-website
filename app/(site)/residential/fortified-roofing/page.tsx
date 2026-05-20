'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ScheduleInspection, VisualizerCard } from '@/components/tools'
import { OFFICE_PHONE } from '@/lib/site'

export default function FortifiedRoofingPage() {
  const [showScheduler, setShowScheduler] = useState(false)

  const levels = [
    {
      name: 'FORTIFIED Roof',
      desc: 'The foundation — focuses on the roof covering, sealed roof deck, and edge protection.',
      features: ['Sealed roof deck', 'Enhanced edge metal', 'Drip edge protection', 'High-wind shingles'],
    },
    {
      name: 'FORTIFIED Silver',
      desc: 'Adds protection for openings — windows, doors, and attached structures.',
      features: ['All Roof features', 'Opening protection', 'Garage door reinforcement', 'Gable end bracing'],
    },
    {
      name: 'FORTIFIED Gold',
      desc: 'The highest level — adds continuous load path connections throughout the home.',
      features: ['All Silver features', 'Roof-to-wall connections', 'Wall-to-foundation ties', 'Full structural upgrade'],
    },
  ]

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Insurance Discounts',
      desc: 'Many insurance companies offer significant premium discounts for FORTIFIED-designated homes.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Storm Resistance',
      desc: 'FORTIFIED homes are proven to perform better in hurricanes, tornadoes, and severe storms.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Increased Home Value',
      desc: 'FORTIFIED designation is a selling point that can increase your home\'s resale value.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Third-Party Verified',
      desc: 'Independent evaluators verify the work meets IBHS standards. It\'s not just our word.',
    },
  ]

  const faqs = [
    {
      q: 'What is FORTIFIED?',
      a: 'FORTIFIED is a voluntary construction and re-roofing program developed by the Insurance Institute for Business & Home Safety (IBHS). It goes beyond code to create homes that can better withstand severe weather.'
    },
    {
      q: 'How much do insurance discounts save?',
      a: 'Discounts vary by insurer and location, but some homeowners save 15-45% on their wind/hail premiums. Check with your insurance agent for specific numbers.'
    },
    {
      q: 'Can I upgrade my existing roof to FORTIFIED?',
      a: 'Yes! When we replace your roof, we can incorporate FORTIFIED Roof standards. Some upgrades may also be possible without a full replacement.'
    },
    {
      q: 'How long does the designation last?',
      a: 'FORTIFIED designations are valid for 5 years, after which they can be renewed through a re-evaluation.'
    },
    {
      q: 'Is FORTIFIED worth the extra cost?',
      a: 'For most homeowners in storm-prone areas, yes. The insurance savings often offset the additional cost, plus you get better protection and resale value.'
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
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-slate-900/90 to-slate-900/95" />
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
              
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  IBHS Certified
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                FORTIFIED Roofing
              </h1>
              <p className="text-slate-300 text-xl mb-6">
                Build beyond code. FORTIFIED roofing systems are engineered to withstand hurricanes, 
                high winds, and hail — while potentially saving you money on insurance.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Insurance Discounts
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8102E]/20 text-[#C8102E] rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Storm Resistant
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowScheduler(true)}
                  className="flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white px-6 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
                >
                  Learn More About FORTIFIED
                </button>
                <a
                  href={`tel:${OFFICE_PHONE}`}
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
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Choose FORTIFIED</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-200">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">FORTIFIED Designation Levels</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            FORTIFIED has three levels of designation. Most homeowners start with FORTIFIED Roof during a roof replacement.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((level, idx) => (
              <div key={idx} className={`rounded-2xl p-8 border-2 ${
                idx === 0 ? 'bg-green-50 border-green-300' : 'bg-slate-50 border-slate-200'
              }`}>
                {idx === 0 && (
                  <span className="inline-block px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium mb-4 shadow-sm">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{level.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{level.desc}</p>
                <ul className="space-y-2">
                  {level.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-slate-700 text-sm">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
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

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-slate-200 shadow-sm">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Upgrade to FORTIFIED?</h2>
          <p className="text-white/80 text-lg mb-8">Get a free consultation to see if FORTIFIED is right for your home.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-8 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
            >
              Schedule Consultation
            </Link>
            <a
              href={`tel:${OFFICE_PHONE}`}
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
