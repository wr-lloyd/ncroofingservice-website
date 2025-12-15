import Link from 'next/link'

export const metadata = {
  title: 'What to Look for When Hiring a Roofer | B&C Roofing NC',
  description: 'Learn what insurance and certifications a professional roofer should have. Protect yourself from storm chasers and unlicensed contractors in NC.',
}

export default function HiringRooferArticle() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 mb-4">
            Essential Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What to Look for When Hiring a Roofer
          </h1>
          <p className="text-slate-400 text-xl mb-6">
            Insurance, certifications, and red flags: how to tell the difference between a professional 
            roofing contractor and a &quot;storm chaser&quot; who might leave you with bigger problems.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <span>December 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-slate-300 text-lg leading-relaxed">
                Your roof is one of the most important parts of your home — and one of the most expensive 
                to replace. Choosing the wrong contractor can mean poor workmanship, voided warranties, 
                or worse: being left with damage and no recourse when the contractor disappears.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mt-4">
                Here&apos;s what every homeowner should verify before signing a roofing contract.
              </p>
            </div>

            {/* Insurance Section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-lg">1</span>
                Proper Insurance Coverage
              </h2>
              
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Why Insurance Matters</h3>
                <p className="text-slate-400 mb-4">
                  A professional roofer should carry a <strong className="text-white">true roofing insurance policy</strong> — 
                  not just a general contractor policy. Roofing has specific risks (working at height, potential 
                  for water damage, etc.) that require specific coverage.
                </p>
                <p className="text-slate-400">
                  Without proper insurance, <strong className="text-white">you could be liable</strong> if a worker is 
                  injured on your property, or left paying out of pocket if your home is damaged during the project.
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">What to Verify:</h3>
              
              <div className="space-y-6">
                <div className="bg-slate-900/30 rounded-xl p-6 border-l-4 border-blue-500">
                  <h4 className="text-lg font-bold text-white mb-2">General Liability Insurance</h4>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Minimum of <strong className="text-white">$1 million</strong> coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Preferably <strong className="text-white">$2 million</strong> for full protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Should cover your home AND all possessions inside</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900/30 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="text-lg font-bold text-white mb-2">Workers&apos; Compensation Insurance</h4>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Must cover <strong className="text-white">the entire crew</strong>, not just one person</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Protects you from liability if a worker is injured on your property</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span><strong className="text-white">Watch out:</strong> Some contractors have coverage for only the owner</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mt-8">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Don&apos;t Just Take Their Word For It
                </h4>
                <p className="text-slate-400">
                  Ask for a <strong className="text-white">Certificate of Insurance (COI)</strong> and call the insurance 
                  company to verify it&apos;s current. Some contractors let policies lapse or carry fake documentation.
                </p>
              </div>
            </section>

            {/* Certification Section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-lg">2</span>
                Manufacturer Certifications
              </h2>
              
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Why Certification Matters</h3>
                <p className="text-slate-400 mb-4">
                  Many homeowners don&apos;t realize that <strong className="text-white">your warranty is directly tied to your 
                  contractor&apos;s certification level</strong>. A contractor without manufacturer certification can 
                  only offer you limited warranties — even if they use the exact same materials.
                </p>
                <p className="text-slate-400">
                  Higher certification levels unlock better warranties, including coverage for workmanship 
                  (not just materials) and longer terms.
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Certification Levels Explained:</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-slate-900/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-slate-300 text-sm font-bold">1</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Basic Certified Contractor</h4>
                  </div>
                  <p className="text-slate-400 ml-11">
                    Entry-level certification. Limited warranty options — typically materials only, no workmanship coverage.
                  </p>
                </div>

                <div className="bg-slate-900/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Master Elite (GAF) / SELECT ShingleMaster (CertainTeed)</h4>
                  </div>
                  <p className="text-slate-400 ml-11">
                    Top-tier certification. Only <strong className="text-white">2-3% of contractors</strong> achieve this level. 
                    Unlocks premium warranties up to 50 years including full workmanship coverage.
                  </p>
                </div>

                <div className="bg-slate-900/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">★</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">FORTIFIED by IBHS</h4>
                  </div>
                  <p className="text-slate-400 ml-11">
                    Special certification for storm-resistant roofing. May qualify for insurance discounts. 
                    Requires specific training and adherence to enhanced installation standards.
                  </p>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">Pro Tip</h4>
                <p className="text-slate-400">
                  Ask prospective contractors: <strong className="text-white">&quot;What&apos;s the best warranty you can offer, 
                  and what certification allows you to offer it?&quot;</strong> If they can&apos;t answer clearly, 
                  that&apos;s a red flag.
                </p>
              </div>
            </section>

            {/* Red Flags Section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-lg">3</span>
                Red Flags: Spotting &quot;Storm Chasers&quot;
              </h2>
              
              <p className="text-slate-300 text-lg mb-8">
                After major storms, out-of-state contractors often flood affected areas. They&apos;re commonly 
                called &quot;storm chasers&quot; — they do quick work, cash the insurance check, and disappear. 
                If problems arise later, you have no recourse.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Warning Signs
                  </h4>
                  <ul className="space-y-3 text-slate-400">
                    <li>• Going door-to-door after storms</li>
                    <li>• Out-of-state license plates</li>
                    <li>• No local address or phone number</li>
                    <li>• Pressure to sign immediately</li>
                    <li>• &quot;Special pricing&quot; that expires today</li>
                    <li>• Asking for full payment upfront</li>
                    <li>• No written contract or vague terms</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Good Signs
                  </h4>
                  <ul className="space-y-3 text-slate-400">
                    <li>• Local address and established business</li>
                    <li>• Verifiable insurance and certifications</li>
                    <li>• Good reviews from local customers</li>
                    <li>• No pressure — willing to answer questions</li>
                    <li>• Clear, written contract</li>
                    <li>• Reasonable payment terms</li>
                    <li>• BBB accredited or positive rating</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Checklist Section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Your Hiring Checklist</h2>
              
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5">
                <p className="text-slate-400 mb-6">Before signing with any roofing contractor, verify:</p>
                
                <div className="space-y-4">
                  {[
                    'General liability insurance ($1M minimum, $2M preferred)',
                    'Workers\' comp covering the entire crew',
                    'Manufacturer certifications (GAF, Owens Corning, CertainTeed)',
                    'Local address and phone number',
                    'Positive reviews from local customers',
                    'BBB rating (look for A or A+)',
                    'Clear written contract with scope, timeline, and payment terms',
                    'Warranty details in writing before work begins',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-slate-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-slate-600 text-sm">✓</span>
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* B&C CTA Box */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">B&C Roofing Meets Every Requirement</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                $2M liability coverage. Full crew workers&apos; comp. Certified by GAF, Owens Corning, AND CertainTeed. 
                FORTIFIED certified. BBB A+ rated. Local to Rougemont since 2018.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Schedule Free Inspection
                </Link>
                <a
                  href="tel:+19194758841"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Call (919) 475-8841
                </a>
              </div>
            </div>
          </div>

          {/* Author/Company Box */}
          <div className="mt-12 bg-slate-900/50 rounded-2xl p-8 border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">B&C</span>
              </div>
              <div>
                <h4 className="text-white font-bold">B&C Roofing and Repair, LLC</h4>
                <p className="text-slate-400 text-sm">
                  Certified, licensed and insured roofing professionals serving the NC Triangle since 2018. 
                  Based in Rougemont, NC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog" className="bg-slate-800/50 rounded-xl p-6 border border-white/5 hover:border-blue-500/30 transition-all group">
              <span className="text-green-400 text-sm font-medium">FORTIFIED</span>
              <h3 className="text-white font-bold mt-2 mb-2 group-hover:text-blue-400 transition-colors">
                What is FORTIFIED Roofing?
              </h3>
              <p className="text-slate-400 text-sm">Learn about storm-resistant roofing standards.</p>
            </Link>
            <Link href="/blog" className="bg-slate-800/50 rounded-xl p-6 border border-white/5 hover:border-blue-500/30 transition-all group">
              <span className="text-blue-400 text-sm font-medium">Insurance</span>
              <h3 className="text-white font-bold mt-2 mb-2 group-hover:text-blue-400 transition-colors">
                How to File a Roof Insurance Claim
              </h3>
              <p className="text-slate-400 text-sm">Step-by-step guide to the claims process.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
