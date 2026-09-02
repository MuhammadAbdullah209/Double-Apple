import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartIcon, StarIcon } from './Icons'
import { getImageForCategory } from '../data/productImages'
import { useCart } from '../context/CartContext'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
      <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path
        d="M12 20.5s-7.5-4.6-9.8-9.2C.6 7.7 2.6 4.5 6 4.5c2 0 3.6 1.1 4.5 2.6.9-1.5 2.5-2.6 4.5-2.6 3.4 0 5.4 3.2 3.8 6.8-2.3 4.6-9.8 9.2-9.8 9.2z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const soldOut = (product.stock ?? 0) <= 0
  const image = getImageForCategory(product.category)
  const hasDiscount = !!product.discountActive

  const handleAddToCart = (e) => {
    e.preventDefault()
    if (soldOut) return
    addItem(product, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <Link
      to={`/shop/${product._id}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm"
    >
      <div className="relative bg-[#f2f1ec]">
        <button
          type="button"
          aria-label="Add to cart"
          disabled={soldOut}
          onClick={handleAddToCart}
          className={`absolute left-5 top-5 z-10 grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40 ${
            added ? 'text-[#3CA43C]' : 'text-[#3c6e35]'
          }`}
        >
          {added ? <CheckIcon /> : <CartIcon className="h-4 w-4" />}
        </button>
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={(e) => e.preventDefault()}
          className="absolute right-5 top-5 z-10 grid h-8 w-8 place-items-center rounded-full bg-white text-[#4a4a43] shadow-sm"
        >
          <HeartIcon />
        </button>
        <div className="flex aspect-square items-center justify-center p-4">
          <img src={image} alt={product.name} className="h-full w-full object-contain rounded-md" />
        </div>
      </div>

      <div className="flex items-center gap-1.5 px-3 pt-2.5">
        <span className="shrink-0 rounded-md bg-[#eef4e9] px-2.5 py-1 text-[11px] font-semibold text-[#3c6e35]">
          {product.category}
        </span>
        <span
          className={`flex-1 rounded-md border px-3 py-1 text-center text-[11px] font-bold uppercase tracking-wide transition ${
            soldOut
              ? 'border-black/10 text-[#9a988e]'
              : 'border-[#3CA43C]/30 text-[#3CA43C] group-hover:bg-[#3CA43C] group-hover:text-white'
          }`}
        >
          {soldOut ? 'Sold Out' : 'Shop Now'}
        </span>
      </div>

      <div className="p-3 pt-2">
        <p className="text-sm font-extrabold uppercase tracking-wide text-[#1a1a17]">
          {product.name}
        </p>
        <p className="mt-1 flex items-center gap-2">
          <span className="text-lg font-extrabold text-[#1a1a17]">
            ${hasDiscount ? product.finalPrice : product.price}
          </span>
          {hasDiscount && (
            <span className="text-sm text-[#9a988e] line-through">${product.price}</span>
          )}
        </p>
        <p className="mt-1 flex items-center gap-1.5 text-[11px] text-[#7a7a72]">
          <StarIcon className="h-3 w-3 text-[#3CA43C]" />
          <span className="font-semibold text-[#1a1a17]">5.0/5.0</span>
          <span>|</span>
          <span>300 sold</span>
        </p>
      </div>
    </Link>
  )
}
