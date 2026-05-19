import Icon, { type IconName } from '@/components/Icon'
import SectionEyebrow from '@/components/SectionEyebrow'

const tools = [
  {
    icon: 'satellite' as IconName,
    iconBg: 'bg-blue-100',
    iconColor: 'text-brand-red',
    title: 'EagleView Imaging',
    body: 'Satellite and aerial imaging for precise roof measurements and accurate estimates.',
  },
  {
    icon: 'cloud' as IconName,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'PLRB Weather Mapping',
    body: 'Advanced weather data to document storm damage for insurance claims.',
  },
  {
    icon: 'thermometer' as IconName,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    title: 'Digital Thermal Testing',
    body: 'Infrared technology to detect hidden moisture and air leaks in your roof.',
  },
]

export default function Technology() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow
          eyebrow="Our Technology"
          title="Modern Tools, Better Results"
          subtitle="We invest in the latest technology to provide accurate assessments and superior service."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((t) => (
            <div
              key={t.title}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center shadow-sm"
            >
              <div
                className={`w-16 h-16 ${t.iconBg} rounded-xl flex items-center justify-center mx-auto mb-6`}
              >
                <Icon name={t.icon} className={`w-8 h-8 ${t.iconColor}`} />
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">{t.title}</h3>
              <p className="text-slate-600">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
