import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metal Roofing Guide for NC Homeowners | NC Roofing Service',
  description: 'Complete guide to metal roofing in North Carolina. Learn about costs, benefits, styles, and how metal roofs perform in NC weather conditions.',
  keywords: 'metal roofing NC, metal roof cost North Carolina, standing seam roof, metal roof vs shingles NC',
}

const metalTypes = [
  {
    name: 'Standing Seam',
    priceRange: '$10 - $16/sq ft',
    description: 'Vertical panels with raised seams that interlock. The premium choice for residential metal roofing.',
    pros: ['No exposed fasteners', 'Modern aesthetic', 'Superior weather resistance', '40-70 year lifespan'],
    cons: ['Highest cost', 'Requires skilled installation', 'Limited contractor availability'],
    bestFor: 'Modern homes, coastal areas, homeowners prioritizing longevity',
  },
  {
    name: 'Metal Shingles',
    priceRange: '$8 - $14/sq ft',
    description: 'Metal panels stamped to look like traditional shingles, slate, or wood shake.',
    pros: ['Traditional appearance', 'Easier installation', 'Good wind resistance', '30-50 year lifespan'],
    cons: ['More expensive than asphalt', 'Some styles show fasteners', 'Limited style options'],
    bestFor: 'HOA communities, historic homes, blending metal benefits with traditional look',
  },
  {
    name: 'Corrugated Metal',
    priceRange: '$5 - $10/sq ft',
    description: 'Wavy or ribbed panels. More common on agricultural or modern industrial-style homes.',
    pros: ['Most affordable metal option', 'Easy to install', 'Lightweight', 'Good drainage'],
    cons: ['Visible fasteners', 'Industrial look', 'Shorter warranty typical'],
    bestFor: 'Barns, sheds, modern farmhouse aesthetic, budget-conscious projects',
  },
]

const ncConsiderations = [
  {
    title: 'Hurricane & Wind Resistance',
    description: 'Metal roofs can withstand winds up to 140+ mph when properly installed—critical for NC coastal and piedmont storms.',
  },
  {
    title: 'Hail Performance',
    description: 'Quality metal roofs are Class 4 impact rated. Some dent but don\'t fail, while thicker gauges resist denting entirely.',
  },
  {
    title: 'Hot Summers',
    description: 'Reflective metal roofing reduces cooling costs by 10-25%. Energy Star rated options provide the best performance.',
  },
  {
    title: 'Insurance Discounts',
    description: 'Many NC insurers offer premium discounts for metal roofs, especially when combined with FORTIFIED certification.',
  },
]

const faqs = [
  {
    question: 'How much does a metal roof cost in North Carolina?',
    answer: 'Metal roofing in NC typically costs $8-$16 per square foot installed, or $16,000-$35,000 for an average home. Standing seam is at the higher end, while metal shingles and corrugated are more affordable. The investment pays off through longevity and energy savings.',
  },
  {
    question: 'Are metal roofs noisy when it rains?',
    answer: 'Modern metal roofing installed over solid sheathing with proper underlayment is no louder than asphalt shingles. The old "tin roof" noise reputation comes from older agricultural installations directly over rafters.',
  },
  {
    question: 'Do metal roofs attract lightning?',
    answer: 'No. Metal roofs do not attract lightning. If lightning does strike, the metal safely disperses the energy and is non-combustible—actually making your home safer than with combustible roofing materials.',
  },
  {
    question: 'How long does a metal roof last in NC?',
    answer: 'Quality metal roofs in North Carolina last 40-70 years, with some standing seam systems lasting even longer. This is 2-3 times longer than asphalt shingles, making metal cost-effective over time despite higher upfront costs.',
  },
  {
    question: 'Can you install metal roofing over existing shingles?',
    answer: 'In some cases, yes. Installing metal over one layer of shingles is possible if the shingles are in reasonable condition and local codes permit. However, a tear-off often produces better results and allows for deck inspection.',
  },
]

function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export default function MetalRoofingGuidePage() {
  const faqSchema = generateFAQSchema()

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-100 py-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-brand-red transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <Link href="/resources" className="text-slate-500 hover:text-brand-red transition-colors">Resources</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">Metal Roofing Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-sm font-semibold rounded-full">
              Materials
            </span>
            <span className="text-slate-500 text-sm">15 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Metal Roofing Guide for NC Homeowners
          </h1>
          <p className="text-slate-600 text-xl">
            Is metal roofing right for your North Carolina home? Learn about costs, benefits, styles, and how metal performs in our climate.
          </p>
        </div>
      </section>

      {/* Why Metal in NC */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Metal Roofing Makes Sense in North Carolina</h2>
          <p className="text-slate-600 mb-8">
            North Carolina&apos;s climate presents unique challenges—hurricanes on the coast, severe thunderstorms across the state, and hot, humid summers. Metal roofing addresses all of these while providing decades of protection.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {ncConsiderations.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metal Types */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Types of Metal Roofing</h2>
          
          <div className="space-y-8">
            {metalTypes.map((type) => (
              <div key={type.name} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{type.name}</h3>
                  <span className="text-brand-red font-semibold">{type.priceRange}</span>
                </div>
                <p className="text-slate-600 mb-6">{type.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {type.pros.map((pro, idx) => (
                        <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-green-600">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {type.cons.map((con, idx) => (
                        <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-red-600">−</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm">
                    <span className="font-semibold text-slate-900">Best for: </span>
                    <span className="text-slate-600">{type.bestFor}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metal vs Shingles */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Metal Roofing vs. Asphalt Shingles</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-bold text-slate-900">Factor</th>
                  <th className="text-left p-4 font-bold text-slate-900">Metal Roofing</th>
                  <th className="text-left p-4 font-bold text-slate-900">Asphalt Shingles</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-t border-slate-200 font-medium">Upfront Cost</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">$8-$16/sq ft</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">$4-$7/sq ft</td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-slate-200 font-medium">Lifespan</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">40-70 years</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">20-30 years</td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-slate-200 font-medium">Wind Resistance</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">Up to 140+ mph</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">Up to 110 mph</td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-slate-200 font-medium">Energy Efficiency</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">Excellent (reflective)</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">Good (with cool roof options)</td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-slate-200 font-medium">Maintenance</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">Very low</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">Periodic inspections needed</td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-slate-200 font-medium">Resale Value</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">High—adds appeal</td>
                  <td className="p-4 border-t border-slate-200 text-slate-600">Standard expectation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Metal Roofing FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Metal Roofing?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get a free consultation to see if metal roofing is right for your NC home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/residential/metal-roofing"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Our Metal Roofing Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
