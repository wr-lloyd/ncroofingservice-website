# NC Roofing Service and Repair - Website

A modern, conversion-optimized website for NC Roofing Service and Repair, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🧭 **Roofing Journey Flow** (`/start`) - Guided experience to help visitors find the right service
- 🛠️ **Interactive Tools** - Problem Finder, Damage Upload, Insurance Helper, Roof Visualizer
- 📱 **Mobile-First Design** - Responsive design with sticky mobile CTA
- 📊 **Lead Pipeline** - Unified `/api/lead` endpoint for all form submissions
- 🔍 **SEO Optimized** - LocalBusiness schema, meta tags, and semantic HTML
- ⚡ **Performance** - Optimized for Core Web Vitals

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services overview, and instant quote form |
| `/start` | Roofing Journey hub - guides users to the right next step |
| `/residential` | Overview of residential services with links to detail pages |
| `/residential/roof-repair` | Roof repair details with Problem Finder tool |
| `/residential/roof-replacement` | Replacement services with Visualizer integration |
| `/residential/storm-damage` | Storm damage and insurance claim support |
| `/residential/fortified-roofing` | FORTIFIED roofing information |
| `/residential/metal-roofing` | Metal roofing information |
| `/commercial` | Commercial roofing services |
| `/commercial/flat-roofing` | Commercial flat roof systems |
| `/commercial/maintenance-programs` | Commercial roof maintenance plans |
| `/financing` | Roofing financing options (Service Finance Company + Enhancify) |
| `/about` | Company info, the crew, and our story |
| `/team/[slug]` | Mobile-first dot-card profiles for each team member |
| `/contact` | Contact form and information |
| `/blog` | Blog articles (SEO content) |
| `/our-work` | Project gallery |
| `/faq` | Frequently asked questions |
| `/locations` | Service areas hub |
| `/locations/[city]` | Per-city landing pages |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/storm-check` | NOAA storm history lookup tool |
| `/request-inspection` | Inspection request form |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values for local development. In production these are set in Vercel.

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Required for live leads | Resend API key used by `/api/lead` to notify the office. |
| `RESEND_FROM_EMAIL` | Required for live leads | Verified sending address (e.g. `leads@ncroofingservice.com`). |
| `LEAD_NOTIFICATION_EMAIL` | Required for live leads | Where lead emails are delivered (e.g. `info@ncroofingservice.com`). |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Optional | Google Apps Script Web App URL that appends each lead to a Sheet. See [LEAD_CAPTURE_SETUP.md](./LEAD_CAPTURE_SETUP.md). |
| `GOOGLE_SHEETS_WEBHOOK_SECRET` | Recommended with Sheets | Shared secret checked by the Apps Script before it appends a lead. |
| Storm Check APIs | None | `/api/storm-check` uses Nominatim geocoding and NOAA SWDI data; no API key is required. |
| `NEXT_PUBLIC_SITE_URL` | Optional | Override the canonical site URL (defaults to `https://ncroofingservice.com`). |

> **Sitewide constants** (office phone, address, founded year, etc.) live in [`lib/site.ts`](./lib/site.ts). Update them there — they cascade to JSON-LD, page metadata, headers, footers, and CTAs.

## Architecture

### Tool Components

Located in `/components/tools/`:

- `ProblemFinder` - Interactive diagnostic to identify roof issues
- `ScheduleInspection` - Inspection scheduling form
- `DamageUpload` - Photo upload for damage triage
- `InsuranceHelper` - Insurance claim process guide
- `VisualizerCard` - Links to manufacturer roof visualizers

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/lead` | POST | Unified lead intake for all forms |
| `/api/lead` | GET | Health check |

### Lead Types

The `/api/lead` endpoint accepts these `leadType` values:

- `estimate` - Quote/estimate requests
- `triage` - Damage photo submissions
- `schedule` - Inspection scheduling

Each lead is automatically tagged with a routing priority:
- `priority` - Active leaks, urgent issues
- `claims` - Storm damage, insurance-related
- `sales` - General estimates and consultations
- `general` - Other inquiries

## Business Information

- **Company**: NC Roofing Service and Repair, LLC
- **Owner**: Randy Butler
- **Phone**: (336) ROOFING / (336) 766-3464
- **Email**: info@ncroofingservice.com
- **Address**: 5950 Mt. Harmony Church Rd, Rougemont, NC 27572
- **Service Area**: Durham, Raleigh, Chapel Hill, Cary, and surrounding Triangle areas
- **Founded**: 2018

### Certifications

- GAF Certified
- Owens Corning Certified
- CertainTeed Certified
- FORTIFIED by IBHS Certified
- BBB A+ Rated

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run build`
4. Submit a pull request

## License

Private - All rights reserved.
