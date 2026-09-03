import { Link } from 'react-router-dom'
import AreasWeServeCards from '../components/AreasWeServeCards'
import VisitUs from '../components/VisitUs'

const PAGE_TITLE = 'Austin Smoke Shop FAQ - Hookah, Vape, Kratom & Glass Questions'

const FAQS = [
  {
    q: 'What are your store hours?',
    a: 'Double Apple Smoke Shop is open from 8:00 AM until 12:00 AM (midnight) every day of the week, including weekends and holidays. We are one of the only smoke shops in Austin open until midnight seven days a week.',
  },
  {
    q: 'Where is Double Apple Smoke Shop located?',
    a: 'We are located at 11220 N Lamar Blvd, Suite B202, Austin, TX 78753, in North Austin between Rundberg Lane and Braker Lane just off N Lamar Boulevard.',
  },
  {
    q: 'Do you sell hookahs and shisha in Austin?',
    a: 'Yes. We carry the largest selection of hookahs in Austin including Khalil Mamoon, Starbuzz, Amy Deluxe, MYA, and B2 hookahs. We also stock shisha flavors from Al Fakher, Starbuzz, Fumari, Tangiers, Adalya, and more, plus charcoal, hoses, bowls, foil, and every hookah accessory.',
  },
  {
    q: 'What vape brands do you carry?',
    a: 'We stock all of the most popular disposable and refillable vapes including Elf Bar, Lost Mary, Geek Bar, Funky Republic, Raz, Hyde, Esco Bars, Fume, North, and Juul. New flavors arrive every week and we price-match local Austin competitors on most items.',
  },
  {
    q: 'Do you sell kratom in Austin?',
    a: 'Yes. We carry kratom capsules, powders, extracts, and shots from OPMS Gold, OPMS Silver, Hush, MIT45, Krave, Whole Herbs, and other trusted brands. Our staff can help first-time customers understand the different strains and what to expect.',
  },
  {
    q: 'Do you sell Delta 8, Delta 9, THCa, and CBD products?',
    a: 'Yes. We carry a wide selection of legal hemp-derived Delta 8, Delta 9, THCa flower, vapes, gummies, tinctures, and CBD products from licensed Texas compliant brands.',
  },
  {
    q: 'Do you carry glass pipes and dab rigs?',
    a: 'Yes. We have hundreds of American-made and imported glass pieces including water pipes, bubblers, hand pipes, chillums, dab rigs, bangers, carb caps, and heady glass. Prices range from beginner-friendly to high-end collector pieces.',
  },
  {
    q: 'Do you offer local pickup or delivery in Austin?',
    a: 'We offer in-store shopping at our North Austin location seven days a week. Call (512) 351-8012 to check current stock before driving over.',
  },
  {
    q: 'Do you have a rewards or loyalty program?',
    a: 'Yes. Ask any of our team members at checkout about signing up for our Austin local rewards program to earn points on every purchase.',
  },
  {
    q: 'What is your return policy?',
    a: 'Due to the nature of tobacco, vape, kratom, and consumable products, all sales are final. Defective devices may be eligible for manufacturer warranty exchange. Please inspect glass pieces in-store before leaving.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve all of the Greater Austin area including Round Rock, Pflugerville, Cedar Park, Leander, Georgetown, Hutto, Manor, Kyle, Buda, and surrounding Central Texas communities. Many customers drive from 78753, 78758, 78752, 78754, 78759, and 78727 because of our selection and late hours.',
  },
]

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
      <path d="M3 11l9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQPage() {
  return (
    <>
      <section className="mx-auto max-w-[860px] px-5 pb-4 pt-12 text-center lg:px-10">
        <h1 className="text-2xl font-bold leading-snug text-[#1a1a17] sm:text-3xl">
          {PAGE_TITLE}
        </h1>
        <nav className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-[#9a988e]">
          <Link to="/" className="flex items-center gap-1 hover:text-[#3c6e35]">
            <HomeIcon /> Home
          </Link>
          <span>|</span>
          <span>{PAGE_TITLE}</span>
        </nav>
      </section>

      <section className="mx-auto max-w-[860px] px-5 pb-16 pt-6 lg:px-10">
        <p className="text-sm leading-relaxed text-[#3c6e35] sm:text-base">
          Frequently asked questions from our Austin customers about hookah, vapes, kratom,
          glass, and smoke shop products.
        </p>

        <div className="mt-8 flex flex-col gap-7">
          {FAQS.map((item) => (
            <p key={item.q} className="text-sm leading-relaxed text-[#3c6e35] sm:text-base">
              <span className="font-semibold text-[#1a1a17]">{item.q}</span> {item.a}
            </p>
          ))}
        </div>
      </section>

      <AreasWeServeCards />
      <VisitUs />
    </>
  )
}
