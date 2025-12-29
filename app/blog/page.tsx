import Link from 'next/link'

export const metadata = {
  title: 'Roofing Blog | NC Roofing Service and Repair | Tips & News',
  description: 'Roofing tips, maintenance advice, and industry news from NC Roofing Service and Repair in Rougemont, NC. Learn how to protect your home.',
}

interface BlogPost {
  title: string
  excerpt: string
  category: string
  date: string
  featured?: boolean
  slug?: string
}

const posts: BlogPost[] = [
  {
    title: 'What to Look for When Hiring a Roofer',
    excerpt: 'Insurance, certifications, and red flags: learn what separates professional roofers from "storm chasers" and how to protect yourself.',
    category: 'Guide',
    date: 'December 2024',
    featured: true,
    slug: 'what-to-look-for-hiring-roofer',
  },
  {
    title: 'What is FORTIFIED Roofing and Is It Right for You?',
    excerpt: 'Learn about IBHS FORTIFIED roofing standards and how they can protect your home from severe weather while potentially saving on insurance.',
    category: 'FORTIFIED',
    date: 'December 2024',
  },
  {
    title: '5 Signs You Need a New Roof',
    excerpt: 'Wondering if it\'s time for a roof replacement? Here are the top indicators that your roof may need attention.',
    category: 'Tips',
    date: 'November 2024',
  },
  {
    title: 'How to File a Roof Insurance Claim in NC',
    excerpt: 'Step-by-step guide to filing a roofing insurance claim after storm damage. What to document and how to work with adjusters.',
    category: 'Insurance',
    date: 'October 2024',
  },
  {
    title: 'GAF vs Owens Corning vs CertainTeed: Which Shingle is Best?',
    excerpt: 'A comparison of the three major shingle brands we install, including warranty differences and performance characteristics.',
    category: 'Materials',
    date: 'September 2024',
  },
  {
    title: 'Preparing Your Roof for Hurricane Season',
    excerpt: 'NC hurricane season runs from June to November. Here\'s how to prepare your roof and what to do if damage occurs.',
    category: 'Maintenance',
    date: 'August 2024',
  },
  {
    title: 'Why Local Roofers Matter',
    excerpt: 'The benefits of choosing a local roofing contractor over national franchises or storm chasers.',
    category: 'Tips',
    date: 'July 2024',
  },
]

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">Roofing Tips & News</h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Expert advice and information to help you make informed decisions about your roof.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-slate-800 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog/what-to-look-for-hiring-roofer"
            className="block bg-gradient-to-r from-red-900/30 to-slate-800 rounded-2xl overflow-hidden border border-red-500/30 hover:border-red-500/50 transition-all group"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400">
                    ⭐ Featured Guide
                  </span>
                  <span className="text-slate-500 text-sm">December 2024</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  What to Look for When Hiring a Roofer
                </h2>
                <p className="text-slate-400 mb-6">
                  Insurance, certifications, and red flags: learn what separates professional roofers 
                  from &quot;storm chasers&quot; and how to protect yourself when hiring a roofing contractor.
                </p>
                <span className="inline-flex items-center gap-2 text-red-400 font-medium group-hover:text-red-300 transition-colors">
                  Read the Full Guide
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
              <div className="bg-slate-700/50 rounded-xl aspect-video md:aspect-auto flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-red-500/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-slate-500 text-sm">Essential Homeowner Guide</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">More Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter(post => !post.featured).map((post, idx) => (
              <article 
                key={idx}
                className="bg-slate-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-slate-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      post.category === 'Guide' ? 'bg-red-500/20 text-red-400' :
                      post.category === 'FORTIFIED' ? 'bg-green-500/20 text-green-400' :
                      post.category === 'Insurance' ? 'bg-blue-500/20 text-blue-400' :
                      post.category === 'Materials' ? 'bg-purple-500/20 text-purple-400' :
                      post.category === 'Maintenance' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-500 text-sm mb-2">{post.date}</p>
                  <h2 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors">
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Note */}
          <div className="mt-12 text-center">
            <p className="text-slate-500">
              Full articles coming soon. Have a question? <Link href="/contact" className="text-blue-400 hover:underline">Contact us</Link> or check our <Link href="/faq" className="text-blue-400 hover:underline">FAQ</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have Roofing Questions?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              We&apos;re happy to answer your questions. Schedule a free consultation or give us a call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+19194758841"
                className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Call (919) 475-8841
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
