'use client'

// Triage form: gather what + where + who, then trigger a callback. Photo
// upload was removed from this step in 2026 — we ask homeowners to text
// pictures to the office number after triage so they go straight to the
// crew thread instead of getting buried as base64 in a lead email.

import { useState } from 'react'
import { useHoneypot, HoneypotField } from '@/components/Honeypot'
import TCPAConsent from '@/components/TCPAConsent'
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'

interface DamageUploadProps {
  onSubmit?: (data: DamageData) => void
  onContinueToSchedule?: () => void
}

interface DamageData {
  issueType: string
  description: string
  name: string
  phone: string
}

const issueTypes = [
  { id: 'leak', label: 'Leak / Water Damage', icon: '💧' },
  { id: 'missing', label: 'Missing Shingles', icon: '🏠' },
  { id: 'hail', label: 'Hail Damage', icon: '🧊' },
  { id: 'wind', label: 'Wind Damage', icon: '💨' },
  { id: 'age', label: 'Aging / Wear', icon: '📅' },
  { id: 'other', label: 'Other', icon: '❓' },
]

export default function DamageUpload({ onSubmit, onContinueToSchedule }: DamageUploadProps) {
  const [formData, setFormData] = useState<DamageData>({
    issueType: '',
    description: '',
    name: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const honeypot = useHoneypot()

  const handleIssueSelect = (issueId: string) => {
    setFormData({ ...formData, issueType: issueId })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'triage',
          issueType: formData.issueType,
          description: formData.description,
          name: formData.name,
          phone: formData.phone,
          website: honeypot.value,
          metadata: {
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
          },
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        if (onSubmit) onSubmit(formData)
      } else {
        setSubmitError(true)
      }
    } catch (error) {
      console.error('Error submitting:', error)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-2xl border-2 border-green-200 p-8 text-center shadow-sm">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Damage Report Received!</h3>
        <p className="text-slate-600 mb-6">
          We&apos;ll call within 2 hours during business hours. Have photos of the damage?
          Text them to{' '}
          <a href={`sms:${OFFICE_PHONE}`} className="text-brand-red hover:underline font-semibold">
            {OFFICE_PHONE_DISPLAY}
          </a>{' '}
          and we&apos;ll review them before the call.
        </p>

        {onContinueToSchedule && (
          <button
            onClick={onContinueToSchedule}
            className="w-full bg-brand-red hover:bg-brand-red-dark text-white py-4 rounded-[2px] font-semibold transition-colors mb-4 shadow-md"
          >
            Schedule an Inspection Now
          </button>
        )}

        <p className="text-slate-500 text-sm">
          Questions?{' '}
          <a href={`tel:${OFFICE_PHONE}`} className="text-brand-red hover:underline">
            Call {OFFICE_PHONE_DISPLAY}
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-brand-red/10 rounded-[2px] flex items-center justify-center">
          <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Tell Us About the Damage</h3>
      </div>
      <p className="text-slate-600 mb-6">
        Give us the basics and we&apos;ll triage your situation before we call. You can text
        photos to{' '}
        <a href={`sms:${OFFICE_PHONE}`} className="text-brand-red hover:underline font-semibold">
          {OFFICE_PHONE_DISPLAY}
        </a>{' '}
        once you submit.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <HoneypotField fieldProps={honeypot.fieldProps} />

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">What type of issue? *</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {issueTypes.map((issue) => (
              <button
                key={issue.id}
                type="button"
                onClick={() => handleIssueSelect(issue.id)}
                className={`flex items-center gap-2 p-3 rounded-lg border transition-all text-left ${
                  formData.issueType === issue.id
                    ? 'bg-brand-red/5 border-brand-red text-slate-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-brand-red/30'
                }`}
              >
                <span className="text-xl">{issue.icon}</span>
                <span className="text-sm font-medium">{issue.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
            Describe the issue
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 resize-none"
            placeholder="Where is the damage? When did you first notice it?"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
              placeholder="(919) 555-1234"
            />
          </div>
        </div>

        <div className="rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-600">
          <span className="font-semibold text-slate-700">Have photos? </span>
          After you submit, text them to{' '}
          <a href={`sms:${OFFICE_PHONE}`} className="text-brand-red hover:underline font-semibold">
            {OFFICE_PHONE_DISPLAY}
          </a>
          . They go straight to the crew so we can review before the inspection.
        </div>

        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-800">
            We couldn&apos;t submit your request. Please try again or call{' '}
            <a className="font-semibold underline" href={`tel:${OFFICE_PHONE}`}>
              {OFFICE_PHONE_DISPLAY}
            </a>{' '}
            so we don&apos;t miss you.
          </div>
        )}

        <TCPAConsent />

        <button
          type="submit"
          disabled={isSubmitting || !formData.issueType}
          className="w-full bg-brand-red hover:bg-brand-red-dark disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-[2px] font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Submit for Review
            </>
          )}
        </button>
      </form>
    </div>
  )
}
