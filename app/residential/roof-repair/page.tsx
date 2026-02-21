'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ProblemFinder, ScheduleInspection, DamageUpload } from '@/components/tools'

export default function RoofRepairPage() {
  const [activeTool, setActiveTool] = useState<'problem' | 'upload' | 'schedule' | null>(null)

  const handleProblemAction = (action: string) => {
    if (action === 'upload') setActiveTool('upload')
    else if (action === 'schedule') setActiveTool('schedule')
  }

  const faqs = [
    {
      q: 'How do I know if I need a repair vs. replacement?',
      a: 'Minor issues like a few missing shingles or small leaks can usually be repaired. If damage is widespread, the roof is over 20 years old, or repairs would cost more than 30% of replacement, a new roof may be more economical.'
    },
    {
      q: 'How quickly can you respond to an emergency leak?',
      a: 'We offer 24/7 emergency response. Call (919) 475-8841 anytime for urgent issues. We\'ll prioritize getting a temporary weatherproof solution in place to protect your home.'
    },
    {
      q: 'Do you repair all types of roofs?',
      a: 'Yes, we repair asphalt shingle, metal, flat, and specialty roofing systems. Our technicians are certified by GAF, Owens Corning, and CertainTeed.'
    },
    {
      q: 'Will a repair void my existing warranty?',
      a: 'If done properly by a certified contractor, repairs typically don\'t void warranties. We document all work and ensure it meets manufacturer specifications.'
    },
    {
      q: 'How much does a typical repair cost?',
      a: 'Repair costs vary widely based on the issue. Minor fixes may be a few hundred dollars, while significant repairs can be more. We provide free inspections and detailed quotes before any work.'
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
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=1920&q=80')" }}
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
                Roof Repair Services
              </h1>
              <p className="text-slate-300 text-xl mb-6">
                Fast, reliable repairs that fix the problem at its source. From minor leaks to storm damage, 
                we get your roof back to protecting your home.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24/7 Emergency Response
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free Inspection
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+19194758841"
                  className="flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white px-6 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (919) 475-8841
                </a>
                <button
                  onClick={() => setActiveTool('schedule')}
                  className="flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#333333] text-white px-6 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
                >
                  Schedule Free Inspection
                </button>
              </div>
            </div>

            {/* Problem Finder Tool */}
            <div>
              {activeTool === 'upload' ? (
                <DamageUpload onContinueToSchedule={() => setActiveTool('schedule')} />
              ) : activeTool === 'schedule' ? (
                <ScheduleInspection />
              ) : (
                <ProblemFinder onSelectAction={handleProblemAction} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Choose NC Roofing Service for Repairs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Response</h3>
              <p className="text-slate-600">24/7 emergency service. We prioritize active leaks and urgent issues to protect your home.</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Honest Assessment</h3>
              <p className="text-slate-600">We&apos;ll tell you exactly what&apos;s wrong and recommend repair only when it makes sense.</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Materials</h3>
              <p className="text-slate-600">We use the same premium materials from our certified suppliers for lasting repairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Repair Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Inspect', desc: 'We thoroughly inspect to find the root cause, not just the symptoms.' },
              { step: 2, title: 'Explain', desc: 'You receive a clear explanation of the issue and repair options.' },
              { step: 3, title: 'Repair', desc: 'Our certified technicians complete the repair to manufacturer specs.' },
              { step: 4, title: 'Verify', desc: 'We verify the repair and clean up completely before leaving.' },
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

      {/* Trust Badges */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
            <span className="flex items-center gap-2">✓ GAF Certified</span>
            <span className="flex items-center gap-2">✓ CertainTeed Certified</span>
            <span className="flex items-center gap-2">✓ Owens Corning Certified</span>
            <span className="flex items-center gap-2">✓ BBB A+ Rated</span>
            <span className="flex items-center gap-2">✓ Fully Insured</span>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/residential/roof-replacement" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-red/30 transition-colors group">
              <h3 className="font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">Roof Replacement</h3>
              <p className="text-slate-600 text-sm">When repairs aren&apos;t enough, get a complete new roof with premium warranties.</p>
            </Link>
            <Link href="/residential/storm-damage" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-red/30 transition-colors group">
              <h3 className="font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">Storm Damage</h3>
              <p className="text-slate-600 text-sm">Insurance claim assistance and emergency repairs after severe weather.</p>
            </Link>
            <Link href="/resources/insurance-claim-guide" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-red/30 transition-colors group">
              <h3 className="font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">Insurance Guide</h3>
              <p className="text-slate-600 text-sm">Step-by-step guide to filing roof damage insurance claims.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#C8102E] to-[#a50d25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Fix Your Roof?</h2>
          <p className="text-white/80 text-lg mb-8">Get a free inspection and honest assessment today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-8 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
            >
              Schedule Free Inspection
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
