import type { Metadata } from 'next'
import Link from 'next/link'
import { absoluteUrl, OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'
import { GUIDE_STATS } from '@/lib/guide'
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

      {/* Why we built it this way */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red mb-3">
            Why this is different
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-black tracking-tight mb-5">
            Why we built this tool the way we did.
          </h2>

          <p className="text-[16px] text-slate-700 leading-relaxed mb-4">
            Most roofer &ldquo;calculators&rdquo; online aren&apos;t calculators.
            They&apos;re contact forms with a fake number screen that says{' '}
            <em>&ldquo;we&apos;ll email you a quote.&rdquo;</em> You give up your
            phone and email, then a salesperson calls. We got tired of customers
            telling us they&apos;d been through that. So we built this instead.
          </p>

          <p className="text-[16px] text-slate-700 leading-relaxed mb-4">
            <strong className="text-brand-black">
              The math runs on your phone, in your browser.
            </strong>{' '}
            Nothing leaves your machine. We don&apos;t know you ran the
            calculator. We can&apos;t. The page doesn&apos;t send anything
            anywhere unless you ask it to.
          </p>

          <p className="text-[16px] text-slate-700 leading-relaxed mb-4">
            The numbers behind the math come from the {GUIDE_STATS.jobsLastYear}{' '}
            roofs we replaced in North Carolina in 2025. Real jobs in Charlotte,
            the Triangle, and the Blue Ridge, with the materials and
            complexities you&apos;re picking between. We update the model every
            spring.
          </p>

          <p className="text-[16px] text-slate-700 leading-relaxed mb-8">
            When you&apos;re ready for a real number, not a range,{' '}
            <Link
              href="/request-inspection"
              className="text-brand-red font-semibold hover:underline"
            >
              schedule a free look
            </Link>
            . One of our roofers will walk your roof, take drone photos, and
            give you a written quote in 30 minutes on-site. No deposit, no
            obligation.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <h3 className="text-base font-bold text-brand-black mb-2">
              How accurate is this, really?
            </h3>
            <p className="text-[15px] text-slate-700 leading-relaxed">
              Within $1,500 of our final written quote on 4 out of 5 of the
              roofs we end up doing after a visit. The visit catches what a
              webpage can&apos;t. Soft decking, chimney repairs, an unusual
              roof shape.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-base font-bold text-brand-black mb-2">
              What if my roof is unusual?
            </h3>
            <p className="text-[15px] text-slate-700 leading-relaxed">
              Call{' '}
              <a
                href={`tel:${OFFICE_PHONE}`}
                className="text-brand-red font-semibold hover:underline"
              >
                {OFFICE_PHONE_DISPLAY}
              </a>
              . We&apos;ll tell you straight whether our typical model fits
              your house, or doesn&apos;t. Free, no pressure.
            </p>
          </div>
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
