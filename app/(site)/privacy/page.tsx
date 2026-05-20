import type { Metadata } from 'next'
import Link from 'next/link'
import { OFFICE_ADDRESS, OFFICE_EMAIL, OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | NC Roofing Service and Repair',
  description:
    'How NC Roofing Service and Repair, LLC collects, uses, and protects your personal information when you visit our website or request a roofing service.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

const lastUpdated = 'May 2026'

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 border-b border-slate-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red mb-2">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>
        </header>

        <div className="prose prose-slate max-w-none">
          <p>
            NC Roofing Service and Repair, LLC (&ldquo;NC Roofing Service,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains
            what information we collect when you use ncroofingservice.com (the &ldquo;Site&rdquo;) or
            request a roofing service, how we use it, and the choices you have.
          </p>

          <h2>1. Information we collect</h2>
          <p>We collect information you give us directly, such as when you:</p>
          <ul>
            <li>Submit a contact, inspection, financing, or storm-check form (name, phone, email, property address, message)</li>
            <li>Call or text our office or a territory lead</li>
            <li>Upload photos of damage to your roof</li>
          </ul>
          <p>We also automatically collect limited technical data:</p>
          <ul>
            <li>IP address, browser type, device type, referring page, and pages viewed</li>
            <li>Cookies and similar technologies used to keep the Site working and improve performance</li>
          </ul>

          <h2>2. How we use information</h2>
          <ul>
            <li>To respond to your inquiry, schedule an inspection, or provide a quote</li>
            <li>To document damage and support insurance-claim work you have asked us to perform</li>
            <li>To improve the Site, our service offerings, and our customer experience</li>
            <li>To comply with legal obligations and protect our rights</li>
          </ul>
          <p>
            We do <strong>not</strong> sell your personal information. We do not share your data with
            third parties for their marketing purposes.
          </p>

          <h2>3. Service providers we use</h2>
          <p>
            We use trusted vendors to operate parts of the Site and our business (for example, hosting,
            email delivery, calendar scheduling, and financing partners Service Finance Company and
            Enhancify). These providers receive only the information they need to perform their service.
          </p>

          <h2>4. Cookies</h2>
          <p>
            The Site uses essential cookies that are required for navigation, form submissions, and
            basic analytics. You can disable cookies in your browser settings; the Site will still
            function, but some features may be limited.
          </p>

          <h2>5. Phone calls and text messages (TCPA)</h2>
          <p>
            When you submit a form, call, or text us with your phone number, you authorize NC
            Roofing Service and Repair, LLC and the territory lead assigned to your area to
            contact you about your request by phone call, text message (SMS/MMS), and email,
            including using an automatic telephone dialing system or pre-recorded voice. This
            consent applies to the number you provide and any number you later add to your
            account.
          </p>
          <p>
            <strong>You are not required to consent</strong> as a condition of any purchase. Standard
            message and data rates may apply to text messages. Message frequency varies based on your
            project — typically a handful of messages while your inspection or repair is active.
          </p>
          <p>
            To stop text messages, reply <strong>STOP</strong> to any message from us, or tell us
            directly by phone or email. To stop phone calls, ask the team member you spoke with to
            remove your number, or email{' '}
            <a className="text-brand-red hover:underline" href={`mailto:${OFFICE_EMAIL}`}>
              {OFFICE_EMAIL}
            </a>
            . Opting out of marketing follow-up will not stop transactional messages required to
            complete work you have already authorized (for example, crew arrival times).
          </p>

          <h2>6. Your choices</h2>
          <ul>
            <li>You can ask us to delete the personal information we hold about you at any time.</li>
            <li>You can opt out of text or phone follow-ups by replying STOP or telling us directly.</li>
            <li>You can ask what information we have on file and how it has been used.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the details below.
          </p>

          <h2>7. Data retention</h2>
          <p>
            We retain inquiry and project records for as long as needed to provide service, resolve
            disputes, and comply with our legal and tax obligations. Records related to active or
            recently completed work are typically retained for at least seven years.
          </p>

          <h2>8. Children</h2>
          <p>
            The Site is not directed to children under 13, and we do not knowingly collect personal
            information from children.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the
            top of this page reflects the most recent revision. Continued use of the Site after a change
            means you accept the updated policy.
          </p>

          <h2>10. Contact us</h2>
          <p>
            Questions about this Privacy Policy or about the information we hold can be sent to:
          </p>
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
          <Link href="/terms" className="text-sm text-brand-red hover:underline font-medium">
            View Terms of Service &rarr;
          </Link>
        </div>
      </article>
    </main>
  )
}
