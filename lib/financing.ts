// Single source of truth for financing partners + calculator constants.
//
// Placeholder URLs/IDs are marked `TODO` and should be swapped for the
// real contractor-tagged deep links once Randy confirms them with each
// lender's portal.

import type { IconName } from '@/components/Icon'

export type Lender = {
  id: 'service-finance' | 'enhancify'
  name: string
  tagline: string
  description: string
  bestFor: string[]
  icon: IconName
  iconBg: string
  iconColor: string
  /** Optional logo asset in /public/images/lenders/. Falls back to icon. */
  logo?: string
  /** Public marketing site (safe to link from any context). */
  externalUrl: string
  /** Contractor-tagged application URL. TODO: confirm with vendor. */
  applyUrl: string
  /** High-level program facts shown on the dedicated /financing page. */
  facts: {
    minFico: string
    maxFunding: string
    termRange: string
    aprRange: string
    promoOffers: string
    decisionSpeed: string
  }
}

export const lenders: Lender[] = [
  {
    id: 'service-finance',
    name: 'Service Finance Company',
    tagline: 'Established, FHA Title I–licensed.',
    description:
      'Traditional installment loans with promotional and standard terms. A good fit if you want a single, well-known lender and predictable monthly payments. Service Finance has been financing home-improvement projects nationwide for decades.',
    bestFor: [
      'Standard 5–10 year terms',
      'Fixed monthly payments',
      'Qualified credit profiles',
    ],
    icon: 'shield-check',
    iconBg: 'bg-blue-100',
    iconColor: 'text-brand-red',
    // TODO: drop a vendor-approved logo at /public/images/lenders/service-finance.svg
    // logo: '/images/lenders/service-finance.svg',
    externalUrl: 'https://www.svcfin.com/',
    applyUrl: 'https://apply.svcfin.com/?dealer=NCROOFING', // TODO: confirm
    facts: {
      minFico: '640+',
      maxFunding: '$55,000',
      termRange: '24 – 132 months',
      aprRange: '7.99% – 17.99% APR',
      promoOffers: 'Promotional & standard installment terms',
      decisionSpeed: 'Same-day decision in most cases',
    },
  },
  {
    id: 'enhancify',
    name: 'Enhancify',
    tagline: '30+ lenders compete for your application.',
    description:
      'One short form, multiple offers side by side — including 0% promotional plans when you qualify. Funding up to $200,000 with credit profiles from 550 to 850. Most homeowners see options in under two minutes.',
    bestFor: [
      'Shoppers who want choice',
      '0% promo offers when eligible',
      'Wider credit range (550 – 850)',
    ],
    icon: 'sparkles',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    // TODO: drop a vendor-approved logo at /public/images/lenders/enhancify.svg
    // logo: '/images/lenders/enhancify.svg',
    externalUrl: 'https://enhancify.com/',
    applyUrl: 'https://app.enhancify.com/apply/ncroofingservice', // TODO: confirm
    facts: {
      minFico: '550+',
      maxFunding: '$200,000',
      termRange: '24 – 180 months',
      aprRange: '0% promo – 24.99% APR',
      promoOffers: '0% same-as-cash promos available',
      decisionSpeed: 'Instant pre-approval (~2 minutes)',
    },
  },
]

// ---------------------------------------------------------------------------
// Calculator constants — used on /financing
// ---------------------------------------------------------------------------

/**
 * Representative Triangle roof replacement cost. Keep loosely in sync with
 * the cost guide at /resources/roof-replacement-cost-guide so the numbers
 * across the site tell a consistent story.
 */
export const REPRESENTATIVE_PROJECT_COST = 15_500

/** APR tiers shown in the calculator. Illustrative; actual APR set by lender. */
export const APR_TIERS = [
  { label: 'Excellent (740+)', apr: 0.0799 },
  { label: 'Good (680–739)', apr: 0.1099 },
  { label: 'Fair (620–679)', apr: 0.1499 },
] as const

export const TERM_OPTIONS_MONTHS = [24, 60, 84, 120] as const

export const MIN_PROJECT_COST = 3_000
export const MAX_PROJECT_COST = 60_000

/**
 * Standard amortization formula. Returns the monthly payment in dollars.
 * Handles a 0% APR (used for promotional same-as-cash plans).
 */
export function monthlyPayment(
  principal: number,
  aprDecimal: number,
  termMonths: number
): number {
  if (termMonths <= 0) return principal
  if (aprDecimal === 0) return principal / termMonths
  const r = aprDecimal / 12
  return (principal * r) / (1 - Math.pow(1 + r, -termMonths))
}

/** Format a number as USD with no cents (used for sliders + headlines). */
export function formatUsd(n: number): string {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
}

/** Format a number as USD with cents (used for monthly payment display). */
export function formatUsdCents(n: number): string {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
