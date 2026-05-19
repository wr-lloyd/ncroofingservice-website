import { getTeamByDepartment } from '@/lib/team'
import SectionEyebrow from '@/components/SectionEyebrow'
import CrewCard from '../_components/CrewCard'

/**
 * The crew, grouped by department. Section anchor `#crew` is what the
 * /team → /about#crew redirect lands on, and what every profile page's
 * "Back to the team" link points to.
 */
export default function TheCrew() {
  const groups = getTeamByDepartment()
  const field = groups['Field Leadership']
  const ops = groups['Operations']

  return (
    <section
      id="crew"
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow
          eyebrow="The Crew"
          title="Real People. Real Triangle Roofers."
          subtitle="Tap any team member for their personal card — call, text, save to your contacts, or request a free inspection that routes directly to them."
          invert
        />

        {/* Field Leadership */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Field Leadership</h3>
            <p className="text-slate-400 text-sm mt-2">
              The roofer who shows up at your house — by name, by territory.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {field.map((m) => (
              <CrewCard key={m.slug} member={m} />
            ))}
          </div>
        </div>

        {/* Operations */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Operations</h3>
            <p className="text-slate-400 text-sm mt-2">
              The crew that keeps every job on schedule and every customer in the loop.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ops.map((m) => (
              <CrewCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
