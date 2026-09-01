import { useEffect, useState } from 'react'

const STORAGE_KEY = 'ageVerified'
const REDIRECT_URL = 'https://www.google.com'

export default function AgeVerificationModal() {
  const [status, setStatus] = useState(() =>
    sessionStorage.getItem(STORAGE_KEY) === 'true' ? 'verified' : 'prompt'
  )
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    if (status !== 'declined') return
    if (countdown === 1) {
      const redirect = setTimeout(() => {
        window.location.href = REDIRECT_URL
      }, 1000)
      return () => clearTimeout(redirect)
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [status, countdown])

  if (status === 'verified') return null

  const handleApprove = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setStatus('verified')
  }

  const handleDecline = () => {
    setCountdown(3)
    setStatus('declined')
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-2xl sm:p-10">
        {status === 'prompt' ? (
          <>
            <h2 className="text-3xl font-extrabold text-[#1a1a17] sm:text-4xl">Age Verification</h2>
            <p className="mt-5 text-base text-[#4a4a43] sm:text-lg">
              By law, this content is only available to users 21 years or older.
              <br />
              Please confirm your age to proceed.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={handleApprove}
                className="rounded-full bg-[#7cc242] px-8 py-4 text-base font-bold text-[#1a1a17] transition hover:bg-[#6fb336]"
              >
                Yes, I'm over 21
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="rounded-full bg-[#7a2e2e] px-8 py-4 text-base font-bold text-white transition hover:bg-[#642424]"
              >
                No, I'm under 21
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-extrabold text-[#7a2e2e] sm:text-4xl">Access Denied</h2>
            <p className="mt-5 text-base text-[#4a4a43] sm:text-lg">
              You are not allowed to access this site.
              <br />
              Redirecting you in...
            </p>
            <p className="mt-6 text-6xl font-extrabold text-[#7a2e2e]">{countdown}</p>
          </>
        )}
      </div>
    </div>
  )
}
