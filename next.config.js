/** @type {import('next').NextConfig} */

// Content-Security-Policy: locked down to the third-parties we actually use.
// - 'self' for first-party assets
// - 'unsafe-inline' on script-src is required because Next.js inlines small
//   bootstrap scripts and we emit JSON-LD as inline <script>. We do NOT
//   allow 'unsafe-eval'.
// - images allow https: + data: so OG previews / blur placeholders work,
//   and Unsplash hero photos load.
// - connect-src includes NOAA + Nominatim for the storm-check flow.
const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  "media-src 'self'",
  "connect-src 'self' https://www.ncdc.noaa.gov https://www.ncei.noaa.gov https://nominatim.openstreetmap.org",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: cspDirectives,
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
]

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days for remote images
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      // The /team index page was retired in favor of the About#crew section.
      // Individual profile pages at /team/[slug] still exist and are NOT
      // redirected (this rule uses an exact `/team` source, no wildcard).
      {
        source: '/team',
        destination: '/about#crew',
        permanent: true,
      },
      // The three legacy /resources/* article pages were replaced by
      // chapters of The Honest Roof Guide. Permanent 301s carry SEO value
      // across to the new canonical URLs.
      {
        source: '/resources/metal-roofing-guide',
        destination: '/guide/plan-your-roof#three-materials',
        permanent: true,
      },
      {
        source: '/resources/insurance-claim-guide',
        destination: '/guide/pay-for-it#insurance',
        permanent: true,
      },
      {
        source: '/resources/roof-replacement-cost-guide',
        destination: '/guide/cost-estimator',
        permanent: true,
      },
      // The /resources index now lives inside the guide hub.
      {
        source: '/resources',
        destination: '/guide',
        permanent: true,
      },
    ]
  },
  webpack(config, { dev }) {
    if (!dev) {
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig
