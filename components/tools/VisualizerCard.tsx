export default function VisualizerCard() {
  const visualizers = [
    {
      name: 'GAF Virtual Home Remodeler',
      description: 'Try different shingle colors and styles on a virtual home',
      logo: 'GAF',
      url: 'https://www.gaf.com/en-us/plan-design/design-your-roof',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'CertainTeed ColorView',
      description: 'Visualize CertainTeed shingles on your home style',
      logo: 'CT',
      url: 'https://www.certainteed.com/colorview/',
      color: 'from-green-600 to-green-700',
    },
    {
      name: 'Owens Corning Design EyeQ®',
      description: 'See Owens Corning shingles in different settings',
      logo: 'OC',
      url: 'https://www.owenscorning.com/en-us/roofing/widgets/designeyeq',
      color: 'from-pink-600 to-pink-700',
    },
  ]

  return (
    <div className="bg-slate-900/50 rounded-2xl border border-white/5 p-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Roof Visualizer</h3>
          <p className="text-slate-400 text-sm">Try colors and styles before you decide</p>
        </div>
      </div>

      <p className="text-slate-400 mb-6">
        Use these manufacturer tools to see how different shingles would look on a home similar to yours.
      </p>

      <div className="space-y-3">
        {visualizers.map((viz) => (
          <a
            key={viz.name}
            href={viz.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-slate-800/50 hover:bg-slate-800 border border-white/5 hover:border-purple-500/30 rounded-xl transition-all group"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${viz.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <span className="text-white font-bold text-sm">{viz.logo}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">{viz.name}</h4>
              <p className="text-slate-500 text-sm truncate">{viz.description}</p>
            </div>
            <svg className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>

      <p className="text-slate-500 text-xs text-center mt-4">
        These are official manufacturer tools. We&apos;re certified to install all three brands.
      </p>
    </div>
  )
}
