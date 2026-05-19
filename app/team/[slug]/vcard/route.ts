import { NextResponse } from 'next/server'
import { buildVCard, getAllTeamSlugs, getTeamMember } from '@/lib/team'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getAllTeamSlugs().map((slug) => ({ slug }))
}

export function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const member = getTeamMember(params.slug)
  if (!member) {
    return new NextResponse('Not found', { status: 404 })
  }
  const vcf = buildVCard(member)
  return new NextResponse(vcf, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `attachment; filename="${member.slug}.vcf"`,
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
