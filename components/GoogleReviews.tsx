import Link from 'next/link'

type ReviewSource = 'Yelp' | 'BBB' | 'Facebook' | 'Google'

interface Review {
  name: string
  location?: string
  date: string
  rating: number
  text: string
  avatar: string
  avatarColor: string
  source: ReviewSource
  sourceUrl: string
}

// Real customer reviews pulled from Yelp, BBB, and Facebook.
// Light copy-editing only — no claims added or changed.
const reviews: Review[] = [
  {
    name: 'Britnee P.',
    location: 'Roxboro, NC',
    date: 'Feb 2026',
    rating: 5,
    text: "Called Randy (referred by a co-worker) to come look at my roof. He came out the next day and personally told us we needed a new roof — and exactly why. Not only did he help us with that, he also navigated us through the insurance process. He was so easy to work with that we ended up having him do a few more jobs around our house. Quick, effective, and the 30-year guarantee on our new roof is great. We have a few more things we plan to use Randy for in the near future.",
    avatar: 'BP',
    avatarColor: 'from-brand-red to-brand-red-dark',
    source: 'Yelp',
    sourceUrl: 'https://www.yelp.com/biz/b-and-c-roofing-and-repair-rougemont',
  },
  {
    name: 'Lucy R.',
    location: 'Durham, NC',
    date: 'Apr 2021',
    rating: 5,
    text: "The team was exceptional. They came out the first day and did the roof inspection — two days later they were on the roof, and by the end of that day the project was done. A hard-working crew doing excellent work. They were also very open to answering our questions afterward and educating us on roof construction. We'd absolutely look to Randy and his team again in the future.",
    avatar: 'LR',
    avatarColor: 'from-slate-700 to-slate-900',
    source: 'Yelp',
    sourceUrl: 'https://www.yelp.com/biz/b-and-c-roofing-and-repair-rougemont',
  },
  {
    name: 'Donna P.',
    date: 'Oct 2025',
    rating: 5,
    text: "We needed a new roof for our garage after wind damage. They did a fantastic job and were done in one day. They met with our insurance adjuster and handled the insurance processing for us. Highly recommend them!",
    avatar: 'DP',
    avatarColor: 'from-amber-600 to-amber-800',
    source: 'BBB',
    sourceUrl: 'https://www.bbb.org/us/nc/rougemont/profile/roofing-contractors/bc-roofing-and-repair-llc',
  },
  {
    name: 'Christa K.',
    date: 'Sep 2024',
    rating: 5,
    text: "We needed our roof replaced but were nervous about the process. They explained everything and made it very simple and easy for us. The roof replacement looks great — we're highly satisfied customers!",
    avatar: 'CK',
    avatarColor: 'from-amber-600 to-amber-800',
    source: 'BBB',
    sourceUrl: 'https://www.bbb.org/us/nc/rougemont/profile/roofing-contractors/bc-roofing-and-repair-llc',
  },
  {
    name: 'Paula W.',
    location: 'Sanford, NC',
    date: 'Feb 2021',
    rating: 5,
    text: "From the initial call to the end of the project, everyone was timely, showed up when they said they would, and were kind, courteous, and efficient in their work. Without the owner's help walking me through the insurance process and meeting with the adjuster, it would have been a much less positive experience. Great job!",
    avatar: 'PW',
    avatarColor: 'from-slate-700 to-slate-900',
    source: 'Yelp',
    sourceUrl: 'https://www.yelp.com/biz/b-and-c-roofing-and-repair-rougemont',
  },
  {
    name: 'Jane Burnett',
    date: 'Recent',
    rating: 5,
    text: "The staff was great to work with — I would highly recommend them. My roof looks great!",
    avatar: 'JB',
    avatarColor: 'from-blue-600 to-blue-800',
    source: 'Facebook',
    sourceUrl: 'https://www.facebook.com/bandcroofingandrepair',
  },
]

export default function GoogleReviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Customer Reviews</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">What Our Customers Say</h2>

          {/* Aggregate Rating */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-slate-900 font-bold text-lg">5.0</span>
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-2 text-slate-600">
              <span className="text-amber-600 font-bold">A+</span>
              <span className="text-sm">BBB Accredited</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <div className="text-slate-600 text-sm">
              Verified reviews from <span className="font-semibold">Yelp</span>, <span className="font-semibold">BBB</span> &amp; <span className="font-semibold">Facebook</span>
            </div>
          </div>

          <p className="text-slate-500">Serving the Triangle area since 2018</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <article
              key={idx}
              className="flex flex-col bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header row */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`w-11 h-11 bg-gradient-to-br ${review.avatarColor} rounded-full flex items-center justify-center flex-shrink-0 shadow-md`}
                  aria-hidden="true"
                >
                  <span className="text-white font-bold text-sm">{review.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-slate-900 font-semibold leading-tight">{review.name}</div>
                  {review.location && (
                    <div className="text-slate-500 text-xs">{review.location}</div>
                  )}
                  <div className="flex items-center gap-1 mt-1.5" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <SourceBadge source={review.source} />
              </div>

              {/* Review text */}
              <p className="text-slate-700 leading-relaxed text-sm flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Footer row */}
              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-400">{review.date}</span>
                <a
                  href={review.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-brand-red transition-colors font-medium"
                  aria-label={`View on ${review.source}`}
                >
                  via {review.source}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Read-more strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Read more on:</span>
          <a
            href="https://www.yelp.com/biz/b-and-c-roofing-and-repair-rougemont"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-brand-red hover:text-brand-red rounded-full text-xs font-semibold text-slate-600 transition-colors"
          >
            Yelp
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
          <a
            href="https://www.bbb.org/us/nc/rougemont/profile/roofing-contractors/bc-roofing-and-repair-llc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-brand-red hover:text-brand-red rounded-full text-xs font-semibold text-slate-600 transition-colors"
          >
            BBB
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
          <a
            href="https://www.facebook.com/bandcroofingandrepair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-brand-red hover:text-brand-red rounded-full text-xs font-semibold text-slate-600 transition-colors"
          >
            Facebook
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">Join hundreds of satisfied homeowners across the Triangle</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3 rounded-[2px] font-semibold transition-colors shadow-md"
          >
            Schedule Your Assessment
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function SourceBadge({ source }: { source: ReviewSource }) {
  const config: Record<ReviewSource, { label: string; bg: string; text: string; icon: JSX.Element }> = {
    Yelp: {
      label: 'Yelp',
      bg: 'bg-[#D32323]/10',
      text: 'text-[#D32323]',
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.12-.314-.291-2.038-2.974-.165-.263-.218-.457-.168-.65.069-.27.32-.475.611-.499.073-.007 1.876-.191 1.876-.191.453-.05.63-.018.812.092.283.172.426.439.379.741z" />
        </svg>
      ),
    },
    BBB: {
      label: 'BBB',
      bg: 'bg-amber-100',
      text: 'text-amber-700',
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    Facebook: {
      label: 'Facebook',
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
    },
    Google: {
      label: 'Google',
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      icon: (
        <svg className="w-3 h-3" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        </svg>
      ),
    },
  }
  const c = config[source]
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${c.bg} ${c.text} flex-shrink-0`}
    >
      {c.icon}
      {c.label}
    </span>
  )
}
