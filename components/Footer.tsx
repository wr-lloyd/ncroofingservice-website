import Link from 'next/link'
import Image from 'next/image'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" aria-label="NC Roofing Service — (336) ROOFING" className="inline-block mb-4">
              <Image
                src="/images/logos/logo-number.png"
                alt="NC Roofing Service — (336) ROOFING"
                width={520}
                height={180}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-slate-500 text-xs mb-3">Your Local NC Roofing and Exterior Systems Provider</p>
            <p className="text-slate-400 mb-4 text-sm">
              Professional roofing and exterior systems. Serving residential and commercial clients throughout the Triangle since 2018.
            </p>
            <SocialLinks size="sm" />
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/residential" className="text-slate-400 hover:text-white transition-colors text-sm">Residential Roofing</Link></li>
              <li><Link href="/residential/roof-replacement" className="text-slate-400 hover:text-white transition-colors text-sm">Roof Replacement</Link></li>
              <li><Link href="/residential/roof-repair" className="text-slate-400 hover:text-white transition-colors text-sm">Roof Repair</Link></li>
              <li><Link href="/residential/storm-damage" className="text-slate-400 hover:text-white transition-colors text-sm">Storm Damage</Link></li>
              <li>
                <Link href="/commercial" className="text-brand-red hover:text-brand-red-dark transition-colors text-sm font-medium">
                  Commercial Roofing
                </Link>
              </li>
              <li><Link href="/our-work" className="text-slate-400 hover:text-white transition-colors text-sm">Our Work</Link></li>
              <li><Link href="/certifications" className="text-slate-400 hover:text-white transition-colors text-sm">Certifications</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
              <Link href="/locations/raleigh-nc" className="text-slate-400 hover:text-white transition-colors text-sm">Raleigh</Link>
              <Link href="/locations/durham-nc" className="text-slate-400 hover:text-white transition-colors text-sm">Durham</Link>
              <Link href="/locations/cary-nc" className="text-slate-400 hover:text-white transition-colors text-sm">Cary</Link>
              <Link href="/locations/chapel-hill-nc" className="text-slate-400 hover:text-white transition-colors text-sm">Chapel Hill</Link>
              <Link href="/locations/apex-nc" className="text-slate-400 hover:text-white transition-colors text-sm">Apex</Link>
              <Link href="/locations/wake-forest-nc" className="text-slate-400 hover:text-white transition-colors text-sm">Wake Forest</Link>
              <Link href="/locations/holly-springs-nc" className="text-slate-400 hover:text-white transition-colors text-sm">Holly Springs</Link>
              <Link href="/locations/morrisville-nc" className="text-slate-400 hover:text-white transition-colors text-sm">Morrisville</Link>
              <Link href="/locations/garner-nc" className="text-slate-400 hover:text-white transition-colors text-sm">Garner</Link>
              <Link href="/locations/hillsborough-nc" className="text-slate-400 hover:text-white transition-colors text-sm">Hillsborough</Link>
            </div>
            <div className="space-y-2">
              <Link href="/locations" className="text-brand-red hover:text-brand-red-dark transition-colors text-sm font-medium block">
                View All Locations →
              </Link>
              <Link href="/resources" className="text-slate-400 hover:text-white transition-colors text-sm block">
                Resources & Guides
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">5950 Mt. Harmony Church Rd<br />Rougemont, NC 27572</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <svg className="w-5 h-5 flex-shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+13367663464" className="hover:text-white transition-colors text-sm">(336) ROOFING</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <svg className="w-5 h-5 flex-shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:bandc@ncroofingservice.com" className="hover:text-white transition-colors text-sm">bandc@ncroofingservice.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm">
                  <div>Mon-Sat: 7:00am - 9:30pm</div>
                  <div>Sun: 12:00pm - 9:30pm</div>
                  <div className="text-green-400 font-medium mt-1">24/7 Emergency Available</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              GAF Certified
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Owens Corning
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              CertainTeed
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              FORTIFIED by IBHS
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <svg className="w-5 h-5 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              BBB A+ Rated
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">
            © {new Date().getFullYear()} NC Roofing Service. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
