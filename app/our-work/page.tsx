'use client'

import { useState } from 'react'
import Link from 'next/link'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ImageModal from '@/components/ImageModal'

const projects = [
  {
    title: 'Complete Roof Replacement',
    location: 'Durham, NC',
    type: 'Residential',
    description: 'Full tear-off and replacement with GAF Timberline HDZ shingles. Included new underlayment, flashing, and ridge vents.',
    beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    title: 'Storm Damage Restoration',
    location: 'Raleigh, NC',
    type: 'Insurance Claim',
    description: 'Hail damage repair and insurance claim assistance. Complete roof replacement with upgraded impact-resistant shingles.',
    beforeImage: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
  },
  {
    title: 'FORTIFIED Roof Installation',
    location: 'Rougemont, NC',
    type: 'FORTIFIED',
    description: 'New construction FORTIFIED Roof designation. Enhanced sealing and attachment methods for storm resistance.',
    beforeImage: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
  },
  {
    title: 'Metal Roof Installation',
    location: 'Chapel Hill, NC',
    type: 'Residential',
    description: 'Standing seam metal roof installation. 50-year warranty, energy efficient, and beautiful curb appeal.',
    beforeImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  },
  {
    title: 'Commercial Flat Roof',
    location: 'Durham, NC',
    type: 'Commercial',
    description: 'TPO flat roof system for retail space. Complete with proper drainage and 20-year warranty.',
    beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    title: 'Emergency Leak Repair',
    location: 'Hillsborough, NC',
    type: 'Repair',
    description: 'Emergency response for active roof leak. Temporary weatherproofing followed by permanent repair.',
    beforeImage: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
  },
]

export default function OurWorkPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with roof image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">Project Gallery</h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              See examples of our work across the Triangle. Drag the slider on each image to compare before & after results.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                {/* Before/After Slider */}
                <div className="relative">
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                  />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      project.type === 'FORTIFIED' ? 'bg-green-500/80 text-white' :
                      project.type === 'Insurance Claim' ? 'bg-blue-500/80 text-white' :
                      project.type === 'Commercial' ? 'bg-purple-500/80 text-white' :
                      project.type === 'Repair' ? 'bg-amber-500/80 text-white' :
                      'bg-slate-500/80 text-white'
                    }`}>
                      {project.type}
                    </span>
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => openModal(project)}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-900/80 hover:bg-slate-800 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-colors"
                    aria-label="View full size"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-blue-600 text-sm mb-3">{project.location}</p>
                  <p className="text-slate-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note about photos */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm">
            <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Want to See More?</h3>
            <p className="text-slate-600 mb-4">
              We&apos;d be happy to show you photos of completed projects similar to yours during your free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Schedule Your Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">How We Work</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From first contact to final walk-through, we ensure a smooth experience with clear communication every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-md">1</div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">Free Inspection</h3>
              <p className="text-slate-600 text-sm">We thoroughly assess your roof and document our findings with photos.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-md">2</div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">Detailed Estimate</h3>
              <p className="text-slate-600 text-sm">You receive a clear, itemized estimate with material and labor costs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-md">3</div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">Professional Install</h3>
              <p className="text-slate-600 text-sm">Our certified crew completes the work with attention to every detail.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-md">✓</div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">Final Walk-Through</h3>
              <p className="text-slate-600 text-sm">We inspect the completed work together and ensure your satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Get a free inspection and consultation. We&apos;ll assess your roof and provide an honest recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 text-lg"
            >
              Schedule Free Inspection
            </Link>
            <a
              href="tel:+19194758841"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all text-lg"
            >
              Call (919) 475-8841
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          beforeImage={selectedProject.beforeImage}
          afterImage={selectedProject.afterImage}
          title={selectedProject.title}
          location={selectedProject.location}
        />
      )}
    </main>
  )
}
