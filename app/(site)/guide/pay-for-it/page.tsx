import type { Metadata } from 'next'
import Link from 'next/link'
import { getChapter } from '@/lib/guide'
import { absoluteUrl, OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'
import ChapterShell from '../_components/ChapterShell'
import ChapterSection from '../_components/ChapterSection'
import ToolsSection from '../_components/ToolsSection'

const chapter = getChapter('pay-for-it')

const LEDE =
  "Three real ways to pay for a roof in North Carolina. Cash. Insurance. Financing. We will walk you through each one without trying to sell you a loan."

export const metadata: Metadata = {
  title: `Ch. ${chapter.number} · ${chapter.shortLabel} | The Honest Roof Guide`,
  description:
    "How to pay for a roof in NC. Cash, insurance, financing. Honest walkthrough, no upsell. Includes a payment calculator and an insurance claim guide.",
  alternates: { canonical: absoluteUrl(chapter.href) },
  openGraph: {
    title: `${chapter.question} | The Honest Roof Guide`,
    description: 'Cash, insurance, financing. The three real paths, walked through honestly.',
    url: absoluteUrl(chapter.href),
    type: 'article',
  },
}

const TOC = [
  { id: 'three-paths', label: 'The three paths' },
  { id: 'insurance', label: 'Insurance, said straight' },
  { id: 'financing', label: 'Financing without the upsell' },
  { id: 'cash', label: 'Paying cash' },
  { id: 'tools', label: 'Tools to help' },
]

const QUICK_TOOLS = [
  {
    tag: 'Tool · 30 sec',
    tone: 'tool' as const,
    name: 'Payment Calculator',
    desc: 'See real monthly payments. No credit pull.',
    href: '/financing#calculator',
  },
  {
    tag: 'Checklist',
    tone: 'pdf' as const,
    name: 'Insurance claim walkthrough',
    desc: 'Step by step. Read this before you file.',
    href: '/guide/downloads/insurance-claim-walkthrough',
  },
  {
    tag: 'Worksheet',
    tone: 'pdf' as const,
    name: 'Payment options worksheet',
    desc: 'Cash, financing, or both. Fill in the blanks.',
    href: '/guide/downloads/payment-options-worksheet',
  },
]

const TOOLS = [
  {
    tag: 'Calculator',
    title: 'Payment Calculator',
    body: 'Real monthly payments from our two lenders, no credit pull required to see them. Move the slider, see the number. Then decide.',
    href: '/financing#calculator',
    cta: 'Open the calculator',
  },
  {
    tag: 'Checklist',
    title: 'Insurance claim walkthrough',
    body: 'Four-step checklist for filing a NC roof claim. Doing it in the right order is the whole game.',
    href: '/guide/downloads/insurance-claim-walkthrough',
    cta: 'Download',
  },
  {
    tag: 'Full page',
    title: 'Financing details',
    body: 'Lenders, rates, terms, FAQs. Everything you would want to know about financing a roof through us.',
    href: '/financing',
    cta: 'Open the page',
  },
]

export default function PayForItPage() {
  return (
    <>
      <ChapterShell chapter={chapter} lede={LEDE} tocItems={TOC} quickTools={QUICK_TOOLS}>
        {/* 01 — Three paths */}
        <ChapterSection id="three-paths" number="01">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            The three real paths.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Every roof we replace gets paid for in one of three ways. Usually
            some mix of two. The rough breakdown across our 2024 jobs:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                pct: '40%',
                title: 'Cash',
                body: "Saved up, retirement bucket, home equity check. Simplest path. Smallest total cost.",
              },
              {
                pct: '35%',
                title: 'Insurance',
                body: "A storm-driven claim. You pay only your deductible. Everything else is the carrier's.",
              },
              {
                pct: '25%',
                title: 'Financing',
                body: "Some or all of the cost spread over months. Two real lenders, both honest. No high-pressure pitch.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <div className="text-4xl font-extrabold text-brand-red tracking-tight">
                  {p.pct}
                </div>
                <h3 className="mt-2 text-lg font-bold text-brand-black tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[16px] text-slate-700 leading-relaxed">
            There is no wrong answer. The wrong move is letting a roofer push
            you into a financing product they get a kickback on. Read each
            section below. The one that fits you will be obvious.
          </p>
        </ChapterSection>

        {/* 02 — Insurance */}
        <ChapterSection id="insurance" number="02" variant="warning" wide>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Insurance, said straight.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            If a storm hit your house, insurance probably owes you a new roof.
            Filing the claim wrong is more expensive than not filing at all.
            Here is the right order.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-brand-black tracking-tight mb-4">
              The four-step order
            </h3>
            <ol className="space-y-5 list-decimal list-outside ml-5 marker:text-brand-red marker:font-bold">
              <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
                <strong className="text-brand-black">Before you call the carrier,</strong>{' '}
                take your own photos (the photo checklist from chapter one)
                and get a free, honest roof inspection. We do these and
                charge nothing. Confirm there is real damage. If a roofer
                cannot show you damage on the roof itself, do not file. A
                denied claim still counts against you.
              </li>
              <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
                <strong className="text-brand-black">When you call the carrier,</strong>{' '}
                use the word &ldquo;report&rdquo; not &ldquo;claim.&rdquo;
                Say &ldquo;I want to report a storm event so it is on
                file.&rdquo; This gets you a claim number without forcing a
                decision. Write down the claim number and the adjuster name.
              </li>
              <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
                <strong className="text-brand-black">Have your roofer at the adjuster visit.</strong>{' '}
                This is routine. Adjusters expect it. Make sure the adjuster
                gets on the roof. If they only check from the ground, that is
                a problem.
              </li>
              <li className="pl-2 text-[16px] text-slate-700 leading-relaxed">
                <strong className="text-brand-black">Compare the carrier scope to the estimate.</strong>{' '}
                Mismatches are normal. Your roofer files a supplement to
                correct them. Do not let work start until the carrier has
                approved the scope and released the depreciation.
              </li>
            </ol>
          </div>

          <div className="bg-red-50 border-l-4 border-brand-red rounded-r-xl p-6 mb-8">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red mb-2">
              Never do these. Ever.
            </div>
            <ul className="space-y-2 text-[15.5px] text-slate-700 leading-relaxed list-disc list-outside ml-5 marker:text-brand-red">
              <li>Sign anything with the words &ldquo;Assignment of Benefits&rdquo; or &ldquo;AOB.&rdquo; This hands your insurance check to a roofer. You lose control of the project.</li>
              <li>Let a roofer file the claim for you.</li>
              <li>Accept an offer to &ldquo;waive your deductible.&rdquo; That is insurance fraud, and the homeowner is the one with the address on it.</li>
              <li>Sign a contract with a roofer before the carrier has approved the scope.</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-brand-black tracking-tight mb-3">
              About your deductible
            </h3>
            <p className="text-[15.5px] text-slate-700 leading-relaxed">
              In NC, many policies have a separate wind and hail deductible.
              It is often 1% or 2% of the insured value of the home, not a
              flat dollar amount. On a $400,000 home that can be $4,000 to
              $8,000 out of pocket. Find your policy. Look for the line that
              says &ldquo;Wind/Hail Deductible.&rdquo; Plan for that number,
              not for &ldquo;my deductible is $1,000.&rdquo;
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/guide/downloads/insurance-claim-walkthrough"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red/40 hover:border-brand-red pb-0.5"
            >
              Download the full insurance claim walkthrough &rarr;
            </Link>
          </div>
        </ChapterSection>

        {/* 03 — Financing */}
        <ChapterSection id="financing" number="03" variant="tinted" wide>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Financing, without the upsell.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            We have two lenders. We do not push either one. We do not get a
            kickback on which one you pick. Use whichever fits, or neither.
            Most of our financed jobs cost the customer about $200 to $300 a
            month for ten years.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500 mb-1">
                Lender A
              </div>
              <h3 className="text-xl font-bold text-brand-black tracking-tight mb-3">
                Service Finance Company
              </h3>
              <ul className="space-y-2 text-[14.5px] text-slate-700 list-disc list-outside ml-5 marker:text-brand-red">
                <li>Terms from 5 to 15 years</li>
                <li>Rates typically 9 to 13%, fixed</li>
                <li>Soft credit pull for the prequal; hard pull only if you proceed</li>
                <li>Best for: longer terms, predictable payment</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500 mb-1">
                Lender B
              </div>
              <h3 className="text-xl font-bold text-brand-black tracking-tight mb-3">
                Enhancify
              </h3>
              <ul className="space-y-2 text-[14.5px] text-slate-700 list-disc list-outside ml-5 marker:text-brand-red">
                <li>Offers a 12-month no-interest path if paid off in full inside the promo window</li>
                <li>After the promo, rates step up. Read the fine print.</li>
                <li>Multiple lender offers in one application</li>
                <li>Best for: people planning to pay it off from insurance or savings inside a year</li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-black text-white rounded-2xl p-8 lg:p-10">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-red-400 mb-2">
              Real numbers
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              See your real monthly payment.
            </h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-6">
              The payment calculator on the financing page does the math from
              both lenders. No credit pull to see the number. Move the
              slider, see the payment, then decide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/financing#calculator"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3.5 rounded-[2px] font-semibold transition-colors"
              >
                Open the payment calculator
              </Link>
              <Link
                href="/financing"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3.5 rounded-[2px] font-semibold transition-colors"
              >
                Full financing details
              </Link>
            </div>
          </div>

          <p className="mt-8 text-[16px] text-slate-700 leading-relaxed">
            <strong className="text-brand-black">When not to finance:</strong>{' '}
            If you can pay cash or split it with insurance, that is almost
            always cheaper over the life of the loan. Financing makes sense
            when the alternative is delaying a roof that should not be
            delayed.
          </p>
        </ChapterSection>

        {/* 04 — Cash */}
        <ChapterSection id="cash" number="04">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight leading-[1.15] mb-5">
            Paying cash, the smart way.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Forty percent of our customers pay cash. They get the simplest
            path, the lowest total cost, and the most leverage on the deal.
            Here is how to do it right.
          </p>

          <ul className="space-y-3 text-[16px] text-slate-700 leading-relaxed list-disc list-outside ml-5 marker:text-brand-red mb-8">
            <li>
              <strong className="text-brand-black">Keep three months of emergency fund.</strong>{' '}
              Do not drain savings to the bottom for a roof. If a $20,000
              roof would leave you with less than three months of expenses
              in reserve, finance some of it.
            </li>
            <li>
              <strong className="text-brand-black">Ask for a split payment schedule.</strong>{' '}
              Standard with us: small deposit at signing, partial payment at
              material drop, balance at completion. You should never be asked
              to pay more than 30% upfront before any material arrives.
            </li>
            <li>
              <strong className="text-brand-black">Ask about cash discounts.</strong>{' '}
              We don&apos;t routinely advertise one, but we will sometimes
              shave $300 to $500 off a cash job that avoids credit-card
              processing or financing-platform fees. Worth asking.
            </li>
            <li>
              <strong className="text-brand-black">Don&apos;t prepay for promised savings.</strong>{' '}
              No legitimate roofer asks for the full amount before work
              starts. &ldquo;Pre-buy your shingles to lock in the price&rdquo;
              is not a real offer in NC.
            </li>
          </ul>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-[15.5px] text-slate-700 leading-relaxed">
              <strong className="text-brand-black">Home equity is the in-between option.</strong>{' '}
              HELOC rates are usually a few percentage points below
              unsecured roof financing. If you have equity and discipline,
              it is the cheapest non-cash path. Your bank handles it, not
              us. Worth a phone call.
            </p>
          </div>
        </ChapterSection>

        {/* End-of-chapter soft close */}
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
            <p className="text-[17px] text-slate-600 leading-relaxed">
              Money decisions are personal. Talk to your spouse and your
              bank, not to the roofer in your driveway. We will give you a
              written quote and let you choose how to pay for it.
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
          heading="Tools to help you pay for it."
          intro="Three resources for the money side of the project. None of them require talking to us first."
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
              description: 'Cash, insurance, financing. Walked through honestly.',
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
