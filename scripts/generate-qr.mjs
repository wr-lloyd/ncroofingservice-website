#!/usr/bin/env node
// Pre-generates a PNG QR code for every team member at build time, so the
// profile pages can ship as static HTML with zero third-party requests.
// Output: public/qr/<slug>.png

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

async function readSiteUrl() {
  const { readFile } = await import('node:fs/promises')
  const src = await readFile(join(ROOT, 'lib', 'site.ts'), 'utf8')
  const match = src.match(/SITE_URL\s*=\s*'([^']+)'/)
  return match ? match[1] : 'https://ncroofingservice.com'
}

async function main() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true })

  const slugs = await readSlugs()
  const siteUrl = await readSiteUrl()

  if (slugs.length === 0) {
    console.warn('[generate-qr] No team slugs found; nothing to do.')
    return
  }

  for (const slug of slugs) {
    const target = `${siteUrl}/team/${slug}`
    const out = join(OUT_DIR, `${slug}.png`)
    const buf = await QRCode.toBuffer(target, {
      type: 'png',
      errorCorrectionLevel: 'M',
      margin: 2,
      scale: 8,
      color: { dark: '#111111FF', light: '#FFFFFFFF' },
    })
    await writeFile(out, buf)
    console.log(`[generate-qr] ${slug}.png → ${target}`)
  }
  console.log(`[generate-qr] Done. ${slugs.length} QR code(s) written to /public/qr/`)
}

main().catch((err) => {
  console.error('[generate-qr] Failed:', err)
  process.exit(1)
})
