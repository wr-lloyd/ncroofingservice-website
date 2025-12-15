# B&C Roofing and Repair - Website

A modern, conversion-optimized website for B&C Roofing and Repair, built with Next.js 14, TypeScript, and Tailwind CSS.

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
| `/services` | Overview of all services with links to detail pages |
| `/services/roof-repair` | Roof repair details with Problem Finder tool |
| `/services/roof-replacement` | Replacement services with Visualizer integration |
| `/services/storm-damage-insurance` | Storm damage and insurance claim support |
| `/services/fortified-roofing` | FORTIFIED roofing information |
| `/about` | Company info, team, certifications |
| `/contact` | Contact form and information |
| `/blog` | Blog articles (SEO content) |
| `/our-work` | Project gallery |
| `/faq` | Frequently asked questions |
| `/locations` | Service areas |

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

Create a `.env.local` file in the root directory:

```env
# Email Service (optional - for lead notifications)
# Uncomment and configure when ready to send emails
# EMAIL_SERVICE_URL=https://your-email-service.com/send
# SENDGRID_API_KEY=your-sendgrid-key

# Database (optional - for lead storage)
# SUPABASE_URL=https://your-project.supabase.co
# SUPABASE_ANON_KEY=your-anon-key

# Analytics (optional)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Calendar Integration (optional)
# CALENDLY_URL=https://calendly.com/bandc-roofing
```

### Environment Variable Descriptions

| Variable | Required | Description |
|----------|----------|-------------|
| `EMAIL_SERVICE_URL` | Optional | Endpoint for email notifications (SendGrid, Resend, etc.) |
| `SENDGRID_API_KEY` | Optional | SendGrid API key for email delivery |
| `SUPABASE_URL` | Optional | Supabase project URL for lead storage |
| `SUPABASE_ANON_KEY` | Optional | Supabase anonymous key |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 measurement ID |
| `CALENDLY_URL` | Optional | Calendly scheduling URL |

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

- **Company**: B&C Roofing and Repair, LLC
- **Owner**: Randall Butler
- **Phone**: (919) 475-8841
- **Email**: bandc@ncroofingservice.com
- **Address**: 5950 Mt. Harmony Church Rd, Rougemont, NC 27572
- **Service Area**: Durham, Raleigh, Chapel Hill, Cary, and surrounding Triangle areas

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
