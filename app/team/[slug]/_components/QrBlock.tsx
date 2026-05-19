import Image from 'next/image'
import type { TeamMember } from '@/lib/team'

/**
 * Pre-generated PNG QR (built at `prebuild`) — see scripts/generate-qr.mjs.
 * Static path, no external dependency, prints crisply on dot-cards.
 */
export default function QrBlock({ member }: { member: TeamMember }) {
  return (
    <section className="px-6 mt-8 pb-8">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red mb-3">
        Save This Card
      </h2>
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
        <Image
          src={`/qr/${member.slug}.png`}
          alt={`QR code linking to ${member.firstName}'s NC Roofing Service profile`}
          width={208}
          height={208}
          sizes="96px"
          className="w-24 h-24 rounded-lg bg-white p-1 flex-shrink-0"
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-brand-black leading-snug">
            Scan or share this card
          </p>
          <p className="text-xs text-brand-gray mt-1 leading-relaxed">
            Point any phone camera at the code to open {member.firstName}&apos;s card.
          </p>
          <p className="text-[10px] text-slate-400 mt-2 break-all">
            ncroofingservice.com/team/{member.slug}
          </p>
        </div>
      </div>
    </section>
  )
}
