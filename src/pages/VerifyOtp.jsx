import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import BrandBadge from '../components/BrandBadge'
import VisitUs from '../components/VisitUs'
import { useAuth } from '../context/AuthContext'

function maskIdentifier(value) {
  if (!value) return ''
  if (value.length <= 5) return value
  return `${value.slice(0, 2)}${'*'.repeat(7)}${value.slice(-3)}`
}

const CODE_LENGTH = 8
const RESEND_SECONDS = 30

export default function VerifyOtp() {
  const location = useLocation()
  const navigate = useNavigate()
  const identifier = location.state?.identifier
  const { verify, reverify } = useAuth()

  const [submitted, setSubmitted] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS)
  const [verifyError, setVerifyError] = useState('')
  const [resendMessage, setResendMessage] = useState('')
  const inputRefs = useRef([])

  const {
    control,
    handleSubmit,
    setFocus,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { digits: Array(CODE_LENGTH).fill('') } })

  useEffect(() => {
    if (secondsLeft <= 0) return
    const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearInterval(t)
  }, [secondsLeft])

  useEffect(() => {
    if (!submitted) return
    const t = setTimeout(() => navigate('/sign-in'), 1200)
    return () => clearTimeout(t)
  }, [submitted, navigate])

  const mm = String(Math.floor(Math.max(secondsLeft, 0) / 60)).padStart(2, '0')
  const ss = String(Math.max(secondsLeft, 0) % 60).padStart(2, '0')

  const onSubmit = async (data) => {
    setVerifyError('')
    try {
      await verify(identifier, data.digits.join(''))
      setSubmitted(true)
    } catch (err) {
      setVerifyError(err.response?.data?.message || 'Invalid or expired code. Please try again.')
    }
  }

  const handleResend = async () => {
    setVerifyError('')
    setResendMessage('')
    try {
      await reverify(identifier)
      setSecondsLeft(RESEND_SECONDS)
      setResendMessage('A new code has been sent.')
    } catch (err) {
      setVerifyError(err.response?.data?.message || 'Could not resend code. Please try again.')
    }
  }

  const handleDigitChange = (index, value, onChange) => {
    const digit = value.replace(/\D/g, '').slice(-1)
    onChange(digit)
    if (digit && index < CODE_LENGTH - 1) {
      setFocus(`digits.${index + 1}`)
    }
  }

  const handleKeyDown = (index, e, currentValue) => {
    if (e.key === 'Backspace' && !currentValue && index > 0) {
      setFocus(`digits.${index - 1}`)
    }
  }

  const handlePaste = (index, e) => {
    const digits = e.clipboardData.getData('text').replace(/\D/g, '')
    if (!digits) return
    e.preventDefault()
    const chars = digits.slice(0, CODE_LENGTH - index).split('')
    chars.forEach((digit, i) => setValue(`digits.${index + i}`, digit))
    setFocus(`digits.${Math.min(index + chars.length, CODE_LENGTH - 1)}`)
  }

  const hasError = errors.digits && Object.values(errors.digits).some(Boolean)

  return (
    <>
      <BrandBadge />

      <section className="mx-auto max-w-[1280px] px-5 pb-14 pt-10 lg:px-10">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-2xl font-bold text-[#1a1a17]">Verification Code</h1>

          {!identifier && (
            <p className="mt-6 text-sm text-[#4a4a43]">
              We couldn&rsquo;t find your email or phone number.{' '}
              <button
                type="button"
                onClick={() => navigate('/create-account')}
                className="font-semibold text-[#3c6e35] hover:underline"
              >
                Go back
              </button>{' '}
              and try again.
            </p>
          )}

          {identifier && submitted ? (
            <div className="mt-6 rounded-md border border-[#3c6e35]/30 bg-[#eef4e9] p-4 text-sm text-[#2f5929]">
              You&rsquo;re verified! Taking you to sign in&hellip;
            </div>
          ) : (
            identifier && (
              <>
                <p className="mt-3 text-sm text-[#4a4a43]">
                  We sent OTP code to{' '}
                  <span className="font-semibold text-[#e0a530]">
                    {maskIdentifier(identifier)}
                  </span>
                </p>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {Array.from({ length: CODE_LENGTH }).map((_, i) => (
                      <Controller
                        key={i}
                        name={`digits.${i}`}
                        control={control}
                        rules={{ required: true, pattern: /^[0-9]$/ }}
                        render={({ field }) => (
                          <input
                            ref={(el) => {
                              field.ref(el)
                              inputRefs.current[i] = el
                            }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={field.value}
                            onChange={(e) => handleDigitChange(i, e.target.value, field.onChange)}
                            onKeyDown={(e) => handleKeyDown(i, e, field.value)}
                            onPaste={(e) => handlePaste(i, e)}
                            aria-label={`Digit ${i + 1}`}
                            className={`h-12 w-9 rounded-md border text-center text-lg font-semibold text-[#1a1a17] focus:outline-none focus:ring-2 sm:h-14 sm:w-11 sm:text-xl ${
                              hasError
                                ? 'border-red-400 focus:ring-red-200'
                                : 'border-black/20 focus:ring-[#3c6e35]/40'
                            }`}
                          />
                        )}
                      />
                    ))}
                  </div>
                  {hasError && (
                    <p className="mt-2 text-xs font-medium text-red-600">
                      Enter the {CODE_LENGTH}-digit code we sent you
                    </p>
                  )}

                  {verifyError && (
                    <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
                      {verifyError}
                    </p>
                  )}

                  {resendMessage && !verifyError && (
                    <p className="mt-3 text-xs font-medium text-[#2f5929]">{resendMessage}</p>
                  )}

                  <p className="mt-6 text-sm text-[#4a4a43]">
                    {secondsLeft > 0 ? (
                      <>
                        Resend code in {mm}:{ss}
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResend}
                        className="font-semibold text-[#3c6e35] hover:underline"
                      >
                        Resend code
                      </button>
                    )}
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 w-full rounded-md bg-[#3c6e35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#345f2e] disabled:opacity-60"
                  >
                    {isSubmitting ? 'Verifying…' : 'Verify'}
                  </button>
                </form>
              </>
            )
          )}
        </div>
      </section>

      <VisitUs />
    </>
  )
}
