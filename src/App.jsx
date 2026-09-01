import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CreateAccount from './pages/CreateAccount'
import SignIn from './pages/SignIn'
import VerifyOtp from './pages/VerifyOtp'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-account/verify" element={<VerifyOtp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App
