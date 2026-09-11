import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import { VisaIcon, MastercardIcon, DiscoverIcon, AmexIcon } from './PaymentIcons'

const ACCEPT_JS_SRC =
  import.meta.env.VITE_AUTHORIZE_NET_MODE === 'production'
    ? 'https://js.authorize.net/v1/Accept.js'
    : 'https://jstest.authorize.net/v1/Accept.js'

function detectCardBrand(number) {
  const digits = number.replace(/\s+/g, '')
  if (/^4/.test(digits)) return 'visa'
  if (/^(5[1-5]|2(2[2-9]|[3-6]\d|7[01]|720))/.test(digits)) return 'mastercard'
  if (/^3[47]/.test(digits)) return 'amex'
  if (/^(6011|65|64[4-9])/.test(digits)) return 'discover'
  return null
}

function loadAcceptJs() {
  if (window.Accept) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${ACCEPT_JS_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('Failed to load Accept.js')))
      return
    }
    const script = document.createElement('script')
    script.src = ACCEPT_JS_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Accept.js'))
    document.head.appendChild(script)
  })
}

// Card number/expiry/CVV entered here are sent straight to Authorize.Net's
// Accept.js in the browser and never reach our backend — only the resulting
// opaqueData token does. That keeps the server out of PCI card-data scope.
const CardPaymentForm = forwardRef(function CardPaymentForm(_, ref) {
  const [card, setCard] = useState({ number: '', month: '', year: '', code: '' })
  const [ready, setReady] = useState(false)
  const [loadError, setLoadError] = useState('')

  const cardBrand = useMemo(() => detectCardBrand(card.number), [card.number])
  const BrandIcon = { visa: VisaIcon, mastercard: MastercardIcon, amex: AmexIcon, discover: DiscoverIcon }[cardBrand]

  useEffect(() => {
    loadAcceptJs()
      .then(() => setReady(true))
      .catch(() => setLoadError('Could not load the secure card processor. Please refresh and try again.'))
  }, [])

  useImperativeHandle(ref, () => ({
    tokenize() {
      return new Promise((resolve, reject) => {
        if (!window.Accept) {
          reject(new Error('Card processor is not ready yet.'))
          return
        }
        if (!card.number || !card.month || !card.year || !card.code) {
          reject(new Error('Please fill in all card fields.'))
          return
        }

        const secureData = {
          authData: {
            clientKey: import.meta.env.VITE_AUTHORIZE_NET_PUBLIC_CLIENT_KEY,
            apiLoginID: import.meta.env.VITE_AUTHORIZE_NET_API_LOGIN_ID,
          },
          cardData: {
            cardNumber: card.number.replace(/\s+/g, ''),
            month: card.month,
            year: card.year,
            cardCode: card.code,
          },
        }

        window.Accept.dispatchData(secureData, (response) => {
          if (response.messages.resultCode === 'Error') {
            const msg = response.messages.message?.[0]?.text || 'Card was rejected.'
            reject(new Error(msg))
            return
          }
          resolve(response.opaqueData)
        })
      })
    },
  }))

  return (
    <div className="mt-4 rounded-xl border border-black/10 p-5">
      {loadError && <p className="mb-3 text-xs font-medium text-red-600">{loadError}</p>}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="relative sm:col-span-2">
          <input
            placeholder="Card Number"
            inputMode="numeric"
            autoComplete="cc-number"
            value={card.number}
            onChange={(e) => setCard((c) => ({ ...c, number: e.target.value }))}
            className="w-full rounded-md border border-black/15 px-3 py-2 pr-11 text-sm text-[#1a1a17] outline-none focus:ring-2 focus:ring-[#3CA43C]/40"
          />
          {BrandIcon && (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <BrandIcon />
            </span>
          )}
        </div>
        <input
          placeholder="MM"
          inputMode="numeric"
          autoComplete="cc-exp-month"
          maxLength={2}
          value={card.month}
          onChange={(e) => setCard((c) => ({ ...c, month: e.target.value }))}
          className="rounded-md border border-black/15 px-3 py-2 text-sm text-[#1a1a17] outline-none focus:ring-2 focus:ring-[#3CA43C]/40"
        />
        <input
          placeholder="YYYY"
          inputMode="numeric"
          autoComplete="cc-exp-year"
          maxLength={4}
          value={card.year}
          onChange={(e) => setCard((c) => ({ ...c, year: e.target.value }))}
          className="rounded-md border border-black/15 px-3 py-2 text-sm text-[#1a1a17] outline-none focus:ring-2 focus:ring-[#3CA43C]/40"
        />
        <input
          placeholder="CVV"
          inputMode="numeric"
          autoComplete="cc-csc"
          maxLength={4}
          value={card.code}
          onChange={(e) => setCard((c) => ({ ...c, code: e.target.value }))}
          className="rounded-md border border-black/15 px-3 py-2 text-sm text-[#1a1a17] outline-none focus:ring-2 focus:ring-[#3CA43C]/40 sm:col-span-2"
        />
      </div>
      <p className="mt-3 text-xs text-[#9a988e]">
        {ready
          ? 'Your card details are encrypted by Authorize.Net and never touch our servers.'
          : 'Loading secure card processor…'}
      </p>
    </div>
  )
})

export default CardPaymentForm
