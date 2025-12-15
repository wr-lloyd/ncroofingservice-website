'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'
import TriangleMap from '@/components/TriangleMap'

interface StormAlert {
  stormCount: number
  overallRisk: 'low' | 'moderate' | 'high' | 'severe'
  hasHighRisk: boolean
  insuranceDeadline?: string
}

// Local representatives data with phone numbers
const localRepsList = [
  { 
    name: 'Mike Villarroel', 
    region: 'Greater Raleigh', 
    mapRegion: 'raleigh' as const,
    phone: '(919) 521-9545',
    phoneRaw: '+19195219545',
    color: 'blue',
    cities: ['Raleigh', 'Cary', 'Wake Forest', 'Apex', 'Garner', 'Knightdale']
  },
  { 
    name: 'Randy Butler', 
    region: 'Greater Durham', 
    mapRegion: 'durham' as const,
    phone: '(919) 475-8841',
    phoneRaw: '+19194758841',
    color: 'green',
    cities: ['Durham', 'Rougemont', 'Butner', 'Creedmoor', 'Oxford']
  },
  { 
    name: 'Preston Mayo', 
    region: 'Greater Chapel Hill', 
    mapRegion: 'chapel-hill' as const,
    phone: '(919) 525-1862',
    phoneRaw: '+19195251862',
    color: 'purple',
    cities: ['Chapel Hill', 'Carrboro', 'Hillsborough', 'Mebane']
  },
]

// City to rep mapping
const localReps = {
  raleigh: localRepsList[0],
  cary: localRepsList[0],
  'wake-forest': localRepsList[0],
  apex: localRepsList[0],
  garner: localRepsList[0],
  knightdale: localRepsList[0],
  durham: localRepsList[1],
  rougemont: localRepsList[1],
  butner: localRepsList[1],
  creedmoor: localRepsList[1],
  oxford: localRepsList[1],
  'chapel-hill': localRepsList[2],
  hillsborough: localRepsList[2],
  carrboro: localRepsList[2],
  mebane: localRepsList[2],
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

  // Get the local rep based on selected city
  const selectedRep = useMemo(() => {
    if (!formData.city || formData.city === 'other') return null
    return localReps[formData.city as keyof typeof localReps] || null
  }, [formData.city])

  // City name mapping for storm check
  const cityNames: Record<string, string> = {
    'raleigh': 'Raleigh',
    'cary': 'Cary',
    'wake-forest': 'Wake Forest',
    'apex': 'Apex',
    'garner': 'Garner',
    'knightdale': 'Knightdale',
    'durham': 'Durham',
    'rougemont': 'Rougemont',
    'butner': 'Butner',
    'creedmoor': 'Creedmoor',
    'oxford': 'Oxford',
    'chapel-hill': 'Chapel Hill',
    'carrboro': 'Carrboro',
    'hillsborough': 'Hillsborough',
    'mebane': 'Mebane',
  }

  // Check for storm damage when address and city are filled
  const checkStormDamage = useCallback(async (address: string, city: string) => {
    if (!address || !city || city === 'other') {
      setStormAlert(null)
      return
    }
    
    const cityName = cityNames[city] || city
    const fullAddress = `${address}, ${cityName}, NC`
    
    setIsCheckingStorms(true)
    try {
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
            insuranceDeadline: data.insuranceDeadline,
          })
        } else {
          setStormAlert(null)
        }
      }
    } catch (error) {
      console.error('Storm check error:', error)
    } finally {
      setIsCheckingStorms(false)
    }
  }, [])

  // Debounced storm check when address or city changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.address.length >= 5 && formData.city) {
        checkStormDamage(formData.address, formData.city)
      }
    }, 800) // Wait 800ms after typing stops
    
    return () => clearTimeout(timer)
  }, [formData.address, formData.city, checkStormDamage])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const repName = selectedRep ? selectedRep.name : 'Our team'
    alert(`Thank you for contacting B&C Roofing! ${repName} will call you within 30 minutes during business hours.`)
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
        {/* Background with roof image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">Get Your Free Inspection</h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Ready for a free roof inspection and consultation? Reach out and we&apos;ll be in touch within 30 minutes during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Your Local Experts Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Call Your Local Expert Directly</h2>
            <p className="text-slate-400">Real people who know your neighborhood — not a call center.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {localRepsList.map((rep) => (
              <div 
                key={rep.name}
                className={`relative bg-slate-800/50 rounded-xl p-6 border border-white/5 hover:border-${rep.color}-500/30 transition-all overflow-hidden`}
              >
                {/* Map Backdrop */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <TriangleMap highlightedRegion={rep.mapRegion} />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      rep.color === 'blue' ? 'bg-blue-600' :
                      rep.color === 'green' ? 'bg-green-600' :
                      'bg-purple-600'
                    }`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{rep.name}</h3>
                      <p className={`text-sm font-medium ${
                        rep.color === 'blue' ? 'text-blue-400' :
                        rep.color === 'green' ? 'text-green-400' :
                        'text-purple-400'
                      }`}>{rep.region}</p>
                    </div>
                  </div>
                  
                  <a 
                    href={`tel:${rep.phoneRaw}`}
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold transition-colors mb-3 ${
                      rep.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                      rep.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                      'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {rep.phone}
                  </a>
                  
                  <div className="flex flex-wrap gap-1">
                    {rep.cities.map((city) => (
                      <span key={city} className="px-2 py-0.5 bg-slate-700/50 text-slate-400 text-xs rounded-full">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-2">Or Request a Callback</h2>
              <p className="text-slate-400 mb-6">Fill out the form and we&apos;ll call you to schedule.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
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
                          href={`/storm-check?address=${encodeURIComponent(`${formData.address}, ${cityNames[formData.city] || formData.city}, NC`)}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold mt-2 underline underline-offset-2 hover:text-orange-200"
                        >
                          View Full Storm Report →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                
                {isCheckingStorms && (
                  <div className="bg-slate-700/50 rounded-xl p-3 text-slate-300 text-sm flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Checking storm activity in your area...
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="(919) 555-1234"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-slate-300 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="123 Main St"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-slate-300 mb-2">
                      City *
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select city</option>
                      <optgroup label="Greater Raleigh">
                        <option value="raleigh">Raleigh</option>
                        <option value="cary">Cary</option>
                        <option value="wake-forest">Wake Forest</option>
                        <option value="apex">Apex</option>
                        <option value="garner">Garner</option>
                        <option value="knightdale">Knightdale</option>
                      </optgroup>
                      <optgroup label="Greater Durham">
                        <option value="durham">Durham</option>
                        <option value="rougemont">Rougemont</option>
                        <option value="butner">Butner</option>
                        <option value="creedmoor">Creedmoor</option>
                        <option value="oxford">Oxford</option>
                      </optgroup>
                      <optgroup label="Greater Chapel Hill">
                        <option value="chapel-hill">Chapel Hill</option>
                        <option value="carrboro">Carrboro</option>
                        <option value="hillsborough">Hillsborough</option>
                        <option value="mebane">Mebane</option>
                      </optgroup>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
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
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Tell Us About Your Roof
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Describe your roofing needs or any damage you've noticed..."
                  ></textarea>
                </div>
                
                {/* Local Rep Display */}
                {selectedRep && (
                  <div className={`p-4 rounded-xl border ${
                    selectedRep.color === 'blue' ? 'bg-blue-900/20 border-blue-500/30' :
                    selectedRep.color === 'green' ? 'bg-green-900/20 border-green-500/30' :
                    'bg-purple-900/20 border-purple-500/30'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          selectedRep.color === 'blue' ? 'bg-blue-600' :
                          selectedRep.color === 'green' ? 'bg-green-600' :
                          'bg-purple-600'
                        }`}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">Your Local Expert: <span className="font-bold">{selectedRep.name}</span></p>
                          <p className="text-slate-400 text-xs">{selectedRep.region}</p>
                        </div>
                      </div>
                      <a 
                        href={`tel:${selectedRep.phoneRaw}`}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          selectedRep.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                          selectedRep.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                          'bg-purple-600 hover:bg-purple-700 text-white'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {selectedRep.phone}
                      </a>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Request Free Inspection
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
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-slate-400 text-lg mb-8">
                Prefer to reach out directly? We&apos;re happy to help however works best for you.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Phone</h3>
                    <a href="tel:+19194758841" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                      (919) 475-8841
                    </a>
                    <p className="text-slate-500 text-sm mt-1">Call or text anytime</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Email</h3>
                    <a href="mailto:bandc@ncroofingservice.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      bandc@ncroofingservice.com
                    </a>
                    <p className="text-slate-500 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Office Location</h3>
                    <p className="text-slate-400">
                      5950 Mt. Harmony Church Rd<br />
                      Rougemont, NC 27572
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Business Hours</h3>
                    <div className="text-slate-400 space-y-1">
                      <p>Monday - Saturday: 7:00am - 9:30pm</p>
                      <p>Sunday: 12:00pm - 9:30pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Emergency Services</h3>
                    <p className="text-red-400 font-semibold">Available 24/7</p>
                    <p className="text-slate-500 text-sm mt-1">Call or text for urgent roof issues</p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/5">
                <h3 className="text-white font-semibold text-lg mb-4">Service Areas</h3>
                <p className="text-slate-400 mb-4 text-sm">
                  Based in Rougemont, we serve the entire Triangle area including:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {['Rougemont', 'Durham', 'Raleigh', 'Cary', 'Chapel Hill', 'Hillsborough', 'Wake Forest', 'Apex', 'Butner', 'Creedmoor', 'Oxford', 'Mebane'].map((area) => (
                    <div key={area} className="flex items-center gap-2 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connect With Us */}
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/5 mt-6">
                <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
                <p className="text-slate-400 mb-4 text-sm">
                  Follow us on social media for project photos, roofing tips, and company updates.
                </p>
                <SocialLinks size="md" variant="filled" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Prefer to Talk?</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Call Randall directly. We&apos;re happy to answer questions and schedule your free inspection.
          </p>
          <a
            href="tel:+19194758841"
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (919) 475-8841
          </a>
        </div>
      </section>
    </main>
  )
}
