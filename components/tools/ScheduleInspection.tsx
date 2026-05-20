'use client'

import { useState } from 'react'
import { useHoneypot, HoneypotField } from '@/components/Honeypot'
import { OFFICE_PHONE } from '@/lib/site'

interface ScheduleInspectionProps {
  onSubmit?: (data: ScheduleData) => void
  urgency?: 'normal' | 'priority'
  prefilledIssue?: string
}

interface ScheduleData {
  name: string
  phone: string
  email: string
  address: string
  city: string
  preferredDate: string
  preferredTime: string
  notes: string
  issueType?: string
}

export default function ScheduleInspection({ onSubmit, urgency = 'normal', prefilledIssue }: ScheduleInspectionProps) {
  const [formData, setFormData] = useState<ScheduleData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    preferredDate: '',
    preferredTime: '',
    notes: prefilledIssue || '',
    issueType: prefilledIssue,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const honeypot = useHoneypot()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'schedule',
          ...formData,
          website: honeypot.value,
          metadata: {
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
            urgency,
          }
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        if (onSubmit) onSubmit(formData)
      }
    } catch (error) {
      console.error('Error submitting:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get tomorrow's date for min date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-2xl border-2 border-green-200 p-8 text-center shadow-sm">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Inspection Requested!</h3>
        <p className="text-slate-600 mb-4">
          We&apos;ll call you within {urgency === 'priority' ? '30 minutes' : '2 hours'} during business hours to confirm your appointment.
        </p>
        <div className="bg-white rounded-xl p-4 mb-6 border border-slate-200">
          <h4 className="text-slate-900 font-semibold mb-2">What happens next:</h4>
          <ol className="text-slate-600 text-sm text-left space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 bg-brand-red rounded-[2px] flex items-center justify-center flex-shrink-0 text-xs text-white shadow-sm">1</span>
              We&apos;ll call to confirm your preferred date and time
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 bg-brand-red rounded-[2px] flex items-center justify-center flex-shrink-0 text-xs text-white shadow-sm">2</span>
              A certified inspector will visit your property
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 bg-brand-red rounded-[2px] flex items-center justify-center flex-shrink-0 text-xs text-white shadow-sm">3</span>
              You&apos;ll receive a detailed assessment and options
            </li>
          </ol>
        </div>
        <p className="text-slate-500 text-sm">
          Can&apos;t wait? Call us directly: <a href={`tel:${OFFICE_PHONE}`} className="text-brand-red hover:underline">(336) ROOFING</a>
        </p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-2xl border ${urgency === 'priority' ? 'border-2 border-orange-300' : 'border-slate-200'} p-8 shadow-sm`}>
      {urgency === 'priority' && (
        <div className="flex items-center gap-2 mb-4 text-orange-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold text-sm">Priority Scheduling</span>
        </div>
      )}

      <h3 className="text-2xl font-bold text-slate-900 mb-2">Schedule Your Free Inspection</h3>
      <p className="text-slate-600 mb-6">Tell us when works best and we&apos;ll confirm your appointment.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <HoneypotField fieldProps={honeypot.fieldProps} />
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
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
              placeholder="(919) 555-1234"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
            placeholder="john@example.com"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">Property Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
              placeholder="123 Main St"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">City *</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
            >
              <option value="">Select city</option>
              <option value="Rougemont">Rougemont</option>
              <option value="Durham">Durham</option>
              <option value="Raleigh">Raleigh</option>
              <option value="Chapel Hill">Chapel Hill</option>
              <option value="Cary">Cary</option>
              <option value="Hillsborough">Hillsborough</option>
              <option value="Wake Forest">Wake Forest</option>
              <option value="Apex">Apex</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-700 mb-1">Preferred Date *</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={minDate}
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 mb-1">Preferred Time *</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
            >
              <option value="">Select time</option>
              <option value="morning">Morning (8am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 4pm)</option>
              <option value="evening">Evening (4pm - 7pm)</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 resize-none"
            placeholder="Describe any issues you've noticed..."
          />
        </div>

        {/* Honeypot */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-md ${
            urgency === 'priority'
              ? 'bg-orange-600 hover:bg-orange-700 text-white'
              : 'bg-brand-red hover:bg-brand-red-dark text-white'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {urgency === 'priority' ? 'Request Priority Inspection' : 'Schedule Free Inspection'}
            </>
          )}
        </button>

        <p className="text-center text-slate-500 text-xs">
          ✓ No obligation &nbsp;&nbsp; ✓ 100% free &nbsp;&nbsp; ✓ Licensed & insured
        </p>
      </form>
    </div>
  )
}
