import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const priorityCities = [
  'raleigh-nc',
  'durham-nc',
  'cary-nc',
  'chapel-hill-nc',
  'apex-nc',
  'wake-forest-nc',
  'holly-springs-nc',
  'morrisville-nc',
] as const

const cityNames: Record<string, string> = {
  'raleigh-nc': 'Raleigh',
  'durham-nc': 'Durham',
  'cary-nc': 'Cary',
  'chapel-hill-nc': 'Chapel Hill',
  'apex-nc': 'Apex',
  'wake-forest-nc': 'Wake Forest',
  'holly-springs-nc': 'Holly Springs',
  'morrisville-nc': 'Morrisville',
}

const cityCounty: Record<string, string> = {
  'raleigh-nc': 'Wake County',
  'durham-nc': 'Durham County',
  'cary-nc': 'Wake County',
  'chapel-hill-nc': 'Orange County',
  'apex-nc': 'Wake County',
  'wake-forest-nc': 'Wake County',
  'holly-springs-nc': 'Wake County',
  'morrisville-nc': 'Wake County',
}

const services = {
  'roof-replacement': {
    title: 'Roof Replacement',
    description: 'Complete roof replacement services with premium materials and manufacturer warranties',
    longDescription: 'When repairs are no longer enough, a full roof replacement protects your home for decades to come. Our certified team removes your old roof down to the decking, inspects for damage, and installs a complete new roofing system.',
    benefits: [
      'Full tear-off and inspection of roof deck',
      'Premium shingles from GAF, Owens Corning, or CertainTeed',
      'Enhanced manufacturer warranties up to 50 years',
      'Proper ventilation and ice/water shield installation',
      'Complete cleanup and debris removal',
    ],
    features: [
      { title: 'Material Options', desc: 'Architectural shingles, designer shingles, metal roofing, and more' },
      { title: 'Warranty Coverage', desc: 'Up to 50-year manufacturer warranties with certified installation' },
      { title: 'Energy Efficiency', desc: 'Cool roof options available for reduced energy costs' },
    ],
    faqs: [
      { q: 'How long does a roof replacement take?', a: 'Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of your roof.' },
      { q: 'What materials do you recommend?', a: 'We typically recommend architectural shingles for their durability and value. For premium options, designer shingles or metal roofing offer enhanced protection and aesthetics.' },
      { q: 'Do I need to be home during the replacement?', a: 'No, you don\'t need to be home. We\'ll coordinate access and keep you updated throughout the project.' },
    ],
    parentLink: '/residential/roof-replacement',
  },
  'roof-repair': {
    title: 'Roof Repair',
    description: 'Professional roof repair services for leaks, storm damage, and general wear',
    longDescription: 'Not every roofing issue requires a full replacement. Our expert repair services address specific problems quickly and affordably, extending your roof\'s lifespan and preventing further damage.',
    benefits: [
      'Same-day emergency repair service available',
      'Leak detection and targeted repairs',
      'Shingle replacement and flashing repairs',
      'Gutter and drainage repairs',
      'Detailed inspection reports',
    ],
    features: [
      { title: 'Emergency Service', desc: '24/7 response for urgent roof repairs' },
      { title: 'Preventive Care', desc: 'Identify and fix small issues before they become major problems' },
      { title: 'Insurance Assistance', desc: 'Help with documentation for insurance claims' },
    ],
    faqs: [
      { q: 'How do I know if I need a repair vs. replacement?', a: 'We provide honest assessments. If your roof is under 15 years old and damage is localized, repairs often make sense. We\'ll show you all options and costs.' },
      { q: 'Do you fix all types of roof damage?', a: 'Yes, we repair shingle damage, leaks, flashing issues, vent problems, and more. If we find damage beyond economical repair, we\'ll discuss replacement options.' },
      { q: 'Can you repair my roof while I wait for insurance?', a: 'Yes, we can perform emergency tarping and temporary repairs to prevent further damage while your claim is processed.' },
    ],
    parentLink: '/residential/roof-repair',
  },
  'storm-damage': {
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage repair and insurance claim assistance',
    longDescription: 'When severe weather strikes, NC Roofing Service responds fast. We provide emergency tarping, thorough damage assessments, and work directly with your insurance company to ensure fair compensation.',
    benefits: [
      '24/7 emergency response',
      'Free storm damage inspections',
      'Insurance claim documentation and advocacy',
      'Emergency tarping to prevent further damage',
      'Direct billing to insurance when possible',
    ],
    features: [
      { title: 'Rapid Response', desc: 'Emergency crews available around the clock' },
      { title: 'Insurance Expertise', desc: 'We speak insurance language and advocate for fair claims' },
      { title: 'Complete Documentation', desc: 'Photos, reports, and estimates for your claim' },
    ],
    faqs: [
      { q: 'What should I do after a storm damages my roof?', a: 'First, document the damage with photos if safe. Then call us for a free inspection. We\'ll assess the damage and help you file your insurance claim.' },
      { q: 'Do you work with all insurance companies?', a: 'Yes, we work with all major insurance carriers and can meet with your adjuster to ensure all damage is documented.' },
      { q: 'How long do I have to file an insurance claim?', a: 'Most policies allow 1-2 years, but we recommend filing promptly. Some damage may worsen over time, and early documentation strengthens your claim.' },
    ],
    parentLink: '/residential/storm-damage',
  },
} as const

type ServiceKey = keyof typeof services

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = []
  
  for (const city of priorityCities) {
    for (const service of Object.keys(services)) {
      params.push({ city, service })
    }
  }
  
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; service: string }> }): Promise<Metadata> {
  const { city, service } = await params
  const cityName = cityNames[city]
  const serviceData = services[service as ServiceKey]
  
  if (!cityName || !serviceData) {
    return { title: 'Page Not Found' }
  }
  
  return {
    title: `${serviceData.title} in ${cityName}, NC | NC Roofing Service`,
    description: `Professional ${serviceData.title.toLowerCase()} services in ${cityName}, NC. ${serviceData.description}. Free inspections, honest pricing, certified contractors.`,
    keywords: `${serviceData.title.toLowerCase()} ${cityName} NC, ${cityName} roofing contractor, ${cityName} ${cityCounty[city]} roofer`,
  }
}

export default async function ServiceCityPage({ params }: { params: Promise<{ city: string; service: string }> }) {
  const { city, service } = await params
  const cityName = cityNames[city]
  const county = cityCounty[city]
  const serviceData = services[service as ServiceKey]
  
  if (!cityName || !serviceData || !priorityCities.includes(city as typeof priorityCities[number])) {
    notFound()
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceData.title} in ${cityName}, NC`,
    "provider": {
      "@type": "RoofingContractor",
      "name": "NC Roofing Service",
      "telephone": "+1-919-475-8841",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rougemont",
        "addressRegion": "NC",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedInPlace": {
        "@type": "State",
        "name": "North Carolina"
      }
    },
    "description": serviceData.description
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }

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
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-slate-500 hover:text-brand-red transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <Link href="/locations" className="text-slate-500 hover:text-brand-red transition-colors">Locations</Link>
            <span className="text-slate-400">/</span>
            <Link href={`/locations/${city}`} className="text-slate-500 hover:text-brand-red transition-colors">{cityName}</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">{serviceData.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">{county} • {cityName}, NC</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              {serviceData.title} in {cityName}, NC
            </h1>
            <p className="text-slate-300 text-xl mb-8">
              {serviceData.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
              >
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+19194758841"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (919) 475-8841
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                {serviceData.title} Services in {cityName}
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                When you choose NC Roofing Service for your {serviceData.title.toLowerCase()} project in {cityName}, 
                you get professional service backed by manufacturer certifications and local expertise.
              </p>
              <ul className="space-y-4">
                {serviceData.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {serviceData.features.map((feature, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Local */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why {cityName} Homeowners Choose Us
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We understand {cityName} homes and {county} weather patterns. Our local expertise 
              means better recommendations and faster service.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Local Experts', desc: `We know ${cityName} neighborhoods and building codes` },
              { title: 'Free Inspections', desc: 'No-obligation assessments with detailed reports' },
              { title: 'Certified Installers', desc: 'GAF, Owens Corning & CertainTeed certified' },
              { title: 'Fair Pricing', desc: 'Transparent quotes, no hidden fees or pressure' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Common Questions</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              {serviceData.title} FAQs for {cityName}
            </h2>
          </div>
          <div className="space-y-6">
            {serviceData.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Other Services in {cityName}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(services).map(([slug, svc]) => (
              slug !== service && (
                <Link
                  key={slug}
                  href={`/locations/${city}/${slug}`}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium transition-colors"
                >
                  {svc.title}
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Your {cityName} {serviceData.title} Project?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Get a free inspection and honest estimate from your local roofing experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Schedule Free Inspection
            </Link>
            <Link
              href={serviceData.parentLink}
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Learn More About {serviceData.title}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
