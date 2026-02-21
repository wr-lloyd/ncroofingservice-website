import { MetadataRoute } from 'next'

const cities = [
  'raleigh-nc', 'durham-nc', 'cary-nc', 'chapel-hill-nc', 'apex-nc', 'wake-forest-nc',
  'hillsborough-nc', 'holly-springs-nc', 'garner-nc', 'morrisville-nc', 'carrboro-nc',
  'pittsboro-nc', 'fuquay-varina-nc', 'knightdale-nc', 'clayton-nc', 'smithfield-nc',
  'mebane-nc', 'roxboro-nc', 'creedmoor-nc', 'butner-nc'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ncroofingservice.com'
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
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
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
  ]

  const resourcePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/resources/roof-replacement-cost-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/insurance-claim-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/metal-roofing-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
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

  return [...mainPages, ...residentialPages, ...commercialPages, ...resourcePages, ...locationPages, ...serviceCityPages]
}
