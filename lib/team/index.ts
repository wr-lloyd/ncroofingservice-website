// Re-export surface so existing imports (`from '@/lib/team'`) keep working
// after the file was split.

export type { TeamMember, Department } from './data'
export { team } from './data'

export {
  getAllTeamSlugs,
  getTeamMember,
  getTeamByDepartment,
} from './queries'

export {
  memberPhoneDisplay,
  memberPhoneHref,
  memberSmsHref,
  memberMailHref,
  memberInspectionHref,
  memberProfileUrl,
  memberPhotoUrl,
} from './contact'

export { buildVCard } from './vcard'

// Site constants are re-exported for backwards compatibility with the
// previous monolithic `lib/team.ts` API. Prefer importing from `@/lib/site`
// in new code.
export {
  SITE_URL,
  FOUNDED_YEAR,
  OFFICE_PHONE,
  OFFICE_PHONE_DISPLAY,
  OFFICE_PHONE_DIGITS,
  OFFICE_EMAIL,
  OFFICE_ADDRESS,
} from '@/lib/site'
