'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type TabType = 'storm-check' | 'inspection'

const inspectionReasons = [
  { value: 'free-inspection', label: 'Free Roof Inspection' },
  { value: 'repair-estimate', label: 'Roof Repair Estimate' },
  { value: 'replacement-estimate', label: 'Roof Replacement Estimate' },
  { value: 'storm-damage', label: 'Storm Damage Assessment' },
  { value: 'insurance-help', label: 'Insurance Claim Help' },
  { value: 'other', label: 'Other' },
]

export default function InstantQuote() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabType>('storm-check')
  const [formData, setFormData] = useState({
    address: '',
    zip: '',
    city: '',
    reason: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleStormCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.address || !formData.zip || !formData.city) return
    
    setIsSubmitting(true)
    const params = new URLSearchParams({
      address: formData.address,
      zip: formData.zip,
      city: formData.city,
    })
    router.push(`/storm-check?${params.toString()}`)
  }

  const handleInspectionRequest = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.address || !formData.zip || !formData.city || !formData.reason) return
    
    setIsSubmitting(true)
    const params = new URLSearchParams({
      address: formData.address,
      zip: formData.zip,
      city: formData.city,
      reason: formData.reason,
    })
    router.push(`/request-inspection?${params.toString()}`)
  }

  const isStormCheckValid = formData.address && formData.zip && formData.city
  const isInspectionValid = formData.address && formData.zip && formData.city && formData.reason

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl">
      {/* Tab Header */}
      <div className="flex">
        <button
          type="button"
          onClick={() => setActiveTab('storm-check')}
          className={`flex-1 px-4 py-3 font-bold text-sm uppercase tracking-wide transition-colors ${
            activeTab === 'storm-check'
              ? 'bg-brand-red text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Storm Check
          </span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('inspection')}
          className={`flex-1 px-4 py-3 font-bold text-sm uppercase tracking-wide transition-colors ${
            activeTab === 'inspection'
              ? 'bg-brand-red text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Inspection
          </span>
        </button>
      </div>
      
      <div className="p-6">
        {/* Storm Check Tab */}
        {activeTab === 'storm-check' && (
          <form onSubmit={handleStormCheck} className="space-y-4">
            <p className="text-sm text-slate-600 mb-4">
              Check if recent storms may have damaged your roof using NOAA weather data.
            </p>
            
            <div>
              <label className="block text-sm text-slate-600 mb-1 font-medium">Street Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-slate-600 mb-1 font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Raleigh"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1 font-medium">Zip Code</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="27601"
                  maxLength={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || !isStormCheckValid}
              className="w-full bg-brand-red hover:bg-brand-red-dark disabled:bg-brand-red/50 disabled:cursor-not-allowed text-white py-3 rounded-[2px] font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Check for Storm Damage
                </>
              )}
            </button>
            
            <p className="text-center text-xs text-slate-400">
              Free instant results • No contact info required
            </p>
          </form>
        )}

        {/* Inspection Tab */}
        {activeTab === 'inspection' && (
          <form onSubmit={handleInspectionRequest} className="space-y-4">
            <p className="text-sm text-slate-600 mb-4">
              Schedule a free professional roof inspection with our certified team.
            </p>
            
            <div>
              <label className="block text-sm text-slate-600 mb-1 font-medium">Street Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-slate-600 mb-1 font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Raleigh"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1 font-medium">Zip Code</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="27601"
                  maxLength={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-slate-600 mb-1 font-medium">Reason for Inspection</label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                required
              >
                <option value="">Select a reason</option>
                {inspectionReasons.map((reason) => (
                  <option key={reason.value} value={reason.value}>
                    {reason.label}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || !isInspectionValid}
              className="w-full bg-brand-red hover:bg-brand-red-dark disabled:bg-brand-red/50 disabled:cursor-not-allowed text-white py-3 rounded-[2px] font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Request Free Inspection
                </>
              )}
            </button>
            
            <p className="text-center text-xs text-slate-400">
              🔒 Your information is secure and will never be shared
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
