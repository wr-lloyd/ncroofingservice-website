import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Roofing Services | NC Roofing Service | Rougemont NC',
  description: 'Professional commercial roofing services in the NC Triangle. Flat roofs, TPO, EPDM, metal roofing, maintenance programs. Licensed, insured, manufacturer certified.',
  keywords: 'commercial roofing NC, flat roof repair, TPO roofing, EPDM roofing, commercial roof maintenance',
}

const commercialServices = [
  {
    title: 'Flat Roof Systems',
    slug: 'flat-roofing',
    description: 'Expert installation and repair of commercial flat roof systems including TPO, EPDM, and modified bitumen.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['TPO single-ply membrane', 'EPDM rubber roofing', 'Modified bitumen systems', 'PVC roofing systems'],
  },
  {
    title: 'Commercial Metal Roofing',
    slug: null,
    description: 'Durable commercial metal roof installation for warehouses, retail, and industrial buildings.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: ['Standing seam systems', 'R-panel installation', 'Metal roof restoration'],
  },
  {
    title: 'Roof Maintenance Programs',
    slug: 'maintenance-programs',
    description: 'Scheduled inspections and preventive maintenance to extend roof life and protect your investment.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    features: ['Bi-annual inspections', 'Preventive repairs', 'Detailed documentation', 'Priority service'],
  },
  {
    title: 'Emergency Repairs',
    slug: null,
    description: 'Fast response commercial roof repair to minimize business disruption and protect your assets.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ['24/7 emergency service', 'Rapid leak repair', 'Storm damage response'],
  },
]

const propertyTypes = [
  'Office Buildings',
  'Retail Centers',
  'Warehouses',
  'Industrial Facilities',
  'Multi-Family Properties',
  'Religious Facilities',
  'Healthcare Buildings',
  'Educational Facilities',
]

function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Roofing Services",
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
      "@type": "State",
      "name": "North Carolina"
    },
    "description": "Professional commercial roofing services including flat roof systems, TPO, EPDM, metal roofing, and maintenance programs."
  }
}

export default function CommercialServicesPage() {
  const serviceSchema = generateServiceSchema()

  return (
    <main className="pt-20">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Commercial Division</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">
              Commercial Roofing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red-dark">Services</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-8">
              Professional roofing solutions for commercial properties throughout the NC Triangle. 
              Manufacturer certified, fully insured, and committed to minimal business disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
              >
                Request Commercial Assessment
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

      {/* Property Types */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm mb-6">Properties We Serve</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {propertyTypes.map((type) => (
              <span key={type} className="text-slate-700 text-sm font-medium">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Commercial Roofing Solutions
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              From new installations to maintenance programs, we provide comprehensive commercial roofing services 
              designed to protect your investment and minimize operational disruption.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {commercialServices.map((service) => {
              const ServiceWrapper = service.slug ? Link : 'div'
              const wrapperProps = service.slug ? { href: `/commercial/${service.slug}` } : {}
              
              return (
                <ServiceWrapper
                  key={service.title}
                  {...wrapperProps}
                  className={`bg-slate-50 rounded-2xl p-8 border border-slate-200 transition-all ${
                    service.slug ? 'hover:border-brand-red/30 hover:shadow-lg cursor-pointer group' : ''
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0 text-slate-700 ${
                      service.slug ? 'group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors' : ''
                    }`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold text-slate-900 mb-2 ${
                        service.slug ? 'group-hover:text-brand-red transition-colors' : ''
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                            <svg className="w-4 h-4 text-brand-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {service.slug && (
                        <span className="inline-flex items-center gap-2 text-brand-red font-medium mt-4 group-hover:text-brand-red-dark transition-colors">
                          Learn More
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                </ServiceWrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-16 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">24/7 Emergency Response</h3>
                <p className="text-slate-600">Roof leak? Storm damage? We respond quickly to protect your business.</p>
              </div>
            </div>
            <a
              href="tel:+19194758841"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-[2px] font-semibold transition-colors shadow-lg whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (919) 475-8841
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Why NC Roofing Service</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Commercial Project Standards
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fully Licensed & Insured</h3>
              <p className="text-slate-400">
                Comprehensive liability coverage and workers&apos; compensation for complete peace of mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Minimal Business Disruption</h3>
              <p className="text-slate-400">
                Flexible scheduling and efficient project management to keep your operations running.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Detailed Documentation</h3>
              <p className="text-slate-400">
                Complete project documentation including before/after photos and warranty information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Commercial Project?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Contact us for a no-obligation assessment of your commercial roofing needs. 
            We&apos;ll provide straightforward recommendations and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-colors shadow-lg"
            >
              Request Assessment
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
