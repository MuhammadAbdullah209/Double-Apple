import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChevronDownIcon } from '../components/Icons'

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

const PROFILE_EMAIL = 'jordan.miller@gmail.com'

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
  const [editing, setEditing] = useState(false)
  const [photo, setPhoto] = useState(null)
  const fileInputRef = useRef(null)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: 'Jordan Miller',
      nickName: 'Jordan',
      gender: 'Female',
      country: 'United States',
      language: 'English',
      timeZone: 'Central Time (US & Canada)',
    },
  })

  const onSubmit = async (data) => {
    console.log('Profile update:', data)
    await new Promise((r) => setTimeout(r, 400))
    setEditing(false)
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
                    J
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
                <p className="text-base font-extrabold text-[#1a1a17]">Jordan Miller</p>
                <p className="text-sm text-[#9a988e]">{PROFILE_EMAIL}</p>
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
              onClick={() => setEditing((v) => !v)}
              className="shrink-0 rounded-md bg-[#3CA43C] px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#2f8a30]"
            >
              {editing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Full Name">
              <input disabled={!editing} className={inputClass} {...register('fullName')} />
            </Field>
            <Field label="Nick Name">
              <input disabled={!editing} className={inputClass} {...register('nickName')} />
            </Field>

            <Field label="Gender">
              <div className="relative">
                <select
                  disabled={!editing}
                  className={`${inputClass} appearance-none`}
                  {...register('gender')}
                >
                  <option>Female</option>
                  <option>Male</option>
                  <option>Prefer not to say</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9a988e]" />
              </div>
            </Field>
            <Field label="Country">
              <div className="relative">
                <select
                  disabled={!editing}
                  className={`${inputClass} appearance-none`}
                  {...register('country')}
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9a988e]" />
              </div>
            </Field>

            <Field label="Language">
              <div className="relative">
                <select
                  disabled={!editing}
                  className={`${inputClass} appearance-none`}
                  {...register('language')}
                >
                  <option>English</option>
                  <option>Spanish</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9a988e]" />
              </div>
            </Field>
            <Field label="Time Zone">
              <div className="relative">
                <select
                  disabled={!editing}
                  className={`${inputClass} appearance-none`}
                  {...register('timeZone')}
                >
                  <option>Central Time (US &amp; Canada)</option>
                  <option>Eastern Time (US &amp; Canada)</option>
                  <option>Mountain Time (US &amp; Canada)</option>
                  <option>Pacific Time (US &amp; Canada)</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9a988e]" />
              </div>
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
                <p className="text-sm font-semibold text-[#1a1a17]">{PROFILE_EMAIL}</p>
                <p className="text-xs text-[#9a988e]">1 month ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
