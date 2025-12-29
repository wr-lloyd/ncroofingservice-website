'use client'

import { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface StormEvent {
  date: string
  type: 'hail' | 'wind' | 'tornado'
  severity: string
  distance: number
  description: string
  damageRisk: 'low' | 'moderate' | 'high' | 'severe'
  magnitude?: string
}

interface StormResults {
  address: string
  storms: StormEvent[]
  overallRisk: 'low' | 'moderate' | 'high' | 'severe'
  insuranceDeadline?: string
  recommendation: string
}

// Simulated storm data for NC Triangle area (in production, this would come from NOAA API)
const simulateStormLookup = (address: string): StormResults => {
  // Simulate processing delay and return mock data
  // In production, this would call the NOAA Storm Events API
  
  const mockStorms: StormEvent[] = [
    {
      date: '2024-11-15',
      type: 'hail',
      severity: '1.25" diameter',
      distance: 2.3,
      description: 'Quarter-sized hail reported across Wake County',
      damageRisk: 'high',
      magnitude: '1.25 inches'
    },
    {
      date: '2024-10-02',
      type: 'wind',
      severity: '65 mph gusts',
      distance: 4.1,
      description: 'Severe thunderstorm with damaging winds',
      damageRisk: 'moderate',
      magnitude: '65 mph'
    },
    {
      date: '2024-08-18',
      type: 'hail',
      severity: '0.75" diameter',
      distance: 1.8,
      description: 'Dime to penny-sized hail',
      damageRisk: 'moderate',
      magnitude: '0.75 inches'
    },
    {
      date: '2024-06-25',
      type: 'tornado',
      severity: 'EF-1',
      distance: 8.5,
      description: 'Brief tornado touchdown with 90 mph winds',
      damageRisk: 'high',
      magnitude: 'EF-1'
    },
  ]

  // Calculate deadline (typically 1-2 years from most recent damaging storm)
  const mostRecentStorm = mockStorms[0]
  const stormDate = new Date(mostRecentStorm.date)
  const deadline = new Date(stormDate)
  deadline.setFullYear(deadline.getFullYear() + 1)

  return {
    address,
    storms: mockStorms,
    overallRisk: 'high',
    insuranceDeadline: deadline.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    recommendation: 'Based on recent storm activity, we strongly recommend a professional roof inspection. Multiple hail events in your area have caused documented damage to roofs.'
  }
}

const riskColors = {
  low: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', icon: '✓' },
  moderate: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-600', icon: '⚠' },
  high: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', icon: '⚠' },
  severe: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', icon: '🚨' },
}

const stormIcons = {
  hail: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" strokeWidth={2} />
      <circle cx="6" cy="8" r="2" strokeWidth={2} />
      <circle cx="18" cy="8" r="2" strokeWidth={2} />
      <circle cx="8" cy="16" r="2" strokeWidth={2} />
      <circle cx="16" cy="16" r="2" strokeWidth={2} />
    </svg>
  ),
  wind: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5a2 2 0 012 2M6 8h10M8 12h8a2 2 0 110 4M4 16h12" />
    </svg>
  ),
  tornado: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M6 10h12M8 14h8M10 18h4" />
    </svg>
  ),
}

function StormCheckContent() {
  const searchParams = useSearchParams()
  const [address, setAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<StormResults | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showScheduleForm, setShowScheduleForm] = useState(false)
  const [hasAutoChecked, setHasAutoChecked] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
  })
  
  const resultsRef = useRef<HTMLElement>(null)
  
  // Function to check storm data
  const checkStormData = useCallback(async (addressToCheck: string) => {
    if (!addressToCheck.trim()) return

    setIsLoading(true)
    setError(null)
    setResults(null)
    
    try {
      const response = await fetch('/api/storm-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: addressToCheck }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        setError(data.error || 'An error occurred. Please try again.')
        return
      }
      
      setResults(data)
    } catch (err) {
      setError('Unable to check storm data. Please try again.')
      console.error('Storm check error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])
  
  // Auto-fill and auto-check if address is provided in URL
  useEffect(() => {
    const urlAddress = searchParams.get('address')
    if (urlAddress && !hasAutoChecked) {
      setAddress(urlAddress)
      setHasAutoChecked(true)
      // Auto-run the check after setting the address
      checkStormData(urlAddress)
    }
  }, [searchParams, hasAutoChecked, checkStormData])
  
  // Auto-scroll to results when they load
  useEffect(() => {
    if (results && resultsRef.current) {
      // Small delay to ensure the DOM has updated
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [results])

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault()
    checkStormData(address)
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send to lead API with storm context
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'storm-check',
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined,
          address: results?.address || address,
          preferredTime: formData.preferredTime,
          stormRisk: results?.overallRisk,
          stormCount: results?.storms.length,
          issueType: 'storm-damage',
          notes: `Storm check results: ${results?.overallRisk?.toUpperCase()} risk, ${results?.storms.length} events detected`,
          metadata: {
            urgency: results?.overallRisk === 'severe' || results?.overallRisk === 'high' ? 'priority' : 'normal',
            timestamp: new Date().toISOString(),
          }
        }),
      })
      
      setSubmitSuccess(true)
      setShowScheduleForm(false)
    } catch (err) {
      console.error('Failed to submit lead:', err)
      alert('Something went wrong. Please call us directly at (919) 475-8841')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Free Storm Damage Assessment</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">Was Your Roof Hit By a Storm?</h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Enter your address to see recent storm activity in your area. Most homeowners don&apos;t realize they have storm damage until it&apos;s too late.
            </p>
          </div>
        </div>
      </section>

      {/* Address Input Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleCheck} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                  Enter Your Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Main St, Raleigh, NC 27601"
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors text-lg"
                  required
                />
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-wait text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg flex items-center justify-center gap-2 shadow-md"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Checking...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Check My Roof
                    </>
                  )}
                </button>
              </div>
            </div>
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-center">
                {error}
              </div>
            )}
            <p className="text-slate-500 text-sm mt-4 text-center">
              We check storm reports within a 25-mile radius of your NC address
            </p>
          </form>
        </div>
      </section>

      {/* Results Section */}
      {results && (
        <section ref={resultsRef} className="py-16 bg-white scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overall Risk Banner */}
            <div className={`${riskColors[results.overallRisk].bg} ${riskColors[results.overallRisk].border} border-2 rounded-2xl p-6 mb-8 shadow-sm`}>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full ${results.overallRisk === 'high' || results.overallRisk === 'severe' ? 'bg-orange-500' : 'bg-yellow-500'} flex items-center justify-center text-2xl text-white`}>
                    {riskColors[results.overallRisk].icon}
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${riskColors[results.overallRisk].text}`}>
                      {results.overallRisk.toUpperCase()} DAMAGE RISK
                    </h2>
                    <p className="text-slate-600">{results.storms.length} storm events detected near your address</p>
                  </div>
                </div>
                {results.insuranceDeadline && (
                  <div className="bg-slate-100 rounded-xl px-4 py-2 text-center border border-slate-200">
                    <p className="text-slate-500 text-xs uppercase tracking-wider">Insurance Deadline</p>
                    <p className="text-slate-900 font-bold">{results.insuranceDeadline}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Storm Events List */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Recent Storm Activity</h3>
              {results.storms.map((storm, index) => (
                <div 
                  key={index}
                  className={`${riskColors[storm.damageRisk].bg} ${riskColors[storm.damageRisk].border} border-2 rounded-xl p-5`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${
                      storm.type === 'hail' ? 'bg-cyan-100 text-cyan-600' :
                      storm.type === 'wind' ? 'bg-blue-100 text-blue-600' :
                      'bg-red-100 text-red-600'
                    } flex items-center justify-center flex-shrink-0`}>
                      {stormIcons[storm.type]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="text-slate-900 font-semibold capitalize">
                          {storm.type === 'hail' ? '🌨️' : storm.type === 'wind' ? '💨' : '🌪️'} {storm.type.charAt(0).toUpperCase() + storm.type.slice(1)} Event
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${riskColors[storm.damageRisk].border} ${riskColors[storm.damageRisk].text}`}>
                          {storm.damageRisk.toUpperCase()} RISK
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm mt-1">{storm.description}</p>
                      <div className="flex flex-wrap gap-4 mt-3 text-sm">
                        <span className="text-slate-500">
                          📅 {new Date(storm.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="text-slate-500">
                          📍 {storm.distance} miles away
                        </span>
                        <span className="text-slate-500">
                          📊 {storm.severity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendation */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="text-slate-900 font-bold text-lg mb-2 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Our Recommendation
              </h3>
              <p className="text-slate-700">{results.recommendation}</p>
            </div>

            {/* Insurance Info */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
              <h3 className="text-slate-900 font-bold text-lg mb-4">📋 What You Should Know About Insurance</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Most NC insurance policies cover storm damage including hail, wind, and fallen trees</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>You typically have <strong className="text-slate-900">1-2 years</strong> from the storm date to file a claim</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>A professional inspection creates documentation for your insurance company</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>NC Roofing Service can meet with your insurance adjuster to ensure all damage is documented</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            {submitSuccess ? (
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You, {formData.name}!</h3>
                <p className="text-green-100 mb-4">
                  We&apos;ve received your request and will call you at {formData.phone} to schedule your free inspection.
                </p>
                <p className="text-green-200 text-sm">
                  Need immediate help? Call us now: <a href="tel:+19194758841" className="font-bold underline">(919) 475-8841</a>
                </p>
              </div>
            ) : !showScheduleForm ? (
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Professional Inspection</h3>
                <p className="text-blue-100 mb-6">
                  Don&apos;t wait until a small leak becomes a big problem. Our certified inspectors will document any damage for free.
                </p>
                <button
                  onClick={() => setShowScheduleForm(true)}
                  className="bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-xl font-semibold transition-colors text-lg shadow-md"
                >
                  Schedule Free Inspection
                </button>
                <p className="text-blue-200 text-sm mt-4">
                  Or call now: <a href="tel:+19194758841" className="font-bold underline">(919) 475-8841</a>
                </p>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Schedule Your Free Inspection</h3>
                <form onSubmit={handleScheduleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        placeholder="(919) 555-1234"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email (optional)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="">Select a time...</option>
                      <option value="morning">Morning (8am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 5pm)</option>
                      <option value="evening">Evening (5pm - 8pm)</option>
                      <option value="asap">As soon as possible</option>
                    </select>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-wait text-white px-6 py-4 rounded-xl font-semibold transition-colors text-lg shadow-md flex items-center justify-center gap-2"
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
                        'Request Free Inspection'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {!results && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How Storm Damage Happens</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Even storms that seem minor can cause significant roof damage that leads to costly repairs if left unchecked.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center shadow-sm">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌨️</span>
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">Hail Damage</h3>
                <p className="text-slate-600 text-sm">
                  Hail as small as 1&quot; can crack shingles, dent metal, and compromise your roof&apos;s protective granules. Damage often isn&apos;t visible from the ground.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💨</span>
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">Wind Damage</h3>
                <p className="text-slate-600 text-sm">
                  Winds over 50 mph can lift shingles, break seals, and create entry points for water. The edges and ridges of your roof are most vulnerable.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center shadow-sm">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌪️</span>
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">Severe Storms</h3>
                <p className="text-slate-600 text-sm">
                  Tornadoes and severe thunderstorms can cause catastrophic damage. Even near-misses can leave your roof compromised and vulnerable.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Check Now?</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500">⏰</span>
                      <span><strong className="text-slate-900">Insurance deadlines</strong> — Most policies require claims within 1-2 years</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500">💧</span>
                      <span><strong className="text-slate-900">Hidden leaks</strong> — Damage often isn&apos;t visible until water enters your home</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500">💰</span>
                      <span><strong className="text-slate-900">Free coverage</strong> — Many roofs qualify for full replacement at no cost to you</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500">📈</span>
                      <span><strong className="text-slate-900">Home value</strong> — A new roof increases property value by $15,000+</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 border border-blue-200">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-slate-900 mb-2">68%</div>
                    <p className="text-slate-600">of NC homeowners have storm damage they don&apos;t know about</p>
                    <p className="text-slate-500 text-sm mt-2">— NC Insurance Commissioner Report</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trust Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Trusted By NC Homeowners</h2>
            <p className="text-slate-600">We&apos;ve helped hundreds of families navigate storm damage claims</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              GAF Certified
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              BBB A+ Rated
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Insurance Claim Experts
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Loading fallback for Suspense
function StormCheckLoading() {
  return (
    <main className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-4 bg-slate-600 rounded w-48 mx-auto mb-4"></div>
              <div className="h-12 bg-slate-600 rounded w-96 mx-auto mb-6"></div>
              <div className="h-6 bg-slate-600 rounded w-80 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 animate-pulse">
            <div className="h-6 bg-slate-200 rounded w-32 mb-4"></div>
            <div className="h-14 bg-slate-200 rounded w-full"></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function StormCheckPage() {
  return (
    <Suspense fallback={<StormCheckLoading />}>
      <StormCheckContent />
    </Suspense>
  )
}
