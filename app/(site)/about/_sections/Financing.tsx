import Link from 'next/link'
import Image from 'next/image'
import Icon from '@/components/Icon'
import SectionEyebrow from '@/components/SectionEyebrow'
import { lenders, type Lender } from '@/lib/financing'
import { OFFICE_PHONE, OFFICE_PHONE_DIGITS } from '@/lib/site'

/**
 * About-page financing teaser. Names both lender partners (Service Finance
 * Company + Enhancify) with short positioning cards, then funnels visitors
 * to the dedicated /financing page for calculator + application flow.
 */
export default function Financing() {
  return (
    <section id="financing" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow
          eyebrow="Affordable Payments"
          title="A new roof doesn't have to wait for a windfall."
          subtitle={
            <>
              Roofs rarely break on a convenient schedule. We partner with two reputable
              lenders so you can move forward right away — and pay over time on terms that
              actually fit your budget.{' '}
              <span className="text-slate-900 font-semibold">
                Soft credit check, no impact to your score, options in minutes.
              </span>
            </>
          }
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {lenders.map((l) => (
            <LenderCard key={l.id} lender={l} />
          ))}
        </div>

        {/* Reassurance */}
        <div
          role="note"
          className="mt-10 bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4"
        >
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon name="check-circle" className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            <strong className="text-slate-900">
              Financing is optional, never pushed.
            </strong>{' '}
            We talk numbers only after a real inspection and a written scope of work — so
            you know exactly what you&apos;re paying for before any application is signed.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-center">
          <Link
            href="/financing"
            className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-7 py-3.5 rounded-[2px] shadow-md shadow-brand-red/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            See financing options
            <Icon name="chevron-right" className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${OFFICE_PHONE}`}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-black font-semibold px-7 py-3.5 rounded-[2px] border border-slate-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            <Icon name="phone" className="w-4 h-4 text-brand-red" />
            Call {OFFICE_PHONE_DIGITS}
          </a>
        </div>
      </div>
    </section>
  )
}

function LenderCard({ lender }: { lender: Lender }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        {lender.logo ? (
          <div className="relative w-14 h-14 flex-shrink-0">
            <Image
              src={lender.logo}
              alt={`${lender.name} logo`}
              fill
              sizes="56px"
              className="object-contain"
            />
          </div>
        ) : (
          <div
            className={`w-14 h-14 ${lender.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
          >
            <Icon name={lender.icon} className={`w-7 h-7 ${lender.iconColor}`} />
          </div>
        )}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 leading-tight">
            {lender.name}
          </h3>
          <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mt-1">
            {lender.tagline}
          </p>
        </div>
      </div>

      <p className="text-slate-600 mb-6">{lender.description}</p>

      <div className="mt-auto">
        <h4 className="text-slate-900 font-semibold text-sm mb-3">Best for:</h4>
        <ul className="space-y-2">
          {lender.bestFor.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-slate-700 text-sm"
            >
              <Icon
                name="check-circle"
                className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
