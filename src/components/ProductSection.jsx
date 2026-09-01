import { useState } from 'react'
import Placeholder from './Placeholder'
import { useCart } from '../context/CartContext'

function AddToCartButton({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    addItem(product, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`mt-3 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white transition ${
        added ? 'bg-[#2f8a30]' : 'bg-[#3CA43C] hover:bg-[#345f2e]'
      }`}
    >
      {added ? 'Added!' : 'Add to cart'}
    </button>
  )
}

export default function ProductSection({ title, products, id }) {
  return (
    <section
      id={id}
      className="mx-auto max-w-[1280px] border-t border-black/10 px-5 py-10 lg:px-10"
    >
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-[#1a1a17] sm:text-[28px]">{title}</h2>
        <a
          href="#"
          className="text-xs font-semibold uppercase tracking-wide text-[#3c6e35] hover:underline"
        >
          Shop collection
        </a>
      </div>

      <div className="grid grid-cols-1 border-b border-black/10 sm:grid-cols-3">
        {products.map((p, i) => (
          <div
            key={p.name}
            className={`flex items-start gap-4 border-black/10 p-6 ${
              i % 3 !== 2 ? 'sm:border-r' : ''
            } ${i !== 0 ? 'border-t' : ''} ${i > 0 && i < 3 ? 'sm:border-t-0' : ''}`}
          >
            {p.image ? (
              <img
                src={p.image}
                alt={p.name}
                className="aspect-square w-20 shrink-0 rounded-sm object-cover sm:w-24"
              />
            ) : (
              <Placeholder
                palette={p.palette}
                ratio="aspect-square"
                className="w-20 shrink-0 rounded-sm sm:w-24"
              />
            )}
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold leading-snug text-[#1a1a17]">{p.name}</p>
              <p className="mt-1.5 text-sm font-semibold text-[#1a1a17]">${p.price}</p>
              {p.soldOut ? (
                <button
                  disabled
                  className="mt-3  bg-[#a9c7a0] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  Sold out
                </button>
              ) : (
                <AddToCartButton product={p} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
