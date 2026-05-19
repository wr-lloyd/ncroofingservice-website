import Icon, { type IconName } from '@/components/Icon'
import SectionEyebrow from '@/components/SectionEyebrow'
import { formatUsdCents, monthlyPayment } from '@/lib/financing'

type Scenario = {
  icon: IconName
  iconBg: string
  iconColor: string
  title: string
  caption: string
  amount: number
  apr: number
  term: number
  detail: string
}

const scenarios: Scenario[] = [
  {
    icon: 'document-check',
    iconBg: 'bg-blue-100',
    iconColor: 'text-brand-red',
    title: 'Insurance approved — can\u2019t cover the deductible',
    caption: 'Deductible $2,500',
    amount: 2_500,
    apr: 0.0999,
    term: 24,
    detail:
      'You\u2019ve got an approved claim. We finance the deductible so you don\u2019t delay the work.',
  },
  {
    icon: 'shield-check',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Full replacement — keep your savings intact',
    caption: '$16,000 replacement · 84 months',
    amount: 16_000,
    apr: 0.1099,
    term: 84,
    detail:
      'Spread the full project over seven years with a fixed monthly payment you can plan around.',
  },
  {
    icon: 'sparkles',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    title: 'Upgrade financing — go from shingles to metal',
    caption: '$4,000 upgrade · 0% promo',
    amount: 4_000,
    apr: 0,
    term: 18,
    detail:
      'When you qualify for a 0% promo plan, the upgrade pays off interest-free if you complete the term.',
  },
]

/**
 * Three real-number scenario cards. Each shows a true-to-life NC use case
 * and the monthly payment for that scenario — none of the "varies by
 * lender" hedging that makes competitor pages useless.
 */
export default function Scenarios() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow
          eyebrow="Real Scenarios"
          title="What does this actually look like?"
          subtitle="The three situations we see most often in the Triangle — with the math, not the marketing."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.map((s) => {
            const monthly = monthlyPayment(s.amount, s.apr, s.term)
            return (
              <div
                key={s.title}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col"
              >
                <div
                  className={`w-12 h-12 ${s.iconBg} rounded-xl flex items-center justify-center mb-5`}
                >
                  <Icon name={s.icon} className={`w-6 h-6 ${s.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{s.caption}</p>

                <p className="mt-6 text-4xl font-bold text-brand-red leading-none">
                  {formatUsdCents(monthly).replace('.00', '')}
                  <span className="text-base font-semibold text-slate-500 ml-1">
                    /mo
                  </span>
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  {s.apr === 0
                    ? `0% promotional · ${s.term} months`
                    : `${(s.apr * 100).toFixed(2)}% APR · ${s.term} months`}
                </p>

                <p className="text-sm text-slate-600 mt-auto pt-5 border-t border-slate-200">
                  {s.detail}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
