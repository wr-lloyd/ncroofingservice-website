import Link from 'next/link'

/**
 * Standard TCPA / privacy disclosure shown immediately above the submit
 * button on every lead-capture form. Acts as the "express written consent"
 * required by the Telephone Consumer Protection Act when we follow up by
 * phone or SMS with the contact info the visitor provided.
 *
 * Keep this language consistent across every form. If you change it here,
 * it changes everywhere — that's the point.
 */
export default function TCPAConsent({ className = '' }: { className?: string }) {
  return (
    <p className={`text-xs text-slate-500 leading-relaxed ${className}`}>
      By submitting this form, you agree that NC Roofing Service and Repair may
      contact you about your request by phone, text message, or email at the
      number and address you provided, including using automated technology.
      Message and data rates may apply. Consent is not a condition of purchase
      and you can opt out at any time by replying STOP. See our{' '}
      <Link href="/privacy" className="underline hover:text-brand-red">
        Privacy Policy
      </Link>{' '}
      and{' '}
      <Link href="/terms" className="underline hover:text-brand-red">
        Terms of Service
      </Link>
      .
    </p>
  )
}
