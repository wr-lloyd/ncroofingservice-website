'use client'

import { useState } from 'react'

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="font-medium">🚨 24/7 Emergency Roof Repair Available</span>
        <span className="hidden md:inline text-red-200">—</span>
        <a href="tel:+13367663464" className="font-bold hover:underline hidden md:inline">
          Call Now: (336) ROOFING
        </a>
        <a href="tel:+13367663464" className="md:hidden font-bold bg-white text-red-600 px-3 py-1 rounded-full text-xs ml-2">
          CALL NOW
        </a>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1"
          aria-label="Dismiss"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
