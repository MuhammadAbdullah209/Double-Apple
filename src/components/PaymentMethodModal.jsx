import { useState } from 'react'
import { ChevronDownIcon, PlusIcon } from './Icons'

export function AppleBadge() {
  return (
    <span className="flex h-7 w-14 shrink-0 items-center justify-center gap-1 rounded-md border border-black/10 bg-black">
      <svg viewBox="0 0 24 24" fill="#fff" className="h-3 w-3">
        <path d="M16.4 1c.1 1.1-.3 2.2-1 3-.7.8-1.8 1.5-2.9 1.4-.1-1.1.4-2.2 1-2.9.8-.9 2-1.5 2.9-1.5zM20 17.2c-.5 1.1-.7 1.6-1.4 2.6-.9 1.4-2.2 3.1-3.8 3.1-1.4 0-1.8-.9-3.7-.9-1.9 0-2.4.9-3.7.9-1.6 0-2.8-1.6-3.7-3-2.6-3.9-2.9-8.5-1.3-11 1.1-1.8 2.9-2.9 4.6-2.9 1.7 0 2.8.9 4.2.9 1.4 0 2.2-.9 4.2-.9 1.5 0 3 .8 4.1 2.2-3.6 2-3 7.2.5 9z" />
      </svg>
      <span className="text-[11px] font-bold italic leading-none text-white">Pay</span>
    </span>
  )
}

export function GoogleBadge() {
  return (
    <span className="flex h-7 w-14 shrink-0 items-center justify-center gap-1 rounded-md border border-black/10 bg-white">
      <svg viewBox="0 0 48 48" className="h-3 w-3">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      </svg>
      <span className="text-[11px] font-semibold leading-none text-[#5f6368]">Pay</span>
    </span>
  )
}

export function PayPalBadge() {
  return (
    <span className="flex h-7 w-14 shrink-0 items-center justify-center rounded-md border border-black/10 bg-white">
      <span className="text-[11px] font-black italic leading-none">
        <span className="text-[#003087]">Pay</span>
        <span className="text-[#0070ba]">Pal</span>
      </span>
    </span>
  )
}

export function VisaBadge() {
  return (
    <span className="flex h-7 w-14 shrink-0 items-center justify-center rounded-md border border-black/10 bg-white">
      <span className="text-xs font-black italic leading-none tracking-tight text-[#1434cb]">VISA</span>
    </span>
  )
}

export function MastercardBadge() {
  return (
    <span className="flex h-7 w-14 shrink-0 items-center justify-center rounded-md border border-black/10 bg-white">
      <svg viewBox="0 0 36 22" className="h-4 w-6">
        <circle cx="13" cy="11" r="10" fill="#EB001B" />
        <circle cx="23" cy="11" r="10" fill="#F79E1B" />
        <path d="M18 3.5a10 10 0 0 1 0 15 10 10 0 0 1 0-15z" fill="#FF5F00" />
      </svg>
    </span>
  )
}

function ShieldCheckIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path
        d="M12 3l7 3v5c0 4.6-2.98 8.6-7 10-4.02-1.4-7-5.4-7-10V6l7-3z"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const WALLETS = [
  { id: 'apple-pay', label: 'Apple Pay', Badge: AppleBadge },
  { id: 'google-pay', label: 'Google Pay', Badge: GoogleBadge },
  { id: 'paypal', label: 'PayPal', Badge: PayPalBadge },
]

const CARD_BRANDS = [
  { id: 'visa', label: 'Visa', Badge: VisaBadge },
  { id: 'mastercard', label: 'Master Cards', Badge: MastercardBadge },
]

function randomLast4() {
  return String(Math.floor(1000 + Math.random() * 9000))
}

export default function PaymentMethodModal({ open, onClose, onConfirm }) {
  const [expandedId, setExpandedId] = useState('visa')
  const [cardsByBrand, setCardsByBrand] = useState({
    visa: [
      { id: 'visa-6576', last4: '6576' },
      { id: 'visa-6432', last4: '6432' },
    ],
    mastercard: [],
  })
  const [selectedId, setSelectedId] = useState('visa-6432')

  if (!open) return null

  const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id))

  const addCard = (brandId) => {
    const card = { id: `${brandId}-${Date.now()}`, last4: randomLast4() }
    setCardsByBrand((prev) => ({ ...prev, [brandId]: [...prev[brandId], card] }))
    setSelectedId(card.id)
  }

  const handleConfirm = () => {
    const wallet = WALLETS.find((w) => w.id === selectedId)
    if (wallet) {
      onConfirm({ id: wallet.id, label: wallet.label, Badge: wallet.Badge })
      onClose()
      return
    }
    for (const brand of CARD_BRANDS) {
      const card = cardsByBrand[brand.id].find((c) => c.id === selectedId)
      if (card) {
        onConfirm({
          id: card.id,
          label: `${brand.label} •••• ${card.last4}`,
          Badge: brand.Badge,
        })
        onClose()
        return
      }
    }
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1a1a17]">Payment Method</h2>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full text-[#9a988e] hover:bg-black/5 hover:text-[#1a1a17]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="mt-4 border-b border-black/10" />

        <p className="mt-6 text-sm font-bold text-[#1a1a17]">Digital Wallet</p>
        <div className="mt-3 flex flex-col gap-3">
          {WALLETS.map(({ id, label, Badge }) => {
            const isOpen = expandedId === id
            return (
              <div key={id} className="overflow-hidden rounded-md border border-black/15">
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3"
                >
                  <span className="flex items-center gap-3">
                    <Badge />
                    <span className="text-sm font-semibold text-[#1a1a17]">{label}</span>
                  </span>
                  <ChevronDownIcon
                    className={`h-4 w-4 shrink-0 text-[#9a988e] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <label className="flex items-center justify-between gap-3 border-t border-black/10 px-4 py-3">
                    <span className="text-sm text-[#4a4a43]">Use {label} for this order</span>
                    <input
                      type="radio"
                      name="payment-method"
                      checked={selectedId === id}
                      onChange={() => setSelectedId(id)}
                      className="h-4 w-4 shrink-0 accent-[#3CA43C]"
                    />
                  </label>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-6 border-b border-black/10" />

        <p className="mt-6 text-sm font-bold text-[#1a1a17]">Credit Card</p>
        <div className="mt-3 flex flex-col gap-3">
          {CARD_BRANDS.map(({ id, label, Badge }) => {
            const isOpen = expandedId === id
            const cards = cardsByBrand[id]
            return (
              <div key={id} className="overflow-hidden rounded-md border border-black/15">
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-3 ${
                    isOpen ? 'bg-[#f7f6f2]' : ''
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Badge />
                    <span className="text-sm font-semibold text-[#1a1a17]">{label}</span>
                  </span>
                  <ChevronDownIcon
                    className={`h-4 w-4 shrink-0 text-[#9a988e] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-black/10 bg-[#f7f6f2] p-3">
                    {cards.length === 0 && (
                      <p className="px-1 py-2 text-xs text-[#9a988e]">No saved cards yet.</p>
                    )}
                    <div className="flex flex-col gap-2">
                      {cards.map((card) => {
                        const isSelected = selectedId === card.id
                        return (
                          <label
                            key={card.id}
                            className={`flex items-center justify-between rounded-md border px-4 py-3 ${
                              isSelected
                                ? 'border-[#3CA43C] bg-[#eef4e9]'
                                : 'border-black/15 bg-white'
                            }`}
                          >
                            <span className="text-sm tracking-widest text-[#4a4a43]">
                              &bull;&bull;&bull;&bull;{card.last4}
                            </span>
                            <input
                              type="radio"
                              name="payment-method"
                              checked={isSelected}
                              onChange={() => setSelectedId(card.id)}
                              className="h-4 w-4 shrink-0 accent-[#3CA43C]"
                            />
                          </label>
                        )
                      })}
                    </div>
                    <button
                      type="button"
                      onClick={() => addCard(id)}
                      className="mt-3 flex w-full items-center justify-center gap-1.5 py-1 text-sm font-semibold text-[#3CA43C] hover:underline"
                    >
                      <PlusIcon className="h-3.5 w-3.5" />
                      Add New card
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <button
          type="button"
          disabled={!selectedId}
          onClick={handleConfirm}
          className="mt-6 w-full rounded-md bg-[#3CA43C] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2f8a30] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Choose Payment Method
        </button>

        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#7a7a72]">
          <ShieldCheckIcon className="h-4 w-4 text-[#3CA43C]" />
          All payment methods are well protected
        </p>
      </div>
    </div>
  )
}
