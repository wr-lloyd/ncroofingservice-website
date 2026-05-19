import type { ReactNode } from 'react'
import Icon from '@/components/Icon'
import { OFFICE_ADDRESS } from '@/lib/site'
import {
  type TeamMember,
  memberPhoneDisplay,
  memberPhoneHref,
  memberSmsHref,
  memberMailHref,
  memberInspectionHref,
} from '@/lib/team'

export default function ActionList({ member }: { member: TeamMember }) {
  return (
    <nav className="px-6 mt-3" aria-label="Contact actions">
      <ul className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white">
        <ActionRow
          href={memberPhoneHref(member)}
          iconBg="bg-green-100"
          iconColor="text-green-600"
          icon={<Icon name="phone" className="w-5 h-5" />}
          title={`Call ${member.firstName}`}
          subtitle={memberPhoneDisplay(member)}
        />
        <ActionRow
          href={memberSmsHref(member)}
          iconBg="bg-sky-100"
          iconColor="text-sky-600"
          icon={<Icon name="sms" className="w-5 h-5" />}
          title={`Text ${member.firstName}`}
          subtitle="Pre-written message — just hit send"
        />
        <ActionRow
          href={memberMailHref(member)}
          iconBg="bg-violet-100"
          iconColor="text-violet-600"
          icon={<Icon name="mail" className="w-5 h-5" />}
          title={`Email ${member.firstName}`}
          subtitle={member.email}
        />
        <ActionRow
          href={memberInspectionHref(member)}
          iconBg="bg-brand-red/10"
          iconColor="text-brand-red"
          icon={<Icon name="document-check" className="w-5 h-5" />}
          title="Request my free inspection"
          subtitle={`Routes directly to ${member.firstName}`}
          emphasis
        />
        <ActionRow
          href="https://g.page/r/CSlpe0DMtNI-EBE/review"
          external
          iconBg="bg-amber-100"
          iconColor="text-amber-600"
          icon={<Icon name="star" className="w-5 h-5" />}
          title="Leave us a Google review"
          subtitle="Tell Google how we did"
        />
        <ActionRow
          href="https://www.google.com/maps/dir/?api=1&destination=5950+Mt+Harmony+Church+Rd+Rougemont+NC+27572"
          external
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
          icon={<Icon name="map-pin" className="w-5 h-5" />}
          title="Directions to our office"
          subtitle={`${OFFICE_ADDRESS.street}, ${OFFICE_ADDRESS.city} NC`}
        />
      </ul>
    </nav>
  )
}

interface ActionRowProps {
  href: string
  title: string
  subtitle?: string
  icon: ReactNode
  iconBg: string
  iconColor: string
  external?: boolean
  emphasis?: boolean
}

function ActionRow({
  href,
  title,
  subtitle,
  icon,
  iconBg,
  iconColor,
  external = false,
  emphasis = false,
}: ActionRowProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <li>
      <a
        href={href}
        {...externalProps}
        className={`flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-[-2px] ${
          emphasis ? 'bg-brand-red/[0.04]' : ''
        }`}
      >
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-full ${iconBg} ${iconColor} flex items-center justify-center`}
          aria-hidden="true"
        >
          {icon}
        </span>
        <span className="flex-1 min-w-0">
          <span
            className={`block text-sm font-semibold ${
              emphasis ? 'text-brand-red' : 'text-brand-black'
            }`}
          >
            {title}
          </span>
          {subtitle && (
            <span className="block text-xs text-brand-gray truncate">{subtitle}</span>
          )}
        </span>
        <Icon name="chevron-right" className="w-4 h-4 text-slate-300 flex-shrink-0" />
      </a>
    </li>
  )
}
