import Link from 'next/link'
import { Metadata } from 'next'
import { OFFICE_PHONE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Roofing Insurance Claim Guide for NC Homeowners | NC Roofing Service',
  description: 'Step-by-step guide to filing roof damage insurance claims in North Carolina. Learn documentation tips, timeline expectations, and how to work with adjusters.',
  keywords: 'roof insurance claim NC, storm damage claim, hail damage roof claim, how to file roofing insurance claim',
}

const claimSteps = [
  {
    step: 1,
    title: 'Document the Damage',
    description: 'Take photos and videos of any visible damage from ground level. Don\'t go on the roof—it\'s dangerous and unnecessary.',
    tips: ['Photograph from multiple angles', 'Include wide shots and close-ups', 'Document interior damage too', 'Note the date and time'],
  },
  {
    step: 2,
    title: 'Contact Your Insurance Company',
    description: 'Report the damage to your insurer promptly. Most policies require timely reporting, and delays can complicate claims.',
    tips: ['Have your policy number ready', 'Describe damage factually', 'Ask about claim timeline', 'Request adjuster contact info'],
  },
  {
    step: 3,
    title: 'Get a Professional Inspection',
    description: 'Schedule a free inspection with a reputable roofing contractor. We can identify damage you might miss and document it properly.',
    tips: ['Choose a licensed, insured contractor', 'Get detailed written documentation', 'Ask about their insurance experience', 'Request photos of all damage'],
  },
  {
    step: 4,
    title: 'Meet with the Adjuster',
    description: 'The insurance adjuster will inspect your roof. Having your contractor present can ensure all damage is documented.',
    tips: ['Be present if possible', 'Have your contractor attend', 'Don\'t argue—let pros handle it', 'Get a copy of their report'],
  },
  {
    step: 5,
    title: 'Review the Estimate',
    description: 'Compare the insurance estimate to your contractor\'s quote. Legitimate differences may need to be negotiated.',
    tips: ['Look for missed items', 'Understand what\'s covered', 'Ask about depreciation', 'Know your deductible'],
  },
  {
    step: 6,
    title: 'Complete Repairs',
    description: 'Once your claim is approved, schedule your roof repair or replacement. Keep all receipts and documentation.',
    tips: ['Get everything in writing', 'Document the work process', 'Keep all receipts', 'Don\'t pay in full upfront'],
  },
]

const commonCovered = [
  'Wind damage (missing/lifted shingles)',
  'Hail damage (bruised/cracked shingles)',
  'Fallen tree or limb damage',
  'Lightning strikes',
  'Fire damage',
  'Weight of ice/snow (if sudden)',
]

const commonNotCovered = [
  'Normal wear and tear',
  'Gradual deterioration',
  'Poor maintenance',
  'Pre-existing damage',
  'Cosmetic damage (usually)',
  'Flood damage (separate policy)',
]

const faqs = [
  {
    question: 'How long do I have to file a roof damage claim in NC?',
    answer: 'Most policies require prompt reporting, typically within 1-2 years of the damage. However, we recommend filing as soon as possible. Delays can make it harder to prove when damage occurred and may result in claim denial.',
  },
  {
    question: 'Will my insurance rates go up if I file a claim?',
    answer: 'Weather-related claims generally have less impact on rates than at-fault claims. Many insurers won\'t raise rates for a single storm damage claim. However, multiple claims within a few years may affect your rates or insurability.',
  },
  {
    question: 'What if my claim is denied?',
    answer: 'If your claim is denied, ask for the denial in writing with specific reasons. You can request a re-inspection, provide additional documentation, or file an appeal. We can help document damage to support your appeal.',
  },
  {
    question: 'Should I get temporary repairs before the adjuster comes?',
    answer: 'Yes, you should prevent further damage (like tarping an active leak), but don\'t make permanent repairs until the adjuster inspects. Document any temporary repairs and keep receipts—these costs are usually reimbursable.',
  },
  {
    question: 'Do I have to use my insurance company\'s preferred contractor?',
    answer: 'No. In North Carolina, you have the right to choose your own contractor. While your insurer may recommend contractors, you\'re not obligated to use them. Choose based on reputation, certifications, and experience.',
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

export default function InsuranceClaimGuidePage() {
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
            <span className="text-slate-900 font-medium">Insurance Claim Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-sm font-semibold rounded-full">
              Insurance
            </span>
            <span className="text-slate-500 text-sm">10 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Roofing Insurance Claim Guide for NC Homeowners
          </h1>
          <p className="text-slate-600 text-xl">
            Step-by-step guidance for navigating the roof damage insurance claim process in North Carolina, from documentation to final repair.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-6 bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Have active roof damage?</p>
              <p className="text-slate-600 text-sm">Call us at <a href={`tel:${OFFICE_PHONE}`} className="text-brand-red font-medium">(336) ROOFING</a> for emergency tarping and a free inspection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">6-Step Insurance Claim Process</h2>
          
          <div className="space-y-8">
            {claimSteps.map((step) => (
              <div key={step.step} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 mb-4">{step.description}</p>
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <p className="text-sm font-semibold text-slate-700 mb-2">Tips:</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">What&apos;s Typically Covered (and Not)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Typically Covered
              </h3>
              <ul className="space-y-3">
                {commonCovered.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Typically NOT Covered
              </h3>
              <ul className="space-y-3">
                {commonNotCovered.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">How NC Roofing Service Helps with Claims</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Free Damage Inspection', desc: 'We thoroughly document all roof damage with photos and detailed reports.' },
              { title: 'Adjuster Meeting', desc: 'We\'ll meet with your insurance adjuster to ensure all damage is identified.' },
              { title: 'Supplement Support', desc: 'If the initial estimate misses items, we help file supplemental claims.' },
              { title: 'Direct Billing', desc: 'When possible, we work directly with your insurer to simplify payments.' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
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
            Need Help with Your Roof Damage Claim?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get a free inspection and expert guidance through the insurance process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Schedule Free Inspection
            </Link>
            <Link
              href="/residential/storm-damage"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Storm Damage Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
