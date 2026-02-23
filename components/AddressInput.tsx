'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import {
  lookupZip,
  searchCities,
  isCityValidForZip,
  getSuggestedCity,
  getCountyForZip,
  isValidNCZip,
  type CityEntry
} from '@/lib/nc-address-data'

export type CitySource = 'zip_autofill' | 'typeahead_selection' | 'manual_entry' | 'manual_kept_after_mismatch'

export interface AddressValue {
  streetAddress: string
  zip: string
  city: string
  county?: string
  citySource: CitySource
}

export interface AddressInputProps {
  value: AddressValue
  onChange: (value: AddressValue) => void
  errors?: { streetAddress?: string; zip?: string; city?: string }
  className?: string
}

export default function AddressInput({ value, onChange, errors, className = '' }: AddressInputProps) {
  const [cityResults, setCityResults] = useState<CityEntry[]>([])
  const [showCityDropdown, setShowCityDropdown] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [showMismatchWarning, setShowMismatchWarning] = useState(false)
  const [suggestedCity, setSuggestedCity] = useState<string | null>(null)
  
  const cityInputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  // Handle ZIP code changes - auto-fill city when valid 5-digit ZIP entered
  const handleZipChange = useCallback((newZip: string) => {
    // Only allow digits
    const cleanZip = newZip.replace(/\D/g, '').slice(0, 5)
    
    let updates: Partial<AddressValue> = { zip: cleanZip }
    
    if (cleanZip.length === 5) {
      const zipData = lookupZip(cleanZip)
      if (zipData) {
        // Auto-fill city if empty
        if (!value.city) {
          updates.city = zipData.preferred
          updates.county = zipData.county
          updates.citySource = 'zip_autofill'
        } else {
          // Check for mismatch
          if (!isCityValidForZip(value.city, cleanZip)) {
            setSuggestedCity(zipData.preferred)
            setShowMismatchWarning(true)
          } else {
            setShowMismatchWarning(false)
            setSuggestedCity(null)
          }
          updates.county = zipData.county
        }
      }
    } else {
      setShowMismatchWarning(false)
      setSuggestedCity(null)
    }
    
    onChange({ ...value, ...updates })
  }, [value, onChange])

  // Handle city input changes with debounced search
  const handleCityChange = useCallback((newCity: string) => {
    onChange({ 
      ...value, 
      city: newCity, 
      citySource: 'manual_entry',
      county: '' // Clear county when manually editing city
    })
    
    setShowMismatchWarning(false)
    setSuggestedCity(null)
    
    // Debounce city search
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    
    debounceRef.current = setTimeout(() => {
      if (newCity.length >= 1) {
        const results = searchCities(newCity, 10)
        setCityResults(results)
        setShowCityDropdown(results.length > 0 || newCity.length >= 2)
        setHighlightedIndex(-1)
      } else {
        setCityResults([])
        setShowCityDropdown(false)
      }
    }, 200)
  }, [value, onChange])

  // Handle city selection from dropdown
  const selectCity = useCallback((city: CityEntry) => {
    onChange({
      ...value,
      city: city.name,
      county: city.county,
      citySource: 'typeahead_selection'
    })
    setCityResults([])
    setShowCityDropdown(false)
    setHighlightedIndex(-1)
    
    // Check for mismatch after selection
    if (value.zip.length === 5 && !isCityValidForZip(city.name, value.zip)) {
      const suggested = getSuggestedCity(value.zip)
      if (suggested) {
        setSuggestedCity(suggested)
        setShowMismatchWarning(true)
      }
    } else {
      setShowMismatchWarning(false)
      setSuggestedCity(null)
    }
  }, [value, onChange])

  // Handle mismatch warning actions
  const useSuggestedCity = useCallback(() => {
    if (suggestedCity) {
      const county = getCountyForZip(value.zip)
      onChange({
        ...value,
        city: suggestedCity,
        county: county || value.county,
        citySource: 'zip_autofill'
      })
    }
    setShowMismatchWarning(false)
    setSuggestedCity(null)
  }, [suggestedCity, value, onChange])

  const keepManualEntry = useCallback(() => {
    onChange({
      ...value,
      citySource: 'manual_kept_after_mismatch'
    })
    setShowMismatchWarning(false)
    setSuggestedCity(null)
  }, [value, onChange])

  // Keyboard navigation for dropdown
  const handleCityKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!showCityDropdown || cityResults.length === 0) {
      if (e.key === 'Escape') {
        setShowCityDropdown(false)
      }
      return
    }
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev => 
          prev < cityResults.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : cityResults.length - 1
        )
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < cityResults.length) {
          selectCity(cityResults[highlightedIndex])
        }
        break
      case 'Escape':
        e.preventDefault()
        setShowCityDropdown(false)
        setHighlightedIndex(-1)
        break
      case 'Tab':
        setShowCityDropdown(false)
        setHighlightedIndex(-1)
        break
    }
  }, [showCityDropdown, cityResults, highlightedIndex, selectCity])

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        cityInputRef.current && 
        !cityInputRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowCityDropdown(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && dropdownRef.current) {
      const items = dropdownRef.current.querySelectorAll('li')
      if (items[highlightedIndex]) {
        items[highlightedIndex].scrollIntoView({ block: 'nearest' })
      }
    }
  }, [highlightedIndex])

  // Clean up debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  const inputBaseClass = "w-full px-4 py-3 border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-colors"
  const inputErrorClass = "border-red-500 bg-red-50"
  const inputNormalClass = "border-slate-200 bg-white"

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Street Address */}
      <div>
        <label htmlFor="streetAddress" className="block text-sm font-medium text-slate-700 mb-1">
          Street Address
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          placeholder="123 Main St"
          value={value.streetAddress}
          onChange={(e) => onChange({ ...value, streetAddress: e.target.value })}
          className={`${inputBaseClass} ${errors?.streetAddress ? inputErrorClass : inputNormalClass}`}
          autoComplete="street-address"
        />
        {errors?.streetAddress && (
          <p className="mt-1 text-sm text-red-600">{errors.streetAddress}</p>
        )}
      </div>

      {/* ZIP and City Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* ZIP Code - First */}
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-slate-700 mb-1">
            ZIP Code
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={5}
            placeholder="27601"
            value={value.zip}
            onChange={(e) => handleZipChange(e.target.value)}
            className={`${inputBaseClass} ${errors?.zip ? inputErrorClass : inputNormalClass}`}
            autoComplete="postal-code"
          />
          {errors?.zip && (
            <p className="mt-1 text-sm text-red-600">{errors.zip}</p>
          )}
        </div>

        {/* City - Second with Typeahead */}
        <div className="relative">
          <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">
            City
          </label>
          <input
            ref={cityInputRef}
            type="text"
            id="city"
            name="city"
            placeholder="Raleigh"
            value={value.city}
            onChange={(e) => handleCityChange(e.target.value)}
            onKeyDown={handleCityKeyDown}
            onFocus={() => {
              if (value.city.length >= 1) {
                const results = searchCities(value.city, 10)
                setCityResults(results)
                setShowCityDropdown(results.length > 0)
              }
            }}
            className={`${inputBaseClass} ${errors?.city ? inputErrorClass : inputNormalClass}`}
            autoComplete="off"
            role="combobox"
            aria-expanded={showCityDropdown}
            aria-haspopup="listbox"
            aria-controls="city-listbox"
            aria-autocomplete="list"
          />
          {errors?.city && (
            <p className="mt-1 text-sm text-red-600">{errors.city}</p>
          )}

          {/* City Dropdown */}
          {showCityDropdown && (
            <ul
              ref={dropdownRef}
              id="city-listbox"
              role="listbox"
              className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-auto"
            >
              {cityResults.length > 0 ? (
                cityResults.map((city, index) => (
                  <li
                    key={`${city.name}-${city.county}`}
                    role="option"
                    aria-selected={index === highlightedIndex}
                    className={`px-4 py-2 cursor-pointer ${
                      index === highlightedIndex 
                        ? 'bg-brand-red text-white' 
                        : 'hover:bg-slate-100'
                    }`}
                    onClick={() => selectCity(city)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    <span className="font-medium">{city.name}</span>
                    <span className={index === highlightedIndex ? 'text-red-100' : 'text-slate-500'}>
                      {' — '}{city.county} County
                    </span>
                  </li>
                ))
              ) : (
                <li className="px-4 py-3 text-slate-500 text-center">
                  No matching NC cities found
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Mismatch Warning */}
      {showMismatchWarning && suggestedCity && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div className="flex-1">
              <p className="text-sm text-amber-800">
                For ZIP <span className="font-semibold">{value.zip}</span>, USPS typically uses{' '}
                <span className="font-semibold">{suggestedCity}</span>.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={useSuggestedCity}
                  className="px-3 py-1.5 text-sm font-medium bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-md transition-colors"
                >
                  Use {suggestedCity}
                </button>
                <button
                  type="button"
                  onClick={keepManualEntry}
                  className="px-3 py-1.5 text-sm font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-md transition-colors"
                >
                  Keep My Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hidden county display for debugging (can be removed in production) */}
      {value.county && (
        <input type="hidden" name="county" value={value.county} />
      )}
    </div>
  )
}
