import type { Metadata } from 'next'

import ContactCTA from '@/components/ContactCTA'
import { SITE_URL } from '@/lib/site'
import { lenders } from '@/lib/financing'

import FinancingHero from './_sections/FinancingHero'
import PaymentCalculator from './_sections/PaymentCalculator'
import LenderGrid from './_sections/LenderGrid'
import Scenarios from './_sections/Scenarios'
import InsuranceBridge from './_sections/InsuranceBridge'
import HowItWorks from './_sections/HowItWorks'
import WhenNotToFinance from './_sections/WhenNotToFinance'
import FinancingFaq, { faqs } from './_sections/FinancingFaq'
import Disclosure from './_sections/Disclosure'

export const metadata: Metadata = {
  title:
    'Roof Financing in NC | Service Finance & Enhancify | NC Roofing Service',
  description:
    'Finance your new roof with Service Finance Company or Enhancify. Soft credit check, options in about two minutes, payments starting from a few hundred dollars per month on a typical Triangle replacement.',
  alternates: { canonical: '/financing' },
  openGraph: {
    title: 'Roof Financing — Soft Check, Options in Minutes',
    description:
      'Two trusted lenders, real monthly payments, no pressure. Prequalify without impacting your credit.',
    url: '/financing',
    type: 'website',
    images: [
      {
        url: '/images/about/team-jobsite-800x600.jpg',
        width: 800,
        height: 600,
        alt: 'NC Roofing Service crew on a Triangle, NC jobsite',
      },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
}

const offerJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialProduct',
  name: 'Roof financing for NC homeowners',
  url: `${SITE_URL}/financing`,
  category: 'Home Improvement Loan',
  provider: lenders.map((l) => ({
    '@type': 'Organization',
    name: l.name,
    url: l.externalUrl,
  })),
  offeredBy: {
    '@type': 'RoofingContractor',
    name: 'NC Roofing Service and Repair, LLC',
    url: SITE_URL,
  },
}

export default function FinancingPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
      <FinancingHero />
      <PaymentCalculator />
      <LenderGrid />
      <Scenarios />
      <InsuranceBridge />
      <HowItWorks />
      <WhenNotToFinance />
      <FinancingFaq />
      <Disclosure />
      <ContactCTA
        title="Ready to see your options?"
        subtitle="Free inspection, written scope, soft credit check. No pressure, no obligation — just clear numbers."
        primaryHref="/contact"
        primaryLabel="Request a free inspection"
      />
    </main>
  )
}
