import { SITE_URL } from '@/lib/site'
import type { TeamMember } from './data'

/** Pretty phone string shown on the card. */
export function memberPhoneDisplay(m: TeamMember): string {
  return m.phoneDisplay
}

/** tel: href for the call action. */
export function memberPhoneHref(m: TeamMember): string {
  return `tel:${m.directPhone}`
}

/**
 * sms: href with a pre-filled message. iOS expects `?body=`, modern Android
 * accepts the same, so we standardize on `?body=` (the previous `?&body=` was
 * invalid URI syntax and silently broken on some Android dialers).
 */
export function memberSmsHref(m: TeamMember): string {
  const body = encodeURIComponent(
    `Hi ${m.firstName}, I saw your card on ncroofingservice.com and would like to talk about my roof.`
  )
  return `sms:${m.directPhone}?body=${body}`
}

/** mailto: with subject + body pre-filled. */
export function memberMailHref(m: TeamMember): string {
  const subject = encodeURIComponent(`Roofing inquiry for ${m.firstName}`)
  const body = encodeURIComponent(
    `Hi ${m.firstName},\n\nI found your profile on ncroofingservice.com and would like to talk about a roofing project.\n\nThanks,`
  )
  return `mailto:${m.email}?subject=${subject}&body=${body}`
}

/** Inspection request URL with rep attribution. */
export function memberInspectionHref(m: TeamMember): string {
  return `/request-inspection?rep=${m.slug}`
}

/** Canonical profile URL — used for QR codes, sharing, vCard URL field. */
export function memberProfileUrl(m: TeamMember): string {
  return `${SITE_URL}/team/${m.slug}`
}

/** Photo URL — absolute, with safety against accidental double-prefixing. */
export function memberPhotoUrl(m: TeamMember): string {
  return m.photo.startsWith('http') ? m.photo : `${SITE_URL}${m.photo}`
}
