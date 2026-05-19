'use client'

import { useState } from 'react'
import Icon from '@/components/Icon'
import SectionEyebrow from '@/components/SectionEyebrow'
import {
  APR_TIERS,
  formatUsd,
  formatUsdCents,
  monthlyPayment,
} from '@/lib/financing'

/**
 * The "insurance bridge" — our unique angle vs. competitors. Homeowner
 * enters their approved insurance amount, deductible, and desired upgrades.
 * We show them the gap (out-of-pocket) and the monthly payment if they
 * financed that gap. This is exactly the scenario most NC post-storm
 * homeowners face but no other roofer's site walks them through it.
 */
export default function InsuranceBridge() {
  const [insurance, setInsurance] = useState(12_000)
  const [deductible, setDeductible] = useState(2_500)
  const [upgrades, setUpgrades] = useState(2_000)

  const gap = Math.max(0, deductible + upgrades)
  const apr = APR_TIERS[1].apr // "Good"
  const term = 60
  const monthly = monthlyPayment(gap, apr, term)

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow
          eyebrow="Insurance + Financing"
          title="Bridge the gap your claim won't cover."
          subtitle="Most insurance checks pay for the work — but you're still on the hook for the deductible, code upgrades, or the better materials you actually want. Here's what financing that gap looks like."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <NumberField
              id="insurance"
              label="Insurance approved you for"
              value={insurance}
              min={0}
              max={60_000}
              step={500}
              onChange={setInsurance}
              hint="The total your insurance is paying out for the roof."
            />
            <NumberField
              id="deductible"
              label="Your deductible"
              value={deductible}
              min={0}
              max={10_000}
              step={250}
              onChange={setDeductible}
              hint="The portion you owe before insurance covers the rest."
              className="mt-8"
            />
            <NumberField
              id="upgrades"
              label="Upgrades you want (optional)"
              value={upgrades}
              min={0}
              max={15_000}
              step={250}
              onChange={setUpgrades}
              hint="Architectural shingles, better ridge vent, metal accents — anything insurance won't pay for."
              className="mt-8"
            />
          </div>

          {/* Result */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">
              Your out-of-pocket gap
            </p>
            <p className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 leading-none">
              {formatUsd(gap)}
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Deductible + upgrades, after insurance pays {formatUsd(insurance)}.
            </p>

            <div className="my-6 border-t border-slate-200" />

            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Financed at {(apr * 100).toFixed(2)}% APR, {term} months
            </p>
            <p className="text-4xl sm:text-5xl font-bold text-brand-red mt-2 leading-none">
              {gap > 0 ? formatUsdCents(monthly).replace('.00', '') : '$0'}
              {gap > 0 && (
                <span className="text-xl font-semibold text-slate-500 ml-1">/mo</span>
              )}
            </p>

            <div className="mt-auto pt-8">
              <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <Icon
                  name="shield-check"
                  className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5"
                />
                <p className="text-xs text-slate-700 leading-relaxed">
                  We handle the insurance side too — supplemental claims, code-upgrade
                  riders, the full paper trail. Ask Randy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NumberField({
  id,
  label,
  value,
  min,
  max,
  step,
  onChange,
  hint,
  className = '',
}: {
  id: string
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  hint: string
  className?: string
}) {
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between mb-3">
        <label htmlFor={id} className="text-sm font-semibold text-slate-900">
          {label}
        </label>
        <span className="text-xl font-bold text-brand-red tabular-nums">
          {formatUsd(value)}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-brand-red"
      />
      <div className="flex justify-between text-xs text-slate-500 mt-2">
        <span>{formatUsd(min)}</span>
        <span>{formatUsd(max)}</span>
      </div>
      <p className="text-xs text-slate-500 mt-2">{hint}</p>
    </div>
  )
}
