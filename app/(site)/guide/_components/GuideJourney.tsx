import Link from 'next/link'
import { getChapter } from '@/lib/guide'
import {
  JOURNEY_BANDS,
  getMomentsForPhase,
  type JourneyMoment,
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

function MomentCard({ moment }: { moment: JourneyMoment }) {
  return (
    <div className="flex flex-col bg-white border border-slate-200 rounded-xl p-6 hover:border-brand-red/40 hover:shadow-[0_14px_28px_-18px_rgba(200,16,46,0.18)] transition-all">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] px-2 py-1 rounded bg-slate-100 text-slate-600">
          {moment.timing}
        </span>
      </div>

      <h3 className="text-xl font-bold text-brand-black tracking-tight leading-snug">
        {moment.label}
      </h3>
      <p className="mt-1.5 text-[14px] text-slate-500 leading-relaxed">
        {moment.question}
      </p>
      <p className="mt-3 text-[14.5px] text-slate-600 leading-relaxed flex-1">
        {moment.summary}
      </p>

      {/* Primary action */}
      <Link
        href={moment.primary.href}
        className="mt-5 inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-3 rounded-[2px] font-semibold text-[15px] transition-colors"
      >
        {moment.primary.label}
        <span aria-hidden>&rarr;</span>
      </Link>

      {/* Supporting tools */}
      {moment.tools.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {moment.tools.map((tool) => (
            <li key={tool.href + tool.label}>
              <Link
                href={tool.href}
                className="group flex items-center gap-2 text-[14px] text-slate-600 hover:text-brand-red transition-colors"
              >
                <span
                  className={`inline-block text-[9px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded ${KIND_BADGE[tool.kind]}`}
                >
                  {tool.kind === 'pdf' ? 'PDF' : tool.kind === 'book' ? 'Book' : tool.kind === 'page' ? 'Page' : 'Tool'}
                </span>
                <span className="border-b border-transparent group-hover:border-brand-red/40">
                  {tool.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Chapter crosswalk */}
      {moment.chapters.length > 0 && (
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400 mb-1.5">
            Learn why
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {moment.chapters.map((slug) => {
              const c = getChapter(slug)
              return (
                <Link
                  key={slug}
                  href={c.href}
                  className="text-[13px] text-brand-red font-semibold hover:underline"
                >
                  Ch. {c.number} · {c.shortLabel}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * "Start where you are" — the customer-timing front door for the guide.
 * Renders the journey model grouped into bands (before / during / deciding /
 * after) so a visitor jumps straight to the tool that fits their moment, with
 * a crosswalk into the deeper chapters below.
 */
export default function GuideJourney() {
  return (
    <section id="start-here" className="bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="text-center mb-4">
          <GuideEyebrow>Start where you are</GuideEyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-black tracking-tight leading-[1.08] max-w-3xl mx-auto">
            Jump to what you need.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            You don&apos;t have to read this in order. Tell us where you are and
            we&apos;ll point you to the right tool. Want the full story? The six
            chapters are right below.
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {JOURNEY_BANDS.map((band) => {
            const moments = getMomentsForPhase(band.phase)
            if (moments.length === 0) return null
            return (
              <div key={band.phase}>
                <div className="mb-6 max-w-3xl">
                  <h3 className="text-2xl font-extrabold text-brand-black tracking-tight">
                    {band.label}
                  </h3>
                  <p className="mt-1.5 text-[15px] text-slate-500 leading-relaxed">
                    {band.blurb}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {moments.map((moment) => (
                    <MomentCard key={moment.id} moment={moment} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center mt-14 text-[15px] text-slate-500">
          Not sure where to start? Call{' '}
          <a href={`tel:${OFFICE_PHONE}`} className="text-brand-red font-semibold hover:underline">
            {OFFICE_PHONE_DISPLAY}
          </a>
          . Real person. No script. No sales call.
        </p>
      </div>
    </section>
  )
}
