import type { Metadata } from 'next'
import Link from 'next/link'
import {
  absoluteUrl,
  OFFICE_PHONE,
  OFFICE_PHONE_DISPLAY,
  OFFICE_ADDRESS,
  OFFICE_EMAIL,
} from '@/lib/site'
import { GUIDE_STATS } from '@/lib/guide'
import CompanionActions from './_components/CompanionActions'

const UPDATED = 'May 2026'

export const metadata: Metadata = {
  title: "The Pocket Companion | The Honest Roof Guide",
  description:
    "The whole Honest Roof Guide in one printable document. Checklists, cost ranges, the twenty questions to ask any roofer, red flags, install-day notes, and maintenance timeline. No email required.",
  alternates: { canonical: absoluteUrl('/guide/companion') },
  openGraph: {
    title: "The Pocket Companion | NC Roofing Service",
    description:
      "The whole Honest Roof Guide in one printable document. Take it with you.",
    url: absoluteUrl('/guide/companion'),
    type: 'website',
  },
}

export default function CompanionPage() {
  return (
    <article className="companion-doc max-w-3xl mx-auto px-6 sm:px-10 py-10 sm:py-14 text-brand-black">
      <CompanionActions />

      {/* ---------------- COVER ---------------- */}
      <section className="companion-section no-break text-center pt-4 pb-14">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red mb-6">
          From The Honest Roof Guide
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-5">
          The Pocket Companion
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto mb-10">
          The whole guide, condensed into one document you can mark up, walk
          around with, and hand to anyone helping you decide.
        </p>

        <div className="inline-block border-t border-b border-slate-200 py-5 px-8 text-left">
          <div className="text-[13px] text-slate-500 mb-3">
            <span className="font-semibold text-brand-black">Updated:</span>{' '}
            {UPDATED}
          </div>
          <div className="text-[13px] text-slate-500 mb-3">
            <span className="font-semibold text-brand-black">Online:</span>{' '}
            ncroofingservice.com/guide
          </div>
          <div className="text-[13px] text-slate-500">
            <span className="font-semibold text-brand-black">Phone:</span>{' '}
            {OFFICE_PHONE_DISPLAY}
          </div>
        </div>

        <p className="text-[13px] text-slate-500 leading-relaxed max-w-md mx-auto mt-10">
          Take this. Mark it up. Use it to interview roofers. We won&apos;t
          ask for your email. We won&apos;t follow up. If our name comes up
          when you call references, great. If not, you&apos;re still better
          off than you were yesterday.
        </p>
      </section>

      {/* ---------------- HOW TO USE ---------------- */}
      <Section title="How to use this" eyebrow="Two minutes">
        <P>
          This is a working document. It&apos;s designed to be printed front
          and back, stapled, and carried. Or saved as a PDF and emailed to
          a spouse, a parent, or whoever helps you make decisions like this.
        </P>
        <P>Three things will be true while you read it:</P>
        <NumberList>
          <li>
            Every checklist has empty boxes. Use them. Tick what you&apos;ve
            done. Cross out what doesn&apos;t apply.
          </li>
          <li>
            Every number you see is from real jobs we&apos;ve done in North
            Carolina. {GUIDE_STATS.jobsLastYear} of them in 2025. We update
            this document every spring.
          </li>
          <li>
            We&apos;d rather you call a competitor and ask hard questions
            than call us and skip them. If you do that and pick the other
            company, fine. We&apos;ll see you in seven years when their
            warranty company is gone.
          </li>
        </NumberList>
      </Section>

      {/* ---------------- WHERE ARE YOU ---------------- */}
      <Section title="Where are you right now?" eyebrow="Start here">
        <P>
          Skip to the section that matches your situation. The rest will be
          useful later, but you don&apos;t need it tonight.
        </P>

        <Row title="A storm just hit your house">
          Sections to read first: Photo Checklist, Insurance: The Four Steps,
          Storm Chaser Red Flags. Don&apos;t sign anything yet.
        </Row>
        <Row title="Your roof is showing its age">
          Sections to read first: Repair vs Replace, The Nine Components,
          Cost Cheat Sheet, Five Non-negotiables.
        </Row>
        <Row title="You&apos;re buying a home or building one">
          Sections to read first: The Nine Components, Cost Cheat Sheet,
          Glossary, Twenty Questions.
        </Row>
        <Row title="You&apos;ve already got a quote">
          Sections to read first: Five Non-negotiables, Twenty Questions,
          Reference Check, Storm Chaser Red Flags.
        </Row>
      </Section>

      {/* ---------------- REPAIR VS REPLACE ---------------- */}
      <Section title="Repair or replace?" eyebrow="Section 01">
        <P>
          You don&apos;t need a roofer to start. You need five honest
          answers about your roof.
        </P>

        <Checklist
          items={[
            'How old is the current roof? (15+ years tips toward replacement)',
            'How many layers are up there? (More than one means a full tear-off either way)',
            'Are the granules washing out of your gutters in handfuls? (Yes means the shingles are tired)',
            'Are there dark streaks or curled edges visible from the ground?',
            'Has water shown up inside on a ceiling, even once? (Yes means decisions get harder)',
          ]}
        />

        <H4>The age math</H4>
        <P>
          A standard architectural shingle roof in NC lasts 22 to 28 years.
          If your roof is under 12 and the damage is in one spot, repair
          almost always wins. If it&apos;s over 18 and you&apos;re replacing
          shingles in more than one area, you&apos;re spending real money on
          a roof that&apos;s already heading for replacement.
        </P>

        <Callout>
          <strong>The rule we use on our own jobs:</strong> if a repair will
          cost more than 30% of a replacement, we say replace. Anything less,
          we repair.
        </Callout>
      </Section>

      {/* ---------------- NINE COMPONENTS ---------------- */}
      <Section title="The nine components of a real roof" eyebrow="Section 02">
        <P>
          Every quote you get should mention all nine. If a roofer&apos;s
          quote only lists &ldquo;shingles and labor,&rdquo; that&apos;s a
          warning sign, not a deal. Use the checklist when comparing
          quotes. Tick the ones that are spelled out by name in the written
          quote.
        </P>

        <Checklist
          items={[
            'Decking inspection (and repair allowance per sheet)',
            'Drip edge (the metal at the eaves and rakes)',
            'Ice and water shield (valleys, penetrations, eaves)',
            'Synthetic underlayment (across the whole deck)',
            'Starter strip (the first course, sealed)',
            'The shingles or metal panels (with brand and product line)',
            'Ridge cap (the same brand as the shingles)',
            'Ridge and soffit ventilation (intake plus exhaust, balanced)',
            'Flashing (around chimneys, walls, skylights, and pipes)',
          ]}
        />

        <Callout tone="warning">
          <strong>If even one is missing</strong>, ask why. There&apos;s
          almost never a good answer. The most common one a storm chaser
          gives is &ldquo;we use the existing flashing.&rdquo; That&apos;s
          how leaks come back in two years.
        </Callout>
      </Section>

      {/* ---------------- COST CHEAT SHEET ---------------- */}
      <Section title="Cost cheat sheet" eyebrow="Section 03">
        <P>
          These ranges are NC averages for a full nine-component install
          (the list on the previous page). A &ldquo;square&rdquo; is 100
          square feet of roof surface. A typical 2,200 sq ft NC home has
          about 26 to 30 squares of roof.
        </P>

        <Table>
          <Th left="Material" right="Per square, installed" />
          <Td left="Architectural shingle (the standard)" right="$350 to $450" />
          <Td left="Premium / designer shingle" right="$475 to $610" />
          <Td left="Standing-seam metal" right="$1,085 to $1,395" />
        </Table>

        <H4>Add-ons that change the price</H4>
        <BulletList>
          <li>
            <strong>Two-story house:</strong> add about $10 per square. More
            ladder time, more safety setup.
          </li>
          <li>
            <strong>Steep pitch (7/12 to 9/12):</strong> add about $10 per
            square. Slower work.
          </li>
          <li>
            <strong>Very steep (10/12 to 12/12):</strong> add another $10
            per square. Roped and harnessed.
          </li>
          <li>
            <strong>Region:</strong> Triangle and Charlotte are baseline.
            Small towns about 5% less. Mountains and coast about 7% more.
          </li>
          <li>
            <strong>Complexity:</strong> more dormers, valleys, and
            penetrations means more flashing and more time. A complex roof
            is about 22% more than a simple one.
          </li>
        </BulletList>

        <Callout>
          <strong>Run your own numbers:</strong> the calculator at
          ncroofingservice.com/guide/cost-estimator takes six honest
          questions and gives you a real range. No email required. The math
          runs on your phone, in your browser. Nothing leaves your machine.
        </Callout>
      </Section>

      {/* ---------------- INSURANCE: FOUR STEPS ---------------- */}
      <Section title="Insurance: the four steps" eyebrow="Section 04">
        <P>
          If a storm hit, do these four things in this order. Do not call a
          roofer before step two. Do not sign anything before step four.
        </P>

        <NumberList>
          <li>
            <strong>Document everything.</strong> Photos from the ground
            of every side of the house. The date and time of the storm.
            Any debris on the property. Save weather reports for that day.
          </li>
          <li>
            <strong>File the claim with your insurance.</strong> Use the
            policy holder&apos;s name. Be honest, be brief. They will
            schedule an adjuster.
          </li>
          <li>
            <strong>Have a roofer there when the adjuster shows up.</strong>{' '}
            Not a salesperson. A real roofer who will be on the roof. The
            adjuster sees more when someone else is pointing at things.
          </li>
          <li>
            <strong>Get the scope of loss in writing before signing.</strong>{' '}
            The insurance company sends a document called a scope of loss.
            That is the only document that matters. Read it. Question
            anything that&apos;s wrong.
          </li>
        </NumberList>

        <H4>What to say (and not say) to the adjuster</H4>
        <BulletList>
          <li>
            <strong>Do:</strong> point out every spot of damage, even small
            ones. They aggregate.
          </li>
          <li>
            <strong>Do:</strong> ask for a copy of their measurements.
          </li>
          <li>
            <strong>Don&apos;t:</strong> say &ldquo;I think this damage was
            there before.&rdquo; You don&apos;t know.
          </li>
          <li>
            <strong>Don&apos;t:</strong> sign an Assignment of Benefits
            (AOB). It hands your claim to someone else. We don&apos;t use
            them. Honest roofers don&apos;t.
          </li>
        </BulletList>
      </Section>

      {/* ---------------- PAYING FOR IT ---------------- */}
      <Section title="Three ways to pay" eyebrow="Section 05">
        <P>
          Every roof in NC gets paid for one of three ways. They&apos;re
          listed cheapest first. Most people end up with a mix of two.
        </P>

        <Row title="1. Cash">
          <strong>Cheapest path.</strong> No interest, no fees, no monthly
          payment. Ask about a cash discount (usually 2 to 4%). Best if
          you have it sitting and don&apos;t need it for anything more
          urgent.
        </Row>
        <Row title="2. Insurance">
          <strong>Best when there&apos;s real storm damage.</strong> You
          pay your deductible. Insurance pays the rest in two checks. See
          the previous section for the four steps. Don&apos;t let a roofer
          &ldquo;eat your deductible.&rdquo; That&apos;s insurance fraud.
        </Row>
        <Row title="3. Financing">
          <strong>For when cash isn&apos;t there.</strong> Two real lenders
          to look at: GreenSky (fast, common roofer-affiliated) and your
          own credit union (slower, usually cheaper). Avoid anything
          presented as a &ldquo;same-as-cash&rdquo; deal without reading
          the back side. There&apos;s always a back side.
        </Row>

        <Callout>
          <strong>The fine print rule:</strong> if a financing offer
          can&apos;t be explained in three sentences, it&apos;s designed
          to confuse you. Walk away from anything you don&apos;t understand
          after one read.
        </Callout>
      </Section>

      {/* ---------------- FIVE NON-NEGOTIABLES ---------------- */}
      <Section title="Five non-negotiables" eyebrow="Section 06">
        <P>
          Five things a roofer must have before you give them your money.
          No exceptions. If they get defensive about any of these, the
          conversation is over.
        </P>

        <Checklist
          items={[
            "Active North Carolina general contractor's license (verify on the NC Licensing Board website, free in two minutes)",
            "General liability insurance, at least $1 million, current",
            "Workers' comp insurance covering everyone they bring on your property",
            "A real local address you can drive to (not a PO box, not a virtual office)",
            "Three references from jobs done in the last 24 months, with phone numbers (see Reference Check Script)",
          ]}
        />

        <Callout tone="warning">
          <strong>The address one trips up storm chasers every time.</strong>{' '}
          Out-of-state companies will show you a Raleigh PO box and call it
          local. Ask for the street address of the office. Drive by. If
          it&apos;s a UPS Store, you have your answer.
        </Callout>
      </Section>

      {/* ---------------- TWENTY QUESTIONS ---------------- */}
      <Section title="Twenty questions to ask any roofer" eyebrow="Section 07">
        <P>
          Ask all twenty. Don&apos;t pre-rank. The pattern of answers
          matters more than any single answer. A real roofer will answer
          all of them without hesitation. A storm chaser will dodge five
          to seven.
        </P>

        <H4>About the company (1 to 5)</H4>
        <Checklist
          items={[
            "What's your North Carolina license number?",
            "What's your physical office address? Can I stop by?",
            "How long have you been in business under this name?",
            "Are you the owner, or do you work for someone? (If salesperson, ask who you'll never see again)",
            "Who's the project manager on my job? Will I have their cell phone?",
          ]}
          startIndex={1}
        />

        <H4>About the work (6 to 12)</H4>
        <Checklist
          items={[
            "Will you install all nine components? (Hand them this guide and let them point at the list)",
            "What brand of shingles? What product line within that brand?",
            "What underlayment? Synthetic only, or do you ever use felt?",
            "Where exactly will the ice and water shield go?",
            "What ventilation do you propose? Intake and exhaust both?",
            "Are you tearing off the existing roof, or laying over it?",
            "What's your decking-repair charge per sheet if you find rot?",
          ]}
          startIndex={6}
        />

        <H4>About the warranty (13 to 17)</H4>
        <Checklist
          items={[
            "What's the manufacturer warranty length, and are you certified to register it?",
            "What's your workmanship warranty? How many years, in writing?",
            "If you go out of business in five years, who honors the workmanship warranty?",
            "Can I see a sample warranty document before signing?",
            "What voids the warranty? (Some are common-sense, some are traps)",
          ]}
          startIndex={13}
        />

        <H4>About money (18 to 20)</H4>
        <Checklist
          items={[
            "Do you require a deposit? How much, and when? (Anything over 10% upfront is a red flag)",
            "How and when is the rest paid?",
            "If insurance is paying, are you billing them direct or am I writing the checks? (You write the checks. Always.)",
          ]}
          startIndex={18}
        />
      </Section>

      {/* ---------------- STORM CHASER RED FLAGS ---------------- */}
      <Section title="Storm chaser red flags" eyebrow="Section 08">
        <P>
          A storm chaser is a roofing crew that shows up in town after a
          hailstorm, sells aggressively for two months, takes the deposit
          money, does the work fast and cheap (or not at all), and is gone
          before the first leak. They follow weather radar. They don&apos;t
          live here.
        </P>

        <P>
          They&apos;re not all out-of-state. Some are local outfits that
          act this way. Watch for the pattern, not the license plate.
        </P>

        <H4>The pattern</H4>
        <Checklist
          items={[
            'They knocked on your door uninvited and said they "noticed damage" from the street',
            'They offer to "handle the insurance for you" (especially with an Assignment of Benefits)',
            'They offer to "eat your deductible" or call it a "no out of pocket" job (this is insurance fraud)',
            'They want a large deposit (more than 10%) before any work',
            'They use high-pressure tactics: "today only," "we already have a crew in your neighborhood," "prices go up Monday"',
            'They can\'t answer the questions about flashing, underlayment, ridge cap brand',
            'They drive a vehicle with out-of-state plates and a magnetic sign',
            'Their website is one page, no team photos, no real reviews older than 3 months',
            'The local address is a UPS Store or virtual office',
            'They won\'t leave you a written proposal to sleep on',
          ]}
        />

        <Callout tone="warning">
          <strong>The simplest filter we know:</strong> ask them to come
          back in a week. A real roofer says &ldquo;sure.&rdquo; A storm
          chaser says no, because they won&apos;t be in your town in a
          week.
        </Callout>
      </Section>

      {/* ---------------- REFERENCE CHECK SCRIPT ---------------- */}
      <Section title="Reference check script" eyebrow="Section 09">
        <P>
          Most people skip the reference check or do it badly. Don&apos;t
          ask &ldquo;were they good?&rdquo; You&apos;ll get &ldquo;yeah,
          they were great.&rdquo; Useless. Ask these questions instead.
          Take notes. Read your notes after.
        </P>

        <NumberList>
          <li>
            <strong>&ldquo;Hi, I&apos;m considering hiring [Company Name].
            They gave me your number as a reference. Do you have five
            minutes?&rdquo;</strong>
            <br />
            <span className="text-slate-500 text-sm">
              (If they sound confused or like they were primed, take note.)
            </span>
          </li>
          <li>
            &ldquo;When did they do the job?&rdquo;
            <br />
            <span className="text-slate-500 text-sm">
              You want something from at least 18 months ago, so leaks
              would have shown up.
            </span>
          </li>
          <li>
            &ldquo;Did anything go wrong during the install?&rdquo;
            <br />
            <span className="text-slate-500 text-sm">
              The honest answer is always yes (something always goes
              wrong). Listen for what they did about it.
            </span>
          </li>
          <li>
            &ldquo;How did they handle the cleanup?&rdquo;
            <br />
            <span className="text-slate-500 text-sm">
              A real roofer does a magnet sweep. The yard should be cleaner
              than it was.
            </span>
          </li>
          <li>
            &ldquo;Was the final invoice the same as the original
            estimate?&rdquo;
            <br />
            <span className="text-slate-500 text-sm">
              If not, why? Were they upfront about the change?
            </span>
          </li>
          <li>
            &ldquo;Have you had any leaks since they finished?&rdquo;
            <br />
            <span className="text-slate-500 text-sm">
              If yes, how did the roofer respond?
            </span>
          </li>
          <li>
            &ldquo;Would you hire them again?&rdquo;
            <br />
            <span className="text-slate-500 text-sm">
              The most diagnostic question. Listen for the pause before
              the answer.
            </span>
          </li>
          <li>
            &ldquo;Is there anything I should ask them that I haven&apos;t
            thought of?&rdquo;
            <br />
            <span className="text-slate-500 text-sm">
              This often produces the most honest comment of the whole
              call.
            </span>
          </li>
        </NumberList>
      </Section>

      {/* ---------------- INSTALL DAY ---------------- */}
      <Section title="Install day: what should happen" eyebrow="Section 10">
        <P>
          A normal NC roof replacement is one or two days for an
          experienced crew of four to six. Here&apos;s what should happen,
          and what shouldn&apos;t.
        </P>

        <H4>The day before</H4>
        <Checklist
          items={[
            'Move cars out of the driveway. Park on the street if you have to.',
            'Take down anything on walls inside that might shake (pictures, mirrors, plates)',
            'Cover anything in the attic you care about (boxes, holiday decorations) with a tarp or sheet',
            'Move grills, patio furniture, and outdoor decorations 15 feet from the house',
            'Tell the neighbors the dumpster is coming and apologize in advance for the noise',
          ]}
        />

        <H4>What should happen during install</H4>
        <Checklist
          items={[
            "Crew arrives between 7 and 8 a.m. The dumpster's already there or comes that morning.",
            'Tear-off starts on one side, never the whole roof at once (weather risk)',
            'Decking is inspected as it&apos;s exposed. Bad sheets are replaced. You should be told before they replace anything outside the agreed allowance.',
            'Drip edge, ice and water shield, underlayment, starter strip, then the shingles',
            'Flashing replaced new (not reused) at every chimney, wall, and skylight',
            'Magnetic sweep of the yard at the end of each day. Then again at the end of the job.',
          ]}
        />

        <H4>What shouldn&apos;t happen</H4>
        <Checklist
          items={[
            'A different crew than the one promised',
            'Material delivered to the curb still in unbroken pallets at noon (means a stalled job)',
            'Old flashing being reused',
            'Cigarette butts in your yard at end of day',
            "An invoice for &ldquo;extras&rdquo; you weren't told about during the work",
          ]}
        />

        <H4>End-of-day handoff</H4>
        <P>
          Before the crew leaves on the final day, you should walk the
          perimeter with the foreman. They point out: where the old roof
          was bad, what they replaced beyond the allowance (if anything),
          and what the next steps are. They hand you the warranty
          registration. You sign off only after the walk.
        </P>
      </Section>

      {/* ---------------- FIRST 30 + MAINTENANCE ---------------- */}
      <Section title="First 30 days and a year-by-year plan" eyebrow="Section 11">
        <H4>The first 30 days</H4>
        <Checklist
          items={[
            'Walk the perimeter at end of week 1. Look for stray nails or shingle fragments.',
            'After the first heavy rain, check the attic with a flashlight. Look for any sign of moisture, anywhere.',
            'Save the warranty paperwork in two places (paper and digital). Note the install date.',
            'Look at the roof from across the street. Anything obviously off? Photograph it. Send to the roofer.',
            "If anything seems wrong, call before day 30. Most workmanship issues are obvious in the first month.",
          ]}
        />

        <H4>Year 1</H4>
        <BulletList>
          <li>
            Twice-yearly gutter cleaning (spring and fall). Granules from a
            new roof are normal. After year two they shouldn&apos;t be
            heavy anymore.
          </li>
          <li>
            After any storm with winds over 50 mph, look at the roof from
            the ground. Take photos.
          </li>
        </BulletList>

        <H4>Years 2 to 7</H4>
        <BulletList>
          <li>Annual gutter clean, once a year is enough by year three.</li>
          <li>
            Look at the flashing around the chimney every two years. Caulk
            cracks if you see them.
          </li>
          <li>
            Trim any branches that are now touching the roof. Branches
            against shingles wear them out.
          </li>
        </BulletList>

        <H4>Years 8 to 15</H4>
        <BulletList>
          <li>
            Ask a roofer to walk it every five years. We do this free for
            our own jobs. Most honest roofers do.
          </li>
          <li>
            Watch for shingle granules in the gutter. A spike means
            shingles are aging.
          </li>
          <li>
            Look at the soffit and fascia. Paint peeling means moisture
            issues that have nothing to do with the shingles.
          </li>
        </BulletList>

        <H4>Years 16 to 22</H4>
        <BulletList>
          <li>You&apos;re in the back stretch. Start planning the budget.</li>
          <li>
            Don&apos;t spend more than $1,500 on repairs in any single
            year. At that point, replace.
          </li>
          <li>
            Get a fresh quote every two years. Prices change. You want a
            current number.
          </li>
        </BulletList>
      </Section>

      {/* ---------------- PHOTO CHECKLIST ---------------- */}
      <Section title="Photo checklist (after a storm)" eyebrow="Section 12">
        <P>
          The morning after a storm, before anyone touches anything, take
          these photos. They&apos;re your evidence for insurance, for
          comparing roofer reports, and for your own memory.
        </P>

        <Checklist
          items={[
            'Wide shot of each of the four sides of your house, from the property line',
            'Roof from the ground, every side, zoomed as much as your phone allows',
            'Any debris on the roof (branches, shingles, anything that doesn&apos;t belong)',
            'Any shingles or shingle fragments on the ground or in the gutters',
            'Damaged or dented gutters, downspouts, vents, flashing',
            'Any damage to siding, windows, screens, deck, fence (insurance covers more than just the roof)',
            'Dings on the AC condenser fins or the BBQ grill lid (great evidence for hail)',
            'Water stains on any ceiling or wall, even small ones, inside the house',
            'Date and time stamp every photo (most phones do this automatically)',
          ]}
        />

        <Callout>
          <strong>The trick most people miss:</strong> photograph the
          neighbors&apos; houses too (from your property). Insurance
          adjusters look at the whole neighborhood. If three houses on the
          street had hail damage and you only have one photo of your roof,
          they sometimes deny. Multiple data points help.
        </Callout>
      </Section>

      {/* ---------------- GLOSSARY ---------------- */}
      <Section title="Glossary" eyebrow="Section 13">
        <P>
          Twenty terms a roofer will say. Plain English definitions, no
          jargon. Use this when you read a quote.
        </P>

        <Def term="Square">
          100 square feet of roof surface. The standard unit roofers price
          by.
        </Def>
        <Def term="Pitch">
          How steep the roof is. Expressed as rise over run, like
          &ldquo;6/12&rdquo; (6 inches up for every 12 inches across).
        </Def>
        <Def term="Decking (or sheathing)">
          The wood under the shingles. Usually plywood or OSB. Replaced
          where it&apos;s soft or rotten.
        </Def>
        <Def term="Underlayment">
          The waterproof layer between the decking and the shingles.
          Synthetic is current standard; felt is older.
        </Def>
        <Def term="Ice and water shield">
          A self-sealing waterproof membrane. Goes in valleys, around
          chimneys and vents, and along the eaves.
        </Def>
        <Def term="Drip edge">
          The metal strip at the edges of the roof. Sends water into the
          gutters instead of behind them.
        </Def>
        <Def term="Starter strip">
          The first row of shingles, glued at the edge. Critical for wind
          resistance.
        </Def>
        <Def term="Ridge cap">
          The shingles that go on top of the peak. Should be the same brand
          as the main shingles.
        </Def>
        <Def term="Soffit">
          The horizontal underside of the eave. Often has vents for intake
          air.
        </Def>
        <Def term="Fascia">
          The vertical board at the edge of the roof. The gutter is bolted
          to it.
        </Def>
        <Def term="Flashing">
          Sheet metal that seals where the roof meets a wall, a chimney,
          or a skylight. Should be replaced new, not reused.
        </Def>
        <Def term="Valley">
          The V where two roof planes meet. Most leaks start here.
        </Def>
        <Def term="Dormer">
          A small roof structure that sticks out of a main roof, usually
          for a window.
        </Def>
        <Def term="Penetration">
          Any hole through the roof: vent, pipe, chimney, skylight. Each
          one needs sealing.
        </Def>
        <Def term="Ventilation">
          Airflow through the attic. Needs intake (soffit) and exhaust
          (ridge). Bad ventilation kills shingles early.
        </Def>
        <Def term="Tear-off">
          Removing the old roof down to the deck. The honest way.
        </Def>
        <Def term="Layover (or roof-over)">
          Putting new shingles on top of old ones. Saves money short term,
          costs money long term. Avoid.
        </Def>
        <Def term="Scope of loss">
          The insurance company&apos;s document listing exactly what
          they&apos;ll pay for. The only insurance document that matters.
        </Def>
        <Def term="AOB (Assignment of Benefits)">
          A form that hands your insurance claim to your roofer. Avoid.
        </Def>
        <Def term="Workmanship warranty">
          The roofer&apos;s warranty on their labor (separate from the
          manufacturer&apos;s warranty on materials).
        </Def>
      </Section>

      {/* ---------------- BACK COVER ---------------- */}
      <Section title="If you want to talk to a person" eyebrow="Back cover">
        <P>
          We&apos;re NC Roofing Service. We&apos;ve been in North Carolina
          for years. We replaced {GUIDE_STATS.jobsLastYear} roofs in 2025,
          across the Triangle, Charlotte, and the Blue Ridge.
        </P>

        <P>
          If you use this document to interview five roofers and pick one
          of the others, that&apos;s fine. You&apos;ll have done your
          homework. That was the point.
        </P>

        <P>
          If you want to talk to us, here&apos;s how:
        </P>

        <div className="border-y border-slate-200 py-5 my-6">
          <div className="text-[15px] mb-2">
            <span className="font-semibold">Phone:</span> {OFFICE_PHONE_DISPLAY}{' '}
            <span className="text-slate-500">(real person, no script)</span>
          </div>
          <div className="text-[15px] mb-2">
            <span className="font-semibold">Email:</span> {OFFICE_EMAIL}
          </div>
          <div className="text-[15px] mb-2">
            <span className="font-semibold">Office:</span>{' '}
            {OFFICE_ADDRESS.street}, {OFFICE_ADDRESS.city},{' '}
            {OFFICE_ADDRESS.region} {OFFICE_ADDRESS.postalCode}
          </div>
          <div className="text-[15px]">
            <span className="font-semibold">Online:</span>{' '}
            ncroofingservice.com/guide
          </div>
        </div>

        <P>
          We&apos;ll come walk your roof, take drone photos, and give you
          a written quote in 30 minutes on-site. No deposit, no obligation,
          no follow-up call unless you ask for one.
        </P>

        <p className="text-[13px] text-slate-500 leading-relaxed mt-10 pt-6 border-t border-slate-200">
          This document is updated every spring. The current online version
          is the source of truth, always free at
          ncroofingservice.com/guide/companion. If you&apos;re reading a
          printed copy older than a year, the prices and lender notes are
          probably out of date. Everything else still applies.
        </p>

        <p className="text-center text-[12px] text-slate-400 mt-10 print-hide">
          <Link href="/guide" className="hover:text-brand-red">
            ncroofingservice.com/guide
          </Link>
          {' · '}
          <Link href="/guide/cost-estimator" className="hover:text-brand-red">
            Cost estimator
          </Link>
          {' · '}
          Updated {UPDATED}
        </p>
      </Section>
    </article>
  )
}

// ---------------------------------------------------------------------------
// Subcomponents. All purely presentational. Kept inline for one-file
// readability and easy editing.

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string
  eyebrow?: string
  children: React.ReactNode
}) {
  return (
    <section className="companion-section pt-10 pb-2">
      {eyebrow && (
        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 leading-tight">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>
}

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-base font-bold text-brand-black mt-6 mb-2">
      {children}
    </h4>
  )
}

function NumberList({ children }: { children: React.ReactNode }) {
  return (
    <ol className="list-decimal list-outside ml-5 space-y-3 marker:text-brand-red marker:font-bold">
      {children}
    </ol>
  )
}

function BulletList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-outside ml-5 space-y-2 marker:text-brand-red">
      {children}
    </ul>
  )
}

function Checklist({
  items,
  startIndex,
}: {
  items: string[]
  startIndex?: number
}) {
  return (
    <ul className="space-y-2 my-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 row">
          <span
            className="mt-1 inline-block w-4 h-4 border-2 border-slate-400 rounded-[2px] flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-[15px] leading-relaxed">
            {startIndex !== undefined && (
              <span className="font-bold text-brand-red mr-2">
                {startIndex + i}.
              </span>
            )}
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

function Row({
  title,
  children,
}: {
  title: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="row border-l-2 border-brand-red pl-4 py-1 my-3">
      <div className="font-bold text-brand-black mb-1">{title}</div>
      <div className="text-[15px] text-slate-700 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function Callout({
  children,
  tone = 'default',
}: {
  children: React.ReactNode
  tone?: 'default' | 'warning'
}) {
  return (
    <div
      className={`my-5 p-4 rounded-md border ${
        tone === 'warning'
          ? 'border-brand-red/30 bg-brand-red/5'
          : 'border-slate-300 bg-slate-50'
      }`}
    >
      <p className="text-[14px] leading-relaxed text-slate-700">{children}</p>
    </div>
  )
}

function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 border border-slate-300 rounded-md overflow-hidden">
      <div className="divide-y divide-slate-200">{children}</div>
    </div>
  )
}

function Th({ left, right }: { left: string; right: string }) {
  return (
    <div className="row grid grid-cols-[2fr_1fr] gap-3 px-4 py-2.5 bg-slate-100 text-[12px] font-bold uppercase tracking-[0.12em] text-slate-600">
      <span>{left}</span>
      <span className="text-right">{right}</span>
    </div>
  )
}

function Td({ left, right }: { left: string; right: string }) {
  return (
    <div className="row grid grid-cols-[2fr_1fr] gap-3 px-4 py-3 text-[14px]">
      <span>{left}</span>
      <span className="text-right font-semibold text-brand-black">{right}</span>
    </div>
  )
}

function Def({
  term,
  children,
}: {
  term: string
  children: React.ReactNode
}) {
  return (
    <div className="row py-2 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-4 border-b border-slate-100 last:border-0">
      <dt className="font-bold text-brand-black text-[14px]">{term}</dt>
      <dd className="text-[14px] text-slate-700 leading-relaxed">{children}</dd>
    </div>
  )
}
