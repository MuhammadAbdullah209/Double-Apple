import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { slugify } from '../data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'double-apple-cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore storage errors (private browsing, quota, etc.)
    }
  }, [items])

  const addItem = (product, qty = 1) => {
    const slug = slugify(product.name)
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug)
      if (existing) {
        return prev.map((i) => (i.slug === slug ? { ...i, qty: i.qty + qty } : i))
      }
      return [
        ...prev,
        {
          slug,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          qty,
          protection: false,
        },
      ]
    })
  }

  const removeItem = (slug) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug))
  }

  const updateQty = (slug, qty) => {
    if (qty < 1) {
      removeItem(slug)
      return
    }
    setItems((prev) => prev.map((i) => (i.slug === slug ? { ...i, qty } : i)))
  }

  const toggleProtection = (slug) => {
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, protection: !i.protection } : i))
    )
  }

  const clearCart = () => setItems([])

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + parseFloat(i.price) * i.qty, 0),
    [items]
  )
  const protectionTotal = useMemo(
    () => items.reduce((sum, i) => sum + (i.protection ? 1 : 0), 0),
    [items]
  )

  const value = {
    items,
    addItem,
    removeItem,
    updateQty,
    toggleProtection,
    clearCart,
    count,
    subtotal,
    protectionTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
