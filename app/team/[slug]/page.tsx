import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import Icon from '@/components/Icon'
import { OFFICE_ADDRESS, OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'
import {
  team,
  getTeamMember,
  memberProfileUrl,
  memberPhotoUrl,
} from '@/lib/team'

import ShareButton from './ShareButton'
import ProfileHeader from './_components/ProfileHeader'
import ActionList from './_components/ActionList'
import QrBlock from './_components/QrBlock'

export async function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const m = getTeamMember(params.slug)
  if (!m) return { title: 'Team Member' }
  const title = `${m.fullName} — ${m.role} | NC Roofing Service`
  const description = `${m.tagline} ${m.territory ? `Serving ${m.territory}. ` : ''}Tap to call, text, save contact, or request a free roof inspection.`
  return {
    title,
    description,
    alternates: { canonical: `/team/${m.slug}` },
    openGraph: {
      title,
      description,
      url: `/team/${m.slug}`,
      type: 'profile',
      images: [{ url: m.photo, width: 400, height: 400, alt: m.fullName }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [m.photo],
    },
  }
}

export default function TeamProfilePage({ params }: { params: { slug: string } }) {
  const member = getTeamMember(params.slug)
  if (!member) notFound()

  const profileUrl = memberProfileUrl(member)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.fullName,
    givenName: member.firstName,
    familyName: member.lastName || undefined,
    jobTitle: member.role,
    image: memberPhotoUrl(member),
    url: profileUrl,
    email: member.email,
    telephone: member.directPhone,
    knowsLanguage: member.languages,
    worksFor: {
      '@type': 'RoofingContractor',
      name: 'NC Roofing Service and Repair, LLC',
      url: 'https://ncroofingservice.com',
      telephone: OFFICE_PHONE,
      address: {
        '@type': 'PostalAddress',
        streetAddress: OFFICE_ADDRESS.street,
        addressLocality: OFFICE_ADDRESS.city,
        addressRegion: OFFICE_ADDRESS.region,
        postalCode: OFFICE_ADDRESS.postalCode,
        addressCountry: OFFICE_ADDRESS.country,
      },
    },
    areaServed: member.cities?.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'State', name: 'North Carolina' },
    })),
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-md mx-auto px-4 pt-6 pb-10 sm:pt-10 sm:pb-14">
        <Link
          href="/about#crew"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gray hover:text-brand-red transition-colors mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded"
        >
          <Icon name="chevron-left" className="w-4 h-4" />
          Back to the team
        </Link>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <ProfileHeader member={member} />

          <div className="px-6 mt-6">
            <a
              href={`/team/${member.slug}/vcard`}
              className="flex items-center justify-center gap-2 w-full bg-brand-red hover:bg-brand-red-dark text-white px-5 py-4 rounded-[2px] font-semibold transition-colors shadow-lg shadow-brand-red/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              <Icon name="download" className="w-5 h-5" />
              Save {member.firstName} to my contacts
            </a>
          </div>

          <ActionList member={member} />

          <div className="px-6 mt-3 space-y-3">
            <ShareButton
              url={profileUrl}
              title={`${member.fullName} — NC Roofing Service`}
              text={member.tagline}
            />
            <a
              href={`tel:${OFFICE_PHONE}`}
              className="block text-center text-xs text-brand-gray hover:text-brand-red transition-colors"
            >
              Or call our main office:{' '}
              <span className="font-semibold">{OFFICE_PHONE_DISPLAY}</span>
            </a>
          </div>

          <section className="px-6 mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red mb-3">
              About {member.firstName}
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed">{member.bio}</p>
          </section>

          {member.cities && member.cities.length > 0 && (
            <section className="px-6 mt-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red mb-3">
                Service Area
              </h2>
              <div className="flex flex-wrap gap-2">
                {member.cities.map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1.5 bg-white border border-brand-red/30 text-brand-black text-xs font-medium rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </section>
          )}

          {member.certifications && member.certifications.length > 0 && (
            <section className="px-6 mt-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red mb-3">
                Certifications
              </h2>
              <ul className="space-y-2">
                {member.certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-center gap-2 text-sm text-brand-gray"
                  >
                    <Icon
                      name="shield-check"
                      className="w-4 h-4 text-brand-red flex-shrink-0"
                    />
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="px-6 mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red mb-3">
              The Whole Company Behind {member.firstName}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <TrustChip label="GAF Certified" />
              <TrustChip label="Owens Corning" />
              <TrustChip label="FORTIFIED by IBHS" />
              <TrustChip label="BBB A+ Accredited" />
            </div>
          </section>

          <QrBlock member={member} />

          <footer className="bg-brand-black text-white px-6 py-5 text-center">
            <Image
              src="/images/logos/logo-number.png"
              alt={`NC Roofing Service — ${OFFICE_PHONE_DISPLAY}`}
              width={520}
              height={180}
              className="h-12 w-auto mx-auto mb-2"
            />
            <p className="text-white/60 text-[11px]">
              Licensed · Insured · Family-Owned · Triangle, NC
            </p>
          </footer>
        </article>

        <div className="mt-8 text-center">
          <Link
            href="/about#crew"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-gray hover:text-brand-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded"
          >
            <Icon name="arrow-back" className="w-4 h-4" />
            Back to the team
          </Link>
          <p className="text-[11px] text-slate-400 mt-3">
            ncroofingservice.com — Triangle, NC
          </p>
        </div>
      </div>
    </main>
  )
}

function TrustChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[11px] font-medium text-brand-black bg-slate-50 border border-slate-200 px-2.5 py-2 rounded-lg">
      <Icon name="shield-check" className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
      <span className="truncate">{label}</span>
    </div>
  )
}
