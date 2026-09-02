import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import vapePens from '../assets/images/vape-pens.jpg'
import VisitUs from '../components/VisitUs'

function PinOutlineIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path
        d="M12 21s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

function PhoneIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path
        d="M4.5 4h3.4l1.6 4.2-2 1.7a11.5 11.5 0 0 0 5.6 5.6l1.7-2 4.2 1.6v3.4c0 1-.8 1.8-1.8 1.7A16 16 0 0 1 3 5.8c0-1 .7-1.8 1.5-1.8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-bold text-[#1a1a17]">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error.message}</p>}
    </div>
  )
}

export default function ContactUs() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    console.log('Contact form:', data)
    await new Promise((r) => setTimeout(r, 400))
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass = (hasError) =>
    `w-full rounded-md border px-4 py-2.5 text-sm text-[#1a1a17] placeholder:text-[#9a988e] focus:outline-none focus:ring-2 ${
      hasError ? 'border-red-400 focus:ring-red-200' : 'border-black/15 focus:ring-[#3c6e35]/40'
    }`

  return (
    <>
      <div className="w-full border-b border-black/10 bg-white px-6 py-3.5 sm:px-8 lg:px-10">
        <nav className="flex items-center gap-2 text-[13px] text-[#666]">
          <Link to="/" className="hover:text-[#3c6e35]">
            Home
          </Link>
          <span>/</span>
          <span>Contact Us</span>
        </nav>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-[280px] sm:h-[340px] lg:h-[420px]">
          <img src={vapePens} alt="Double Apple product display" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center bg-[#f2f2f2] px-8 py-10 sm:px-12 lg:px-16">
          <h1 className="text-2xl font-semibold text-[#2b2b2b] sm:text-[28px]">About Us</h1>
          <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-[#5c5c5c]">
            <p>
              Welcome to Double Apple Smoke and Vape! We are dedicated to providing Austin and
              Central Texas with a diverse selection of smoke and vape products, top-notch
              customer service, and a unique shopping experience.
            </p>
            <p>
              We pride ourselves on offering a wide range of products, including vapes, THCA,
              hookah, kratom, and CBD. Our mission is to cater to the needs of our customers by
              providing customized care and high-quality products.
            </p>
            <p>
              Whether you&rsquo;re a seasoned user or new to the smoke and vape world, our
              knowledgeable team is here to guide you. Thank you for choosing Double Apple Smoke
              and Vape &mdash; a higher standard in smoke and vape shopping.
            </p>
            <p>
              Visit us at 11220 N Lamar Blvd B202, Austin, TX 78753, or contact us at
              +1 512-271-3390.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-10 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-black/15 text-[#5c5c5c]">
              <PinOutlineIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[15px] font-bold text-[#1a1a1a]">Adress</p>
              <p className="mt-1 text-sm text-[#6b6b6b]">11220 N Lamar Blvd B202,</p>
              <p className="text-sm text-[#6b6b6b]">Austin, TX 78753, United States</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-black/15 text-[#5c5c5c]">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[15px] font-bold text-[#1a1a1a]">Call Us</p>
              <p className="mt-1 text-sm text-[#6b6b6b]">+1 512-271-3390</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-black/15 text-[#5c5c5c]">
              <MailIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[15px] font-bold text-[#1a1a1a]">Email</p>
              <p className="mt-1 text-sm text-[#6b6b6b]">hello@doubleapple.shop</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[640px] px-5 py-16 text-center lg:px-10">
        <h2 className="text-2xl font-bold text-[#1a1a17] sm:text-3xl">Got Any Questions?</h2>
        <p className="mt-3 text-sm text-[#4a4a43] sm:text-base">
          Use the form below to get in touch with the Double Apple team.
        </p>

        {sent && (
          <div className="mt-6 rounded-md border border-[#3c6e35]/30 bg-[#eef4e9] p-4 text-left text-sm text-[#2f5929]">
            Thanks for reaching out! We&rsquo;ll get back to you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 flex flex-col gap-5 text-left">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Name" error={errors.name}>
              <input
                type="text"
                placeholder="Your Name"
                className={inputClass(errors.name)}
                {...register('name', { required: 'Name is required' })}
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                placeholder="Your Email"
                className={inputClass(errors.email)}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
              />
            </Field>
          </div>

          <Field label="Phone Number" error={errors.phone}>
            <input
              type="tel"
              placeholder="Phone Number"
              className={inputClass(errors.phone)}
              {...register('phone', {
                pattern: {
                  value: /^[0-9+\-\s()]{7,20}$/,
                  message: 'Enter a valid phone number',
                },
              })}
            />
          </Field>

          <Field label="Message" error={errors.message}>
            <textarea
              rows={5}
              placeholder="How can we help?"
              className={inputClass(errors.message)}
              {...register('message', { required: 'Please add a short message' })}
            />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="self-center rounded-full bg-[#3CA43C] px-10 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2f8a30] disabled:opacity-60"
          >
            {isSubmitting ? 'Sending…' : 'Send'}
          </button>

          <p className="text-center text-xs text-[#9a988e]">
            By submitting this form you agree to our{' '}
            <a href="#" className="text-[#3c6e35] hover:underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#3c6e35] hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </form>
      </section>

      <VisitUs />
    </>
  )
}
