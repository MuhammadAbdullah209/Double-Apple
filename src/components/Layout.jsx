import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FooterDisclaimers from './FooterDisclaimers'
import AgeVerificationModal from './AgeVerificationModal'
import CartDrawer from './CartDrawer'
import TabAttentionGrabber from './TabAttentionGrabber'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#1a1a17]">
      <TabAttentionGrabber />
      <AgeVerificationModal />
      <Header />
      <Outlet />
      <Footer />
      <FooterDisclaimers />
      <CartDrawer />
    </div>
  )
}
