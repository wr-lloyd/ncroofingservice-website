import Link from 'next/link'

export const metadata = {
  title: 'FAQ | NC Roofing Service and Repair | Common Roofing Questions',
  description: 'Frequently asked questions about roofing services, repairs, replacements, insurance claims, and more. Get answers from NC Roofing Service experts in NC.',
  keywords: 'roofing FAQ, roof repair questions, roof replacement FAQ, roofing insurance claims, FORTIFIED roofing questions',
}

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'How do I know if my roof needs to be repaired or replaced?',
        a: 'Several signs indicate roof problems: missing or damaged shingles, granules in gutters, water stains on ceilings, daylight visible through the roof, or a roof over 20 years old. We offer free inspections to assess your roof\'s condition and provide honest recommendations — we\'ll never suggest a replacement if a repair will do.'
      },
      {
        q: 'Do you offer free estimates?',
        a: 'Yes! We provide free roof inspections and consultations. We\'ll assess your roof, explain our findings, and provide a detailed written estimate with no obligation. Call (336) ROOFING to schedule yours.'
      },
      {
        q: 'What areas do you serve?',
        a: 'We\'re based in Rougemont, NC and serve the entire Triangle area including Durham, Raleigh, Cary, Chapel Hill, Hillsborough, Wake Forest, Apex, Butner, Creedmoor, and surrounding communities.'
      },
      {
        q: 'Are you licensed and insured?',
        a: 'Absolutely. NC Roofing Service and Repair, LLC is fully licensed in North Carolina and carries comprehensive liability insurance and workers\' compensation coverage. We\'re also BBB A+ accredited since May 2023.'
      },
    ]
  },
  {
    category: 'Services',
    questions: [
      {
        q: 'What types of roofing do you install?',
        a: 'We install all major roofing types including asphalt shingles (our most popular), metal roofing, flat roofing systems, and specialty roofing. We\'re certified by GAF, Owens Corning, and CertainTeed, allowing us to offer premium manufacturer warranties.'
      },
      {
        q: 'What is FORTIFIED roofing?',
        a: 'FORTIFIED is a voluntary construction and re-roofing program developed by IBHS (Insurance Institute for Business & Home Safety). FORTIFIED roofs are built to withstand severe weather better than standard roofs. As FORTIFIED certified contractors, we can install roofing systems that may qualify for insurance discounts and provide superior storm protection.'
      },
      {
        q: 'Do you handle commercial roofing?',
        a: 'Yes, we provide both residential and commercial roofing services. Our commercial services include flat roof systems, TPO, EPDM, and metal roofing for businesses, warehouses, and multi-family properties.'
      },
      {
        q: 'Do you offer emergency repair services?',
        a: 'Yes, we provide 24/7 emergency roof repair services. If you have a leak or storm damage, call or text (336) ROOFING any time and we\'ll respond as quickly as possible to protect your property.'
      },
    ]
  },
  {
    category: 'Insurance Claims',
    questions: [
      {
        q: 'Do you help with insurance claims?',
        a: 'Absolutely. We specialize in insurance claim support and advocacy. We\'ll document the damage with photos, provide detailed reports, meet with your adjuster, and help ensure you receive fair compensation for covered repairs. We have experience working with all major insurance companies.'
      },
      {
        q: 'What technology do you use for documenting damage?',
        a: 'We use advanced tools including EagleView satellite imaging for accurate measurements, PLRB Weather Mapping Portal to correlate storm data with damage, and digital thermal testing to detect hidden moisture and air leaks. This documentation strengthens insurance claims.'
      },
      {
        q: 'Will you meet with my insurance adjuster?',
        a: 'Yes, we\'re happy to be present during your insurance adjuster\'s inspection. We can point out damage that might be missed and ensure all legitimate damage is properly documented.'
      },
    ]
  },
  {
    category: 'Process & Pricing',
    questions: [
      {
        q: 'How long does a roof replacement take?',
        a: 'Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of the roof, weather conditions, and any unexpected repairs needed once the old roofing is removed. We\'ll provide a timeline estimate before starting work.'
      },
      {
        q: 'What should I expect during the roof replacement process?',
        a: 'We start with a thorough inspection, then provide a detailed estimate. Once approved, we\'ll schedule the work, order materials, and complete the installation. We protect your property with tarps, clean up thoroughly daily, and do a final walk-through when complete.'
      },
      {
        q: 'Do you offer financing?',
        a: 'We can discuss payment options during your consultation. We work with homeowners to find solutions that fit their budget, and we\'re experienced in helping customers maximize their insurance claims for covered repairs.'
      },
      {
        q: 'What warranties do you offer?',
        a: 'We offer both manufacturer warranties on materials and our own workmanship warranty. Because we\'re certified by GAF, Owens Corning, and CertainTeed, we can offer extended manufacturer warranties that many contractors cannot. We\'ll explain all warranty options during your estimate.'
      },
    ]
  },
]

// Generate FAQ Schema JSON-LD
function generateFaqSchema() {
  const allQuestions = faqs.flatMap(section => section.questions)
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }
}

export default function FAQPage() {
  const faqSchema = generateFaqSchema()
  
  return (
    <main className="pt-20">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">Frequently Asked Questions</h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Got questions about roofing? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#C8102E] rounded-[2px] flex items-center justify-center text-sm">
                  {sectionIdx + 1}
                </span>
                {section.category}
              </h2>
              
              <div className="space-y-6">
                {section.questions.map((faq, faqIdx) => (
                  <div 
                    key={faqIdx}
                    className="bg-slate-900/50 rounded-xl border border-white/5 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                        <span className="text-[#C8102E] flex-shrink-0">Q:</span>
                        {faq.q}
                      </h3>
                      <p className="text-slate-400 leading-relaxed pl-7">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#C8102E] to-[#a50d25] rounded-[2px] p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We&apos;re here to help. Call or text Randall directly, or schedule a free inspection 
              and we&apos;ll answer all your questions in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13367663464"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-8 py-4 rounded-[2px] font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (336) ROOFING
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
              >
                Schedule Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
