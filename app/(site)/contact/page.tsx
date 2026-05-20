'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'
import { regions, cityToRegionId, getRegionById, getCitiesForDropdown } from '@/lib/regions'
import { useHoneypot, HoneypotField } from '@/components/Honeypot'
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY, OFFICE_EMAIL, OFFICE_ADDRESS } from '@/lib/site'

interface StormAlert {
  stormCount: number
  overallRisk: 'low' | 'moderate' | 'high' | 'severe'
  hasHighRisk: boolean
  insuranceDeadline?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    service: '',
    message: '',
  })
  const [stormAlert, setStormAlert] = useState<StormAlert | null>(null)
  const [isCheckingStorms, setIsCheckingStorms] = useState(false)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const honeypot = useHoneypot()

  // Get cities grouped by region for dropdown
  const cityGroups = getCitiesForDropdown()

  // City name lookup for display
  const cityNameLookup = useMemo(() => {
    const lookup: Record<string, string> = {}
    cityGroups.forEach(group => {
      group.cities.forEach(city => {
        lookup[city.value] = city.label
      })
    })
    return lookup
  }, [cityGroups])

  // Get the selected region based on city
  const selectedRegion = useMemo(() => {
    if (!formData.city || formData.city === 'other') return null
    const regionId = cityToRegionId[formData.city]
    return regionId ? getRegionById(regionId) : null
  }, [formData.city])

  // Check for storm damage when address and city are filled.
  // Aborts in-flight requests when the user keeps typing so we don't render stale data.
  const checkStormDamage = useCallback(async (address: string, city: string, signal: AbortSignal) => {
    if (!address || !city || city === 'other') {
      setStormAlert(null)
      return
    }

    const cityName = cityNameLookup[city] || city
    const fullAddress = `${address}, ${cityName}, NC`

    setIsCheckingStorms(true)
    try {
      const response = await fetch('/api/storm-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: fullAddress }),
        signal,
      })

      if (signal.aborted) return

      if (response.ok) {
        const data = await response.json()
        if (signal.aborted) return
        if (data.storms && data.storms.length > 0) {
          const hasHighRisk = data.storms.some((s: { damageRisk: string }) =>
            s.damageRisk === 'high' || s.damageRisk === 'severe'
          )
          setStormAlert({
            stormCount: data.storms.length,
            overallRisk: data.overallRisk,
            hasHighRisk,
            insuranceDeadline: data.insuranceDeadline,
          })
        } else {
          setStormAlert(null)
        }
      }
    } catch (error) {
      if ((error as Error).name === 'AbortError') return
      console.error('Storm check error:', error)
    } finally {
      if (!signal.aborted) setIsCheckingStorms(false)
    }
  }, [cityNameLookup])

  useEffect(() => {
    const controller = new AbortController()
    const timer = setTimeout(() => {
      if (formData.address.length >= 5 && formData.city) {
        checkStormDamage(formData.address, formData.city, controller.signal)
      }
    }, 800)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [formData.address, formData.city, checkStormDamage])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const cityName = cityNameLookup[formData.city] || formData.city
      
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'estimate',
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined,
          address: formData.address,
          city: cityName,
          state: 'NC',
          issueType: formData.service,
          description: formData.message,
          stormRisk: stormAlert?.overallRisk,
          stormCount: stormAlert?.stormCount,
          notes: stormAlert ? `Storm alert: ${stormAlert.overallRisk} risk, ${stormAlert.stormCount} events` : undefined,
          website: honeypot.value,
          metadata: {
            urgency: stormAlert?.hasHighRisk ? 'priority' : 'normal',
            timestamp: new Date().toISOString(),
          }
        }),
      })
      
      setIsSubmitted(true)
    } catch (err) {
      console.error('Failed to submit lead:', err)
      alert(`Something went wrong. Please call us directly at ${OFFICE_PHONE_DISPLAY}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">Local Support, Right Where You Are</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">Meet Your Local Expert</h1>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              We have dedicated local leads who understand the resources, providers, and realities of your community. 
              We&apos;ll connect you with the right person automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Leads Section - GORGEOUS CARDS */}
      <section id="triangle-coverage-team" className="py-20 bg-gradient-to-b from-slate-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Your Triangle Coverage Team</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Real people who know your neighborhood — not a call center. Click to call your local expert directly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region) => (
              <Link 
                key={region.id}
                href="/locations"
                className="group relative block"
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                {/* Card */}
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ${
                  hoveredRegion === region.id ? 'shadow-2xl scale-[1.02]' : 'shadow-md'
                }`}>
                  {/* Top Gradient Bar */}
                  <div className={`h-2 ${
                    region.color === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
                    region.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-violet-400' :
                    region.color === 'amber' ? 'bg-gradient-to-r from-amber-500 to-orange-400' :
                    'bg-gradient-to-r from-blue-500 to-cyan-400'
                  }`} />
                  
                  {/* Photo Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={region.lead.photo}
                      alt={region.lead.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`} />
                    
                    {/* Region Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm ${
                        region.color === 'green' ? 'bg-green-600/80' :
                        region.color === 'purple' ? 'bg-purple-600/80' :
                        region.color === 'amber' ? 'bg-amber-600/80' :
                        'bg-[#C8102E]/80'
                      }`}>
                        {region.shortLabel}
                      </span>
                    </div>
                    
                    {/* Name & Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{region.lead.name}</h3>
                      <p className={`text-sm font-medium ${
                        region.color === 'green' ? 'text-green-300' :
                        region.color === 'purple' ? 'text-purple-300' :
                        region.color === 'amber' ? 'text-amber-300' :
                        'text-[#C8102E]'
                      }`}>{region.label}</p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    {/* Counties */}
                    <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      Serving {region.counties.join(', ')} {region.counties.length > 1 ? 'Counties' : 'County'}
                    </div>
                    
                    {/* Bio */}
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {region.lead.bio}
                    </p>
                    
                    {/* Cities */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Common Areas</p>
                      <div className="flex flex-wrap gap-1.5">
                        {region.displayCities.map((city) => (
                          <span key={city} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                            {city}
                          </span>
                        ))}
                        <span className="px-2 py-1 bg-slate-200 text-slate-500 text-xs rounded-full font-medium">
                          + more
                        </span>
                      </div>
                    </div>
                    
                    {/* View Details Button */}
                    <span 
                      className={`flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-0.5 ${
                        region.color === 'green' ? 'bg-gradient-to-r from-green-600 to-emerald-500 group-hover:from-green-700 group-hover:to-emerald-600 text-white' :
                        region.color === 'purple' ? 'bg-gradient-to-r from-purple-600 to-violet-500 group-hover:from-purple-700 group-hover:to-violet-600 text-white' :
                        region.color === 'amber' ? 'bg-gradient-to-r from-amber-600 to-orange-500 group-hover:from-amber-700 group-hover:to-orange-600 text-white' :
                        'bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:from-blue-700 group-hover:to-cyan-600 text-white'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      View Service Area →
                    </span>
                    
                    {/* Email Link */}
                    <span 
                      className="flex items-center justify-center gap-2 w-full py-2 mt-3 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {region.lead.email}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-1">4</div>
                <div className="text-slate-400 text-sm">Regional Experts</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">8</div>
                <div className="text-slate-400 text-sm">Counties Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">40+</div>
                <div className="text-slate-400 text-sm">Cities Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">30</div>
                <div className="text-slate-400 text-sm">Min Callback</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">Why It Matters</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Local Experts, Not a Call Center
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                When you work with NC Roofing Service, you&apos;re not just another ticket number. Your local rep knows your neighborhood, 
                understands local weather patterns, and is invested in their community&apos;s homes.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold mb-1">Fast Response Times</h3>
                    <p className="text-slate-600 text-sm">Your local rep is nearby — not across the country. Emergencies get handled quickly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold mb-1">Local Knowledge</h3>
                    <p className="text-slate-600 text-sm">We know Triangle weather, local building codes, and what works best for NC homes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold mb-1">Accountability</h3>
                    <p className="text-slate-600 text-sm">We live here too. Our reputation in the community matters to us personally.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Triangle Map Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-8 shadow-inner">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Serving the Triangle Since 2018</h3>
                  <p className="text-slate-500">Based in Rougemont, proudly serving the greater Raleigh-Durham-Chapel Hill area.</p>
                </div>
                
                {/* Region Quick Links */}
                <div className="space-y-3">
                  {regions.map((region) => (
                    <a
                      key={region.id}
                      href={`tel:${region.lead.phoneRaw}`}
                      className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                        region.color === 'green' ? 'bg-green-50 hover:bg-green-100 border border-green-200' :
                        region.color === 'purple' ? 'bg-purple-50 hover:bg-purple-100 border border-purple-200' :
                        region.color === 'amber' ? 'bg-amber-50 hover:bg-amber-100 border border-amber-200' :
                        'bg-blue-50 hover:bg-blue-100 border border-blue-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full overflow-hidden ring-2 ${
                          region.color === 'green' ? 'ring-green-400' :
                          region.color === 'purple' ? 'ring-purple-400' :
                          region.color === 'amber' ? 'ring-amber-400' :
                          'ring-blue-400'
                        }`}>
                          <Image
                            src={region.lead.photo}
                            alt={region.lead.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{region.label}</p>
                          <p className="text-sm text-slate-500">{region.lead.name}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                        region.color === 'green' ? 'bg-green-500 text-white' :
                        region.color === 'purple' ? 'bg-purple-500 text-white' :
                        region.color === 'amber' ? 'bg-amber-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        Call
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You, {formData.name}!</h2>
                  <p className="text-slate-600 mb-6">
                    {selectedRegion ? selectedRegion.lead.name : 'Our team'} will call you within 30 minutes during business hours.
                  </p>
                  <div className="bg-slate-50 rounded-xl p-6 text-left mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">What happens next:</h4>
                    <ol className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-[#C8102E] rounded-[2px] flex items-center justify-center flex-shrink-0 text-xs text-white">1</span>
                        We&apos;ll call to discuss your needs
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-[#C8102E] rounded-[2px] flex items-center justify-center flex-shrink-0 text-xs text-white">2</span>
                        Schedule a free on-site inspection
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-[#C8102E] rounded-[2px] flex items-center justify-center flex-shrink-0 text-xs text-white">3</span>
                        Receive a detailed assessment and options
                      </li>
                    </ol>
                  </div>
                  <p className="text-slate-500 text-sm">
                    Can&apos;t wait? Call us: <a href={`tel:${OFFICE_PHONE}`} className="text-blue-600 font-semibold hover:underline">{OFFICE_PHONE_DISPLAY}</a>
                  </p>
                </div>
              ) : (
                <>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Request a Callback</h2>
              <p className="text-slate-600 mb-6">Fill out the form and we&apos;ll connect you with your local expert.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <HoneypotField fieldProps={honeypot.fieldProps} />
                {/* Storm Damage Alert Banner */}
                {stormAlert && (
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white animate-in slide-in-from-top duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">⚡</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg flex items-center gap-2">
                          {stormAlert.stormCount} Storm{stormAlert.stormCount > 1 ? 's' : ''} Detected Near Your Address!
                        </h4>
                        <p className="text-orange-100 text-sm mt-1">
                          {stormAlert.hasHighRisk 
                            ? '⚠️ You may qualify for insurance coverage. Most policies cover storm damage claims.'
                            : 'Storm activity has been recorded in your area. A free inspection can identify any damage.'}
                        </p>
                        {stormAlert.insuranceDeadline && (
                          <p className="text-white text-sm mt-2 font-medium">
                            📅 Insurance deadline: {stormAlert.insuranceDeadline}
                          </p>
                        )}
                        <Link 
                          href={`/storm-check?address=${encodeURIComponent(`${formData.address}, ${cityNameLookup[formData.city] || formData.city}, NC`)}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold mt-2 underline underline-offset-2 hover:text-orange-200"
                        >
                          View Full Storm Report →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                
                {isCheckingStorms && (
                  <div className="bg-slate-100 rounded-xl p-3 text-slate-600 text-sm flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Checking storm activity in your area...
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-colors"
                      placeholder="(919) 555-1234"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-colors"
                      placeholder="123 Main St"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-2">
                      City *
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-colors"
                    >
                      <option value="">Select city</option>
                      {cityGroups.map((group) => (
                        <optgroup key={group.regionLabel} label={group.regionLabel}>
                          {group.cities.map((city) => (
                            <option key={city.value} value={city.value}>{city.label}</option>
                          ))}
                        </optgroup>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="inspection">Free Roof Inspection</option>
                    <option value="repair">Roof Repair</option>
                    <option value="replacement">Roof Replacement</option>
                    <option value="fortified">FORTIFIED Roofing</option>
                    <option value="storm">Storm Damage</option>
                    <option value="insurance">Insurance Claim Help</option>
                    <option value="commercial">Commercial Roofing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Tell Us About Your Roof
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-colors resize-none"
                    placeholder="Describe your roofing needs or any damage you've noticed..."
                  ></textarea>
                </div>
                
                {/* Selected Region Display */}
                {selectedRegion && (
                  <div className={`p-4 rounded-xl border-2 ${
                    selectedRegion.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                    selectedRegion.color === 'green' ? 'bg-green-50 border-green-200' :
                    'bg-purple-50 border-purple-200'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full overflow-hidden ring-2 ${
                          selectedRegion.color === 'blue' ? 'ring-blue-400' :
                          selectedRegion.color === 'green' ? 'ring-green-400' :
                          'ring-purple-400'
                        }`}>
                          <Image
                            src={selectedRegion.lead.photo}
                            alt={selectedRegion.lead.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold">Your Local Expert: {selectedRegion.lead.name}</p>
                          <p className="text-slate-500 text-sm">{selectedRegion.label}</p>
                        </div>
                      </div>
                      <a 
                        href={`tel:${selectedRegion.lead.phoneRaw}`}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-md ${
                          selectedRegion.color === 'blue' ? 'bg-[#C8102E] hover:bg-[#a50d25] text-white' :
                          selectedRegion.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                          'bg-purple-600 hover:bg-purple-700 text-white'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call
                      </a>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C8102E] hover:bg-[#a50d25] disabled:bg-[#C8102E]/50 text-white px-6 py-4 rounded-[2px] font-bold transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-wait flex items-center justify-center gap-2"
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

                <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2">
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
                    BBB A+ Rated
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No Obligation
                  </span>
                </div>
              </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-slate-600 text-lg mb-8">
                Prefer to reach out directly? We&apos;re happy to help however works best for you.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-[#C8102E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#111111] font-semibold text-lg">Main Office</h3>
                    <a href={`tel:${OFFICE_PHONE}`} className="text-2xl font-bold text-[#C8102E] hover:text-[#a50d25] transition-colors">
                      {OFFICE_PHONE_DISPLAY}
                    </a>
                    <p className="text-slate-500 text-sm mt-1">Call or text anytime</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg">Email</h3>
                    <a href={`mailto:${OFFICE_EMAIL}`} className="text-[#C8102E] hover:text-[#a50d25] transition-colors">
                      {OFFICE_EMAIL}
                    </a>
                    <p className="text-slate-500 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg">Office Location</h3>
                    <p className="text-slate-600">
                      {OFFICE_ADDRESS.street}<br />
                      {OFFICE_ADDRESS.city}, {OFFICE_ADDRESS.region} {OFFICE_ADDRESS.postalCode}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg">Business Hours</h3>
                    <div className="text-slate-600 space-y-1">
                      <p>Monday - Saturday: 7:00am - 9:30pm</p>
                      <p>Sunday: 12:00pm - 9:30pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200 shadow-sm">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg">Emergency Services</h3>
                    <p className="text-red-600 font-bold">Available 24/7</p>
                    <p className="text-slate-500 text-sm mt-1">Call or text for urgent roof issues</p>
                  </div>
                </div>
              </div>

              {/* Connect With Us */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold text-lg mb-4">Connect With Us</h3>
                <p className="text-slate-600 mb-4 text-sm">
                  Follow us on social media for project photos, roofing tips, and company updates.
                </p>
                <SocialLinks size="md" variant="filled" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
            Call your local expert directly or request a callback. Either way, you&apos;ll hear from us within 30 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${OFFICE_PHONE}`}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 text-lg shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {OFFICE_PHONE_DISPLAY}
            </a>
            <Link
              href="/storm-check"
              className="inline-flex items-center justify-center gap-3 bg-[#C8102E] hover:bg-[#a50d25] text-white px-8 py-4 rounded-[2px] font-bold transition-all hover:scale-105 text-lg shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Check Storm Damage
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
