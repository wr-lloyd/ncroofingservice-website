import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NC Roofing Service and Repair',
    short_name: 'NC Roofing',
    description:
      'Professional roofing and exterior systems serving the NC Triangle. Free inspections, certified installers, insurance-claim help.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#c8102e',
    icons: [
      {
        src: '/images/logos/logo-number.png',
        sizes: '520x180',
        type: 'image/png',
      },
    ],
  }
}
