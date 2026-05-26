import type { Metadata } from 'next'
import Link from 'next/link'
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY, absoluteUrl } from '@/lib/site'
import { CHAPTERS, GUIDE_NAME, GUIDE_TAGLINE } from '@/lib/guide'
import GuideEyebrow from './_components/GuideEyebrow'
import EntryChooser from './_components/EntryChooser'
import TrustQuote from './_components/TrustQuote'
import GuideCallout from './_components/GuideCallout'

export const metadata: Metadata = {
  title: `${GUIDE_NAME} | NC Roofing Service`,
  description:
    "A roof is a 20-year decision. Plain guide to damage, replacement, insurance, hiring, and what happens after the crew leaves. Useful even if you never call us.",
  alternates: { canonical: absoluteUrl('/guide') },
  openGraph: {
    title: `${GUIDE_NAME} | NC Roofing Service`,
    description:
      "A roof is a 20-year decision. Plain guide to damage, replacement, insurance, hiring, and what happens after the crew leaves.",
    url: absoluteUrl('/guide'),
    type: 'website',
  },
}

export default function GuideHubPage() {
  const totalReadMinutes = CHAPTERS.reduce((sum, c) => sum + c.readMinutes, 0)

  return (
    <main className="pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 text-center">
          <GuideEyebrow>{GUIDE_NAME}</GuideEyebrow>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-brand-black leading-[1.08] tracking-tight max-w-4xl mx-auto">
            A roof is a 20-year decision.{' '}
            <span className="text-brand-red">We wrote this to help you make it well.</span>{' '}
            Useful even if you never call us.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Written for the person standing in the driveway after a storm. For
            the one looking up at a roof that&apos;s older than their kids. For
            anyone tired of pushy sales calls who just wants the truth from
            roofers who install every component a manufacturer requires. Not
            just shingles.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Link
              href="#chapters"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-4 rounded-[2px] font-semibold transition-colors"
            >
              Open the Guide
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/guide/companion"
              className="inline-flex items-center justify-center gap-2 bg-white hover:border-brand-red hover:text-brand-red text-brand-black border-2 border-slate-300 px-7 py-4 rounded-[2px] font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              The Field Guide
            </Link>
            <a
              href={`tel:${OFFICE_PHONE}`}
              aria-label={`Call ${OFFICE_PHONE_DISPLAY}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:border-brand-black text-brand-black border-2 border-slate-300 px-7 py-4 rounded-[2px] font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call {OFFICE_PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500 text-center">
            The Field Guide is twelve moments to watch for, on one
            printable document. Take it with you when you talk to roofers.
          </p>
        </div>
      </section>

      <EntryChooser />

      <TrustQuote />

      <div className="bg-white py-10">
        <GuideCallout
          title="Did someone knock on your door this week?"
          body={
            'If a roofer showed up uninvited and said they "noticed damage" from the street, read how to spot a storm chaser before you sign anything. We wrote that chapter because we keep cleaning up after them.'
          }
          linkHref="/guide/pick-a-roofer"
          linkLabel="How to spot a storm chaser"
        />
      </div>

      {/* Chapter section heading */}

      {/* Chapters */}
      <section id="chapters" className="bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="text-center mb-14">
            <GuideEyebrow>The Guide</GuideEyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-brand-black tracking-tight leading-[1.08] max-w-3xl mx-auto">
              Six chapters. Read what you need.
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              {totalReadMinutes} minutes for the whole thing. Or skip to the
              one chapter that matches where you are. Each chapter ends with
              a way to talk to a real person. Or not. Up to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHAPTERS.map((c) => {
              const isComingSoon = c.status === 'coming-soon'
              const inner = (
                <>
                  <div className="w-11 h-11 bg-brand-red/10 text-brand-red rounded-[10px] flex items-center justify-center text-base font-bold mb-5">
                    {c.number}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2">
                    {c.shortLabel}
                  </div>
                  <div className="text-xl font-bold text-brand-black tracking-tight leading-snug flex-1 mb-4">
                    {c.question}
                  </div>
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-slate-500">{c.readMinutes} min read</span>
                    {isComingSoon ? (
                      <span className="text-[11px] font-bold uppercase tracking-[0.12em] px-2 py-1 rounded bg-slate-100 text-slate-500">
                        Coming soon
                      </span>
                    ) : (
                      <span className="text-brand-red font-semibold">
                        Read this chapter &rarr;
                      </span>
                    )}
                  </div>
                </>
              )

              if (isComingSoon) {
                return (
                  <div
                    key={c.slug}
                    className="flex flex-col bg-slate-50 border border-slate-200 rounded-xl p-7 min-h-[230px] cursor-default"
                    aria-disabled
                  >
                    {inner}
                  </div>
                )
              }

              return (
                <Link
                  key={c.slug}
                  href={c.href}
                  className="group flex flex-col bg-white border border-slate-200 rounded-xl p-7 min-h-[230px] hover:border-brand-red hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-16px_rgba(200,16,46,0.18)] transition-all"
                >
                  {inner}
                </Link>
              )
            })}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            All six chapters are live.{' '}
            <Link href="/guide/check-your-roof" className="text-brand-red font-semibold hover:underline">
              Start with chapter one
            </Link>
            , or jump to whichever one fits.
          </p>
        </div>
      </section>

      {/* JSON-LD: Article + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: GUIDE_NAME,
              description: GUIDE_TAGLINE,
              url: absoluteUrl('/guide'),
              author: {
                '@type': 'Organization',
                name: 'NC Roofing Service',
                url: absoluteUrl('/'),
              },
              publisher: {
                '@type': 'Organization',
                name: 'NC Roofing Service',
                url: absoluteUrl('/'),
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: absoluteUrl('/'),
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: GUIDE_NAME,
                  item: absoluteUrl('/guide'),
                },
              ],
            },
          ]),
        }}
      />
    </main>
  )
}
