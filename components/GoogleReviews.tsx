import Link from 'next/link'

export default function GoogleReviews() {
  const reviews = [
    {
      name: 'James Wilson',
      location: 'Durham, NC',
      date: '2 weeks ago',
      rating: 5,
      text: "B&C Roofing did an outstanding job on our roof replacement. Randall and his team were professional, showed up on time, and the quality of work exceeded our expectations. They helped us with our insurance claim too!",
      avatar: 'JW',
      avatarColor: 'from-blue-500 to-blue-700',
      source: 'Google',
    },
    {
      name: 'Patricia Martinez',
      location: 'Rougemont, NC',
      date: '1 month ago',
      rating: 5,
      text: "Called them for an emergency leak during a storm and they had someone out the very next morning. Professional, fair pricing, and they explained everything clearly. Highly recommend this local company!",
      avatar: 'PM',
      avatarColor: 'from-purple-500 to-purple-700',
      source: 'Yelp',
    },
    {
      name: 'Robert Thompson',
      location: 'Raleigh, NC',
      date: '3 weeks ago',
      rating: 5,
      text: "Got quotes from 5 different roofers. B&C wasn't the cheapest, but they were the most thorough in their inspection and honest about what we actually needed vs. what we didn't. Quality work and great communication.",
      avatar: 'RT',
      avatarColor: 'from-green-500 to-green-700',
      source: 'Google',
    },
    {
      name: 'Linda Chen',
      location: 'Chapel Hill, NC',
      date: '1 week ago',
      rating: 5,
      text: "We had B&C install a FORTIFIED roof after hurricane damage. The process was seamless, they handled everything with our insurance, and now we have peace of mind with a storm-resistant roof. A+ service!",
      avatar: 'LC',
      avatarColor: 'from-pink-500 to-pink-700',
      source: 'BBB',
    },
  ]

  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Customer Reviews</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">What Our Customers Say</h2>
          
          {/* Aggregate Rating */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              {/* Google Logo */}
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-white font-semibold">4.9</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-slate-500">|</span>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-amber-500 font-bold">A+</span>
              <span className="text-sm">BBB Rating</span>
            </div>
          </div>
          
          <p className="text-slate-400">Serving the Triangle area since 2018</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/50 rounded-2xl p-6 border border-white/5"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${review.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold">{review.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">{review.name}</div>
                      <div className="text-slate-500 text-sm">{review.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-500 text-sm">{review.date}</div>
                      <div className="text-xs text-slate-600">via {review.source}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">&quot;{review.text}&quot;</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Join hundreds of satisfied homeowners across NC</p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Your Free Inspection
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
