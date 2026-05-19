import Link from 'next/link'
import Icon from '@/components/Icon'
import {
  APR_TIERS,
  REPRESENTATIVE_PROJECT_COST,
  formatUsd,
  formatUsdCents,
  monthlyPayment,
} from '@/lib/financing'
import { OFFICE_PHONE, OFFICE_PHONE_DIGITS } from '@/lib/site'

/**
 * Hero is built around a real number, not a paragraph. We pick the "Good
 * credit" tier and an 84-month term as the headline example — the most
 * common scenario for a Triangle replacement.
 */
export default function FinancingHero() {
  const exampleApr = APR_TIERS[1].apr // "Good" tier
  const exampleTerm = 84
  const exampleMonthly = monthlyPayment(
    REPRESENTATIVE_PROJECT_COST,
    exampleApr,
    exampleTerm
  )

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Subtle pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 bg-brand-red/15 border border-brand-red/30 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
              <Icon name="shield-check" className="w-3.5 h-3.5 text-brand-red" />
              Soft credit check · No impact to your score
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              A new roof from about{' '}
              <span className="text-brand-red">
                {formatUsdCents(exampleMonthly).replace('.00', '')}
                <span className="text-3xl sm:text-4xl lg:text-5xl">/mo</span>
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl">
              We partner with{' '}
              <strong className="text-white">Service Finance Company</strong> and{' '}
              <strong className="text-white">Enhancify</strong> so you can prequalify in
              about two minutes — see your real options before you sign anything.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#lenders"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-7 py-4 rounded-[2px] shadow-md shadow-brand-red/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red text-lg"
              >
                Check your rate
                <Icon name="arrow-right" className="w-4 h-4" />
              </Link>
              <Link
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur text-white border border-white/20 font-semibold px-7 py-4 rounded-[2px] transition-colors text-lg"
              >
                Estimate my payment
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-400 max-w-xl">
              Example: {formatUsd(REPRESENTATIVE_PROJECT_COST)} at{' '}
              {(exampleApr * 100).toFixed(2)}% APR for {exampleTerm} months. Your terms
              will be determined by the lender based on your credit profile.
            </p>
          </div>

          {/* Right-side stat card */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">
                Why finance?
              </p>
              <h2 className="text-2xl font-bold text-white mt-2">
                Don&apos;t let a roof become a bigger problem.
              </h2>
              <ul className="mt-6 space-y-4 text-slate-200">
                <Reason
                  title="Address damage now"
                  body="A leak today is a ceiling repair next month. Financing lets you move before small problems get expensive."
                />
                <Reason
                  title="Keep your savings"
                  body="Spread the cost over time instead of draining your emergency fund."
                />
                <Reason
                  title="Bridge the insurance gap"
                  body="Cover deductibles or upgrades your insurance won't pay for."
                />
              </ul>
              <a
                href={`tel:${OFFICE_PHONE}`}
                className="mt-8 inline-flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3 rounded-[2px] border border-white/20 transition-colors"
              >
                <Icon name="phone" className="w-4 h-4 text-brand-red" />
                Or call Randy: {OFFICE_PHONE_DIGITS}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Reason({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex items-start gap-3">
      <Icon
        name="check-circle"
        className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5"
      />
      <div>
        <strong className="text-white">{title}.</strong>{' '}
        <span className="text-slate-300 text-sm">{body}</span>
      </div>
    </li>
  )
}
