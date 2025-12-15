'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ProblemFinder, ScheduleInspection, DamageUpload, InsuranceHelper, VisualizerCard } from '@/components/tools'

type Situation = 'storm' | 'leak' | 'aging' | 'upgrade' | null

const situations = [
  {
    id: 'storm' as const,
    title: 'I think I have storm damage',
    subtitle: 'Wind, hail, or fallen debris',
    icon: '⛈️',
    color: 'from-blue-600 to-blue-700',
    borderColor: 'border-blue-500/50',
  },
  {
    id: 'leak' as const,
    title: 'I have an active leak',
    subtitle: 'Water coming in or stains appearing',
    icon: '💧',
    color: 'from-red-600 to-red-700',
    borderColor: 'border-red-500/50',
  },
  {
    id: 'aging' as const,
    title: 'My roof is old / needs replacement',
    subtitle: '15+ years old or showing wear',
    icon: '🏠',
    color: 'from-amber-600 to-amber-700',
    borderColor: 'border-amber-500/50',
  },
  {
    id: 'upgrade' as const,
    title: 'I want to upgrade my roof',
    subtitle: 'New look, better performance, or FORTIFIED',
    icon: '✨',
    color: 'from-purple-600 to-purple-700',
    borderColor: 'border-purple-500/50',
  },
]

// Tool type
interface Tool {
  id: string
  name: string
  href: string
  external?: boolean
  highlight?: boolean
}

interface ToolCategory {
  id: string
  title: string
  icon: string
  color: string
  tools: Tool[]
}

// Tool categories for the sidebar
const toolCategories: ToolCategory[] = [
  {
    id: 'storm',
    title: 'Storm Check',
    icon: '⚡',
    color: 'text-orange-400',
    tools: [
      { id: 'storm-check', name: 'Check My Address', href: '/storm-check', highlight: true },
    ],
  },
  {
    id: 'visualize',
    title: 'Visualize',
    icon: '🎨',
    color: 'text-purple-400',
    tools: [
      { id: 'gaf-visualizer', name: 'GAF Designer', href: 'https://www.gaf.com/en-us/plan-design/design-your-roof', external: true },
      { id: 'oc-visualizer', name: 'Owens Corning', href: 'https://www.owenscorning.com/en-us/roofing/widgets/designeyeq', external: true },
      { id: 'ct-visualizer', name: 'CertainTeed', href: 'https://www.certainteed.com/colorview/', external: true },
    ],
  },
  {
    id: 'diagnose',
    title: 'Diagnose',
    icon: '🔍',
    color: 'text-amber-400',
    tools: [
      { id: 'problem-finder', name: 'Problem Finder', href: '#problem-finder' },
      { id: 'damage-upload', name: 'Upload Photos', href: '#damage-upload' },
    ],
  },
  {
    id: 'plan',
    title: 'Plan',
    icon: '📋',
    color: 'text-blue-400',
    tools: [
      { id: 'insurance-helper', name: 'Insurance Helper', href: '#insurance-helper' },
      { id: 'fortified-info', name: 'FORTIFIED Info', href: '#fortified-info' },
    ],
  },
  {
    id: 'schedule',
    title: 'Schedule',
    icon: '📅',
    color: 'text-green-400',
    tools: [
      { id: 'schedule-inspection', name: 'Book Inspection', href: '#schedule-inspection' },
    ],
  },
]

export default function StartPage() {
  const [selectedSituation, setSelectedSituation] = useState<Situation>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [showMobileToolbar, setShowMobileToolbar] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['problem-finder', 'damage-upload', 'insurance-helper', 'fortified-info', 'schedule-inspection']
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSituationSelect = (situation: Situation) => {
    setSelectedSituation(situation)
    setCurrentStep(1)
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      setSelectedSituation(null)
      setCurrentStep(0)
    }
  }

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setShowMobileToolbar(false)
    }
  }

  const getStepsForSituation = (situation: Situation) => {
    switch (situation) {
      case 'storm':
        return [
          { title: 'Identify the Problem', component: <ProblemFinder onSelectAction={() => handleNext()} /> },
          { title: 'Upload Photos', component: <DamageUpload onContinueToSchedule={() => handleNext()} /> },
          { title: 'Insurance Help', component: <InsuranceHelper /> },
          { title: 'Schedule Inspection', component: <ScheduleInspection /> },
        ]
      case 'leak':
        return [
          { title: 'Identify the Problem', component: <ProblemFinder onSelectAction={() => handleNext()} /> },
          { title: 'Upload Photos', component: <DamageUpload onContinueToSchedule={() => handleNext()} /> },
          { title: 'Schedule Priority Inspection', component: <ScheduleInspection urgency="priority" prefilledIssue="Active leak / water damage" /> },
        ]
      case 'aging':
        return [
          { title: 'Explore Options', component: <VisualizerCard /> },
          { title: 'Schedule Inspection', component: <ScheduleInspection /> },
        ]
      case 'upgrade':
        return [
          { title: 'Explore Options', component: <VisualizerCard /> },
          { title: 'Learn About FORTIFIED', component: <FortifiedExplainer /> },
          { title: 'Schedule Consultation', component: <ScheduleInspection /> },
        ]
      default:
        return []
    }
  }

  const steps = selectedSituation ? getStepsForSituation(selectedSituation) : []
  const currentStepData = steps[currentStep - 1]

  return (
    <main className="pt-20 min-h-screen bg-slate-900">
      {/* Hero Banner */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with roof image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">
              {selectedSituation ? 'Your Journey' : 'Start Here'}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">
              {selectedSituation ? 'Your Roofing Journey' : 'How Can We Help?'}
            </h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              {selectedSituation 
                ? 'Follow these steps and we\'ll take care of the rest. Skip ahead anytime using the tools on the right.'
                : 'Tell us your situation and we\'ll guide you to the right solution, or jump directly to any tool below.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {!selectedSituation ? (
              /* Situation Selection */
              <div>
                {/* Storm Check CTA */}
                <Link 
                  href="/storm-check"
                  className="block mb-8 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-6 hover:from-orange-600/30 hover:to-red-600/30 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl">
                        ⚡
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                          Storm Damage Checker
                          <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">NEW</span>
                        </h3>
                        <p className="text-slate-400 text-sm">Enter your address to see if recent storms may have damaged your roof</p>
                      </div>
                    </div>
                    <svg className="w-6 h-6 text-orange-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <h2 className="text-xl font-semibold text-white mb-6">What brings you here today?</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {situations.map((situation) => (
                    <button
                      key={situation.id}
                      onClick={() => handleSituationSelect(situation.id)}
                      className={`text-left p-6 rounded-2xl border ${situation.borderColor} bg-slate-800/50 hover:bg-slate-800 transition-all group`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${situation.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                          {situation.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                            {situation.title}
                          </h3>
                          <p className="text-slate-400 text-sm">{situation.subtitle}</p>
                        </div>
                        <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Not Sure Option */}
                <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-white/5">
                  <p className="text-slate-400 mb-3">Not sure what you need?</p>
                  <Link
                    href="#schedule-inspection"
                    onClick={(e) => { e.preventDefault(); scrollToSection('schedule-inspection'); }}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule a free inspection and we&apos;ll figure it out together
                  </Link>
                </div>
              </div>
            ) : (
              /* Journey Steps */
              <div>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <span className="text-slate-500 text-sm">Step {currentStep} of {steps.length}</span>
                  </div>
                  <div className="flex gap-2">
                    {steps.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 flex-1 rounded-full transition-colors ${
                          idx + 1 <= currentStep ? 'bg-blue-500' : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Step Title */}
                <h2 className="text-2xl font-bold text-white mb-6">{currentStepData?.title}</h2>

                {/* Step Content */}
                <div className="mb-8">
                  {currentStepData?.component}
                </div>

                {/* Skip / Next */}
                {currentStep < steps.length && (
                  <div className="flex justify-end">
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      Skip this step
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sticky Sidebar - Desktop */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/10 px-5 py-4">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Jump to Tools
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">Quick access to all resources</p>
                </div>

                {/* Tool Categories */}
                <div className="p-4 space-y-4">
                  {toolCategories.map((category) => (
                    <div key={category.id}>
                      <h4 className={`text-xs font-semibold uppercase tracking-wider ${category.color} mb-2 flex items-center gap-2`}>
                        <span>{category.icon}</span>
                        {category.title}
                      </h4>
                      <ul className="space-y-1">
                        {category.tools.map((tool) => (
                          <li key={tool.id}>
                            {tool.external ? (
                              <a
                                href={tool.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors group"
                              >
                                <span>{tool.name}</span>
                                <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            ) : (
                              <button
                                onClick={() => scrollToSection(tool.id)}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                                  activeSection === tool.id
                                    ? 'bg-blue-600/20 text-blue-400'
                                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                              >
                                <span>{tool.name}</span>
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Tools Section */}
      <section className="border-t border-white/5 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">All Tools & Resources</h2>
            <p className="text-slate-400">Everything you need to make an informed decision about your roof.</p>
          </div>

          {/* Tool Sections */}
          <div className="space-y-16">
            {/* Visualizers */}
            <div id="visualizers" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🎨</span>
                <h3 className="text-xl font-bold text-white">Visualization Tools</h3>
              </div>
              <VisualizerCard />
            </div>

            {/* Problem Finder */}
            <div id="problem-finder" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🔍</span>
                <h3 className="text-xl font-bold text-white">Problem Finder</h3>
              </div>
              <ProblemFinder />
            </div>

            {/* Damage Upload */}
            <div id="damage-upload" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📷</span>
                <h3 className="text-xl font-bold text-white">Upload Damage Photos</h3>
              </div>
              <DamageUpload />
            </div>

            {/* Insurance Helper */}
            <div id="insurance-helper" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📋</span>
                <h3 className="text-xl font-bold text-white">Insurance Claim Helper</h3>
              </div>
              <InsuranceHelper />
            </div>

            {/* FORTIFIED Info */}
            <div id="fortified-info" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🛡️</span>
                <h3 className="text-xl font-bold text-white">FORTIFIED Roofing</h3>
              </div>
              <FortifiedExplainer />
            </div>

            {/* Schedule Inspection */}
            <div id="schedule-inspection" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📅</span>
                <h3 className="text-xl font-bold text-white">Schedule Your Free Inspection</h3>
              </div>
              <ScheduleInspection />
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-12 md:py-16 bg-slate-900 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">What Happens Next</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { step: 1, label: 'Inspect', icon: '🔍' },
              { step: 2, label: 'Options', icon: '📋' },
              { step: 3, label: 'Install', icon: '🔨' },
              { step: 4, label: 'Clean-up', icon: '✨' },
              { step: 5, label: 'Document', icon: '📄' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 md:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-xl flex items-center justify-center text-xl md:text-2xl mb-2">
                    {item.icon}
                  </div>
                  <span className="text-white font-medium text-sm">{item.label}</span>
                </div>
                {idx < 4 && (
                  <svg className="w-4 h-4 text-slate-600 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Floating Toolbar Button */}
      <div className="lg:hidden fixed bottom-20 right-4 z-40">
        <button
          onClick={() => setShowMobileToolbar(!showMobileToolbar)}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center transition-all"
        >
          {showMobileToolbar ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Toolbar Sheet */}
      {showMobileToolbar && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-slate-900/95 backdrop-blur-lg border-t border-white/10 rounded-t-3xl shadow-2xl animate-slide-up pb-20">
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {/* Handle */}
            <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto mb-6"></div>
            
            <h3 className="font-bold text-white text-lg mb-4">Jump to Tools</h3>
            
            <div className="space-y-4">
              {toolCategories.map((category) => (
                <div key={category.id}>
                  <h4 className={`text-xs font-semibold uppercase tracking-wider ${category.color} mb-2 flex items-center gap-2`}>
                    <span>{category.icon}</span>
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.tools.map((tool) => (
                      tool.external ? (
                        <a
                          key={tool.id}
                          href={tool.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-3 bg-slate-800 rounded-xl text-sm text-slate-300"
                        >
                          <span>{tool.name}</span>
                          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <button
                          key={tool.id}
                          onClick={() => scrollToSection(tool.id)}
                          className="flex items-center justify-between px-4 py-3 bg-slate-800 rounded-xl text-sm text-slate-300"
                        >
                          <span>{tool.name}</span>
                          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </button>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile overlay */}
      {showMobileToolbar && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setShowMobileToolbar(false)}
        />
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </main>
  )
}

// FORTIFIED Explainer Component
function FortifiedExplainer() {
  return (
    <div className="bg-gradient-to-br from-green-900/30 to-slate-900 rounded-2xl border border-green-500/30 p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">FORTIFIED Roofing</h3>
          <p className="text-green-400 text-sm">Storm-resistant • Insurance discounts • IBHS Certified</p>
        </div>
      </div>

      <p className="text-slate-300 mb-6">
        FORTIFIED is a building standard developed by the Insurance Institute for Business & Home Safety. 
        It goes beyond code to create roofs that can better withstand hurricanes, high winds, and hail.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/50 rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">💰</div>
          <h4 className="text-white font-medium text-sm">Insurance Savings</h4>
          <p className="text-slate-500 text-xs">15-45% premium discounts</p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">🛡️</div>
          <h4 className="text-white font-medium text-sm">Storm Resistance</h4>
          <p className="text-slate-500 text-xs">Proven performance in hurricanes</p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">📈</div>
          <h4 className="text-white font-medium text-sm">Home Value</h4>
          <p className="text-slate-500 text-xs">Increases resale value</p>
        </div>
      </div>

      <Link
        href="/services/fortified-roofing"
        className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors"
      >
        Learn More About FORTIFIED
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}
