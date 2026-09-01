import { useState } from 'react'
import { PlusIcon } from './Icons'

const FAQS = [
  {
    q: 'Where is Double Apple Smoke Shop located in Austin TX?',
    a: 'We are located at 11228 N Lamar Blvd Ste 100, Austin, TX 78753 in Austin. Easy parking is available with quick access from N Lamar Blvd.',
  },
  {
    q: 'What are your hours?',
    a: "We're open seven days a week. Check our contact page or call ahead for current holiday hours.",
  },
  {
    q: 'Do you carry THCA products?',
    a: 'Yes, we carry a wide range of lab-tested, legally compliant THCA flower, pre-rolls, and concentrates.',
  },
  {
    q: 'Do you offer online ordering and shipping?',
    a: 'We currently focus on in-store shopping so our team can help you find exactly what you need. Call the store to check availability.',
  },
  {
    q: 'What smoke shop products do you carry?',
    a: 'Vapes, hookah and shisha, kratom, CBD, glass pipes and bongs, ash catchers, grinders, and everyday smoking accessories.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-[860px] px-5 py-16 lg:px-10">
      <h2 className="text-center text-2xl font-bold leading-snug text-[#1a1a17] sm:text-3xl">
        Frequently Asked Questions &mdash; Double Apple Smoke Shop Austin, Tx
      </h2>

      <div className="mt-9 flex flex-col gap-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-xl border border-black/8 bg-white"
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-[#1a1a17]">{item.q}</span>
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#e7efe1] text-[#3c6e35] transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  <PlusIcon className="h-3.5 w-3.5" />
                </span>
              </button>
              {isOpen && (
                <p className="px-5 pb-4 text-sm leading-relaxed text-[#5c5b53]">{item.a}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
