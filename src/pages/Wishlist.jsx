import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useWishlist } from '../context/WishlistContext'
import ProductCard from '../components/ProductCard'

export default function Wishlist() {
  const { isAuthenticated, loading: authLoading } = useAuth()
  const { items, loading } = useWishlist()

  return (
    <>
      <div className="w-full border-b border-black/10 bg-white px-6 py-3.5 sm:px-8 lg:px-10">
        <nav className="flex items-center gap-2 text-[13px] text-[#666]">
          <Link to="/" className="hover:text-[#3c6e35]">
            Home
          </Link>
          <span>/</span>
          <span>Wishlist</span>
        </nav>
      </div>

      <section className="mx-auto max-w-[1280px] px-5 py-10 lg:px-10">
        <h1 className="text-2xl font-bold text-[#1a1a17] sm:text-3xl">My Wishlist</h1>

        {authLoading ? (
          <p className="py-16 text-center text-sm text-[#7a7a72]">Loading&hellip;</p>
        ) : !isAuthenticated ? (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <p className="text-sm text-[#7a7a72]">Sign in to view and save items to your wishlist.</p>
            <Link
              to="/sign-in"
              className="rounded-md bg-[#3c6e35] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#345f2e]"
            >
              Sign In
            </Link>
          </div>
        ) : loading ? (
          <p className="py-16 text-center text-sm text-[#7a7a72]">Loading your wishlist&hellip;</p>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <p className="text-sm text-[#7a7a72]">
              You haven&rsquo;t saved anything yet — tap the heart on a product to add it here.
            </p>
            <Link
              to="/shop"
              className="rounded-md bg-[#3c6e35] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#345f2e]"
            >
              Browse the Shop
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
