import { useState } from 'react'
import newsletterBg from '../assets/images/newsletter-bg.jpg'
import { subscribeNewsletter } from '../api/newsletter'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const data = await subscribeNewsletter(email)
      setMessage(data.message || "You're on the list!")
      setStatus('success')
      setEmail('')
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-10 lg:px-10">
      <div className="relative isolate overflow-hidden rounded-2xl px-5 py-16 text-center">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${newsletterBg})` }}
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Stay In The Green Loop &amp; Get Exclusive Offers
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            Be the first to hear about new product arrivals, secret deals, and invites to
            parties at the coolest <strong className="font-bold">cannabis dispensary Austin</strong> has
            going on. No spam. Just the good stuff.
          </p>
          <p className="mt-4 text-sm text-white/85">Get on the list.</p>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-3 flex max-w-md overflow-hidden rounded-full border-0 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#7fb069]"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              placeholder="Email"
              className="w-full flex-1 border-0 bg-white px-5 py-3 text-sm text-[#1a1a17] placeholder:text-[#8a8a80] focus:outline-none disabled:bg-white/60"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="shrink-0 bg-[#3CA43C] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#4a8442] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? 'Sending…' : 'Send'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm font-medium text-[#a8e0a8]">{message}</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm font-medium text-[#f5a3a3]">{message}</p>
          )}
        </div>
      </div>
    </section>
  )
}
