import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Certifications & Credentials | NC Roofing Service',
  description: 'NC Roofing Service is GAF Certified, Owens Corning Preferred, CertainTeed credentialed, and FORTIFIED by IBHS. Learn about our professional credentials and what they mean for your roof.',
  keywords: 'GAF certified roofer NC, Owens Corning contractor, CertainTeed installer, FORTIFIED roofing NC, BBB accredited roofer',
  alternates: { canonical: '/certifications' },
}

const certifications = [
  {
    name: 'GAF Certified Contractor',
    organization: 'GAF',
    description: 'GAF is North America\'s largest roofing manufacturer. As a GAF Certified Contractor, we\'ve met their strict standards for professionalism, training, and customer satisfaction.',
    benefits: [
      'Access to GAF\'s best warranties (up to 50 years)',
      'Factory-trained installation techniques',
      'Ongoing education requirements',
      'Background and insurance verification',
    ],
    whatItMeans: 'You get professionally installed roofing with warranty coverage that most contractors cannot offer.',
    color: 'red',
  },
  {
    name: 'Owens Corning Preferred Contractor',
    organization: 'Owens Corning',
    description: 'Owens Corning is a global leader in roofing and building materials. Preferred Contractor status means we meet their requirements for quality, service, and business practices.',
    benefits: [
      'Enhanced warranty options',
      'Access to exclusive products',
      'Professional installation training',
      'Liability insurance requirements',
    ],
    whatItMeans: 'Premium material options with manufacturer-backed warranties and installation quality assurance.',
    color: 'pink',
  },
  {
    name: 'CertainTeed Credentialed Installer',
    organization: 'CertainTeed',
    description: 'CertainTeed has been manufacturing building products since 1904. Our credentialed status demonstrates expertise in their roofing systems.',
    benefits: [
      'SureStart Plus warranty eligibility',
      'Product-specific training',
      'Professional installation standards',
      'Quality commitment verification',
    ],
    whatItMeans: 'Expert installation of CertainTeed products with extended warranty options unavailable through non-credentialed contractors.',
    color: 'blue',
  },
  {
    name: 'FORTIFIED by IBHS',
    organization: 'Insurance Institute for Business & Home Safety',
    description: 'FORTIFIED is a building standard that goes beyond code to protect your home from severe weather. We\'re trained and authorized to install FORTIFIED roofing systems.',
    benefits: [
      'Hurricane and severe weather resistance',
      'Potential insurance premium discounts',
      'Third-party verified installation',
      'Beyond-code construction standards',
    ],
    whatItMeans: 'Your roof is built to withstand severe weather, potentially qualifying for insurance discounts.',
    color: 'green',
  },
]

const businessCredentials = [
  {
    name: 'BBB A+ Accredited',
    description: 'Better Business Bureau accreditation since 2023 with an A+ rating. We maintain high standards for customer service and dispute resolution.',
  },
  {
    name: 'Licensed in North Carolina',
    description: 'Fully licensed to perform roofing work throughout North Carolina, meeting all state requirements for contractor operations.',
  },
  {
    name: 'Fully Insured',
    description: 'Comprehensive general liability insurance and workers\' compensation coverage protects you and our team on every project.',
  },
  {
    name: 'Locally Owned & Operated',
    description: 'Based in Rougemont, NC since 2018. We\'re your neighbors—our reputation in this community matters to us.',
  },
]

export default function CertificationsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Why It Matters</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Our Certifications & Credentials
            </h1>
            <p className="text-slate-300 text-xl">
              Professional certifications aren&apos;t just badges—they&apos;re your assurance of quality installation, 
              premium materials, and warranty coverage that protects your investment.
            </p>
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Certifications Matter</h2>
            <p className="text-slate-600">
              Anyone can claim to be a roofer. But manufacturer certifications require verified training, 
              insurance, and business practices. Most importantly, they unlock warranty options that 
              non-certified contractors simply cannot offer. When you choose a certified contractor, 
              you&apos;re choosing protection that lasts decades.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturer Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Professional Standards</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Manufacturer Certifications
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div 
                key={cert.name}
                className="bg-white rounded-2xl p-8 border border-slate-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    cert.color === 'red' ? 'bg-red-100 text-red-600' :
                    cert.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                    cert.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{cert.name}</h3>
                    <p className="text-slate-500 text-sm">{cert.organization}</p>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">{cert.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">What This Enables:</h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                        <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm">
                    <span className="font-semibold text-slate-900">What it means for you: </span>
                    <span className="text-slate-600">{cert.whatItMeans}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Business Standards</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Additional Credentials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessCredentials.map((cred) => (
              <div key={cred.name} className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{cred.name}</h3>
                <p className="text-slate-600 text-sm">{cred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">What Sets NC Roofing Service Apart</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Multiple Certifications',
                desc: 'We maintain certifications with multiple major manufacturers, giving you more material and warranty options.',
              },
              {
                title: 'Local Expertise',
                desc: 'Based in Rougemont since 2018, we understand NC building codes, weather patterns, and what your roof needs.',
              },
              {
                title: 'Transparent Pricing',
                desc: 'Certifications mean quality—not inflated prices. We provide honest, competitive quotes for certified work.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-brand-red/20 text-brand-red rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work with Certified Professionals?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Get a free inspection from a team that takes quality seriously.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Schedule Free Inspection
            </Link>
            <Link
              href="/residential"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
