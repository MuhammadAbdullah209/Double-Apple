import { createContext, useContext, useCallback, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import * as wishlistApi from '../api/wishlist'

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const { isAuthenticated } = useAuth()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  const refresh = useCallback(() => {
    if (!isAuthenticated) {
      setItems([])
      return
    }
    setLoading(true)
    wishlistApi
      .getWishlist()
      .then((data) => setItems(data.products || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [isAuthenticated])

  useEffect(() => {
    refresh()
  }, [refresh])

  const isWishlisted = (productId) => items.some((p) => p._id === productId)

  const toggleWishlist = async (product) => {
    const id = product._id
    if (isWishlisted(id)) {
      setItems((prev) => prev.filter((p) => p._id !== id))
      try {
        await wishlistApi.removeFromWishlist(id)
      } catch {
        refresh()
      }
    } else {
      setItems((prev) => [product, ...prev])
      try {
        await wishlistApi.addToWishlist(id)
      } catch {
        refresh()
      }
    }
  }

  const value = { items, loading, isWishlisted, toggleWishlist, refresh }

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within a WishlistProvider')
  return ctx
}
