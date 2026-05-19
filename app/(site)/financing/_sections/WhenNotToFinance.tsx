import Icon from '@/components/Icon'

/**
 * Counter-trust play. Naming when financing *isn't* the right call buys
 * credibility for every other part of the page. Most competitor sites
 * never tell anyone "don't do this" — so we do.
 */
export default function WhenNotToFinance() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon name="warning" className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">
              The honest panel
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              When NOT to finance.
            </h2>
          </div>
        </div>

        <p className="text-lg text-slate-300 mb-10">
          Financing is the right call for most homeowners we work with — but not all. If
          one of these is you, we&apos;d rather you keep the cash in your pocket.
        </p>

        <div className="space-y-4">
          <Item title="Your insurance claim has zero gap.">
            If insurance is paying 100% of the scope with no deductible owed and no
            upgrades on your wish list, there&apos;s nothing to finance. Pay the
            deductible, sign the work order, done.
          </Item>
          <Item title="You can pay cash without touching emergency savings.">
            If the project fits inside your normal savings buffer, paying outright is
            almost always cheaper than the cheapest loan.
          </Item>
          <Item title="The project is small enough for a 0% credit card promo.">
            For a $2,000–$4,000 repair, a 12–18 month 0% APR credit card can be a better
            deal than a fixed-term roofing loan — provided you actually pay it off in
            the promo window.
          </Item>
          <Item title="You're planning to sell in under a year.">
            Talk to us about the roof first. Sometimes a documented inspection + repair
            beats a full replacement for resale.
          </Item>
        </div>
      </div>
    </section>
  )
}

function Item({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4">
      <Icon
        name="check-circle"
        className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1"
      />
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-slate-300 mt-1 leading-relaxed">{children}</p>
      </div>
    </div>
  )
}
