import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ALL_PRODUCTS, findProductBySlug, slugify } from '../data/products'
import { StarIcon, CartIcon, ChevronDownIcon } from '../components/Icons'
import ProductCard from '../components/ProductCard'
import VisitUs from '../components/VisitUs'
import { useCart } from '../context/CartContext'

const CATEGORY_BLURB = {
  Kratom: 'Part of our Kratom lineup — Maeng Da, Red, Green, and White strains, lab-tested and ready to ship.',
  'Refill Pods': 'Part of our Refill Pods lineup — Lost Mary, Foger, and Fogger flavors, always in stock at the shop.',
}

const PRODUCT_FAQS = [
  {
    q: 'Do you offer shipping?',
    a: 'We currently focus on in-store pickup so our team can help you find exactly what you need. Call the store to check availability.',
  },
  {
    q: 'When can I pick up my order?',
    a: 'Most orders are ready the same day during store hours. We’ll reach out if an item needs to be transferred from our second location.',
  },
  {
    q: 'Can I exchange or return this item?',
    a: 'If you’d like to exchange this item for something else, bring it back to the store with your receipt and our team will help you out. Please get in touch before returning anything so we can confirm it’s still eligible.',
  },
]

const REVIEWS = [
  {
    name: 'Jordan M.',
    date: 'Sep 12, 2026',
    rating: 5,
    text: 'Great quality and fast pickup. Staff walked me through everything I needed to know.',
  },
  {
    name: 'Casey R.',
    date: 'Aug 28, 2026',
    rating: 5,
    text: 'This is my go-to now. Consistent quality every time I visit the shop.',
  },
  {
    name: 'Alex P.',
    date: 'Aug 14, 2026',
    rating: 5,
    text: 'Exactly what I was looking for. Will definitely order again.',
  },
]

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

function PlusIconSmall() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.8 8.8 0 0 1-4-1L3 20l1-5.5A8.38 8.38 0 0 1 3 11.5 8.5 8.5 0 1 1 21 11.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HeartOutline() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path
        d="M12 20.5s-7.5-4.6-9.8-9.2C.6 7.7 2.6 4.5 6 4.5c2 0 3.6 1.1 4.5 2.6.9-1.5 2.5-2.6 4.5-2.6 3.4 0 5.4 3.2 3.8 6.8-2.3 4.6-9.8 9.2-9.8 9.2z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.8L15.8 6.2M8.2 13.2l7.6 4.6" strokeLinecap="round" />
    </svg>
  )
}

const TABS = ['Reviews', 'Discussion', 'FAQs']

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = findProductBySlug(slug)
  const [qty, setQty] = useState(1)
  const [showFullDesc, setShowFullDesc] = useState(false)
  const [activeTab, setActiveTab] = useState('Reviews')
  const [openFaq, setOpenFaq] = useState(2)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <section className="mx-auto max-w-[1280px] px-5 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#1a1a17]">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm font-semibold text-[#3c6e35] hover:underline">
          &larr; Back to Shop
        </Link>
      </section>
    )
  }

  const subtotal = (parseFloat(product.price) * qty).toFixed(2)
  const related = ALL_PRODUCTS.filter((p) => p.name !== product.name).slice(0, 6)
  const blurb =
    CATEGORY_BLURB[product.category] ||
    `Part of our ${product.category} lineup at Double Apple Smoke & Vape.`

  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-6 lg:px-10">
        <nav className="flex items-center gap-2 text-xs text-[#7a7a72]">
          <Link to="/" className="hover:text-[#3c6e35]">Home</Link>
          <span>&rsaquo;</span>
          <Link to="/shop" className="hover:text-[#3c6e35]">{product.category}</Link>
          <span>&rsaquo;</span>
          <span className="font-semibold text-[#1a1a17]">{product.name.toUpperCase()}</span>
        </nav>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-[100px_1fr]">
              <div className="order-2 flex gap-3 sm:order-1 sm:flex-col">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    type="button"
                    className={`grid h-[76px] w-[76px] shrink-0 place-items-center rounded-md border-2 bg-[#f2f1ec] p-2 ${
                      i === 0 ? 'border-[#3CA43C]' : 'border-transparent'
                    }`}
                  >
                    <img src={product.image} alt="" className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>

              <div className="order-1 flex aspect-square items-center justify-center rounded-xl bg-[#f2f1ec] p-10 sm:order-2">
                <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
              </div>
            </div>

            <div className="mt-10 border-t border-black/10 pt-8">
              <div className="flex gap-8 border-b border-black/10">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-semibold ${
                      activeTab === tab
                        ? 'border-b-2 border-[#3CA43C] text-[#1a1a17]'
                        : 'text-[#9a988e]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'Reviews' && (
                <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-[220px_1fr]">
                  <div>
                    <div className="flex items-center gap-3">
                      <StarIcon className="h-8 w-8 text-[#3CA43C]" />
                      <div>
                        <p className="text-3xl font-extrabold text-[#1a1a17]">5.0/5.0</p>
                        <p className="text-xs text-[#7a7a72]">
                          {REVIEWS.length} ratings &bull; {REVIEWS.length} reviews
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-2">
                      {[5, 4, 3, 2, 1].map((star) => {
                        const count = REVIEWS.filter((r) => r.rating === star).length
                        const pct = Math.round((count / REVIEWS.length) * 100)
                        return (
                          <div key={star} className="flex items-center gap-2 text-xs text-[#4a4a43]">
                            <span className="flex w-8 items-center gap-0.5">
                              {star} <StarIcon className="h-3 w-3 text-[#3CA43C]" />
                            </span>
                            <div className="h-1.5 flex-1 rounded-full bg-black/10">
                              <div
                                className="h-1.5 rounded-full bg-[#3CA43C]"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="w-6 text-right">{count}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#1a1a17]">Sort by</span>
                        <select className="rounded-md border border-black/15 px-3 py-1.5 text-sm text-[#1a1a17] focus:outline-none">
                          <option>Latest</option>
                          <option>Highest rated</option>
                        </select>
                      </div>
                      <button
                        type="button"
                        className="rounded-md border border-[#3CA43C] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#3CA43C] hover:bg-[#eef4e9]"
                      >
                        Write Review
                      </button>
                    </div>

                    <div className="flex flex-col gap-6">
                      {REVIEWS.map((r) => (
                        <div key={r.name} className="border-b border-black/10 pb-6">
                          <div className="flex items-center gap-3">
                            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#3c6e35] text-xs font-bold text-white">
                              {r.name[0]}
                            </span>
                            <div>
                              <p className="text-sm font-bold text-[#1a1a17]">{r.name}</p>
                              <p className="text-xs text-[#9a988e]">{r.date}</p>
                            </div>
                          </div>
                          <div className="mt-2 flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`h-3.5 w-3.5 ${
                                  i < r.rating ? 'text-[#3CA43C]' : 'text-black/10'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-[#4a4a43]">{r.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Discussion' && (
                <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-[#7a7a72]">
                  The statements made regarding these products have not been evaluated by the Food
                  and Drug Administration. The efficacy of these products has not been confirmed by
                  FDA-approved research. These products are not intended to diagnose, treat, cure,
                  or prevent any disease. All information presented here is not meant as a
                  substitute for or alternative to information from health care practitioners.
                  Please consult your health care professional about potential interactions or
                  other possible complications before using any product. The Federal Food, Drug,
                  and Cosmetic Act require this notice.
                </p>
              )}
              {activeTab === 'FAQs' && (
                <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3">
                  {PRODUCT_FAQS.map((item, i) => {
                    const isOpen = openFaq === i
                    return (
                      <div
                        key={item.q}
                        className="overflow-hidden rounded-xl border border-black/10 bg-white"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? -1 : i)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        >
                          <span className="text-sm font-semibold text-[#1a1a17]">{item.q}</span>
                          <ChevronDownIcon
                            className={`h-4 w-4 shrink-0 text-[#3CA43C] transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <p className="px-5 pb-4 text-sm leading-relaxed text-[#7a7a72]">
                            {item.a}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-[#1a1a17]">
              {product.name}
            </h1>

            <div className="mt-2 flex items-center gap-1.5 text-sm text-[#4a4a43]">
              <StarIcon className="h-4 w-4 text-[#3CA43C]" />
              <span className="font-semibold text-[#1a1a17]">5.0/5.0</span>
              <span className="text-[#c9c8c0]">|</span>
              <span>{REVIEWS.length} Reviews</span>
              <span className="text-[#c9c8c0]">|</span>
              <span>300 sold</span>
            </div>

            {!product.soldOut && (
              <span className="mt-3 inline-block rounded-full bg-[#eef4e9] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#3c6e35]">
                Best Seller
              </span>
            )}

            <p className="mt-4 text-3xl font-extrabold text-[#1a1a17]">${product.price}</p>

            <p className="mt-4 text-sm leading-relaxed text-[#4a4a43]">
              {showFullDesc
                ? `${blurb} Every batch is lab-tested for quality and freshness before it reaches the shelf. Stop by our Austin location or grab it in the shop for pickup.`
                : blurb}{' '}
              <button
                type="button"
                onClick={() => setShowFullDesc((v) => !v)}
                className="font-semibold text-[#3c6e35] hover:underline"
              >
                {showFullDesc ? 'View Less' : 'View More'}
              </button>
            </p>

            <p className="mt-6 text-sm font-bold text-[#1a1a17]">Availability</p>
            <div className="mt-2 flex items-center gap-2 rounded-md border border-black/10 px-4 py-3">
              <span
                className={`h-2.5 w-2.5 rounded-full ${product.soldOut ? 'bg-red-500' : 'bg-[#3CA43C]'}`}
              />
              <div>
                <p className="text-sm font-semibold text-[#1a1a17]">
                  {product.soldOut ? 'Currently sold out' : 'In stock — ready for pickup'}
                </p>
                <p className="text-xs text-[#7a7a72]">
                  Pickup at 11220 N Lamar Blvd B202, Austin, TX
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm font-bold text-[#1a1a17]">Quantity</p>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center rounded-md border border-black/15">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-9 w-9 place-items-center text-[#4a4a43] hover:bg-black/5"
                >
                  <MinusIcon />
                </button>
                <span className="w-10 text-center text-sm font-semibold text-[#1a1a17]">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="grid h-9 w-9 place-items-center text-[#4a4a43] hover:bg-black/5"
                >
                  <PlusIconSmall />
                </button>
              </div>
            </div>

            <p className="mt-5 text-sm text-[#4a4a43]">
              Subtotal <span className="ml-2 text-xl font-extrabold text-[#1a1a17]">${subtotal}</span>
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <button
                type="button"
                disabled={product.soldOut}
                onClick={() => {
                  addItem(product, qty)
                  navigate('/cart')
                }}
                className="rounded-md bg-[#3CA43C] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2f8a30] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Buy Now
              </button>
              <button
                type="button"
                disabled={product.soldOut}
                onClick={() => {
                  addItem(product, qty)
                  setAdded(true)
                  setTimeout(() => setAdded(false), 1500)
                }}
                className="flex items-center justify-center gap-2 rounded-md border border-[#3CA43C] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#3CA43C] transition hover:bg-[#eef4e9] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
                <CartIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-5 text-sm text-[#4a4a43]">
              <button type="button" className="flex items-center gap-1.5 hover:text-[#3c6e35]">
                <ChatIcon /> Chat
              </button>
              <span className="h-4 w-px bg-black/10" />
              <button type="button" className="flex items-center gap-1.5 hover:text-[#3c6e35]">
                <HeartOutline /> Wishlist
              </button>
              <span className="h-4 w-px bg-black/10" />
              <button type="button" className="flex items-center gap-1.5 hover:text-[#3c6e35]">
                <ShareIcon /> Share
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] border-t border-black/10 px-5 py-10 lg:px-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1a1a17]">Related Products</h2>
          <Link to="/shop" className="text-sm font-semibold text-[#3c6e35] hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {related.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </section>

      <VisitUs />
    </>
  )
}
