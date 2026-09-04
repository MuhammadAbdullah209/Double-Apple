import { useState } from 'react'
import { Link } from 'react-router-dom'
import VisitUs from '../components/VisitUs'
import { ArrowRightIcon } from '../components/Icons'
import { BLOG_POSTS, slugify } from '../data/blogPosts'

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

const POSTS_PER_PAGE = 2

export default function Blog() {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE))
  const visiblePosts = BLOG_POSTS.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

  const goToPage = (n) => {
    setPage(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
          {visiblePosts.map((post) => (
            <article key={post.title} className="flex flex-col">
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-[#3c6e35]">
                {post.tag}
              </p>
              <div className="mt-1.5 flex items-center gap-3 text-xs text-[#9a988e]">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  })}
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
              <Link
                to={`/blog/${slugify(post.title)}`}
                className="mt-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#3c6e35] hover:underline"
              >
                Read More
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i + 1)}
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
        )}
      </section>

      <VisitUs />
    </>
  )
}
