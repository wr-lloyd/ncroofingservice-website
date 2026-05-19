'use client'

import { useMemo, useState } from 'react'
import SectionEyebrow from '@/components/SectionEyebrow'
import Icon from '@/components/Icon'
import {
  APR_TIERS,
  MAX_PROJECT_COST,
  MIN_PROJECT_COST,
  REPRESENTATIVE_PROJECT_COST,
  TERM_OPTIONS_MONTHS,
  formatUsd,
  formatUsdCents,
  monthlyPayment,
} from '@/lib/financing'

/**
 * Pure client-side amortization calculator. No backend, no PII collection —
 * just a live monthly payment estimate so visitors can self-qualify in their
 * head before they ever talk to a lender.
 */
export default function PaymentCalculator() {
  const [amount, setAmount] = useState(REPRESENTATIVE_PROJECT_COST)
  const [termIdx, setTermIdx] = useState(2) // default 84mo
  const [tierIdx, setTierIdx] = useState(1) // default "Good"

  const term = TERM_OPTIONS_MONTHS[termIdx]
  const tier = APR_TIERS[tierIdx]
  const apr = tier.apr

  const { monthly, totalInterest, totalCost } = useMemo(() => {
    const m = monthlyPayment(amount, apr, term)
    const t = m * term
    return {
      monthly: m,
      totalInterest: t - amount,
      totalCost: t,
    }
  }, [amount, apr, term])

  return (
    <section id="calculator" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow
          eyebrow="Payment Calculator"
          title="See your real monthly payment."
          subtitle="Move the sliders. The math updates instantly — no email, no form, no surprises."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Controls */}
          <div className="lg:col-span-3 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            {/* Amount slider */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label
                  htmlFor="loan-amount"
                  className="text-sm font-semibold text-slate-900"
                >
                  Project cost
                </label>
                <span className="text-2xl font-bold text-brand-red">
                  {formatUsd(amount)}
                </span>
              </div>
              <input
                id="loan-amount"
                type="range"
                min={MIN_PROJECT_COST}
                max={MAX_PROJECT_COST}
                step={500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-brand-red"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>{formatUsd(MIN_PROJECT_COST)}</span>
                <span>{formatUsd(MAX_PROJECT_COST)}</span>
              </div>
            </div>

            {/* Term toggle */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-900 mb-3">Term length</p>
              <div className="grid grid-cols-4 gap-2">
                {TERM_OPTIONS_MONTHS.map((months, idx) => (
                  <button
                    key={months}
                    type="button"
                    onClick={() => setTermIdx(idx)}
                    className={`px-3 py-2.5 rounded-[2px] text-sm font-semibold border transition-colors ${
                      idx === termIdx
                        ? 'bg-brand-red text-white border-brand-red'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                    aria-pressed={idx === termIdx}
                  >
                    {months}mo
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                {Math.round(term / 12)} years
              </p>
            </div>

            {/* Credit tier */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-900 mb-3">
                Estimated credit tier
              </p>
              <div className="grid grid-cols-3 gap-2">
                {APR_TIERS.map((t, idx) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setTierIdx(idx)}
                    className={`px-3 py-2.5 rounded-[2px] text-sm font-semibold border transition-colors ${
                      idx === tierIdx
                        ? 'bg-brand-red text-white border-brand-red'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                    aria-pressed={idx === tierIdx}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Illustrative APR: {(apr * 100).toFixed(2)}%
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-2 bg-gradient-to-br from-brand-red to-brand-red-dark text-white rounded-2xl p-6 sm:p-8 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
              Estimated payment
            </p>
            <p className="text-5xl sm:text-6xl font-bold mt-2 leading-none">
              {formatUsdCents(monthly).replace('.00', '')}
              <span className="text-2xl font-semibold text-white/80">/mo</span>
            </p>

            <dl className="mt-8 space-y-3 text-sm">
              <Row label="Amount financed" value={formatUsd(amount)} />
              <Row label="APR" value={`${(apr * 100).toFixed(2)}%`} />
              <Row label="Term" value={`${term} months`} />
              <Row label="Total interest" value={formatUsd(totalInterest)} />
              <Row
                label="Total cost"
                value={formatUsd(totalCost)}
                emphasize
              />
            </dl>

            <a
              href="#lenders"
              className="mt-auto pt-8 inline-flex items-center justify-center gap-2 text-white font-semibold"
            >
              See lender options
              <Icon name="arrow-right" className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-500 mt-6 text-center max-w-3xl mx-auto">
          Estimates only. Actual rate, term, and monthly payment are determined by the
          lender based on your credit profile, the loan amount, and your project scope.
        </p>
      </div>
    </section>
  )
}

function Row({
  label,
  value,
  emphasize,
}: {
  label: string
  value: string
  emphasize?: boolean
}) {
  return (
    <div
      className={`flex justify-between gap-3 ${
        emphasize ? 'pt-3 border-t border-white/20 font-bold text-base' : ''
      }`}
    >
      <dt className="text-white/80">{label}</dt>
      <dd className="text-white tabular-nums">{value}</dd>
    </div>
  )
}
