import Link from 'next/link'

export default function InsuranceHelper() {
  const steps = [
    {
      number: 1,
      title: 'Document the Damage',
      description: 'Take photos and videos of all visible damage, inside and out.',
    },
    {
      number: 2,
      title: 'File Your Claim',
      description: 'Contact your insurance company to report the damage and get a claim number.',
    },
    {
      number: 3,
      title: 'Schedule Inspection',
      description: 'We inspect your roof and prepare documentation for your claim.',
    },
    {
      number: 4,
      title: 'Meet the Adjuster',
      description: 'We can be present when the insurance adjuster visits to ensure nothing is missed.',
    },
    {
      number: 5,
      title: 'Get Your Roof Fixed',
      description: 'Once approved, we complete the repairs or replacement to manufacturer specs.',
    },
  ]

  const checklist = [
    'Date and time of the storm',
    'Wide shots of your entire roof (if safe)',
    'Close-ups of damaged areas',
    'Interior damage (ceiling stains, water marks)',
    'Damaged gutters, siding, or windows',
    'Debris in your yard from the roof',
    'Your policy number and agent contact',
  ]

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-white border-b border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Insurance Claim Helper</h3>
            <p className="text-blue-600 text-sm">We guide you through the process</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* What to Document */}
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            What to Document
          </h4>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <ul className="space-y-2">
              {checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <div className="w-5 h-5 border border-slate-300 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-slate-400 text-xs">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            How the Process Works
          </h4>
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {step.number}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-200 mt-2"></div>
                  )}
                </div>
                <div className="pb-4">
                  <h5 className="text-slate-900 font-medium">{step.title}</h5>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Help */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <h4 className="text-green-700 font-semibold mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            How NC Roofing Service Helps
          </h4>
          <ul className="text-slate-700 text-sm space-y-1">
            <li>• Free damage inspection and documentation</li>
            <li>• We use EagleView imaging for accurate measurements</li>
            <li>• PLRB weather data to verify storm events</li>
            <li>• We meet with your adjuster to advocate for you</li>
            <li>• No upfront costs — we work with your insurance</li>
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule Inspection
          </Link>
          <a
            href="tel:+19194758841"
            className="flex-1 flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-700 py-3 rounded-xl font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (919) 475-8841
          </a>
        </div>
      </div>
    </div>
  )
}
