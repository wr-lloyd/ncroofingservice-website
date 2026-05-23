import type { Metadata } from 'next'
import Link from 'next/link'
import { getChapter } from '@/lib/guide'
import { absoluteUrl, OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'
import ChapterShell from '../_components/ChapterShell'
import ChapterSection from '../_components/ChapterSection'
import ToolsSection from '../_components/ToolsSection'

const chapter = getChapter('install-day')

const LEDE =
  "What actually happens the day a crew puts a roof on your house. Hour by hour. What is normal, what is not, and the handoff that prevents 90% of follow-up calls."

export const metadata: Metadata = {
  title: `Ch. ${chapter.number} · ${chapter.shortLabel} | The Honest Roof Guide`,
  description:
    "Hour by hour through install day. Week-before prep, what to expect, end-of-day handoff. Read before the crew arrives.",
  alternates: { canonical: absoluteUrl(chapter.href) },
  openGraph: {
    title: `${chapter.question} | The Honest Roof Guide`,
    description: 'Hour by hour through install day. Prep, work, handoff.',
    url: absoluteUrl(chapter.href),
    type: 'article',
  },
}

const TOC = [
  { id: 'week-before', label: 'The week before' },
  { id: 'hour-by-hour', label: 'Hour by hour' },
  { id: 'normal-vs-not', label: 'Normal vs. not' },
  { id: 'handoff', label: 'The end-of-day handoff' },
  { id: 'tools', label: 'Tools to help' },
]

const QUICK_TOOLS = [
  {
    tag: 'Checklist',
    tone: 'pdf' as const,
    name: 'Week-before prep',
    desc: 'What to do in the days before install.',
    href: '/guide/downloads/week-before-prep-checklist',
  },
  {
    tag: 'Checklist',
    tone: 'pdf' as const,
    name: 'End-of-day handoff',
    desc: 'Walk-through with the foreman.',
    href: '/guide/downloads/end-of-day-handoff-checklist',
  },
  {
    tag: 'Free visit',
    tone: 'book' as const,
    name: 'Schedule install',
    desc: 'Talk dates with our office.',
    href: '/request-inspection',
  },
]

const TOOLS = [
  {
    tag: 'Checklist',
    title: 'Week-before prep',
    body: 'A 30-minute weekend list to make the install day itself uneventful. Cars, pets, plants, alarm system.',
    href: '/guide/downloads/week-before-prep-checklist',
    cta: 'Download',
  },
  {
    tag: 'Checklist',
    title: 'End-of-day handoff',
    body: 'Print this and walk the property with the foreman before they leave. Catches small things while fixing them is cheap.',
    href: '/guide/downloads/end-of-day-handoff-checklist',
    cta: 'Download',
  },
  {
    tag: 'Talk to us',
    title: 'Schedule with our office',
    body: 'NC weather changes fast. Our office holds dates loose until 48 hours out, then locks them. Call to talk through your window.',
    href: '/request-inspection',
    cta: 'Schedule',
  },
]

const HOUR_BY_HOUR = [
  {
    time: '7:00 AM',
    h: 'Crew arrives. Material drop the day before.',
    body: 'The foreman knocks, walks the perimeter with you, points out the dumpster placement, and confirms the access plan. Five-minute conversation. Then they get to work.',
  },
  {
    time: '7:15 AM',
    h: 'Tarps and protection.',
    body: 'Tarps go down on landscaping, deck, AC unit, and the pool area if you have one. Plywood walks the high-traffic paths.',
  },
  {
    time: '7:30 AM',
    h: 'Tear-off begins.',
    body: 'Two or three crew members on the roof, two on the ground. Old shingles come off in sections and slide down a tarp chute into the dumpster. Loud, fast, dusty. This is the noisiest hour.',
  },
  {
    time: '10:00 AM',
    h: 'Deck inspection.',
    body: 'Once the old roof is off, the foreman walks the deck. Marks any bad sheets of plywood with chalk. If they find more than the contract allows for, you get a call. We never replace decking without telling you the cost first.',
  },
  {
    time: '11:00 AM',
    h: 'Underlayment goes on.',
    body: 'Drip edge, ice and water shield in the valleys, synthetic underlayment across the whole deck. This is the watertight layer. By lunch your roof is already protected if a surprise storm rolls in.',
  },
  {
    time: '12:30 PM',
    h: 'Lunch.',
    body: 'Crew takes 30 minutes. Mostly on-site, mostly quiet. Good time to check on things from inside the house.',
  },
  {
    time: '1:00 PM',
    h: 'Shingles or panels begin.',
    body: 'Starter strip, then the field shingles in courses from eave to ridge. Two installers up, one on the ground feeding material. Steady rhythm, less noise than the tear-off.',
  },
  {
    time: '3:00 PM',
    h: 'Flashing and penetrations.',
    body: 'Chimney, walls, vents, pipes, skylights. This is where the real craftsmanship shows. The foreman should be hands-on here, not just watching.',
  },
  {
    time: '5:00 PM',
    h: 'Ridge vent and ridge cap.',
    body: 'The peak. New ridge vent, ridge cap shingles over the top. The roof is finished.',
  },
  {
    time: '5:30 PM',
    h: 'Cleanup and magnet sweep.',
    body: 'Crew walks the lawn with rolling magnet sweepers. Tarps come up. Driveway swept. Dumpster gets a final load.',
  },
  {
    time: '6:00 PM',
    h: 'The handoff.',
    body: 'The foreman walks the property with you. Goes through the end-of-day handoff checklist. Final paperwork. Photos for the file. Then they leave.',
  },
]

export default function InstallDayPage() {
  return (
    <>
      <ChapterShell chapter={chapter} lede={LEDE} tocItems={TOC} quickTools={QUICK_TOOLS}>
        {/* 01 — Week before */}
        <ChapterSection id="week-before" number="01">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            What to do the week before.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            A roof install creates noise, vibration, and a lot of falling
            material. Half an hour of prep the weekend before makes the day
            itself uneventful. Here is the short version.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                t: '7 days out',
                items: [
                  'Confirm the install date with your roofer',
                  'Notify your immediate neighbors',
                  'Locate your attic access',
                  "Tell your alarm monitoring company there'll be impact and vibration",
                ],
              },
              {
                t: '3 days out',
                items: [
                  'Walk the yard. Pick up planters and garden art',
                  'Let the roofer know if gutters need clearing',
                  'Move any vehicle from the driveway',
                ],
              },
              {
                t: 'Night before',
                items: [
                  'Take down anything fragile on walls under the roof',
                  'Cover anything important in the attic',
                  'Move grills and patio furniture 10ft from the house',
                  'Plan to be out, or be in. Either is fine',
                ],
              },
            ].map((block) => (
              <div
                key={block.t}
                className="bg-white border border-slate-200 rounded-xl p-5"
              >
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red mb-3">
                  {block.t}
                </div>
                <ul className="space-y-2 text-[14.5px] text-slate-700 leading-relaxed">
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

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-brand-black tracking-tight mb-2">
              About pets and kids
            </h3>
            <p className="text-[15.5px] text-slate-700 leading-relaxed">
              Anxious dogs do better kenneled. The noise is steady and loud
              for six to nine hours. Sensitive kids do better off-site for
              the morning. Goldfish are fine. They cannot hear it.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/guide/downloads/week-before-prep-checklist"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the full prep checklist &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* 02 — Hour by hour */}
        <ChapterSection id="hour-by-hour" number="02" variant="tinted" wide>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Hour by hour, install day.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            A typical NC residential roof, 25 to 30 squares. One day, start
            to finish. Bigger roofs take two days. Here is the rhythm of the
            normal one.
          </p>

          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[2.75rem] top-0 bottom-0 w-px bg-slate-200"
            />
            <div className="space-y-5">
              {HOUR_BY_HOUR.map((slot, i) => (
                <div key={i} className="relative flex gap-5">
                  <div className="flex-shrink-0 w-[5.5rem] pt-1 text-right">
                    <div className="text-sm font-bold text-brand-red tracking-tight">
                      {slot.time}
                    </div>
                  </div>
                  <div className="relative flex-shrink-0 mt-1.5">
                    <div className="w-3 h-3 rounded-full bg-brand-red ring-4 ring-white" />
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl p-5">
                    <h3 className="font-bold text-brand-black tracking-tight">
                      {slot.h}
                    </h3>
                    <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed">
                      {slot.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ChapterSection>

        {/* 03 — Normal vs. not */}
        <ChapterSection id="normal-vs-not" number="03">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Normal vs. not.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            First-time customers often worry about things that are normal,
            and miss things that are not. Quick reference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 mb-4">
                Normal. Don&apos;t worry.
              </div>
              <ul className="space-y-2.5 text-[14.5px] text-slate-700 leading-relaxed">
                {[
                  'Heavy noise and vibration for 1 to 2 hours during tear-off',
                  'A little debris in the gutters and yard mid-day. They will clean it up at the end.',
                  'A few crew members eating lunch in their trucks',
                  'Dust in the attic. Old roofs are dusty.',
                  'The roof being &ldquo;exposed&rdquo; (underlayment only) for an hour or two',
                  'Two foreman calls. Once at deck inspection, once at handoff.',
                ].map((it, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-500 flex-shrink-0">&#10003;</span>
                    <span dangerouslySetInnerHTML={{ __html: it }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red mb-4">
                Not normal. Speak up.
              </div>
              <ul className="space-y-2.5 text-[14.5px] text-slate-700 leading-relaxed">
                {[
                  'Old shingles dumped on the lawn instead of in a tarp chute',
                  'Crew leaving the roof exposed overnight without underlayment in place',
                  'Foreman not on site during deck inspection or flashing work',
                  'Decking replaced without telling you the per-sheet cost first',
                  'Crew finishing without a magnet sweep',
                  'Foreman leaving without the end-of-day walk-through',
                ].map((it, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand-red flex-shrink-0">&times;</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-[16px] text-slate-700 leading-relaxed">
            If something on the right column happens, call the office number
            on your contract. Not the foreman. The owner or office manager.
            That is who fixes things on install day.
          </p>
        </ChapterSection>

        {/* 04 — Handoff */}
        <ChapterSection id="handoff" number="04" variant="tinted">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            The end-of-day handoff.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            This is the 15 minutes that prevent 90% of follow-up issues.
            Walk the property with the foreman before they leave. Here is
            what to check.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 mb-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-red mb-4">
              Walk the roof from the ground
            </h3>
            <ul className="space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc list-outside ml-5 marker:text-brand-red mb-6">
              <li>Look up. Ridge straight, lines clean, no visible gaps</li>
              <li>Ask the foreman to show you phone photos of the chimney flashing, valleys, and any skylights</li>
              <li>Confirm ventilation was done as contracted (ridge vent, soffit, etc.)</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-red mb-4">
              Walk the property
            </h3>
            <ul className="space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc list-outside ml-5 marker:text-brand-red mb-6">
              <li>Lawn checked for stray nails. Ask for a second magnet pass.</li>
              <li>Gutters cleared of debris</li>
              <li>Driveway swept, lawn clear of material</li>
              <li>Dumpster scheduled to leave today or tomorrow</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-red mb-4">
              Confirm paperwork
            </h3>
            <ul className="space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc list-outside ml-5 marker:text-brand-red">
              <li>Signed completion document in your hand or email</li>
              <li>Warranty registration confirmed (when you will get the manufacturer email)</li>
              <li>Final invoice matches contract; any extras itemized</li>
              <li>Foreman&apos;s direct number written down</li>
            </ul>
          </div>

          <div className="mt-8">
            <Link
              href="/guide/downloads/end-of-day-handoff-checklist"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the handoff checklist &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* End-of-chapter soft close */}
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
            <p className="text-[17px] text-slate-600 leading-relaxed">
              Install day should be loud, fast, and over before dinner. If
              ours is on your calendar, this is what to expect. If we are
              not your roofer, hand the team this same checklist on day one.
              No good roofer minds it.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/request-inspection"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3.5 rounded-[2px] font-semibold transition-colors"
              >
                Talk to our office about dates
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
          heading="Tools for install week."
          intro="Two printable checklists and a way to schedule. Use the prep one before, the handoff one during, the office one to talk dates."
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
              description: 'Hour by hour through install day. Prep, work, handoff.',
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
