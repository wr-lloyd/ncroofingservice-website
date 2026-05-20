import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const redirects: Record<string, string> = {
  '/services/roof-replacement': '/residential/roof-replacement',
  '/services/roof-repair': '/residential/roof-repair',
  '/services/storm-damage-insurance': '/residential/storm-damage',
  '/services/fortified-roofing': '/residential/fortified-roofing',
  '/services/commercial': '/commercial',
  '/services/gutters': '/residential#additional-services',
  '/services/siding': '/residential#additional-services',
  '/services/soffit-fascia': '/residential#additional-services',
  '/services/pergolas': '/residential#additional-services',
  '/services': '/residential',
}

const locationRedirects: Record<string, string> = {
  '/locations/raleigh': '/locations/raleigh-nc',
  '/locations/durham': '/locations/durham-nc',
  '/locations/chapel-hill': '/locations/chapel-hill-nc',
  '/locations/cary': '/locations/cary-nc',
  '/locations/apex': '/locations/apex-nc',
  '/locations/wake-forest': '/locations/wake-forest-nc',
  '/locations/morrisville': '/locations/morrisville-nc',
  '/locations/holly-springs': '/locations/holly-springs-nc',
  '/locations/garner': '/locations/garner-nc',
  '/locations/fuquay-varina': '/locations/fuquay-varina-nc',
  '/locations/hillsborough': '/locations/hillsborough-nc',
  '/locations/knightdale': '/locations/knightdale-nc',
  '/locations/carrboro': '/locations/carrboro-nc',
  '/locations/pittsboro': '/locations/pittsboro-nc',
  '/locations/sanford': '/locations/sanford-nc',
  '/locations/roxboro': '/locations/roxboro-nc',
  '/locations/creedmoor': '/locations/creedmoor-nc',
  '/locations/butner': '/locations/butner-nc',
  '/locations/mebane': '/locations/mebane-nc',
  '/locations/oxford': '/locations/oxford-nc',
  '/locations/clayton': '/locations/clayton-nc',
  '/locations/smithfield': '/locations/smithfield-nc',
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (redirects[pathname]) {
    const url = request.nextUrl.clone()
    url.pathname = redirects[pathname]
    return NextResponse.redirect(url, 301)
  }

  if (locationRedirects[pathname]) {
    const url = request.nextUrl.clone()
    url.pathname = locationRedirects[pathname]
    return NextResponse.redirect(url, 301)
  }

  if (pathname.startsWith('/services/') && !redirects[pathname]) {
    const url = request.nextUrl.clone()
    url.pathname = '/residential'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/services/:path*',
    '/locations/raleigh',
    '/locations/durham',
    '/locations/chapel-hill',
    '/locations/cary',
    '/locations/apex',
    '/locations/wake-forest',
    '/locations/morrisville',
    '/locations/holly-springs',
    '/locations/garner',
    '/locations/fuquay-varina',
    '/locations/hillsborough',
    '/locations/knightdale',
    '/locations/carrboro',
    '/locations/pittsboro',
    '/locations/sanford',
    '/locations/roxboro',
    '/locations/creedmoor',
    '/locations/butner',
    '/locations/mebane',
    '/locations/oxford',
    '/locations/clayton',
    '/locations/smithfield',
  ],
}
