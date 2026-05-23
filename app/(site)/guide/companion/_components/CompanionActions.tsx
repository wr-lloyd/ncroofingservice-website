'use client'

/**
 * Print + back-to-guide actions for the Pocket Companion. Shown at the top
 * of the document on-screen, hidden via .print-hide when the document
 * actually prints.
 */
export default function CompanionActions() {
  return (
    <div className="print-hide flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b border-slate-200">
      <a
        href="/guide"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-red transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to the Guide
      </a>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white text-[13px] font-semibold px-5 py-2.5 rounded-[2px] transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        Print or save as PDF
      </button>
    </div>
  )
}
