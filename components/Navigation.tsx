'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const residentialLinks = [
  { href: '/residential', label: 'All Residential Services' },
  { href: '/residential/roof-replacement', label: 'Roof Replacement' },
  { href: '/residential/roof-repair', label: 'Roof Repair' },
  { href: '/residential/storm-damage', label: 'Storm Damage & Insurance' },
  { href: '/residential/fortified-roofing', label: 'FORTIFIED Roofing' },
  { href: '/residential/metal-roofing', label: 'Metal Roofing' },
]

const commercialLinks = [
  { href: '/commercial', label: 'All Commercial Services' },
  { href: '/commercial/flat-roofing', label: 'Flat Roofing Systems' },
  { href: '/commercial/maintenance-programs', label: 'Maintenance Programs' },
]

const locationLinks = [
  { href: '/locations', label: 'All Locations' },
  { href: '/locations/raleigh-nc', label: 'Raleigh' },
  { href: '/locations/durham-nc', label: 'Durham' },
  { href: '/locations/cary-nc', label: 'Cary' },
  { href: '/locations/chapel-hill-nc', label: 'Chapel Hill' },
  { href: '/locations/apex-nc', label: 'Apex' },
  { href: '/locations/wake-forest-nc', label: 'Wake Forest' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [residentialOpen, setResidentialOpen] = useState(false)
  const [commercialOpen, setCommercialOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-1 max-w-[400px]">
            <Image
              src="/images/logos/NC ROOFING SERVICE-01.png"
              alt="NC Roofing Service"
              width={400}
              height={80}
              className="h-14 w-full object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="transition-colors font-medium text-sm text-brand-gray hover:text-brand-black"
            >
              Home
            </Link>

            {/* Residential Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 transition-colors font-medium text-sm text-brand-gray hover:text-brand-black"
              >
                Residential
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2 min-w-[220px]">
                  {residentialLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-brand-gray hover:bg-brand-red/5 hover:text-brand-red transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Commercial Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 transition-colors font-medium text-sm text-brand-gray hover:text-brand-black"
              >
                Commercial
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2 min-w-[220px]">
                  {commercialLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-brand-gray hover:bg-brand-red/5 hover:text-brand-red transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 transition-colors font-medium text-sm text-brand-gray hover:text-brand-black"
              >
                Locations
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2 min-w-[180px]">
                  {locationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-brand-gray hover:bg-brand-red/5 hover:text-brand-red transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/our-work"
              className="transition-colors font-medium text-sm text-brand-gray hover:text-brand-black"
            >
              Our Work
            </Link>

            <Link
              href="/about"
              className="transition-colors font-medium text-sm text-brand-gray hover:text-brand-black"
            >
              About
            </Link>

            <a
              href="tel:+13367663464"
              aria-label="Call (336) ROOFING"
              className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 rounded-[2px] font-semibold transition-colors shadow-md shadow-brand-red/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (336) ROOFING
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+13367663464"
              className="flex items-center justify-center w-10 h-10 bg-brand-red hover:bg-brand-red-dark text-white rounded-[2px] transition-colors"
              aria-label="Call us"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 bg-white">
            <Link
              href="/"
              className="block py-3 transition-colors font-medium border-b border-slate-100 text-brand-gray hover:text-brand-black"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Residential Section */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => setResidentialOpen(!residentialOpen)}
                className="flex items-center justify-between w-full py-3 transition-colors font-medium text-brand-gray"
              >
                Residential
                <svg className={`w-4 h-4 transition-transform ${residentialOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {residentialOpen && (
                <div className="pl-4 pb-2">
                  {residentialLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-sm text-brand-gray hover:text-brand-red transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Commercial Section */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => setCommercialOpen(!commercialOpen)}
                className="flex items-center justify-between w-full py-3 transition-colors font-medium text-brand-gray"
              >
                Commercial
                <svg className={`w-4 h-4 transition-transform ${commercialOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {commercialOpen && (
                <div className="pl-4 pb-2">
                  {commercialLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-sm text-brand-gray hover:text-brand-red transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Locations Section */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="flex items-center justify-between w-full py-3 transition-colors font-medium text-brand-gray"
              >
                Locations
                <svg className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {locationsOpen && (
                <div className="pl-4 pb-2">
                  {locationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-sm text-brand-gray hover:text-brand-red transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/our-work"
              className="block py-3 transition-colors font-medium border-b border-slate-100 text-brand-gray hover:text-brand-black"
              onClick={() => setIsOpen(false)}
            >
              Our Work
            </Link>

            <Link
              href="/about"
              className="block py-3 transition-colors font-medium border-b border-slate-100 text-brand-gray hover:text-brand-black"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <div className="mt-4 space-y-3">
              <a
                href="tel:+13367663464"
                className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-[2px] font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (336) ROOFING
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-brand-black hover:bg-slate-100 text-brand-black px-6 py-3 rounded-[2px] font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Free Inspection
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
