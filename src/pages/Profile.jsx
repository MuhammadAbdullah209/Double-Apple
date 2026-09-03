import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useWishlist } from '../context/WishlistContext'
import { getMyOrders, cancelOrder } from '../api/orders'
import { getMyReviews, deleteReview } from '../api/reviews'
import { StarIcon } from '../components/Icons'
import ProductCard from '../components/ProductCard'

/* ================================
   ICONS
================================ */

function UserIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M4.5 20c1.5-3.6 4.4-5.4 7.5-5.4s6 1.8 7.5 5.4" strokeLinecap="round" />
    </svg>
  )
}

function OrdersIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 8h16l-1.2 11a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 8z" strokeLinejoin="round" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" strokeLinecap="round" />
    </svg>
  )
}

function ReturnIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M9 10 4.5 5.5M4.5 5.5 9 1M4.5 5.5H15a5.5 5.5 0 0 1 5.5 5.5v0A5.5 5.5 0 0 1 15 16.5H8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HeartIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path
        d="M12 20.5s-7.5-4.6-9.8-9.2C.6 7.7 2.6 4.5 6 4.5c2 0 3.6 1.1 4.5 2.6.9-1.5 2.5-2.6 4.5-2.6 3.4 0 5.4 3.2 3.8 6.8-2.3 4.6-9.8 9.2-9.8 9.2z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CardIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 9.5h19" strokeLinecap="round" />
    </svg>
  )
}

function KeyIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l8-8M16 4l3 3M19.5 7.5 22 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PencilIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path
        d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CameraIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path
        d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13.5" r="3.2" />
    </svg>
  )
}

function MailIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ================================
   COUNTRY → PHONE FLAG
   (rendered as SVGs — flag emoji don't render as flags on Windows)
================================ */

function FlagUS({ className = 'h-3.5 w-5' }) {
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <rect width="24" height="16" fill="#B22234" />
      {[1, 3, 5, 7, 9, 11].map((y) => (
        <rect key={y} y={y} width="24" height="1.23" fill="#fff" />
      ))}
      <rect width="10" height="8.6" fill="#3C3B6E" />
    </svg>
  )
}

function FlagCanada({ className = 'h-3.5 w-5' }) {
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <rect width="24" height="16" fill="#fff" />
      <rect width="6" height="16" fill="#D80621" />
      <rect x="18" width="6" height="16" fill="#D80621" />
      <path d="M12 3l1.1 2.3 2.4-.5-1 2.2 1.9 1.5-2.3.5.2 2.4-1.5-1.6L11 11.4l.2-2.4-2.3-.5 1.9-1.5-1-2.2 2.4.5z" fill="#D80621" />
    </svg>
  )
}

function FlagUK({ className = 'h-3.5 w-5' }) {
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <rect width="24" height="16" fill="#00247D" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="2.6" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#CF142B" strokeWidth="1" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="4.4" />
      <path d="M12 0v16M0 8h24" stroke="#CF142B" strokeWidth="2.6" />
    </svg>
  )
}

function FlagGlobe({ className = 'h-3.5 w-5' }) {
  return (
    <svg viewBox="0 0 24 16" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="0.5" y="0.5" width="23" height="15" rx="2" />
      <ellipse cx="12" cy="8" rx="5" ry="7" />
      <path d="M5 8h14" />
    </svg>
  )
}

const COUNTRY_PHONE_META = {
  'United States': { Flag: FlagUS, dial: '+1' },
  Canada: { Flag: FlagCanada, dial: '+1' },
  'United Kingdom': { Flag: FlagUK, dial: '+44' },
}

function getCountryPhoneMeta(country) {
  return COUNTRY_PHONE_META[country] || { Flag: FlagGlobe, dial: '' }
}

/* ================================
   SIDEBAR NAV
================================ */

const NAV_ITEMS = [
  { key: 'account', label: 'My Account', Icon: UserIcon },
  { key: 'orders', label: 'My Orders', Icon: OrdersIcon },
  { key: 'returns', label: 'Returns & Cancel', Icon: ReturnIcon },
  { key: 'reviews', label: 'My Rating & Reviews', Icon: StarIcon },
  { key: 'wishlist', label: 'My Wishlist', Icon: HeartIcon },
  { key: 'payment', label: 'Payment', Icon: CardIcon },
  { key: 'password', label: 'Change Password', Icon: KeyIcon },
]

/* ================================
   SHARED BITS
================================ */

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#7a7a72]">
        {label}
      </label>
      {children}
    </div>
  )
}

function GenderOption({ label, value, current, onChange, disabled }) {
  const checked = current === value
  return (
    <label
      className={`flex items-center gap-2 text-sm font-medium ${
        disabled ? 'cursor-not-allowed text-[#9a988e]' : 'cursor-pointer text-[#4a4a43]'
      }`}
    >
      <span
        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition ${
          checked ? 'border-[#3CA43C]' : 'border-black/20'
        }`}
      >
        {checked && <span className="h-2.5 w-2.5 rounded-full bg-[#3CA43C]" />}
      </span>
      <input
        type="radio"
        className="sr-only"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
      />
      {label}
    </label>
  )
}

function ComingSoon({ title, Icon, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white px-6 py-20 text-center shadow-sm">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-[#eef4e9] text-[#3c6e35]">
        <Icon className="h-6 w-6" />
      </span>
      <p className="text-base font-bold text-[#1a1a17]">{title}</p>
      <p className="max-w-sm text-sm text-[#7a7a72]">{description}</p>
    </div>
  )
}

function WishlistPanel() {
  const { items, loading } = useWishlist()

  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
      <div className="border-b border-black/10 px-6 py-5">
        <h2 className="text-lg font-bold text-[#1a1a17]">My Wishlist</h2>
      </div>

      <div className="p-6">
        {loading ? (
          <p className="py-10 text-center text-sm text-[#7a7a72]">Loading your wishlist&hellip;</p>
        ) : items.length === 0 ? (
          <p className="py-10 text-center text-sm text-[#7a7a72]">
            You haven&rsquo;t saved anything yet — tap the heart on a product to add it here.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const inputClass =
  'w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-[#1a1a17] outline-none focus:outline-none focus:ring-2 focus:ring-[#3c6e35]/40 disabled:cursor-not-allowed disabled:bg-[#f7f6f2] disabled:text-[#8a897f]'

const STATUS_STYLES = {
  pending: 'bg-[#fdf3dd] text-[#8a6a12]',
  processing: 'bg-[#e6f0fb] text-[#265a94]',
  completed: 'bg-[#eef4e9] text-[#3c6e35]',
  cancelled: 'bg-red-50 text-red-600',
}

/* ================================
   ORDERS TAB
================================ */

function OrdersPanel() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [cancellingId, setCancellingId] = useState(null)

  useEffect(() => {
    let cancelled = false
    getMyOrders()
      .then((data) => {
        if (!cancelled) setOrders(data.orders || [])
      })
      .catch(() => {
        if (!cancelled) setError('Could not load your orders right now.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const handleCancel = async (id) => {
    setCancellingId(id)
    try {
      await cancelOrder(id)
      setOrders((prev) =>
        prev.map((o) => (o._id === id ? { ...o, status: 'cancelled' } : o))
      )
    } catch {
      setError('Could not cancel that order. Please try again.')
    } finally {
      setCancellingId(null)
    }
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
      <div className="border-b border-black/10 px-6 py-5">
        <h2 className="text-lg font-bold text-[#1a1a17]">My Orders</h2>
      </div>

      <div className="p-6">
        {error && (
          <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
            {error}
          </p>
        )}

        {loading ? (
          <p className="py-10 text-center text-sm text-[#7a7a72]">Loading your orders&hellip;</p>
        ) : orders.length === 0 ? (
          <p className="py-10 text-center text-sm text-[#7a7a72]">
            You haven&rsquo;t placed any orders yet.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map((order) => {
              const statusClass = STATUS_STYLES[order.status] || 'bg-black/5 text-[#4a4a43]'
              const canCancel = order.status === 'pending'
              return (
                <div key={order._id} className="rounded-xl border border-black/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-[#1a1a17]">
                        Order #{order._id.slice(-8).toUpperCase()}
                      </p>
                      <p className="mt-0.5 text-xs text-[#9a988e]">
                        {new Date(order.createdAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}{' '}
                        &bull; {order.totalItems || order.items?.length || 0} item
                        {(order.totalItems || order.items?.length) === 1 ? '' : 's'}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold capitalize ${statusClass}`}
                    >
                      {order.status || 'pending'}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-4">
                    <p className="text-lg font-extrabold text-[#1a1a17]">
                      ${Number(order.totalAmount).toFixed(2)}
                    </p>
                    {canCancel && (
                      <button
                        type="button"
                        disabled={cancellingId === order._id}
                        onClick={() => handleCancel(order._id)}
                        className="rounded-md border border-red-300 px-4 py-2 text-xs font-bold uppercase tracking-wide text-red-500 transition hover:bg-red-50 disabled:opacity-50"
                      >
                        {cancellingId === order._id ? 'Cancelling…' : 'Cancel Order'}
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

function ReviewsPanel() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deletingId, setDeletingId] = useState(null)

  useEffect(() => {
    let cancelled = false
    getMyReviews()
      .then((data) => {
        if (!cancelled) setReviews(data.reviews || [])
      })
      .catch(() => {
        if (!cancelled) setError('Could not load your reviews right now.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const handleDelete = async (productId) => {
    setDeletingId(productId)
    try {
      await deleteReview(productId)
      setReviews((prev) => prev.filter((r) => r.product?._id !== productId))
    } catch {
      setError('Could not delete that review. Please try again.')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
      <div className="border-b border-black/10 px-6 py-5">
        <h2 className="text-lg font-bold text-[#1a1a17]">My Rating & Reviews</h2>
      </div>

      <div className="p-6">
        {error && (
          <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
            {error}
          </p>
        )}

        {loading ? (
          <p className="py-10 text-center text-sm text-[#7a7a72]">Loading your reviews&hellip;</p>
        ) : reviews.length === 0 ? (
          <p className="py-10 text-center text-sm text-[#7a7a72]">
            You haven&rsquo;t reviewed any products yet.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {reviews.map((review) => (
              <div key={review._id} className="rounded-xl border border-black/10 p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    {review.product ? (
                      <Link
                        to={`/shop/${review.product._id}`}
                        className="text-sm font-bold text-[#1a1a17] hover:text-[#3c6e35]"
                      >
                        {review.product.name}
                      </Link>
                    ) : (
                      <p className="text-sm font-bold text-[#9a988e]">Product no longer available</p>
                    )}
                    <div className="mt-1.5 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < review.rating ? 'text-[#3CA43C]' : 'text-black/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  {review.product && (
                    <button
                      type="button"
                      disabled={deletingId === review.product._id}
                      onClick={() => handleDelete(review.product._id)}
                      className="shrink-0 rounded-md border border-red-300 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-red-500 transition hover:bg-red-50 disabled:opacity-50"
                    >
                      {deletingId === review.product._id ? 'Deleting…' : 'Delete'}
                    </button>
                  )}
                </div>
                {review.comment && (
                  <p className="mt-3 text-sm leading-relaxed text-[#4a4a43]">{review.comment}</p>
                )}
                <p className="mt-2 text-xs text-[#9a988e]">
                  {new Date(review.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ================================
   CHANGE PASSWORD TAB
================================ */

function PasswordPanel({ updateProfile }) {
  const [status, setStatus] = useState({ error: '', success: '' })
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { password: '', confirmPassword: '' } })

  const password = watch('password')

  const onSubmit = async (data) => {
    setStatus({ error: '', success: '' })
    try {
      await updateProfile({ password: data.password })
      setStatus({ error: '', success: 'Password updated successfully.' })
      reset()
    } catch (err) {
      setStatus({
        error: err.response?.data?.message || 'Could not update your password. Please try again.',
        success: '',
      })
    }
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
      <div className="border-b border-black/10 px-6 py-5">
        <h2 className="text-lg font-bold text-[#1a1a17]">Change Password</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-6 sm:max-w-sm">
        {status.error && (
          <p className="rounded-md bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
            {status.error}
          </p>
        )}
        {status.success && (
          <p className="rounded-md bg-[#eef4e9] px-3 py-2 text-xs font-medium text-[#2f5929]">
            {status.success}
          </p>
        )}

        <Field label="New Password">
          <input
            type="password"
            placeholder="New password"
            className={inputClass}
            {...register('password', {
              required: 'Enter a new password',
              minLength: { value: 6, message: 'At least 6 characters' },
            })}
          />
          {errors.password && (
            <p className="mt-1.5 text-xs font-medium text-red-600">{errors.password.message}</p>
          )}
        </Field>

        <Field label="Confirm New Password">
          <input
            type="password"
            placeholder="Confirm new password"
            className={inputClass}
            {...register('confirmPassword', {
              required: 'Confirm your new password',
              validate: (value) => value === password || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-1.5 text-xs font-medium text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="self-start rounded-md bg-[#3c6e35] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#345f2e] disabled:opacity-60"
        >
          {isSubmitting ? 'Saving…' : 'Save Password'}
        </button>
      </form>
    </div>
  )
}

/* ================================
   MY ACCOUNT TAB
================================ */

function AccountPanel({ user, updateProfile }) {
  const [editing, setEditing] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [saveError, setSaveError] = useState('')
  const [saveSuccess, setSaveSuccess] = useState('')
  const fileInputRef = useRef(null)
  const extraKey = `double-apple-profile-extra:${user.email}`

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      phno: '',
      dob: '',
      gender: '',
      street: '',
      city: '',
      province: '',
      postalCode: '',
      country: '',
    },
  })

  useEffect(() => {
    let extra
    try {
      extra = JSON.parse(localStorage.getItem(extraKey)) || {}
    } catch {
      extra = {}
    }
    reset({
      firstname: user.firstname || '',
      lastname: user.lastname || '',
      phno: user.phno || '',
      dob: extra.dob || '',
      gender: extra.gender || '',
      street: user.address?.street || '',
      city: user.address?.city || '',
      province: user.address?.province || '',
      postalCode: user.address?.postalCode || '',
      country: user.address?.country || '',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const country = watch('country')
  const gender = watch('gender')
  const { Flag, dial } = getCountryPhoneMeta(country)

  const onSubmit = async (data) => {
    setSaveError('')
    setSaveSuccess('')
    try {
      await updateProfile({
        firstname: data.firstname,
        lastname: data.lastname,
        phno: data.phno,
        street: data.street,
        city: data.city,
        province: data.province,
        postalCode: data.postalCode,
        country: data.country,
      })
      try {
        localStorage.setItem(extraKey, JSON.stringify({ dob: data.dob, gender: data.gender }))
      } catch {
        // non-critical — local display preference only
      }
      setSaveSuccess('Profile updated successfully.')
      setEditing(false)
    } catch (err) {
      setSaveError(err.response?.data?.message || 'Could not update your profile. Please try again.')
    }
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file || !file.type.startsWith('image/')) return
    setPhoto((prev) => {
      if (prev) URL.revokeObjectURL(prev)
      return URL.createObjectURL(file)
    })
  }

  const removePhoto = () => {
    setPhoto((prev) => {
      if (prev) URL.revokeObjectURL(prev)
      return null
    })
  }

  const initial = (user.firstname || 'U').charAt(0).toUpperCase()

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 px-6 py-5">
          <h2 className="text-lg font-bold text-[#1a1a17]">Personal Information</h2>
          <button
            type="button"
            onClick={() => {
              setEditing((v) => !v)
              setSaveError('')
              setSaveSuccess('')
            }}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#3c6e35] hover:underline"
          >
            <PencilIcon />
            {editing ? 'Cancel' : 'Change Profile Information'}
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-6">
          {saveError && (
            <p className="rounded-md bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
              {saveError}
            </p>
          )}
          {saveSuccess && (
            <p className="rounded-md bg-[#eef4e9] px-3 py-2 text-xs font-medium text-[#2f5929]">
              {saveSuccess}
            </p>
          )}

          <div className="relative w-fit">
            {photo ? (
              <img
                src={photo}
                alt="Profile"
                className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-sm ring-1 ring-black/5"
              />
            ) : (
              <span className="grid h-24 w-24 place-items-center rounded-full border-4 border-white bg-[#3c6e35] text-2xl font-bold text-white shadow-sm ring-1 ring-black/5">
                {initial}
              </span>
            )}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              aria-label="Upload profile photo"
              className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-[#3CA43C] text-white shadow-sm transition hover:bg-[#2f8a30]"
            >
              <CameraIcon />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
            {photo && (
              <button
                type="button"
                onClick={removePhoto}
                className="absolute left-0 top-full mt-1 whitespace-nowrap text-xs font-semibold text-red-500 hover:underline"
              >
                Remove photo
              </button>
            )}
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#7a7a72]">Name</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                disabled={!editing}
                placeholder="First name"
                className={inputClass}
                {...register('firstname')}
              />
              <input
                disabled={!editing}
                placeholder="Last name"
                className={inputClass}
                {...register('lastname')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Date of Birth">
              <input type="date" disabled={!editing} className={inputClass} {...register('dob')} />
            </Field>

            <div>
              <p className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#7a7a72]">
                Gender
              </p>
              <div className="flex h-[42px] items-center gap-6">
                <GenderOption
                  label="Male"
                  value="male"
                  current={gender}
                  disabled={!editing}
                  onChange={(v) => setValue('gender', v)}
                />
                <GenderOption
                  label="Female"
                  value="female"
                  current={gender}
                  disabled={!editing}
                  onChange={(v) => setValue('gender', v)}
                />
              </div>
            </div>
          </div>

          <Field label="Phone Number">
            <div className="flex items-center gap-2">
              <span className="flex h-[42px] shrink-0 items-center gap-1.5 rounded-lg border border-black/10 bg-[#f7f6f2] px-3 text-sm text-[#4a4a43]">
                <Flag className="h-3.5 w-5 rounded-sm shadow-sm ring-1 ring-black/10" />
                {dial && <span className="font-semibold">{dial}</span>}
              </span>
              <input
                disabled={!editing}
                placeholder="Phone number"
                className={inputClass}
                {...register('phno')}
              />
            </div>
          </Field>

          <Field label="Email">
            <div className="flex items-center gap-3 rounded-lg border border-black/10 bg-[#f7f6f2] px-4 py-2.5">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#eef4e9] text-[#3c6e35]">
                <MailIcon />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[#1a1a17]">{user.email}</p>
                <p className="text-xs text-[#9a988e]">Email cannot be changed</p>
              </div>
            </div>
          </Field>

          <div className="border-t border-black/10 pt-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-wide text-[#7a7a72]">
              Shipping Address
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Street Address">
                <input disabled={!editing} className={inputClass} {...register('street')} />
              </Field>
              <Field label="City">
                <input disabled={!editing} className={inputClass} {...register('city')} />
              </Field>
              <Field label="Province / State">
                <input disabled={!editing} className={inputClass} {...register('province')} />
              </Field>
              <Field label="Postal Code">
                <input disabled={!editing} className={inputClass} {...register('postalCode')} />
              </Field>
              <Field label="Country">
                <input disabled={!editing} className={inputClass} {...register('country')} />
              </Field>
            </div>
          </div>

          {editing && (
            <button
              type="submit"
              disabled={isSubmitting}
              className="self-start rounded-md bg-[#3c6e35] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#345f2e] disabled:opacity-60"
            >
              {isSubmitting ? 'Saving…' : 'Save Changes'}
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

/* ================================
   PROFILE PAGE
================================ */

export default function Profile() {
  const { user, updateProfile, loading: authLoading } = useAuth()
  const [activeTab, setActiveTab] = useState('account')

  if (authLoading) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-16 text-center text-sm text-[#7a7a72]">
        Loading your profile…
      </section>
    )
  }

  if (!user) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-16 text-center text-sm text-[#7a7a72]">
        Please sign in to view your profile.
      </section>
    )
  }

  const fullName = [user.firstname, user.lastname].filter(Boolean).join(' ') || 'Your Account'
  const initial = (user.firstname || 'U').charAt(0).toUpperCase()

  return (
    <section className="mx-auto max-w-[1200px] px-5 py-10 lg:px-10">
      <h1 className="text-2xl font-bold text-[#1a1a17]">Profile</h1>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-black/10 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#3c6e35] text-sm font-bold text-white">
                {initial}
              </span>
              <div className="min-w-0">
                <p className="text-xs text-[#9a988e]">Hello</p>
                <p className="truncate text-sm font-extrabold text-[#1a1a17]">{fullName}</p>
              </div>
            </div>
            <nav className="flex flex-row gap-1 overflow-x-auto p-2 lg:flex-col lg:overflow-visible">
              {NAV_ITEMS.map(({ key, label, Icon }) => {
                const active = activeTab === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveTab(key)}
                    className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-semibold transition ${
                      active
                        ? 'bg-[#3c6e35] text-white'
                        : 'text-[#4a4a43] hover:bg-black/5'
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5 shrink-0" />
                    <span className="whitespace-nowrap">{label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        <div>
          {activeTab === 'account' && <AccountPanel user={user} updateProfile={updateProfile} />}
          {activeTab === 'orders' && <OrdersPanel />}
          {activeTab === 'password' && <PasswordPanel updateProfile={updateProfile} />}
          {activeTab === 'returns' && (
            <ComingSoon
              Icon={ReturnIcon}
              title="Returns & Cancel"
              description="Need to cancel a pending order? Head to My Orders — cancellation is available there while an order is still pending."
            />
          )}
          {activeTab === 'reviews' && <ReviewsPanel />}
          {activeTab === 'wishlist' && <WishlistPanel />}
          {activeTab === 'payment' && (
            <ComingSoon
              Icon={CardIcon}
              title="Payment"
              description="Online payment methods are coming soon — all orders are Cash On Delivery for now."
            />
          )}
        </div>
      </div>
    </section>
  )
}
