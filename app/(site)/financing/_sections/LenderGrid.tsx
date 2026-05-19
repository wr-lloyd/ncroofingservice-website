import Image from 'next/image'
import Icon from '@/components/Icon'
import SectionEyebrow from '@/components/SectionEyebrow'
import { lenders, type Lender } from '@/lib/financing'

/**
 * Full lender breakdown: each card shows program facts (min FICO, max
 * funding, term range, APR range, promos, decision speed) and a primary
 * "Apply with X" CTA that deep-links to the contractor-tagged URL.
 */
export default function LenderGrid() {
  return (
    <section id="lenders" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow
          eyebrow="Our Lender Partners"
          title="Two paths. Both honest."
          subtitle="Service Finance is our traditional anchor. Enhancify is a marketplace that shops 30+ lenders for you. Pick what fits — or apply to both and compare."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {lenders.map((l) => (
            <LenderDetailCard key={l.id} lender={l} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LenderDetailCard({ lender }: { lender: Lender }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-8 border-b border-slate-100">
        <div className="flex items-center gap-4">
          {lender.logo ? (
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image
                src={lender.logo}
                alt={`${lender.name} logo`}
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
          ) : (
            <div
              className={`w-14 h-14 ${lender.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
            >
              <Icon name={lender.icon} className={`w-7 h-7 ${lender.iconColor}`} />
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
              {lender.name}
            </h3>
            <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mt-1">
              {lender.tagline}
            </p>
          </div>
        </div>
        <p className="text-slate-600 mt-5">{lender.description}</p>
      </div>

      {/* Facts grid */}
      <dl className="grid grid-cols-2 divide-x divide-y divide-slate-100 border-b border-slate-100">
        <Fact label="Min credit" value={lender.facts.minFico} />
        <Fact label="Max funding" value={lender.facts.maxFunding} />
        <Fact label="Term range" value={lender.facts.termRange} />
        <Fact label="APR range" value={lender.facts.aprRange} />
        <Fact
          label="Promos"
          value={lender.facts.promoOffers}
          span2
        />
        <Fact
          label="Decision"
          value={lender.facts.decisionSpeed}
          span2
        />
      </dl>

      {/* CTAs */}
      <div className="p-8 mt-auto flex flex-col sm:flex-row gap-3">
        <a
          href={lender.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-5 py-3 rounded-[2px] shadow-md shadow-brand-red/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
        >
          Apply with {lender.name.split(' ')[0]}
          <Icon name="arrow-right" className="w-4 h-4" />
        </a>
        <a
          href={lender.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-slate-700 hover:text-brand-red font-semibold px-5 py-3 rounded-[2px] border border-slate-200 transition-colors"
        >
          Learn more
        </a>
      </div>
    </div>
  )
}

function Fact({
  label,
  value,
  span2 = false,
}: {
  label: string
  value: string
  span2?: boolean
}) {
  return (
    <div className={`px-6 py-4 ${span2 ? 'col-span-2' : ''}`}>
      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-slate-900">{value}</dd>
    </div>
  )
}
