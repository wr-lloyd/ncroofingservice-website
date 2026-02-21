import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Roofing Services | NC Roofing Service | NC Triangle',
  description: 'Complete residential roofing services for NC Triangle homeowners. Roof replacement, repair, storm damage, FORTIFIED roofing, and metal roofing. GAF, Owens Corning, CertainTeed certified.',
  keywords: 'residential roofing NC, roof replacement Raleigh, roof repair Durham, storm damage roofing, FORTIFIED roofing NC',
}

const services = [
  {
    title: 'Roof Replacement',
    slug: 'roof-replacement',
    description: 'Complete roof replacement with premium materials and extended warranties up to 50 years.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: 'from-slate-700 to-slate-900',
    features: ['GAF, Owens Corning, CertainTeed certified', 'Up to 50-year warranties', 'Complete tear-off and disposal'],
  },
  {
    title: 'Roof Repair',
    slug: 'roof-repair',
    description: 'Fast, reliable repairs from leaks to storm damage. 24/7 emergency service available.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-amber-500 to-amber-600',
    features: ['24/7 emergency response', 'Leak detection & repair', 'Free inspection'],
  },
  {
    title: 'Storm Damage & Insurance',
    slug: 'storm-damage',
    description: 'Storm damage assessment and insurance claim support. We document, advocate, and repair.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'from-blue-600 to-blue-700',
    features: ['Free damage assessment', 'Insurance claim support', 'Adjuster meeting assistance'],
  },
  {
    title: 'FORTIFIED Roofing',
    slug: 'fortified-roofing',
    description: 'Storm-resistant roofing that may qualify for insurance discounts. IBHS certified.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'from-green-500 to-green-600',
    features: ['Insurance discounts', 'Hurricane/wind resistant', 'Third-party verified'],
  },
  {
    title: 'Metal Roofing',
    slug: 'metal-roofing',
    description: '50+ year durability with superior weather resistance. Energy efficient and low maintenance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-zinc-500 to-zinc-600',
    features: ['50+ year lifespan', 'Energy efficient', 'Wind & hail resistant'],
  },
]

const faqs = [
  {
    q: 'How do I know if I need a repair or replacement?',
    a: 'If damage is localized (a few shingles, small leak), repair is usually sufficient. If your roof is over 20 years old, has widespread damage, or repairs would cost more than 30% of replacement, a new roof is typically more economical. We provide honest assessments during our free inspections.'
  },
  {
    q: 'What certifications do you have?',
    a: 'We\'re certified by GAF, Owens Corning, and CertainTeed — the three largest roofing manufacturers. We\'re also FORTIFIED certified by IBHS for storm-resistant installations. These certifications allow us to offer extended warranties most contractors can\'t.'
  },
  {
    q: 'Do you help with insurance claims?',
    a: 'Yes! We specialize in storm damage claims. We document damage with photos and weather data, meet with adjusters, and advocate for fair compensation. Our detailed documentation often helps with claim approvals.'
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the entire NC Triangle including Raleigh, Durham, Cary, Chapel Hill, Apex, Wake Forest, and surrounding communities. We\'re based in Rougemont, NC.'
  },
  {
    q: 'How long does a roof replacement take?',
    a: 'Most residential roofs are completed in 1-3 days, depending on size and complexity. We\'ll give you a specific timeline before starting and keep you updated throughout the project.'
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

export default function ResidentialPage() {
  const faqSchema = generateFaqSchema()

  return (
    <main className="pt-20">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Residential Services</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">
              Residential Roofing Services
            </h1>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-8">
              Complete roof protection for NC Triangle homeowners. From repairs to full replacements, 
              we deliver quality craftsmanship backed by industry-leading warranties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
              >
                Get Free Inspection
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+19194758841"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors border border-white/20"
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

      {/* Certifications Banner */}
      <section className="py-6 bg-slate-800 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-300 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              GAF Certified
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Owens Corning
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              CertainTeed
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              FORTIFIED by IBHS
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              BBB A+ Rated
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Residential Roofing Solutions
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              From emergency repairs to complete replacements, we provide comprehensive roofing services 
              designed to protect your home and family.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/residential/${service.slug}`}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-red/30 hover:shadow-lg transition-all group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-brand-red font-medium group-hover:text-brand-red-dark transition-colors">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Why NC Roofing Service</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Professional Standards. Local Accountability.
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                We&apos;re not a franchise or a fly-by-night operation. NC Roofing Service is locally owned 
                and operated in Rougemont, NC. Owner Randall Butler lives and works in this community — 
                our reputation matters to us.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-1">Manufacturer Certified</h3>
                    <p className="text-slate-600">GAF, Owens Corning, and CertainTeed certified — access to premium warranties most contractors can&apos;t offer.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-1">FORTIFIED by IBHS</h3>
                    <p className="text-slate-600">We install storm-resistant roofing systems that may qualify for insurance discounts.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-1">Straightforward Pricing</h3>
                    <p className="text-slate-600">We explain every line item. No hidden fees, no surprises, no pressure.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-200">
                <div className="text-5xl font-bold text-brand-red mb-2">7+</div>
                <div className="text-slate-600">Years in Business</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-200">
                <div className="text-5xl font-bold text-green-600 mb-2">A+</div>
                <div className="text-slate-600">BBB Rating</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-200">
                <div className="text-5xl font-bold text-amber-600 mb-2">3</div>
                <div className="text-slate-600">Certifications</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-200">
                <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-slate-600">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Service Areas</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Serving the NC Triangle</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Raleigh', 'Durham', 'Cary', 'Chapel Hill', 'Apex', 'Wake Forest', 'Holly Springs', 'Morrisville', 'Garner', 'Hillsborough', 'Fuquay-Varina', 'Knightdale'].map((city) => (
              <Link 
                key={city}
                href={`/locations/${city.toLowerCase().replace(' ', '-')}-nc`}
                className="bg-white hover:bg-brand-red/5 border border-slate-200 hover:border-brand-red/30 rounded-xl p-4 text-center transition-all group"
              >
                <span className="text-slate-900 font-medium group-hover:text-brand-red transition-colors">{city}</span>
                <span className="text-slate-400 text-sm block">NC</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations" className="text-brand-red hover:underline text-sm font-medium">
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Common Questions</h2>
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
            Ready to Protect Your Home?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Get a free inspection and honest assessment from local professionals you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
            >
              Get Free Inspection
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+19194758841"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors border-2 border-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (919) 475-8841
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
