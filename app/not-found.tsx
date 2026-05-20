import Link from 'next/link'
import type { Metadata } from 'next'
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Page Not Found | NC Roofing Service',
  description:
    'The page you are looking for could not be found. Find roofing services, request an inspection, or call our office.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-lg w-full text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red mb-3">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          We can&apos;t find that page.
        </h1>
        <p className="text-slate-600 mb-8">
          The page you were looking for moved or no longer exists. Try one of these instead, or
          give us a call and we&apos;ll point you in the right direction.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-[2px] bg-brand-red hover:bg-brand-red-dark text-white font-semibold transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/request-inspection"
            className="inline-flex items-center justify-center px-5 py-3 rounded-[2px] border-2 border-slate-300 hover:border-brand-red text-slate-700 hover:text-brand-red font-semibold transition-colors"
          >
            Request a Free Inspection
          </Link>
        </div>

        <a
          href={`tel:${OFFICE_PHONE}`}
          className="inline-flex items-center justify-center gap-2 text-slate-700 hover:text-brand-red font-medium"
        >
          Or call us at {OFFICE_PHONE_DISPLAY}
        </a>

        <div className="mt-12 text-sm text-slate-500">
          <p className="mb-2">Popular pages:</p>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <li>
              <Link href="/residential" className="text-brand-red hover:underline">
                Residential Roofing
              </Link>
            </li>
            <li>
              <Link href="/commercial" className="text-brand-red hover:underline">
                Commercial Roofing
              </Link>
            </li>
            <li>
              <Link href="/financing" className="text-brand-red hover:underline">
                Financing
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-brand-red hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/locations" className="text-brand-red hover:underline">
                Service Areas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
