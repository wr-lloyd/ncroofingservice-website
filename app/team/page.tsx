import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getTeamByDepartment, type TeamMember } from '@/lib/team'

export const metadata: Metadata = {
  title: 'Meet the Team | NC Roofing Service and Repair',
  description:
    'Meet the people behind NC Roofing Service — local Triangle roofers, operations leaders, and aerial inspectors. Tap any card for direct contact, free inspection, and a printable dot-card.',
  alternates: { canonical: '/team' },
}

export default function TeamIndexPage() {
  const { field, ops, support } = getTeamByDepartment()

  return (
    <main className="pt-20 bg-slate-50">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-brand-black via-slate-900 to-brand-black overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C8102E 0px, #C8102E 1px, transparent 1px, transparent 18px)',
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-[0.18em]">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Real people. Real Triangle roofers.
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tap any team member for their personal card — call, text, save to your contacts, or request a free inspection that routes directly to them.
          </p>
        </div>
      </section>

      {/* Field leadership */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Field Leadership"
            title="Your local territory leads"
            subtitle="The roofer who shows up at your house — by name, by territory."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {field.map((m) => (
              <ProfileCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Operations"
            title="The people behind the work"
            subtitle="The crew that keeps every job on schedule and every customer in the loop."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ops.map((m) => (
              <ProfileCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      {support.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Aerial & Inspections"
              title="Eyes everywhere"
              subtitle="Specialty roles that make every inspection more thorough."
            />
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {support.map((m) => (
                <ProfileCard key={m.slug} member={m} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="py-16 bg-brand-black text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not sure who covers your area?
          </h2>
          <p className="text-slate-300 mb-8">
            Tell us where you are and we&apos;ll route your request to the right person on the team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-inspection"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3.5 rounded-[2px] font-semibold transition-colors shadow-lg shadow-brand-red/20"
            >
              Request a free inspection
            </Link>
            <a
              href="tel:+13367663464"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 rounded-[2px] font-semibold transition-colors border border-white/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (336) ROOFING
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) {
  return (
    <div className="text-center mb-12">
      <span className="text-brand-red font-semibold text-sm uppercase tracking-[0.18em]">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-brand-black mt-2 mb-3">
        {title}
      </h2>
      <p className="text-brand-gray max-w-2xl mx-auto">{subtitle}</p>
    </div>
  )
}

function ProfileCard({ member }: { member: TeamMember }) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 hover:border-brand-red transition-all"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Image
          src={member.photo}
          alt={member.fullName}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-red" />
      </div>
      <div className="p-5">
        <h3 className="text-brand-black font-bold text-lg leading-tight">
          {member.fullName}
        </h3>
        <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mt-1">
          {member.role}
        </p>
        {member.territory && (
          <p className="text-brand-gray text-sm mt-2">{member.territory}</p>
        )}
        <p className="text-slate-500 text-sm italic mt-3 line-clamp-2">
          &ldquo;{member.tagline}&rdquo;
        </p>
        <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-red group-hover:gap-2 transition-all">
          View card
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
