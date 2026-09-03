import { Link } from 'react-router-dom'
import AreasWeServeCards from '../components/AreasWeServeCards'
import VisitUs from '../components/VisitUs'

const PAGE_TITLE = 'Terms of Service'

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
      <path d="M3 11l9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Section({ number, title, children }) {
  return (
    <div className="mt-8">
      <h3 className="text-base font-bold text-[#1a1a17] sm:text-lg">
        {number}. {title}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-[#4a4a43] sm:text-base">{children}</div>
    </div>
  )
}

export default function TermsOfService() {
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
        <h2 className="flex items-center gap-2 text-xl font-bold text-[#1a1a17] sm:text-2xl">
          <span aria-hidden="true">&#128220;</span> Terms of Service
        </h2>
        <p className="mt-3 text-sm font-bold text-[#1a1a17]">Effective Date: [Insert Date]</p>
        <p className="mt-2 text-sm leading-relaxed text-[#4a4a43] sm:text-base">
          Welcome to Double Apple. By using our website and purchasing from our store, you agree
          to the following terms and conditions.
        </p>

        <Section number={1} title="Age Restriction">
          <p>
            You must be at least 21 years of age to purchase any products from Double Apple. We
            reserve the right to request ID verification.
          </p>
        </Section>

        <Section number={2} title="Product Use">
          <p>
            Our products are intended for adult use only. By purchasing, you confirm
            understanding of and compliance with local laws regarding product usage.
          </p>
        </Section>

        <Section number={3} title="Limitation of Liability">
          <p>
            Double Apple is not responsible for misuse of products or failure to comply with
            local laws. Use all products at your own risk.
          </p>
        </Section>

        <Section number={4} title="Pricing and Availability">
          <p>
            Prices and availability are subject to change without notice. We reserve the right
            to correct pricing errors and cancel any affected orders.
          </p>
        </Section>

        <Section number={5} title="Termination">
          <p>
            We reserve the right to refuse service or terminate accounts for any violation of
            these terms.
          </p>
        </Section>
      </section>

      <AreasWeServeCards />
      <VisitUs />
    </>
  )
}
