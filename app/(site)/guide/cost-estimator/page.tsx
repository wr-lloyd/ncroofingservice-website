import type { Metadata } from 'next'
import Link from 'next/link'
import { absoluteUrl } from '@/lib/site'
import Estimator from './_components/Estimator'

export const metadata: Metadata = {
  title: 'Roof Cost Estimator | The Honest Roof Guide',
  description:
    'A real cost calculator for a roof replacement in North Carolina. Six honest questions. Real number. No email, no phone call, no upsell.',
  alternates: { canonical: absoluteUrl('/guide/cost-estimator') },
  openGraph: {
    title: 'Roof Cost Estimator | NC Roofing Service',
    description:
      'Six honest questions, a real number. No email required.',
    url: absoluteUrl('/guide/cost-estimator'),
    type: 'website',
  },
}

export default function CostEstimatorPage() {
  return (
    <main className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
            <Link href="/guide" className="hover:text-brand-red">The Guide</Link>
            <span className="mx-2 text-slate-300">/</span>
            <Link href="/guide/plan-your-roof" className="hover:text-brand-red">Plan your roof</Link>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-brand-black">Cost estimator</span>
          </nav>

          <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red mb-3">
            Tool · About 90 seconds
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight leading-[1.08]">
            What will a roof actually cost?
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl">
            Six honest questions. A real number, not a lead form. We use the
            same math we use for our own written quotes. The result is a range.
            Your real price lands somewhere inside it, usually toward the
            middle.
          </p>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-2xl">
            No email, no phone number, no follow-up call. The number is yours
            to keep. If you want a written quote on company letterhead, ask
            for that separately. Different thing.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-10 lg:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Estimator />
        </div>
      </section>

      {/* How the math works */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red mb-3">
            How we got the number
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-black tracking-tight mb-5">
            The math behind the range.
          </h2>
          <p className="text-[16px] text-slate-700 leading-relaxed mb-4">
            We start with a per-square base. (One square is 100 sq ft of roof.)
            In NC right now, that base is $350 to $450 a square for a standard
            architectural shingle install. Then we add for the things that
            actually cost more on the job.
          </p>
          <ul className="space-y-2 text-[15px] text-slate-700 list-disc list-outside ml-5 marker:text-brand-red mb-6">
            <li>+$10/square if the house is two stories. Ladders, safety, time.</li>
            <li>+$10/square for a steep pitch (7/12 to 9/12). Slower, safer work.</li>
            <li>+$10/square more for very steep (10/12 to 12/12). Roped, harnessed.</li>
            <li>Material multiplier: premium shingle is about 1.35x, standing-seam metal is about 3.10x.</li>
            <li>Complexity multiplier: more dormers, valleys, and penetrations means more flashing and more time.</li>
            <li>Regional multiplier: Triangle and Charlotte are baseline. Small towns about 5% less. Mountains and coast about 7% more.</li>
          </ul>
          <p className="text-[16px] text-slate-700 leading-relaxed">
            Then the calculator gives you a range, low to high. Our own written
            quotes almost always land inside that range. When they land
            outside, it is because we found something on the deck that no
            calculator could know about. Bad wood. A chimney that needs work.
            A skylight a previous roofer ruined.
          </p>
        </div>
      </section>

      {/* Footer / next */}
      <section className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-[17px] text-slate-700 leading-relaxed mb-6">
            Now that you have a number, the next decision is paying for it.
            Read chapter three.
          </p>
          <Link
            href="/guide/pay-for-it"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3.5 rounded-[2px] font-semibold transition-colors"
          >
            Pay for it &rarr;
          </Link>
        </div>
      </section>
    </main>
  )
}
