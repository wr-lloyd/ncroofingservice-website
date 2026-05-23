import type { Metadata } from 'next'
import Link from 'next/link'
import { getChapter } from '@/lib/guide'
import { absoluteUrl, OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'
import ChapterShell from '../_components/ChapterShell'
import ChapterSection from '../_components/ChapterSection'
import ToolsSection from '../_components/ToolsSection'

const chapter = getChapter('plan-your-roof')

const LEDE =
  "For the person who knows they need a new roof and now has to figure out what kind. Three materials worth your time, nine components that should be on every estimate, and an honest NC price."

export const metadata: Metadata = {
  title: `Ch. ${chapter.number} · ${chapter.shortLabel} | The Honest Roof Guide`,
  description:
    "Three materials worth your time. The nine pieces on every real roof. Honest NC pricing with a calculator that does the math.",
  alternates: { canonical: absoluteUrl(chapter.href) },
  openGraph: {
    title: `${chapter.question} | The Honest Roof Guide`,
    description:
      "Three materials. Nine components. A real cost calculator.",
    url: absoluteUrl(chapter.href),
    type: 'article',
  },
}

const TOC = [
  { id: 'three-materials', label: 'The three materials' },
  { id: 'nine-components', label: 'The nine components' },
  { id: 'cost', label: 'What it actually costs' },
  { id: 'reading-estimates', label: 'Reading estimates' },
  { id: 'tools', label: 'Tools to help' },
]

const QUICK_TOOLS = [
  {
    tag: 'Calculator · 90 sec',
    tone: 'tool' as const,
    name: 'Cost Estimator',
    desc: 'Six honest questions. A real number.',
    href: '/guide/cost-estimator',
  },
  {
    tag: 'Reference',
    tone: 'pdf' as const,
    name: 'The nine components',
    desc: 'What should be on every written estimate.',
    href: '/guide/downloads/nine-components-of-a-real-roof',
  },
  {
    tag: 'Reference',
    tone: 'pdf' as const,
    name: 'Materials side-by-side',
    desc: 'Architectural vs. premium vs. metal.',
    href: '/guide/downloads/materials-comparison',
  },
]

const TOOLS = [
  {
    tag: 'Calculator',
    title: 'Cost Estimator',
    body: "The same math we use for our written quotes, run from six honest questions. Range only, no fake precision. No email required.",
    href: '/guide/cost-estimator',
    cta: 'Open the estimator',
  },
  {
    tag: 'Reference',
    title: 'Nine components',
    body: 'A printable one-pager of every layer that should be on your roof. Pull it out when you read estimates. The cheap roofer is skipping two or three.',
    href: '/guide/downloads/nine-components-of-a-real-roof',
    cta: 'Download',
  },
  {
    tag: 'Reference',
    title: 'Materials comparison',
    body: 'Architectural, premium, metal. Lifespans, prices, warranties, and which one fits which house.',
    href: '/guide/downloads/materials-comparison',
    cta: 'Download',
  },
]

const MATERIALS = [
  {
    title: 'Architectural asphalt shingle',
    sub: 'The standard NC roof. About 80% of what we install.',
    life: '22 to 28 years',
    price: '$350 to $450 per square installed',
    best: 'Most homes. Best lifetime cost. Insurance replaces them cleanly.',
    watch:
      'Avoid cheap "three-tab" shingles. Not the same thing. Refuse anything below GAF Timberline HDZ or equivalent.',
    color: 'border-slate-300',
  },
  {
    title: 'Premium / designer shingle',
    sub: 'Thicker, heavier, longer warranty. The "lifetime" tier.',
    life: '28 to 35 years',
    price: '$480 to $620 per square installed',
    best: 'Homes you plan to stay in 15+ years, or where the HOA wants the look.',
    watch:
      'Marketing-only "premium" labels exist. Ask for weight per square. Good ones are 240 lbs and up.',
    color: 'border-brand-red/40',
  },
  {
    title: 'Standing-seam metal',
    sub: 'The longest-lived roof you can buy. Different category of project.',
    life: '40 to 60 years',
    price: '$1,100 to $1,500 per square installed',
    best: 'Forever homes. Steep modern designs. The "one and done" roof.',
    watch:
      'Exposed-fastener "metal" (the kind with visible screws) is a different product. 20-year life and a leak at every screw. Standing-seam is the one you want.',
    color: 'border-amber-400/50',
  },
]

const COMPONENTS = [
  {
    n: 1,
    title: 'The deck',
    body: 'The plywood or OSB the whole roof sits on. Bad spots are replaced, not covered over.',
  },
  {
    n: 2,
    title: 'Drip edge',
    body: 'Metal along the eaves and gables that pushes water off the deck. Required by NC code. Skipped surprisingly often.',
  },
  {
    n: 3,
    title: 'Ice and water shield',
    body: 'Self-sealing membrane in valleys, around penetrations, and along eaves. Stops wind-driven rain.',
  },
  {
    n: 4,
    title: 'Synthetic underlayment',
    body: 'The waterproof layer over the rest of the deck. The old tar paper is dead. Synthetic only.',
  },
  {
    n: 5,
    title: 'Starter strip',
    body: 'A factory-made first row of shingles along every eave and rake. Wind goes under shingles without it.',
  },
  {
    n: 6,
    title: 'Field shingles',
    body: 'The big visible layer. Architectural, premium, or metal panels. Most of what you pay for and the smallest part of what makes a roof last.',
  },
  {
    n: 7,
    title: 'Flashing',
    body: "Metal around the chimney, walls, skylights, and pipes. Where 80% of leaks come from when it's done wrong.",
  },
  {
    n: 8,
    title: 'Ridge cap',
    body: 'The shaped shingles that cover the peak. Not optional. Not interchangeable with field shingles.',
  },
  {
    n: 9,
    title: 'Ventilation',
    body: 'Ridge vent at the top, soffit vents at the bottom. Without it, shingles cook from the underside and the warranty is void.',
  },
]

export default function PlanYourRoofPage() {
  return (
    <>
      <ChapterShell chapter={chapter} lede={LEDE} tocItems={TOC} quickTools={QUICK_TOOLS}>
        {/* 01 — Three materials */}
        <ChapterSection id="three-materials" number="01">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Three materials worth your time.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Walk into any roofer&apos;s showroom and you will see twenty
            shingles in five colors. The real choice is between three product
            categories. Anything else is a salesperson trying to be different.
          </p>

          <div className="space-y-5">
            {MATERIALS.map((m) => (
              <div
                key={m.title}
                className={`bg-white border-2 ${m.color} rounded-xl p-6 sm:p-7`}
              >
                <h3 className="text-xl font-bold text-brand-black tracking-tight mb-1">
                  {m.title}
                </h3>
                <p className="text-sm text-slate-500 mb-5">{m.sub}</p>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[15px]">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      Lifespan in NC
                    </dt>
                    <dd className="text-brand-black font-semibold mt-0.5">{m.life}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      Installed price
                    </dt>
                    <dd className="text-brand-black font-semibold mt-0.5">{m.price}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      Best for
                    </dt>
                    <dd className="text-slate-700 mt-0.5">{m.best}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      Watch out for
                    </dt>
                    <dd className="text-slate-700 mt-0.5">{m.watch}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/guide/downloads/materials-comparison"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the side-by-side comparison &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* 02 — Nine components */}
        <ChapterSection id="nine-components" number="02" variant="tinted" wide>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            A roof is nine things. Not just shingles.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            When two estimates differ by $4,000, this is where the difference
            usually hides. The cheap roofer is leaving two or three of these
            off the job. The result still looks like a roof for a year or two.
            Then it starts to leak in the places they cut.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMPONENTS.map((c) => (
              <div
                key={c.n}
                className="bg-white border border-slate-200 rounded-xl p-5 flex gap-4"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm">
                  {c.n}
                </div>
                <div>
                  <h3 className="font-bold text-brand-black tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-[14.5px] text-slate-600 leading-relaxed mt-1">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white border-l-4 border-brand-red rounded-r-xl p-6">
            <p className="text-[16px] text-slate-700 leading-relaxed">
              <strong className="text-brand-black">Use this against your
              estimates.</strong>{' '}
              Every one of the nine should appear by name on your written
              estimate. Not as &ldquo;we always include that.&rdquo; In
              writing. If a line is missing, ask the roofer to add it. If they
              push back, you have your answer.
            </p>
            <div className="mt-4">
              <Link
                href="/guide/downloads/nine-components-of-a-real-roof"
                className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
              >
                Download the nine-components reference &rarr;
              </Link>
            </div>
          </div>
        </ChapterSection>

        {/* 03 — Cost */}
        <ChapterSection id="cost" number="03">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            What a roof actually costs.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Real numbers from real jobs we did in 2024 and 2025. Your roof
            will land somewhere in here, with the calculator getting you most
            of the way to the right square.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white mb-8">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              <div className="px-5 py-3">A home like this</div>
              <div className="px-5 py-3 hidden sm:block">Architectural</div>
              <div className="px-5 py-3 hidden sm:block">Metal</div>
            </div>
            {[
              {
                a: '1,400 sq ft ranch, simple pitch, Triangle',
                b: '$8,500 to $11,500',
                c: '$26,000 to $32,000',
              },
              {
                a: '2,200 sq ft two-story, standard pitch, Charlotte',
                b: '$13,500 to $17,500',
                c: '$40,000 to $48,000',
              },
              {
                a: '3,000 sq ft two-story with dormers, Apex',
                b: '$19,000 to $24,500',
                c: '$56,000 to $66,000',
              },
              {
                a: '4,000 sq ft custom home, steep pitch, mountain',
                b: '$28,000 to $35,000',
                c: '$82,000 to $96,000',
              },
            ].map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr_1fr] border-b border-slate-100 last:border-b-0"
              >
                <div className="px-5 py-4 text-brand-black font-semibold text-[15px]">
                  {row.a}
                </div>
                <div className="px-5 py-4 sm:border-l sm:border-slate-100 text-slate-700 text-[15px]">
                  <div className="sm:hidden text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 mb-1">
                    Architectural
                  </div>
                  {row.b}
                </div>
                <div className="px-5 py-4 sm:border-l sm:border-slate-100 text-slate-700 text-[15px]">
                  <div className="sm:hidden text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 mb-1">
                    Metal
                  </div>
                  {row.c}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-black text-white rounded-2xl p-8 lg:p-10">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-red-400 mb-2">
              Real number
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Use the cost estimator on your house.
            </h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-6">
              Six questions, ninety seconds. The math is the same math we use
              for our written quotes. No email, no follow-up call.
            </p>
            <Link
              href="/guide/cost-estimator"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3.5 rounded-[2px] font-semibold transition-colors"
            >
              Open the estimator &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* 04 — Reading estimates */}
        <ChapterSection id="reading-estimates" number="04" variant="tinted">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Reading a written estimate.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            You should get two or three written estimates. They will look
            different even when they are for the same roof. Here is how to
            compare them honestly.
          </p>

          <ol className="space-y-4 list-decimal list-outside ml-5 marker:text-brand-red marker:font-bold">
            <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
              <strong className="text-brand-black">The material has a brand and a line.</strong>{' '}
              &ldquo;Architectural shingle&rdquo; is not enough. &ldquo;GAF
              Timberline HDZ&rdquo; or &ldquo;Owens Corning Duration&rdquo; is
              enough. Brand and line, every time.
            </li>
            <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
              <strong className="text-brand-black">The nine components are all listed.</strong>{' '}
              Cross-check against the nine-components reference. Missing
              flashing, missing ridge vent, missing ice and water shield.
              These are the lines cheap estimates skip.
            </li>
            <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
              <strong className="text-brand-black">There is a per-sheet decking price.</strong>{' '}
              No estimate can predict how much bad wood is under your old
              roof. A good estimate names a per-sheet price for replacement
              (usually $80 to $120/sheet). A bad estimate is silent and
              surprises you on install day.
            </li>
            <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
              <strong className="text-brand-black">The warranty is named.</strong>{' '}
              &ldquo;25-year warranty&rdquo; means almost nothing. &ldquo;GAF
              Golden Pledge, filed in your name within 30 days of
              completion&rdquo; means something specific. Ask for the warranty
              document by name.
            </li>
            <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
              <strong className="text-brand-black">Payment terms are reasonable.</strong>{' '}
              In NC, a typical schedule is a small deposit at signing, a
              material drop payment when the shingles arrive, and the balance
              at completion. Anyone asking for &ldquo;half upfront&rdquo;
              before any work starts is a flag.
            </li>
          </ol>

          <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-[15.5px] text-slate-700 leading-relaxed">
              <strong className="text-brand-black">If two estimates are
              identical on the page but $4,000 apart in price,</strong> the
              cheaper one is either eating their margin (unlikely) or planning
              to charge you back later with a surprise &ldquo;additional
              work&rdquo; invoice. Ask the cheap one to put a hard ceiling on
              additional work in writing. If they will not, that tells you
              what is coming.
            </p>
          </div>
        </ChapterSection>

        {/* End-of-chapter soft close */}
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
            <p className="text-[17px] text-slate-600 leading-relaxed">
              When you are ready to talk to a real person, we will quote your
              roof against the nine-component spec on this page. No upsell,
              no &ldquo;today only&rdquo; pricing.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/request-inspection"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3.5 rounded-[2px] font-semibold transition-colors"
              >
                Schedule a written quote
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
          heading="Tools to help you plan."
          intro="Three things to use as you sort estimates and budgets. All free. All on this site, no app to download."
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
              description:
                'Three materials. Nine components. A real cost calculator.',
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
