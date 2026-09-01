import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import AgeVerificationModal from './AgeVerificationModal'
import CartDrawer from './CartDrawer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#1a1a17]">
      <AgeVerificationModal />
      <Header />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}
