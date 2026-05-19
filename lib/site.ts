// Single source of truth for site-wide constants. Anything that needs an
// origin, an office phone, an office email, or a postal address should import
// from here so we never hard-code those strings in markup or JSON-LD.

export const SITE_URL = 'https://ncroofingservice.com'

export const FOUNDED_YEAR = 2018

export const OFFICE_PHONE = '+13367663464'
export const OFFICE_PHONE_DISPLAY = '(336) ROOFING'
export const OFFICE_PHONE_DIGITS = '(336) 766-3464'
export const OFFICE_EMAIL = 'info@ncroofingservice.com'

export const OFFICE_ADDRESS = {
  street: '5950 Mt. Harmony Church Rd',
  city: 'Rougemont',
  region: 'NC',
  postalCode: '27572',
  country: 'US',
} as const

/** Convenience: full URL for any in-app path. */
export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

/** Number of years the company has been in business (auto-updating). */
export function yearsInBusiness(now: Date = new Date()): number {
  return Math.max(1, now.getFullYear() - FOUNDED_YEAR)
}
