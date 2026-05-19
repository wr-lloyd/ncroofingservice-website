import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import EmergencyBanner from '@/components/EmergencyBanner'
import ChatWidget from '@/components/ChatWidget'
import MobileCTA from '@/components/MobileCTA'

/**
 * Layout for the main marketing site. Everything inside this route group
 * gets the full site chrome (top banner, navigation, footer, chat widget,
 * mobile CTA bar).
 *
 * Routes that live OUTSIDE this group — currently only `/team/[slug]` — are
 * intentionally chrome-free so they render as standalone dot-cards.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EmergencyBanner />
      <Navigation />
      {children}
      <Footer />
      <ChatWidget />
      <MobileCTA />
    </>
  )
}
