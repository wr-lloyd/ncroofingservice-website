// Downloadable / printable checklists referenced from chapters of The
// Honest Roof Guide. Every asset is a real document, fully written. There
// are no stubs and no dead links.
//
// Each download has two artifacts:
//   1. A printable Next.js route at /guide/downloads/<slug>. Clean,
//      print-styled, and the canonical URL.
//   2. (Optional future enhancement) A static PDF at
//      /public/guide/downloads/<slug>.pdf generated at build time.

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
  /** Tag rendered above the title. "Checklist", "Reference", etc. */
  kind: DownloadKind
  /** Short label for chapter tools section + nav. */
  label: string
  /** Title on the printable page (h1). */
  title: string
  /** One-sentence lede under the h1. */
  intro: string
  /** Approximate time to use the document, e.g. "10 minutes". */
  useTime?: string
  /** The body of the document. A list of sections, each a list of items. */
  sections: DownloadSection[]
  /** A short closing line printed under the sections. Optional. */
  closing?: string
  /** True if Phase 1 ships this document with full content. */
  ready: boolean
}

// =========================================================================
// Before the storm — preventive readiness (lives with Chapter 01)
// =========================================================================

const beforeTheStormReadiness: GuideDownload = {
  slug: 'before-the-storm-readiness',
  chapter: 'check-your-roof',
  kind: 'checklist',
  label: 'Before the storm',
  title: 'Before the Storm: Roof Readiness Checklist',
  intro:
    "The Honest Roofer wants to help before you have a problem. Wind, hail, hurricane rain, ice, and snow are coming every year in North Carolina. Twenty minutes now, before the season, makes everything after a storm faster, cheaper, and far less stressful.",
  useTime: '20 to 30 minutes, before storm season',
  sections: [
    {
      heading: 'Take baseline photos now (the single most valuable step)',
      intro:
        "Date-stamped photos taken before any storm are your strongest protection. They prove what was already fine, so a storm chaser can't invent damage and an adjuster can't write off real damage as old wear.",
      items: [
        'Turn on date or location stamping in your phone camera settings.',
        'One wide photo of each side of the house, full roofline in frame, from the yard.',
        'Close-ups of the chimney, valleys, vents, and any spot that already looks worn.',
        'Photos of gutters, downspouts, siding, and screens while they are intact.',
        'Save them somewhere you will still find them in two years. Email them to yourself.',
      ],
    },
    {
      heading: 'Before the season (early spring and early fall)',
      items: [
        'Walk all four sides of the house from the ground. Look up. Note anything already loose or worn.',
        'Clean the gutters and confirm downspouts carry water away from the foundation.',
        'Trim back any branches within 6 feet of the roof. Wind turns them into battering rams.',
        'Secure or plan to move anything that becomes a projectile: patio furniture, grills, trampolines.',
        'Check the attic with a flashlight on a dry day so you know what "normal" looks like before a leak.',
      ],
    },
    {
      heading: 'When a named storm or hard freeze is in the forecast',
      items: [
        'Bring in or tie down loose outdoor items 48 hours out.',
        'Clear gutters again so melting ice and heavy rain can drain instead of backing up under shingles.',
        'Locate your insurance policy. Find the wind/hail deductible line and write the number down now.',
        'Save the office number in your phone so you are not searching for it in the dark after a storm.',
        'Know where your water shutoff and attic access are, in case water gets in.',
      ],
    },
    {
      heading: 'After it passes',
      items: [
        'Stay off the roof. Check from the ground and from inside the attic.',
        'Run Storm Check at ncroofingservice.com/storm-check to confirm what actually hit your address.',
        'Compare new photos to your baseline set. Differences are your documentation.',
        'If you see real damage, read the insurance claim walkthrough before you call your carrier.',
      ],
    },
  ],
  closing:
    "Most homeowners only think about their roof after it fails. Doing this short list before the season is the difference between a calm, documented claim and a frantic, expensive scramble. The Honest Roofer would rather help you prepare than clean up after a storm chaser.",
  ready: true,
}

// =========================================================================
// Chapter 01 — Check your roof
// =========================================================================

const photoChecklist: GuideDownload = {
  slug: 'photo-checklist',
  chapter: 'check-your-roof',
  kind: 'checklist',
  label: 'Photos to take',
  title: 'Photos to Take Before You Call Anyone',
  intro:
    "Take these before any roofer or adjuster shows up. Date-stamped photos are the single best protection you have. They prove what was already wrong, and what wasn't.",
  useTime: '15 minutes, from the ground',
  sections: [
    {
      heading: 'Before you start',
      items: [
        'Open your phone camera settings. Turn on "Save location" or "Date stamp" so every photo is timestamped.',
        'Charge your phone. You will take more photos than you think.',
        'Stay on the ground. Do not get a ladder out. Do not climb on the roof.',
        'Pick a time of day with even light. Early morning or late afternoon works best.',
      ],
    },
    {
      heading: 'The four sides of the house',
      intro:
        'One wide photo of each side of your house, taken from the yard, with the full roofline in frame. Walk back until you can see the entire slope on that side.',
      items: [
        'Front of the house, full roofline',
        'Back of the house, full roofline',
        'Left side, full roofline',
        'Right side, full roofline',
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
        'Storm debris. Branches, hail on the lawn, fence damage',
        'A pile of granules (sandy black grit) at the bottom of any downspout',
        'Anything broken on siding, windows, or screens',
      ],
    },
    {
      heading: 'Inside, only if safe',
      intro:
        'If your attic has a stable floor and pull-down stairs, take a flashlight up. Skip this section if you are not comfortable. A roofer will check it for you.',
      items: [
        'Daylight visible through the roof boards (point flashlight up)',
        'Dark or damp stains on the wood',
        'Wet or matted insulation',
        'Ceilings inside the house. Brown rings, bubbled paint, or stains',
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
        '1. Shingles or shingle pieces in the yard. They came from your roof.',
        "2. Bare patches when you look up. Anywhere it's a different color (usually darker) is where the protective layer is gone.",
        '3. Black sandy grit in the gutters or at the bottom of downspouts. A lot of it on an older roof means the shingles are at end of life.',
        '4. Bent, missing, or rusty metal. Around the chimney, in the valleys where two slopes meet, and around vents and pipes.',
        "5. Dips, waves, or sagging along the ridge (the top line). That's a structural issue, not a shingle issue.",
        "6. Inside the house. Brown or yellow rings on ceilings, bubbled paint, or a musty smell in an upstairs closet. The leak is rarely where you see the stain.",
      ],
    },
    {
      heading: 'After you finish',
      items: [
        "Anything checked? Take the Photos to Take checklist with you on a second lap.",
        "Active water inside? Move what's underneath, channel the drip into a container, and call a roofer today. Don't try to tarp it yourself.",
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
  title: 'Repair or Replace. A One-Page Decision Tree',
  intro:
    "There's no single rule. Most honest roofers use a version of this. Find the row that sounds like your roof and your situation.",
  sections: [
    {
      heading: 'The decision',
      items: [
        'Under 12 years old + isolated storm damage  =>  REPAIR (often covered by insurance)',
        'Under 12 years old + widespread damage  =>  Get two opinions; replacement may still be wrong',
        '12 to 18 years old + storm damage on top of normal wear  =>  EITHER (a good roofer will tell you honestly)',
        '12 to 18 years old + leaks but no storm  =>  REPAIR now, plan for replacement in 2 to 4 years',
        'Over 18 years old + any significant damage  =>  REPLACE (small repairs throw good money after bad)',
        'Any age + active leak with water coming inside  =>  FIX NOW, then decide about full replacement',
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

// =========================================================================
// Chapter 02 — Plan your roof
// =========================================================================

const nineComponents: GuideDownload = {
  slug: 'nine-components-of-a-real-roof',
  chapter: 'plan-your-roof',
  kind: 'reference',
  label: 'Nine components',
  title: 'The Nine Components of a Real Roof',
  intro:
    "A roof is not just shingles. It is nine separate components, and every one of them has to be right. This is what should be on your written estimate.",
  sections: [
    {
      heading: 'The nine, top to bottom',
      items: [
        '1. The deck (the plywood or OSB the whole roof sits on). Bad spots are replaced, not covered over.',
        '2. Drip edge. Metal that runs along the eaves and gables to push water off the deck. Required by code in NC.',
        '3. Ice and water shield. A self-sealing membrane in the valleys, around penetrations, and along the eaves. Stops wind-driven rain.',
        '4. Synthetic underlayment. The waterproof layer over the rest of the deck. The old tar paper is dead. We use synthetic.',
        '5. Starter strip. A factory-made first row of shingles along every eave and rake. Wind goes up under shingles without it.',
        '6. The field shingles. The big visible layer. Architectural, premium, or metal panels.',
        '7. Flashing. Metal around the chimney, walls, skylights, and pipes. This is where 80 percent of leaks come from when it is done wrong.',
        '8. Ridge cap. The shaped shingles that cover the peak. Not optional. Not interchangeable with field shingles.',
        '9. Ventilation. Ridge vent at the top, soffit vents at the bottom. Without it, your shingles cook from the underside and your warranty is void.',
      ],
    },
    {
      heading: 'How to use this on your estimate',
      items: [
        'Every line above should appear by name on your written estimate.',
        'If something is missing, ask why. "It is fine, we always include that" is not the right answer. Ask them to write it on the estimate.',
        'If a competitor is cheaper by $3,000, count their components. They are skipping two or three of these.',
      ],
    },
  ],
  closing:
    'A roof that lasts 25 years has all nine. A roof that lasts 8 has five of them. The cost difference is small. The lifetime difference is everything.',
  ready: true,
}

const materialsComparison: GuideDownload = {
  slug: 'materials-comparison',
  chapter: 'plan-your-roof',
  kind: 'reference',
  label: 'Materials comparison',
  title: 'Architectural vs. Premium vs. Metal. A Side-by-Side',
  intro:
    'Three real choices in North Carolina. Anything else is a salesperson trying to be different. Here is the honest math on lifespan, cost, and fit.',
  sections: [
    {
      heading: 'Architectural asphalt shingles',
      intro: 'The standard NC roof. Around 80 percent of what we install.',
      items: [
        'Lifespan: 22 to 28 years in NC sun (manufacturer says 30; subtract for heat)',
        'Cost per square (100 sq ft) installed: $350 to $450',
        'Best for: Most homes. Best lifetime cost. Insurance replaces them cleanly.',
        'Watch out for: Cheap "three-tab" shingles. Not the same thing. Refuse anything below GAF Timberline HDZ or equivalent.',
      ],
    },
    {
      heading: 'Premium / designer asphalt shingles',
      intro: 'Thicker, heavier, longer warranty. The "lifetime" tier.',
      items: [
        'Lifespan: 28 to 35 years in NC sun',
        'Cost per square installed: $480 to $620',
        'Best for: Homes where you plan to stay 15+ years, or where the HOA requires the look.',
        'Watch out for: Marketing-only "premium" labels. Ask for the weight per square (good ones are 240+ lbs).',
      ],
    },
    {
      heading: 'Standing-seam metal',
      intro: "The longest-lived roof you can buy. It's also a different category of project.",
      items: [
        'Lifespan: 40 to 60 years',
        'Cost per square installed: $1,100 to $1,500',
        'Best for: Forever homes. Steep modern designs. Anywhere you want one roof for the rest of your life.',
        'Watch out for: Exposed-fastener "metal" (the kind with visible screws). That is a different product, with a 20-year life and a leak problem at every screw. Standing-seam is the one you want.',
      ],
    },
    {
      heading: 'How to read your estimates',
      items: [
        'Ask for the specific product. "GAF Timberline HDZ", not "architectural shingle".',
        'Ask for the warranty paperwork that will be filed in your name. There is a real difference between a 30-year warranty and a 50-year one, and it costs the roofer nothing extra to file the right one.',
        'If two estimates use the same material but differ by $4,000+, the cheap one is skipping components from the nine-component list. Find out which ones.',
      ],
    },
  ],
  closing:
    'Pick the material that fits how long you plan to be in the house, not the cheapest one on the page. The difference of $2,000 between tiers is $80 a year over the life of the roof. That is nothing.',
  ready: true,
}

// =========================================================================
// Chapter 03 — Pay for it
// =========================================================================

const insuranceClaimWalkthrough: GuideDownload = {
  slug: 'insurance-claim-walkthrough',
  chapter: 'pay-for-it',
  kind: 'checklist',
  label: 'Insurance claim',
  title: 'The Insurance Claim Walkthrough',
  intro:
    'Step by step for filing a roof claim in North Carolina. Read this before you file. Filing wrong is more expensive than not filing at all.',
  useTime: 'About one hour the day of the storm, then 2 to 4 weeks',
  sections: [
    {
      heading: 'Step 1. Before you file',
      items: [
        'Take your own photos (use the Photos to Take checklist).',
        "Get one or two honest roof inspections, free, before you call the carrier. We do this and don't charge a dime.",
        'Confirm there is real damage. If a roofer cannot show you damage on the roof itself, do not file. A denied claim still counts against you.',
        'Find your policy. Check the deductible. Check if it is a flat dollar amount or a percentage of the home value (in NC, hail/wind is often a 1% or 2% deductible).',
      ],
    },
    {
      heading: 'Step 2. The phone call to your carrier',
      items: [
        'Use the word "report" not "claim". "I want to report a storm event so it is on file."',
        'Give the date of the storm. Ask them to log it.',
        'Do not commit to a claim on this call unless damage is confirmed.',
        'Write down the claim number and the adjuster\'s name when you get them.',
      ],
    },
    {
      heading: 'Step 3. Day-of-adjuster prep',
      items: [
        'Have your photos ready, printed or on a tablet.',
        "Have your roofer there for the adjuster meeting. This is a routine, not pushy. Adjusters expect it.",
        'Make sure the adjuster gets on the roof. If they "spot-check" from the ground only, that is a problem.',
        'Get a copy of the adjuster\'s written report (the "scope of loss") before they leave or within 48 hours.',
      ],
    },
    {
      heading: 'Step 4. After the inspection',
      items: [
        'Compare the scope of loss to the roofer\'s estimate. Mismatches are normal. Your roofer files a supplement to correct them.',
        'Do not let work start until you have the carrier-approved scope and the depreciation released.',
        'Sign nothing that uses the words "Assignment of Benefits" (AOB). You stay in control of the money.',
      ],
    },
    {
      heading: 'What never to do',
      items: [
        'Never let a roofer file the claim for you.',
        "Never sign a contract with a roofer before the adjuster has approved the scope. \"Contingent\" is fine; signed-and-paid is not.",
        "Never accept anyone's offer to \"waive your deductible\" or \"pay your deductible for you\". That is insurance fraud, and the homeowner is the one with the address on it.",
      ],
    },
  ],
  closing:
    'A clean insurance claim in NC takes about three to five weeks from storm to new roof. A bad one takes six months and a denial. Doing it in the right order is the whole game.',
  ready: true,
}

const paymentOptionsWorksheet: GuideDownload = {
  slug: 'payment-options-worksheet',
  chapter: 'pay-for-it',
  kind: 'worksheet',
  label: 'Payment worksheet',
  title: 'Cash, Financing, or Both. A Worksheet',
  intro:
    'There are really only three ways to pay for a roof. This worksheet walks you through the math so you know which one fits.',
  useTime: '15 minutes with your bank statement',
  sections: [
    {
      heading: 'Path 1. Pay cash',
      items: [
        'Cost of the roof: $______',
        'Savings you can use without dropping below 3 months of emergency fund: $______',
        'Shortfall (if any): $______',
        'If shortfall is 0: pay cash. Done.',
        'If shortfall is small: ask about a "deposit + finished" split. Many roofers (us included) will take 50% on material delivery and 50% on completion. No financing needed.',
      ],
    },
    {
      heading: 'Path 2. Insurance pays most',
      items: [
        'Carrier-approved scope of loss: $______',
        'Your deductible: $______',
        'Out of pocket: deductible only',
        "If your deductible is a percentage of home value, this number can be $5,000 to $15,000. Plan for it. That is the number the worksheet is about.",
      ],
    },
    {
      heading: 'Path 3. Finance the whole thing',
      items: [
        'Cost of the roof: $______',
        'Monthly payment you can afford: $______',
        'At Service Finance Company (our partner), $20,000 roof at 9.99% for 10 years is about $264/month.',
        'At Enhancify, same roof can be 12 months no interest if paid in full inside the promo window. After that the rate is high. Read the fine print.',
        'Rule of thumb: pick a term that gets the payment under what you save by not having a roof leak. If the new roof saves you $80/month in cooling costs, a $200/month payment is workable.',
      ],
      note: 'Use ncroofingservice.com/financing for the live calculator. The numbers above are illustrative.',
    },
    {
      heading: 'The split that most people use',
      items: [
        '40% of NC homeowners pay cash for the full roof',
        '35% file insurance and pay only the deductible',
        '25% finance some or all of it',
        'There is no wrong answer. The wrong move is letting a roofer push you into a financing product they get a kickback on.',
      ],
    },
  ],
  closing:
    'Money decisions are personal. Use this worksheet, then talk to your spouse and your bank, not to the roofer in your driveway. A real roofer will walk you through the math without trying to sell you a loan.',
  ready: true,
}

// =========================================================================
// Chapter 04 — Pick a roofer
// =========================================================================

const fiveNonNegotiables: GuideDownload = {
  slug: 'five-non-negotiables',
  chapter: 'pick-a-roofer',
  kind: 'checklist',
  label: 'Five non-negotiables',
  title: 'The Five Non-Negotiables',
  intro:
    'These five items are not optional. If any roofer on your list is missing any of them, cross them off. Pull this list out on every estimate visit.',
  useTime: '20 minutes per roofer, mostly online',
  sections: [
    {
      heading: '1. NC general contractor license, if the job is $30,000 or more',
      items: [
        'North Carolina requires a GC license for any project at or above $30,000. Most replacements clear this number.',
        'Verify at nclbgc.org. Search by company name. The license must be active and unsuspended.',
        'A roofer without a GC license cannot legally do a $30k+ replacement. Period.',
      ],
    },
    {
      heading: '2. General liability insurance + workers comp',
      items: [
        'Ask for a Certificate of Insurance (COI) showing both. Email is fine.',
        'General liability: $1M minimum. Confirms they will pay if a ladder goes through your living room window.',
        "Workers comp: required by NC for any company with 3+ employees. Without it, if a worker falls on your property, your homeowner's insurance is on the hook.",
        'Call the insurance broker on the COI to confirm it is current. Roofers sometimes give old COIs.',
      ],
    },
    {
      heading: '3. Manufacturer certification',
      items: [
        'GAF Master Elite, Owens Corning Platinum Preferred, or CertainTeed SELECT ShingleMaster.',
        'These are not marketing badges. They unlock the full manufacturer warranty (Golden Pledge, Platinum, etc.) that only certified roofers can install under.',
        'Verify on the manufacturer\'s site, not the roofer\'s. GAF\'s "Find a Master Elite Contractor" tool is the source of truth.',
      ],
    },
    {
      heading: '4. Local reviews, with photos and details',
      items: [
        'Google reviews of 4.7+ across 50+ reviews. Single-digit-review companies cannot be evaluated.',
        'Read the 3-star reviews. Those are the most honest. Skip the 5-stars and 1-stars.',
        "Look for replies from the company. Engaged owners reply within a week, professionally.",
        'Cross-check on the Better Business Bureau. An A+ rating with one or two resolved complaints is fine. Unresolved or unanswered complaints are a problem.',
      ],
    },
    {
      heading: '5. Two real references on the phone',
      items: [
        'Ask for two recent customers. Last 90 days. Same city if possible.',
        'Call them. Ask the questions on the Reference Check Script.',
        "A roofer who hesitates to give two references is telling you something. Cross them off.",
      ],
    },
  ],
  closing:
    'These five take about an hour to verify across three roofers. That hour is the most valuable hour you will spend on this project. Skip it and you are guessing.',
  ready: true,
}

const twentyQuestions: GuideDownload = {
  slug: 'twenty-questions-to-ask-every-roofer',
  chapter: 'pick-a-roofer',
  kind: 'checklist',
  label: '20 questions',
  title: 'Twenty Questions to Ask Every Roofer You Call',
  intro:
    'Print one copy per roofer. Write their answers next to each question. The patterns become obvious by the third roofer.',
  useTime: '15 minutes on the phone, per roofer',
  sections: [
    {
      heading: 'About the company',
      items: [
        '1. How long has your company been doing residential roofing in NC?',
        '2. What is your NC general contractor license number?',
        '3. Are you a manufacturer-certified installer? Which manufacturer?',
        '4. Can you email me your Certificate of Insurance today?',
        '5. Do you carry workers comp? Can the COI show both?',
      ],
    },
    {
      heading: 'About the people doing the work',
      items: [
        '6. Are the crews your employees or subcontractors?',
        '7. Will the same crew start and finish my job?',
        '8. Who is the on-site foreman, and how do I reach them on install day?',
        '9. How many roofs has that foreman done?',
      ],
    },
    {
      heading: 'About what is on the estimate',
      items: [
        '10. What specific shingle product is on the estimate? Brand and line, not just "architectural".',
        '11. What underlayment, ice and water shield, drip edge, and starter strip are you using?',
        '12. Are you replacing flashing around the chimney and walls, or reusing it?',
        '13. What ventilation are you installing or upgrading?',
        '14. How is decking handled if you find bad spots? What is the per-sheet price?',
      ],
    },
    {
      heading: 'About warranty and paperwork',
      items: [
        '15. What manufacturer warranty will be filed in my name? Send me the warranty document.',
        '16. What workmanship warranty do you carry, and is it in writing?',
        '17. Will I have a written contract before any work starts? Can I see a sample today?',
      ],
    },
    {
      heading: 'About what happens after',
      items: [
        '18. What is your magnet-sweep and nail-cleanup process?',
        '19. Who handles a warranty call in five years if there is a leak?',
        '20. Can you give me two recent customers I can call this week?',
      ],
    },
  ],
  closing:
    'Any roofer who is annoyed by these questions is a roofer who should not be on your roof. Ours answer all twenty without flinching, because we built the company expecting them.',
  ready: true,
}

const stormChaserRedFlags: GuideDownload = {
  slug: 'storm-chaser-red-flags',
  chapter: 'pick-a-roofer',
  kind: 'reference',
  label: 'Storm-chaser red flags',
  title: 'How to Spot a Storm Chaser',
  intro:
    'A one-page warning card. After a big storm in NC, hundreds of out-of-state crews show up. Most leave inside a year. Some leave behind worse roofs than they started with.',
  sections: [
    {
      heading: 'The pitch you will hear at the door',
      intro: 'Any of these in the first 60 seconds means walk back inside.',
      items: [
        '"I was working in the neighborhood and I noticed your roof has damage."',
        '"We can get you a new roof and your insurance will pay for the whole thing."',
        '"I can waive your deductible. We do it all the time."',
        '"Sign this so I can get on the roof and start the inspection."',
        '"This price is only good today."',
        '"I just need a small deposit to hold the spot."',
      ],
    },
    {
      heading: 'The paperwork they hand you',
      items: [
        'A contingent agreement that signs them onto the job before any inspection is done',
        "An \"Assignment of Benefits\" or \"AOB\" that hands them your insurance check directly. Never sign one of these.",
        'A blank or partial estimate that says "additional charges as needed"',
        'No license number, no insurance certificate, no manufacturer certification listed',
      ],
    },
    {
      heading: 'The physical signs they are not from here',
      items: [
        'A truck or van with out-of-state plates and a temporary logo',
        'A phone number with an area code that is not 252, 336, 704, 743, 828, 910, 919, or 980',
        'A business name you cannot find on Google with reviews more than 90 days old',
        'No physical address in NC. A PO box does not count.',
      ],
    },
    {
      heading: 'If you have already signed something',
      items: [
        'NC consumer protection gives you a 3-day "right to cancel" on door-to-door sales. Send written cancellation within 3 business days.',
        "If you signed an AOB, contact your insurance carrier and your attorney immediately. AOBs in NC can be unwound but it takes work.",
        "Call us if you want a second set of eyes. We will tell you straight, no charge.",
      ],
    },
  ],
  closing:
    'A real local roofer does not need to knock on doors. They have a phone that already rings. If someone shows up uninvited and the pitch sounds urgent, that is the whole story right there.',
  ready: true,
}

const referenceCheckScript: GuideDownload = {
  slug: 'reference-check-script',
  chapter: 'pick-a-roofer',
  kind: 'checklist',
  label: 'Reference check',
  title: 'The Reference-Check Script',
  intro:
    "Eight questions to ask a roofer's past customer. Print this and call two references for every roofer on your shortlist. Twenty minutes of calls saves you years of regret.",
  useTime: '10 minutes per call',
  sections: [
    {
      heading: 'The opener',
      items: [
        '"Hi, [name]. [Roofer] gave me your number as a reference. I am thinking about hiring them. Do you have five minutes?"',
      ],
    },
    {
      heading: 'The eight questions',
      items: [
        '1. When did they do your roof?',
        '2. Did the final price match the original estimate? If not, by how much?',
        "3. How long did the job take? Was that what they said it would?",
        '4. Was the same crew there the whole time? Was the foreman around?',
        '5. How did they leave your property at the end of each day?',
        '6. Have you had any issues since? If so, how did they handle it?',
        '7. Did you have to chase them for anything? Warranty paperwork, magnet sweep, anything?',
        '8. If you had to do it again, would you hire them again?',
      ],
    },
    {
      heading: 'The tell',
      items: [
        'The most important moment is the pause before question 8. A real "yes" comes fast. A hesitant "well, I mean, mostly..." is your answer.',
        'Listen for what the person volunteers without being asked. Praise about cleanup, follow-through, or honesty is the strongest signal.',
        'Listen for complaints that came up but were not asked about. "They did call back when..." is a flag that there was an issue.',
      ],
    },
  ],
  closing:
    'A roofer who cannot put you on the phone with two recent customers is not a roofer you hire. We will hand you four if you ask. Pick any.',
  ready: true,
}

// =========================================================================
// Chapter 05 — Install day
// =========================================================================

const weekBeforePrep: GuideDownload = {
  slug: 'week-before-prep-checklist',
  chapter: 'install-day',
  kind: 'checklist',
  label: 'Pre-install prep',
  title: 'The Week-Before-Install Prep Checklist',
  intro:
    'A roof install creates noise, vibration, and a lot of falling material. Doing this prep the week before makes the day itself go smoothly.',
  useTime: '30 minutes the weekend before',
  sections: [
    {
      heading: '7 days out',
      items: [
        'Confirm the install date and weather forecast with your roofer. NC weather changes fast; the date may shift one or two days.',
        'Notify your immediate neighbors. A heads-up the week before saves a 7am text on install day.',
        'Locate your attic access. The crew may need to go up.',
        'If you have an active alarm system, let the monitoring company know there will be impact and vibration that day. Avoids a false-alarm call.',
      ],
    },
    {
      heading: '3 days out',
      items: [
        'Walk the yard. Pick up garden art, planters, and anything light that vibration could shake over.',
        'Check the gutters. If they are not being replaced, let the roofer know they are full so the crew can clean as they go.',
        'Move any vehicle from the driveway. You will need the driveway empty for the dumpster and material drop.',
      ],
    },
    {
      heading: 'The night before',
      items: [
        'Take down anything fragile hanging on walls under the roof. Vibration knocks things off.',
        'Cover anything important in the attic. Old sheets are fine. Insulation dust drops through.',
        "Move grills, patio furniture, and umbrellas at least 10 feet from the house. Falling debris will dent metal.",
        'Plan to be out, or plan to be in. Either is fine. We will work the same either way.',
      ],
    },
    {
      heading: 'For pets and kids',
      items: [
        "Kennel anxious dogs. The noise is steady and loud for 6 to 9 hours.",
        'Plan an off-site morning for sensitive kids. Most parents arrange a grandparent or library day.',
        'Goldfish and other indoor pets: fine. They cannot hear it.',
      ],
    },
  ],
  closing:
    "If you forget any of this, do not stress. The crew has seen it all. We tarp landscaping, work around cars, and tape what is fragile. The list above just makes a good day great.",
  ready: true,
}

const endOfDayHandoff: GuideDownload = {
  slug: 'end-of-day-handoff-checklist',
  chapter: 'install-day',
  kind: 'checklist',
  label: 'End-of-day handoff',
  title: 'The End-of-Day Handoff Checklist',
  intro:
    'Before the crew leaves, walk the property with the foreman and confirm each of these. This is the moment when small things get fixed cheaply.',
  useTime: '15 minutes with the foreman',
  sections: [
    {
      heading: 'The roof itself',
      items: [
        'Walk the perimeter on the ground. Look up. Confirm the ridge is straight and the lines look clean.',
        'Confirm there are no exposed nails, gaps, or shingles out of pattern visible from the ground.',
        "Ask the foreman to show you a phone photo of the chimney flashing, the valleys, and any skylights. You don't need to inspect from the roof yourself.",
        'Confirm the ventilation work was done as written on the contract (ridge vent, soffit, etc.).',
      ],
    },
    {
      heading: 'The property',
      items: [
        'Walk the lawn. Look for stray nails. The crew should have run a magnet sweeper. Ask to see them do another pass.',
        'Check the gutters for debris. They should be empty or close to it.',
        "Confirm the dumpster is leaving today (or tomorrow if late). It should not sit on your driveway through the weekend without being scheduled.",
        'Confirm the driveway is swept and the lawn is clear of material.',
      ],
    },
    {
      heading: 'The paperwork',
      items: [
        'Sign the completion document. Get a copy in your hand or in email before the foreman leaves.',
        "Get the warranty registration confirmation. The roofer files this with the manufacturer the same day. Ask when you'll receive the confirmation email from GAF/Owens Corning/CertainTeed.",
        'Confirm the final invoice matches the contract. If there were extras (decking, surprise repairs), they should be itemized.',
        'Get the foreman\'s direct number for any 48-hour follow-up.',
      ],
    },
    {
      heading: 'Two things to do tomorrow',
      items: [
        "Walk the lawn one more time with kids or pets in mind. We are good with magnet sweeps, but nails hide.",
        'Open the attic and look up at the underside of the roof in daylight. If you see new gaps of light where there were not any before, call. That is a 30-minute fix on day two; a much bigger one in a month.',
      ],
    },
  ],
  closing:
    'A good handoff takes 15 minutes and prevents 90 percent of the problems that show up later. We do this with every customer. If a roofer rushes off without one, that is the moment to ask for it.',
  ready: true,
}

// =========================================================================
// Chapter 06 — After the job
// =========================================================================

const first30Days: GuideDownload = {
  slug: 'first-30-days-checklist',
  chapter: 'after-the-job',
  kind: 'checklist',
  label: 'First 30 days',
  title: 'The First 30 Days After Your New Roof',
  intro:
    'A roof done well is mostly invisible after the crew leaves. These are the few things worth doing in the first month to confirm it is settling in right.',
  useTime: 'About 30 minutes total, spread over 4 weeks',
  sections: [
    {
      heading: 'Days 1 to 3',
      items: [
        'Walk the lawn one more time. Run a magnet sweeper if you can borrow one. Nails hide.',
        'Open the attic during the day. Look up. Confirm there is no new daylight visible through the deck.',
        'Confirm you got the warranty registration confirmation by email from the manufacturer. Save it.',
        'File the contract, the final invoice, and the warranty paperwork in one folder. Digital or paper, your choice.',
      ],
    },
    {
      heading: 'Days 4 to 14',
      items: [
        'After the first hard rain, walk the perimeter and check the attic. No new stains, no drips.',
        'Check the gutters for clean water flow. Confirm downspouts are draining away from the foundation.',
        'Look at the ridge from the ground. Should still be straight. No buckling or lifting.',
        'Confirm the dumpster was removed and any waste pickup is closed out.',
      ],
    },
    {
      heading: 'Days 15 to 30',
      items: [
        'Notice the attic temperature. With proper new ventilation, the attic should feel noticeably cooler in summer or drier in winter than before.',
        'Watch for any single shingles lifting in heavy wind. None should. A new roof should be tight.',
        'Confirm your homeowners insurance has the new roof on file. Most carriers give a small premium credit for a new architectural shingle roof. Send the carrier the final invoice.',
        "If you financed through us, confirm the first payment is set up correctly. Service Finance and Enhancify both auto-debit; verify it is on the right account.",
      ],
    },
  ],
  closing:
    "After 30 days, you should not be thinking about the roof at all. If you are, call us. That is the whole point of the workmanship warranty. We come back, no charge, and make it right.",
  ready: true,
}

const maintenanceTimeline: GuideDownload = {
  slug: 'maintenance-timeline',
  chapter: 'after-the-job',
  kind: 'reference',
  label: 'Maintenance timeline',
  title: 'The Roof Maintenance Timeline',
  intro:
    "What a well-maintained NC roof actually needs over its life. Bookmark this. There is less here than you'd think.",
  sections: [
    {
      heading: 'Every year',
      items: [
        'Clean the gutters in November after the leaves fall. Once a year is enough unless you are under oaks.',
        "Walk the perimeter once in spring. Look up. Anything obviously off? If yes, call. If no, you're done for the year.",
        'Trim back any branches that have grown to within 6 feet of the roof. Squirrels use them as bridges, and abrasion wears shingles fast.',
      ],
    },
    {
      heading: 'Year 5',
      items: [
        'Schedule a courtesy roof check with us. Free for our customers. We confirm the flashing seals are tight and the ventilation is still flowing.',
        'Photograph the roof from each side. Compare to year 1 photos. Aging should be even, not patchy.',
      ],
    },
    {
      heading: 'Year 10',
      items: [
        'Second courtesy check. By year 10 you will know if the roof is on track for a 25-year life or a 30-year one.',
        'If you are planning to sell, this is the year to do it for the roof to still command top value.',
      ],
    },
    {
      heading: 'Year 15',
      items: [
        'Start budgeting for replacement. Setting aside $80 a month from year 15 gets you most of the way to a cash replacement at year 25.',
        'If you used architectural shingles, look for any granule loss in patches. Mostly cosmetic at this stage, worth noting.',
      ],
    },
    {
      heading: 'Year 20',
      items: [
        'Get an honest inspection. Decide: another 5 years of life, or plan for replacement in the next 1 to 2 years?',
        'If you plan to sell, sell now. After year 22 most buyers will negotiate a roof credit.',
      ],
    },
    {
      heading: 'Year 25 (or whenever)',
      items: [
        'Replacement time. Start with this guide again, chapter 02.',
      ],
    },
  ],
  closing:
    "A roof is a low-maintenance thing if it was installed well. Most of what you read online about \"annual roof maintenance plans\" is a service designed to sell you a service. Walk the perimeter once a year. Trim branches. Clean gutters. That's it.",
  ready: true,
}

const warrantyExplainer: GuideDownload = {
  slug: 'warranty-explainer',
  chapter: 'after-the-job',
  kind: 'reference',
  label: 'Warranty explainer',
  title: 'Your Warranty, In Plain Words',
  intro:
    "Two warranties cover your new roof. They cover different things. Knowing which one applies when something goes wrong saves you weeks of back-and-forth.",
  sections: [
    {
      heading: 'The manufacturer warranty (the shingles)',
      items: [
        "Covers: defects in the shingles themselves. Premature granule loss, color failure, manufacturing flaws.",
        'Filed by your roofer in your name within 30 days of completion. If you did not get an email confirmation from GAF, Owens Corning, or CertainTeed, ask for it.',
        "Length: 25 to 50 years depending on product and certification. A certified installer (Master Elite, Platinum Preferred) unlocks the longest warranty tiers (Golden Pledge, Platinum, etc.).",
        "Does not cover: leaks from flashing, install error, ice damage, or weather above design ratings.",
        'How to file a claim later: call the manufacturer directly with your warranty number, or call us and we file for you. Either works.',
      ],
    },
    {
      heading: 'The workmanship warranty (how it was installed)',
      items: [
        'Covers: anything that goes wrong because of how the roof was put together. Flashing leaks, nail pops, install defects.',
        'Filed by your roofer with the roofer. There is no third party.',
        "Length: ours is 10 years on workmanship. The industry standard is 1 to 5 years. Ask before you sign with anyone.",
        "Does not cover: storm damage above design ratings, owner-caused damage, or wear from age.",
        "How to file a claim: call your roofer. If the company is gone, the workmanship warranty is gone with it. That is why local matters.",
      ],
    },
    {
      heading: 'When something goes wrong, here is the order',
      items: [
        '1. Call your roofer first. 90% of issues are workmanship, and we fix them at no charge.',
        '2. If the issue turns out to be a manufacturer defect, we file the claim with the manufacturer for you.',
        '3. If it is storm damage above design ratings, that is an insurance claim. We help with the documentation.',
      ],
    },
    {
      heading: 'What voids your warranty',
      items: [
        'Adding a satellite dish, solar panels, or skylights without proper flashing redone. Have us (or any qualified roofer) do the penetration.',
        'Pressure-washing the roof. Never do this.',
        "Inadequate ventilation. If you finish your attic or close off soffit vents, you cook the underside of the shingles. The manufacturer will deny the claim.",
        'Letting another roofer "patch" something. Have us look first. Patches by unqualified hands cancel manufacturer coverage.',
      ],
    },
  ],
  closing:
    "Warranties are written defensively by manufacturers, and we don't pretend otherwise. The workmanship warranty is where 90 percent of real-world issues land, and that one is between you and your roofer. Pick a roofer who will still be here in ten years.",
  ready: true,
}

// =========================================================================
// Export
// =========================================================================

export const DOWNLOADS: GuideDownload[] = [
  // Before the storm (preventive)
  beforeTheStormReadiness,
  // Ch. 01
  photoChecklist,
  groundWalkaroundChecklist,
  repairOrReplaceDecisionTree,
  // Ch. 02
  nineComponents,
  materialsComparison,
  // Ch. 03
  insuranceClaimWalkthrough,
  paymentOptionsWorksheet,
  // Ch. 04
  fiveNonNegotiables,
  twentyQuestions,
  stormChaserRedFlags,
  referenceCheckScript,
  // Ch. 05
  weekBeforePrep,
  endOfDayHandoff,
  // Ch. 06
  first30Days,
  maintenanceTimeline,
  warrantyExplainer,
]

/** Look up a download by slug. */
export function getDownload(slug: string): GuideDownload | undefined {
  return DOWNLOADS.find((d) => d.slug === slug)
}

/** All downloads for a given chapter, in declared order. */
export function getDownloadsForChapter(chapter: ChapterSlug): GuideDownload[] {
  return DOWNLOADS.filter((d) => d.chapter === chapter)
}
