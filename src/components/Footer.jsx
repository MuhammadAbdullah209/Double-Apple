import { Link } from 'react-router-dom'
import { SocialIcon } from './Icons'
import logo from '../assets/images/doubleapple.png'

const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/Doubleapplesmokeshop/',
  instagram: 'https://www.instagram.com/doubleapplesmokeatx/',
  twitter: 'https://x.com/ShopDouble10142',
  tiktok: 'https://www.tiktok.com/@doubleapplesmokes5',
  youtube: 'https://www.youtube.com/@DoubleSmoke',
}

const LINK_ROUTES = {
  'About Us': '/about-us',
  'Contact Us': '/contact-us',
  Blog: '/blog',
  FAQ: '/faq',
  'Privacy Policy': '/privacy-policy',
  Returns: '/return-policy',
  Shipping: '/shipping-policy',
  'Terms of Services': '/terms-of-service',
  'Refund Policy': '/refund-policy',
  // Shop column — routes to the Shop page pre-filtered by category (matches
  // Shop.jsx's CATEGORIES list). "Hookah" maps to its closest real category;
  // "Accessories" has no matching category there, so it links to the
  // unfiltered shop instead of a misleading filter.
  Flower: '/shop?category=Flower',
  Vapes: '/shop?category=Vapes',
  Kratom: '/shop?category=Kratom',
  Hookah: '/shop?category=Disposable Hookah',
  'Refill Pods': '/shop?category=Refill Pods',
  Accessories: '/shop',
}

const COLUMNS = [
  {
    title: 'About',
    links: ['About Us', 'Blog', 'Contact Us'],
  },
  {
    title: 'Shop',
    links: ['Flower', 'Vapes', 'Kratom', 'Hookah', 'Refill Pods', 'Accessories'],
  },
  {
    title: 'Support',
    links: ['FAQ', 'Shipping', 'Returns', 'Privacy Policy', 'Terms of Services', 'Refund Policy'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#111310] px-5 pb-6 pt-14 text-white/80 lg:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center">
            <span className="flex h-[44px] w-fit shrink-0 items-center overflow-hidden rounded-[3px] bg-white px-[10px]">
              <img src={logo} alt="Double Apple" className="h-[30px] w-auto object-contain" />
            </span>
          </div>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/50">
            Double Apple Smoke and Vape offers high-quality premium smoke products, expert
            guidance, and a customer-first approach, making us the top choice in Austin and
            Central Texas.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {['facebook', 'instagram', 'twitter', 'tiktok', 'youtube'].map((s) => (
              <a
                key={s}
                href={SOCIAL_LINKS[s]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/70 transition hover:bg-[#3c6e35] hover:text-white"
              >
                <SocialIcon type={s} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-bold uppercase tracking-wide text-white">{col.title}</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {col.links.map((link) =>
                LINK_ROUTES[link] ? (
                  <li key={link}>
                    <Link
                      to={LINK_ROUTES[link]}
                      className="text-[13px] text-white/55 transition hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ) : (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-white/55 transition hover:text-white">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <p className="mx-auto max-w-[1280px] pt-6 text-center text-xs text-white/40">
        &copy; 2026 Double Apple Smoke and Vape. All rights reserved.
      </p>
    </footer>
  )
}
