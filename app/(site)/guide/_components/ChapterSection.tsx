interface ChapterSectionProps {
  id: string
  /** Two-digit section number rendered in the red corner tile. */
  number: string
  /** Visual variant. `tinted` adds a soft slate background; `warning` adds
   *  a dark accent bar. */
  variant?: 'default' | 'tinted' | 'warning'
  /** Use a wider body column for tables / multi-track content. */
  wide?: boolean
  children: React.ReactNode
}

/**
 * Reusable chapter section wrapper. Provides the numbered side tile, the
 * scroll-anchor id, and the three background variants used across the
 * mockup chapters.
 */
export default function ChapterSection({
  id,
  number,
  variant = 'default',
  wide = false,
  children,
}: ChapterSectionProps) {
  const variantClasses =
    variant === 'tinted'
      ? 'bg-slate-50 border-y border-slate-100'
      : variant === 'warning'
        ? 'bg-white'
        : 'bg-white'

  return (
    <section
      id={id}
      className={`${variantClasses} scroll-mt-32 lg:scroll-mt-24`}
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 ${
          wide ? 'max-w-4xl' : 'max-w-3xl'
        }`}
      >
        <div className="flex gap-5 sm:gap-8">
          <div className="hidden sm:block flex-shrink-0">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-base font-bold tracking-tight ${
                variant === 'warning'
                  ? 'bg-brand-red text-white'
                  : 'bg-brand-red/10 text-brand-red'
              }`}
            >
              {number}
            </div>
          </div>
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </section>
  )
}
