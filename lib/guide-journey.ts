// The Honest Roof Guide — customer journey model.
//
// This is the single source of truth for the "jump to what you need"
// experience. It maps the homeowner's real timeline (before a storm, when
// something happens, while deciding, and after the roof is on) to the
// tools, downloads, and chapters that help at that moment.
//
// One model powers several surfaces so they never drift apart:
//   - the guide hub "Start where you are" section (GuideJourney component)
//   - the printable Field Guide QR quick-start grid (/guide/companion)
//   - the build-time QR generator (scripts/generate-qr.mjs)
//
// QR generation note: scripts/generate-qr.mjs regex-parses this file for the
// `id` and `qrTarget` of each moment, then writes /public/qr/guide-<id>.png.
// Keep each moment's `id` first and `qrTarget` somewhere after it so the
// pairing stays correct.

import type { ChapterSlug } from './guide'

/** Visual band the moment belongs to. Bands render in this order. */
export type JourneyPhase = 'before' | 'during' | 'deciding' | 'after'

export type JourneyToolKind = 'tool' | 'pdf' | 'page' | 'call' | 'book'

export interface JourneyTool {
  label: string
  href: string
  kind: JourneyToolKind
}

export interface JourneyMoment {
  /** Stable id. Also the QR filename: /public/qr/guide-<id>.png. */
  id: string
  phase: JourneyPhase
  /** Customer-voice card title. */
  label: string
  /** Plain-language question the homeowner is actually asking. */
  question: string
  /** When the homeowner feels this. Rendered as a small timing pill. */
  timing: string
  /** One-line summary under the title. */
  summary: string
  /** Primary action / most important tool for this moment. */
  primary: JourneyTool
  /** Path the QR code encodes. Usually primary.href as a clean path. */
  qrTarget: string
  /** Supporting tools and downloads for this moment. */
  tools: JourneyTool[]
  /** Deeper-reading chapter crosswalk. */
  chapters: ChapterSlug[]
}

export interface JourneyBand {
  phase: JourneyPhase
  label: string
  blurb: string
}

/** Band metadata, rendered in array order on the hub. */
export const JOURNEY_BANDS: JourneyBand[] = [
  {
    phase: 'before',
    label: 'Before bad weather',
    blurb:
      "Help in advance, before there is a problem. Get ready before wind, hail, hurricanes, ice, or snow ever tests your roof.",
  },
  {
    phase: 'during',
    label: 'When weather hits or you spot a problem',
    blurb:
      'A storm just came through, or you noticed a leak, a stain, or missing shingles. Here is what to do, calmly and in the right order.',
  },
  {
    phase: 'deciding',
    label: 'Planning, choosing, and paying',
    blurb:
      'Figuring out cost, comparing roofers, sorting out insurance and payment, and getting ready for install day.',
  },
  {
    phase: 'after',
    label: 'After the roof is on',
    blurb:
      'The crew is gone. Here is how to confirm the work, protect your warranty, and keep the roof healthy for decades.',
  },
]

export const JOURNEY_MOMENTS: JourneyMoment[] = [
  // ---------------------------------------------------------------- BEFORE
  {
    id: 'before-the-storm',
    phase: 'before',
    label: 'Storm season is coming',
    question: 'Is my roof ready before the next storm?',
    timing: 'Before the season',
    summary:
      'Take baseline photos, clear the gutters, and know your deductible before weather arrives.',
    primary: {
      label: 'Before-the-storm checklist',
      href: '/guide/downloads/before-the-storm-readiness',
      kind: 'pdf',
    },
    qrTarget: '/guide/downloads/before-the-storm-readiness',
    tools: [
      { label: 'Take baseline photos', href: '/guide/downloads/photo-checklist', kind: 'pdf' },
      { label: 'Ground walkaround', href: '/guide/downloads/ground-walkaround-checklist', kind: 'pdf' },
      { label: 'Check your storm history', href: '/storm-check', kind: 'tool' },
      { label: 'Schedule a preventive check', href: '/request-inspection', kind: 'book' },
    ],
    chapters: ['check-your-roof', 'after-the-job'],
  },
  // ---------------------------------------------------------------- DURING
  {
    id: 'storm-just-hit',
    phase: 'during',
    label: 'A storm just hit',
    question: 'Did my address actually get hit, and what now?',
    timing: 'Right now / this week',
    summary:
      'Confirm what hit your home, document it, and avoid signing anything in your driveway.',
    primary: {
      label: 'Run Storm Check',
      href: '/storm-check',
      kind: 'tool',
    },
    qrTarget: '/storm-check',
    tools: [
      { label: 'Photos to take first', href: '/guide/downloads/photo-checklist', kind: 'pdf' },
      { label: 'Insurance claim walkthrough', href: '/guide/downloads/insurance-claim-walkthrough', kind: 'pdf' },
      { label: 'Spot a storm chaser', href: '/guide/downloads/storm-chaser-red-flags', kind: 'pdf' },
      { label: 'Schedule a free inspection', href: '/request-inspection', kind: 'book' },
    ],
    chapters: ['check-your-roof', 'pay-for-it', 'pick-a-roofer'],
  },
  {
    id: 'i-see-a-problem',
    phase: 'during',
    label: 'I see a leak or damage',
    question: "What's wrong, and how urgent is it?",
    timing: 'Today',
    summary:
      'Figure out what you are seeing from the ground and whether it is a repair or a replacement.',
    primary: {
      label: 'Find your problem',
      href: '/start#problem-finder',
      kind: 'tool',
    },
    qrTarget: '/start#problem-finder',
    tools: [
      { label: 'Ground walkaround', href: '/guide/downloads/ground-walkaround-checklist', kind: 'pdf' },
      { label: 'Repair or replace?', href: '/guide/downloads/repair-or-replace-decision-tree', kind: 'pdf' },
      { label: 'Schedule a free inspection', href: '/request-inspection', kind: 'book' },
    ],
    chapters: ['check-your-roof'],
  },
  // -------------------------------------------------------------- DECIDING
  {
    id: 'what-will-it-cost',
    phase: 'deciding',
    label: 'What will this cost?',
    question: 'What should a new roof actually cost on my house?',
    timing: 'Planning',
    summary:
      'Get a real range with no email required, then learn what belongs on every estimate.',
    primary: {
      label: 'Open the cost estimator',
      href: '/guide/cost-estimator',
      kind: 'tool',
    },
    qrTarget: '/guide/cost-estimator',
    tools: [
      { label: 'Materials comparison', href: '/guide/downloads/materials-comparison', kind: 'pdf' },
      { label: 'The nine components', href: '/guide/downloads/nine-components-of-a-real-roof', kind: 'pdf' },
      { label: 'Payment calculator', href: '/financing#calculator', kind: 'tool' },
    ],
    chapters: ['plan-your-roof'],
  },
  {
    id: 'compare-roofers',
    phase: 'deciding',
    label: 'How do I compare roofers?',
    question: 'Who should I hire, and how do I know they are honest?',
    timing: 'Comparing quotes',
    summary:
      'Verify five non-negotiables, ask the same twenty questions, and call references.',
    primary: {
      label: 'The five non-negotiables',
      href: '/guide/downloads/five-non-negotiables',
      kind: 'pdf',
    },
    qrTarget: '/guide/downloads/five-non-negotiables',
    tools: [
      { label: 'Twenty questions to ask', href: '/guide/downloads/twenty-questions-to-ask-every-roofer', kind: 'pdf' },
      { label: 'Reference-check script', href: '/guide/downloads/reference-check-script', kind: 'pdf' },
      { label: 'Storm-chaser red flags', href: '/guide/downloads/storm-chaser-red-flags', kind: 'pdf' },
    ],
    chapters: ['pick-a-roofer'],
  },
  {
    id: 'pay-for-it',
    phase: 'deciding',
    label: 'How do I pay for it?',
    question: 'Cash, insurance, or financing — what fits me?',
    timing: 'Before you sign',
    summary:
      'See real monthly payments, file insurance in the right order, and weigh the three paths.',
    primary: {
      label: 'Payment calculator',
      href: '/financing#calculator',
      kind: 'tool',
    },
    qrTarget: '/financing#calculator',
    tools: [
      { label: 'Insurance claim walkthrough', href: '/guide/downloads/insurance-claim-walkthrough', kind: 'pdf' },
      { label: 'Payment options worksheet', href: '/guide/downloads/payment-options-worksheet', kind: 'pdf' },
      { label: 'Full financing details', href: '/financing', kind: 'page' },
    ],
    chapters: ['pay-for-it'],
  },
  {
    id: 'install-coming',
    phase: 'deciding',
    label: 'Install is coming',
    question: 'How do I get ready for install day?',
    timing: 'Signed / scheduled',
    summary:
      'Prep the property the week before and know exactly what a good install day looks like.',
    primary: {
      label: 'Week-before prep checklist',
      href: '/guide/downloads/week-before-prep-checklist',
      kind: 'pdf',
    },
    qrTarget: '/guide/downloads/week-before-prep-checklist',
    tools: [
      { label: 'End-of-day handoff', href: '/guide/downloads/end-of-day-handoff-checklist', kind: 'pdf' },
      { label: 'Talk dates with our office', href: '/request-inspection', kind: 'book' },
    ],
    chapters: ['install-day'],
  },
  // ----------------------------------------------------------------- AFTER
  {
    id: 'roof-is-done',
    phase: 'after',
    label: 'The roof is done',
    question: 'What do I do now that the new roof is on?',
    timing: 'After install',
    summary:
      'Confirm the work in the first 30 days, understand your warranty, and keep it healthy.',
    primary: {
      label: 'First 30 days checklist',
      href: '/guide/downloads/first-30-days-checklist',
      kind: 'pdf',
    },
    qrTarget: '/guide/downloads/first-30-days-checklist',
    tools: [
      { label: 'Warranty explainer', href: '/guide/downloads/warranty-explainer', kind: 'pdf' },
      { label: 'Maintenance timeline', href: '/guide/downloads/maintenance-timeline', kind: 'pdf' },
    ],
    chapters: ['after-the-job'],
  },
]

/** Moments belonging to a given band, in declared order. */
export function getMomentsForPhase(phase: JourneyPhase): JourneyMoment[] {
  return JOURNEY_MOMENTS.filter((m) => m.phase === phase)
}

/** Look up a single moment by id. */
export function getMoment(id: string): JourneyMoment | undefined {
  return JOURNEY_MOMENTS.find((m) => m.id === id)
}
