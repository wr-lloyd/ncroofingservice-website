'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AddressInput, { type AddressValue } from '@/components/AddressInput'

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
  const [addressData, setAddressData] = useState<AddressValue>({
    streetAddress: '',
    zip: '',
    city: '',
    county: '',
    citySource: 'manual_entry',
  })
  const [reason, setReason] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleStormCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (!addressData.streetAddress || !addressData.zip || !addressData.city) return
    
    setIsSubmitting(true)
    const params = new URLSearchParams({
      address: addressData.streetAddress,
      zip: addressData.zip,
      city: addressData.city,
      county: addressData.county || '',
      citySource: addressData.citySource,
    })
    router.push(`/storm-check?${params.toString()}`)
  }

  const handleInspectionRequest = (e: React.FormEvent) => {
    e.preventDefault()
    if (!addressData.streetAddress || !addressData.zip || !addressData.city || !reason) return
    
    setIsSubmitting(true)
    const params = new URLSearchParams({
      address: addressData.streetAddress,
      zip: addressData.zip,
      city: addressData.city,
      county: addressData.county || '',
      citySource: addressData.citySource,
      reason: reason,
    })
    router.push(`/request-inspection?${params.toString()}`)
  }

  const isStormCheckValid = addressData.streetAddress && addressData.zip && addressData.city
  const isInspectionValid = addressData.streetAddress && addressData.zip && addressData.city && reason

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl">
      {/* Tab Header */}
      <div className="grid grid-cols-2">
        <button
          type="button"
          onClick={() => setActiveTab('storm-check')}
          className={`px-3 py-3.5 font-bold text-xs uppercase tracking-wider transition-colors ${
            activeTab === 'storm-check'
              ? 'bg-brand-red text-white'
              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
          }`}
        >
          <span className="flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Storm Check
          </span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('inspection')}
          className={`px-3 py-3.5 font-bold text-xs uppercase tracking-wider transition-colors ${
            activeTab === 'inspection'
              ? 'bg-brand-red text-white'
              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
          }`}
        >
          <span className="flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            
            <AddressInput
              value={addressData}
              onChange={setAddressData}
            />
            
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
            
            <AddressInput
              value={addressData}
              onChange={setAddressData}
            />
            
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1">
                Reason for Inspection
              </label>
              <select
                id="reason"
                name="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 bg-white rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-colors"
                required
              >
                <option value="">Select a reason</option>
                {inspectionReasons.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
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
