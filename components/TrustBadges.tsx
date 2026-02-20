export default function TrustBadges() {
  const badges = [
    { name: 'GAF Certified', description: 'Factory-Certified Installer' },
    { name: 'Owens Corning', description: 'Certified Contractor' },
    { name: 'CertainTeed', description: 'Credentialed Installer' },
    { name: 'FORTIFIED', description: 'IBHS Certified' },
    { name: 'BBB A+ Rated', description: 'Accredited Since 2023' },
  ]

  return (
    <div className="bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-slate-500 text-sm mb-6">Trusted & Certified By Industry Leaders</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {badges.map((badge) => (
            <div key={badge.name} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center">
                <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-brand-black font-semibold text-sm">{badge.name}</div>
                <div className="text-brand-gray text-xs">{badge.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
