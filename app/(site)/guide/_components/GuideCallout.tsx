import Link from 'next/link'

interface GuideCalloutProps {
  /** Bold lead-in shown next to the red mark. */
  title: string
  /** Body text. Can contain a single inline link via `linkHref`/`linkLabel`. */
  body: string
  linkHref?: string
  linkLabel?: string
  /** Visual tone — "warning" (default) is dark with a red bar. */
  tone?: 'warning' | 'note'
  /** Single-character glyph in the red square. Defaults to "!". */
  mark?: string
}

/**
 * Storm-chaser-style callout: dark card with a red mark, a bold lead-in,
 * and a single inline link. Used on the hub above the chapter grid and
 * inside chapters for inline warnings.
 */
export default function GuideCallout({
  title,
  body,
  linkHref,
  linkLabel,
  tone = 'warning',
  mark = '!',
}: GuideCalloutProps) {
  const isWarning = tone === 'warning'
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={
          isWarning
            ? 'relative overflow-hidden rounded-xl bg-brand-black text-white px-6 sm:px-10 py-7 sm:py-9 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7'
            : 'relative overflow-hidden rounded-xl bg-slate-50 border border-slate-200 text-slate-700 px-6 sm:px-10 py-7 sm:py-9 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7'
        }
      >
        <span
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-[5px] bg-brand-red"
        />
        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-red text-white flex items-center justify-center text-2xl sm:text-3xl font-extrabold">
          {mark}
        </div>
        <div className="flex-1">
          <strong
            className={
              isWarning
                ? 'block text-lg sm:text-xl font-bold text-white mb-1 tracking-tight'
                : 'block text-lg sm:text-xl font-bold text-brand-black mb-1 tracking-tight'
            }
          >
            {title}
          </strong>
          <p
            className={
              isWarning
                ? 'text-sm sm:text-[15px] text-white/75 leading-relaxed m-0'
                : 'text-sm sm:text-[15px] text-slate-600 leading-relaxed m-0'
            }
          >
            {body}{' '}
            {linkHref && linkLabel && (
              <Link
                href={linkHref}
                className={
                  isWarning
                    ? 'text-red-400 font-semibold border-b border-red-400/40 hover:border-red-400 whitespace-nowrap'
                    : 'text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red whitespace-nowrap'
                }
              >
                {linkLabel} &rarr;
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
