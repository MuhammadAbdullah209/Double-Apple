import { Link } from 'react-router-dom'
import AreasWeServeCards from '../components/AreasWeServeCards'
import VisitUs from '../components/VisitUs'

const PAGE_TITLE = 'Privacy Policy'

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

export default function PrivacyPolicy() {
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
          <span aria-hidden="true">&#128274;</span> Privacy Policy
        </h2>
        <p className="mt-3 text-sm font-bold text-[#1a1a17]">Effective Date: [Insert Date]</p>
        <p className="mt-2 text-sm leading-relaxed text-[#4a4a43] sm:text-base">
          Double Apple respects your privacy and is committed to protecting your personal data.
        </p>

        <Section title="Information We Collect">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Personal data such as name, email address, shipping address, and payment details.</li>
            <li>Browsing data including cookies, IP address, and device information.</li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>To fulfill and manage orders</li>
            <li>To send order updates and promotional emails (if subscribed)</li>
            <li>To improve our website and user experience</li>
          </ul>
        </Section>

        <Section title="Sharing Your Information">
          <p>
            We do not sell or rent your information. We only share it with trusted service
            providers (e.g., shipping carriers, payment processors).
          </p>
        </Section>

        <Section title="Your Rights">
          <p>
            You may request access, correction, or deletion of your personal data by contacting
            us at{' '}
            <a
              href="mailto:doubleappless@gmail.com"
              className="font-semibold text-[#3c6e35] underline hover:text-[#2f5929]"
            >
              doubleappless@gmail.com
            </a>
            .
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            We use cookies to enhance your shopping experience. You can disable cookies in your
            browser settings.
          </p>
        </Section>
      </section>

      <AreasWeServeCards />
      <VisitUs />
    </>
  )
}
