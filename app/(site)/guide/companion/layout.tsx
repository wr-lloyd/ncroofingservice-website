// The Pocket Companion is one canonical printable document for the whole
// Honest Roof Guide. On-screen it keeps site chrome (nav, footer) so people
// can wander. Printed (or "Save as PDF") it strips the chrome and renders
// as a clean, paginated, marked-up-able document.
//
// Same print-CSS approach as /guide/downloads, but with stronger page-break
// control so the companion paginates cleanly into named sections.

export default function CompanionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`
        @media print {
          body { background: #fff !important; }
          nav,
          footer,
          [data-chrome="hide-for-print"],
          .fixed { display: none !important; }

          .companion-shell { padding: 0 !important; background: #fff !important; }
          .companion-doc {
            box-shadow: none !important;
            border: none !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .companion-doc h1,
          .companion-doc h2,
          .companion-doc h3,
          .companion-doc h4 { color: #000 !important; }
          .companion-doc a { color: #000 !important; text-decoration: none !important; }
          .companion-doc .print-hide { display: none !important; }

          /* Each top-level section starts on a fresh page. */
          .companion-section { break-before: page; page-break-before: always; }
          .companion-section.no-break { break-before: auto; page-break-before: auto; }

          /* Avoid awkward orphans inside checklists and definition rows. */
          .companion-doc li,
          .companion-doc .row { break-inside: avoid; page-break-inside: avoid; }

          @page { margin: 0.6in; size: letter; }
        }

        /* Screen-only: give the document a paper-like feel. */
        @media screen {
          .companion-doc {
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          }
        }
      `}</style>
      <div className="companion-shell bg-slate-100 min-h-screen py-8 sm:py-12">
        {children}
      </div>
    </>
  )
}
