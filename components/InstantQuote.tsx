'use client'

import { useState } from 'react'
import Link from 'next/link'

interface StormAlert {
  stormCount: number
  overallRisk: 'low' | 'moderate' | 'high' | 'severe'
  hasHighRisk: boolean
}

// City name mapping
const cityNames: Record<string, string> = {
  'raleigh': 'Raleigh',
  'cary': 'Cary',
  'wake-forest': 'Wake Forest',
  'apex': 'Apex',
  'durham': 'Durham',
  'rougemont': 'Rougemont',
  'chapel-hill': 'Chapel Hill',
  'hillsborough': 'Hillsborough',
  'other': 'NC',
}

export default function InstantQuote() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    roofType: '',
    projectType: '',
    name: '',
    phone: '',
    email: '',
  })
  const [showEstimate, setShowEstimate] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stormAlert, setStormAlert] = useState<StormAlert | null>(null)
  const [isCheckingStorms, setIsCheckingStorms] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Check storm data when continuing to step 2
  const handleContinue = async () => {
    if (!formData.address || !formData.city || !formData.projectType) return
    
    setIsCheckingStorms(true)
    
    try {
      // Use the city input directly - it should already include state
      const fullAddress = `${formData.address}, ${formData.city}`
      
      const response = await fetch('/api/storm-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: fullAddress }),
      })
      
      if (response.ok) {
        const data = await response.json()
        if (data.storms && data.storms.length > 0) {
          const hasHighRisk = data.storms.some((s: { damageRisk: string }) => 
            s.damageRisk === 'high' || s.damageRisk === 'severe'
          )
          setStormAlert({
            stormCount: data.storms.length,
            overallRisk: data.overallRisk,
            hasHighRisk,
          })
        }
      }
    } catch (error) {
      console.error('Storm check error:', error)
    } finally {
      setIsCheckingStorms(false)
      setStep(2)
    }
  }

  // Get full address for storm report link
  const getFullAddress = () => {
    return `${formData.address}, ${formData.city}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'estimate',
          ...formData,
          metadata: {
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
            source: 'instant-quote',
          }
        })
      })
      
      if (response.ok) {
        setShowEstimate(true)
      }
    } catch (error) {
      console.error('Error submitting:', error)
      setShowEstimate(true) // Show success anyway for UX
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showEstimate) {
    return (
      <div className="bg-brand-black rounded-2xl p-8 text-center shadow-xl">
        <div className="w-16 h-16 bg-brand-red rounded-[2px] flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
        <p className="text-white/80 mb-4">Thank you for contacting NC Roofing Service and Repair.</p>
        <p className="text-white/80 mb-6">
          A roofing specialist will call you within <strong className="text-white">30 minutes</strong> during business hours to schedule your <strong className="text-white">FREE assessment</strong>.
        </p>
        <a 
          href="tel:+19194758841"
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-[2px] font-semibold transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Can&apos;t Wait? Call (919) 475-8841
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl">
      {/* Bold Red Header */}
      <div className="bg-brand-red px-6 py-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-wide">Free Estimates & Inspections</h3>
      </div>
      
      <div className="p-6">
      {/* Progress Bar */}
      <div className="flex gap-2 mb-6">
        {[1, 2].map((s) => (
          <div 
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              s <= step ? 'bg-brand-red' : 'bg-slate-200'
            }`}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
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
            <div>
              <label className="block text-sm text-slate-600 mb-1 font-medium">City, State</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Raleigh, NC"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1 font-medium">What do you need?</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                required
              >
                <option value="">Select service needed</option>
                <option value="inspection">Free Roof Inspection</option>
                <option value="repair">Roof Repair</option>
                <option value="replacement">Roof Replacement</option>
                <option value="storm">Storm Damage</option>
                <option value="leak">Leak Repair (Urgent)</option>
                <option value="insurance">Insurance Claim Help</option>
                <option value="fortified">FORTIFIED Roofing</option>
              </select>
            </div>
            <button
              type="button"
              onClick={handleContinue}
              disabled={isCheckingStorms || !formData.address || !formData.city || !formData.projectType}
              className="w-full bg-brand-red hover:bg-brand-red-dark disabled:bg-brand-red/50 disabled:cursor-not-allowed text-white py-3 rounded-[2px] font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              {isCheckingStorms ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Checking...
                </>
              ) : (
                'Continue →'
              )}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            {/* Storm Alert Banner */}
            {stormAlert && (
              <Link 
                href={`/storm-check?address=${encodeURIComponent(getFullAddress())}`}
                className="block bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-3 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    <div>
                      <span className="font-bold">{stormAlert.stormCount} Storm{stormAlert.stormCount > 1 ? 's' : ''} Detected</span>
                      {stormAlert.hasHighRisk && (
                        <span className="text-orange-100 text-xs block">You may qualify for insurance coverage</span>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">View Report →</span>
                </div>
              </Link>
            )}

            <div>
              <label className="block text-sm text-slate-600 mb-1 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(919) 555-1234"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1 font-medium">Email (Optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
              />
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                disabled={isSubmitting}
                className="flex-1 border-2 border-brand-black hover:bg-slate-100 text-brand-black py-3 rounded-[2px] font-semibold transition-colors disabled:opacity-50"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-brand-red hover:bg-brand-red-dark text-white py-3 rounded-[2px] font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Get Free Inspection'
                )}
              </button>
            </div>
            <p className="text-center text-xs text-slate-400">
              🔒 Your information is secure and will never be shared
            </p>
          </div>
        )}
      </form>

      </div>
    </div>
  )
}
