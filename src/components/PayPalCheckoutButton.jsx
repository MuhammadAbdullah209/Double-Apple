import { useEffect, useRef, useState } from 'react'
import { initiatePaypalOrder, capturePaypalOrder } from '../api/orders'

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID
const PAYPAL_CURRENCY = import.meta.env.VITE_PAYPAL_CURRENCY || 'USD'
const PAYPAL_SDK_SRC = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=${PAYPAL_CURRENCY}&intent=capture`

function loadPaypalSdk() {
  if (window.paypal) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${PAYPAL_SDK_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('Failed to load PayPal.')))
      return
    }
    const script = document.createElement('script')
    script.src = PAYPAL_SDK_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load PayPal.'))
    document.head.appendChild(script)
  })
}

// Renders PayPal's own Smart Payment Buttons. The buyer approves the payment
// in PayPal's popup — our backend creates the order (getOrderPayload) and
// captures it (onApproved) via /Order/paypal/create and /Order/paypal/capture.
export default function PayPalCheckoutButton({ getOrderPayload, onApproved, onError }) {
  const containerRef = useRef(null)
  const buttonsRef = useRef(null)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    if (!PAYPAL_CLIENT_ID) return

    let cancelled = false

    loadPaypalSdk()
      .then(() => {
        if (cancelled || !containerRef.current) return

        buttonsRef.current = window.paypal.Buttons({
          style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal', height: 35 },

          createOrder: async () => {
            const payload = getOrderPayload()
            if (!payload) {
              // getOrderPayload already reported the validation error.
              throw new Error('Please complete the checkout details first.')
            }
            const { paypalOrderId } = await initiatePaypalOrder(payload)
            return paypalOrderId
          },

          onApprove: async (data) => {
            const { order } = await capturePaypalOrder(data.orderID)
            onApproved(order)
          },

          onError: (err) => {
            onError(err?.message || 'PayPal checkout failed. Please try again.')
          },
        })

        buttonsRef.current.render(containerRef.current)
      })
      .catch(() => setLoadError('Could not load PayPal. Please refresh and try again.'))

    return () => {
      cancelled = true
      if (buttonsRef.current?.close) buttonsRef.current.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mt-4 rounded-xl border border-black/10 p-5">
      {!PAYPAL_CLIENT_ID && (
        <p className="mb-3 text-xs font-medium text-red-600">PayPal is not configured yet.</p>
      )}
      {loadError && <p className="mb-3 text-xs font-medium text-red-600">{loadError}</p>}
      <div ref={containerRef} className="mx-auto max-w-xs" />
      <p className="mt-3 text-xs text-[#9a988e]">
        You&rsquo;ll approve the payment in a secure PayPal window, then be brought right back here.
      </p>
    </div>
  )
}
