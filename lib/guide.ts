// The Honest Roof Guide — single source of truth for chapter metadata and
// guide-wide stat constants.
//
// Every guide page (hub, chapters, downloads, sitemap, prev/next nav) reads
// from this file so we never duplicate chapter titles or read times.

export const GUIDE_NAME = 'The Honest Roof Guide'
export const GUIDE_TAGLINE =
  "A roof is a 20-year decision. We wrote this to help you make it well. Useful even if you never call us."
export const GUIDE_URL = '/guide'

// Stats surfaced on the hub and inside chapters. Update here, propagates
// everywhere. Both numbers should be verified with the business at least
// once a year.
export const GUIDE_STATS = {
  // Number of NC roofs replaced in the trailing calendar year.
  jobsLastYear: 312,
  jobsLastYearLabel: 'NC roofs replaced in 2025',
  // Essential components of a real roof — referenced in Ch. 02 and the
  // cost estimator's "what this includes" panel.
  componentsCount: 9,
} as const

export type ChapterSlug =
  | 'check-your-roof'
  | 'plan-your-roof'
  | 'pay-for-it'
  | 'pick-a-roofer'
  | 'install-day'
  | 'after-the-job'

export interface Chapter {
  number: string // zero-padded, e.g. "01"
  slug: ChapterSlug
  eyebrow: string // "Chapter one · Check your roof"
  shortLabel: string // "Check your roof"
  question: string // h1 on the chapter page
  summary: string // hub-card description
  readMinutes: number
  href: string
  status: 'live' | 'coming-soon'
}

// Chapter order is the canonical reading order. The PrevNextChapter
// component walks this array.
export const CHAPTERS: Chapter[] = [
  {
    number: '01',
    slug: 'check-your-roof',
    eyebrow: 'Chapter one · Check your roof',
    shortLabel: 'Check your roof',
    question: "What's actually wrong with my roof?",
    summary:
      "Plain checks you can do from the ground. Photos to take before you call anyone. How to tell a repair from a replacement.",
    readMinutes: 5,
    href: '/guide/check-your-roof',
    status: 'live',
  },
  {
    number: '02',
    slug: 'plan-your-roof',
    eyebrow: 'Chapter two · Plan your roof',
    shortLabel: 'Plan your roof',
    question: 'What kind of roof do I need, and what does it really cost?',
    summary:
      "Three materials worth your time. The nine pieces that go on every real roof. Honest NC prices, with a calculator that does the math.",
    readMinutes: 7,
    href: '/guide/plan-your-roof',
    status: 'live',
  },
  {
    number: '03',
    slug: 'pay-for-it',
    eyebrow: 'Chapter three · Pay for it',
    shortLabel: 'Pay for it',
    question: 'How am I going to pay for this?',
    summary:
      "Insurance, said straight. Financing without the upsell. The three real paths to a paid-for roof, and which one fits you.",
    readMinutes: 6,
    href: '/guide/pay-for-it',
    status: 'live',
  },
  {
    number: '04',
    slug: 'pick-a-roofer',
    eyebrow: 'Chapter four · Pick a roofer',
    shortLabel: 'Pick a good roofer',
    question: "Who should I hire, and how do I know they're honest?",
    summary:
      "Five non-negotiables. Twenty questions to ask. The red flags that mean walk away. A reference check script that catches the rest.",
    readMinutes: 8,
    href: '/guide/pick-a-roofer',
    status: 'live',
  },
  {
    number: '05',
    slug: 'install-day',
    eyebrow: 'Chapter five · The day we install',
    shortLabel: 'The day we install',
    question: 'What happens the day they put it on?',
    summary:
      "Prep the week before. Hour by hour on install day. What's normal and what isn't. The handoff before the crew leaves.",
    readMinutes: 6,
    href: '/guide/install-day',
    status: 'live',
  },
  {
    number: '06',
    slug: 'after-the-job',
    eyebrow: 'Chapter six · After the job',
    shortLabel: "After we're done",
    question: 'What do I do once the new roof is on?',
    summary:
      'The first 30 days. Your warranty, said plainly. A year by year maintenance plan. When to call us back, and when not to.',
    readMinutes: 5,
    href: '/guide/after-the-job',
    status: 'live',
  },
]

/** Look up a chapter by slug. */
export function getChapter(slug: ChapterSlug): Chapter {
  const c = CHAPTERS.find((ch) => ch.slug === slug)
  if (!c) throw new Error(`Unknown chapter slug: ${slug}`)
  return c
}

/**
 * Previous/next chapter pair for the chapter pagination component. Returns
 * undefined on either side at the ends of the guide.
 */
export function getChapterNeighbors(slug: ChapterSlug): {
  prev?: Chapter
  next?: Chapter
} {
  const i = CHAPTERS.findIndex((c) => c.slug === slug)
  return {
    prev: i > 0 ? CHAPTERS[i - 1] : undefined,
    next: i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : undefined,
  }
}
