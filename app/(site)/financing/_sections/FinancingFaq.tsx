import SectionEyebrow from '@/components/SectionEyebrow'

export const faqs: { q: string; a: string }[] = [
  {
    q: 'What credit score do I need to qualify?',
    a: 'Our two lender partners cover a wide range. Service Finance Company typically approves applicants with a 640+ FICO. Enhancify\u2019s marketplace works with scores from roughly 550 to 850 depending on the lender, which means we can usually find an option even if your credit isn\u2019t perfect.',
  },
  {
    q: 'Does checking my rate hurt my credit?',
    a: 'No. Prequalification is a soft credit pull, which has zero impact on your credit score. A hard pull only happens after you formally accept a specific loan offer — and you\u2019ll be told before that happens.',
  },
  {
    q: 'How fast can I get approved?',
    a: 'Soft prequalification usually returns in about two minutes. Full approval is often same-day. Funds for the contractor are typically released within one to two business days after the project is signed off.',
  },
  {
    q: 'Can I pay the loan off early without a penalty?',
    a: 'On Service Finance Company\u2019s standard installment loans there are no prepayment penalties. Enhancify\u2019s offers vary by lender — the prepayment terms are disclosed before you accept any specific offer.',
  },
  {
    q: 'What happens if my insurance check arrives after I\u2019ve already financed?',
    a: 'This is one of the most common scenarios. You can apply the insurance payment toward the loan principal at any time, which lowers your remaining balance and shortens the payoff period. Many of our customers finance the full project up front and then pay down a big chunk when insurance settles.',
  },
  {
    q: 'Can I finance a repair instead of a full replacement?',
    a: 'Yes. Both lenders fund repairs, replacements, and storm-damage restoration. Smaller projects often work well with a short 24-month term — the monthly payment stays low and the loan is gone in two years.',
  },
  {
    q: 'Are there fees on the contractor side that get passed to me?',
    a: 'No hidden markups. We chose Service Finance and Enhancify specifically because the terms quoted to you are the terms you pay. Service Finance is a direct lender. Enhancify is a marketplace that explicitly does not charge contractor dealer fees, so we don\u2019t bake those into your price.',
  },
  {
    q: 'Can I finance through one lender and still apply to the other?',
    a: 'Absolutely. Soft prequal with both takes about four minutes total and gives you side-by-side options. There\u2019s no penalty for shopping, and we\u2019ll help you compare.',
  },
]

export default function FinancingFaq() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow
          eyebrow="Frequently Asked"
          title="The questions we actually get."
          subtitle="Real answers, not hedged ones. Got a question that isn't here? Call our team — we'll give it to you straight."
        />

        <div className="space-y-3">
          {faqs.map((f, idx) => (
            <details
              key={f.q}
              className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
              {...(idx === 0 ? { open: true } : {})}
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                  {f.q}
                </h3>
                <span
                  aria-hidden
                  className="flex-shrink-0 w-7 h-7 bg-white border border-slate-200 rounded-full flex items-center justify-center text-brand-red transition-transform group-open:rotate-45"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-5 text-sm sm:text-base text-slate-700 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
