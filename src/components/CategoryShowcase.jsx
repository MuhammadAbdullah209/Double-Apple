import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '../api/products'
import { CATEGORY_REAL_NAME } from '../data/categories'

// A homepage strip for one category — same idea as showing off a curated
// aisle in-store. Pulls real synced products for that category and hides
// itself entirely if there aren't any yet, rather than showing an empty
// section.
export default function CategoryShowcase({ category, limit = 6 }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getProducts({ category: CATEGORY_REAL_NAME[category], limit })
      .then((data) => {
        if (!cancelled) setProducts(data.products || [])
      })
      .catch(() => {
        if (!cancelled) setProducts([])
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [category, limit])

  if (!loading && products.length === 0) return null

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-7 lg:px-10">
      <div className="mb-4 flex items-end justify-between border-b border-black/10 pb-2">
        <h2 className="text-[15px] font-bold text-[#1a1a17] sm:text-lg">{category}</h2>
        <a
          href={`/shop?category=${encodeURIComponent(category)}`}
          className="text-xs font-semibold uppercase tracking-wide text-[#3c6e35] hover:underline"
        >
          View all
        </a>
      </div>

      {loading ? (
        <p className="py-6 text-center text-sm text-[#7a7a72]">Loading&hellip;</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      )}
    </section>
  )
}
