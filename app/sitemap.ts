import { MetadataRoute } from 'next'
import { getAllTeamSlugs } from '@/lib/team'
import { SITE_URL } from '@/lib/site'

// Keep in sync with PUBLISHED_CITY_SLUGS in app/(site)/locations/page.tsx and
// the cityData keys in app/(site)/locations/[city]/page.tsx. Adding 'oxford-nc'
// also requires a middleware redirect from /locations/oxford to /locations/oxford-nc.
const cities = [
  'raleigh-nc', 'durham-nc', 'cary-nc', 'chapel-hill-nc', 'apex-nc', 'wake-forest-nc',
  'hillsborough-nc', 'holly-springs-nc', 'garner-nc', 'morrisville-nc', 'carrboro-nc',
  'pittsboro-nc', 'fuquay-varina-nc', 'knightdale-nc', 'clayton-nc', 'smithfield-nc',
  'mebane-nc', 'roxboro-nc', 'creedmoor-nc', 'butner-nc', 'oxford-nc'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  const currentDate = new Date()

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/residential`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/financing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/storm-check`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/certifications`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/request-inspection`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/start`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/what-to-look-for-hiring-roofer`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // The legacy /resources/* pages now 301 to chapters of The Honest Roof
  // Guide (see next.config.js redirects). They are intentionally excluded
  // from the sitemap; the canonical destinations are listed below.
  const guidePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guide/cost-estimator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guide/check-your-roof`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guide/plan-your-roof`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guide/pay-for-it`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guide/pick-a-roofer`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guide/install-day`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guide/after-the-job`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Downloadable / printable references. Slugs match lib/guide-downloads.ts.
    ...[
      'photo-checklist',
      'ground-walkaround-checklist',
      'repair-or-replace-decision-tree',
      'nine-components-of-a-real-roof',
      'materials-comparison',
      'insurance-claim-walkthrough',
      'payment-options-worksheet',
      'five-non-negotiables',
      'twenty-questions-to-ask-every-roofer',
      'storm-chaser-red-flags',
      'reference-check-script',
      'week-before-prep-checklist',
      'end-of-day-handoff-checklist',
      'first-30-days-checklist',
      'maintenance-timeline',
      'warranty-explainer',
    ].map((slug) => ({
      url: `${baseUrl}/guide/downloads/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]

  const residentialPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/residential/roof-replacement`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/residential/roof-repair`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/residential/storm-damage`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/residential/fortified-roofing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/residential/metal-roofing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const commercialPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/commercial/flat-roofing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial/maintenance-programs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const locationPages: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const priorityCities = [
    'raleigh-nc', 'durham-nc', 'cary-nc', 'chapel-hill-nc',
    'apex-nc', 'wake-forest-nc', 'holly-springs-nc', 'morrisville-nc'
  ]
  const serviceTypes = ['roof-replacement', 'roof-repair', 'storm-damage']

  const serviceCityPages: MetadataRoute.Sitemap = priorityCities.flatMap(city =>
    serviceTypes.map(service => ({
      url: `${baseUrl}/locations/${city}/${service}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  const teamProfilePages: MetadataRoute.Sitemap = getAllTeamSlugs().map((slug) => ({
    url: `${baseUrl}/team/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...mainPages,
    ...residentialPages,
    ...commercialPages,
    ...guidePages,
    ...blogPages,
    ...locationPages,
    ...serviceCityPages,
    ...teamProfilePages,
  ]
}
