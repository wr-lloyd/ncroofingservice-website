import Icon, { type IconName } from '@/components/Icon'
import SectionEyebrow from '@/components/SectionEyebrow'

const values: {
  icon: IconName
  iconBg: string
  iconColor: string
  title: string
  body: string
}[] = [
  {
    icon: 'sparkles',
    iconBg: 'bg-blue-100',
    iconColor: 'text-brand-red',
    title: 'Quality',
    body: 'Highest level of service and quality workmanship on every project.',
  },
  {
    icon: 'handshake',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Honesty',
    body: 'Transparent pricing and honest recommendations — always.',
  },
  {
    icon: 'users',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    title: 'Community',
    body: 'We live here too. Your community is our community.',
  },
  {
    icon: 'heart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'Satisfaction',
    body: 'Your complete satisfaction is our ultimate goal.',
  },
]

export default function Values() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow eyebrow="Our Values" title="What We Stand For" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div
                className={`w-20 h-20 ${v.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <Icon name={v.icon} className={`w-10 h-10 ${v.iconColor}`} />
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">{v.title}</h3>
              <p className="text-slate-600">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
