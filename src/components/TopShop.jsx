import shopShelves from '../assets/images/shop-shelves.jpg'
import { ArrowRightIcon } from './Icons'

const POINTS = [
  'Disposable vapes and refill pods from Geek Bar, Lost Mary, Elf Bar, and Off Stamp',
  'Hookah and shisha from leading brands',
  'Kratom in every strain: Maeng Da, Red Vein, Green Vein, and White Vein',
  'Glass pipes, hand pipes, bangers, ash catchers, and bowls',
  'Grinders, lighters, rolling trays, and batteries',
  'Detox drinks, snacks, and everyday accessories',
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" >
      <rect x="1" y="1" width="18" height="18" rx="4" fill="#3CA43C" />
      <path
        d="M5.5 10.3l3 3 6-6.2"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function TopShop() {
  
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-[#1a1a17] sm:text-3xl">
          Austin&rsquo;s Top Smoke Shop for Vapes, THCA, Hookah &amp; Kratom
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#5c5b53] sm:text-base">
          Double Apple is more than your average smoke shop in Austin. We&rsquo;re one of the
          most complete hemp retailers in the city. Every product is lab-tested and legally
          compliant. We sell only to adults 21 and older.
        </p>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-2 ">
        <img
          src={shopShelves}
          alt="Double Apple shop shelves stocked with product"
          className="aspect-square w-full rounded-2xl object-cover"
        />

        <div>
          <p className="text-sm leading-relaxed text-[#5c5b53] sm:text-base">
            Our range covers everything a smoker needs. THCA flower, THC vapes, delta-9
            gummies, CBD oil, and THC drinks are all in stock. Each one meets Texas state
            regulations.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#5c5b53] sm:text-base">
            Looking for the top vape brands? We carry them all:
          </p>

          <ul className="mt-4 flex flex-col">
            {POINTS.map((point, i) => (
              <li
                key={point}
                className={`flex items-start gap-3 py-3.5  ${
                  i !== POINTS.length - 1 ? 'border-b border-black/10' : ''
                }`}
              >
                <CheckIcon />
                <span className="text-[15px] leading-relaxed text-[#1a1a17]">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm leading-relaxed text-[#5c5b53] sm:text-base">
            We serve customers across Central Texas. That includes Austin, Round Rock,
            Georgetown, Cedar Park, San Marcos, Kyle, Buda, Hutto, Taylor, and Waco. Wherever
            you are, Double Apple is your go-to smoke shop.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="/shop"
          className="inline-flex items-center gap-2  bg-[#3CA43C] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#345f2e]"
        >
          Explore Our Shop
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
