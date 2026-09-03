import { Link } from 'react-router-dom'
import AreasWeServeCards from '../components/AreasWeServeCards'
import VisitUs from '../components/VisitUs'

const PAGE_TITLE = 'Refund Policy'

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

export default function RefundPolicy() {
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
          <span aria-hidden="true">&#128176;</span> Refund Policy
        </h2>
        <p className="mt-3 text-sm font-bold text-[#1a1a17]">Last updated: June 12, 2026</p>
        <p className="mt-2 text-sm leading-relaxed text-[#4a4a43] sm:text-base">
          All sales are final. We do not accept returns or exchanges unless the product arrives
          defective or is not working.
        </p>

        <Section title="Refund Eligibility">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Returns or exchanges are only available for defective or non-working items.</li>
            <li>
              Consumable products (e-liquids, THCA, flower, etc.) are non-refundable once opened.
            </li>
            <li>Requests for defective or non-working items must be made within 14 days of receipt.</li>
          </ul>
        </Section>

        <Section title="Refund Process">
          <p>
            To request a refund or exchange, email{' '}
            <a
              href="mailto:sales@doubleapplesmokeshop.com"
              className="font-semibold text-[#3c6e35] underline hover:text-[#2f5929]"
            >
              sales@doubleapplesmokeshop.com
            </a>{' '}
            with your order number and photos of the item (if defective or not working). Once
            approved, the refund will be issued to the original payment method within 5&ndash;7
            business days.
          </p>
        </Section>
      </section>

      <AreasWeServeCards />
      <VisitUs />
    </>
  )
}
