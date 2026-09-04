import kratomBox from '../assets/images/kratom-box.jpg'
import vapePens from '../assets/images/vape-pens.jpg'
import { useNavigate } from 'react-router-dom'

const ITEMS = [
  { name: 'Flower', desc: 'THCA flower & pre-rolls', image: vapePens },
  { name: 'Vapes', desc: 'Disposables, kits, pod systems', image: vapePens },
  { name: 'Kratom', desc: 'Maeng Da, Red, Green, White', image: kratomBox },
  { name: 'Refill Pods', desc: 'Lost Mary, Foger, Fogger', image: kratomBox },
  { name: 'Ash Catcher', desc: 'Glass ash catchers', image: vapePens },
  { name: 'Shisha', desc: 'Premium hookah tobacco', image: kratomBox },
  { name: 'Disposable Hookah', desc: 'E-hookah, up to 60K puffs', image: vapePens },
  { name: 'Coils / Pods', desc: 'Replacements & spares', image: kratomBox },
]

export default function Collections() {
  const navigator = useNavigate();
  return (
    <section id="collections" className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
      <div className="mb-6 flex items-end justify-between border-b border-black/10 pb-4">
        <h2 className="text-2xl font-bold text-[#1a1a17] sm:text-3xl">Premium collections</h2>
        <a
          href="/shop"
          className="text-xs font-semibold uppercase tracking-wide text-[#3c6e35] hover:underline"
        >
          View all categories
        </a>
      </div>

      <div className="grid grid-cols-2 divide-x divide-y divide-black/10 border border-black/10 sm:grid-cols-4">
        {ITEMS.map((item) => (
          <a key={item.name} href="/shop" className="group block p-5">
            <img
              src={item.image}
              alt={item.name}
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <div className="pt-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[15px] font-bold text-[#1a1a17]">{item.name}</p>
                <span className="text-[11px] font-semibold uppercase tracking-wide text-[#3c6e35] transition group-hover:underline" onClick={() => navigator('/shop')}>
                  Shop
                </span>
              </div>
              <p className="mt-1 text-[12px] text-[#8a897f]">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
