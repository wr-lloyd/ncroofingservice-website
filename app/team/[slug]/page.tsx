import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  team,
  getTeamMember,
  memberPhoneDisplay,
  memberPhoneHref,
  memberSmsHref,
  memberMailHref,
  memberInspectionHref,
  memberProfileUrl,
  OFFICE_PHONE,
  OFFICE_PHONE_DISPLAY,
  OFFICE_EMAIL,
  OFFICE_ADDRESS,
} from '@/lib/team'
import ShareButton from './ShareButton'

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
      images: [
        { url: m.photo, width: 400, height: 400, alt: m.fullName },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [m.photo],
    },
  }
}

// Server-rendered QR code via a public, image-only endpoint (no JS, no deps,
// no remoteImages whitelist needed because we use a plain <img>).
function qrUrl(target: string): string {
  const data = encodeURIComponent(target)
  return `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&color=111111&bgcolor=FFFFFF&data=${data}`
}

export default function TeamProfilePage({ params }: { params: { slug: string } }) {
  const member = getTeamMember(params.slug)
  if (!member) notFound()

  const profileUrl = memberProfileUrl(member)
  const phoneHref = memberPhoneHref(member)
  const phoneDisplay = memberPhoneDisplay(member)
  const smsHref = memberSmsHref(member)
  const mailHref = memberMailHref(member)
  const inspectionHref = memberInspectionHref(member)

  // JSON-LD Person schema for rich results.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.fullName,
    givenName: member.firstName,
    familyName: member.lastName || undefined,
    jobTitle: member.role,
    image: `https://ncroofingservice.com${member.photo}`,
    url: profileUrl,
    email: member.email,
    telephone: OFFICE_PHONE,
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
    <main className="pt-20 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* The whole card lives inside a max-w-md so it reads like a phone screen even on desktop */}
      <div className="max-w-md mx-auto px-4 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/team"
          className="inline-flex items-center gap-1 text-sm text-brand-gray hover:text-brand-red transition-colors mb-4"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to the team
        </Link>

        {/* THE CARD */}
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          {/* Branded header */}
          <header className="relative bg-brand-red text-white pt-6 pb-20 px-6 text-center overflow-hidden">
            {/* Subtle diagonal pattern for brand texture */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px)',
              }}
            />
            <div className="relative z-10">
              <Image
                src="/images/logos/NC ROOFING SERVICE-01.png"
                alt="NC Roofing Service"
                width={400}
                height={80}
                className="h-9 w-auto mx-auto mb-1 brightness-0 invert"
                priority
              />
              <p className="text-white/80 text-[11px] tracking-[0.18em] uppercase font-semibold">
                Your Local Triangle Roofing Team
              </p>
            </div>
          </header>

          {/* Avatar — overlaps the header */}
          <div className="relative px-6 -mt-16 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-2xl bg-slate-200">
              <Image
                src={member.photo}
                alt={member.fullName}
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <h1 className="text-2xl font-bold text-brand-black mt-4">
              {member.fullName}
            </h1>
            <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mt-1">
              {member.role}
            </p>
            {member.territory && (
              <p className="text-brand-gray text-sm mt-1">{member.territory}</p>
            )}
            <p className="text-slate-500 text-sm italic mt-3 max-w-xs">
              &ldquo;{member.tagline}&rdquo;
            </p>

            {/* Quick meta chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {member.joinedYear && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-gray bg-slate-100 px-2.5 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Since {member.joinedYear}
                </span>
              )}
              {member.languages?.map((lang) => (
                <span
                  key={lang}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-gray bg-slate-100 px-2.5 py-1 rounded-full"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Primary CTA — vCard download */}
          <div className="px-6 mt-6">
            <a
              href={`/team/${member.slug}/vcard`}
              className="flex items-center justify-center gap-2 w-full bg-brand-red hover:bg-brand-red-dark text-white px-5 py-4 rounded-[2px] font-semibold transition-colors shadow-lg shadow-brand-red/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Save {member.firstName} to my contacts
            </a>
          </div>

          {/* Action rows — dot-card style */}
          <nav className="px-6 mt-3" aria-label="Contact actions">
            <ul className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white">
              <ActionRow
                href={phoneHref}
                iconBg="bg-green-100"
                iconColor="text-green-600"
                title={`Call ${member.firstName}`}
                subtitle={phoneDisplay}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              />
              <ActionRow
                href={smsHref}
                iconBg="bg-sky-100"
                iconColor="text-sky-600"
                title={`Text ${member.firstName}`}
                subtitle="Pre-written message — just hit send"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                }
              />
              <ActionRow
                href={mailHref}
                iconBg="bg-violet-100"
                iconColor="text-violet-600"
                title={`Email ${member.firstName}`}
                subtitle={member.email}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
              <ActionRow
                href={inspectionHref}
                iconBg="bg-brand-red/10"
                iconColor="text-brand-red"
                title="Request my free inspection"
                subtitle={`Routes directly to ${member.firstName}`}
                emphasis
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
              />
              <ActionRow
                href="https://g.page/r/CSlpe0DMtNI-EBE/review"
                external
                iconBg="bg-amber-100"
                iconColor="text-amber-600"
                title="Leave us a Google review"
                subtitle="Tell Google how we did"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                }
              />
              <ActionRow
                href="https://www.google.com/maps/dir/?api=1&destination=5950+Mt+Harmony+Church+Rd+Rougemont+NC+27572"
                external
                iconBg="bg-blue-100"
                iconColor="text-blue-600"
                title="Directions to our office"
                subtitle={`${OFFICE_ADDRESS.street}, ${OFFICE_ADDRESS.city} NC`}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              />
            </ul>
          </nav>

          {/* Share + main office */}
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
              Or call our main office: <span className="font-semibold">{OFFICE_PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* About */}
          <section className="px-6 mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red mb-3">
              About {member.firstName}
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed">{member.bio}</p>
          </section>

          {/* Service area */}
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

          {/* Certifications */}
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
                    <svg
                      className="w-4 h-4 text-brand-red flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Trust badges row — house brand consistency */}
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

          {/* QR Code + share — the printable handoff */}
          <section className="px-6 mt-8 pb-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red mb-3">
              Save This Card
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrUrl(profileUrl)}
                alt={`QR code linking to ${member.firstName}'s NC Roofing Service profile`}
                width={104}
                height={104}
                loading="lazy"
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

          {/* Footer strip with logo for brand close */}
          <footer className="bg-brand-black text-white px-6 py-5 text-center">
            <Image
              src="/images/logos/logo-number.png"
              alt="NC Roofing Service — (336) ROOFING"
              width={520}
              height={180}
              className="h-12 w-auto mx-auto mb-2"
            />
            <p className="text-white/60 text-[11px]">
              Licensed · Insured · Family-Owned · Triangle, NC
            </p>
          </footer>
        </article>

        {/* Secondary nav */}
        <div className="mt-8 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm text-brand-gray hover:text-brand-red transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Meet the rest of the team
          </Link>
        </div>
      </div>
    </main>
  )
}

// --- helpers ---

interface ActionRowProps {
  href: string
  title: string
  subtitle?: string
  icon: React.ReactNode
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
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <li>
      <a
        href={href}
        {...externalProps}
        className={`flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-slate-50 ${
          emphasis ? 'bg-brand-red/[0.04]' : ''
        }`}
      >
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-full ${iconBg} ${iconColor} flex items-center justify-center`}
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
            <span className="block text-xs text-brand-gray truncate">
              {subtitle}
            </span>
          )}
        </span>
        <svg
          className="w-4 h-4 text-slate-300 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </li>
  )
}

function TrustChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[11px] font-medium text-brand-black bg-slate-50 border border-slate-200 px-2.5 py-2 rounded-lg">
      <svg className="w-3.5 h-3.5 text-brand-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <span className="truncate">{label}</span>
    </div>
  )
}
