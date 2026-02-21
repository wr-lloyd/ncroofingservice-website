import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roofing Resources & Guides | NC Roofing Service',
  description: 'Expert roofing guides, cost information, and helpful resources for North Carolina homeowners. Learn about roof replacement costs, insurance claims, metal roofing, and more.',
  keywords: 'roofing guide NC, roof replacement cost, roofing insurance claim, metal roofing North Carolina',
}

const featuredGuides = [
  {
    title: 'Roof Replacement Cost Guide',
    slug: 'roof-replacement-cost-guide',
    description: 'Everything NC homeowners need to know about roof replacement costs, including material options, labor factors, and financing.',
    category: 'Cost & Planning',
    readTime: '12 min read',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Insurance Claim Guide',
    slug: 'insurance-claim-guide',
    description: 'Step-by-step guidance for filing roof damage insurance claims in North Carolina, including documentation tips and what to expect.',
    category: 'Insurance',
    readTime: '10 min read',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Metal Roofing Guide for NC',
    slug: 'metal-roofing-guide',
    description: 'Is metal roofing right for your North Carolina home? Learn about costs, benefits, styles, and how metal performs in NC weather.',
    category: 'Materials',
    readTime: '15 min read',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const quickTips = [
  { title: 'Signs You Need a New Roof', points: ['Shingles are curling or buckling', 'Granules in gutters', 'Roof is 20+ years old', 'Visible daylight through roof boards'] },
  { title: 'Before Hiring a Roofer', points: ['Verify NC license & insurance', 'Check BBB rating and reviews', 'Get detailed written estimates', 'Ask about manufacturer certifications'] },
  { title: 'After Storm Damage', points: ['Document damage with photos', 'Don\'t make permanent repairs', 'Contact insurance promptly', 'Get a professional inspection'] },
]

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Roofing Guides & Resources
            </h1>
            <p className="text-slate-300 text-xl">
              Expert information to help North Carolina homeowners make informed decisions about their roofing projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Featured Guides</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              In-Depth Roofing Guides
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Comprehensive guides written by roofing experts to help you understand your options and make the best decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/${guide.slug}`}
                className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-brand-red/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-semibold rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-slate-500 text-sm">{guide.readTime}</span>
                </div>
                <div className="w-14 h-14 bg-slate-200 group-hover:bg-brand-red/10 text-slate-600 group-hover:text-brand-red rounded-xl flex items-center justify-center mb-6 transition-colors">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-3">
                  {guide.title}
                </h3>
                <p className="text-slate-600 mb-4">{guide.description}</p>
                <span className="inline-flex items-center gap-2 text-brand-red font-medium group-hover:gap-3 transition-all">
                  Read Guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Quick Reference</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Helpful Quick Tips
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickTips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{tip.title}</h3>
                <ul className="space-y-3">
                  {tip.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                      <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Free Tools</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Online Roofing Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/storm-check"
              className="group bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200 hover:border-amber-400 transition-all"
            >
              <div className="w-14 h-14 bg-amber-500 text-white rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Storm Check</h3>
              <p className="text-slate-600 mb-4">
                Enter your address to see recent storm activity in your area and determine if your roof may have been damaged.
              </p>
              <span className="inline-flex items-center gap-2 text-amber-600 font-medium group-hover:gap-3 transition-all">
                Check Your Address
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/contact"
              className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:border-green-400 transition-all"
            >
              <div className="w-14 h-14 bg-green-600 text-white rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Free Inspection</h3>
              <p className="text-slate-600 mb-4">
                Schedule a no-obligation roof inspection with one of our certified professionals. Get a detailed assessment and honest recommendations.
              </p>
              <span className="inline-flex items-center gap-2 text-green-600 font-medium group-hover:gap-3 transition-all">
                Schedule Inspection
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About Your Roof?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Our team is here to help. Get expert answers and a free assessment from local roofing professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Get Free Consultation
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
