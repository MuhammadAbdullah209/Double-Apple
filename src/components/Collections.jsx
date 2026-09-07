import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../api/products'

const CATEGORY_ORDER = [
  'Flower',
  'Vapes',
  'Kratom',
  'Refill Pods',
  'Ash Catcher',
  'Shisha',
  'Disposable Hookah',
  'Coils / Pods',
]

export default function Collections() {
  const navigate = useNavigate()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    Promise.all(
      CATEGORY_ORDER.map((cat) =>
        getProducts({ category: cat, limit: 1 })
          .then((data) => ({ cat, product: data.products?.[0] }))
          .catch(() => ({ cat, product: null }))
      )
    ).then((results) => {
      if (cancelled) return
      const list = results
        .filter((r) => r.product)
        .map(({ cat, product }) => ({
          category: cat,
          image: product.image?.[0]?.url,
        }))
      setItems(list)
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="collections" className="mx-auto max-w-[1280px] px-5 py-7 lg:px-10">
      <div className="mb-2.5 flex items-end justify-between border-b border-black/10 pb-2">
        <h2 className="text-[15px] font-bold text-[#1a1a17] sm:text-lg">Premium collections</h2>
        <a
          href="/shop"
          className="text-xs font-semibold uppercase tracking-wide text-[#3c6e35] hover:underline"
        >
          View all categories
        </a>
      </div>

      {loading ? (
        <p className="py-10 text-center text-sm text-[#7a7a72]">Loading collections&hellip;</p>
      ) : (
        <div className="grid grid-cols-2 divide-x divide-y divide-black/10 border border-black/10 sm:grid-cols-4">
          {items.map((item) => (
            <a
              key={item.category}
              href={`/shop?category=${encodeURIComponent(item.category)}`}
              className="group block p-2"
            >
              <img
                src={item.image}
                alt={item.category}
                className="aspect-[16/10] w-full rounded-sm object-cover"
              />
              <div className="pt-1.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[12px] font-bold text-[#1a1a17]">{item.category}</p>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wide text-[#3c6e35] transition group-hover:underline"
                    onClick={() => navigate(`/shop?category=${encodeURIComponent(item.category)}`)}
                  >
                    Shop
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
