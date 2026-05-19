import Link from 'next/link'
import Image from 'next/image'
import Icon from '@/components/Icon'
import type { TeamMember } from '@/lib/team'

/**
 * Unified team card used in both Field Leadership and Operations rows on
 * About. Same dimensions for every member — including the avatar — so the
 * two rows visually align.
 */
export default function CrewCard({ member }: { member: TeamMember }) {
  return (
    <Link
      href={`/team/${member.slug}`}
      aria-label={`View ${member.firstName}'s profile card`}
      className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 hover:border-brand-red transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Image
          src={member.photo}
          alt={member.fullName}
          fill
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-red" />
        {member.badge && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full shadow-md">
            <Icon name="drone" className="w-3 h-3" />
            {member.badge}
          </span>
        )}
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
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-red group-hover:gap-2 transition-all">
          View card
          <Icon name="chevron-right" className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  )
}
