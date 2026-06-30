import Image from 'next/image'

/**
 * About hero. The background image is the LCP for this page so it gets
 * `priority` and a `sizes="100vw"` hint. Swap this remote fallback for a
 * real local jobsite image once one is available.
 */
export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">
            Our Story
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            We combine manufacturer certifications with a commitment to clear
            communication and documented quality.
          </p>
        </div>
      </div>
    </section>
  )
}
