'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks: { href: string; label: string; highlight?: boolean; badge?: string }[] = [
    { href: '/', label: 'Home' },
    { href: '/storm-check', label: 'Storm Check', highlight: true, badge: '⚡' },
    { href: '/start', label: 'Start Here' },
    { href: '/services', label: 'Services' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logos/NCRoofingLogo_BW.svg"
              alt="NC Roofing Service"
              width={144}
              height={144}
              className="w-36 h-36"
            />
            <div className="hidden sm:block">
              <span className="text-slate-900 font-bold text-lg">NC Roofing Service</span>
              <span className="text-slate-500 text-xs block -mt-1">Your Local NC Roofing and Exterior Systems Provider</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium text-sm flex items-center gap-1 ${
                  link.highlight 
                    ? 'text-orange-600 hover:text-orange-700' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.badge && <span>{link.badge}</span>}
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+19194758841"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-md shadow-blue-600/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (919) 475-8841
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+19194758841"
              className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 transition-colors font-medium border-b border-slate-100 ${
                  link.highlight ? 'text-orange-600' : 'text-slate-600 hover:text-slate-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.badge && <span className="mr-1">{link.badge}</span>}
                {link.label}
              </Link>
            ))}
            <div className="mt-4 space-y-3">
              <a
                href="tel:+19194758841"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (919) 475-8841
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors"
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
