// Downloadable / printable checklists referenced from chapters of The Honest
// Roof Guide. Every asset has two artifacts:
//
//   1. A printable Next.js route at /guide/downloads/<slug> — clean,
//      print-styled, and the canonical URL.
//   2. A static PDF at /public/guide/downloads/<slug>.pdf — generated at
//      build time by scripts/build-guide-pdfs.ts (added in a later phase).
//
// Phase 1 only ships Ch. 01's three documents as full content. The remaining
// slugs are declared as stubs so the chapters in later phases can link to
// real (if minimal) destinations the moment they go live — no dead links.

import type { ChapterSlug } from './guide'

export type DownloadKind = 'checklist' | 'reference' | 'worksheet' | 'decision-tree'

export interface DownloadSection {
  /** Section heading rendered on the printable page. */
  heading: string
  /** Lead paragraph above the items. Optional. */
  intro?: string
  /** Each line becomes a checkbox row on the printable page. */
  items: string[]
  /** Optional trailing note rendered under the items. */
  note?: string
}

export interface GuideDownload {
  slug: string
  /** Chapter this document belongs to (drives breadcrumb + "back to" link). */
  chapter: ChapterSlug
  /** Tag rendered above the title — "Checklist", "Reference", etc. */
  kind: DownloadKind
  /** Short label for chapter tools section + nav. */
  label: string
  /** Title on the printable page (h1). */
  title: string
  /** One-sentence lede under the h1. */
  intro: string
  /** Approximate time to use the document, e.g. "10 minutes". */
  useTime?: string
  /** The body of the document — a list of sections, each a list of items. */
  sections: DownloadSection[]
  /** A short closing line printed under the sections. Optional. */
  closing?: string
  /** True if Phase 1 ships this document with full content. */
  ready: boolean
}

// -- Phase 1: Chapter 01 documents ------------------------------------------

const photoChecklist: GuideDownload = {
  slug: 'photo-checklist',
  chapter: 'check-your-roof',
  kind: 'checklist',
  label: 'Photos to take',
  title: 'Photos to Take Before You Call Anyone',
  intro:
    "Take these before any roofer or adjuster shows up. Date-stamped photos are the single best protection you have — they prove what was already wrong and what wasn't.",
  useTime: '15 minutes, from the ground',
  sections: [
    {
      heading: 'Before you start',
      items: [
        'Open your phone camera settings and turn on "Save location" or "Date stamp" so every photo is timestamped.',
        'Charge your phone. You will take more photos than you think.',
        'Stay on the ground. Do not get a ladder out. Do not climb on the roof.',
        'Pick a time of day with even light — early morning or late afternoon works best.',
      ],
    },
    {
      heading: 'The four sides of the house',
      intro:
        'One wide photo of each side of your house, taken from the yard, with the full roofline in frame. Walk back until you can see the entire roof slope on that side.',
      items: [
        'Front of the house — full roofline',
        'Back of the house — full roofline',
        'Left side — full roofline',
        'Right side — full roofline',
      ],
    },
    {
      heading: 'Close-ups of anything that looks wrong',
      items: [
        'Missing shingles or bare patches (zoom in)',
        'Curling, buckling, or lifted shingles',
        'Dents or dings on metal vents, gutters, or downspouts',
        'Damaged or bent metal around the chimney, valleys, or skylights',
        'Anything sagging, dipping, or out of line along the ridge',
      ],
    },
    {
      heading: 'On the ground',
      items: [
        'Shingle pieces in the yard, in flower beds, or under bushes',
        'Storm debris — branches, hail on the lawn, fence damage',
        'A pile of granules (sandy black grit) at the bottom of any downspout',
        'Anything broken on siding, windows, or screens',
      ],
    },
    {
      heading: 'Inside (only if safe)',
      intro:
        'If your attic has a stable floor and pull-down stairs, take a flashlight up. Skip this section if you are not comfortable — a roofer will check it for you.',
      items: [
        'Daylight visible through the roof boards (point flashlight up)',
        'Dark or damp stains on the wood',
        'Wet or matted insulation',
        'Ceilings inside the house — any brown rings, bubbled paint, or stains',
      ],
    },
  ],
  closing:
    "Keep these photos. Do not delete them after a roofer or adjuster visits. They are evidence that protects you for years.",
  ready: true,
}

const groundWalkaroundChecklist: GuideDownload = {
  slug: 'ground-walkaround-checklist',
  chapter: 'check-your-roof',
  kind: 'checklist',
  label: 'Ground walkaround',
  title: 'The Ground-Level Roof Walkaround',
  intro:
    'A six-point inspection you can do in ten minutes, from your own yard. Most roof problems show themselves from the ground if you know what to look for.',
  useTime: '10 minutes',
  sections: [
    {
      heading: 'Walk all four sides',
      intro:
        "Start at your front door and walk clockwise around the house. Stop at each side. Look up. Look down. Don't rush.",
      items: [
        '1. Shingles or shingle pieces in the yard — they came from your roof.',
        "2. Bare patches when you look up at the roof — anywhere it's a different color (usually darker) is where the protective layer is gone.",
        '3. Black sandy grit in the gutters or at the bottom of downspouts — a lot of it on an older roof means the shingles are at end of life.',
        '4. Bent, missing, or rusty metal — around the chimney, in the valleys where two roof slopes meet, and around vents and pipes.',
        "5. Dips, waves, or sagging along the ridge (the top line of the roof) — that's a structural issue, not a shingle issue.",
        "6. Inside the house — brown or yellow rings on ceilings, bubbled paint, or a musty smell in an upstairs closet. The leak is rarely where you see the stain.",
      ],
    },
    {
      heading: 'After you finish',
      items: [
        "Anything checked? Take the Photos to Take checklist with you on a second lap.",
        "Active water inside? Move what's underneath, channel the drip into a container, and call a roofer today — don't try to tarp it yourself.",
        "Nothing obvious? Good. Run Storm Check at ncroofingservice.com/storm-check to see if any recent storm actually hit your address.",
      ],
    },
  ],
  closing:
    "If anyone says they spotted damage on your roof from the street, they're either lying or they have superhuman eyes. Real damage takes a real look.",
  ready: true,
}

const repairOrReplaceDecisionTree: GuideDownload = {
  slug: 'repair-or-replace-decision-tree',
  chapter: 'check-your-roof',
  kind: 'decision-tree',
  label: 'Repair or replace?',
  title: 'Repair or Replace — One-Page Decision Tree',
  intro:
    "There's no single rule, but most honest roofers use a version of this. Find the row that sounds like your roof and your situation.",
  sections: [
    {
      heading: 'The decision',
      items: [
        'Under 12 years old + isolated storm damage  →  REPAIR (often covered by insurance)',
        'Under 12 years old + widespread damage  →  Get two opinions; replacement may still be wrong',
        '12 to 18 years old + storm damage on top of normal wear  →  EITHER (a good roofer will tell you honestly)',
        '12 to 18 years old + leaks but no storm  →  REPAIR now, plan for replacement in 2–4 years',
        'Over 18 years old + any significant damage  →  REPLACE (small repairs throw good money after bad)',
        'Any age + active leak with water coming inside  →  FIX NOW, then decide about full replacement',
      ],
    },
    {
      heading: 'Reasons to lean toward repair',
      items: [
        'The damage is in one spot or one small area',
        'The rest of the roof still has years of life',
        'Your insurance is paying for the repair anyway',
        'You plan to sell within 2 years and the buyer will get an inspection',
      ],
    },
    {
      heading: 'Reasons to lean toward replacement',
      items: [
        'Granules in the gutter are heavy across the whole roof',
        'You can see daylight through the roof from the attic',
        'There are multiple layers of shingle already on the roof',
        'The roof has been repaired more than twice in the last five years',
        'The ridge sags or waves anywhere along its length',
      ],
    },
    {
      heading: 'Red flags that mean "stop, get a second opinion"',
      items: [
        'A roofer recommends replacement before going on the roof',
        'A roofer recommends replacement from drone photos alone',
        'A roofer says "I happened to be in the neighborhood"',
        "A roofer offers to waive your deductible or pay it for you",
        'A pressure to sign today, or a "this price is only good today" offer',
      ],
    },
  ],
  closing:
    "This is a guideline, not a rule. Every roof tells its own story when you get up there. Get a free, honest assessment at ncroofingservice.com or call (336) ROOFING.",
  ready: true,
}

// -- Phase 2-5 stubs --------------------------------------------------------
//
// Each stub publishes with a "coming soon" body so links from chapters never
// 404. When the corresponding chapter ships, swap `ready: false` for true and
// fill in `sections`.

function stub(
  slug: string,
  chapter: ChapterSlug,
  kind: DownloadKind,
  label: string,
  title: string,
  intro: string,
): GuideDownload {
  return {
    slug,
    chapter,
    kind,
    label,
    title,
    intro,
    sections: [
      {
        heading: 'Coming with the rest of the guide',
        items: [
          'This document ships with its chapter. Bookmark this page — or jump back to the chapter for everything we know on the topic.',
        ],
      },
    ],
    ready: false,
  }
}

export const DOWNLOADS: GuideDownload[] = [
  // Ch. 01 — live
  photoChecklist,
  groundWalkaroundChecklist,
  repairOrReplaceDecisionTree,
  // Ch. 02 — stubs
  stub(
    'nine-components-of-a-real-roof',
    'plan-your-roof',
    'reference',
    'Nine components',
    'The Nine Components of a Real Roof',
    'A one-page poster of what actually goes on a roof — beyond the shingles.',
  ),
  stub(
    'materials-comparison',
    'plan-your-roof',
    'reference',
    'Materials comparison',
    'Architectural vs. Premium vs. Metal — A Side-by-Side',
    'Lifespan, cost, and NC-specific notes for the three materials you will actually choose between.',
  ),
  // Ch. 03 — stubs
  stub(
    'insurance-claim-walkthrough',
    'pay-for-it',
    'checklist',
    'Insurance claim',
    'The Insurance Claim Walkthrough',
    'A step-by-step checklist for filing a roof claim in NC — and the day-of-adjuster preparation that wins claims.',
  ),
  stub(
    'payment-options-worksheet',
    'pay-for-it',
    'worksheet',
    'Payment worksheet',
    'Cash, Financing, or Both — A Worksheet',
    'The three real paths to paying for a roof, with the math on a single page.',
  ),
  // Ch. 04 — stubs
  stub(
    'twenty-questions-to-ask-every-roofer',
    'pick-a-roofer',
    'checklist',
    '20 questions',
    'Twenty Questions to Ask Every Roofer You Call',
    'A printable Q&A sheet with checkboxes and a notes column. Use one per roofer.',
  ),
  stub(
    'five-non-negotiables',
    'pick-a-roofer',
    'checklist',
    'Five non-negotiables',
    'The Five Non-Negotiables',
    'License, insurance, certifications, reviews, references — what to verify and how to verify it.',
  ),
  stub(
    'storm-chaser-red-flags',
    'pick-a-roofer',
    'reference',
    'Storm-chaser red flags',
    'How to Spot a Storm Chaser',
    'A one-page warning card to keep by the door.',
  ),
  stub(
    'reference-check-script',
    'pick-a-roofer',
    'checklist',
    'Reference check',
    'The Reference-Check Script',
    'Eight questions to ask a roofer\'s past customer that catch everything.',
  ),
  // Ch. 05 — stubs
  stub(
    'week-before-prep-checklist',
    'install-day',
    'checklist',
    'Pre-install prep',
    'The Week-Before-Install Prep Checklist',
    'Cars, gutters, attic, pets, fragile items, irrigation — what to do before the crew arrives.',
  ),
  stub(
    'end-of-day-handoff-checklist',
    'install-day',
    'checklist',
    'End-of-day handoff',
    'The End-of-Day Handoff Checklist',
    'What to verify before the crew leaves.',
  ),
  // Ch. 06 — stubs
  stub(
    'first-30-days-checklist',
    'after-the-job',
    'checklist',
    'First 30 days',
    'The First 30 Days After Your New Roof',
    'Magnet sweeps, attic checks, gutter wash, warranty registration.',
  ),
  stub(
    'maintenance-timeline',
    'after-the-job',
    'reference',
    'Maintenance timeline',
    'The Roof Maintenance Timeline',
    'A year-by-year calendar with the annual, 5-year, 10-year, and 20-year touchpoints.',
  ),
  stub(
    'warranty-explainer',
    'after-the-job',
    'reference',
    'Warranty explainer',
    'Your Warranty, In Plain English',
    'Manufacturer vs. workmanship — what each covers, what they do not, and how to actually file a claim later.',
  ),
]

/** Look up a download by slug. */
export function getDownload(slug: string): GuideDownload | undefined {
  return DOWNLOADS.find((d) => d.slug === slug)
}

/** All downloads for a given chapter, in declared order. */
export function getDownloadsForChapter(chapter: ChapterSlug): GuideDownload[] {
  return DOWNLOADS.filter((d) => d.chapter === chapter)
}
