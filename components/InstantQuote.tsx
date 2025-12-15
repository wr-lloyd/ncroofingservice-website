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
      const cityName = cityNames[formData.city] || formData.city
      const fullAddress = `${formData.address}, ${cityName}, NC`
      
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
    const cityName = cityNames[formData.city] || formData.city
    return `${formData.address}, ${cityName}, NC`
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
      <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
        <p className="text-green-100 mb-4">Thank you for contacting B&C Roofing and Repair.</p>
        <p className="text-green-100 mb-6">
          A roofing specialist will call you within <strong>30 minutes</strong> during business hours to schedule your <strong>FREE inspection</strong>.
        </p>
        <a 
          href="tel:+19194758841"
          className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
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
    <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-6 border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Free Roof Inspection</h3>
          <p className="text-slate-400 text-xs">Includes storm damage assessment</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-2 mb-6">
        {[1, 2].map((s) => (
          <div 
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              s <= step ? 'bg-blue-500' : 'bg-slate-700'
            }`}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Street Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St"
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select your city</option>
                <option value="rougemont">Rougemont</option>
                <option value="durham">Durham</option>
                <option value="raleigh">Raleigh</option>
                <option value="cary">Cary</option>
                <option value="chapel-hill">Chapel Hill</option>
                <option value="hillsborough">Hillsborough</option>
                <option value="wake-forest">Wake Forest</option>
                <option value="apex">Apex</option>
                <option value="other">Other (Triangle Area)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">What do you need?</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
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
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
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
                className="block bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-3 text-white hover:from-orange-600 hover:to-orange-700 transition-all"
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
              <label className="block text-sm text-slate-300 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(919) 555-1234"
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email (Optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                disabled={isSubmitting}
                className="flex-1 border border-white/20 hover:bg-white/5 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
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
            <p className="text-center text-xs text-slate-500">
              🔒 Your information is secure and will never be shared
            </p>
          </div>
        )}
      </form>

      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Licensed & Insured
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          No Obligation
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          BBB A+
        </span>
      </div>
    </div>
  )
}
