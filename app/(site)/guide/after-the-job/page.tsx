import type { Metadata } from 'next'
import Link from 'next/link'
import { getChapter } from '@/lib/guide'
import { absoluteUrl, OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'
import ChapterShell from '../_components/ChapterShell'
import ChapterSection from '../_components/ChapterSection'
import ToolsSection from '../_components/ToolsSection'

const chapter = getChapter('after-the-job')

const LEDE =
  "What to do once the new roof is on. The first thirty days. A year-by-year maintenance plan. Your warranty in plain words. When to call us back, and when not to."

export const metadata: Metadata = {
  title: `Ch. ${chapter.number} · ${chapter.shortLabel} | The Honest Roof Guide`,
  description:
    "After the install. First 30 days, maintenance timeline, warranty explained. Most of what is online about roof maintenance is wrong. Here is what actually matters.",
  alternates: { canonical: absoluteUrl(chapter.href) },
  openGraph: {
    title: `${chapter.question} | The Honest Roof Guide`,
    description: 'First 30 days, maintenance timeline, warranty.',
    url: absoluteUrl(chapter.href),
    type: 'article',
  },
}

const TOC = [
  { id: 'first-30', label: 'First 30 days' },
  { id: 'warranty', label: 'Your warranty' },
  { id: 'maintenance', label: 'Year-by-year maintenance' },
  { id: 'call-us', label: 'When to call us back' },
  { id: 'tools', label: 'Tools to help' },
]

const QUICK_TOOLS = [
  {
    tag: 'Checklist',
    tone: 'pdf' as const,
    name: 'First 30 days',
    desc: 'What to do in the first month.',
    href: '/guide/downloads/first-30-days-checklist',
  },
  {
    tag: 'Reference',
    tone: 'pdf' as const,
    name: 'Maintenance timeline',
    desc: 'Year-by-year for 25 years.',
    href: '/guide/downloads/maintenance-timeline',
  },
  {
    tag: 'Reference',
    tone: 'pdf' as const,
    name: 'Warranty explainer',
    desc: 'What each warranty actually covers.',
    href: '/guide/downloads/warranty-explainer',
  },
]

const TOOLS = [
  {
    tag: 'Checklist',
    title: 'First 30 days',
    body: 'A short list of things worth checking in the first month after install. Mostly to confirm the roof is settling in right.',
    href: '/guide/downloads/first-30-days-checklist',
    cta: 'Download',
  },
  {
    tag: 'Reference',
    title: 'Maintenance timeline',
    body: 'Year by year, for 25 years. Less to do than you would think.',
    href: '/guide/downloads/maintenance-timeline',
    cta: 'Download',
  },
  {
    tag: 'Reference',
    title: 'Warranty explainer',
    body: 'Manufacturer vs. workmanship. What each covers, what they do not, how to file a claim.',
    href: '/guide/downloads/warranty-explainer',
    cta: 'Download',
  },
]

const TIMELINE = [
  {
    when: 'Every year',
    items: [
      'Clean the gutters in November after the leaves fall',
      'Walk the perimeter once in spring, look up',
      'Trim back branches within 6 feet of the roof',
    ],
  },
  {
    when: 'Year 5',
    items: [
      'Free courtesy roof check from us. Confirms flashing and ventilation.',
      'Photograph the roof from each side. Compare to year 1.',
    ],
  },
  {
    when: 'Year 10',
    items: [
      'Second courtesy check',
      'If selling soon, this is the year to do it for top value',
    ],
  },
  {
    when: 'Year 15',
    items: [
      'Start budgeting for replacement at $80/month',
      'Check for any patchy granule loss',
    ],
  },
  {
    when: 'Year 20',
    items: [
      'Honest inspection. Plan: another 5 years or replace in 1-2?',
      'If selling, sell now. After year 22, buyers will negotiate a roof credit.',
    ],
  },
  {
    when: 'Year 25',
    items: ['Start chapter two again. Time for a new roof.'],
  },
]

export default function AfterTheJobPage() {
  return (
    <>
      <ChapterShell chapter={chapter} lede={LEDE} tocItems={TOC} quickTools={QUICK_TOOLS}>
        {/* 01 — First 30 days */}
        <ChapterSection id="first-30" number="01">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            The first thirty days.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            A roof done well is mostly invisible after the crew leaves.
            These are the few things worth doing in the first month to
            confirm it is settling in right.
          </p>

          <div className="space-y-4">
            {[
              {
                t: 'Days 1 to 3',
                items: [
                  'Walk the lawn once more, ideally with a magnet sweeper',
                  'Open the attic during the day, confirm no new daylight',
                  'Save the manufacturer warranty registration email',
                  'File the contract, final invoice, and warranty paperwork together',
                ],
              },
              {
                t: 'Days 4 to 14',
                items: [
                  'After the first hard rain, check the attic and walk the perimeter',
                  'Confirm gutters are draining away from the foundation',
                  'Look at the ridge from the ground. Still straight?',
                  'Confirm the dumpster left, waste pickup is closed out',
                ],
              },
              {
                t: 'Days 15 to 30',
                items: [
                  'Notice the attic temperature. With new ventilation it should feel different.',
                  'Watch for single shingles lifting in heavy wind. None should.',
                  'Tell your homeowners insurance about the new roof. Send the final invoice. Most carriers give a small premium credit.',
                  'If you financed, confirm the first auto-debit is on the right account',
                ],
              },
            ].map((block) => (
              <div
                key={block.t}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red mb-3">
                  {block.t}
                </div>
                <ul className="space-y-2 text-[15px] text-slate-700 leading-relaxed">
                  {block.items.map((it, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-slate-300 flex-shrink-0">&bull;</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/guide/downloads/first-30-days-checklist"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the first-30-days checklist &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* 02 — Warranty */}
        <ChapterSection id="warranty" number="02" variant="tinted" wide>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Your warranty, in plain words.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Two warranties cover your new roof. Knowing which one applies
            when something goes wrong saves you weeks of back and forth.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500 mb-1">
                The shingles themselves
              </div>
              <h3 className="text-xl font-bold text-brand-black tracking-tight mb-4">
                Manufacturer warranty
              </h3>
              <dl className="space-y-3 text-[14.5px]">
                <div>
                  <dt className="font-bold text-brand-black">Covers</dt>
                  <dd className="text-slate-700 mt-1">Defects in the shingles. Premature granule loss, color failure, manufacturing flaws.</dd>
                </div>
                <div>
                  <dt className="font-bold text-brand-black">Filed by</dt>
                  <dd className="text-slate-700 mt-1">Your roofer, in your name, within 30 days of completion.</dd>
                </div>
                <div>
                  <dt className="font-bold text-brand-black">Length</dt>
                  <dd className="text-slate-700 mt-1">25 to 50 years. A certified installer unlocks the longest tier (Golden Pledge, Platinum, etc.).</dd>
                </div>
                <div>
                  <dt className="font-bold text-brand-black">Doesn&apos;t cover</dt>
                  <dd className="text-slate-700 mt-1">Leaks from flashing, install error, or weather above design ratings.</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500 mb-1">
                How it was installed
              </div>
              <h3 className="text-xl font-bold text-brand-black tracking-tight mb-4">
                Workmanship warranty
              </h3>
              <dl className="space-y-3 text-[14.5px]">
                <div>
                  <dt className="font-bold text-brand-black">Covers</dt>
                  <dd className="text-slate-700 mt-1">Anything that goes wrong because of how the roof was put together. Flashing leaks, nail pops, install defects.</dd>
                </div>
                <div>
                  <dt className="font-bold text-brand-black">Filed by</dt>
                  <dd className="text-slate-700 mt-1">Your roofer. There is no third party.</dd>
                </div>
                <div>
                  <dt className="font-bold text-brand-black">Length</dt>
                  <dd className="text-slate-700 mt-1">Ours is 10 years. Industry standard is 1 to 5. Ask before you sign.</dd>
                </div>
                <div>
                  <dt className="font-bold text-brand-black">Doesn&apos;t cover</dt>
                  <dd className="text-slate-700 mt-1">Storm damage above design ratings, owner-caused damage, wear from age.</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-brand-red rounded-r-xl p-6 mb-8">
            <h3 className="font-bold text-brand-black tracking-tight mb-3">
              Four things that void your warranty
            </h3>
            <ul className="space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc list-outside ml-5 marker:text-brand-red">
              <li>Adding a satellite dish, solar panels, or skylights without proper flashing redone</li>
              <li>Pressure-washing the roof. Never do this.</li>
              <li>Inadequate ventilation (finishing the attic, closing soffit vents)</li>
              <li>Letting another roofer patch something without checking with the original installer</li>
            </ul>
          </div>

          <div className="bg-brand-black text-white rounded-2xl p-6 lg:p-8">
            <h3 className="font-bold tracking-tight mb-3">
              When something goes wrong, here is the order
            </h3>
            <ol className="space-y-2 text-[15px] text-white/80 leading-relaxed list-decimal list-outside ml-5 marker:text-red-400">
              <li>Call your roofer first. 90% of issues are workmanship, and we fix them at no charge.</li>
              <li>If it turns out to be a manufacturer defect, we file the claim with the manufacturer for you.</li>
              <li>If it is storm damage above design ratings, that is an insurance claim. We help with documentation.</li>
            </ol>
          </div>

          <div className="mt-8">
            <Link
              href="/guide/downloads/warranty-explainer"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the full warranty explainer &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* 03 — Maintenance timeline */}
        <ChapterSection id="maintenance" number="03">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Year by year, for the next 25.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Most of what you read online about &ldquo;annual roof
            maintenance plans&rdquo; is a service designed to sell you a
            service. Here is what a well-installed roof actually needs.
            There is less here than you would think.
          </p>

          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[3.5rem] top-2 bottom-2 w-px bg-slate-200"
            />
            <div className="space-y-5">
              {TIMELINE.map((block, i) => (
                <div key={i} className="relative flex gap-5">
                  <div className="flex-shrink-0 w-[7rem] pt-1 text-right">
                    <div className="text-sm font-bold text-brand-red tracking-tight">
                      {block.when}
                    </div>
                  </div>
                  <div className="relative flex-shrink-0 mt-1.5">
                    <div className="w-3 h-3 rounded-full bg-brand-red ring-4 ring-white" />
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl p-5">
                    <ul className="space-y-1.5 text-[14.5px] text-slate-700 leading-relaxed">
                      {block.items.map((it, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-slate-300 flex-shrink-0">&bull;</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-[16px] text-slate-700 leading-relaxed">
            That is it. Walk the perimeter once a year. Trim branches. Clean
            gutters. Anything else is a service plan you do not need.
          </p>
        </ChapterSection>

        {/* 04 — When to call back */}
        <ChapterSection id="call-us" number="04" variant="tinted">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            When to call us back. And when not to.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            We get calls from past customers all the time. Most of them
            cost us nothing and save the customer real money or worry. Some
            are worth a paid visit. Some are not anything at all. Here is
            how to tell.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-emerald-200 rounded-xl p-6">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 mb-4">
                Call us. We&apos;ll come look, no charge.
              </div>
              <ul className="space-y-2.5 text-[14.5px] text-slate-700 leading-relaxed">
                {[
                  'Any visible leak inside, anywhere, anytime',
                  'A shingle that lifted or came off in wind',
                  'Daylight visible through the roof from the attic',
                  'A ring or stain on a ceiling that was not there before',
                  'Any flashing that looks bent, rusted, or pulled away',
                  'After a hailstorm or wind event above 50 mph',
                ].map((it, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-500 flex-shrink-0">&#10003;</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
                Not worth a call. Save your day.
              </div>
              <ul className="space-y-2.5 text-[14.5px] text-slate-700 leading-relaxed">
                {[
                  'Streaks of black algae on the roof (cosmetic, normal in NC)',
                  'A small amount of granule loss in the gutter after rain (year 1 normal)',
                  'A fallen branch that did not damage anything',
                  'The roof looking darker than expected in heavy rain (normal, dries fast)',
                  'A neighbor saying you have hail damage you cannot see',
                  'A door-knock roofer offering to inspect for free',
                ].map((it, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-slate-300 flex-shrink-0">&times;</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ChapterSection>

        {/* End-of-chapter soft close */}
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
            <p className="text-[17px] text-slate-600 leading-relaxed">
              That is the whole guide. Six chapters. From the storm that
              brought you here, to a roof you do not have to think about
              again for a quarter century. Save this guide. Send it to a
              neighbor. If you ever need us, we are here.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/request-inspection"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3.5 rounded-[2px] font-semibold transition-colors"
              >
                Schedule a free roof check
              </Link>
              <a
                href={`tel:${OFFICE_PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-300 hover:border-brand-black text-brand-black px-7 py-3.5 rounded-[2px] font-semibold transition-colors"
              >
                Or call {OFFICE_PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-10 pt-10 border-t border-slate-200">
              <Link
                href="/guide"
                className="inline-flex items-center gap-2 text-sm text-brand-red font-semibold hover:underline"
              >
                &larr; Back to the guide
              </Link>
            </div>
          </div>
        </section>

        <ToolsSection
          heading="Tools for after the install."
          intro="Three references to keep with the rest of your roof paperwork. Pull them out when something happens. Or never. Either is fine."
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
              description: 'First 30 days, maintenance timeline, warranty.',
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
