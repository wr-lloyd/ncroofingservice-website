'use client'

import { useEffect, useCallback } from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  beforeImage: string
  afterImage: string
  title?: string
  location?: string
}

export default function ImageModal({
  isOpen,
  onClose,
  beforeImage,
  afterImage,
  title,
  location,
}: ImageModalProps) {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleEscape])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div>
            {title && <h3 className="text-white font-bold text-lg">{title}</h3>}
            {location && <p className="text-[#C8102E] text-sm">{location}</p>}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Slider */}
        <div className="p-4">
          <BeforeAfterSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            className="rounded-xl"
          />
        </div>

        {/* Instructions */}
        <div className="p-4 pt-0 text-center">
          <p className="text-slate-500 text-sm">
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
              Drag the slider left and right to compare before & after
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
