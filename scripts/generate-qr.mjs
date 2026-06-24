#!/usr/bin/env node
// Pre-generates PNG QR codes at build time so pages can ship as static HTML
// with zero third-party requests.
//   - public/qr/<slug>.png          one per team member  (→ /team/<slug>)
//   - public/qr/guide-<id>.png      one per guide journey moment
//
// The guide codes power the printable Field Guide's "scan here" quick-start
// grid, so a homeowner with a paper copy can open the right tool on the spot.

import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import QRCode from 'qrcode'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const OUT_DIR = join(ROOT, 'public', 'qr')

// Tiny TS loader is overkill here — we re-derive the slugs from the source
// file with a regex. The source of truth still lives in lib/team/data.ts.
async function readSlugs() {
  const { readFile } = await import('node:fs/promises')
  const src = await readFile(join(ROOT, 'lib', 'team', 'data.ts'), 'utf8')
  const matches = [...src.matchAll(/slug:\s*'([a-z0-9-]+)'/g)]
  return matches.map((m) => m[1])
}

// Derive guide journey moments from lib/guide-journey.ts. Each moment block
// has its `id` first and a `qrTarget` after it, so a per-block non-greedy
// match pairs them correctly. Source of truth stays in the TS file.
async function readJourneyMoments() {
  const { readFile } = await import('node:fs/promises')
  const src = await readFile(join(ROOT, 'lib', 'guide-journey.ts'), 'utf8')
  const matches = [
    ...src.matchAll(/id:\s*'([a-z0-9-]+)',[\s\S]*?qrTarget:\s*'([^']+)'/g),
  ]
  return matches.map((m) => ({ id: m[1], qrTarget: m[2] }))
}

async function readSiteUrl() {
  const { readFile } = await import('node:fs/promises')
  const src = await readFile(join(ROOT, 'lib', 'site.ts'), 'utf8')
  const match = src.match(/SITE_URL\s*=\s*'([^']+)'/)
  return match ? match[1] : 'https://ncroofingservice.com'
}

const QR_OPTS = {
  type: 'png',
  errorCorrectionLevel: 'M',
  margin: 2,
  scale: 8,
  color: { dark: '#111111FF', light: '#FFFFFFFF' },
}

async function main() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true })

  const slugs = await readSlugs()
  const moments = await readJourneyMoments()
  const siteUrl = await readSiteUrl()

  for (const slug of slugs) {
    const target = `${siteUrl}/team/${slug}`
    const buf = await QRCode.toBuffer(target, QR_OPTS)
    await writeFile(join(OUT_DIR, `${slug}.png`), buf)
    console.log(`[generate-qr] ${slug}.png → ${target}`)
  }

  for (const moment of moments) {
    const target = `${siteUrl}${moment.qrTarget}`
    const buf = await QRCode.toBuffer(target, QR_OPTS)
    await writeFile(join(OUT_DIR, `guide-${moment.id}.png`), buf)
    console.log(`[generate-qr] guide-${moment.id}.png → ${target}`)
  }

  const total = slugs.length + moments.length
  if (total === 0) {
    console.warn('[generate-qr] Nothing to generate.')
    return
  }
  console.log(
    `[generate-qr] Done. ${total} QR code(s) written to /public/qr/ ` +
      `(${slugs.length} team, ${moments.length} guide).`,
  )
}

main().catch((err) => {
  console.error('[generate-qr] Failed:', err)
  process.exit(1)
})
