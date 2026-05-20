'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      // Surfaced in dev so we can fix it; in prod we keep it quiet for visitors.
      console.error(error)
    }
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-lg w-full text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red mb-3">
          Something went wrong
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          We hit a snag loading that page.
        </h1>
        <p className="text-slate-600 mb-8">
          Try again, or call our office and we&apos;ll help you right away.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center px-5 py-3 rounded-[2px] bg-brand-red hover:bg-brand-red-dark text-white font-semibold transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-[2px] border-2 border-slate-300 hover:border-brand-red text-slate-700 hover:text-brand-red font-semibold transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <a
          href={`tel:${OFFICE_PHONE}`}
          className="inline-flex items-center justify-center gap-2 text-slate-700 hover:text-brand-red font-medium"
        >
          Or call us at {OFFICE_PHONE_DISPLAY}
        </a>

        {error.digest && (
          <p className="mt-8 text-xs text-slate-400 font-mono">
            Reference: {error.digest}
          </p>
        )}
      </div>
    </main>
  )
}
