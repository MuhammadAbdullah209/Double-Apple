import { useState } from 'react'
import { StarIcon, ArrowRightIcon } from './Icons'

// Real reviews from the Double Apple Smoke Shop Google Business listing
// (https://www.google.com/maps/place/Double+Apple+Smoke+Shop — 4.8★, 1,596 reviews),
// pulled manually since Google doesn't offer a free way to sync these live.
const REVIEWS = [
  {
    name: 'Alex E',
    time: '3 months ago',
    initial: 'A',
    color: '#8f8a7c',
    rating: 5,
    quote:
      'Great smoke shop, Mo was absolutely awesome! No pressure, just trying to hook us up on the best deals possible for what we actually needed. Truly fantastic service, he even stayed 20+ minutes after close to take care of us.',
  },
  {
    name: 'La Pistola',
    time: '5 months ago',
    initial: 'L',
    color: '#e8734a',
    rating: 5,
    quote:
      'One of the best places to get vapes! Every time I have visited this store, I received either a two-for-one or, a discount and, a free gift (or two)! The people that work there are all sweet, patient and informative.',
  },
  {
    name: 'Dylan Plex',
    time: 'a month ago',
    initial: 'D',
    color: '#e0559c',
    rating: 5,
    quote: 'Cia was very thorough and nice to work with. Great guy and attractive too.',
  },
  {
    name: 'Simply Sadé Michelle',
    time: '7 months ago',
    initial: 'S',
    color: '#c7c7c7',
    rating: 5,
    quote:
      'Double Apple Smoke and Vape was a friendly, well lit, clean and welcoming experience. They had a variety of options and a nice selection to choose from. Very calm and cool. Ty for a great first time.',
  },
  {
    name: 'Patrick Langtry',
    time: 'a month ago',
    initial: 'P',
    color: '#6b8f5c',
    rating: 5,
    quote:
      'Employees always very helpful and knowledgeable. Friendly. Ashley was always very patient and knowledgeable, thank you — definitely a great job managed well.',
  },
  {
    name: 'Audrey Niles',
    time: '2 months ago',
    initial: 'A',
    color: '#4a90a4',
    rating: 5,
    quote:
      "Albert is a life saver. He always addresses and answers all my worries and concerns. He always lets me know new product options so I can get the best deal on my purchase.",
  },
  {
    name: '_.versxce',
    time: '4 months ago',
    initial: 'V',
    color: '#b08d57',
    rating: 5,
    quote:
      'I love this store! The selection is amazing and the prices are best in ATX. If y’all want to get the best bang for your buck and the best service, you should come here!! They have the best Lost Mary selection and cheapest glass!',
  },
  {
    name: 'Zach S',
    time: '11 months ago',
    initial: 'Z',
    color: '#9b6b9e',
    rating: 5,
    quote:
      'Wonderful selection of products, and reasonably priced, our associate Zoe was very accommodating and assisted in the product selection in a very professional manner.',
  },
  {
    name: 'Gadreel Hp',
    time: 'a month ago',
    initial: 'G',
    color: '#5c7a99',
    rating: 5,
    quote:
      'I was referred here by my homie Ronnie and all I can say is good customer service and good stuff they got too — if you have any questions ask Moe, one of the employees there. Great service, will be looking forward to buying more in the future, thank you!!',
  },
  {
    name: 'YAZEED MUHI ELDDIN',
    time: '5 months ago',
    initial: 'Y',
    color: '#c4874a',
    rating: 5,
    quote:
      'I had a great experience at Double Apple Smoke Shop. They have the best prices in town and an amazing selection of vapes and THC-A products. The variety is impressive and everything is well stocked.',
  },
]

const GOOGLE_REVIEW_URL =
  'https://www.google.com/maps/place/Double+Apple+Smoke+Shop/@30.381803,-97.687215,16z/data=!4m15!1m8!3m7!1s0x8644c9455306efc5:0x2c0487f00bfd7a8c!2s11220+N+Lamar+Blvd+B202,+Austin,+TX+78753,+USA!3b1!8m2!3d30.3818034!4d-97.6872147!16s%2Fg%2F11yrbtb54v!3m5!1s0x8644c968684aae17:0xf65561555550d317!8m2!3d30.3821154!4d-97.6878033!16s%2Fg%2F11f5k2dv3l?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D'

const PAGE_SIZE = 4
const PAGE_COUNT = Math.ceil(REVIEWS.length / PAGE_SIZE)

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
  const [page, setPage] = useState(0)

  const goTo = (n) => setPage((n + PAGE_COUNT) % PAGE_COUNT)

  const visible = Array.from(
    { length: PAGE_SIZE },
    (_, i) => REVIEWS[(page * PAGE_SIZE + i) % REVIEWS.length]
  )

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-[#1a1a17] sm:text-3xl">Straight From The Source.</h2>
        <p className="mt-3 text-sm text-[#7a7a72]">
          4.8&#9733; from 1,596 Google reviews &mdash; hear from our happy customers.
        </p>
      </div>

      <div className="relative">
        {PAGE_COUNT > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => goTo(page - 1)}
              className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#5c5b53] shadow-md transition hover:bg-[#f2f1ec]"
            >
              &#8249;
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => goTo(page + 1)}
              className="absolute right-0 top-1/2 z-10 flex h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#5c5b53] shadow-md transition hover:bg-[#f2f1ec]"
            >
              &#8250;
            </button>
          </>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((r, i) => (
            <div key={`${page}-${r.name}-${i}`} className="flex flex-col gap-3 rounded-xl bg-[#f2f1ec] p-5">
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

              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="h-3.5 w-3.5 text-[#3c6e35]" filled={s < r.rating} />
                ))}
              </div>

              <p className="text-[13px] leading-relaxed text-[#3a3a35]">{r.quote}</p>
            </div>
          ))}
        </div>

        {PAGE_COUNT > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: PAGE_COUNT }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to review page ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === page ? 'w-6 bg-[#3CA43C]' : 'w-2 bg-black/15'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-9 text-center">
        <a
          href={GOOGLE_REVIEW_URL}
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
