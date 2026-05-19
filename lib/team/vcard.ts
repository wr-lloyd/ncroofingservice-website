import { OFFICE_PHONE, OFFICE_ADDRESS } from '@/lib/site'
import type { TeamMember } from './data'
import { memberPhotoUrl, memberProfileUrl } from './contact'

/** Builds a vCard 3.0 string suitable for download as .vcf */
export function buildVCard(m: TeamMember): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${m.lastName};${m.firstName};;;`,
    `FN:${m.fullName}`,
    'ORG:NC Roofing Service and Repair, LLC',
    `TITLE:${m.role}`,
    `TEL;TYPE=CELL,VOICE:${m.directPhone}`,
    `TEL;TYPE=WORK,VOICE:${OFFICE_PHONE}`,
    `EMAIL;TYPE=INTERNET,WORK:${m.email}`,
    `URL:${memberProfileUrl(m)}`,
    `ADR;TYPE=WORK:;;${OFFICE_ADDRESS.street};${OFFICE_ADDRESS.city};${OFFICE_ADDRESS.region};${OFFICE_ADDRESS.postalCode};${OFFICE_ADDRESS.country}`,
    `PHOTO;VALUE=URI:${memberPhotoUrl(m)}`,
    `NOTE:${m.tagline}`,
    'END:VCARD',
  ]
  return lines.join('\r\n')
}
