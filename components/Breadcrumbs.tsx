'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  className?: string
}

const pathLabels: Record<string, string> = {
  residential: 'Residential',
  commercial: 'Commercial',
  locations: 'Locations',
  resources: 'Resources',
  certifications: 'Certifications',
  contact: 'Contact',
  about: 'About',
  'our-work': 'Our Work',
  faq: 'FAQ',
  'storm-check': 'Storm Check',
  'roof-replacement': 'Roof Replacement',
  'roof-repair': 'Roof Repair',
  'storm-damage': 'Storm Damage',
  'fortified-roofing': 'FORTIFIED Roofing',
  'metal-roofing': 'Metal Roofing',
  'flat-roofing': 'Flat Roofing',
  'maintenance-programs': 'Maintenance Programs',
  'roof-replacement-cost-guide': 'Roof Replacement Cost Guide',
  'insurance-claim-guide': 'Insurance Claim Guide',
  'metal-roofing-guide': 'Metal Roofing Guide',
}

const cityLabels: Record<string, string> = {
  'raleigh-nc': 'Raleigh',
  'durham-nc': 'Durham',
  'cary-nc': 'Cary',
  'chapel-hill-nc': 'Chapel Hill',
  'apex-nc': 'Apex',
  'wake-forest-nc': 'Wake Forest',
  'holly-springs-nc': 'Holly Springs',
  'morrisville-nc': 'Morrisville',
  'hillsborough-nc': 'Hillsborough',
  'garner-nc': 'Garner',
  'carrboro-nc': 'Carrboro',
  'pittsboro-nc': 'Pittsboro',
  'fuquay-varina-nc': 'Fuquay-Varina',
  'knightdale-nc': 'Knightdale',
  'clayton-nc': 'Clayton',
  'smithfield-nc': 'Smithfield',
  'mebane-nc': 'Mebane',
  'roxboro-nc': 'Roxboro',
  'creedmoor-nc': 'Creedmoor',
  'butner-nc': 'Butner',
}

function getLabel(segment: string): string {
  return pathLabels[segment] || cityLabels[segment] || segment.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://ncroofingservice.com${item.href}` : undefined
    }))
  }
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname()
  
  const breadcrumbItems: BreadcrumbItem[] = items || (() => {
    const segments = pathname.split('/').filter(Boolean)
    const result: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]
    
    let currentPath = ''
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === segments.length - 1
      result.push({
        label: getLabel(segment),
        href: isLast ? undefined : currentPath,
      })
    })
    
    return result
  })()

  if (breadcrumbItems.length <= 1) return null

  const schema = generateBreadcrumbSchema(breadcrumbItems)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav 
        className={`bg-slate-100 py-4 border-b border-slate-200 ${className}`}
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-slate-400" aria-hidden="true">/</span>
                )}
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="text-slate-500 hover:text-brand-red transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-slate-900 font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
