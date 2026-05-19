import Link from 'next/link'
import Image from 'next/image'
import Icon from '@/components/Icon'
import { getTeamMember, memberPhoneHref, memberPhoneDisplay } from '@/lib/team'

const RANDY_SLUG = 'randy-butler'

export default function OwnerStory() {
  const randy = getTeamMember(RANDY_SLUG)

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Professional Roofing Since 2018
            </h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                NC Roofing Service and Repair, LLC was founded in 2018 by{' '}
                <Link
                  href={`/team/${RANDY_SLUG}`}
                  className="font-semibold text-slate-900 underline decoration-brand-red/40 underline-offset-4 hover:decoration-brand-red transition-colors"
                >
                  Randall Butler
                </Link>
                , a Rougemont native with a passion for quality craftsmanship and honest service.
              </p>
              <p>
                What started as a commitment to serve our neighbors has grown into one of the
                Triangle&apos;s most trusted roofing companies — built on a foundation of integrity,
                expertise, and genuine care for every customer.
              </p>
              <p>
                We&apos;re not a franchise or a fly-by-night operation. We live and work in this
                community, and our reputation matters to us. That&apos;s why we treat every roof
                like it&apos;s our own home.
              </p>
              <p className="text-slate-900 font-medium">
                Certified, licensed and insured — local roofing professionals you can trust.
              </p>
            </div>
          </div>

          {randy && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <Link
                href={`/team/${randy.slug}`}
                className="block text-center mb-8 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-4 rounded-xl"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg ring-4 ring-blue-500/20 group-hover:ring-brand-red/40 transition-all">
                  <Image
                    src={randy.photo}
                    alt={randy.fullName}
                    width={256}
                    height={256}
                    sizes="128px"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-slate-900 font-bold text-2xl group-hover:text-brand-red transition-colors">
                  Randall Butler
                </h3>
                <p className="text-brand-red">Owner &amp; Founder</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-red mt-2 group-hover:gap-2 transition-all">
                  View Randy&apos;s card
                  <Icon name="chevron-right" className="w-3.5 h-3.5" />
                </span>
              </Link>

              <ul className="space-y-4">
                <Fact text="Rougemont, NC Native" />
                <Fact text="GAF, Owens Corning & CertainTeed Certified" />
                <Fact text="FORTIFIED by IBHS Certified" />
                <Fact text="BBB A+ Accredited (Since 2023)" />
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <a
                  href={memberPhoneHref(randy)}
                  className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white py-3 rounded-[2px] font-semibold transition-colors shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  <Icon name="phone" className="w-5 h-5" />
                  Call Randy: {memberPhoneDisplay(randy)}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Fact({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-slate-600">
      <Icon name="check-circle" className="w-5 h-5 text-green-500 flex-shrink-0" />
      <span>{text}</span>
    </li>
  )
}
