import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  absoluteUrl,
  OFFICE_PHONE,
  OFFICE_PHONE_DISPLAY,
  OFFICE_ADDRESS,
  OFFICE_EMAIL,
} from '@/lib/site'
import {
  VERIFY_NC_LICENSE,
  VERIFY_GAF,
  VERIFY_CERTAINTEED,
  VERIFY_FORTIFIED,
} from '@/lib/verification-links'
import { JOURNEY_BANDS, getMomentsForPhase } from '@/lib/guide-journey'
import CompanionActions from './_components/CompanionActions'

const UPDATED = 'May 2026'
const GUIDE_NAME = 'The Honest Roof Field Guide'

export const metadata: Metadata = {
  title: `${GUIDE_NAME} | The Honest Roof Guide`,
  description:
    "A tight, printable field guide for before, during, and after a roof decision. Scan a QR code to open the right tool on the spot, then follow the twelve moments where a roofer might pressure you to sign. No email required.",
  alternates: { canonical: absoluteUrl('/guide/companion') },
  openGraph: {
    title: `${GUIDE_NAME} | NC Roofing Service`,
    description:
      'The twelve moments to watch for when you need a new roof. What to say, what to ask, what to avoid.',
    url: absoluteUrl('/guide/companion'),
    type: 'website',
  },
}

export default function CompanionPage() {
  return (
    <article className="companion-doc max-w-3xl mx-auto px-6 sm:px-10 py-10 sm:py-14 text-brand-black">
      <CompanionActions />

      {/* ---------------- COVER ---------------- */}
      <section className="companion-section no-break text-center pt-4 pb-12">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red mb-6">
          From The Honest Roof Guide
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-5">
          The Honest Roof Field Guide
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto mb-8">
          The twelve moments a homeowner lives through when they need a
          new roof. What to say, what to ask, what to watch for. And what
          an honest roofer does in return.
        </p>

        <div className="inline-block border-t border-b border-slate-200 py-5 px-8 text-left">
          <div className="text-[13px] text-slate-500 mb-2">
            <span className="font-semibold text-brand-black">Updated:</span>{' '}
            {UPDATED}
          </div>
          <div className="text-[13px] text-slate-500 mb-2">
            <span className="font-semibold text-brand-black">Online:</span>{' '}
            ncroofingservice.com/guide
          </div>
          <div className="text-[13px] text-slate-500">
            <span className="font-semibold text-brand-black">Phone:</span>{' '}
            {OFFICE_PHONE_DISPLAY}
          </div>
        </div>

        <p className="text-[13px] text-slate-500 leading-relaxed max-w-md mx-auto mt-8">
          Print it. Fold it. Keep it on the counter. Use it during the phone
          call, the kitchen-table pitch, and the day the adjuster shows up.
          We won&apos;t ask for your email. If you use this to interview
          five roofers and pick one of the others, that&apos;s fine.
          You&apos;ll have done your homework. That was the point.
        </p>
      </section>

      {/* ---------------- SCAN HERE: QUICK START ---------------- */}
      <section className="companion-section">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red mb-3 text-center">
          Scan here
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1] mb-4 text-center">
          Jump straight to the tool you need.
        </h2>
        <p className="text-[15px] leading-relaxed text-slate-700 max-w-2xl mx-auto text-center mb-10">
          Point any phone camera at a code to open the live tool. No app, no
          login. Whether you&apos;re getting ready before a storm or standing on
          the lawn after one, start with the row that matches where you are.
        </p>

        {JOURNEY_BANDS.map((band) => {
          const moments = getMomentsForPhase(band.phase)
          if (moments.length === 0) return null
          return (
            <div key={band.phase} className="mb-9">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red mb-3 pb-1.5 border-b border-slate-200">
                {band.label}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                {moments.map((moment) => (
                  <div key={moment.id} className="row flex items-center gap-4">
                    <Image
                      src={`/qr/guide-${moment.id}.png`}
                      alt={`QR code to ${moment.primary.label}`}
                      width={120}
                      height={120}
                      loading="eager"
                      className="w-[72px] h-[72px] flex-shrink-0 border border-slate-200 rounded-md bg-white p-1"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-brand-black text-[15px] leading-snug">
                        {moment.label}
                      </div>
                      <div className="text-[13px] text-slate-600 leading-snug mt-0.5">
                        {moment.question}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 break-all">
                        ncroofingservice.com{moment.qrTarget}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        <p className="text-[13px] text-slate-500 leading-relaxed text-center mt-2">
          Prefer a real person? Call {OFFICE_PHONE_DISPLAY}. No script, no sales
          call.
        </p>
      </section>

      {/* ---------------- THE PAUSE CARD ---------------- */}
      <section className="companion-section text-center">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red mb-4">
          Before everything else
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1] mb-10">
          Three sentences that cover most of this guide.
        </h2>

        <div className="space-y-7 max-w-xl mx-auto text-left">
          <PauseRule
            n={1}
            text="No good roofer needs a decision tonight."
          />
          <PauseRule
            n={2}
            text="Anyone pressuring you to sign is selling, not solving."
          />
          <PauseRule
            n={3}
            text={
              <>
                The right answer to pressure is always:{' '}
                <span className="text-brand-red">
                  &ldquo;I&apos;ll get back to you tomorrow.&rdquo;
                </span>
              </>
            }
          />
        </div>

        <p className="text-[14px] text-slate-500 leading-relaxed max-w-md mx-auto mt-12">
          If you read no further than this page, you&apos;ve already
          avoided the most expensive mistakes most homeowners make. The
          rest of this guide is just the specific words and questions for
          twelve specific moments.
        </p>
      </section>

      {/* ---------------- THE TEN MOMENTS ---------------- */}

      <Moment
        n="01"
        title="Someone knocks on your door"
        whats={`Someone is on your porch. They want to talk about your roof. The story is almost always similar: "We noticed your neighbor's roof and yours looks like it has the same damage." There's a real difference between a professional canvasser working a neighborhood where they already have customers, and a storm chaser following weather radar across state lines. The first sixty seconds tell you which one is on the porch.`}
        why={`First impressions aren't a small thing. The way a roofer introduces themselves at the door is the way they'll handle every transaction afterward, including the warranty call three years from now. Credentials offered up front, in writing, with a license number you can verify, is how the good version of this conversation starts.`}
        say={`"I'll take your card. If I want to talk, I'll call you. What's your physical office address?"`}
        ask={`"What's your North Carolina license number?" Write it down. Verify it later at ${VERIFY_NC_LICENSE.display} (free, two minutes).`}
        flags={[
          "They can't recite their NC license number from memory",
          'They drive an unmarked truck or one with out-of-state plates',
          'They want to "go up on the roof right now while we\'re here"',
          'They imply your neighbor already signed',
          "They get hostile when you don't decide on the spot",
          "They won't hand you a printed business card with a physical office address on it",
        ]}
        honestRoofer={`Yes, real roofers sometimes knock too. The difference is in the how. After a storm we may work the neighborhoods where we already have a customer, knocking with their permission so neighbors hear it from someone they know. When we do, we identify ourselves with a printed card showing our NC license number (verifiable at ${VERIFY_NC_LICENSE.display}), a marked truck with NC plates, and we send our Certificate of Insurance before anyone climbs anything. We leave when you say not interested, no hard sell, no follow-up the next morning. From your side, if a real local roofer takes the time to come introduce themselves, take the card — two minutes spent verifying them later could save you a roof.`}
      />

      <Moment
        n="02"
        title="They want to inspect for free"
        whats={`A roofer offers to climb your roof at no charge. Most do. The free inspection is the foot in the door — the photos they take and the story they build from them become either an insurance claim or a sales pitch. They'll often have photos of damaged roofs from other jobs ready to show. You won't always know which ones are yours.`}
        why={`What gets photographed in the next twenty minutes becomes the starting point for everything that follows. Inaccurate photos rarely get corrected. Once a story exists in someone's notes — "extensive hail damage on the north slope" — removing it later is harder than not letting it get written. And before anyone sets foot on your roof, you need their proof of insurance in your hand. If an uninsured worker falls on your property, your homeowner's policy can end up paying the bill.`}
        say={`"Before anyone goes up, I'd like a copy of your Certificate of Insurance. And every photo you take comes to my phone before you leave the property."`}
        ask={`"Can I get the address and date of three other roofs you've inspected this month?" A real local roofer can answer this. A traveler can't, or invents one.`}
        flags={[
          "They can't or won't produce a current Certificate of Insurance before climbing",
          'They came back down faster than five minutes',
          "They have damage photos but you can't recognize any feature of your house",
          'They want you to sign an "inspection agreement" or "authorization to represent" for a free inspection',
          'They take photos but won\'t share them',
          '"This can\'t wait, you have to file the claim today"',
        ]}
        honestRoofer={`Yes, we inspect for free. We now use a drone for the first pass on most roofs — fewer feet on your roof means less risk of accidental damage and a faster, more thorough photo record. If we do need to climb, we send our Certificate of Insurance ahead of time so you can verify our general liability and workers' comp are current (call the agent listed on the cert, takes two minutes). We send you every photo before we leave, and we tell you "your roof is fine" when it is. From your side: never let anyone on your roof without a current Certificate of Insurance in hand, and only ask for an inspection if you're seriously considering work — a roofer's time on your roof is real time.`}
      />

      <Moment
        n="03"
        title="The kitchen-table pitch"
        whats={`A salesperson is sitting across from you with a folder. The folder is built to make the decision feel inevitable: glossy materials, shingle samples, a tablet ready for a digital signature. The phrases will sound like "we're already in the neighborhood," "today only," "your insurance is paying anyway."`}
        why={`Pressure in this moment is how five-figure decisions become regrets. The discount that "expires tonight" was almost always going to be the price either way. A salesperson who needs your signature today is telling you their entire follow-up plan depends on you not having time to think.`}
        say={`"I appreciate you coming. I'm getting three quotes and I'll make a decision in two weeks."`}
        ask={`"If I called you back in two weeks with a yes, would the price still stand?" A real roofer says yes without flinching.`}
        flags={[
          'Visible frustration when you mention the two-week timeline',
          'A discount only valid tonight',
          'Pressure to sign on their tablet right now',
          '"We have a crew finishing nearby, we can start tomorrow"',
          'They mention financing before you mention how you\'re paying',
          '"Your insurance is paying for all of this anyway" (no: your insurance pays a specific scope of loss, and you sign the checks)',
        ]}
        honestRoofer={`Yes, we sit at kitchen tables too. The difference is what we bring and what we don't bring. We bring a written estimate, shingle samples if you want to see them, copies of our license and insurance, and any manufacturer certifications you ask to verify (we're GAF Certified, CertainTeed Credentialed, and Fortified-trained — verifiable at ${VERIFY_GAF.display}, ${VERIFY_CERTAINTEED.display}, and ${VERIFY_FORTIFIED.display}). We do not bring a tablet for instant signatures, a folder of "today only" pricing, or manufactured urgency. We follow up once, in a week, with a polite check-in. From your side, if you tell three roofers you'll decide in two weeks, then decide in two weeks — even a clear no lets the others move on and serve the next homeowner waiting for a slot.`}
      />

      <Moment
        n="04"
        title="The insurance adjuster shows up"
        whats={`An employee of your insurance company is climbing your roof. Their job, on paper, is to fairly assess damage. Their incentive is to minimize the payout. Who's standing next to them changes what gets written down on the scope of loss.`}
        why={`The scope of loss the adjuster writes on this visit is the legal document everything downstream depends on. What's missed in this hour can cost you five to fifteen thousand dollars in real damage you'll pay for yourself later. Once a claim is closed, reopening it is slow and rarely fully successful.`}
        say={`"I'd like a copy of your photos and your measurements before you leave today."`}
        ask={`"Will you flag every dent on the soft metal? Gutters, vent covers, AC fins?" Hail evidence on soft metal is often what tips a claim from denied to approved.`}
        flags={[
          'The adjuster discourages you from having a roofer there',
          'They go up alone and come down in under ten minutes',
          'They want to mark only "obvious" damage and skip the rest',
          'They offer to write you a check on the spot to "wrap it up"',
          '"This isn\'t covered" without showing you the policy language',
          'They use the word "wear" repeatedly',
        ]}
        honestRoofer={`We meet your adjuster at no charge. We bring a clipboard and a phone. We point at the damage we see, we don't perform for the camera. We don't pressure the adjuster, we don't write the scope, and we don't run your claim for you. We help you read what was written. From your side, be present for the visit (not by phone), and pay your deductible when it comes due — anyone offering to "absorb" or "waive" it is offering you fraud, and the IRS or your insurance company can come back on you, not them.`}
      />

      <Moment
        n="05"
        title="They hand you an agreement"
        whats={`A roofer is asking you to sign paper. In an insurance claim there are typically three or four separate documents you'll be asked to sign at different points, and each one means something different. Knowing which is which (and when to sign which) is most of the protection here. There is no neutral document at any of these stages — every one was written by their lawyer to protect them.`}
        why={`Each of these documents shifts leverage. Sign the wrong one too early and you've handed over choices you didn't realize were choices. The most expensive mistakes in residential roofing happen when a homeowner signs something they didn't fully read because the moment felt urgent.`}
        say={`"I'll take this home tonight, read it through, and call you tomorrow with any questions."`}
        ask={`"Which document is this? Is it the contingency, the scope of work, the main contract, or something else? Will you walk me through exactly what I'm agreeing to?"`}
        special={{
          title: 'The four documents you may be asked to sign',
          items: [
            'CONTINGENCY AGREEMENT — Short. Signed early (sometimes the same day as the first inspection). Says you will use this roofer IF your insurance approves the claim. Required language: a 3-day right to cancel, an end date if no claim is filed within 60-90 days, no penalty if you cancel, and zero Assignment-of-Benefits clauses. Some roofers hide AOB inside the contingency.',
            'SCOPE OF WORK / SCOPE OF LOSS — The insurance company\'s written list of damage and what they will pay to repair. You AND the roofer should both agree this matches the actual condition of the roof BEFORE work starts. Missing items here become out-of-pocket bills later. Ask the roofer to file written supplements with your carrier if the scope is short.',
            'ROOFING CONTRACT — The main one. Names your project manager by name, the start date, the brand and product line of shingles, every line item (drip edge, ice and water shield, underlayment, flashing, vents), the per-sheet decking-repair rate, the workmanship warranty in years, and the written-change-order policy. Deposit should be 10% or less. No AOB. No "we will cover your deductible." No notary in the truck.',
            'CERTIFICATE OF COMPLETION — Signed at the very end, after the install (see Moment 09). This is the document that releases the insurance company\'s final payment. Never sign it before the walk-around, the punch list, the lien waiver, and the warranty registration are all done.',
          ],
        }}
        flags={[
          'They get defensive about line-by-line review of any document',
          '"Everyone signs this version"',
          '"It\'s just standard lawyer language"',
          'The contingency agreement and the roofing contract are bundled into one document (they should be separate)',
          'AOB or "company shall act as homeowner\'s representative with insurance carrier" hidden inside the contingency',
          '"We will cover your deductible" or "no out of pocket." This is insurance fraud. Walk away.',
          '"Lifetime warranty" with no manufacturer name attached',
          'A contract that is only one page',
          'They have a notary in the truck "for convenience"',
        ]}
        honestRoofer={`Our paperwork is plain, separate, and walked through with you. If you're in a claim, our contingency is a short document that only says we'll do the work if your insurance approves it — with a clear 3-day right to cancel and no Assignment of Benefits, ever. We review the scope of work with you so you understand what the insurance is paying for, and we file written supplements with your carrier when the scope misses something. The main contract names your project manager by name, every line item including drip edge / ice and water shield / underlayment / flashing, the per-sheet decking rate, and the workmanship warranty in years. Our deposit is ten percent or less. We hand it all to you and say take it home and read it. From your side, once you sign and we order your materials, please honor that — a last-minute switch to a storm chaser who appeared at your door costs us a slot we can't refill, and it leaves you with the very company you were trying to avoid.`}
      />

      <Moment
        n="06"
        title="They keep calling"
        whats={`Your phone is ringing again. There's a difference between a professional check-in (one call, on a cadence you agreed to, during business hours, with a clear stop point) and pursuit (every day, after hours, drop-bys at dinner). This moment is about the second one. The first is just a roofer doing their job.`}
        why={`Follow-up patterns reveal a company's culture. A company that chases you before the sale will chase you for money after the sale, and disappear when you need them later. The way they treat the pursuit is the way they'll treat the warranty call.`}
        say={`"I'll let you know my decision by [date]. I won't make it before then. Please don't call again before that."`}
        ask={`"What's the latest date you'd need a decision?" See if the urgency is real, or manufactured.`}
        flags={[
          "They text after you've asked them not to call",
          'They drop by unannounced',
          'They imply prices will rise dramatically next week',
          'They say their crew availability "won\'t last"',
          'They claim a different homeowner is about to sign for "your" start date',
          "They won't agree to a single follow-up date and stick to it",
        ]}
        honestRoofer={`Yes, we follow up too — once, in a week, with a polite check-in. At the first meeting we ask what cadence works for you and we use it (some homeowners want a call, some want a text, some want nothing until they reach out). No texts after hours, no unannounced visits, no pretend-urgency. If you say "I'll call when I'm ready," we wait. If we don't hear from you in three weeks we send one short note and the ball stays in your court. From your side, if you say you'll call back by Friday, call back by Friday — even a clear no is better than a slow maybe, because it frees the company to serve the next family on the calendar.`}
      />

      <Moment
        n="07"
        title="Before the crew arrives"
        whats={`The contract is signed. The install date is on the calendar. Materials have been ordered. Right now, before a single shingle gets touched, is your last clean window to verify that the full scope is actually on the truck. Cheap quotes often shave money by quietly omitting the small things — the things you can't see from the ground once the roof is done — that make a roof last twenty-five years instead of eight.`}
        why={`What's missing from the scope shows up as a callback two or three years from now: early granule loss, leaks at flashings, ice damming in the eaves, ventilation problems that cook the attic. By the time those things appear, proving the install caused them (not weather, not wear) is almost impossible. The day before install is when those omissions are still cheap to fix. A bid that's a thousand dollars lower because it skipped drip edge on the rakes and reused the chimney flashing isn't a deal — it's a future repair bill that you'll pay twice.`}
        say={`"Before the crew shows up, can you walk me through the materials list one more time? I want to confirm everything is on the truck."`}
        ask={`"Will the foreman text me a photo of the materials on the truck before they start, and a photo of the bare decking before they cover it?" A real roofer says yes without hesitation.`}
        special={{
          title: 'Make sure each of these is in the contract (or ask why not)',
          items: [
            'New drip edge along every eave AND every rake (rakes are often the silent omission)',
            'Ice and water shield in every valley, around chimneys, around all roof penetrations, and along eaves (required by NC code in most counties — verify yours)',
            'Synthetic underlayment, not 15-lb felt (felt tears in the wind and absorbs moisture)',
            'Real starter shingles along eaves and rakes (not three-tabs cut down)',
            'Ridge cap shingles by the same manufacturer as the field shingles (not three-tabs serving as ridge cap)',
            'All new step flashing around chimneys and walls (NOT reused, NOT painted to look new)',
            'New pipe boots on every vent pipe (NOT reused — these are the #1 leak source on a roof under 10 years old)',
            'Ventilation calculated for your attic: ridge vent PLUS soffit intake, not just one or the other',
            'A per-sheet decking-replacement allowance with a written rate, so a discovery on install day is not a surprise',
          ],
        }}
        flags={[
          '"We use what comes with the bundle" or "standard materials" without naming brands or product lines',
          'Drip edge only on eaves, not on rakes',
          'Felt underlayment instead of synthetic',
          '"We always reuse the existing flashing if it looks okay"',
          'Pipe boots not explicitly listed as new',
          'No ice and water shield listed in valleys',
          'No per-sheet decking rate written down anywhere in the contract',
          '"Ventilation is whatever is up there now"',
        ]}
        honestRoofer={`Our material list is itemized line by line and we send you a final copy a few days before install. Every penetration gets a new boot. Every valley gets ice and water shield. Drip edge goes on eaves AND rakes. Step flashing is always new, never reused, never painted. Ridge cap matches the field shingle by manufacturer and product line. We text you a photo of the materials on the truck the morning of install, and a photo of the bare decking before any new material covers it. We do not cut these corners, even when it costs us the bid. From your side, the right move here is to read the materials list before install day, not after — once a shingle covers a missed step flashing, fixing it means tearing the roof open again.`}
      />

      <Moment
        n="08"
        title="The crew is on your roof"
        whats={`Material is in the dumpster. Your house is partially open to the weather. You're not in a strong negotiating position and they know this. This is the moment when verbal change orders show up.`}
        why={`Your house is partially open to the weather. Verbal change orders thrive in exactly this moment because you're not in a strong position to push back. Anything decided in conversation today becomes "he said / she said" the day the final invoice arrives.`}
        say={`"Walk me through what you found. Send photos. Tell me what it adds in writing. I'll respond within two hours."`}
        ask={`"Does our contract require written approval before extra work proceeds?" Hold them to it. If your contract doesn't say that, it's a clause to add to every future roofing contract you sign.`}
        special={{
          title: 'Do this every day they work',
          items: [
            'Take a date-stamped photo of the exposed deck before they cover it',
            "If the project manager isn't on site, get a text update with photos at lunch and end of day",
          ],
        }}
        flags={[
          'A change order delivered verbally only',
          '"We need to replace 18 sheets of decking, that\'s an extra $4,000" with no photos',
          'The foreman saying it "needs to be done today or we can\'t continue"',
          'A different crew than the one in the contract',
          'Old flashing being reused around the chimney (it should be new)',
        ]}
        honestRoofer={`Our contract sets a per-sheet decking-repair rate up front, in writing, so there are no surprise numbers later. Any work beyond the contract requires a written change order with a photo, sent to you, with at least a one-hour response window. We never present a discovery as "decide right now." From your side, please be reachable on install day — if the foreman texts a photo of rotten decking, that's a real thing, and answering within a couple of hours keeps the crew working and your house out of the weather.`}
      />

      <Moment
        n="09"
        title="They're done. Before you sign the Certificate of Completion"
        whats={`The crew is packing up. The yard is mostly clean. Someone walks up with a clipboard and a pen. One of the documents in their hand is the Certificate of Completion (sometimes called a "Certificate of Satisfaction"). This is the document that tells your insurance company the job is finished and releases the final payment to the roofer. Once you sign, you've certified — in writing, to your insurance company — that everything is done to your satisfaction.`}
        why={`A signature here is your last real piece of leverage. Once the certificate is signed and the final insurance check is cut, getting a roofer to come back for punch-list items is much harder. Insurance companies use this document as evidence the work was complete; disputes filed afterward usually arrive too late. Pressure to sign the COC the same hour the crew finishes is almost always a tell — the good version of this moment is unhurried.`}
        say={`"I'm not signing the Certificate of Completion today. I'll sign it once the walkthrough is done, the punch list is closed, and you've handed me the lien waiver and the manufacturer warranty registration number."`}
        ask={`"Can we walk the property together right now? Just five minutes." A real roofer agrees without flinching.`}
        special={{
          title: 'Do all of these BEFORE you sign the Certificate of Completion',
          items: [
            'Walk the perimeter with the foreman. Take photos.',
            'Look at the roof from the curb. Lines should be straight. Color should be uniform with no streaking.',
            'Crouch at each corner of the house and look up — drip edge should be visible along every eave AND every rake.',
            'Look at every chimney and wall meet — flashing should be new shiny metal, not painted over.',
            'Look at every pipe boot — every one should be new.',
            'Check the yard, driveway, and flowerbeds for nails. Run a magnet sweep if you have one.',
            'Open every door and window. Look at the screens for shingle granules.',
            'Get the manufacturer warranty registration number IN WRITING and confirm it was filed in your name today.',
            'Get a lien waiver IN WRITING — protects you from a supplier or subcontractor putting a lien on your house if the roofer fails to pay them.',
            'Write down every punch-list item, get a date for each, get the foreman to sign next to it.',
          ],
        }}
        flags={[
          'They present the Certificate of Completion and the final invoice together and ask you to sign both right now',
          '"It is just a formality, we will come back for the punch list"',
          'They cannot produce a manufacturer warranty registration number',
          'No lien waiver is offered',
          '"We need this signed today to close out the job"',
          '"Your insurance will not release the final check until you sign this" (true, but you control the timing)',
          'Pressure to sign before the walk-around is done',
        ]}
        honestRoofer={`We schedule the final walk-around BEFORE the Certificate of Completion is ever signed. We bring the manufacturer warranty registration number on paper, a lien waiver, the final invoice, and the COC — and you sign the COC last, only after every punch-list item has a date next to it. We do not present the COC the same hour the crew packs up. From your side, once the walk is done and the punch list is agreed, sign the COC and pay the final on time — letting it drag without the money behind it makes the insurance side messy for both of us.`}
      />

      <Moment
        n="10"
        title="The final invoice"
        whats={`The Certificate of Completion is signed, the walkthrough is done, and now there's an invoice on the table. The number may match the contract. It may not. Anything over the contract should be backed by signed change orders from Moment 08 — written, photographed, approved while it was happening.`}
        why={`This is the last moment to challenge anything you don't recognize. Once the check clears, your only recourse on disputed line items is the licensing board or small claims court. A five-minute review now is cheaper than a five-month dispute later.`}
        say={`"Walk me through the invoice line by line. I want to match each charge to either the contract or a written change order from install."`}
        ask={`"Can I see the manufacturer warranty registration confirmation, not just your form?" Some "warranties" never get filed. Without registration, the manufacturer warranty doesn't exist.`}
        special={{
          title: 'Match each charge against',
          items: [
            'The original contract, line by line',
            'Any signed change orders from install day (with photos)',
            'The per-sheet decking allowance vs. the actual sheet count (foreman should have the count in writing)',
          ],
        }}
        flags={[
          'The final is higher than the contract by more than the agreed decking allowance, with no written change orders',
          'Pressure to pay the final today, this hour',
          '"We need to wrap this up to get on the next job"',
          "They can't produce the manufacturer warranty registration number",
          'No lien waiver paperwork is offered',
          'Verbal-only explanations for line items you do not recognize',
        ]}
        honestRoofer={`Our final invoice matches the contract. Anything beyond the contract is backed by a written change order with a photo, signed by you on the day it happened. The decking line shows the actual sheet count. We send the lien waiver and the registered manufacturer warranty number with the invoice, not after. From your side, once the numbers reconcile and the Certificate of Completion is signed, pay on time — letting the dust settle without the money behind it is hard on the next homeowner waiting on our slot.`}
      />

      <Moment
        n="11"
        title="The first 30 days after install"
        whats={`Most workmanship issues will show themselves in the next four weeks. Your leverage is highest right now. Once the 30 days pass, getting them back gets harder.`}
        why={`This is the only window where small workmanship issues are still cheap, fast, and obvious to fix. After thirty days the seasons turn, the roof settles, and the line between "install issue" and "weather damage" blurs. The day-five fix is a phone call. The day-sixty fix is a debate.`}
        say={`"Can the foreman come back and take a look this week?" Call the project manager's cell, not the office. Send an email afterward so the conversation is in writing.`}
        ask={`"Where is my registered warranty number, and what was the date filed?" Confirm it with the manufacturer directly if you can.`}
        special={{
          title: 'Do this every week for 30 days',
          items: [
            'Walk the perimeter. Look for nails. Look at the roof from the curb.',
            'After the first heavy rain, go in the attic with a flashlight. Look at every rafter near a valley, chimney, or vent.',
            'Photograph anything that looks off. Send to the project manager the same day.',
          ],
        }}
        flags={[
          'Granules still washing heavily in the gutters after the first month',
          'Any sign of moisture in the attic, anywhere',
          'Flashing that looks older than the shingles',
          'The company is slow to come back when you call',
          'The "warranty registration number" you were given doesn\'t exist when you call the manufacturer',
        ]}
        honestRoofer={`We call you on day fourteen and ask how the roof is holding up. If you call us with a question, the project manager comes back within forty-eight hours. We don't charge for first-month adjustments — if we put it on the house, we own it for the first month. From your side, do the perimeter walks and the post-rain attic checks. Catching something on day five lets us fix it the same week, before a small thing becomes a story.`}
      />

      <Moment
        n="12"
        title="Something goes wrong months later"
        whats={`Two years pass. Something leaks. You go looking for the paperwork. The honest reality: by the time you're here, the decision was already made back in Moment 5. If you picked a real local roofer, this is a phone call. If you picked a storm chaser, this is a problem.`}
        why={`This is the moment a warranty becomes either a piece of paper or a real promise. The way a roofer responds to a problem two years after the check cleared is the truest measure of their work. By this point, your decision back in Moment 5 has fully expressed itself.`}
        say={`"I'm the homeowner at [address]. Your company installed my roof on [date]. I'm seeing [issue]. When can someone be here to look at it?"`}
        ask={`"What's the next step, and when?" Document the answer. A real roofer commits to a date. A storm chaser stalls.`}
        special={{
          title: "If they don't respond, do this in order",
          items: [
            'File a complaint with the NC Licensing Board at nclbgc.org. Free.',
            'File a BBB complaint. Most companies respond once this is filed.',
            'Post a factual review (dates, specifics, no name-calling).',
            "Call the shingle manufacturer directly. Sometimes they honor the material warranty even when the installer is gone. You'll need the warranty registration number from Moment 9 (the one filed at the final walkthrough).",
            'Call a small-claims attorney. Most do a free first consultation.',
          ],
        }}
        flags={[
          'Their phone number is disconnected',
          'The website is gone',
          "The local address you drive to doesn't exist or is a UPS Store",
          'Their license has been revoked or suspended on the NC Licensing Board site',
        ]}
        honestRoofer={`We answer the phone. We schedule a return visit. If we made the mistake, we fix it free, full stop. If the issue isn't covered by the warranty (storm damage, an unrelated leak), we tell you so honestly and quote the repair fairly. From your side, call us before you post — a real issue raised in a phone call almost always gets handled, and the same issue posted on Google before any call makes everyone defensive. Give a roofer the chance to make it right before you decide they won't.`}
      />

      {/* ---------------- APPENDIX A: THE PAUSE SCRIPT ---------------- */}
      <section className="companion-section">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red mb-2">
          Appendix A
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5">
          The pause script
        </h2>
        <p className="text-[15px] leading-relaxed text-slate-700 mb-5">
          When someone is pressuring you and your brain freezes, you need
          words that work without thinking. Memorize these. Say them out
          loud once before you need them.
        </p>

        <Callout>
          &ldquo;I&apos;m not making a decision tonight. I never do, on
          anything this size. I&apos;ll take your information, read it
          carefully, and call you tomorrow if I have questions. If your
          price isn&apos;t valid tomorrow, then I&apos;m not the right
          customer for you, and that&apos;s fine.&rdquo;
        </Callout>

        <p className="text-[14px] leading-relaxed text-slate-600 mt-5">
          That paragraph works at the door, at the kitchen table, on a
          follow-up phone call, and on the porch the next morning. It
          isn&apos;t rude. It isn&apos;t aggressive. It just removes the
          pressure as a tool they can use. Anyone honest will respect it.
          Anyone who pushes past it has told you everything you need to
          know about them.
        </p>
      </section>

      {/* ---------------- APPENDIX B: ESCALATION PATH ---------------- */}
      <section className="companion-section">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red mb-2">
          Appendix B
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5">
          If something already went wrong
        </h2>
        <p className="text-[15px] leading-relaxed text-slate-700 mb-6">
          Most homeowners don&apos;t know how many real avenues exist. In
          order from cheapest and fastest, to slowest:
        </p>

        <Escalation
          n={1}
          title="Direct contact"
          body="Call the project manager's cell. Send a follow-up email the same day so there's a written record. Most legitimate issues resolve here."
        />
        <Escalation
          n={2}
          title="NC Licensing Board"
          body="Free. File at nclbgc.org. The Board has authority over every licensed NC general contractor. Most companies take a Board complaint seriously."
        />
        <Escalation
          n={3}
          title="Better Business Bureau"
          body="Free. File at bbb.org. The company is notified. Most respond within ten days because of the public record."
        />
        <Escalation
          n={4}
          title="Public review (factual)"
          body="Google, Facebook, Yelp. Stick to dates and facts. No name-calling. Companies respond fastest to public, factual, calm reviews because they damage the most."
        />
        <Escalation
          n={5}
          title="Shingle manufacturer"
          body="Call the manufacturer directly (number is on the shingle packaging or on their website). If your installer is gone but you have a registered warranty number, the manufacturer sometimes honors the material warranty themselves."
        />
        <Escalation
          n={6}
          title="Small-claims attorney"
          body="Most do a free first consultation. Small claims in NC handles up to $10,000. Below that line, you don't need a lawyer to file."
        />
      </section>

      {/* ---------------- BACK COVER ---------------- */}
      <section className="companion-section">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red mb-2">
          Back cover
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5">
          If you want to talk to a real person
        </h2>

        <p className="text-[15px] leading-relaxed text-slate-700 mb-4">
          We&apos;re NC Roofing Service. We&apos;ve been in North Carolina
          for years. We install every component a manufacturer requires.
          Not just shingles.
        </p>

        <p className="text-[15px] leading-relaxed text-slate-700 mb-6">
          If you use this guide to interview five roofers and pick one of
          the others, fine. You&apos;ll have done your homework. If our
          name comes up when you call references, even better. Either way,
          you&apos;re better off than you were yesterday.
        </p>

        <div className="border-y border-slate-200 py-5 my-6">
          <div className="text-[15px] mb-2">
            <span className="font-semibold">Phone:</span>{' '}
            {OFFICE_PHONE_DISPLAY}{' '}
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

        <p className="text-[15px] leading-relaxed text-slate-700">
          When you&apos;re ready, we&apos;ll come walk your roof, take
          drone photos, and give you a written quote in 30 minutes
          on-site. No deposit, no obligation, no follow-up call unless
          you ask for one.
        </p>

        <p className="text-[13px] text-slate-500 leading-relaxed mt-10 pt-6 border-t border-slate-200">
          This guide is updated every spring. The current version is the
          source of truth, always free at
          ncroofingservice.com/guide/companion. If you&apos;re reading a
          printed copy older than a year, check there first.
        </p>

        <p className="text-center text-[12px] text-slate-400 mt-10 print-hide">
          <Link href="/guide" className="hover:text-brand-red">
            ncroofingservice.com/guide
          </Link>
          {' · '}
          <Link
            href="/guide/cost-estimator"
            className="hover:text-brand-red"
          >
            Cost estimator
          </Link>
          {' · '}
          Updated {UPDATED}
        </p>
      </section>
    </article>
  )
}

// ---------------------------------------------------------------------------
// Subcomponents. Purely presentational. Each of the twelve-moment cards
// uses Moment.

interface MomentProps {
  n: string
  title: string
  whats: string
  /** Why this moment matters. Sets the stakes before the words and questions. */
  why: string
  say: string
  ask: string
  flags: string[]
  /** Optional extra block (do-this list, read-for-these-words list, etc.) */
  special?: {
    title: string
    items: string[]
  }
  /** What an honest roofer does here. Ends each block with a "from your side"
   *  sentence so the document reads as reciprocal, not victim-literature. */
  honestRoofer: string
}

function Moment({
  n,
  title,
  whats,
  why,
  say,
  ask,
  flags,
  special,
  honestRoofer,
}: MomentProps) {
  return (
    <section className="companion-section pt-10 pb-4">
      <div className="flex items-baseline gap-4 mb-5">
        <span className="text-5xl font-extrabold text-brand-red leading-none tracking-tight">
          {n}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
          {title}
        </h2>
      </div>

      <Block label="What's happening">{whats}</Block>
      <Block label="Why this matters" tone="why">
        {why}
      </Block>
      <Block label="What to say" tone="say">
        &ldquo;{stripQuotes(say)}&rdquo;
      </Block>
      <Block label="What to ask" tone="ask">
        &ldquo;{stripQuotes(ask)}&rdquo;
      </Block>

      {special && (
        <Block label={special.title} tone="do">
          <ul className="list-disc list-outside ml-5 space-y-1.5 marker:text-brand-red">
            {special.items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </Block>
      )}

      <Block label="Red flags" tone="warn">
        <ul className="list-none ml-0 space-y-1.5">
          {flags.map((f, i) => (
            <li key={i} className="flex items-start gap-2 row">
              <span className="text-brand-red font-bold flex-shrink-0">
                &times;
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block label="What an honest roofer does" tone="honest">
        {honestRoofer}
      </Block>
    </section>
  )
}

function Block({
  label,
  tone = 'whats',
  children,
}: {
  label: string
  tone?: 'whats' | 'why' | 'say' | 'ask' | 'do' | 'warn' | 'honest'
  children: React.ReactNode
}) {
  // Each tone gets a distinct left-border + (optional) tint. The emerald
  // "honest" block sits visually opposite the red "warn" block so the page
  // tells the same story at a glance even before you read the text.
  const accent =
    tone === 'warn'
      ? 'border-brand-red/40 bg-brand-red/5'
      : tone === 'honest'
      ? 'border-emerald-600 bg-emerald-50'
      : tone === 'say' || tone === 'ask'
      ? 'border-slate-300 bg-slate-50'
      : tone === 'do'
      ? 'border-slate-300 bg-white'
      : tone === 'why'
      ? 'border-slate-400 bg-white'
      : 'border-transparent bg-white'

  const labelColor =
    tone === 'warn'
      ? 'text-brand-red'
      : tone === 'honest'
      ? 'text-emerald-700'
      : tone === 'why'
      ? 'text-slate-700'
      : 'text-slate-500'

  return (
    <div className={`row my-4 border-l-2 pl-4 py-1 ${accent}`}>
      <div
        className={`text-[11px] font-bold uppercase tracking-[0.14em] mb-1.5 ${labelColor}`}
      >
        {label}
      </div>
      <div className="text-[15px] leading-relaxed text-slate-700">
        {children}
      </div>
    </div>
  )
}

function PauseRule({ n, text }: { n: number; text: React.ReactNode }) {
  return (
    <div className="row flex items-start gap-5">
      <span className="text-3xl font-extrabold text-brand-red leading-none tracking-tight w-8 flex-shrink-0">
        {n}.
      </span>
      <p className="text-xl text-brand-black leading-snug font-semibold pt-1">
        {text}
      </p>
    </div>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 p-5 rounded-md border border-slate-300 bg-slate-50">
      <p className="text-[16px] leading-relaxed text-brand-black italic">
        {children}
      </p>
    </div>
  )
}

function Escalation({
  n,
  title,
  body,
}: {
  n: number
  title: string
  body: string
}) {
  return (
    <div className="row my-4 grid grid-cols-[40px_1fr] gap-3">
      <div className="text-xl font-extrabold text-brand-red leading-none">
        {n}.
      </div>
      <div>
        <div className="font-bold text-brand-black text-[15px] mb-1">
          {title}
        </div>
        <div className="text-[14px] text-slate-700 leading-relaxed">
          {body}
        </div>
      </div>
    </div>
  )
}

// Strip leading/trailing straight quotes if a caller wrote them inside the
// prop string. Lets us write quotable strings naturally without doubling.
function stripQuotes(s: string): string {
  return s.replace(/^"+|"+$/g, '')
}
