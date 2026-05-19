import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roof Replacement Cost Guide for NC Homeowners | NC Roofing Service',
  description: 'Comprehensive guide to roof replacement costs in North Carolina. Learn about material costs, labor factors, financing options, and how to budget for your new roof.',
  keywords: 'roof replacement cost NC, how much does a new roof cost, roofing prices North Carolina, roof replacement estimate',
}

const costFactors = [
  { factor: 'Roof Size', desc: 'Measured in "squares" (100 sq ft each). Average NC home is 20-30 squares.', impact: 'Primary' },
  { factor: 'Material Choice', desc: 'Asphalt shingles to metal roofing. Quality affects price significantly.', impact: 'High' },
  { factor: 'Roof Complexity', desc: 'Steep pitch, multiple levels, dormers, and valleys add labor.', impact: 'Medium-High' },
  { factor: 'Removal Needs', desc: 'Tear-off vs. overlay. Multiple layers require full tear-off.', impact: 'Medium' },
  { factor: 'Decking Repairs', desc: 'Damaged plywood must be replaced before new roof installation.', impact: 'Variable' },
  { factor: 'Ventilation', desc: 'Ridge vents, soffit vents, or powered ventilation systems.', impact: 'Low-Medium' },
]

const materialCosts = [
  { material: '3-Tab Asphalt Shingles', priceRange: '$3.50 - $5.50/sq ft', lifespan: '15-20 years', notes: 'Budget option, basic protection' },
  { material: 'Architectural Shingles', priceRange: '$4.50 - $7.00/sq ft', lifespan: '25-30 years', notes: 'Best value, most popular choice' },
  { material: 'Designer Shingles', priceRange: '$7.00 - $10.00/sq ft', lifespan: '30-50 years', notes: 'Premium aesthetics, top warranties' },
  { material: 'Metal Roofing', priceRange: '$8.00 - $16.00/sq ft', lifespan: '40-70 years', notes: 'Long-lasting, energy efficient' },
]

const faqs = [
  {
    question: 'How much does a roof replacement cost in North Carolina?',
    answer: 'Most NC roof replacements cost between $8,000 and $25,000, with the average home falling in the $12,000-$18,000 range. Factors include roof size, material choice, and complexity. We provide free estimates with detailed breakdowns.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer: 'Most residential roof replacements are completed in 1-3 days. Larger or more complex roofs may take 4-5 days. Weather delays can extend the timeline, but we work efficiently to minimize disruption.',
  },
  {
    question: 'Should I repair or replace my roof?',
    answer: 'If your roof is under 15 years old and damage is localized, repairs often make sense. If your roof is 20+ years old, has widespread damage, or you\'re seeing multiple issues, replacement typically offers better long-term value.',
  },
  {
    question: 'Does homeowners insurance cover roof replacement?',
    answer: 'Insurance typically covers roof damage from covered perils like storms, hail, or fallen trees. Normal wear and tear is not covered. We help document storm damage and work with insurance adjusters to ensure fair compensation.',
  },
  {
    question: 'What\'s the best time of year to replace a roof in NC?',
    answer: 'Spring and fall offer ideal conditions, but we install roofs year-round in North Carolina. Summer works well too, though we start earlier to avoid peak heat. Winter installations are possible during dry periods.',
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

export default function RoofReplacementCostGuidePage() {
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
            <span className="text-slate-900 font-medium">Roof Replacement Cost Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-sm font-semibold rounded-full">
              Cost & Planning
            </span>
            <span className="text-slate-500 text-sm">12 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Roof Replacement Cost Guide for NC Homeowners
          </h1>
          <p className="text-slate-600 text-xl">
            Everything you need to know about roof replacement costs in North Carolina, from material options to financing—written by local roofing experts.
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Summary</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-brand-red mb-1">$8K-$25K</div>
                <div className="text-slate-600 text-sm">Typical NC Range</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-brand-red mb-1">$12K-$18K</div>
                <div className="text-slate-600 text-sm">Average NC Home</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-brand-red mb-1">1-3 Days</div>
                <div className="text-slate-600 text-sm">Installation Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Affects Roof Replacement Cost?</h2>
            <p className="text-slate-600 mb-8">
              Roof replacement costs vary significantly based on several factors. Understanding these helps you evaluate quotes and make informed decisions.
            </p>

            <div className="grid gap-4 mb-12">
              {costFactors.map((item) => (
                <div key={item.factor} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900">{item.factor}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.impact === 'Primary' ? 'bg-brand-red/10 text-brand-red' :
                      item.impact === 'High' ? 'bg-amber-100 text-amber-700' :
                      'bg-slate-200 text-slate-600'
                    }`}>
                      {item.impact} Impact
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Roofing Material Costs Comparison</h2>
            <p className="text-slate-600 mb-6">
              Material choice is one of the biggest factors in your total cost. Here&apos;s how common options compare:
            </p>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-bold text-slate-900 border border-slate-200">Material</th>
                    <th className="text-left p-4 font-bold text-slate-900 border border-slate-200">Installed Price</th>
                    <th className="text-left p-4 font-bold text-slate-900 border border-slate-200">Lifespan</th>
                    <th className="text-left p-4 font-bold text-slate-900 border border-slate-200">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {materialCosts.map((item) => (
                    <tr key={item.material} className="hover:bg-slate-50">
                      <td className="p-4 border border-slate-200 font-medium text-slate-900">{item.material}</td>
                      <td className="p-4 border border-slate-200 text-slate-600">{item.priceRange}</td>
                      <td className="p-4 border border-slate-200 text-slate-600">{item.lifespan}</td>
                      <td className="p-4 border border-slate-200 text-slate-600 text-sm">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Recommendation</h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
              <h3 className="font-bold text-slate-900 mb-2">Architectural Shingles: Best Value for Most NC Homes</h3>
              <p className="text-slate-600 mb-4">
                For most North Carolina homeowners, architectural shingles offer the best balance of cost, durability, and aesthetics. They handle NC weather well, come with strong warranties (up to 50 years with certified installation), and significantly improve curb appeal compared to basic 3-tab shingles.
              </p>
              <Link href="/residential/roof-replacement" className="text-green-700 font-medium hover:underline">
                Learn more about our roof replacement services →
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Financing Your Roof Replacement</h2>
            <p className="text-slate-600 mb-4">
              A new roof is a significant investment. Here are common ways NC homeowners finance their projects:
            </p>
            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600"><strong>Insurance claims:</strong> If storm damage is involved, insurance may cover most or all costs</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600"><strong>Home equity:</strong> HELOC or home equity loan with potentially tax-deductible interest</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600"><strong>Personal loans:</strong> Unsecured options available from many lenders</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600"><strong>Contractor financing:</strong> We partner with <Link href="/financing" className="text-brand-red underline hover:no-underline">Service Finance Company and Enhancify</Link> — soft credit check, options in about two minutes</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 border border-slate-200">
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
            Ready for Your Free Estimate?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get a detailed, no-obligation quote for your roof replacement project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/residential/roof-replacement"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Our Replacement Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
