import { GUIDE_STATS } from '@/lib/guide'

/**
 * Trust strip used on the hub: a customer quote on the left, two stats on
 * the right. Pulls numbers from lib/guide.ts so they update in one place.
 */
export default function TrustQuote() {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-xl lg:text-2xl font-semibold text-brand-black leading-snug tracking-tight">
              <span className="text-brand-red text-4xl leading-none align-[-0.15em] mr-1 font-extrabold">
                &ldquo;
              </span>
              NC Roofing Service was the third roofer we called. They were the
              only one who told us we didn&apos;t need a new roof yet. We hired
              them three years later when we actually did.
            </p>
            <div className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              Dianne &amp; Bob H. &middot; Matthews, NC &middot; Replacement, 2024
            </div>
          </div>

          <div className="lg:border-l lg:border-slate-200 lg:pl-10">
            <div className="text-5xl font-extrabold text-brand-black tracking-tight leading-none">
              {GUIDE_STATS.jobsLastYear}
              <span className="text-brand-red text-3xl ml-1">+</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {GUIDE_STATS.jobsLastYearLabel} across the Triangle, Charlotte,
              and the Blue Ridge.
            </p>
          </div>

          <div className="lg:border-l lg:border-slate-200 lg:pl-10">
            <div className="text-5xl font-extrabold text-brand-black tracking-tight leading-none">
              {GUIDE_STATS.componentsCount}
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Essential components we install on every roof &mdash; not just
              shingles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
