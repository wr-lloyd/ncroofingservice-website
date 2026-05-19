'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Problem {
  id: string
  label: string
  icon: React.ReactNode
  urgency: 'low' | 'medium' | 'high' | 'emergency'
  advice: string
  nextStep: {
    label: string
    action: 'upload' | 'schedule' | 'estimate' | 'call'
  }
}

const problems: Problem[] = [
  {
    id: 'active-leak',
    label: 'Active Leak',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    urgency: 'emergency',
    advice: 'An active leak needs immediate attention to prevent water damage. We offer 24/7 emergency response.',
    nextStep: { label: 'Call Now for Emergency Service', action: 'call' }
  },
  {
    id: 'ceiling-stains',
    label: 'Stains on Ceiling',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    urgency: 'high',
    advice: 'Ceiling stains usually indicate a roof leak. Even if it\'s not currently raining, the damage may be ongoing.',
    nextStep: { label: 'Upload Photos for Assessment', action: 'upload' }
  },
  {
    id: 'missing-shingles',
    label: 'Missing Shingles',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    urgency: 'medium',
    advice: 'Missing shingles expose your roof deck to the elements. Schedule an inspection soon to prevent further damage.',
    nextStep: { label: 'Schedule Free Inspection', action: 'schedule' }
  },
  {
    id: 'granules-gutters',
    label: 'Granules in Gutters',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    urgency: 'medium',
    advice: 'Excessive granule loss is a sign of aging shingles. Your roof may be nearing the end of its lifespan.',
    nextStep: { label: 'Get a Replacement Estimate', action: 'estimate' }
  },
  {
    id: 'sagging',
    label: 'Sagging Roof',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    urgency: 'high',
    advice: 'A sagging roof indicates structural issues that need immediate professional evaluation.',
    nextStep: { label: 'Schedule Urgent Inspection', action: 'schedule' }
  },
  {
    id: 'not-sure',
    label: 'Not Sure / Other',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    urgency: 'low',
    advice: 'No worries! A free inspection will help us identify any issues and give you peace of mind.',
    nextStep: { label: 'Schedule Free Inspection', action: 'schedule' }
  },
]

const urgencyColors = {
  emergency: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', label: '🚨 Emergency' },
  high: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', label: 'High Priority' },
  medium: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', label: 'Schedule Soon' },
  low: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', label: 'When Convenient' },
}

interface ProblemFinderProps {
  onSelectAction?: (action: string, problemId: string) => void
  compact?: boolean
}

export default function ProblemFinder({ onSelectAction, compact = false }: ProblemFinderProps) {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null)

  const handleSelect = (problem: Problem) => {
    setSelectedProblem(problem)
  }

  const handleAction = () => {
    if (selectedProblem && onSelectAction) {
      onSelectAction(selectedProblem.nextStep.action, selectedProblem.id)
    }
  }

  if (selectedProblem) {
    const urgency = urgencyColors[selectedProblem.urgency]
    
    return (
      <div className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm ${compact ? 'p-6' : 'p-8'}`}>
        {/* Result Header */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => setSelectedProblem(null)}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${urgency.bg} ${urgency.text} border ${urgency.border}`}>
            {urgency.label}
          </span>
        </div>

        {/* Selected Problem */}
        <div className={`${urgency.bg} ${urgency.border} border-2 rounded-xl p-6 mb-6`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`${urgency.text}`}>
              {selectedProblem.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{selectedProblem.label}</h3>
          </div>
          <p className="text-slate-700">{selectedProblem.advice}</p>
        </div>

        {/* Action Button */}
        {selectedProblem.nextStep.action === 'call' ? (
          <a
            href="tel:+13367663464"
            className="flex items-center justify-center gap-2 w-full bg-brand-red hover:bg-brand-red-dark text-white py-4 rounded-[2px] font-semibold transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {selectedProblem.nextStep.label}
          </a>
        ) : (
          <button
            onClick={handleAction}
            className="flex items-center justify-center gap-2 w-full bg-brand-red hover:bg-brand-red-dark text-white py-4 rounded-[2px] font-semibold transition-colors text-lg"
          >
            {selectedProblem.nextStep.label}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        )}

        {/* Alternative */}
        <p className="text-center text-slate-500 text-sm mt-4">
          Or call anytime: <a href="tel:+13367663464" className="text-brand-red hover:underline">(336) ROOFING</a>
        </p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm ${compact ? 'p-6' : 'p-8'}`}>
      <div className="text-center mb-6">
        <h3 className={`font-bold text-slate-900 ${compact ? 'text-xl' : 'text-2xl'}`}>What&apos;s happening with your roof?</h3>
        <p className="text-slate-500 mt-2">Select the issue that best describes your situation</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {problems.map((problem) => (
          <button
            key={problem.id}
            onClick={() => handleSelect(problem)}
            className="flex flex-col items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-brand-red/30 rounded-xl transition-all group text-center"
          >
            <div className="text-slate-500 group-hover:text-brand-red transition-colors">
              {problem.icon}
            </div>
            <span className="text-slate-900 font-medium text-sm">{problem.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
