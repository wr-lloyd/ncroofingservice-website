import type { Metadata } from 'next'
import Link from 'next/link'
import { getChapter } from '@/lib/guide'
import { absoluteUrl, OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'
import {
  VERIFY_NC_LICENSE,
  VERIFY_GAF,
  VERIFY_CERTAINTEED,
  VERIFY_OWENS_CORNING,
  VERIFY_FORTIFIED,
  VERIFY_BBB,
} from '@/lib/verification-links'
import ChapterShell from '../_components/ChapterShell'
import ChapterSection from '../_components/ChapterSection'
import ToolsSection from '../_components/ToolsSection'

const chapter = getChapter('pick-a-roofer')

const LEDE =
  "Picking the wrong roofer is more expensive than picking the wrong shingle. Five things to verify, twenty questions to ask, the red flags that mean walk away, and a reference check that catches what the rest misses."

export const metadata: Metadata = {
  title: `Ch. ${chapter.number} · ${chapter.shortLabel} | The Honest Roof Guide`,
  description:
    "Five non-negotiables. Twenty questions. Red flags. A reference check script. The honest way to hire a roofer in NC.",
  alternates: { canonical: absoluteUrl(chapter.href) },
  openGraph: {
    title: `${chapter.question} | The Honest Roof Guide`,
    description: 'Five non-negotiables. Twenty questions. The reference check.',
    url: absoluteUrl(chapter.href),
    type: 'article',
  },
}

const TOC = [
  { id: 'five-non-negotiables', label: 'Five non-negotiables' },
  { id: 'twenty-questions', label: 'Twenty questions' },
  { id: 'red-flags', label: 'Storm-chaser red flags' },
  { id: 'reference-check', label: 'Reference check' },
  { id: 'tools', label: 'Tools to help' },
]

const QUICK_TOOLS = [
  {
    tag: 'Checklist',
    tone: 'pdf' as const,
    name: 'Five non-negotiables',
    desc: 'License. Insurance. Cert. Reviews. References.',
    href: '/guide/downloads/five-non-negotiables',
  },
  {
    tag: 'Checklist',
    tone: 'pdf' as const,
    name: 'Twenty questions',
    desc: 'Print one per roofer. Compare answers.',
    href: '/guide/downloads/twenty-questions-to-ask-every-roofer',
  },
  {
    tag: 'Reference',
    tone: 'pdf' as const,
    name: 'Storm-chaser red flags',
    desc: 'What to watch for at the door.',
    href: '/guide/downloads/storm-chaser-red-flags',
  },
]

const TOOLS = [
  {
    tag: 'Checklist',
    title: 'Five non-negotiables',
    body: 'A one-page list of what to verify before hiring anyone. License, insurance, certification, reviews, references. Pull it out on every estimate visit.',
    href: '/guide/downloads/five-non-negotiables',
    cta: 'Download',
  },
  {
    tag: 'Checklist',
    title: 'Twenty questions',
    body: 'Print three copies. One for each roofer. The patterns become obvious by the third call.',
    href: '/guide/downloads/twenty-questions-to-ask-every-roofer',
    cta: 'Download',
  },
  {
    tag: 'Script',
    title: 'Reference check',
    body: 'Eight questions to ask a roofer\'s past customer. Twenty minutes of calls saves years of regret.',
    href: '/guide/downloads/reference-check-script',
    cta: 'Download',
  },
]

const NON_NEGOTIABLES: Array<{
  n: number
  h: string
  sub: string
  body: string
  /** Verification links rendered beneath the body. The display string is
   *  printable-friendly (no protocol) and the url is clickable. */
  verify?: Array<{ display: string; url: string; label: string }>
}> = [
  {
    n: 1,
    h: 'NC general contractor license',
    sub: 'Required at $30k+ jobs',
    body: 'Search by company name. The license must be active and unsuspended. No license, no $30k+ replacement. Period.',
    verify: [VERIFY_NC_LICENSE],
  },
  {
    n: 2,
    h: 'General liability + workers comp',
    sub: 'Get the COI by email',
    body: '$1M minimum general liability. Workers comp required for any NC company with 3+ employees. Call the broker listed on the Certificate of Insurance to confirm it is current. Roofers sometimes hand out old ones. Never let anyone climb your roof until you have a current COI in hand — if an uninsured worker falls on your property, your homeowner\'s policy can end up paying.',
  },
  {
    n: 3,
    h: 'Manufacturer certification',
    sub: 'GAF, CertainTeed, Owens Corning, or Fortified',
    body: 'GAF Certified or Master Elite, CertainTeed Credentialed or SELECT ShingleMaster, Owens Corning Preferred or Platinum Preferred, Fortified-trained for storm-resilient roofing. Verify on the manufacturer site, not the roofer site. These certifications unlock the longest warranty tiers and prove a roofer met the manufacturer\'s training and insurance requirements.',
    verify: [
      VERIFY_GAF,
      VERIFY_CERTAINTEED,
      VERIFY_OWENS_CORNING,
      VERIFY_FORTIFIED,
    ],
  },
  {
    n: 4,
    h: 'Real local reviews',
    sub: '4.7+ across 50+ reviews',
    body: 'Read the 3-star reviews. Skip the 5-stars and 1-stars. Look for replies from the company within a week. Cross-check with the BBB. A+ with one or two resolved complaints is normal. Unresolved complaints are a problem.',
    verify: [VERIFY_BBB],
  },
  {
    n: 5,
    h: 'Two real references on the phone',
    sub: 'Same city, last 90 days',
    body: 'A roofer who hesitates to give two references is telling you something. We will give you four if you ask. Pick any.',
  },
]

const QUESTIONS = {
  company: [
    'How long has your company been doing residential roofing in NC?',
    'What is your NC general contractor license number?',
    'Are you a manufacturer-certified installer? Which manufacturer?',
    'Can you email me your Certificate of Insurance today?',
    'Do you carry workers comp? Can the COI show both?',
  ],
  people: [
    'Are the crews your employees or subcontractors?',
    'Will the same crew start and finish my job?',
    'Who is the on-site foreman, and how do I reach them on install day?',
    'How many roofs has that foreman done?',
  ],
  estimate: [
    'What specific shingle product is on the estimate?',
    'What underlayment, ice and water shield, drip edge, and starter strip are you using?',
    'Are you replacing flashing around the chimney and walls, or reusing it?',
    'What ventilation are you installing or upgrading?',
    'How is decking handled if you find bad spots? What is the per-sheet price?',
  ],
  warranty: [
    'What manufacturer warranty will be filed in my name?',
    'What workmanship warranty do you carry, and is it in writing?',
    'Will I have a written contract before any work starts?',
  ],
  after: [
    'What is your magnet-sweep and nail-cleanup process?',
    'Who handles a warranty call in five years if there is a leak?',
    'Can you give me two recent customers I can call this week?',
  ],
}

const RED_FLAGS = [
  '"I was working in the neighborhood and noticed your roof has damage."',
  '"We can get you a new roof and your insurance will pay for the whole thing."',
  '"I can waive your deductible. We do it all the time."',
  '"Sign this so I can get on the roof and start the inspection."',
  '"This price is only good today."',
  '"I just need a small deposit to hold the spot."',
]

export default function PickARooferPage() {
  return (
    <>
      <ChapterShell chapter={chapter} lede={LEDE} tocItems={TOC} quickTools={QUICK_TOOLS}>
        {/* 01 — Five non-negotiables */}
        <ChapterSection id="five-non-negotiables" number="01">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Five things to verify. No exceptions.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            If any roofer on your list is missing any of these five, cross
            them off. The whole list takes about an hour to verify across
            three roofers. That hour is the most valuable hour you will spend
            on this project.
          </p>

          <div className="space-y-4">
            {NON_NEGOTIABLES.map((item) => (
              <div
                key={item.n}
                className="bg-white border border-slate-200 rounded-xl p-6 flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center font-extrabold text-lg">
                  {item.n}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-lg font-bold text-brand-black tracking-tight">
                      {item.h}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      {item.sub}
                    </span>
                  </div>
                  <p className="mt-2 text-[15.5px] text-slate-600 leading-relaxed">
                    {item.body}
                  </p>
                  {item.verify && item.verify.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 mb-1.5">
                        Verify at
                      </div>
                      <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        {item.verify.map((v) => (
                          <li key={v.url} className="text-[14px]">
                            <a
                              href={v.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
                            >
                              {v.display}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/guide/downloads/five-non-negotiables"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the five-non-negotiables checklist &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* 02 — Twenty questions */}
        <ChapterSection id="twenty-questions" number="02" variant="tinted" wide>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Twenty questions to ask every roofer.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Print one copy per roofer. Write the answers next to each
            question. The patterns become obvious by the third call. Any
            roofer who gets annoyed by these is a roofer who should not be on
            your roof.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'About the company', items: QUESTIONS.company, offset: 0 },
              { title: 'About the people', items: QUESTIONS.people, offset: 5 },
              { title: 'About the estimate', items: QUESTIONS.estimate, offset: 9 },
              { title: 'About warranty', items: QUESTIONS.warranty, offset: 14 },
              { title: 'About what happens after', items: QUESTIONS.after, offset: 17 },
            ].map((group) => (
              <div
                key={group.title}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-red mb-4">
                  {group.title}
                </h3>
                <ol className="space-y-2.5">
                  {group.items.map((q, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[14.5px] text-slate-700 leading-relaxed"
                    >
                      <span className="font-bold text-slate-400 flex-shrink-0">
                        {group.offset + i + 1}.
                      </span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/guide/downloads/twenty-questions-to-ask-every-roofer"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the twenty-questions checklist &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* Pull quote */}
        <aside className="bg-white border-y border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <blockquote className="relative pl-8 sm:pl-12">
              <span aria-hidden className="absolute left-0 top-0 text-5xl sm:text-6xl text-brand-red font-extrabold leading-none">
                &ldquo;
              </span>
              <q className="text-xl sm:text-2xl text-brand-black font-semibold leading-snug tracking-tight not-italic">
                A real local roofer might knock on your door. They might
                not. What they will not do is pressure you for a same-day
                yes, refuse to hand you a printed business card, or get
                hostile when you say you want to think about it. The
                pressure is the story, not the knock.
              </q>
              <cite className="block mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 not-italic">
                On storm chasers, after twelve years of cleaning up after them
              </cite>
            </blockquote>
          </div>
        </aside>

        {/* 03 — Red flags */}
        <ChapterSection id="red-flags" number="03" variant="warning">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            How to spot a storm chaser.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            After every big storm in NC, hundreds of out-of-state crews show
            up. Most leave inside a year. Some leave behind worse roofs than
            they started with. If any of these come out of someone&apos;s
            mouth in the first 60 seconds, walk back inside.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-red mb-4">
              Lines that mean stop
            </h3>
            <ul className="space-y-3">
              {RED_FLAGS.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15.5px] text-slate-700 leading-relaxed italic"
                >
                  <span className="text-brand-red font-extrabold flex-shrink-0 not-italic">
                    &times;
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-red mb-4">
              Paperwork that means stop
            </h3>
            <ul className="space-y-2.5 text-[15px] text-slate-700 leading-relaxed list-disc list-outside ml-5 marker:text-brand-red">
              <li>A &ldquo;contingent agreement&rdquo; that signs them onto the job before any inspection is done</li>
              <li>An &ldquo;Assignment of Benefits&rdquo; or &ldquo;AOB&rdquo; that hands them your insurance check directly. Never sign one of these.</li>
              <li>A blank or partial estimate that says &ldquo;additional charges as needed&rdquo;</li>
              <li>No license number, no insurance certificate, no manufacturer certification listed</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-red mb-4">
              If you already signed something
            </h3>
            <p className="text-[15.5px] text-slate-700 leading-relaxed">
              NC consumer protection gives you a 3-day &ldquo;right to
              cancel&rdquo; on door-to-door sales. Send written cancellation
              within 3 business days. If you signed an AOB, contact your
              insurance carrier and your attorney immediately. Call us if you
              want a second set of eyes. We will tell you straight, no
              charge.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/guide/downloads/storm-chaser-red-flags"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the storm-chaser warning card &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* 04 — Reference check */}
        <ChapterSection id="reference-check" number="04">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            The reference check that catches the rest.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Call two real customers, last 90 days, same city if possible.
            Twenty minutes total. The patterns become obvious. Here are the
            eight questions.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
            <ol className="space-y-3 list-decimal list-outside ml-5 marker:text-brand-red marker:font-bold">
              {[
                'When did they do your roof?',
                'Did the final price match the original estimate? If not, by how much?',
                'How long did the job take? Was that what they said it would?',
                'Was the same crew there the whole time? Was the foreman around?',
                'How did they leave your property at the end of each day?',
                'Have you had any issues since? If so, how did they handle it?',
                'Did you have to chase them for anything? Warranty paperwork, magnet sweep, anything?',
                'If you had to do it again, would you hire them again?',
              ].map((q, i) => (
                <li key={i} className="pl-2 text-[15.5px] text-slate-700 leading-relaxed">
                  {q}
                </li>
              ))}
            </ol>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-red mb-3">
                The tell
              </h3>
              <p className="text-[15.5px] text-slate-700 leading-relaxed">
                The most important moment is the pause before question 8. A
                real &ldquo;yes&rdquo; comes fast. A hesitant &ldquo;well, I
                mean, mostly&hellip;&rdquo; is your answer.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/guide/downloads/reference-check-script"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the reference-check script &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* End-of-chapter soft close */}
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
            <p className="text-[17px] text-slate-600 leading-relaxed">
              Hiring a roofer is the most important decision on this project.
              Run the five checks. Ask the twenty questions. Call two
              references. If we are on your short list, ask us anything on
              this page. We built the company expecting these questions.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/request-inspection"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3.5 rounded-[2px] font-semibold transition-colors"
              >
                Get a quote from us
              </Link>
              <a
                href={`tel:${OFFICE_PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-300 hover:border-brand-black text-brand-black px-7 py-3.5 rounded-[2px] font-semibold transition-colors"
              >
                Or call {OFFICE_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <ToolsSection
          heading="Tools to help you hire."
          intro="Four printable references to keep with you through the estimate process. Free, useful even if you never call us."
          tools={TOOLS}
        />
      </ChapterShell>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: chapter.question,
              description: 'Five non-negotiables. Twenty questions. The reference check.',
              url: absoluteUrl(chapter.href),
              author: { '@type': 'Organization', name: 'NC Roofing Service', url: absoluteUrl('/') },
              publisher: { '@type': 'Organization', name: 'NC Roofing Service', url: absoluteUrl('/') },
              isPartOf: { '@type': 'CreativeWork', name: 'The Honest Roof Guide', url: absoluteUrl('/guide') },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
                { '@type': 'ListItem', position: 2, name: 'The Honest Roof Guide', item: absoluteUrl('/guide') },
                { '@type': 'ListItem', position: 3, name: chapter.shortLabel, item: absoluteUrl(chapter.href) },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
