import Link from 'next/link'
import { FOUNDED_YEAR } from '@/lib/site'

export default function Timeline() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">
            Building Trust Since {FOUNDED_YEAR}
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <Milestone
            year={FOUNDED_YEAR}
            title="Company Founded"
            body={
              <>
                <Link
                  href="/team/randy-butler"
                  className="font-semibold text-slate-900 underline decoration-brand-red/40 underline-offset-4 hover:decoration-brand-red transition-colors"
                >
                  Randy Butler
                </Link>{' '}
                launches NC Roofing Service in Rougemont, NC
              </>
            }
          />
          <Milestone
            year={2020}
            title="Certifications Earned"
            body="GAF, Owens Corning, and CertainTeed certified"
          />
          <Milestone
            year={2023}
            title="BBB Accredited"
            body="Earned BBB A+ accreditation in May 2023"
          />
          <Milestone
            year="Now"
            title="Serving the Triangle"
            body="Protecting homes across Durham, Raleigh, and beyond"
            highlight
          />
        </div>
      </div>
    </section>
  )
}

function Milestone({
  year,
  title,
  body,
  highlight = false,
}: {
  year: number | string
  title: string
  body: React.ReactNode
  highlight?: boolean
}) {
  return (
    <div className="text-center">
      <div
        className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border ${
          highlight
            ? 'bg-green-100 border-green-200'
            : 'bg-blue-100 border-blue-200'
        }`}
      >
        <span
          className={`font-bold text-2xl ${
            highlight ? 'text-green-600' : 'text-brand-red'
          }`}
        >
          {year}
        </span>
      </div>
      <h3 className="text-slate-900 font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{body}</p>
    </div>
  )
}
