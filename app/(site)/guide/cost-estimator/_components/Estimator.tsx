'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  estimate,
  formatUsd,
  LABELS,
  type Material,
  type Complexity,
  type PitchClass,
  type Region,
  type StoryCount,
} from './estimator-math'

interface FormState {
  heatedSqft: number
  stories: StoryCount
  pitch: PitchClass
  material: Material
  complexity: Complexity
  region: Region
}

const DEFAULTS: FormState = {
  heatedSqft: 2200,
  stories: 1,
  pitch: 'standard',
  material: 'architectural',
  complexity: 'moderate',
  region: 'triangle',
}

/**
 * The interactive cost estimator. All math is in estimator-math.ts and runs
 * client-side from form changes (no API calls). The result also saves to
 * localStorage so a customer can come back and see their last estimate.
 */
export default function Estimator() {
  const [form, setForm] = useState<FormState>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('hrg.estimator.v1')
        if (saved) return { ...DEFAULTS, ...JSON.parse(saved) }
      } catch {
        // Ignore parse errors. Fall through to defaults.
      }
    }
    return DEFAULTS
  })
  const [showMath, setShowMath] = useState(false)

  const result = useMemo(() => estimate(form), [form])

  // Persist last-used inputs.
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('hrg.estimator.v1', JSON.stringify(form))
    } catch {
      // localStorage can be disabled. Not fatal.
    }
  }

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-10">
      {/* Inputs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red mb-1">
          About your house
        </div>
        <h2 className="text-2xl font-bold text-brand-black tracking-tight mb-6">
          Six questions. Real answers.
        </h2>

        <div className="space-y-6">
          {/* Heated sqft */}
          <div>
            <label className="block text-sm font-semibold text-brand-black mb-2">
              Heated square footage
              <span className="text-slate-500 font-normal ml-2">
                (from your tax record or appraisal)
              </span>
            </label>
            <input
              type="number"
              inputMode="numeric"
              min={500}
              max={20000}
              step={100}
              value={form.heatedSqft}
              onChange={(e) =>
                set('heatedSqft', Math.max(500, Number(e.target.value) || 0))
              }
              className="w-full px-4 py-3 border border-slate-300 rounded-[2px] focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red text-lg font-semibold"
            />
            <input
              type="range"
              min={800}
              max={6000}
              step={50}
              value={form.heatedSqft}
              onChange={(e) => set('heatedSqft', Number(e.target.value))}
              className="w-full mt-3 accent-brand-red"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>800</span>
              <span>3,000</span>
              <span>6,000+</span>
            </div>
          </div>

          {/* Stories */}
          <Choice
            label="Stories"
            value={form.stories}
            options={[
              { value: 1, label: 'One' },
              { value: 2, label: 'Two' },
              { value: 3, label: 'Three' },
            ]}
            onChange={(v) => set('stories', v)}
          />

          {/* Pitch */}
          <Choice
            label="Roof pitch (how steep)"
            help="If you don't know, pick standard. Most NC homes are standard."
            value={form.pitch}
            options={[
              { value: 'low', label: 'Low' },
              { value: 'standard', label: 'Standard' },
              { value: 'steep', label: 'Steep' },
              { value: 'very-steep', label: 'Very steep' },
              { value: 'extreme', label: 'Extreme' },
            ]}
            onChange={(v) => set('pitch', v)}
          />

          {/* Material */}
          <Choice
            label="Material"
            value={form.material}
            options={[
              { value: 'architectural', label: 'Architectural' },
              { value: 'premium', label: 'Premium' },
              { value: 'metal', label: 'Metal' },
            ]}
            onChange={(v) => set('material', v)}
          />

          {/* Complexity */}
          <Choice
            label="Roof complexity"
            help="Count the dormers and the valleys. More = complex."
            value={form.complexity}
            options={[
              { value: 'simple', label: 'Simple' },
              { value: 'moderate', label: 'Moderate' },
              { value: 'complex', label: 'Complex' },
            ]}
            onChange={(v) => set('complexity', v)}
          />

          {/* Region */}
          <Choice
            label="Where in NC"
            value={form.region}
            options={[
              { value: 'triangle', label: 'Triangle' },
              { value: 'charlotte', label: 'Charlotte' },
              { value: 'small-town', label: 'Small town' },
              { value: 'mountains-coast', label: 'Mtns/coast' },
            ]}
            onChange={(v) => set('region', v)}
          />
        </div>
      </div>

      {/* Result */}
      <div className="lg:sticky lg:top-28 self-start">
        <div className="bg-brand-black text-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-brand-red/10">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-red-400 mb-1">
            Honest estimate
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-1">
            Your roof, ballpark.
          </h2>
          <p className="text-sm text-white/60 mb-6">
            About {result.roofSquares} squares ({result.roofSquares * 100} sq ft of
            actual roof). Numbers below assume the full nine-component install,
            not a shingle-only patch.
          </p>

          <div className="border-y border-white/10 py-6 my-6">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-white/60 mb-2">
              Estimated range, installed
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none">
              {formatUsd(result.totalLow)}
              <span className="text-white/40 mx-2 text-2xl sm:text-3xl">to</span>
              {formatUsd(result.totalHigh)}
            </div>
            <div className="text-sm text-white/60 mt-3">
              Midpoint: {formatUsd(result.totalMid)} &middot; About{' '}
              {formatUsd(result.totalMid / result.roofSquares)} per square
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowMath((s) => !s)}
            className="text-sm text-red-400 font-semibold hover:underline mb-4"
          >
            {showMath ? 'Hide the math' : 'Show the math'}
          </button>

          {showMath && (
            <div className="bg-white/5 rounded-lg p-4 text-sm space-y-2 mb-6">
              <Row
                k="Roof area"
                v={`${result.roofSquares} squares (${result.roofSquares * 100} sq ft)`}
              />
              <Row
                k="Base price per square"
                v={`${formatUsd(result.perSquareLow)} to ${formatUsd(result.perSquareHigh)}`}
              />
              {result.breakdown.twoStoryAdd > 0 && (
                <Row k="Story add-on" v={`+${formatUsd(result.breakdown.twoStoryAdd)}/sq`} />
              )}
              {result.breakdown.pitchAdd > 0 && (
                <Row k="Pitch add-on" v={`+${formatUsd(result.breakdown.pitchAdd)}/sq`} />
              )}
              <Row
                k="Material"
                v={`${LABELS.material[form.material]} (${result.breakdown.materialMultiplier.toFixed(2)}x)`}
              />
              <Row
                k="Complexity"
                v={`${LABELS.complexity[form.complexity]} (${result.breakdown.complexityMultiplier.toFixed(2)}x)`}
              />
              <Row
                k="Region"
                v={`${LABELS.region[form.region]} (${result.breakdown.regionMultiplier.toFixed(2)}x)`}
              />
            </div>
          )}

          <div className="bg-white/5 rounded-lg p-4 mb-6 text-[13px] leading-relaxed text-white/70">
            <strong className="text-white block mb-1">What this includes</strong>
            All nine components from chapter two. Tear-off of one layer, decking
            repairs up to a normal amount, drip edge, ice and water shield in
            valleys and around penetrations, synthetic underlayment, starter
            strip, the material you chose, ridge cap, ridge and soffit
            ventilation, flashing, magnet sweep, dumpster, permit, and our
            workmanship warranty.
          </div>

          <div className="bg-white/5 rounded-lg p-4 mb-6 text-[13px] leading-relaxed text-white/70">
            <strong className="text-white block mb-1">What it does not include</strong>
            Removing more than one layer of existing roof. Major decking
            replacement (we charge per sheet if we find more bad wood than
            usual). Chimney rebuild. Skylight replacement. Solar panel removal
            and reinstall. Any structural repair we find when the deck is
            exposed.
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/request-inspection"
              className="flex-1 inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white px-5 py-3.5 rounded-[2px] font-semibold transition-colors"
            >
              Get a real, written estimate
            </Link>
            <Link
              href="/guide/pay-for-it"
              className="flex-1 inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white px-5 py-3.5 rounded-[2px] font-semibold transition-colors"
            >
              How to pay for it
            </Link>
          </div>

          <p className="mt-5 text-xs text-white/50 leading-relaxed">
            This is an estimate, not a quote. Real prices are written after we
            see the roof, the deck, and any hidden conditions. Most of our
            written quotes land inside this range, sometimes lower.
          </p>
        </div>
      </div>
    </div>
  )
}

// -- Subcomponents ----------------------------------------------------------

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between items-baseline gap-3 text-white/80">
      <span className="text-white/60">{k}</span>
      <span className="font-semibold text-white text-right">{v}</span>
    </div>
  )
}

interface ChoiceProps<T extends string | number> {
  label: string
  help?: string
  value: T
  options: ReadonlyArray<{ value: T; label: string }>
  onChange: (v: T) => void
}

function Choice<T extends string | number>({
  label,
  help,
  value,
  options,
  onChange,
}: ChoiceProps<T>) {
  return (
    <div>
      <label className="block text-sm font-semibold text-brand-black mb-1">
        {label}
      </label>
      {help && <p className="text-xs text-slate-500 mb-2">{help}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
        {options.map((opt) => {
          const active = opt.value === value
          return (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`px-3 py-2 rounded-[6px] text-[13px] font-semibold border transition-colors text-left ${
                active
                  ? 'bg-brand-red text-white border-brand-red'
                  : 'bg-white text-brand-black border-slate-300 hover:border-brand-red hover:text-brand-red'
              }`}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
