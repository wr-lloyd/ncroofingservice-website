import Link from 'next/link'
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'

interface ContactCTAProps {
  title?: string
  subtitle?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

/**
 * Closing red-gradient CTA used at the bottom of About (and reusable on any
 * other landing page). All copy is overridable via props.
 */
export default function ContactCTA({
  title = 'Ready to Work With Us?',
  subtitle = 'Get a free assessment and consultation. No obligation, no pressure — just honest advice from local experts.',
  primaryHref = '/contact',
  primaryLabel = 'Request Assessment',
  secondaryHref = `tel:${OFFICE_PHONE}`,
  secondaryLabel = `Call ${OFFICE_PHONE_DISPLAY}`,
}: ContactCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-r from-brand-red to-brand-red-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
        <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-all hover:scale-105 text-lg"
          >
            {primaryLabel}
          </Link>
          <a
            href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-all text-lg"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
