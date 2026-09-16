import { Outlet } from 'react-router-dom'
import AnnouncementBar from './AnnouncementBar'
import Header from './Header'
import Footer from './Footer'
import FooterDisclaimers from './FooterDisclaimers'
import AgeVerificationModal from './AgeVerificationModal'
import CartDrawer from './CartDrawer'
import TabAttentionGrabber from './TabAttentionGrabber'
import RecentPurchasePopup from './RecentPurchasePopup'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#1a1a17]">
      <TabAttentionGrabber />
      <AgeVerificationModal />
      <AnnouncementBar />
      <Header />
      <Outlet />
      <Footer />
      <FooterDisclaimers />
      <CartDrawer />
      <RecentPurchasePopup />
    </div>
  )
}
