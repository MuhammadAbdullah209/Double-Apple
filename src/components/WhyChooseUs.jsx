import { LeafIcon } from './Icons'

const LEAF_URL = 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Cannabis_leaf.svg'

const STATS = [
  { title: 'Largest Selection', text: 'Over 2,000 products across vapes, THCA, hookah, kratom, CBD, glass, and accessories' },
  { title: 'Largest Selection', text: 'Over 2,000 products across vapes, THCA, hookah, kratom, CBD, glass, and accessories' },
  { title: 'Largest Selection', text: 'Over 2,000 products across vapes, THCA, hookah, kratom, CBD, glass, and accessories' },
  { title: 'Largest Selection', text: 'Over 2,000 products across vapes, THCA, hookah, kratom, CBD, glass, and accessories' },
]

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#eef4e9] px-5 py-16 lg:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${LEAF_URL})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '160px 160px',
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
