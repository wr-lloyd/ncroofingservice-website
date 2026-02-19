'use client'

import { useState, useRef } from 'react'

interface DamageUploadProps {
  onSubmit?: (data: DamageData) => void
  onContinueToSchedule?: () => void
}

interface DamageData {
  issueType: string
  description: string
  photos: File[]
  name: string
  phone: string
}

const issueTypes = [
  { id: 'leak', label: 'Leak / Water Damage', icon: '💧' },
  { id: 'missing', label: 'Missing Shingles', icon: '🏠' },
  { id: 'hail', label: 'Hail Damage', icon: '🧊' },
  { id: 'wind', label: 'Wind Damage', icon: '💨' },
  { id: 'age', label: 'Aging / Wear', icon: '📅' },
  { id: 'other', label: 'Other', icon: '❓' },
]

export default function DamageUpload({ onSubmit, onContinueToSchedule }: DamageUploadProps) {
  const [formData, setFormData] = useState<DamageData>({
    issueType: '',
    description: '',
    photos: [],
    name: '',
    phone: '',
  })
  const [previews, setPreviews] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleIssueSelect = (issueId: string) => {
    setFormData({ ...formData, issueType: issueId })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length + formData.photos.length > 5) {
      alert('Maximum 5 photos allowed')
      return
    }

    setFormData({ ...formData, photos: [...formData.photos, ...files] })

    // Create previews
    files.forEach(file => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviews(prev => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removePhoto = (index: number) => {
    setFormData({
      ...formData,
      photos: formData.photos.filter((_, i) => i !== index)
    })
    setPreviews(previews.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In production, you'd upload photos to a storage service
      // and include the URLs in the lead data
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'triage',
          issueType: formData.issueType,
          description: formData.description,
          name: formData.name,
          phone: formData.phone,
          photoCount: formData.photos.length,
          metadata: {
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
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

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-2xl border-2 border-green-200 p-8 text-center shadow-sm">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Photos Received!</h3>
        <p className="text-slate-600 mb-6">
          We&apos;ll review your photos and call within 2 hours during business hours with our assessment.
        </p>
        
        {onContinueToSchedule && (
          <button
            onClick={onContinueToSchedule}
            className="w-full bg-[#C8102E] hover:bg-[#a50d25] text-white py-4 rounded-[2px] font-semibold transition-colors mb-4 shadow-md"
          >
            Schedule an Inspection Now
          </button>
        )}
        
        <p className="text-slate-500 text-sm">
          Questions? Call us: <a href="tel:+19194758841" className="text-[#C8102E] hover:underline">(919) 475-8841</a>
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-[#C8102E]/10 rounded-[2px] flex items-center justify-center">
          <svg className="w-5 h-5 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Upload Damage Photos</h3>
      </div>
      <p className="text-slate-600 mb-6">Share photos and we&apos;ll assess the damage before your inspection.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Issue Type Selection */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">What type of issue? *</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {issueTypes.map((issue) => (
              <button
                key={issue.id}
                type="button"
                onClick={() => handleIssueSelect(issue.id)}
                className={`flex items-center gap-2 p-3 rounded-lg border transition-all text-left ${
                  formData.issueType === issue.id
                    ? 'bg-[#C8102E]/5 border-[#C8102E] text-slate-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[#C8102E]/30'
                }`}
              >
                <span className="text-xl">{issue.icon}</span>
                <span className="text-sm font-medium">{issue.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Upload Photos (up to 5)
          </label>
          
          {previews.length > 0 && (
            <div className="grid grid-cols-5 gap-2 mb-3">
              {previews.map((preview, index) => (
                <div key={index} className="relative aspect-square">
                  <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-full object-cover rounded-lg border border-slate-200" />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs hover:bg-red-600 shadow-sm"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          {formData.photos.length < 5 && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-[#C8102E] hover:bg-[#C8102E]/5 transition-colors text-center"
            >
              <svg className="w-8 h-8 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-slate-500">Click to add photos</span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </button>
          )}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
            Describe the issue
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 resize-none"
            placeholder="Where is the damage? When did you first notice it?"
          />
        </div>

        {/* Contact Info */}
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
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20"
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
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20"
              placeholder="(919) 555-1234"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !formData.issueType}
          className="w-full bg-[#C8102E] hover:bg-[#a50d25] disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-[2px] font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Uploading...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Submit for Review
            </>
          )}
        </button>
      </form>
    </div>
  )
}
