import { useState } from 'react'
import { Link } from 'react-router-dom'
import VisitUs from '../components/VisitUs'
import { ArrowRightIcon } from '../components/Icons'
import shopShelves from '../assets/images/shop-shelves.jpg'
import vapePens from '../assets/images/vape-pens.jpg'
import kratomBox from '../assets/images/kratom-box.jpg'
import storeInterior from '../assets/images/store-interior.jpg'
import heroBanner from '../assets/images/hero-banner.jpg'
import newsletterBg from '../assets/images/newsletter-bg.jpg'

function CalendarIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  )
}

function CommentIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path
        d="M4 5h16v11H8l-4 4V5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const POSTS = [
  {
    image: shopShelves,
    title: 'Kick Back With The Best Shisha In Austin At Double Apple Smoke Shop',
    excerpt:
      "If you're looking for great shisha in Austin, Double Apple Smoke Shop is a fantastic place to start. Whether you're a first-timer or a regular, our team can point you...",
    date: '09/23/2024',
    comments: 0,
  },
  {
    image: vapePens,
    title: 'Why Double Apple Smoke Shop Is The Best Vape Shop In Austin',
    excerpt:
      'Looking for a smoke shop in Austin that actually has what you need? Double Apple has been the go-to spot for disposables, pod systems, and refill pods for years...',
    date: '09/18/2024',
    comments: 2,
  },
  {
    image: kratomBox,
    title: 'Discover Quality Kratom In Austin At Double Apple',
    excerpt:
      'From Maeng Da to Red Vein, our kratom selection is lab-tested and always in stock. Here is what to know before you pick your first strain at Double Apple...',
    date: '09/10/2024',
    comments: 1,
  },
  {
    image: storeInterior,
    title: 'Discover The Best Vape Pens In Austin By Double Apple',
    excerpt:
      'When it comes to vaping, quality products and reliable service make all the difference, and that is exactly why so many Austin shoppers choose Double Apple...',
    date: '09/03/2024',
    comments: 0,
  },
  {
    image: heroBanner,
    title: 'Best Refill Pods In Austin From Double Apple Smoke Shop',
    excerpt:
      'Double Apple Smoke Shop in Austin offers premium refill pods from trusted brands, smooth hits, and long-lasting sessions. Here are our current customer favorites...',
    date: '08/27/2024',
    comments: 3,
  },
  {
    image: newsletterBg,
    title: 'Elevate Your Smoking Experience With Double Apple Smoke Shop',
    excerpt:
      'Looking for a place to browse high-quality glass, vape gear, and accessories that make every session better? Double Apple Smoke Shop has you covered...',
    date: '08/20/2024',
    comments: 1,
  },
]

const TOTAL_PAGES = 3

export default function Blog() {
  const [page, setPage] = useState(1)

  return (
    <>
      <div className="w-full border-b border-black/10 bg-white px-6 py-3.5 sm:px-8 lg:px-10">
        <nav className="flex items-center gap-2 text-[13px] text-[#666]">
          <Link to="/" className="hover:text-[#3c6e35]">
            Home
          </Link>
          <span>/</span>
          <span>Blog</span>
        </nav>
      </div>

      <section className="mx-auto max-w-[1280px] px-5 py-10 lg:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="flex flex-col">
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-[#3c6e35]">
                Smoke Shop in Austin
              </p>
              <div className="mt-1.5 flex items-center gap-3 text-xs text-[#9a988e]">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <CommentIcon />
                  {post.comments} Comment{post.comments === 1 ? '' : 's'}
                </span>
              </div>
              <h2 className="mt-2.5 text-base font-extrabold leading-snug text-[#1a1a17]">
                {post.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#6b6b6b]">{post.excerpt}</p>
              <a
                href="#"
                className="mt-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#3c6e35] hover:underline"
              >
                Read More
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i + 1)}
              className={`grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition ${
                page === i + 1
                  ? 'bg-[#3CA43C] text-white'
                  : 'border border-black/15 text-[#4a4a43] hover:bg-black/5'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>

      <VisitUs />
    </>
  )
}
