// The downloads route still lives under (site) so the on-screen reader
// keeps site chrome (nav, footer) and can wander back into the guide.
// When a user prints (or "Save as PDF"), this print stylesheet hides the
// chrome so the printed page is a clean document.
//
// We target the chrome by tag (nav, footer) and by Tailwind's `fixed`
// utility (chat widget, mobile CTA). The downloads page itself opts in
// to print-friendly styles via the `.guide-print` class on its <article>.

export default function GuideDownloadsLayout({
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
          .guide-print-shell { padding: 0 !important; background: #fff !important; }
          .guide-print { box-shadow: none !important; border: none !important; max-width: 100% !important; }
          .guide-print h1, .guide-print h2, .guide-print h3 { color: #000 !important; }
          .guide-print a { color: #000 !important; text-decoration: none !important; }
          .guide-print .print-hide { display: none !important; }
          @page { margin: 0.6in; }
        }
      `}</style>
      <div className="guide-print-shell bg-slate-100 min-h-screen py-10 sm:py-16">
        {children}
      </div>
    </>
  )
}
