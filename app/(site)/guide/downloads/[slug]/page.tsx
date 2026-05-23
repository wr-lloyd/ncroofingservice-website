import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { DOWNLOADS, getDownload } from '@/lib/guide-downloads'
import { getChapter } from '@/lib/guide'
import { absoluteUrl, OFFICE_PHONE_DISPLAY } from '@/lib/site'
import PrintButton from './PrintButton'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return DOWNLOADS.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const doc = getDownload(slug)
  if (!doc) return { title: 'Not found' }
  return {
    title: `${doc.title} | The Honest Roof Guide`,
    description: doc.intro,
    alternates: { canonical: absoluteUrl(`/guide/downloads/${doc.slug}`) },
    robots: doc.ready ? undefined : { index: false },
  }
}

const KIND_LABEL: Record<string, string> = {
  checklist: 'Printable checklist',
  reference: 'Reference card',
  worksheet: 'Worksheet',
  'decision-tree': 'Decision tree',
}

export default async function GuideDownloadPage({ params }: PageProps) {
  const { slug } = await params
  const doc = getDownload(slug)
  if (!doc) notFound()

  const chapter = getChapter(doc.chapter)

  return (
    <article
      className="guide-print max-w-3xl mx-auto bg-white border border-slate-200 rounded-xl shadow-sm px-7 sm:px-12 py-10 sm:py-14"
      // pt-20 mt on screen because the site nav is sticky; print resets it.
      style={{ marginTop: 'calc(env(safe-area-inset-top, 0px) + 56px)' }}
    >
      {/* Header block */}
      <header className="mb-10 pb-8 border-b border-slate-200">
        <div className="flex items-center justify-between gap-4 print-hide">
          <Link
            href={chapter.href}
            className="text-[13px] text-brand-red font-semibold hover:underline"
          >
            &larr; Back to Chapter {chapter.number} &middot; {chapter.shortLabel}
          </Link>
          <PrintButton />
        </div>

        <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
          <span className="inline-block px-2 py-1 bg-brand-red/10 text-brand-red rounded">
            {KIND_LABEL[doc.kind]}
          </span>
          <span>The Honest Roof Guide</span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight leading-[1.1]">
          {doc.title}
        </h1>
        <p className="mt-4 text-[17px] text-slate-600 leading-relaxed">
          {doc.intro}
        </p>
        {doc.useTime && (
          <div className="mt-4 text-[13px] text-slate-500">
            Time to use: <span className="font-semibold text-slate-700">{doc.useTime}</span>
          </div>
        )}
        {!doc.ready && (
          <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-[14px] text-amber-900 print-hide">
            This document ships with its chapter. The full version will appear here
            when chapter {chapter.number} goes live. In the meantime, the chapter
            page is the best place to read everything we have on this topic.
          </div>
        )}
      </header>

      {/* Sections */}
      <div className="space-y-10">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-black tracking-tight mb-3">
              {section.heading}
            </h2>
            {section.intro && (
              <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                {section.intro}
              </p>
            )}
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15.5px] text-slate-800 leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="flex-shrink-0 mt-1 w-4 h-4 border-2 border-slate-400 rounded-sm"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {section.note && (
              <p className="mt-4 text-[13.5px] text-slate-500 italic">
                {section.note}
              </p>
            )}
          </section>
        ))}
      </div>

      {/* Closing */}
      {doc.closing && (
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-[15.5px] text-slate-600 italic leading-relaxed">
            {doc.closing}
          </p>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-[13px] text-slate-500">
        <div>
          <div className="font-bold text-brand-black">NC Roofing Service</div>
          <div className="mt-1">
            ncroofingservice.com &middot; {OFFICE_PHONE_DISPLAY}
          </div>
        </div>
        <div className="text-right">
          <div>The Honest Roof Guide</div>
          <div className="mt-1">
            Chapter {chapter.number} &middot; {chapter.shortLabel}
          </div>
        </div>
      </footer>
    </article>
  )
}
