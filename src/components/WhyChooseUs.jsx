import { LeafIcon } from './Icons'
import leafPattern from '../assets/images/leaf-pattern.webp'

const STATS = [
  { title: 'Largest Selection', text: 'Over 2,000 products across vapes, THCA, hookah, kratom, CBD, glass, and accessories' },
  { title: 'Best Prices in Austin', text: 'We price match and always offer the most competitive rates on every product' },
  { title: 'Always In Stock', text: 'New arrivals every week so you always find the latest and best products' },
  { title: 'Open Late 7 Days', text: 'Open daily from 8AM to 12AM so we are always here when you need us' },
]

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#eef4e9] px-5 py-16 lg:px-10">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${leafPattern})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#1a1a17] sm:text-3xl">
            Why Double Apple Smoke Shop Is Austin&rsquo;s Top-Rated Smoke Shop
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5c5b53] sm:text-base">
            Since 2018, Double Apple Smoke Shop has built a reputation as the most reliable and
            well-stocked smoke shop in Austin Texas. Here is why thousands of Austin customers
            keep coming back:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 rounded-2xl border-2 border-[#3c6e35] bg-white p-6 text-center"
              style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)" }}
            >
              <LeafIcon className="h-9 w-9 text-[#3c6e35]" />
              <p className="text-sm font-bold text-[#1a1a17]">{s.title}</p>
              <p className="text-xs leading-relaxed text-[#7a7a72]">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
