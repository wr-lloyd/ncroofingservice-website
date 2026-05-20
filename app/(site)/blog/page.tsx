import Link from 'next/link'
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'

export const metadata = {
  title: 'Roofing Blog | NC Roofing Service and Repair | Tips & News',
  description: 'Roofing tips, maintenance advice, and industry news from NC Roofing Service and Repair in Rougemont, NC. Learn how to protect your home.',
}

interface BlogPost {
  title: string
  excerpt: string
  category: string
  date: string
  featured?: boolean
  slug?: string
}

// Only published, real articles appear here. Placeholder/"coming soon" entries
// were removed in 2026 — empty stubs hurt SEO and trust more than they help.
const posts: BlogPost[] = [
  {
    title: 'What to Look for When Hiring a Roofer',
    excerpt: 'Insurance, certifications, and red flags: learn what separates professional roofers from "storm chasers" and how to protect yourself.',
    category: 'Guide',
    date: 'December 2024',
    featured: true,
    slug: 'what-to-look-for-hiring-roofer',
  },
]

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">Roofing Tips & News</h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Expert advice and information to help you make informed decisions about your roof.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-slate-800 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog/what-to-look-for-hiring-roofer"
            className="block bg-gradient-to-r from-red-900/30 to-slate-800 rounded-2xl overflow-hidden border border-red-500/30 hover:border-red-500/50 transition-all group"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400">
                    ⭐ Featured Guide
                  </span>
                  <span className="text-slate-500 text-sm">December 2024</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  What to Look for When Hiring a Roofer
                </h2>
                <p className="text-slate-400 mb-6">
                  Insurance, certifications, and red flags: learn what separates professional roofers 
                  from &quot;storm chasers&quot; and how to protect yourself when hiring a roofing contractor.
                </p>
                <span className="inline-flex items-center gap-2 text-red-400 font-medium group-hover:text-red-300 transition-colors">
                  Read the Full Guide
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
              <div className="bg-slate-700/50 rounded-xl aspect-video md:aspect-auto flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-red-500/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-slate-500 text-sm">Essential Homeowner Guide</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* More Coming Soon */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">More articles on the way</h2>
          <p className="text-slate-400 mb-6">
            We&apos;re writing field guides on storm damage, FORTIFIED, insurance claims, and how to
            pick shingles. In the meantime, the fastest way to get a real answer is to ask us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white px-6 py-3 rounded-[2px] font-semibold transition-colors"
            >
              Ask a Question
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/5 text-white px-6 py-3 rounded-[2px] font-semibold transition-colors"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#C8102E] to-[#a50d25] rounded-[2px] p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have Roofing Questions?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We&apos;re happy to answer your questions. Schedule a free consultation or give us a call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-8 py-4 rounded-[2px] font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <a
                href={`tel:${OFFICE_PHONE}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
              >
                Call {OFFICE_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
