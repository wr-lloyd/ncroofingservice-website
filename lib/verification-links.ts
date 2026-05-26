// Verification links: every credential a homeowner could (and should)
// independently verify a roofer's claim against. Kept short and durable —
// canonical top-level URLs only, because anything we link from a printable
// document needs to survive being typed out by hand months later. If a
// manufacturer changes a finder-tool slug we don't want a 404 in someone's
// printout.
//
// Each entry exposes both `display` (how to write it on paper, e.g.
// "nclbgc.org") and `url` (the clickable href). The Field Guide renders
// the display string in human-readable copy, and the digital version wraps
// it in an <a>. Print stylesheets surface neither URL nor underline noise,
// so the page reads cleanly either way.

export interface VerificationLink {
  /** Short label for the link, e.g. "NC Licensing Board". */
  label: string
  /** What to type on paper, e.g. "nclbgc.org". No protocol. */
  display: string
  /** Full URL with protocol for the clickable version. */
  url: string
  /** One-line explanation of what this verifies. */
  verifies: string
}

export const VERIFY_NC_LICENSE: VerificationLink = {
  label: 'NC Licensing Board',
  display: 'nclbgc.org',
  url: 'https://nclbgc.org',
  verifies:
    'Any North Carolina general contractor required for $30k+ jobs. Search by company name. Status should read Active.',
}

export const VERIFY_GAF: VerificationLink = {
  label: 'GAF Certified Contractor lookup',
  display: 'gaf.com',
  url: 'https://www.gaf.com/en-us/roofing-contractors',
  verifies:
    'A roofer claiming GAF Certified, Master Elite, or Master Select status. Required for GAF\'s longest warranties.',
}

export const VERIFY_CERTAINTEED: VerificationLink = {
  label: 'CertainTeed credentialed installer lookup',
  display: 'certainteed.com',
  url: 'https://www.certainteed.com/find-a-pro/',
  verifies:
    'A roofer claiming CertainTeed Credentialed, SELECT, or SELECT ShingleMaster status. Required for SureStart Plus and extended warranties.',
}

export const VERIFY_OWENS_CORNING: VerificationLink = {
  label: 'Owens Corning Preferred Contractor lookup',
  display: 'owenscorning.com',
  url: 'https://www.owenscorning.com/en-us/roofing/contractor',
  verifies:
    'A roofer claiming Owens Corning Preferred or Platinum Preferred status. Required for extended Owens Corning warranty tiers.',
}

export const VERIFY_FORTIFIED: VerificationLink = {
  label: 'Fortified Home (IBHS)',
  display: 'fortifiedhome.org',
  url: 'https://fortifiedhome.org',
  verifies:
    'A roofer claiming Fortified-trained or Fortified-certified installation. The program is run by the Insurance Institute for Business & Home Safety. Many NC insurers offer premium discounts for Fortified roofs.',
}

export const VERIFY_BBB: VerificationLink = {
  label: 'Better Business Bureau',
  display: 'bbb.org',
  url: 'https://www.bbb.org',
  verifies:
    'A roofer\'s BBB rating and any unresolved complaints. Look for A+ accreditation and a response history on complaints, not the absence of complaints.',
}

/** Ordered list, used by `/guide/pick-a-roofer` to render a single reference
 *  block of "verify everything yourself" links. */
export const ALL_VERIFICATION_LINKS: VerificationLink[] = [
  VERIFY_NC_LICENSE,
  VERIFY_GAF,
  VERIFY_CERTAINTEED,
  VERIFY_OWENS_CORNING,
  VERIFY_FORTIFIED,
  VERIFY_BBB,
]
