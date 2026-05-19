'use client'

import { useState, useEffect, useRef, useCallback, Suspense, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import AddressInput, { type AddressValue, type CitySource } from '@/components/AddressInput'
import { useHoneypot, HoneypotField } from '@/components/Honeypot'

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
  const [addressData, setAddressData] = useState<AddressValue>({
    streetAddress: '',
    zip: '',
    city: '',
    county: '',
    citySource: 'manual_entry',
  })
  const months = 24
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
  const honeypot = useHoneypot()
  
  const resultsRef = useRef<HTMLElement>(null)
  const loadingRef = useRef<HTMLElement>(null)
  const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set())

  const toggleDate = (date: string) => {
    setExpandedDates(prev => {
      const newSet = new Set(prev)
      if (newSet.has(date)) {
        newSet.delete(date)
      } else {
        newSet.add(date)
      }
      return newSet
    })
  }

  // Group storms by date
  const groupedStorms = useMemo(() => {
    if (!results?.storms) return {}
    
    return results.storms.reduce((groups, storm) => {
      const dateKey = new Date(storm.date).toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })
      if (!groups[dateKey]) {
        groups[dateKey] = []
      }
      groups[dateKey].push(storm)
      return groups
    }, {} as Record<string, typeof results.storms>)
  }, [results?.storms])
  
  // Function to check storm data
  const checkStormData = useCallback(async (addressToCheck: AddressValue, monthsToCheck: number = 24) => {
    if (!addressToCheck.streetAddress.trim()) return

    setIsLoading(true)
    setError(null)
    setResults(null)
    
    // Build full address for API call
    const fullAddress = addressToCheck.city && addressToCheck.zip 
      ? `${addressToCheck.streetAddress}, ${addressToCheck.city}, NC ${addressToCheck.zip}`
      : addressToCheck.streetAddress
    
    try {
      const response = await fetch('/api/storm-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: fullAddress, months: monthsToCheck }),
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
    const urlCity = searchParams.get('city')
    const urlZip = searchParams.get('zip')
    const urlCounty = searchParams.get('county')
    const urlCitySource = searchParams.get('citySource') as CitySource | null
    
    if (urlAddress && !hasAutoChecked) {
      const newAddressData: AddressValue = {
        streetAddress: urlAddress,
        city: urlCity || '',
        zip: urlZip || '',
        county: urlCounty || '',
        citySource: urlCitySource || 'manual_entry',
      }
      setAddressData(newAddressData)
      setHasAutoChecked(true)
      // Auto-run the check after setting the address
      checkStormData(newAddressData, months)
    }
  }, [searchParams, hasAutoChecked, checkStormData, months])
  
  // Auto-scroll to loading section when check starts
  useEffect(() => {
    if (isLoading && loadingRef.current) {
      setTimeout(() => {
        loadingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [isLoading])

  // Auto-scroll to results when they load
  useEffect(() => {
    if (results && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [results])

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault()
    checkStormData(addressData, months)
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
          address: results?.address || `${addressData.streetAddress}, ${addressData.city}, NC ${addressData.zip}`,
          preferredTime: formData.preferredTime,
          stormRisk: results?.overallRisk,
          stormCount: results?.storms.length,
          issueType: 'storm-damage',
          notes: `Storm check results: ${results?.overallRisk?.toUpperCase()} risk, ${results?.storms.length} events detected`,
          website: honeypot.value,
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
      alert('Something went wrong. Please call us directly at (336) ROOFING')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-900/80" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C8102E]/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/20 text-[#C8102E] font-bold text-xs uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Free Storm Damage Assessment
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-2 mb-8 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Was Your Roof <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Hit By a Storm?</span>
            </h1>
            <p className="text-slate-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Enter your address to scan official NOAA storm reports. Most homeowners don&apos;t realize they have damage until it&apos;s too late.
            </p>
          </div>
        </div>
      </section>

      {/* Address Input Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg mx-auto">
            {/* Bold Red Header */}
            <div className="bg-[#C8102E] px-6 py-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">Storm Damage Check</h3>
            </div>

            <div className="p-6">
              <p className="text-sm text-slate-600 mb-4">
                Scan official NOAA storm reports for the past 24 months near your address.
              </p>

              <form onSubmit={handleCheck} className="space-y-4">
                <AddressInput
                  value={addressData}
                  onChange={setAddressData}
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#C8102E] hover:bg-[#a50d25] disabled:bg-[#C8102E]/50 disabled:cursor-not-allowed text-white py-3 rounded-[2px] font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-sm">Checking NOAA storm data...</span>
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
              </form>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center font-medium animate-in fade-in slide-in-from-top-2 duration-300">
                  {error}
                </div>
              )}

              <p className="text-center text-xs text-slate-400 mt-4">
                Free instant results • No contact info required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loading Section - Shows when checking storm data */}
      {isLoading && !results && (
        <section ref={loadingRef} className="py-20 bg-white scroll-mt-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-slate-50 rounded-3xl p-12 border border-slate-200 shadow-lg">
              <div className="w-20 h-20 mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
                <div className="absolute inset-0 rounded-full border-4 border-t-[#C8102E] animate-spin"></div>
                <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Analyzing Storm Data</h3>
              <p className="text-slate-600 font-medium mb-6">
                Querying NOAA weather database for recent storm activity in your area...
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>This may take a few seconds</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {results && (
        <section ref={resultsRef} className="py-20 bg-white scroll-mt-20 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overall Risk Banner */}
            <div className={`relative ${riskColors[results.overallRisk].bg} ${riskColors[results.overallRisk].border} border-2 rounded-3xl p-8 mb-10 shadow-sm overflow-hidden group`}>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <span className="text-8xl select-none">{riskColors[results.overallRisk].icon}</span>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                  <div className={`w-20 h-20 rounded-2xl ${
                    results.overallRisk === 'severe' ? 'bg-red-500' :
                    results.overallRisk === 'high' ? 'bg-orange-500' :
                    results.overallRisk === 'moderate' ? 'bg-yellow-500' : 'bg-green-500'
                  } flex items-center justify-center text-4xl text-white shadow-lg animate-pulse-slow`}>
                    {riskColors[results.overallRisk].icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                      <h2 className={`text-3xl font-black tracking-tight ${riskColors[results.overallRisk].text}`}>
                        {results.overallRisk.toUpperCase()} DAMAGE RISK
                      </h2>
                      <span className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-xs font-bold border border-current opacity-70">
                        {results.storms.length} EVENTS DETECTED
                      </span>
                    </div>
                    <p className="text-slate-700 text-lg max-w-xl font-medium">
                      Our scan detected {results.storms.length} significant storm events near <span className="text-slate-900 font-bold underline decoration-blue-500/30">{results.address}</span>.
                    </p>
                  </div>
                </div>
                
                {results.insuranceDeadline && (
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 text-center border border-white shadow-xl min-w-[200px]">
                    <div className="flex items-center justify-center gap-2 text-slate-500 text-xs uppercase font-black tracking-widest mb-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Filing Deadline
                    </div>
                    <p className="text-slate-900 text-2xl font-black">{results.insuranceDeadline}</p>
                    <p className="text-slate-400 text-[10px] mt-1 italic">Approximate based on most recent event</p>
                  </div>
                )}
              </div>
            </div>

            {/* Storm Summary Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center hover:bg-white hover:shadow-md transition-all group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🌨️</div>
                <div className="text-2xl font-black text-slate-900 leading-none mb-1">
                  {results.storms.filter(s => s.type === 'hail').length}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Hail Events</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center hover:bg-white hover:shadow-md transition-all group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💨</div>
                <div className="text-2xl font-black text-slate-900 leading-none mb-1">
                  {results.storms.filter(s => s.type === 'wind').length}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Wind Events</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center hover:bg-white hover:shadow-md transition-all group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📍</div>
                <div className="text-2xl font-black text-slate-900 leading-none mb-1">
                  {Math.min(...results.storms.map(s => s.distance))}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Closest (Miles)</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center hover:bg-white hover:shadow-md transition-all group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📅</div>
                <div className="text-2xl font-black text-slate-900 leading-none mb-1">
                  {results.storms.length > 0 ? new Date(Math.max(...results.storms.map(s => new Date(s.date).getTime()))).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'N/A'}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Most Recent</div>
              </div>
            </div>

            {/* Storm Events List - Grouped by Date */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Recent Activity Log</h3>
                <span className="text-sm text-slate-500 font-medium">Click dates to expand details</span>
              </div>
              <div className="space-y-3">
              {Object.entries(groupedStorms)
                .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
                .map(([date, storms]) => {
                  const isExpanded = expandedDates.has(date)
                  const maxRisk = storms.reduce((max, s) => {
                    const riskLevels = { low: 0, moderate: 1, high: 2, severe: 3 }
                    return riskLevels[s.damageRisk] > riskLevels[max] ? s.damageRisk : max
                  }, 'low' as 'low' | 'moderate' | 'high' | 'severe')
                  
                  return (
                    <div key={date} className="border-2 border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                      {/* Date Header - Clickable */}
                      <button
                        onClick={() => toggleDate(date)}
                        className={`w-full px-6 py-5 flex items-center justify-between ${riskColors[maxRisk].bg} hover:brightness-95 transition-all`}
                      >
                        <div className="flex items-center gap-5">
                          <div className={`w-12 h-12 rounded-xl ${riskColors[maxRisk].bg} border-2 ${riskColors[maxRisk].border} flex items-center justify-center shadow-sm`}>
                            <span className="text-2xl">{riskColors[maxRisk].icon}</span>
                          </div>
                          <div className="text-left">
                            <h4 className="font-black text-slate-900 text-lg">{date}</h4>
                            <p className="text-sm text-slate-600 font-medium">
                              {storms.length} event{storms.length > 1 ? 's' : ''} • 
                              {storms.filter(s => s.type === 'hail').length > 0 && ` ${storms.filter(s => s.type === 'hail').length} hail`}
                              {storms.filter(s => s.type === 'wind').length > 0 && ` ${storms.filter(s => s.type === 'wind').length} wind`}
                              {storms.filter(s => s.type === 'tornado').length > 0 && ` ${storms.filter(s => s.type === 'tornado').length} tornado`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest border-2 ${riskColors[maxRisk].border} ${riskColors[maxRisk].text}`}>
                            {maxRisk.toUpperCase()} RISK
                          </span>
                          <div className={`w-8 h-8 rounded-full bg-white/50 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                      
                      {/* Expandable Events List */}
                      {isExpanded && (
                        <div className="divide-y divide-slate-50 animate-in slide-in-from-top-4 duration-300">
                          {storms.map((storm, index) => (
                            <div 
                              key={index}
                              className="p-6 bg-white"
                            >
                              <div className="flex items-start gap-6">
                                <div className={`w-14 h-14 rounded-2xl ${
                                  storm.type === 'hail' ? 'bg-cyan-50 text-cyan-600' :
                                  storm.type === 'wind' ? 'bg-blue-50 text-[#C8102E]' :
                                  'bg-red-50 text-red-600'
                                } flex items-center justify-center flex-shrink-0 shadow-inner`}>
                                  {stormIcons[storm.type]}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
                                    <h4 className="text-slate-900 font-bold text-lg flex items-center gap-2">
                                      {storm.type === 'hail' ? '🌨️' : storm.type === 'wind' ? '💨' : '🌪️'} 
                                      <span className="capitalize">{storm.type} Event</span>
                                    </h4>
                                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black tracking-widest border ${riskColors[storm.damageRisk].border} ${riskColors[storm.damageRisk].text}`}>
                                      {storm.damageRisk.toUpperCase()}
                                    </span>
                                  </div>
                                  <p className="text-slate-600 font-medium leading-relaxed mb-4">{storm.description}</p>
                                  <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Distance</span>
                                      <span className="text-sm font-black text-slate-700">{storm.distance} miles</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Severity</span>
                                      <span className="text-sm font-black text-slate-700">{storm.severity}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Recommendation & Trust */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Professional Expert Advice
                  </h3>
                  <p className="text-white/90 text-xl font-medium leading-relaxed mb-6">
                    &ldquo;{results.recommendation}&rdquo;
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm font-bold">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Certified Inspectors
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm font-bold">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      NC Licensed
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-center">
                <h3 className="text-lg font-black mb-4 uppercase tracking-widest text-[#C8102E]">Claims Tip</h3>
                <p className="text-slate-300 font-medium leading-relaxed mb-6">
                  Most homeowners in North Carolina have up to <span className="text-white font-black underline decoration-blue-500">2 years</span> to file a claim. However, waiting increases the risk of claim denial.
                </p>
                <div className="pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-3 text-sm font-black text-slate-400">
                    <svg className="w-5 h-5 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    AVG CLAIM: $14,000+
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance Info */}
            <div className="bg-slate-50 rounded-3xl p-10 mb-12 border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                Insurance Guide for Homeowners
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-slate-600 font-medium leading-relaxed pt-1">
                      Most NC insurance policies cover <span className="text-slate-900 font-bold">hail, wind, and fallen trees</span>.
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-slate-600 font-medium leading-relaxed pt-1">
                      A professional inspection creates the <span className="text-slate-900 font-bold">critical documentation</span> required for claims.
                    </div>
                  </li>
                </ul>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-slate-600 font-medium leading-relaxed pt-1">
                      We can meet with your <span className="text-slate-900 font-bold">insurance adjuster</span> to ensure no damage is missed.
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-slate-600 font-medium leading-relaxed pt-1">
                      Many roofs qualify for <span className="text-slate-900 font-bold">full replacement</span> with only your deductible as cost.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            {submitSuccess ? (
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-10 text-center shadow-2xl animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg rotate-3">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Request Received!</h3>
                <p className="text-green-50 text-xl font-medium mb-8 max-w-xl mx-auto">
                  Thank you, {formData.name}. We&apos;ll call you at <span className="text-white font-bold">{formData.phone}</span> shortly to schedule your free assessment.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="tel:+13367663464" 
                    className="bg-white text-green-700 px-8 py-4 rounded-2xl font-black text-lg hover:bg-green-50 transition-colors shadow-lg flex items-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.2a1.019 1.019 0 00.24-1.02c-.37-1.12-.57-2.32-.57-3.57 0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12c.55 0 1-.45 1-1 0-3.31-2.69-6-6-6-.55 0-1 .45-1 1s.45 1 1 1c2.21 0 4 1.79 4 4 0 .55.45 1 1 1z" />
                    </svg>
                    (336) ROOFING
                  </a>
                </div>
              </div>
            ) : !showScheduleForm ? (
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Schedule Your Free On-Site Inspection</h3>
                  <p className="text-white/80 text-xl font-medium mb-8 max-w-2xl mx-auto">
                    A digital report is just the start. Our certified inspectors will perform a 21-point physical assessment to document damage for your claim.
                  </p>
                  <button
                    onClick={() => setShowScheduleForm(true)}
                    className="bg-white hover:bg-slate-50 active:scale-95 text-[#C8102E] px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto"
                  >
                    Get Free Inspection
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <p className="text-white/70 text-sm font-bold mt-6 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.2a1.019 1.019 0 00.24-1.02c-.37-1.12-.57-2.32-.57-3.57 0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                    </svg>
                    OR CALL NOW: <a href="tel:+13367663464" className="hover:text-white underline">(336) ROOFING</a>
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-blue-100 shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Schedule Free Assessment</h3>
                  <button onClick={() => setShowScheduleForm(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <form onSubmit={handleScheduleSubmit} className="space-y-6">
                  <HoneypotField fieldProps={honeypot.fieldProps} />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        placeholder="(919) 555-1234"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Email (optional)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Preferred Time</label>
                    <div className="relative">
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 appearance-none cursor-pointer"
                      >
                        <option value="">Select a window...</option>
                        <option value="morning">Morning (8am - 12pm)</option>
                        <option value="afternoon">Afternoon (12pm - 5pm)</option>
                        <option value="evening">Evening (5pm - 8pm)</option>
                        <option value="asap">As soon as possible</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C8102E] hover:bg-[#a50d25] disabled:bg-[#C8102E]/50 disabled:cursor-wait text-white px-8 py-5 rounded-[2px] font-black text-xl transition-all shadow-xl shadow-[#C8102E]/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Confirm Inspection Request'
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
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Understanding Storm Damage</h2>
              <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
                Even storms that seem minor can cause significant roof damage that leads to costly repairs if left unchecked.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform shadow-inner">
                  <span className="text-4xl">🌨️</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Hail Damage</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Hail as small as 1&quot; can crack shingles, dent metal, and compromise your roof&apos;s protective granules. Damage often isn&apos;t visible from the ground.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform shadow-inner">
                  <span className="text-4xl">💨</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Wind Damage</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Winds over 50 mph can lift shingles, break seals, and create entry points for water. The edges and ridges of your roof are most vulnerable.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform shadow-inner">
                  <span className="text-4xl">🌪️</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Severe Storms</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Tornadoes and severe thunderstorms can cause catastrophic damage. Even near-misses can leave your roof compromised and vulnerable.
                </p>
              </div>
            </div>

            <div className="mt-24 bg-slate-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C8102E]/10 blur-[120px] pointer-events-none"></div>
              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Why check your roof now?</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl shrink-0">⏰</div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">Insurance deadlines</h4>
                        <p className="text-slate-400">Most policies require claims within 1-2 years. Once the deadline passes, you pay for repairs out of pocket.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl shrink-0">💧</div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">Hidden leaks</h4>
                        <p className="text-slate-400">Damage often isn&apos;t visible until water enters your home, leading to mold and structural rot.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl shrink-0">💰</div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">Full Coverage</h4>
                        <p className="text-slate-400">If your roof is compromised by a storm, your insurance company is legally obligated to restore it to its pre-storm condition.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 text-center">
                  <div className="text-7xl font-black text-[#C8102E] mb-4 tracking-tighter">68%</div>
                  <p className="text-white text-xl font-medium mb-6 leading-relaxed">
                    of NC homeowners have storm damage they are currently unaware of.
                  </p>
                  <div className="h-px bg-white/10 mb-6"></div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">— NC Insurance Commissioner Report</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trust Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-black text-[#C8102E] uppercase tracking-[0.3em] mb-4">Quality & Reliability</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tight">Trusted by North Carolina Homeowners</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-900 font-black text-sm uppercase tracking-widest">GAF Certified</span>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-900 font-black text-sm uppercase tracking-widest">Fully Insured</span>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <svg className="w-8 h-8 text-[#C8102E]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-slate-900 font-black text-sm uppercase tracking-widest">BBB A+ Rated</span>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-900 font-black text-sm uppercase tracking-widest">Claim Experts</span>
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
