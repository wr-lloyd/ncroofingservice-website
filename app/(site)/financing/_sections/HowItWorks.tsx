import Icon, { type IconName } from '@/components/Icon'
import SectionEyebrow from '@/components/SectionEyebrow'

const steps: {
  icon: IconName
  title: string
  time: string
  body: string
}[] = [
  {
    icon: 'eye',
    title: 'Free roof inspection',
    time: '45–60 minutes',
    body: 'We inspect the roof, document with drone photos, and write up a real scope of work. No financing talk yet.',
  },
  {
    icon: 'document-check',
    title: 'Written estimate',
    time: 'Same day or next',
    body: 'You get a line-item proposal: materials, labor, warranty, timeline. No mystery numbers.',
  },
  {
    icon: 'sparkles',
    title: 'Soft prequal',
    time: '~2 minutes',
    body: 'If you want to finance, prequalify with Service Finance or Enhancify. Soft credit pull, no impact to your score.',
  },
  {
    icon: 'check-circle',
    title: 'Pick terms & schedule',
    time: 'Same day',
    body: 'Compare offers, pick the term that works, sign. We schedule installation immediately.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow
          eyebrow="How It Works"
          title="From inspection to install — in plain English."
          subtitle="We talk numbers only after a real inspection, not before. Here's exactly what to expect."
        />

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <li
              key={s.title}
              className="relative bg-slate-50 rounded-2xl border border-slate-200 p-6"
            >
              <span
                aria-hidden
                className="absolute -top-3 -left-3 w-9 h-9 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md"
              >
                {idx + 1}
              </span>

              <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-5">
                <Icon name={s.icon} className="w-6 h-6 text-brand-red" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {s.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                {s.time}
              </p>
              <p className="text-sm text-slate-600 mt-3">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
