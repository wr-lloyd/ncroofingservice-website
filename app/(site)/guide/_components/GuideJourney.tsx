import Link from 'next/link'
import { getChapter } from '@/lib/guide'
import {
  JOURNEY_BANDS,
  getMomentsForPhase,
  type JourneyMoment,
  type JourneyTool,
  type JourneyToolKind,
} from '@/lib/guide-journey'
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'
import GuideEyebrow from './GuideEyebrow'

const KIND_BADGE: Record<JourneyToolKind, string> = {
  tool: 'bg-brand-red/10 text-brand-red',
  pdf: 'bg-amber-100 text-amber-800',
  page: 'bg-slate-100 text-slate-700',
  book: 'bg-emerald-100 text-emerald-800',
  call: 'bg-slate-100 text-slate-700',
}

const KIND_LABEL: Record<JourneyToolKind, string> = {
  tool: 'Tool',
  pdf: 'PDF',
  page: 'Page',
  book: 'Book',
  call: 'Call',
}

function ToolLink({ tool }: { tool: JourneyTool }) {
  return (
    <Link
      href={tool.href}
      className="group/tool flex items-center gap-2 text-[13.5px] text-slate-600 hover:text-brand-red transition-colors"
    >
      <span
        className={`inline-block flex-shrink-0 text-[9px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded ${KIND_BADGE[tool.kind]}`}
      >
        {KIND_LABEL[tool.kind]}
      </span>
      <span className="border-b border-transparent group-hover/tool:border-brand-red/40 leading-tight">
        {tool.label}
      </span>
    </Link>
  )
}

function ChapterChips({ moment }: { moment: JourneyMoment }) {
  if (moment.chapters.length === 0) return null
  return (
    <div className="mt-auto pt-5">
      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-2">
        Learn why
      </div>
      <div className="flex flex-wrap gap-2">
        {moment.chapters.map((slug) => {
          const c = getChapter(slug)
          return (
            <Link
              key={slug}
              href={c.href}
              className="inline-flex items-center text-[12px] font-semibold text-slate-600 bg-white hover:bg-brand-red hover:text-white border border-slate-200 hover:border-brand-red rounded-full px-2.5 py-1 transition-colors"
            >
              Ch. {c.number} &middot; {c.shortLabel}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

/** Standard card used inside multi-card phases (even 2-up / 2x2 grids). */
function MomentCard({ moment }: { moment: JourneyMoment }) {
  return (
    <div className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:-translate-y-1 hover:border-brand-red/50 hover:shadow-[0_22px_44px_-26px_rgba(200,16,46,0.3)] transition-all duration-200">
      <span className="self-start inline-block text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 mb-4">
        {moment.timing}
      </span>
      <h4 className="text-xl font-bold text-brand-black tracking-tight leading-snug">
        {moment.label}
      </h4>
      <p className="mt-1.5 text-[14px] text-slate-500 leading-relaxed">
        {moment.question}
      </p>
      <p className="mt-3 text-[14.5px] text-slate-600 leading-relaxed">
        {moment.summary}
      </p>

      <Link
        href={moment.primary.href}
        className="mt-5 inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-3 rounded-xl font-semibold text-[15px] transition-colors"
      >
        {moment.primary.label}
        <span aria-hidden>&rarr;</span>
      </Link>

      {moment.tools.length > 0 && (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
          {moment.tools.map((tool) => (
            <ToolLink key={tool.href + tool.label} tool={tool} />
          ))}
        </div>
      )}

      <ChapterChips moment={moment} />
    </div>
  )
}

/**
 * Full-width split card used for single-moment phases (Before / After). These
 * bookend the journey and use the extra width deliberately so a lone card
 * never floats in dead space.
 */
function FeatureMomentCard({ moment }: { moment: JourneyMoment }) {
  return (
    <div className="group grid md:grid-cols-[1.05fr_0.95fr] bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-brand-red/50 hover:shadow-[0_26px_52px_-30px_rgba(200,16,46,0.32)] transition-all duration-200">
      {/* Narrative + primary action */}
      <div className="p-7 sm:p-9 flex flex-col">
        <span className="self-start inline-block text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red mb-4">
          {moment.timing}
        </span>
        <h4 className="text-2xl sm:text-[28px] font-extrabold text-brand-black tracking-tight leading-tight">
          {moment.label}
        </h4>
        <p className="mt-2 text-[15px] text-slate-500 leading-relaxed">
          {moment.question}
        </p>
        <p className="mt-4 text-[16px] text-slate-600 leading-relaxed max-w-md">
          {moment.summary}
        </p>
        <Link
          href={moment.primary.href}
          className="mt-6 self-start inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3.5 rounded-xl font-semibold transition-colors"
        >
          {moment.primary.label}
          <span aria-hidden>&rarr;</span>
        </Link>
        <ChapterChips moment={moment} />
      </div>

      {/* Tools rail */}
      <div className="bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200 p-7 sm:p-9 flex flex-col justify-center">
        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
          Tools for this step
        </div>
        <div className="space-y-3.5">
          {moment.tools.map((tool) => (
            <ToolLink key={tool.href + tool.label} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * "Start where you are" — the customer-timing front door for the guide,
 * rendered as a numbered journey timeline. Single-moment phases bookend the
 * journey as full-width feature cards; multi-moment phases sit in an even
 * grid, so cards form a deliberate structure instead of floating.
 */
export default function GuideJourney() {
  return (
    <section
      id="start-here"
      className="relative bg-gradient-to-b from-white via-slate-50 to-slate-50 border-t border-slate-200 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <GuideEyebrow>Start where you are</GuideEyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-brand-black tracking-tight leading-[1.06]">
            Jump to what you need.
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            You don&apos;t have to read this in order. Follow the journey, or
            jump to the one moment that matches where you are. Want the full
            story? The six chapters are right below.
          </p>
        </div>

        {/* Journey timeline */}
        <div className="relative">
          {/* Connecting spine (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-brand-red/40 via-slate-200 to-slate-200"
          />

          <div className="space-y-14 lg:space-y-20">
            {JOURNEY_BANDS.map((band, i) => {
              const moments = getMomentsForPhase(band.phase)
              if (moments.length === 0) return null
              const phaseNum = String(i + 1).padStart(2, '0')
              const isFirst = i === 0

              return (
                <div key={band.phase} className="relative lg:pl-20">
                  {/* Phase node (desktop) */}
                  <div
                    aria-hidden
                    className={`hidden lg:flex absolute left-0 top-0 w-14 h-14 rounded-2xl items-center justify-center font-extrabold text-lg shadow-sm ${
                      isFirst
                        ? 'bg-brand-red text-white'
                        : 'bg-white text-brand-red border-2 border-brand-red/30'
                    }`}
                  >
                    {phaseNum}
                  </div>

                  {/* Phase header */}
                  <div className="mb-7 max-w-2xl">
                    <div className="lg:hidden text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red mb-1.5">
                      Phase {phaseNum}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-black tracking-tight">
                      {band.label}
                    </h3>
                    <p className="mt-2 text-[15px] text-slate-500 leading-relaxed">
                      {band.blurb}
                    </p>
                  </div>

                  {/* Cards */}
                  {moments.length === 1 ? (
                    <FeatureMomentCard moment={moments[0]} />
                  ) : (
                    <div className="grid gap-5 sm:grid-cols-2">
                      {moments.map((moment) => (
                        <MomentCard key={moment.id} moment={moment} />
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <p className="text-center mt-16 text-[15px] text-slate-500">
          Not sure where to start? Call{' '}
          <a
            href={`tel:${OFFICE_PHONE}`}
            className="text-brand-red font-semibold hover:underline"
          >
            {OFFICE_PHONE_DISPLAY}
          </a>
          . Real person. No script. No sales call.
        </p>
      </div>
    </section>
  )
}
