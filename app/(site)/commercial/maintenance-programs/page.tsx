import Link from 'next/link'
import { Metadata } from 'next'
import { OFFICE_PHONE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Commercial Roof Maintenance Programs | NC Roofing Service',
  description: 'Preventive commercial roof maintenance programs in the NC Triangle. Bi-annual inspections, priority service, detailed documentation. Extend your roof life by 25%+.',
  keywords: 'commercial roof maintenance, preventive roof maintenance, roof inspection program, commercial roof care',
}

const programFeatures = [
  {
    title: 'Bi-Annual Inspections',
    description: 'Comprehensive roof inspections in spring and fall to identify issues before they become costly problems.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Minor Repairs Included',
    description: 'Small repairs like resealing flashings, patching minor damage, and clearing drains are included in your program.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Detailed Documentation',
    description: 'Every inspection includes photos, condition reports, and recommendations. Track your roof health over time.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Priority Emergency Service',
    description: 'Maintenance program members receive priority response for emergency repairs and storm damage.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Drain Cleaning',
    description: 'Regular clearing of roof drains, scuppers, and gutters to prevent water ponding and damage.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
  },
  {
    title: 'Warranty Support',
    description: 'We help maintain manufacturer warranty compliance and document all work for your records.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const benefits = [
  { stat: '25%+', label: 'Extended Roof Life', desc: 'Regular maintenance can extend your roof lifespan by 25% or more' },
  { stat: '80%', label: 'Problem Prevention', desc: 'Most roof failures are preventable with proper maintenance' },
  { stat: '5-10x', label: 'Cost Savings', desc: 'Preventive maintenance costs a fraction of emergency repairs' },
  { stat: '100%', label: 'Documentation', desc: 'Complete records for warranty claims and property management' },
]

const faqs = [
  {
    question: 'How often should a commercial roof be inspected?',
    answer: 'We recommend bi-annual inspections - once in spring after winter weather and once in fall before harsh conditions. Additional inspections may be needed after severe storms or if you notice any issues.',
  },
  {
    question: 'What does a roof maintenance inspection include?',
    answer: 'Our inspections cover membrane condition, seam integrity, flashing inspection, drain and scupper clearing, HVAC curb inspection, penetration sealing check, overall drainage assessment, and photo documentation of any concerns.',
  },
  {
    question: 'How much does a maintenance program cost?',
    answer: 'Program costs vary based on roof size, type, and condition. Most commercial properties see annual costs between $0.03-$0.08 per square foot. The investment typically pays for itself many times over through extended roof life and avoided repairs.',
  },
  {
    question: 'Will maintenance help with my warranty?',
    answer: 'Yes. Most manufacturer warranties require regular maintenance. Our program ensures you stay compliant and provides documentation to support any warranty claims.',
  },
]

function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Roof Maintenance Programs",
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
    "description": "Preventive commercial roof maintenance programs including bi-annual inspections, minor repairs, and priority emergency service."
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

export default function MaintenanceProgramsPage() {
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
            <span className="text-slate-900 font-medium">Maintenance Programs</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-slate-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Preventive Maintenance</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Commercial Roof Maintenance Programs
            </h1>
            <p className="text-slate-300 text-xl mb-8">
              Protect your roofing investment with scheduled inspections and preventive care. 
              Extend roof life, prevent costly repairs, and maintain warranty compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
              >
                Get Program Details
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

      {/* Benefits Stats */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">{benefit.stat}</div>
                <div className="text-slate-900 font-semibold mb-1">{benefit.label}</div>
                <p className="text-slate-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">What&apos;s Included</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Maintenance Program Features
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Our comprehensive maintenance programs are designed to catch problems early, 
              extend roof life, and protect your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">The Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              How Our Program Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Initial Assessment', desc: 'We inspect your roof and document current condition as a baseline for future comparison.' },
              { step: '2', title: 'Custom Program', desc: 'Based on your roof type, age, and condition, we create a maintenance plan tailored to your needs.' },
              { step: '3', title: 'Scheduled Service', desc: 'We perform inspections and maintenance on schedule, with reports delivered after each visit.' },
              { step: '4', title: 'Ongoing Protection', desc: 'Year after year, your roof stays in optimal condition with documented care history.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white">Maintenance Programs for All Commercial Properties</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Office Buildings', 'Retail Centers', 'Warehouses', 'Industrial Facilities', 'Multi-Family Properties', 'Healthcare Facilities', 'Religious Buildings', 'Educational Facilities'].map((type) => (
              <span key={type} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Maintenance Program FAQs
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
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Protect Your Roofing Investment
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Get a customized maintenance program designed for your property. Contact us for details and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-green-700 px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Request Program Information
            </Link>
            <Link
              href="/commercial/flat-roofing"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              View Flat Roofing Options
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
