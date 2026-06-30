import Link from 'next/link'
import { Metadata } from 'next'
import { OFFICE_PHONE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Metal Roofing Installation | NC Roofing Service | NC Triangle',
  description: 'Professional metal roofing installation in the NC Triangle. 50+ year lifespan, energy efficient, weather resistant. Standing seam, metal shingles, and corrugated panels.',
  keywords: 'metal roofing NC, standing seam roof, metal roof installation, metal shingles, energy efficient roofing',
  alternates: { canonical: '/residential/metal-roofing' },
}

const metalTypes = [
  {
    name: 'Standing Seam',
    description: 'The most popular choice for residential metal roofing. Vertical panels with raised seams create a sleek, modern look while providing superior weather protection.',
    features: ['Concealed fasteners', 'Superior wind resistance', 'Modern aesthetic', 'Multiple color options'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    name: 'Metal Shingles',
    description: 'Combines the durability of metal with the traditional appearance of shingles, slate, or tile. Perfect for homeowners who want metal performance with classic curb appeal.',
    features: ['Traditional appearance', 'Lightweight installation', 'Multiple styles available', 'Impact resistant'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
  {
    name: 'Corrugated Panels',
    description: 'A cost-effective option ideal for agricultural buildings, workshops, and some residential applications. Durable and easy to install.',
    features: ['Budget-friendly', 'Quick installation', 'Good for outbuildings', 'Various profiles'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
]

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '50+ Year Lifespan',
    description: 'Metal roofs can last 50-70 years compared to 20-25 years for asphalt shingles. One installation often lasts a lifetime.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Energy Efficient',
    description: 'Metal reflects solar radiant heat, which can reduce cooling costs by 10-25%. Some metal roofs qualify for energy tax credits.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Weather Resistant',
    description: 'Metal roofs resist wind up to 140 mph, won\'t crack in cold weather, and shed snow and rain effectively.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    title: 'Fire Resistant',
    description: 'Metal roofing is non-combustible with a Class A fire rating — the highest possible rating for fire resistance.',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Low Maintenance',
    description: 'Metal roofs require minimal maintenance. No cracking, warping, or granule loss. Periodic inspections are all that\'s needed.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Increased Home Value',
    description: 'Metal roofing typically increases home value by 1-6%. The longevity and energy savings are attractive to buyers.',
    color: 'bg-emerald-100 text-emerald-600',
  },
]

const faqs = [
  {
    q: 'How long does metal roofing last?',
    a: 'Quality metal roofing typically lasts 50-70 years with proper installation. Some metal roofs have lasted over 100 years. This compares favorably to asphalt shingles which typically last 20-25 years.'
  },
  {
    q: 'Is metal roofing louder in the rain?',
    a: 'No, not when properly installed. With solid sheathing and proper underlayment, a metal roof is no louder than any other roof type. The attic and insulation also buffer sound.'
  },
  {
    q: 'Does metal roofing attract lightning?',
    a: 'No, metal roofing does not attract lightning. Metal is non-combustible, so even if lightning did strike, a metal roof is safer than other materials. Metal roofs actually dissipate the charge safely.'
  },
  {
    q: 'How much does metal roofing cost compared to asphalt?',
    a: 'Metal roofing typically costs 2-3x more than asphalt upfront. However, when you factor in the 50+ year lifespan vs 20-25 years for asphalt, metal often costs less per year of service. Plus you save on energy and maintenance costs.'
  },
  {
    q: 'Can you install metal roofing over existing shingles?',
    a: 'In some cases, yes. This is called a "re-roof" or "overlay" and can save on labor and disposal costs. However, we often recommend a complete tear-off to inspect the deck and ensure proper installation. We\'ll advise what\'s best for your situation.'
  },
]

function generateFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }
}

export default function MetalRoofingPage() {
  const faqSchema = generateFaqSchema()

  return (
    <main className="pt-20">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/residential" className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-dark mb-4 transition-colors text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Residential Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Metal Roofing Installation
            </h1>
            <p className="text-slate-300 text-xl mb-8">
              50+ year durability, energy efficiency, and timeless style. Metal roofing is the 
              last roof you may ever need.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-700/50 text-zinc-200 rounded-full text-sm">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                50+ Year Lifespan
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-700/50 text-zinc-200 rounded-full text-sm">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Energy Efficient
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-700/50 text-zinc-200 rounded-full text-sm">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Wind & Hail Resistant
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
              >
                Get a Metal Roofing Quote
              </Link>
              <a
                href={`tel:${OFFICE_PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (336) ROOFING
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Why Metal</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Benefits of Metal Roofing
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Metal roofing offers advantages that traditional asphalt simply can&apos;t match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className={`w-16 h-16 ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metal Types */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Options</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Metal Roofing Types
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              We install various metal roofing systems to match your home&apos;s style and your budget.
            </p>
          </div>
          
          <div className="space-y-12">
            {metalTypes.map((type, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                <div className="md:w-2/5 h-64 md:h-auto relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${type.image}')` }}
                  />
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.name}</h3>
                  <p className="text-slate-600 mb-6">{type.description}</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {type.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-slate-700 text-sm">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Cost Comparison */}
      <section className="py-16 bg-gradient-to-br from-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Cost vs. Value</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              While metal costs more upfront, the long-term value is compelling.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Asphalt Shingles</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex justify-between">
                  <span>Initial Cost</span>
                  <span className="text-green-400">Lower ($)</span>
                </li>
                <li className="flex justify-between">
                  <span>Lifespan</span>
                  <span>20-25 years</span>
                </li>
                <li className="flex justify-between">
                  <span>Replacements (50 years)</span>
                  <span>2-3 times</span>
                </li>
                <li className="flex justify-between">
                  <span>Energy Savings</span>
                  <span>Minimal</span>
                </li>
                <li className="flex justify-between border-t border-white/10 pt-3 mt-3">
                  <span className="font-semibold">Total 50-Year Cost</span>
                  <span className="text-amber-400">Higher $$$</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-red/20 backdrop-blur rounded-2xl p-8 border border-brand-red/30">
              <h3 className="text-xl font-bold text-white mb-4">Metal Roofing</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex justify-between">
                  <span>Initial Cost</span>
                  <span className="text-amber-400">Higher ($$)</span>
                </li>
                <li className="flex justify-between">
                  <span>Lifespan</span>
                  <span className="text-green-400">50-70 years</span>
                </li>
                <li className="flex justify-between">
                  <span>Replacements (50 years)</span>
                  <span className="text-green-400">0 times</span>
                </li>
                <li className="flex justify-between">
                  <span>Energy Savings</span>
                  <span className="text-green-400">10-25%</span>
                </li>
                <li className="flex justify-between border-t border-white/10 pt-3 mt-3">
                  <span className="font-semibold">Total 50-Year Cost</span>
                  <span className="text-green-400">Lower $$</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Common Questions About Metal Roofing</h2>
          </div>
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
      <section className="py-24 bg-gradient-to-r from-brand-red to-brand-red-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for a Roof That Lasts a Lifetime?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Get a free consultation and quote for metal roofing installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
            >
              Get Your Free Quote
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
