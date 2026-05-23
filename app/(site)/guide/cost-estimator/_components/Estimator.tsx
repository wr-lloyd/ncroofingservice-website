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
import {
  ArchitecturalIcon,
  CharlotteRegionIcon,
  ComplexIcon,
  MetalIcon,
  ModerateIcon,
  MountainsCoastRegionIcon,
  OneStoryIcon,
  PitchExtremeIcon,
  PitchLowIcon,
  PitchStandardIcon,
  PitchSteepIcon,
  PitchVerySteepIcon,
  PremiumIcon,
  SimpleIcon,
  SmallTownRegionIcon,
  ThreeStoryIcon,
  TriangleRegionIcon,
  TwoStoryIcon,
} from './icons'

type IconCmp = (props: { className?: string }) => JSX.Element

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
            help="How tall is the house from the ground to the peak of the roof?"
            value={form.stories}
            cols={3}
            options={[
              {
                value: 1,
                label: 'One',
                Icon: OneStoryIcon,
                description: 'Ranch or single-floor home. Crew can usually reach the eaves from a normal ladder.',
              },
              {
                value: 2,
                label: 'Two',
                Icon: TwoStoryIcon,
                description: 'Two floors of living space. Adds ladder time and safety setup.',
              },
              {
                value: 3,
                label: 'Three',
                Icon: ThreeStoryIcon,
                description: 'Three floors, or two with a tall walkout basement. More staging, more safety.',
              },
            ]}
            onChange={(v) => set('stories', v)}
          />

          {/* Pitch */}
          <Choice
            label="Roof pitch (how steep)"
            help="Stand at the curb and look at the side of your roof. Match it to one of these shapes. If you can't tell, pick standard. Most NC homes are standard."
            value={form.pitch}
            cols={5}
            options={[
              {
                value: 'low',
                label: 'Low',
                Icon: PitchLowIcon,
                description: 'Almost flat. You could walk on it without thinking about it. Common on porches, additions, and modern homes.',
              },
              {
                value: 'standard',
                label: 'Standard',
                Icon: PitchStandardIcon,
                description: 'The typical NC roof. Walkable but you feel the slope. Most ranches and traditional two-story houses are here.',
              },
              {
                value: 'steep',
                label: 'Steep',
                Icon: PitchSteepIcon,
                description: 'Slower work, more careful footwork. Common on Victorians, taller Colonials, and some modern designs.',
              },
              {
                value: 'very-steep',
                label: 'Very steep',
                Icon: PitchVerySteepIcon,
                description: 'Roped and harnessed work. You can see it is dramatic from the street. Adds time and safety gear.',
              },
              {
                value: 'extreme',
                label: 'Extreme',
                Icon: PitchExtremeIcon,
                description: 'A-frame or church-roof steep. Rare on homes. Full fall protection on every step.',
              },
            ]}
            onChange={(v) => set('pitch', v)}
          />

          {/* Material */}
          <Choice
            label="Material"
            help="What goes on top. Each material has a different lifespan, look, and cost."
            value={form.material}
            cols={3}
            options={[
              {
                value: 'architectural',
                label: 'Architectural shingle',
                Icon: ArchitecturalIcon,
                description: 'The standard. Layered asphalt shingle. 25 to 30 year life. What most NC homes have right now.',
              },
              {
                value: 'premium',
                label: 'Premium shingle',
                Icon: PremiumIcon,
                description: 'Thicker, heavier, designer-grade shingle. 30 to 50 year life. Better wind rating, deeper shadow lines.',
              },
              {
                value: 'metal',
                label: 'Standing-seam metal',
                Icon: MetalIcon,
                description: 'Vertical metal panels with concealed seams. 50+ year life. Higher upfront cost, lower lifetime cost.',
              },
            ]}
            onChange={(v) => set('material', v)}
          />

          {/* Complexity */}
          <Choice
            label="Roof complexity"
            help="Look at the roof from the curb. Count the peaks, dormers, and corners. More angles means more flashing and more time."
            value={form.complexity}
            cols={3}
            options={[
              {
                value: 'simple',
                label: 'Simple',
                Icon: SimpleIcon,
                description: 'One main peak. Basic gable or hip roof. Few or no dormers, valleys, or chimneys.',
              },
              {
                value: 'moderate',
                label: 'Moderate',
                Icon: ModerateIcon,
                description: 'Typical two-story home. One or two dormers. A valley or two. One chimney.',
              },
              {
                value: 'complex',
                label: 'Complex',
                Icon: ComplexIcon,
                description: 'Multiple intersecting peaks. Several dormers. Lots of valleys. Skylights, multiple chimneys.',
              },
            ]}
            onChange={(v) => set('complexity', v)}
          />

          {/* Region */}
          <Choice
            label="Where in NC"
            help="Local labor and dump-fee differences. Triangle and Charlotte are our baseline."
            value={form.region}
            cols={4}
            options={[
              {
                value: 'triangle',
                label: 'Triangle',
                Icon: TriangleRegionIcon,
                description: 'Raleigh, Durham, Chapel Hill, Cary, Apex, Wake Forest, Holly Springs.',
              },
              {
                value: 'charlotte',
                label: 'Charlotte',
                Icon: CharlotteRegionIcon,
                description: 'Charlotte metro and the surrounding suburbs.',
              },
              {
                value: 'small-town',
                label: 'Small town',
                Icon: SmallTownRegionIcon,
                description: 'Smaller NC towns outside the metros. Slightly lower labor cost.',
              },
              {
                value: 'mountains-coast',
                label: 'Mountains or coast',
                Icon: MountainsCoastRegionIcon,
                description: 'Blue Ridge, foothills, or the coast. Travel and weather windows add cost.',
              },
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

interface ChoiceOption<T extends string | number> {
  value: T
  label: string
  Icon?: IconCmp
  description?: string
}

interface ChoiceProps<T extends string | number> {
  label: string
  help?: string
  value: T
  options: ReadonlyArray<ChoiceOption<T>>
  onChange: (v: T) => void
  /** Number of columns for the option grid on >= sm screens. Mobile is always 2. */
  cols?: 2 | 3 | 4 | 5
}

function Choice<T extends string | number>({
  label,
  help,
  value,
  options,
  onChange,
  cols = 3,
}: ChoiceProps<T>) {
  const colsClass =
    cols === 5
      ? 'sm:grid-cols-5'
      : cols === 4
      ? 'sm:grid-cols-4'
      : cols === 3
      ? 'sm:grid-cols-3'
      : 'sm:grid-cols-2'

  const active = options.find((o) => o.value === value)

  return (
    <div>
      <label className="block text-sm font-semibold text-brand-black mb-1">
        {label}
      </label>
      {help && <p className="text-xs text-slate-500 mb-3">{help}</p>}
      <div className={`grid grid-cols-2 ${colsClass} gap-2`}>
        {options.map((opt) => {
          const isActive = opt.value === value
          const Icon = opt.Icon
          return (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => onChange(opt.value)}
              title={opt.description}
              aria-pressed={isActive}
              className={`flex flex-col items-center justify-start gap-2 px-2 py-3 rounded-[6px] text-[12px] font-semibold border transition-colors text-center min-h-[84px] ${
                isActive
                  ? 'bg-brand-red text-white border-brand-red shadow-sm'
                  : 'bg-white text-brand-black border-slate-300 hover:border-brand-red hover:text-brand-red'
              }`}
            >
              {Icon && (
                <span
                  className={`flex items-center justify-center w-12 h-7 ${
                    isActive ? 'text-white' : 'text-slate-500'
                  }`}
                >
                  <Icon />
                </span>
              )}
              <span className="leading-tight">{opt.label}</span>
            </button>
          )
        })}
      </div>
      {active?.description && (
        <p className="mt-2 text-[12.5px] text-slate-500 leading-relaxed">
          <span className="font-semibold text-brand-black">{active.label}:</span>{' '}
          {active.description}
        </p>
      )}
    </div>
  )
}
