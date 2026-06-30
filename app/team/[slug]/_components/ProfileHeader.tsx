import Image from 'next/image'
import Icon from '@/components/Icon'
import type { TeamMember } from '@/lib/team'

export default function ProfileHeader({ member }: { member: TeamMember }) {
  return (
    <>
      <header className="relative bg-brand-red text-white pt-6 pb-20 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px)',
          }}
        />
        <div className="relative z-10">
          <Image
            src="/images/logos/logo-number.png"
            alt="NC Roofing Service"
            width={520}
            height={180}
            className="h-10 w-auto mx-auto mb-1 brightness-0 invert"
          />
          <p className="text-white/90 text-[11px] tracking-[0.18em] uppercase font-semibold">
            Your Local Triangle Roofing Team
          </p>
        </div>
      </header>

      <div className="relative px-6 -mt-16 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-2xl bg-slate-200">
          <Image
            src={member.photo}
            alt={member.fullName}
            width={256}
            height={256}
            sizes="128px"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <h1 className="text-2xl font-bold text-brand-black mt-4">{member.fullName}</h1>
        <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mt-1">
          {member.role}
        </p>
        {member.badge && (
          <p className="text-brand-red text-[11px] font-bold uppercase tracking-[0.18em] mt-1">
            &ldquo;{member.badge}&rdquo;
          </p>
        )}
        {member.territory && <p className="text-brand-gray text-sm mt-1">{member.territory}</p>}
        <p className="text-slate-500 text-sm italic mt-3 max-w-xs">
          &ldquo;{member.tagline}&rdquo;
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          {member.joinedYear && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-gray bg-slate-100 px-2.5 py-1 rounded-full">
              <Icon name="clock" className="w-3 h-3" />
              Since {member.joinedYear}
            </span>
          )}
          {member.languages?.map((lang) => (
            <span
              key={lang}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-gray bg-slate-100 px-2.5 py-1 rounded-full"
            >
              <Icon name="language" className="w-3 h-3" />
              {lang}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
