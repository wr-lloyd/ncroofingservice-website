import type { Metadata } from 'next'
import Link from 'next/link'
import { getChapter } from '@/lib/guide'
import { absoluteUrl, OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'
import ChapterShell from '../_components/ChapterShell'
import ChapterSection from '../_components/ChapterSection'
import ToolsSection from '../_components/ToolsSection'

const chapter = getChapter('check-your-roof')

export const metadata: Metadata = {
  title: `Ch. ${chapter.number} · ${chapter.shortLabel} | The Honest Roof Guide`,
  description:
    "What's actually wrong with my roof? Plain-English checks you can do from the ground, photos to take before you call anyone, and how to know whether it's a repair or a replacement.",
  alternates: { canonical: absoluteUrl(chapter.href) },
  openGraph: {
    title: `${chapter.question} | The Honest Roof Guide`,
    description:
      "Plain-English checks you can do from the ground, photos to take before you call anyone, and how to know if it's a repair or a replacement.",
    url: absoluteUrl(chapter.href),
    type: 'article',
  },
}

const TOC = [
  { id: 'stay-off', label: "Don't get up there" },
  { id: 'from-ground', label: 'From the ground' },
  { id: 'photos', label: 'Photos to take' },
  { id: 'repair-or-replace', label: 'Repair or replace?' },
  { id: 'what-now', label: 'What to do this week' },
  { id: 'tools', label: 'Tools to help' },
]

const QUICK_TOOLS = [
  {
    tag: 'Tool · 1 min',
    tone: 'tool' as const,
    name: 'Storm Check',
    desc: "Type your address. See every storm that's hit it.",
    href: '/storm-check',
  },
  {
    tag: 'PDF checklist',
    tone: 'pdf' as const,
    name: 'Photos to Take',
    desc: 'One-pager of what to capture before you call.',
    href: '/guide/downloads/photo-checklist',
  },
  {
    tag: 'Free visit',
    tone: 'book' as const,
    name: 'Schedule a roof check',
    desc: 'One of our roofers comes out. No pressure.',
    href: '/request-inspection',
  },
]

const TOOLS = [
  {
    tag: 'Address lookup',
    title: 'Storm Check',
    body: "Type in your address. We'll show you every hail and high-wind storm that's actually hit your house in the last ten years.",
    href: '/storm-check',
    cta: 'Open the tool',
  },
  {
    tag: '2-minute quiz',
    title: 'Problem Finder',
    body: "Pick what you're seeing — stain, missing piece, drip. We'll tell you what it most likely means and what to do next.",
    href: '/start#problem-finder',
    cta: 'Start the walkthrough',
  },
  {
    tag: 'A real person',
    title: 'Free roof check',
    body: 'One of our roofers comes out, takes a real look from a ladder, takes drone photos, and tells you the truth. No sales pitch.',
    href: '/request-inspection',
    cta: 'Schedule a check',
  },
]

export default function CheckYourRoofPage() {
  return (
    <>
      <ChapterShell chapter={chapter} tocItems={TOC} quickTools={QUICK_TOOLS}>
        {/* 01 — Stay off the roof */}
        <ChapterSection id="stay-off" number="01" variant="warning">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            First &mdash; don&apos;t get up on your roof.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            We mean this. People who work on roofs every day still get hurt
            doing it. You shouldn&apos;t be the one finding out what&apos;s
            broken from on top of one.
          </p>
          <p className="text-[17px] text-slate-600 leading-relaxed">
            Almost everything you need to assess your roof, you can see from
            the ground or from inside the attic with a flashlight. The next
            four sections walk you through exactly what to look for, in plain
            English. If after all of that you still can&apos;t tell what&apos;s
            going on &mdash; that&apos;s what we&apos;re for.{' '}
            <Link
              href="/request-inspection"
              className="text-brand-red font-semibold border-b border-brand-red/30 hover:border-brand-red"
            >
              We&apos;ll come look for free
            </Link>{' '}
            and tell you the truth, even if the truth is &ldquo;it&apos;s
            fine, leave it alone.&rdquo;
          </p>
        </ChapterSection>

        {/* 02 — From the ground */}
        <ChapterSection id="from-ground" number="02">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            What you can see from the ground.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Walk all four sides of your house. Look up. Look down. Here&apos;s
            what to look for &mdash; and what it usually means.
          </p>

          <div className="space-y-6">
            {[
              {
                n: 1,
                t: 'Shingles in the yard',
                d: 'If you find pieces of shingle in your yard, in your neighbor\'s yard, or under bushes, your roof lost them. Wind got under them. The rest are now suspect.',
              },
              {
                n: 2,
                t: 'Bare patches up there',
                d: 'Stand across the street and look up at the roof. Anywhere it looks a different color — usually darker — is a spot where the shingle or its protective layer is gone.',
              },
              {
                n: 3,
                t: 'Black grit in the gutters',
                d: 'Look at the bottom of a downspout, or open a gutter. Some sandy black grit on a new roof is normal. A lot of it on an old roof means the shingles are at the end of their life.',
              },
              {
                n: 4,
                t: 'Bent or missing metal',
                d: 'Around the chimney, in the valleys where two roof slopes meet, and around vents and pipes. Anywhere metal is bent up, missing, or rusty — that\'s where water gets in first.',
              },
              {
                n: 5,
                t: 'Dips or sagging',
                d: 'Look at the ridge of the roof — the top line. It should be straight. A dip, a wave, or a sag means the wood underneath is failing. That\'s a structural call, not a shingle one.',
              },
              {
                n: 6,
                t: 'Stains inside the house',
                d: 'Brown or yellow rings on ceilings or upper walls. Bubbled paint. Musty smell in an upstairs closet. The leak you\'re looking for is usually nowhere near where you see the stain.',
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm">
                  {item.n}
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-lg font-bold text-brand-black tracking-tight mb-1">
                    {item.t}
                  </h3>
                  <p className="text-[16px] text-slate-600 leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/guide/downloads/ground-walkaround-checklist"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the ground-walkaround checklist &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* Pull quote */}
        <aside className="bg-white border-y border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <blockquote className="relative pl-8 sm:pl-12">
              <span
                aria-hidden
                className="absolute left-0 top-0 text-5xl sm:text-6xl text-brand-red font-extrabold leading-none"
              >
                &ldquo;
              </span>
              <q className="text-xl sm:text-2xl text-brand-black font-semibold leading-snug tracking-tight not-italic">
                If anyone tells you they spotted damage on your roof from the
                street, they&apos;re either lying or they have superhuman eyes.
                Real damage takes a real look.
              </q>
              <cite className="block mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 not-italic">
                NC Roofing Service &middot; on storm chasers &middot;{' '}
                <Link href="/guide/pick-a-roofer" className="text-brand-red hover:underline">
                  chapter 04
                </Link>
              </cite>
            </blockquote>
          </div>
        </aside>

        {/* 03 — Photos */}
        <ChapterSection id="photos" number="03" variant="tinted">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Photos to take before you call anyone.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Most homeowners don&apos;t know to do this. Insurance adjusters and
            honest roofers both benefit when you have your own pictures from
            before they show up. And storm chasers can&apos;t invent damage
            that your photos prove wasn&apos;t there.
          </p>

          <ol className="space-y-3 mb-8 list-decimal list-outside ml-5 marker:text-brand-red marker:font-bold">
            <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
              One photo of each side of the house, from the yard, with the
              full roofline in frame.
            </li>
            <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
              Close-ups of anything that looks wrong &mdash; debris in the
              yard, missing shingles, dents in the gutters or in metal vents.
            </li>
            <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
              If you can safely enter the attic, point a flashlight up at the
              rafters and the underside of the roof. Photograph daylight,
              dark stains, or wet wood.
            </li>
            <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
              Any storm debris in the yard &mdash; branches, hail on the
              lawn, broken siding pieces.
            </li>
            <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
              Make sure your phone is set to date-stamp photos. The date and
              time on each photo is what makes them useful later.
            </li>
          </ol>

          <Link
            href="/guide/downloads/photo-checklist"
            className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-brand-red hover:text-brand-red text-brand-black font-semibold px-5 py-3 rounded-[2px] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download the one-page photo checklist
          </Link>
        </ChapterSection>

        {/* 04 — Repair or replace? */}
        <ChapterSection id="repair-or-replace" number="04" wide>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Repair, or replace?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            There&apos;s no single rule, but most honest roofers use a version
            of this. Find the row that sounds like you.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr_1fr] bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              <div className="px-5 py-3">If your roof is...</div>
              <div className="px-5 py-3 hidden sm:block">and you&apos;re seeing...</div>
              <div className="px-5 py-3 hidden sm:block">probably...</div>
            </div>
            {[
              {
                a: 'Under 12 years old',
                b: 'Isolated damage from one storm',
                c: 'Repair',
                csub: 'Often covered by insurance.',
              },
              {
                a: '12 to 18 years old',
                b: 'Storm damage on top of normal wear',
                c: 'Either',
                csub: 'A good roofer will tell you honestly.',
              },
              {
                a: 'Over 18 years old',
                b: 'Any significant damage at all',
                c: 'Replace',
                csub: 'Even small repairs are usually throwing good money after bad.',
              },
              {
                a: 'Any age',
                b: 'An active leak, water coming inside',
                c: 'Fix now',
                csub: 'Then decide about full replacement.',
              },
            ].map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr_1fr] border-b border-slate-100 last:border-b-0"
              >
                <div className="px-5 py-4">
                  <div className="sm:hidden text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-1">
                    If your roof is
                  </div>
                  <strong className="text-brand-black text-[15px]">{row.a}</strong>
                </div>
                <div className="px-5 py-4 sm:border-l sm:border-slate-100 text-slate-700 text-[15px]">
                  <div className="sm:hidden text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-1">
                    and you&apos;re seeing
                  </div>
                  {row.b}
                </div>
                <div className="px-5 py-4 sm:border-l sm:border-slate-100">
                  <div className="sm:hidden text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-1">
                    probably
                  </div>
                  <em className="not-italic text-brand-red font-bold">{row.c}</em>
                  <div className="text-xs text-slate-500 mt-1 leading-snug">
                    {row.csub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[16px] text-slate-600 leading-relaxed">
            This is a guideline, not a rule. Every roof tells its own story
            when you get up there. Anyone who recommends replacement before
            going up there is selling you something, not assessing your roof.
          </p>

          <div className="mt-6">
            <Link
              href="/guide/downloads/repair-or-replace-decision-tree"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the one-page decision tree &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* 05 — What to do this week */}
        <ChapterSection id="what-now" number="05" variant="tinted" wide>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            What to do this week.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Pick the column that matches your situation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                tag: 'Right now',
                tone: 'bg-brand-red text-white',
                h: 'If water is coming in',
                items: [
                  "Move what's underneath. Buckets, towels, anything that can't get wet.",
                  'If your attic is safe to enter, channel the drip into a container so it doesn\'t soak into joists.',
                  "Don't get on the roof to tarp it. Call us. We'll come tarp it for free.",
                  'Take photos of the inside damage now. They matter later for insurance.',
                ],
              },
              {
                tag: 'This week',
                tone: 'bg-amber-500 text-white',
                h: 'If a storm just came through',
                items: [
                  'Take your photos before anyone else gets there. (Section 03.)',
                  "Call your insurance to report the storm. Don't file the claim yet.",
                  'Get an honest roofer to look first, before the adjuster. Two if you can.',
                  "Don't sign anything anyone hands you in your driveway. Read chapter 04.",
                ],
              },
              {
                tag: 'No rush',
                tone: 'bg-emerald-600 text-white',
                h: 'If you just want to know',
                items: [
                  'Use the Storm Check tool. It shows what storms have actually hit your address.',
                  'Have a roofer come out for a free look. Two is smarter than one.',
                  "Don't let anyone start work before you've gotten a written estimate and an honest roof age.",
                ],
              },
            ].map((track) => (
              <div
                key={track.h}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <span
                  className={`inline-block text-[11px] font-bold uppercase tracking-[0.12em] px-2 py-1 rounded ${track.tone}`}
                >
                  {track.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-black tracking-tight mb-4">
                  {track.h}
                </h3>
                <ol className="space-y-2 list-decimal list-outside ml-5 marker:text-slate-400">
                  {track.items.map((it, i) => (
                    <li key={i} className="pl-1 text-[14.5px] text-slate-600 leading-relaxed">
                      {it}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </ChapterSection>

        {/* End-of-chapter soft close */}
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
            <p className="text-[17px] text-slate-600 leading-relaxed">
              When you&apos;re ready for a real look from a real person, that&apos;s
              what we&apos;re for.
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
          </div>
        </section>

        <ToolsSection
          heading="Tools to help you check."
          intro="Three things we built because customers kept asking. All free. None of them require you to talk to a salesperson before you get something useful."
          tools={TOOLS}
        />
      </ChapterShell>

      {/* JSON-LD: Article + BreadcrumbList + HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: chapter.question,
              description:
                "Plain-English checks you can do from the ground, photos to take before you call anyone, and how to know whether it's a repair or a replacement.",
              url: absoluteUrl(chapter.href),
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
              isPartOf: {
                '@type': 'CreativeWork',
                name: 'The Honest Roof Guide',
                url: absoluteUrl('/guide'),
              },
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
            {
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How to check your roof from the ground',
              description: 'A six-point ground-level inspection any homeowner can do safely.',
              totalTime: 'PT10M',
              step: [
                { '@type': 'HowToStep', position: 1, name: 'Look for shingles in the yard', text: 'Walk all four sides of the house and look for pieces of shingle in the yard, in neighboring yards, or under bushes.' },
                { '@type': 'HowToStep', position: 2, name: 'Look for bare patches on the roof', text: 'Stand across the street and look up at the roof. Spot anywhere that looks a different color than the surrounding shingles.' },
                { '@type': 'HowToStep', position: 3, name: 'Check the gutters for granules', text: 'Look at the bottom of downspouts for black sandy grit.' },
                { '@type': 'HowToStep', position: 4, name: 'Check the metal flashing', text: 'Look around the chimney, in roof valleys, and around vents and pipes for bent, missing, or rusty metal.' },
                { '@type': 'HowToStep', position: 5, name: 'Check the ridge for sagging', text: 'Sight along the top line of the roof. It should be straight.' },
                { '@type': 'HowToStep', position: 6, name: 'Check inside for stains', text: 'Look for brown or yellow rings on ceilings, bubbled paint, or musty smells in upstairs closets.' },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
