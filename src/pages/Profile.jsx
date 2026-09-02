import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

function MailIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
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

export default function Profile() {
  const { user, updateProfile, loading: authLoading } = useAuth()
  const [editing, setEditing] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [saveError, setSaveError] = useState('')
  const [saveSuccess, setSaveSuccess] = useState('')
  const fileInputRef = useRef(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      phno: '',
      street: '',
      city: '',
      province: '',
      postalCode: '',
      country: '',
      password: '',
    },
  })

  useEffect(() => {
    if (!user) return
    reset({
      firstname: user.firstname || '',
      lastname: user.lastname || '',
      phno: user.phno || '',
      street: user.address?.street || '',
      city: user.address?.city || '',
      province: user.address?.province || '',
      postalCode: user.address?.postalCode || '',
      country: user.address?.country || '',
      password: '',
    })
  }, [user, reset])

  const onSubmit = async (data) => {
    setSaveError('')
    setSaveSuccess('')
    try {
      const payload = { ...data }
      if (!payload.password) delete payload.password
      await updateProfile(payload)
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

  const inputClass =
    'w-full rounded-md border border-black/15 bg-[#f7f6f2] px-4 py-2.5 text-sm text-[#1a1a17] outline-none focus:outline-none focus:ring-2 focus:ring-[#3c6e35]/40 disabled:cursor-not-allowed disabled:text-[#6b6b6b]'

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

  const fullName = [user.firstname, user.lastname].filter(Boolean).join(' ')
  const initial = (user.firstname || 'U').charAt(0).toUpperCase()

  return (
    <section className="mx-auto max-w-3xl px-5 py-10 lg:px-10">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
        <div className="h-20 bg-gradient-to-r from-[#cdeabd] to-[#fbdcae] sm:h-24" />

        <div className="px-6 pb-8 sm:px-8">
          <div className="-mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                {photo ? (
                  <img
                    src={photo}
                    alt="Profile"
                    className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-sm"
                  />
                ) : (
                  <span className="grid h-16 w-16 place-items-center rounded-full border-4 border-white bg-[#3c6e35] text-xl font-bold text-white shadow-sm">
                    {initial}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  aria-label="Upload profile photo"
                  className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-[#3CA43C] text-white shadow-sm transition hover:bg-[#2f8a30]"
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
              </div>
              <div>
                <p className="text-base font-extrabold text-[#1a1a17]">{fullName || 'Your Account'}</p>
                <p className="text-sm text-[#9a988e]">{user.email}</p>
                {photo && (
                  <button
                    type="button"
                    onClick={removePhoto}
                    className="mt-0.5 text-xs font-semibold text-red-500 hover:underline"
                  >
                    Remove photo
                  </button>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setEditing((v) => !v)
                setSaveError('')
                setSaveSuccess('')
              }}
              className="shrink-0 rounded-md bg-[#3CA43C] px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#2f8a30]"
            >
              {editing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {saveError && (
              <p className="sm:col-span-2 rounded-md bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
                {saveError}
              </p>
            )}
            {saveSuccess && (
              <p className="sm:col-span-2 rounded-md bg-[#eef4e9] px-3 py-2 text-xs font-medium text-[#2f5929]">
                {saveSuccess}
              </p>
            )}

            <Field label="First Name">
              <input disabled={!editing} className={inputClass} {...register('firstname')} />
            </Field>
            <Field label="Last Name">
              <input disabled={!editing} className={inputClass} {...register('lastname')} />
            </Field>

            <Field label="Phone Number">
              <input disabled={!editing} className={inputClass} {...register('phno')} />
            </Field>
            <Field label="New Password">
              <input
                disabled={!editing}
                type="password"
                placeholder="Leave blank to keep current password"
                className={inputClass}
                {...register('password')}
              />
            </Field>

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

            {editing && (
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-[#3c6e35] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#345f2e] disabled:opacity-60"
                >
                  {isSubmitting ? 'Saving…' : 'Save Changes'}
                </button>
              </div>
            )}
          </form>

          <div className="mt-10 border-t border-black/10 pt-6">
            <p className="text-sm font-bold text-[#1a1a17]">My email Address</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eef4e9] text-[#3c6e35]">
                <MailIcon />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1a1a17]">{user.email}</p>
                <p className="text-xs text-[#9a988e]">Email cannot be changed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
