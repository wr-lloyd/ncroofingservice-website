import Icon from '@/components/Icon'
import SectionEyebrow from '@/components/SectionEyebrow'

export default function WhatToExpect() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow
          eyebrow="Hiring a Roofer"
          title="What to Expect from a Professional Roofer"
          subtitle="Not all roofing contractors are created equal. Here's what you should look for — and what NC Roofing Service provides."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Insurance */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                <Icon name="document-check" className="w-7 h-7 text-brand-red" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Proper Insurance</h3>
            </div>

            <p className="text-slate-600 mb-6">
              A professional roofer should carry a{' '}
              <strong className="text-slate-900">true roofing insurance policy</strong> — not just a
              general contractor policy. This matters because roofing has specific risks that
              require specific coverage.
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-slate-900 font-semibold">What to look for:</h4>
              <div className="space-y-3">
                <Bullet
                  label="General Liability:"
                  highlight="At least $1 million, preferably $2 million"
                  body="Covers damage to your home and possessions during the project"
                />
                <Bullet
                  label="Workers' Compensation:"
                  highlight="Must cover the entire crew"
                  body="Not just one person — protects you from liability if a worker is injured"
                />
              </div>
            </div>

            <Callout>
              $2 million general liability coverage with full crew workers&apos; compensation. We
              carry a true roofing policy that fully protects your home and everything in it.
            </Callout>
          </div>

          {/* Certification */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <Icon name="shield-check" className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Manufacturer Certification</h3>
            </div>

            <p className="text-slate-600 mb-6">
              Certification from shingle manufacturers isn&apos;t just a badge — it{' '}
              <strong className="text-slate-900">
                directly determines what warranty you can receive
              </strong>
              . Different certification levels unlock different warranty options.
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-slate-900 font-semibold">Certification Levels (Example: GAF):</h4>
              <div className="space-y-3">
                <Level
                  badge={<span className="text-slate-600 text-xs font-bold">1</span>}
                  badgeBg="bg-slate-200"
                  label="Certified Contractor:"
                  highlight="Basic level"
                  body="Standard manufacturer warranty only"
                />
                <Level
                  badge={<span className="text-slate-700 text-xs font-bold">2</span>}
                  badgeBg="bg-slate-300"
                  label="Master Elite:"
                  highlight="Top 2% of contractors"
                  body="Unlocks premium warranties up to 50 years with workmanship coverage"
                />
                <Level
                  badge={<span className="text-white text-xs font-bold">★</span>}
                  badgeBg="bg-brand-red rounded-[2px]"
                  label="CertainTeed SELECT:"
                  highlight="Elite certification"
                  body="Similar premium warranty options from CertainTeed"
                />
              </div>
            </div>

            <Callout>
              Certified by <strong>GAF, Owens Corning, AND CertainTeed</strong> — giving you access
              to the best warranties available from all three major manufacturers. Plus FORTIFIED
              certification from IBHS.
            </Callout>
          </div>
        </div>

        {/* Warning Box */}
        <div
          role="note"
          className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon name="warning" className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Watch Out for &quot;Storm Chasers&quot;
              </h4>
              <p className="text-slate-600">
                After major storms, out-of-state contractors often flood the area offering cheap
                repairs. Many lack proper insurance, certifications, or local accountability. They
                do the work, cash the check, and disappear — leaving you with no recourse if
                problems arise.{' '}
                <strong className="text-slate-900">
                  Always verify insurance and certifications before signing anything.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Bullet({
  label,
  highlight,
  body,
}: {
  label: string
  highlight: string
  body: string
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon name="warning" className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
      <div>
        <span className="text-slate-700">
          <strong className="text-slate-900">{label}</strong> {highlight}
        </span>
        <p className="text-slate-500 text-sm">{body}</p>
      </div>
    </div>
  )
}

function Level({
  badge,
  badgeBg,
  label,
  highlight,
  body,
}: {
  badge: React.ReactNode
  badgeBg: string
  label: string
  highlight: string
  body: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-6 h-6 ${badgeBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
      >
        {badge}
      </div>
      <div>
        <span className="text-slate-700">
          <strong className="text-slate-900">{label}</strong> {highlight}
        </span>
        <p className="text-slate-500 text-sm">{body}</p>
      </div>
    </div>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon name="check-circle" className="w-5 h-5 text-green-600" />
        <span className="text-green-700 font-semibold">NC Roofing Service Provides:</span>
      </div>
      <p className="text-slate-700 text-sm">{children}</p>
    </div>
  )
}
