import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path
        d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-9 0 1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
      <path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8z" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
    </svg>
  )
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, totalQty, subtotal } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-[90] bg-black/50 transition-opacity ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        role="dialog"
        aria-label="Cart"
        className={`fixed right-0 top-0 z-[95] flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <h2 className="text-lg font-bold text-[#1a1a17]">
            Your Cart {totalQty > 0 && <span className="text-[#9a988e]">({totalQty})</span>}
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="grid h-8 w-8 place-items-center rounded-full text-[#9a988e] hover:bg-black/5 hover:text-[#1a1a17]"
          >
            <CloseIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <BagIcon className="text-[#d8d6cc]" />
            <p className="text-sm font-semibold text-[#1a1a17]">Your cart is empty</p>
            <p className="text-xs text-[#9a988e]">Add something you like to get started.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 rounded-md bg-[#3CA43C] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-[#2f8a30]"
            >
              Browse the Shop
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div key={item.slug} className="flex items-start gap-3">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-md bg-[#f2f1ec] p-2">
                      <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <Link
                        to={`/shop/${item.slug}`}
                        onClick={closeCart}
                        className="line-clamp-2 text-xs font-bold uppercase tracking-wide text-[#1a1a17] hover:text-[#3c6e35]"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm font-extrabold text-[#1a1a17]">${item.price}</p>

                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center rounded-md border border-black/15">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => updateQty(item.slug, item.qty - 1)}
                            className="grid h-7 w-7 place-items-center text-[#4a4a43] hover:bg-black/5"
                          >
                            <MinusIcon />
                          </button>
                          <span className="w-7 text-center text-xs font-semibold text-[#1a1a17]">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => updateQty(item.slug, item.qty + 1)}
                            className="grid h-7 w-7 place-items-center text-[#4a4a43] hover:bg-black/5"
                          >
                            <PlusIcon />
                          </button>
                        </div>
                        <button
                          type="button"
                          aria-label="Remove item"
                          onClick={() => removeItem(item.slug)}
                          className="text-[#9a988e] hover:text-red-500"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-black/10 px-5 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-[#4a4a43]">Subtotal</span>
                <span className="text-lg font-extrabold text-[#1a1a17]">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mt-1 text-xs text-[#9a988e]">Shipping and taxes calculated at checkout.</p>

              <Link
                to="/cart"
                onClick={closeCart}
                className="mt-4 block w-full rounded-md bg-[#3CA43C] px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2f8a30]"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full rounded-md border border-black/15 px-6 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-[#1a1a17] transition hover:bg-black/5"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
