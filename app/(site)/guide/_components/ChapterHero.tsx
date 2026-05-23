import Link from 'next/link'
import type { Chapter } from '@/lib/guide'

interface ChapterHeroProps {
  chapter: Chapter
  /**
   * Lede paragraph shown under the h1. Each chapter writes its own so the
   * voice is specific to that chapter's reader.
   */
  lede: string
  /**
   * Optional "Quick tools for this chapter" tiles shown under the lede.
   * Caller decides which tools belong on a given chapter.
   */
  quickTools?: Array<{
    tag: string
    tone: 'tool' | 'pdf' | 'book'
    name: string
    desc: string
    href: string
  }>
  /** Updated-month string, e.g. "November 2025". */
  updated?: string
}

const TONE_CLASSES: Record<'tool' | 'pdf' | 'book', string> = {
  tool: 'bg-brand-red/10 text-brand-red',
  pdf: 'bg-amber-100 text-amber-800',
  book: 'bg-emerald-100 text-emerald-800',
}

/**
 * Chapter header: breadcrumb, chapter-number tile, eyebrow, h1, lede,
 * meta line, and optional "Quick tools for this chapter" tiles.
 */
export default function ChapterHero({
  chapter,
  lede,
  quickTools,
  updated = 'May 2026',
}: ChapterHeroProps) {
  return (
    <header className="bg-white border-b border-slate-100">
      {/* Position bar / breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-[13px] text-slate-500">
          <Link href="/guide" className="hover:text-brand-red font-medium">
            The Honest Roof Guide
          </Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-700">
            Chapter {chapter.number} &middot; {chapter.shortLabel}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-brand-red text-white flex items-center justify-center text-3xl sm:text-4xl font-extrabold tracking-tight shadow-lg shadow-brand-red/20">
              {chapter.number}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-brand-red text-xs font-bold uppercase tracking-[0.2em]">
              {chapter.eyebrow}
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-brand-black leading-[1.1] tracking-tight">
              {chapter.question}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              {lede}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-slate-500">
              <span>{chapter.readMinutes} minute read</span>
              <span aria-hidden className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Updated {updated}</span>
              <span aria-hidden className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Written by the NC Roofing Service team</span>
            </div>
          </div>
        </div>

        {quickTools && quickTools.length > 0 && (
          <div className="mt-10 lg:mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
              Quick tools for this chapter
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {quickTools.map((t) => (
                <Link
                  key={t.name}
                  href={t.href}
                  className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-brand-red hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-16px_rgba(200,16,46,0.22)] transition-all"
                >
                  <span
                    className={`inline-block text-[11px] font-bold uppercase tracking-[0.1em] px-2 py-1 rounded ${TONE_CLASSES[t.tone]}`}
                  >
                    {t.tag}
                  </span>
                  <div className="mt-3 text-[15px] font-bold text-brand-black tracking-tight">
                    {t.name}
                  </div>
                  <div className="mt-1 text-[13px] text-slate-500 leading-snug">
                    {t.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
