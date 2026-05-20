import type { Metadata } from 'next'
import Link from 'next/link'
import { OFFICE_ADDRESS, OFFICE_EMAIL, OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service | NC Roofing Service and Repair',
  description:
    'Terms of service for ncroofingservice.com and the roofing services provided by NC Roofing Service and Repair, LLC.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
}

const lastUpdated = 'May 2026'

export default function TermsPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 border-b border-slate-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red mb-2">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>
        </header>

        <div className="prose prose-slate max-w-none">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of ncroofingservice.com (the
            &ldquo;Site&rdquo;) and any services provided by NC Roofing Service and Repair, LLC
            (&ldquo;NC Roofing Service,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;). By using the
            Site or requesting a service from us, you agree to these Terms.
          </p>

          <h2>1. Use of the site</h2>
          <p>
            You agree to use the Site only for lawful purposes and in a way that does not infringe the
            rights of, restrict, or inhibit anyone else&apos;s use or enjoyment of the Site. Content on
            the Site is provided for general information only and does not constitute a binding offer
            or estimate. A formal proposal for any roofing work is issued in writing after an
            inspection.
          </p>

          <h2>2. Estimates, proposals, and contracts</h2>
          <p>
            Estimates and proposals are valid for the period stated on the document, typically 30 days.
            A signed proposal, work order, or contract governs the scope, schedule, and price of the
            work performed. Photographs, marketing copy, and material samples are illustrative and may
            differ slightly from finished work.
          </p>

          <h2>3. Warranties</h2>
          <p>
            Workmanship and manufacturer warranties are described in writing as part of your proposal
            or completion paperwork. We honor those warranties according to their stated terms. Routine
            wear, storm damage occurring after completion, and unauthorized modifications by third
            parties are not covered by the workmanship warranty.
          </p>

          <h2>4. Insurance-claim work</h2>
          <p>
            When we assist with insurance-claim work, we work alongside your insurer and adjuster. We
            cannot guarantee a specific outcome from your insurer, and the final settlement is between
            you and your insurance company.
          </p>

          <h2>5. Communication consent</h2>
          <p>
            By providing your phone number through any form on the Site, you consent to receive calls
            and text messages from us about your inquiry or project. Standard message and data rates
            may apply. Reply STOP to opt out at any time.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            Site content, including text, photography, logos, and design, is the property of NC Roofing
            Service and Repair, LLC or used under license, and is protected by copyright and trademark
            law. You may not reproduce or redistribute Site content without our written permission.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, NC Roofing Service is not liable for indirect,
            incidental, or consequential damages arising from your use of the Site. Our liability for
            any work performed is set out in the signed contract governing that work.
          </p>

          <h2>8. Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of North Carolina, without regard to its
            conflict-of-law principles. Any disputes shall be resolved in the state or federal courts
            located in North Carolina.
          </p>

          <h2>9. Changes to these terms</h2>
          <p>
            We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top
            of this page reflects the most recent revision. Continued use of the Site after a change
            means you accept the updated Terms.
          </p>

          <h2>10. Contact us</h2>
          <address className="not-italic">
            NC Roofing Service and Repair, LLC<br />
            {OFFICE_ADDRESS.street}<br />
            {OFFICE_ADDRESS.city}, {OFFICE_ADDRESS.region} {OFFICE_ADDRESS.postalCode}<br />
            Phone:{' '}
            <a className="text-brand-red hover:underline" href={`tel:${OFFICE_PHONE}`}>
              {OFFICE_PHONE_DISPLAY}
            </a>
            <br />
            Email:{' '}
            <a className="text-brand-red hover:underline" href={`mailto:${OFFICE_EMAIL}`}>
              {OFFICE_EMAIL}
            </a>
          </address>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/privacy" className="text-sm text-brand-red hover:underline font-medium">
            View Privacy Policy &rarr;
          </Link>
        </div>
      </article>
    </main>
  )
}
