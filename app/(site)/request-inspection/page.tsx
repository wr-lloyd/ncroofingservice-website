'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import AddressInput, { type AddressValue, type CitySource } from '@/components/AddressInput'
import { useHoneypot, HoneypotField } from '@/components/Honeypot'
import TCPAConsent from '@/components/TCPAConsent'
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'

const reasonLabels: Record<string, string> = {
  'free-inspection': 'Free Roof Inspection',
  'repair-estimate': 'Roof Repair Estimate',
  'replacement-estimate': 'Roof Replacement Estimate',
  'storm-damage': 'Storm Damage Assessment',
  'insurance-help': 'Insurance Claim Help',
  'other': 'Other',
}

const inspectionReasons = [
  { value: 'free-inspection', label: 'Free Roof Inspection' },
  { value: 'repair-estimate', label: 'Roof Repair Estimate' },
  { value: 'replacement-estimate', label: 'Roof Replacement Estimate' },
  { value: 'storm-damage', label: 'Storm Damage Assessment' },
  { value: 'insurance-help', label: 'Insurance Claim Help' },
  { value: 'other', label: 'Other' },
]

function RequestInspectionContent() {
  const searchParams = useSearchParams()
  
  // Track if address info was provided via URL params
  const [hasUrlParams, setHasUrlParams] = useState(false)
  
  // For URL param case: read-only address display
  const [addressInfo, setAddressInfo] = useState({
    address: '',
    city: '',
    zip: '',
    county: '',
    citySource: 'manual_entry' as CitySource,
    reason: '',
  })
  
  // For direct navigation case: editable address input
  const [addressData, setAddressData] = useState<AddressValue>({
    streetAddress: '',
    zip: '',
    city: '',
    county: '',
    citySource: 'manual_entry',
  })
  const [reason, setReason] = useState('')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  })
  const honeypot = useHoneypot()
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const urlAddress = searchParams.get('address')
    const urlCity = searchParams.get('city')
    const urlZip = searchParams.get('zip')
    const urlCounty = searchParams.get('county')
    const urlCitySource = searchParams.get('citySource') as CitySource | null
    const urlReason = searchParams.get('reason')
    
    // Check if we have URL params
    if (urlAddress || urlReason) {
      setHasUrlParams(true)
      setAddressInfo({
        address: urlAddress || '',
        city: urlCity || '',
        zip: urlZip || '',
        county: urlCounty || '',
        citySource: urlCitySource || 'manual_entry',
        reason: urlReason || '',
      })
    } else {
      setHasUrlParams(false)
    }
  }, [searchParams])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    // Determine which address data to use
    const finalAddress = hasUrlParams ? addressInfo.address : addressData.streetAddress
    const finalCity = hasUrlParams ? addressInfo.city : addressData.city
    const finalZip = hasUrlParams ? addressInfo.zip : addressData.zip
    const finalCounty = hasUrlParams ? addressInfo.county : addressData.county
    const finalCitySource = hasUrlParams ? addressInfo.citySource : addressData.citySource
    const finalReason = hasUrlParams ? addressInfo.reason : reason
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'schedule',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: `${finalAddress}, ${finalCity}, NC ${finalZip}`,
          city: finalCity,
          zip: finalZip,
          county: finalCounty,
          issueType: finalReason,
          notes: formData.notes,
          website: honeypot.value,
          metadata: {
            source: 'request-inspection',
            citySource: finalCitySource,
            timestamp: new Date().toISOString(),
          }
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit request')
      }

      setIsSuccess(true)
    } catch (err) {
      console.error('Submit error:', err)
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  // Compute full address for display
  const displayAddress = hasUrlParams ? addressInfo.address : addressData.streetAddress
  const displayCity = hasUrlParams ? addressInfo.city : addressData.city
  const displayZip = hasUrlParams ? addressInfo.zip : addressData.zip
  const displayReason = hasUrlParams ? addressInfo.reason : reason
  
  const fullAddress = [displayAddress, displayCity, displayZip ? `NC ${displayZip}` : '']
    .filter(Boolean)
    .join(', ')

  if (isSuccess) {
    return (
      <main className="pt-20">
        <section className="py-20 bg-slate-100 min-h-[80vh] flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h2>
              <p className="text-slate-600 text-lg mb-8">
                Thank you, {formData.name}. We&apos;ll contact you at <span className="font-bold text-slate-900">{formData.phone}</span> within 30 minutes during business hours to schedule your free inspection.
              </p>
              
              {fullAddress && (
                <div className="bg-slate-50 rounded-xl p-4 mb-8">
                  <p className="text-sm text-slate-500 mb-1">Inspection Address</p>
                  <p className="font-bold text-slate-900">{fullAddress}</p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${OFFICE_PHONE}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white px-6 py-3 rounded-[2px] font-bold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {OFFICE_PHONE_DISPLAY}
                </a>
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-[2px] font-bold transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/20 text-[#C8102E] font-bold text-xs uppercase tracking-[0.2em] mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Free Inspection
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Schedule Your Free Roof Inspection
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Our certified inspectors will thoroughly assess your roof and provide a detailed report at no cost.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Address Summary - Show when URL params provided */}
            {hasUrlParams && (addressInfo.address || addressInfo.reason) && (
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                <p className="text-sm text-slate-500 mb-2">Inspection Details</p>
                {fullAddress && (
                  <p className="font-bold text-slate-900 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {fullAddress}
                  </p>
                )}
                {addressInfo.reason && (
                  <p className="text-slate-600 mt-1 flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {reasonLabels[addressInfo.reason] || addressInfo.reason}
                  </p>
                )}
              </div>
            )}
            
            <div className="p-6 md:p-8">
              {/* Address Input - Show when no URL params (direct navigation) */}
              {!hasUrlParams && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Property Information</h2>
                  
                  <AddressInput
                    value={addressData}
                    onChange={setAddressData}
                  />
                  
                  <div className="mt-4">
                    <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1">
                      Reason for Inspection <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-colors"
                    >
                      <option value="">Select a reason</option>
                      {inspectionReasons.map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <HoneypotField fieldProps={honeypot.fieldProps} />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(919) 555-1234"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">
                    Additional Notes <span className="text-slate-400">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific concerns or details about your roof..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 resize-none"
                  />
                </div>
                
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <TCPAConsent />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C8102E] hover:bg-[#a50d25] disabled:bg-[#C8102E]/50 disabled:cursor-not-allowed text-white py-4 rounded-[2px] font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      Request Free Inspection
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-slate-500">
                  🔒 Your information is secure and will never be shared or sold.
                </p>
              </form>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">What&apos;s Included in Your Free Inspection</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C8102E]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">21-Point Inspection</h3>
              <p className="text-slate-600">Comprehensive assessment of shingles, flashing, gutters, vents, and structural integrity.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C8102E]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Photo Documentation</h3>
              <p className="text-slate-600">Detailed photos of any damage found, perfect for insurance claims and records.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C8102E]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Written Report</h3>
              <p className="text-slate-600">Clear, honest assessment with repair recommendations and estimated costs.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function RequestInspectionLoading() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-slate-100 min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl animate-pulse">
            <div className="h-8 bg-slate-200 rounded w-3/4 mb-6"></div>
            <div className="space-y-4">
              <div className="h-12 bg-slate-200 rounded"></div>
              <div className="h-12 bg-slate-200 rounded"></div>
              <div className="h-12 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function RequestInspectionPage() {
  return (
    <Suspense fallback={<RequestInspectionLoading />}>
      <RequestInspectionContent />
    </Suspense>
  )
}
