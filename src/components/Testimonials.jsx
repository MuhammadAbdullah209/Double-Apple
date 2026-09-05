import { StarIcon, ArrowRightIcon } from './Icons'
import vapePens from '../assets/images/vape-pens.jpg'
import kratomBox from '../assets/images/kratom-box.jpg'
import storeInterior from '../assets/images/store-interior.jpg'

const REVIEWS = [
  {
    name: 'quana Mckinney',
    time: '10 months ago',
    initial: 'Q',
    color: '#8f8a7c',
    quote:
      '1st time here, the music is amazing and staff are very helpful i plan on coming back soon!',
    photos: [vapePens, kratomBox, storeInterior],
  },
  {
    name: 'Zuachary Daniels',
    time: '10 months ago',
    initial: 'Z',
    color: '#e8734a',
    quote:
      'Great service and very helpful. Haley was magnificent. Definitely will come again. I recommend you visit',
  },
  {
    name: 'eric ybarra',
    time: '10 months ago',
    initial: 'e',
    color: '#e0559c',
    quote: 'Heley was good. She really helped find something good',
  },
  {
    name: 'Lilly Caballero',
    time: '10 months ago',
    initial: 'L',
    color: '#c7c7c7',
    quote: 'Staff very friendly and informative!',
  },
]

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-2.5 w-2.5">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-[#1a1a17] sm:text-3xl">Straight From The Source.</h2>
        <p className="mt-3 text-sm text-[#7a7a72]">Hear from our happy customers.</p>
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label="Previous"
          className="absolute left-0 top-1/2 z-10 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#5c5b53] shadow-md lg:flex"
        >
          &#8249;
        </button>
        <button
          type="button"
          aria-label="Next"
          className="absolute right-0 top-1/2 z-10 hidden h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#5c5b53] shadow-md lg:flex"
        >
          &#8250;
        </button>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <div key={r.name} className="flex flex-col gap-3 rounded-xl bg-[#f2f1ec] p-5">
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.initial}
                  </span>
                  <span className="absolute -bottom-0.5 -right-0.5 grid h-4 w-4 place-items-center rounded-full bg-white shadow">
                    <GoogleIcon />
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1a1a17]">{r.name}</p>
                  <p className="text-xs text-[#9a988e]">{r.time}</p>
                </div>
              </div>

              <StarIcon className="h-3.5 w-3.5 text-[#3c6e35]" />

              <p className="text-[13px] leading-relaxed text-[#3a3a35]">{r.quote}</p>

              {r.photos && (
                <div className="mt-auto flex gap-1.5 pt-1">
                  {r.photos.map((p, i) => (
                    <img
                      key={i}
                      src={p}
                      alt=""
                      className="h-10 w-10 rounded-md object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-9 text-center">
        <a
          href="https://www.google.com/maps/place/Double+Apple+Smoke+Shop/@30.381803,-97.687215,16z/data=!4m17!1m8!3m7!1s0x8644c9455306efc5:0x2c0487f00bfd7a8c!2s11220+N+Lamar+Blvd+B202,+Austin,+TX+78753!3b1!8m2!3d30.3818034!4d-97.6872147!16s%2Fg%2F11yrbtb54v!3m7!1s0x8644c968684aae17:0xf65561555550d317!8m2!3d30.3821154!4d-97.6878033!9m1!1b1!16s%2Fg%2F11f5k2dv3l?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2  bg-[#3da130] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#345f2e]"
        >
          Leave a Review
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
