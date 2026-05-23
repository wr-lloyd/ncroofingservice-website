import Link from 'next/link'
import GuideEyebrow from './GuideEyebrow'
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'

interface EntryCard {
  num: string
  title: string
  body: string
  href: string
  cta: string
}

const ENTRIES: EntryCard[] = [
  {
    num: '01',
    title: 'A storm just hit my house',
    body: 'Damage, insurance, and what to do this week. Read this before you sign anything.',
    href: '/guide/check-your-roof#what-now',
    cta: 'Start here',
  },
  {
    num: '02',
    title: 'My roof is showing its age',
    body: "Plan a replacement on your timeline. Not someone else's.",
    href: '/guide/plan-your-roof',
    cta: 'Start here',
  },
  {
    num: '03',
    title: "I'm buying or building a home",
    body: "Figure out what's actually up there, and what it'll cost to keep it that way.",
    href: '/guide/check-your-roof#from-ground',
    cta: 'Start here',
  },
  {
    num: '04',
    title: 'Just curious. I want to learn',
    body: 'Read the whole guide. Thirty seven minutes if you read every word. No pressure.',
    href: '/guide/check-your-roof',
    cta: 'Open the guide',
  },
]

/**
 * "Where are you right now?" four-card chooser shown on the hub. Routes the
 * reader to the right anchor inside Ch. 01 (and later chapters as they ship).
 */
export default function EntryChooser() {
  return (
    <section className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="text-center mb-12 lg:mb-14">
          <GuideEyebrow>Start with where you are</GuideEyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-brand-black tracking-tight leading-tight max-w-3xl mx-auto">
            Where are you right now?
          </h2>
          <p className="mt-3 text-lg text-slate-500 max-w-xl mx-auto">
            Pick the one that fits. We&apos;ll send you to the right chapter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ENTRIES.map((entry) => (
            <Link
              key={entry.num}
              href={entry.href}
              className="group flex flex-col bg-white border border-slate-200 rounded-xl p-7 min-h-[220px] hover:border-brand-red hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-16px_rgba(200,16,46,0.22)] transition-all"
            >
              <div className="w-11 h-11 bg-brand-red/10 text-brand-red rounded-[10px] flex items-center justify-center text-base font-bold mb-5">
                {entry.num}
              </div>
              <h3 className="text-lg font-bold text-brand-black leading-snug tracking-tight mb-2">
                {entry.title}
              </h3>
              <p className="text-[15px] text-slate-500 leading-relaxed flex-1 mb-5">
                {entry.body}
              </p>
              <span className="text-[13px] text-brand-red font-semibold">
                {entry.cta} &rarr;
              </span>
            </Link>
          ))}
        </div>

        <p className="text-center mt-10 text-[15px] text-slate-500">
          Or skip all this and{' '}
          <a
            href={`tel:${OFFICE_PHONE}`}
            className="text-brand-red font-semibold hover:underline"
          >
            call {OFFICE_PHONE_DISPLAY}
          </a>
          . Real person. No script. No sales call.
        </p>
      </div>
    </section>
  )
}
