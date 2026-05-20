import Link from 'next/link'
import { Metadata } from 'next'
import { OFFICE_PHONE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Commercial Flat Roofing Systems | TPO, EPDM, PVC | NC Roofing Service',
  description: 'Expert commercial flat roof installation and repair in the NC Triangle. TPO, EPDM, PVC, and modified bitumen systems. Licensed, insured, manufacturer certified.',
  keywords: 'flat roof NC, TPO roofing, EPDM roofing, PVC roofing, commercial flat roof repair, modified bitumen',
}

const roofingSystems = [
  {
    name: 'TPO Roofing',
    fullName: 'Thermoplastic Polyolefin',
    description: 'Energy-efficient, highly reflective membrane that reduces cooling costs and provides excellent weather resistance.',
    benefits: [
      'Energy Star rated - reflects UV rays',
      'Heat-welded seams for superior leak protection',
      '20-30 year lifespan with proper maintenance',
      'Resistant to punctures, tears, and impacts',
      'Environmentally friendly - 100% recyclable',
    ],
    idealFor: 'New construction, re-roofing projects, buildings prioritizing energy efficiency',
    color: 'blue',
  },
  {
    name: 'EPDM Roofing',
    fullName: 'Ethylene Propylene Diene Monomer',
    description: 'Time-tested rubber roofing system known for durability and cost-effectiveness. Industry standard for decades.',
    benefits: [
      'Proven 40+ year track record',
      'Excellent UV and ozone resistance',
      'Flexible in extreme temperatures',
      'Low maintenance requirements',
      'Cost-effective installation and repairs',
    ],
    idealFor: 'Budget-conscious projects, existing EPDM replacement, buildings with HVAC equipment',
    color: 'slate',
  },
  {
    name: 'PVC Roofing',
    fullName: 'Polyvinyl Chloride',
    description: 'Premium single-ply membrane with superior chemical resistance. Ideal for restaurants and buildings with rooftop equipment.',
    benefits: [
      'Exceptional chemical and grease resistance',
      'Fire-resistant properties',
      'Heat-welded seams - strongest bond available',
      'Highly reflective surface',
      '25-30 year lifespan typical',
    ],
    idealFor: 'Restaurants, food processing, buildings with chemical exposure, healthcare facilities',
    color: 'green',
  },
  {
    name: 'Modified Bitumen',
    fullName: 'Modified Bitumen Roofing',
    description: 'Multi-layer asphalt system providing redundant protection. Traditional choice with modern performance.',
    benefits: [
      'Multiple layers for redundant waterproofing',
      'Easy to repair and maintain',
      'Excellent foot traffic durability',
      'Performs well in varied climates',
      'Cost-effective for complex roofs',
    ],
    idealFor: 'Buildings with heavy foot traffic, rooftop equipment access, complex roof geometries',
    color: 'amber',
  },
]

const faqs = [
  {
    question: 'How long does a commercial flat roof last?',
    answer: 'Commercial flat roof lifespan varies by material: TPO (20-30 years), EPDM (25-30 years), PVC (25-30 years), and modified bitumen (20-25 years). Regular maintenance and timely repairs can extend these lifespans significantly.',
  },
  {
    question: 'What is the best flat roofing system for my building?',
    answer: 'The best system depends on your specific needs. TPO is ideal for energy efficiency, PVC for chemical resistance, EPDM for budget-conscious projects, and modified bitumen for complex roofs or heavy traffic areas. We evaluate your building, budget, and priorities to recommend the optimal solution.',
  },
  {
    question: 'How much does commercial flat roofing cost?',
    answer: 'Commercial flat roofing typically costs between $5-$12 per square foot installed, depending on the system chosen, roof condition, and project complexity. We provide detailed, transparent quotes after assessing your specific project.',
  },
  {
    question: 'Can you install a new roof over my existing flat roof?',
    answer: 'In many cases, yes. A roof-over can be cost-effective if your existing roof and decking are in good condition. We\'ll inspect your current roof and advise whether a tear-off or overlay is the better option for long-term performance.',
  },
  {
    question: 'Do you offer maintenance programs for commercial roofs?',
    answer: 'Yes, we offer preventive maintenance programs that include bi-annual inspections, minor repairs, detailed reporting, and priority emergency service. Regular maintenance can extend roof life by 25% or more.',
  },
]

function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Flat Roofing Services",
    "provider": {
      "@type": "RoofingContractor",
      "name": "NC Roofing Service",
      "telephone": OFFICE_PHONE,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rougemont",
        "addressRegion": "NC",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "North Carolina"
    },
    "description": "Expert commercial flat roof installation and repair including TPO, EPDM, PVC, and modified bitumen systems."
  }
}

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

export default function FlatRoofingPage() {
  const serviceSchema = generateServiceSchema()
  const faqSchema = generateFAQSchema()

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
            <Link href="/commercial" className="text-slate-500 hover:text-brand-red transition-colors">Commercial</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">Flat Roofing</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Commercial Roofing</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Flat Roofing Systems
            </h1>
            <p className="text-slate-300 text-xl mb-8">
              Expert installation and repair of TPO, EPDM, PVC, and modified bitumen roofing systems. 
              We help you choose the right system for your building&apos;s needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
              >
                Get Free Assessment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={`tel:${OFFICE_PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
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

      {/* Roofing Systems */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Roofing Options</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Flat Roofing Systems We Install
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Each system has unique advantages. We&apos;ll help you select the best option based on 
              your building type, budget, and performance requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {roofingSystems.map((system) => (
              <div 
                key={system.name}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    system.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    system.color === 'slate' ? 'bg-slate-200 text-slate-700' :
                    system.color === 'green' ? 'bg-green-100 text-green-600' :
                    'bg-amber-100 text-amber-600'
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{system.name}</h3>
                    <p className="text-slate-500 text-sm">{system.fullName}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6">{system.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {system.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm">
                    <span className="font-semibold text-slate-900">Ideal for: </span>
                    <span className="text-slate-600">{system.idealFor}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Commercial Flat Roof Installation
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Assessment', desc: 'Thorough inspection of existing roof, substrate, and drainage. We identify all issues and options.' },
              { step: '2', title: 'Recommendation', desc: 'Detailed proposal with system options, pricing, timeline, and warranty information.' },
              { step: '3', title: 'Installation', desc: 'Professional installation with minimal disruption. We coordinate around your business hours.' },
              { step: '4', title: 'Warranty & Support', desc: 'Manufacturer warranty registration, documentation, and ongoing maintenance options.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Flat Roofing FAQs
            </h2>
          </div>

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
      <section className="py-20 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Flat Roofing Project?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Get a free assessment and honest recommendation for your commercial building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Request Free Assessment
            </Link>
            <Link
              href="/commercial/maintenance-programs"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              View Maintenance Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
