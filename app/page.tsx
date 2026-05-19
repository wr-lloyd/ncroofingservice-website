import Link from 'next/link'
import Image from 'next/image'
import InstantQuote from '@/components/InstantQuote'
import GoogleReviews from '@/components/GoogleReviews'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background with video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/home-hero-1920x1080.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-[65fr_35fr] gap-8 items-center">
            {/* Left Column - Content (65%) */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="lg:block lg:whitespace-nowrap">Protecting <span className="text-brand-red">North Carolina</span> Homes </span>
                <span className="lg:block lg:whitespace-nowrap">with Strength and Integrity.</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Proudly serving the greater NC Triangle since 2018. We provide free inspections, 
                straightforward pricing, and dependable craftsmanship on every project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-[2px] font-semibold transition-all text-lg shadow-lg"
                >
                  Request Free Estimate
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+13367663464"
                  aria-label="Call (336) ROOFING"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-[2px] font-semibold transition-all text-lg backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (336) ROOFING
                </a>
              </div>
            </div>

            {/* Right Column - Instant Quote Form (35%) */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full sm:w-[90%] lg:w-[90%]">
                <InstantQuote />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted & Certified Banner */}
      <section className="py-6 bg-slate-800 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 text-sm mb-4">Trusted & Certified By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">GAF Certified</p>
                <p className="text-slate-400 text-xs">Factory-Certified Installer</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Owens Corning</p>
                <p className="text-slate-400 text-xs">Certified Contractor</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">CertainTeed</p>
                <p className="text-slate-400 text-xs">Credentialed Installer</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">FORTIFIED</p>
                <p className="text-slate-400 text-xs">IBHS Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">BBB A+ Rated</p>
                <p className="text-slate-400 text-xs">Accredited Since 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Both Markets */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Serving Both Markets</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-white mb-4">Residential Projects</h4>
              <ul className="space-y-3 text-white/80 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Roof replacement
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Storm restoration
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Exterior systems
                </li>
              </ul>
              <Link
                href="/residential"
                className="inline-flex items-center gap-2 text-brand-red hover:text-white transition-colors font-medium"
              >
                Explore Residential
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-white/5 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-white mb-4">Commercial Projects</h4>
              <ul className="space-y-3 text-white/80 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flat roofing systems
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Preventative maintenance
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Property management coordination
                </li>
              </ul>
              <Link
                href="/commercial"
                className="inline-flex items-center gap-2 text-brand-red hover:text-white transition-colors font-medium"
              >
                Explore Commercial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Light Mode */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Professional Roofing & Exterior Systems</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From free inspections to complete replacements, we provide the highest level of service 
              and quality workmanship on every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FORTIFIED Roofing - Featured */}
            <Link href="/residential/fortified-roofing" className="group md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all h-full relative overflow-hidden shadow-sm hover:shadow-lg">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    IBHS Certified
                  </span>
                </div>
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">FORTIFIED Roofing</h3>
                <p className="text-slate-600 mb-4">Storm-resistant roofing that may qualify for insurance discounts. Superior protection for NC weather.</p>
                <span className="text-green-600 font-medium group-hover:text-green-700 transition-colors inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Insurance Claims */}
            <Link href="/residential/storm-damage" className="group">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-red/30 transition-all h-full shadow-sm hover:shadow-lg">
                <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">Insurance Claims</h3>
                <p className="text-brand-gray mb-4">We help document damage, meet with adjusters, and advocate for fair compensation on your claim.</p>
                <span className="text-brand-red font-medium group-hover:text-brand-red-dark transition-colors inline-flex items-center gap-2">
                  Get Help
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Roof Replacement */}
            <Link href="/residential/roof-replacement" className="group">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-black/30 transition-all h-full shadow-sm hover:shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-black to-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">Roof Replacement</h3>
                <p className="text-brand-gray mb-4">Complete roof replacement with premium materials. Extended warranties from GAF, Owens Corning & more.</p>
                <span className="text-brand-red font-medium group-hover:text-brand-red-dark transition-colors inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Roof Repair */}
            <Link href="/residential/roof-repair" className="group">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-300 transition-all h-full shadow-sm hover:shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Roof Repair</h3>
                <p className="text-slate-600 mb-4">Leak repairs, shingle replacement, flashing fixes. We address the source of the problem, not just the symptoms.</p>
                <span className="text-amber-600 font-medium group-hover:text-amber-700 transition-colors inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Emergency Services */}
            <Link href="/residential/roof-repair" className="group">
              <div className="bg-white rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all h-full relative overflow-hidden shadow-sm hover:shadow-lg">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                    24/7
                  </span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Emergency Repairs</h3>
                <p className="text-slate-600 mb-4">Storm damage? Active leak? Call or text anytime. We respond quickly to protect your property.</p>
                <span className="text-red-600 font-medium group-hover:text-red-700 transition-colors inline-flex items-center gap-2">
                  Get Help Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Free Inspections */}
            <Link href="/contact" className="group">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-purple-300 transition-all h-full shadow-sm hover:shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Free Inspections</h3>
                <p className="text-slate-600 mb-4">Not sure what you need? Start with a free inspection. Honest assessment, no pressure, no obligation.</p>
                <span className="text-purple-600 font-medium group-hover:text-purple-700 transition-colors inline-flex items-center gap-2">
                  Schedule Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/residential"
              className="inline-flex items-center gap-2 border-2 border-brand-black hover:border-brand-red hover:bg-brand-red/5 text-brand-black hover:text-brand-red px-8 py-3 rounded-[2px] font-semibold transition-all"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Light Mode */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Why NC Roofing Service</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
                Professional Standards. Local Accountability.
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                We&apos;re not a franchise or a fly-by-night operation. NC Roofing Service is locally owned
                and operated in Rougemont, NC. Owner{' '}
                <Link
                  href="/team/randy-butler"
                  className="font-semibold text-slate-900 underline decoration-brand-red/40 underline-offset-4 hover:decoration-brand-red transition-colors"
                >
                  Randall Butler
                </Link>{' '}
                lives and works in this community — our reputation matters to us.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-1">Manufacturer Certified</h3>
                    <p className="text-slate-600">GAF, Owens Corning, and CertainTeed certified — access to premium warranties most contractors can&apos;t offer.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-1">FORTIFIED by IBHS</h3>
                    <p className="text-slate-600">We install storm-resistant roofing systems that may qualify for insurance discounts.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-1">Straightforward Pricing</h3>
                    <p className="text-slate-600">We explain every line item. No hidden fees, no surprises, no pressure.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-1">Local Accountability</h3>
                    <p className="text-slate-600">Based in Rougemont since 2018. We&apos;re your neighbors — our community matters to us.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 text-center border border-brand-red/20 shadow-sm">
                <div className="text-5xl font-bold text-brand-red mb-2">7+</div>
                <div className="text-brand-gray">Years in Business</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-green-200 shadow-sm">
                <div className="text-5xl font-bold text-green-600 mb-2">A+</div>
                <div className="text-slate-600">BBB Rating</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-amber-200 shadow-sm">
                <div className="text-5xl font-bold text-amber-600 mb-2">3</div>
                <div className="text-slate-600">Certifications</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-purple-200 shadow-sm">
                <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-slate-600">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Service Areas - Light Mode */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Service Areas</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Serving the NC Triangle</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Based in Rougemont, we provide roofing services throughout the Triangle and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Durham', slug: 'durham-nc' },
              { name: 'Raleigh', slug: 'raleigh-nc' },
              { name: 'Chapel Hill', slug: 'chapel-hill-nc' },
              { name: 'Cary', slug: 'cary-nc' },
              { name: 'Hillsborough', slug: 'hillsborough-nc' },
              { name: 'Wake Forest', slug: 'wake-forest-nc' },
              { name: 'Apex', slug: 'apex-nc' },
              { name: 'Holly Springs', slug: 'holly-springs-nc' },
              { name: 'Garner', slug: 'garner-nc' },
              { name: 'Morrisville', slug: 'morrisville-nc' },
              { name: 'Creedmoor', slug: 'creedmoor-nc' },
              { name: 'Butner', slug: 'butner-nc' },
            ].map((city) => (
              <Link 
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white hover:bg-brand-red/5 border border-slate-200 hover:border-brand-red/30 rounded-xl p-4 text-center transition-all group shadow-sm"
              >
                <span className="text-brand-black font-medium group-hover:text-brand-red transition-colors">{city.name}</span>
                <span className="text-slate-400 text-sm block">NC</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/locations" className="text-brand-red hover:underline text-sm font-medium">
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-red to-brand-red-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Request an assessment for your residential or commercial property. 
            No obligation, no pressure — just straightforward advice from local professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-[2px] font-semibold transition-all hover:scale-105 text-lg shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Request Assessment
            </Link>
            <a
              href="tel:+13367663464"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-all text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (336) ROOFING
            </a>
          </div>
          <p className="text-white/70 mt-8 text-sm">
            Licensed & Insured | GAF, Owens Corning & CertainTeed Certified | BBB A+ Rated
          </p>
        </div>
      </section>
    </main>
  )
}
