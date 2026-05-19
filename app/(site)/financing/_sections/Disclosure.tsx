/**
 * Compliance footnote. When you publish APR examples and lender names,
 * disclosing that those are illustrative and not an offer of credit is
 * a legal must — and it doubles as a trust signal.
 */
export default function Disclosure() {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
          Disclosure
        </h2>
        <div className="text-xs text-slate-500 leading-relaxed space-y-3">
          <p>
            Financing for residential and commercial roofing projects is provided by{' '}
            <strong className="text-slate-700">Service Finance Company, LLC</strong> (a
            nationally licensed sales finance company and FHA Title I lender) and through{' '}
            <strong className="text-slate-700">Enhancify&apos;s</strong> network of
            independent lenders. NC Roofing Service and Repair, LLC is not a lender and
            does not make credit decisions.
          </p>
          <p>
            All credit decisions, interest rates, terms, fees, and approvals are
            determined solely by the lender based on your credit profile, loan amount,
            and project scope. Example payments shown on this page (including the
            calculator, scenarios, and insurance-bridge tool) are illustrative only and
            are not an offer to lend. Your actual terms may differ.
          </p>
          <p>
            Soft credit checks performed during prequalification do not affect your
            credit score. A hard credit inquiry will be performed only after you formally
            accept a specific loan offer. Promotional financing offers (including 0% APR
            same-as-cash plans) are subject to lender approval and may carry deferred
            interest if the balance is not paid in full within the promotional period.
          </p>
        </div>
      </div>
    </section>
  )
}
