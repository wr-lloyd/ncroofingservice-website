import Link from 'next/link'
import GuideEyebrow from './GuideEyebrow'

export interface ToolCard {
  /** Pill above the title, e.g. "Address lookup", "2-minute quiz". */
  tag: string
  title: string
  body: string
  href: string
  cta: string
}

interface ToolsSectionProps {
  /** Section h2. Defaults to "Tools to help". */
  heading?: string
  /** Lede paragraph. */
  intro?: string
  tools: ToolCard[]
  /** Optional id for in-page anchoring. */
  id?: string
}

/**
 * The "Tools to help you ___" slot that appears at the bottom of every
 * chapter. Caller passes ToolCard objects; this component renders them as
 * a clean 3-up grid.
 */
export default function ToolsSection({
  heading = 'Tools to help you check.',
  intro = 'Three things we built because customers kept asking. All free. None of them require you to talk to a salesperson before you get something useful.',
  tools,
  id = 'tools',
}: ToolsSectionProps) {
  return (
    <section id={id} className="bg-slate-50 border-t border-slate-200 scroll-mt-32 lg:scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mb-10 lg:mb-12 max-w-2xl">
          <GuideEyebrow>Tools</GuideEyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight leading-tight">
            {heading}
          </h2>
          {intro && (
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              {intro}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group flex flex-col bg-white border border-slate-200 rounded-xl p-7 hover:border-brand-red hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-16px_rgba(200,16,46,0.22)] transition-all"
            >
              <span className="inline-block self-start text-[11px] font-bold uppercase tracking-[0.12em] px-2 py-1 rounded bg-slate-100 text-slate-600">
                {t.tag}
              </span>
              <h3 className="mt-4 text-xl font-bold text-brand-black tracking-tight">
                {t.title}
              </h3>
              <p className="mt-2 text-[15px] text-slate-600 leading-relaxed flex-1">
                {t.body}
              </p>
              <div className="mt-5 text-[13px] text-brand-red font-semibold">
                {t.cta} &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
