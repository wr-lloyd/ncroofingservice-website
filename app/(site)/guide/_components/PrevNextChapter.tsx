import Link from 'next/link'
import type { Chapter } from '@/lib/guide'

interface PrevNextChapterProps {
  prev?: Chapter
  next?: Chapter
}

/**
 * Bottom-of-chapter pagination. Renders one or two tiles depending on
 * position in the guide. Chapters with `status: 'coming-soon'` get a
 * "Coming soon" badge instead of acting as a link.
 */
export default function PrevNextChapter({ prev, next }: PrevNextChapterProps) {
  return (
    <section className="bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prev ? <ChapterTile chapter={prev} direction="prev" /> : <div className="hidden md:block" />}
          {next ? <ChapterTile chapter={next} direction="next" /> : <div className="hidden md:block" />}
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          <Link href="/guide" className="text-brand-red font-semibold hover:underline">
            &larr; Back to The Honest Roof Guide
          </Link>
        </div>
      </div>
    </section>
  )
}

function ChapterTile({
  chapter,
  direction,
}: {
  chapter: Chapter
  direction: 'prev' | 'next'
}) {
  const isComingSoon = chapter.status === 'coming-soon'
  const label = direction === 'prev' ? 'Previous chapter' : 'Next chapter'
  const arrow = direction === 'prev' ? '←' : '→'
  const align = direction === 'prev' ? 'text-left' : 'text-right'

  const inner = (
    <>
      <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-3 ${direction === 'next' ? 'justify-end' : ''}`}>
        {direction === 'prev' && <span aria-hidden>{arrow}</span>}
        <span>{label}</span>
        {direction === 'next' && <span aria-hidden>{arrow}</span>}
      </div>
      <div className={`text-xs font-bold uppercase tracking-[0.14em] text-brand-red mb-1 ${align}`}>
        Chapter {chapter.number}
      </div>
      <div className={`text-xl font-bold text-brand-black tracking-tight leading-snug ${align}`}>
        {chapter.question}
      </div>
      {isComingSoon && (
        <div className={`mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.12em] px-2 py-1 rounded bg-slate-100 text-slate-500 ${direction === 'next' ? 'float-right' : ''}`}>
          Coming soon
        </div>
      )}
    </>
  )

  const baseClasses =
    'block rounded-xl border p-6 sm:p-7 transition-all'

  if (isComingSoon) {
    return (
      <div
        className={`${baseClasses} border-slate-200 bg-slate-50 cursor-default`}
        aria-disabled
      >
        {inner}
      </div>
    )
  }

  return (
    <Link
      href={chapter.href}
      className={`${baseClasses} border-slate-200 bg-white hover:border-brand-red hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-16px_rgba(200,16,46,0.22)]`}
    >
      {inner}
    </Link>
  )
}
