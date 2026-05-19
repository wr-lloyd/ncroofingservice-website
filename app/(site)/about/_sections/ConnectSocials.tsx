import SocialLinks from '@/components/SocialLinks'

export default function ConnectSocials() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Follow Our Work</h2>
          <p className="text-slate-600 mb-8">
            See our latest projects, get roofing tips, and stay updated on what&apos;s happening at
            NC Roofing Service. Follow us on social media!
          </p>
          <SocialLinks size="lg" variant="filled" className="justify-center" />
        </div>
      </div>
    </section>
  )
}
