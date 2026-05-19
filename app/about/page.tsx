import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'

export const metadata = {
  title: 'About Us | NC Roofing Service and Repair | Rougemont NC',
  description: 'Meet the team at NC Roofing Service and Repair, LLC. Family-owned roofing company serving the NC Triangle since 2018. Owner Randall Butler and certified professionals.',
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with roof image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">Our Story</h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              We combine manufacturer certifications with a commitment to clear communication and documented quality.
            </p>
          </div>
        </div>
      </section>

      {/* Owner & Story Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Professional Roofing Since 2018
              </h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <p>
                  NC Roofing Service and Repair, LLC was founded in 2018 by <strong className="text-slate-900">Randall Butler</strong>, 
                  a Rougemont native with a passion for quality craftsmanship and honest service.
                </p>
                <p>
                  What started as a commitment to serve our neighbors has grown into one of the 
                  Triangle&apos;s most trusted roofing companies — built on a foundation of integrity, 
                  expertise, and genuine care for every customer.
                </p>
                <p>
                  We&apos;re not a franchise or a fly-by-night operation. We live and work in this community, 
                  and our reputation matters to us. That&apos;s why we treat every roof like it&apos;s our own home.
                </p>
                <p className="text-slate-900 font-medium">
                  Certified, licensed and insured — local roofing professionals you can trust.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg ring-4 ring-blue-500/20">
                  <img 
                    src="/images/team/randy-north-400x400.jpg"
                    alt="Randall Butler"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-slate-900 font-bold text-2xl">Randall Butler</h3>
                <p className="text-brand-red">Owner & Founder</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Rougemont, NC Native</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>GAF, Owens Corning & CertainTeed Certified</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>FORTIFIED by IBHS Certified</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>BBB A+ Accredited (Since 2023)</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <a 
                  href="tel:+13367663464"
                  className="flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white py-3 rounded-[2px] font-semibold transition-colors shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Randall: (336) ROOFING
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Your Local Roofing Experts</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Meet the local experts who serve your community. Not a call center — real people who know your neighborhood.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Randy Butler */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center shadow-sm">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-md ring-2 ring-green-500/20">
                <img
                  src="/images/team/randy-north-400x400.jpg"
                  alt="Randy Butler"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-1">Randy Butler</h3>
              <p className="text-green-600 text-sm font-medium mb-2">Owner &amp; Greater Durham + Chapel Hill</p>
              <p className="text-slate-600 text-sm mb-4">
                Company founder and Rougemont native. Personally leads both the Durham and Chapel Hill regions with a hands-on commitment to quality.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Durham', 'Rougemont', 'Chapel Hill', 'Hillsborough'].map((city) => (
                  <span key={city} className="px-2 py-1 bg-slate-200 text-slate-600 text-xs rounded-full">{city}</span>
                ))}
              </div>
            </div>

            {/* Marvin Jackson */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center shadow-sm">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-md ring-2 ring-amber-500/20">
                <img
                  src="/images/team/marvin-granville-400x400.jpg"
                  alt="Marvin Jackson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-1">Marvin Jackson</h3>
              <p className="text-amber-700 text-sm font-medium mb-2">Greater Granville</p>
              <p className="text-slate-600 text-sm mb-4">
                Granville County native with deep roots in Oxford. Trusted across the Greater Granville area for quality roofing.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Oxford', 'Creedmoor', 'Butner', 'Stem'].map((city) => (
                  <span key={city} className="px-2 py-1 bg-slate-200 text-slate-600 text-xs rounded-full">{city}</span>
                ))}
              </div>
            </div>

            {/* Mike Villarroel */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center shadow-sm">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-md ring-2 ring-blue-500/20">
                <img
                  src="/images/team/mike-east-400x400.jpg"
                  alt="Mike Villarroel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-1">Mike Villarroel</h3>
              <p className="text-[#C8102E] text-sm font-medium mb-2">Greater Raleigh</p>
              <p className="text-slate-600 text-sm mb-4">
                Your dedicated expert for the Raleigh metro area. Serving Wake County with the same NC Roofing Service quality.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Raleigh', 'Cary', 'Wake Forest', 'Apex'].map((city) => (
                  <span key={city} className="px-2 py-1 bg-slate-200 text-slate-600 text-xs rounded-full">{city}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Operations Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">Leadership &amp; Operations</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">The People Behind the Work</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The leadership and operations team that keeps every job on schedule, every quote honest, and every homeowner in the loop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bill Lloyd */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm">
              <div className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden shadow-md ring-2 ring-[#C8102E]/30">
                <img
                  src="/images/team/bill-operations-400x400.jpg"
                  alt="Bill Lloyd"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-slate-900 font-bold text-2xl mb-1">Bill Lloyd</h3>
              <p className="text-[#C8102E] text-sm font-semibold uppercase tracking-wider mb-4">Operating Partner</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bill helps lead the business — from long-term planning to making sure every customer gets the experience NC Roofing Service is known for. He&apos;s the partner ensuring we run as well as we roof.
              </p>
            </div>

            {/* Makenzie Flack */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm">
              <div className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden shadow-md ring-2 ring-slate-400/40">
                <img
                  src="/images/team/makenzie-operations-400x400.jpg"
                  alt="Makenzie Flack"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-slate-900 font-bold text-2xl mb-1">Makenzie Flack</h3>
              <p className="text-slate-700 text-sm font-semibold uppercase tracking-wider mb-4">Operations</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Makenzie keeps the day-to-day moving — scheduling, communication, and customer follow-through. When you call or message us, she&apos;s often who makes sure nothing slips through the cracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Crew Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Subtle background effects - matching site's design language */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C8102E]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Centered */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8102E]/20 text-[#C8102E] rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              The Crew
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              More Than Contractors — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Your Neighbors</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A tight-knit crew of skilled professionals who take pride in protecting the homes in our own community.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="/images/about/team-jobsite-800x600.jpg"
                  alt="NC Roofing Service and Repair team on a job site"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden ring-2 ring-green-500/30">
                        <img
                          src="/images/team/randy-north-400x400.jpg"
                          alt="Randy Butler"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden ring-2 ring-amber-500/30">
                        <img
                          src="/images/team/marvin-granville-400x400.jpg"
                          alt="Marvin Jackson"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden ring-2 ring-blue-500/30">
                        <img
                          src="/images/team/mike-east-400x400.jpg"
                          alt="Mike Villarroel"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden ring-2 ring-[#C8102E]/40">
                        <img
                          src="/images/team/bill-operations-400x400.jpg"
                          alt="Bill Lloyd"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden ring-2 ring-slate-400/40">
                        <img
                          src="/images/team/makenzie-operations-400x400.jpg"
                          alt="Makenzie Flack"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-12 h-12 bg-slate-700 rounded-full border-2 border-slate-900 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">+</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Your Local Team</p>
                      <p className="text-slate-400 text-sm">Serving Durham, Raleigh, Chapel Hill &amp; Oxford</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white text-slate-900 p-5 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-[#C8102E]">7+</div>
                <div className="text-slate-600 text-sm font-medium">Years Serving<br />the Triangle</div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 text-slate-300 text-lg mb-10">
                <p>
                  When you hire NC Roofing Service, you&apos;re not getting a faceless corporation or out-of-state 
                  contractors. You&apos;re getting local professionals who live and work in your community.
                </p>
                <p>
                  Our team members are trained, certified, and committed to the same high standards that 
                  Randall Butler established when he founded this company. We don&apos;t cut corners, we don&apos;t 
                  rush jobs, and we treat every home like it belongs to family — because it often does.
                </p>
                <p>
                  From the initial inspection to the final walkthrough, you&apos;ll work with people who know 
                  your neighborhood, understand local building codes, and genuinely care about doing the 
                  job right the first time.
                </p>
              </div>
              
              {/* Team Highlights - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-green-500/30 transition-colors">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold mb-1">Background Checked</div>
                  <div className="text-slate-400 text-sm">Every team member verified</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 bg-[#C8102E]/20 rounded-xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-[#C8102E]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold mb-1">Fully Trained</div>
                  <div className="text-slate-400 text-sm">Certified installers</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-amber-500/30 transition-colors">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold mb-1">Local Crews</div>
                  <div className="text-slate-400 text-sm">NC Triangle residents</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold mb-1">Fully Insured</div>
                  <div className="text-slate-400 text-sm">$2M liability coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">Building Trust Since 2018</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-200">
                <span className="text-[#C8102E] font-bold text-2xl">2018</span>
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">Company Founded</h3>
              <p className="text-slate-600 text-sm">Randall Butler launches NC Roofing Service in Rougemont, NC</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-200">
                <span className="text-[#C8102E] font-bold text-2xl">2020</span>
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">Certifications Earned</h3>
              <p className="text-slate-600 text-sm">GAF, Owens Corning, and CertainTeed certified</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-200">
                <span className="text-[#C8102E] font-bold text-2xl">2023</span>
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">BBB Accredited</h3>
              <p className="text-slate-600 text-sm">Earned BBB A+ accreditation in May 2023</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-200">
                <span className="text-green-600 font-bold text-2xl">Now</span>
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">Serving the Triangle</h3>
              <p className="text-slate-600 text-sm">Protecting homes across Durham, Raleigh, and beyond</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Tools */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">Our Technology</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Modern Tools, Better Results</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We invest in the latest technology to provide accurate assessments and superior service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">EagleView Imaging</h3>
              <p className="text-slate-600">Satellite and aerial imaging for precise roof measurements and accurate estimates.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">PLRB Weather Mapping</h3>
              <p className="text-slate-600">Advanced weather data to document storm damage for insurance claims.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">Digital Thermal Testing</h3>
              <p className="text-slate-600">Infrared technology to detect hidden moisture and air leaks in your roof.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">Hiring a Roofer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">What to Expect from a Professional Roofer</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Not all roofing contractors are created equal. Here&apos;s what you should look for — and what NC Roofing Service provides.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Insurance */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Proper Insurance</h3>
              </div>
              
              <p className="text-slate-600 mb-6">
                A professional roofer should carry a <strong className="text-slate-900">true roofing insurance policy</strong> — 
                not just a general contractor policy. This matters because roofing has specific risks that require specific coverage.
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-slate-900 font-semibold">What to look for:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-slate-700"><strong className="text-slate-900">General Liability:</strong> At least $1 million, preferably $2 million</span>
                      <p className="text-slate-500 text-sm">Covers damage to your home and possessions during the project</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-slate-700"><strong className="text-slate-900">Workers&apos; Compensation:</strong> Must cover the entire crew</span>
                      <p className="text-slate-500 text-sm">Not just one person — protects you from liability if a worker is injured</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-700 font-semibold">NC Roofing Service Provides:</span>
                </div>
                <p className="text-slate-700 text-sm">
                  $2 million general liability coverage with full crew workers&apos; compensation. 
                  We carry a true roofing policy that fully protects your home and everything in it.
                </p>
              </div>
            </div>

            {/* Certification */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Manufacturer Certification</h3>
              </div>
              
              <p className="text-slate-600 mb-6">
                Certification from shingle manufacturers isn&apos;t just a badge — it <strong className="text-slate-900">directly determines 
                what warranty you can receive</strong>. Different certification levels unlock different warranty options.
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-slate-900 font-semibold">Certification Levels (Example: GAF):</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-slate-600 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <span className="text-slate-700"><strong className="text-slate-900">Certified Contractor:</strong> Basic level</span>
                      <p className="text-slate-500 text-sm">Standard manufacturer warranty only</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-slate-700 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <span className="text-slate-700"><strong className="text-slate-900">Master Elite:</strong> Top 2% of contractors</span>
                      <p className="text-slate-500 text-sm">Unlocks premium warranties up to 50 years with workmanship coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#C8102E] rounded-[2px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                    <div>
                      <span className="text-slate-700"><strong className="text-slate-900">CertainTeed SELECT:</strong> Elite certification</span>
                      <p className="text-slate-500 text-sm">Similar premium warranty options from CertainTeed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-700 font-semibold">NC Roofing Service Provides:</span>
                </div>
                <p className="text-slate-700 text-sm">
                  Certified by <strong>GAF, Owens Corning, AND CertainTeed</strong> — giving you access to the best 
                  warranties available from all three major manufacturers. Plus FORTIFIED certification from IBHS.
                </p>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Watch Out for &quot;Storm Chasers&quot;</h4>
                <p className="text-slate-600">
                  After major storms, out-of-state contractors often flood the area offering cheap repairs. 
                  Many lack proper insurance, certifications, or local accountability. They do the work, 
                  cash the check, and disappear — leaving you with no recourse if problems arise. 
                  <strong className="text-slate-900"> Always verify insurance and certifications before signing anything.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">What We Stand For</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">Quality</h3>
              <p className="text-slate-600">Highest level of service and quality workmanship on every project.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">Honesty</h3>
              <p className="text-slate-600">Transparent pricing and honest recommendations — always.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">Community</h3>
              <p className="text-slate-600">We live here too. Your community is our community.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">Satisfaction</h3>
              <p className="text-slate-600">Your complete satisfaction is our ultimate goal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Follow Our Work</h2>
            <p className="text-slate-600 mb-8">
              See our latest projects, get roofing tips, and stay updated on what&apos;s happening at NC Roofing Service. Follow us on social media!
            </p>
            <SocialLinks size="lg" variant="filled" className="justify-center" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#C8102E] to-[#a50d25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Get a free assessment and consultation. No obligation, no pressure — just honest advice from local experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#C8102E] px-8 py-4 rounded-[2px] font-semibold transition-all hover:scale-105 text-lg"
            >
              Request Assessment
            </Link>
            <a
              href="tel:+13367663464"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-[2px] font-semibold transition-all text-lg"
            >
              Call (336) ROOFING
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
