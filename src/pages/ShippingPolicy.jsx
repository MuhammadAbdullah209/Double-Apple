import { Link } from 'react-router-dom'
import AreasWeServeCards from '../components/AreasWeServeCards'
import VisitUs from '../components/VisitUs'

const PAGE_TITLE = 'Shipping Policy'

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
      <path d="M3 11l9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Section({ title, children }) {
  return (
    <div className="mt-8">
      <h3 className="text-base font-bold text-[#1a1a17] sm:text-lg">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-[#4a4a43] sm:text-base">{children}</div>
    </div>
  )
}

export default function ShippingPolicy() {
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
          <span aria-hidden="true">&#128230;</span> Shipping Policy
        </h2>
        <p className="mt-3 text-sm font-bold text-[#1a1a17]">Last updated: [Insert Date]</p>
        <p className="mt-2 text-sm leading-relaxed text-[#4a4a43] sm:text-base">
          At Double Apple, we are committed to ensuring your order reaches you quickly, securely,
          and efficiently.
        </p>

        <Section title="Shipping Times">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Orders are processed within 1&ndash;2 business days.</li>
            <li>
              Delivery times vary depending on your location, typically ranging from 3&ndash;7
              business days within the U.S.
            </li>
            <li>We do not ship on weekends or holidays.</li>
          </ul>
        </Section>

        <Section title="Shipping Methods">
          <p>
            We offer multiple shipping options at checkout through trusted carriers. Tracking
            information will be sent once your order ships.
          </p>
        </Section>

        <Section title="Shipping Restrictions">
          <p>
            Due to local regulations, we do not ship to certain states or regions that restrict
            the sale of vaping or THCA products. Orders with restricted products will be
            cancelled and refunded.
          </p>
        </Section>

        <Section title="Lost or Stolen Packages">
          <p>
            Double Apple is not responsible for lost or stolen packages marked as delivered.
            Please contact the carrier or your local postal service for assistance.
          </p>
        </Section>

        <Section title="Order Changes">
          <p>
            Once an order is placed, we are unable to modify shipping addresses or item
            selections. Please review your order carefully before confirming.
          </p>
        </Section>
      </section>

      <AreasWeServeCards />
      <VisitUs />
    </>
  )
}
