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
        <p className="text-center text-slate-500 text-sm mb-4">Trusted & Certified By Industry Leaders</p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((badge) => (
            <div key={badge.name} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-slate-800 font-semibold text-sm">{badge.name}</div>
                <div className="text-slate-500 text-xs">{badge.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
