'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ProblemFinder, ScheduleInspection, DamageUpload, InsuranceHelper } from '@/components/tools'

export default function StormDamagePage() {
  const [activeTool, setActiveTool] = useState<'problem' | 'upload' | 'schedule' | 'helper' | null>('helper')

  const handleProblemAction = (action: string) => {
    if (action === 'upload') setActiveTool('upload')
    else if (action === 'schedule') setActiveTool('schedule')
  }

  const faqs = [
    {
      q: 'How do I know if I have storm damage?',
      a: 'Signs include missing or damaged shingles, dents in gutters or siding, granules in gutters, and water stains inside. After a major storm, we recommend a free inspection even if you don\'t see obvious damage.'
    },
    {
      q: 'Should I file an insurance claim?',
      a: 'If you have significant damage, yes. We can help document the damage and determine if a claim makes sense. We work with all major insurance companies.'
    },
    {
      q: 'Will my rates go up if I file a claim?',
      a: 'Storm damage claims are typically "no-fault" claims and shouldn\'t affect your rates the same way an at-fault claim would. Check with your agent for specifics on your policy.'
    },
    {
      q: 'How long do I have to file a claim?',
      a: 'This varies by policy, but most require you to report damage promptly — usually within 1-2 years. We recommend filing as soon as damage is discovered.'
    },
    {
      q: 'Do you meet with my insurance adjuster?',
      a: 'Yes, we can be present during the adjuster\'s inspection to point out damage and ensure nothing is missed. This is a free service.'
    },
    {
      q: 'What if my claim is denied?',
      a: 'We can help document additional evidence and assist with the appeal process. Our detailed documentation using EagleView and PLRB weather data often helps overturn initial denials.'
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background with storm damage image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Link href="/residential" className="inline-flex items-center gap-2 text-[#C8102E] hover:text-[#a50d25] mb-4 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Residential Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Storm Damage & Insurance Claims
              </h1>
              <p className="text-slate-300 text-xl mb-6">
                Wind, hail, or fallen trees — we help you document the damage, navigate the claims process, 
                and get your roof repaired or replaced properly.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free Damage Assessment
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8102E]/20 text-[#C8102E] rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Insurance Claim Support
                </span>
              </div>

              {/* Tool Selector */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveTool('helper')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTool === 'helper' ? 'bg-[#C8102E] text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Claims Guide
                </button>
                <button
                  onClick={() => setActiveTool('problem')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTool === 'problem' ? 'bg-[#C8102E] text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Problem Finder
                </button>
                <button
                  onClick={() => setActiveTool('upload')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTool === 'upload' ? 'bg-[#C8102E] text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Upload Photos
                </button>
                <button
                  onClick={() => setActiveTool('schedule')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTool === 'schedule' ? 'bg-[#C8102E] text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Schedule Inspection
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13367663464"
                  className="flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white px-6 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (336) ROOFING
                </a>
              </div>
            </div>

            {/* Active Tool */}
            <div>
              {activeTool === 'helper' && <InsuranceHelper />}
              {activeTool === 'problem' && <ProblemFinder onSelectAction={handleProblemAction} />}
              {activeTool === 'upload' && <DamageUpload onContinueToSchedule={() => setActiveTool('schedule')} />}
              {activeTool === 'schedule' && <ScheduleInspection />}
            </div>
          </div>
        </div>
      </section>

      {/* Technology We Use */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">How We Document Damage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">EagleView Imaging</h3>
              <p className="text-slate-600">Satellite and aerial imaging provides precise measurements for accurate claims.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">PLRB Weather Data</h3>
              <p className="text-slate-600">We use official weather records to verify storm events and support your claim.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Detailed Reports</h3>
              <p className="text-slate-600">Comprehensive documentation with photos, measurements, and damage assessment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Check CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Check Your Address for Storm History</h3>
              <p className="text-blue-100">Use our Storm Check tool to see if your area has been affected by recent storms.</p>
            </div>
            <Link
              href="/storm-check"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-blue-700 px-6 py-3 rounded-[2px] font-semibold transition-colors shadow-lg whitespace-nowrap"
            >
              Check Your Address
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#C8102E] to-[#a50d25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Think You Have Storm Damage?</h2>
          <p className="text-white/80 text-lg mb-8">Get a free inspection and let us help with your claim.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-8 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
            >
              Schedule Free Inspection
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
