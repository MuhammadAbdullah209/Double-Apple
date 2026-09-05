import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRightIcon, SocialIcon, UserIcon } from '../components/Icons'
import VisitUs from '../components/VisitUs'
import { getBlogs } from '../api/blog'
import { authorName, formatBlogDate } from '../utils/blog'

function CalendarIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  )
}

function PinterestIcon({ className = 'h-4 w-4' }) {
  return (
    <span
      className={`grid place-items-center rounded-full bg-current text-[9px] font-black text-white ${className}`}
      aria-hidden="true"
    >
      P
    </span>
  )
}

function ChevronIcon({ direction = 'left', className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path
        d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RelatedCarousel({ posts }) {
  const [start, setStart] = useState(0)
  const count = Math.min(3, posts.length)
  const visible = Array.from({ length: count }, (_, i) => posts[(start + i) % posts.length])

  return (
    <div>
      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => setStart((s) => (s - 1 + posts.length) % posts.length)}
          className="absolute left-0 top-1/3 z-10 hidden h-9 w-9 -translate-x-4 -translate-y-1/2 place-items-center rounded-full bg-white text-[#1a1a17] shadow-md hover:bg-black/5 sm:grid"
        >
          <ChevronIcon direction="left" />
        </button>
        {visible.map((post) => (
          <Link
            key={post._id}
            to={`/blog/${post._id}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white"
          >
            {post.image?.url ? (
              <img src={post.image.url} alt={post.title} className="aspect-[4/3] w-full object-cover" />
            ) : (
              <div className="aspect-[4/3] w-full bg-[#eef4e9]" />
            )}
            <div className="p-4">
              <div className="flex items-center gap-3 text-xs text-[#9a988e]">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon />
                  {formatBlogDate(post.createdAt)}
                </span>
              </div>
              <p className="mt-2 text-sm font-extrabold leading-snug text-[#1a1a17] group-hover:text-[#3c6e35]">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
        <button
          type="button"
          aria-label="Next"
          onClick={() => setStart((s) => (s + 1) % posts.length)}
          className="absolute right-0 top-1/3 z-10 hidden h-9 w-9 -translate-y-1/2 translate-x-4 place-items-center rounded-full bg-white text-[#1a1a17] shadow-md hover:bg-black/5 sm:grid"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {posts.map((post, i) => (
          <button
            key={post._id}
            type="button"
            aria-label={`Go to ${post.title}`}
            onClick={() => setStart(i)}
            className={`h-2 rounded-full transition-all ${
              i === start ? 'w-6 bg-[#3CA43C]' : 'w-2 bg-black/15'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function BlogDetail() {
  const { id } = useParams()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    window.scrollTo({ top: 0 })
    getBlogs({ limit: 100 })
      .then((data) => setPosts(data.blogs || []))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <p className="py-24 text-center text-sm text-[#7a7a72]">Loading&hellip;</p>
  }

  const post = posts.find((p) => p._id === id)

  if (error || !post) {
    return (
      <section className="mx-auto max-w-[860px] px-5 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#1a1a17]">
          {error ? 'Could not load this post' : 'Post not found'}
        </h1>
        <Link to="/blog" className="mt-4 inline-block text-sm font-semibold text-[#3c6e35] hover:underline">
          &larr; Back to Blog
        </Link>
      </section>
    )
  }

  const index = posts.indexOf(post)
  const prevPost = posts[index - 1]
  const nextPost = posts[index + 1]
  const otherPosts = posts.filter((p) => p !== post)
  const paragraphs = post.content.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <>
      <section className="relative flex h-[320px] items-end sm:h-[400px]">
        {post.image?.url ? (
          <img src={post.image.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-[#3c6e35]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-[900px] px-5 pb-8 lg:px-10">
          <h1 className="text-2xl font-bold leading-snug text-white sm:text-3xl">{post.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-white/80">
            <span className="flex items-center gap-1.5">
              <CalendarIcon />
              {formatBlogDate(post.createdAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <UserIcon className="h-3.5 w-3.5" />
              {authorName(post.author)}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-10 lg:px-10">
        <div className="flex flex-col gap-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="mb-3 text-sm leading-relaxed text-[#4a4a43] sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
          {post.category && (
            <span className="flex items-center gap-1.5 rounded-full bg-[#eef4e9] px-3 py-1.5 text-xs font-semibold text-[#3c6e35]">
              &#127991; {post.category}
            </span>
          )}
          <div className="flex items-center gap-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-[#4a4a43] transition hover:bg-[#3c6e35] hover:text-white"
            >
              <SocialIcon type="facebook" className="h-3.5 w-3.5" />
            </a>
            <a
              href={`https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-[#4a4a43] transition hover:bg-[#3c6e35] hover:text-white"
            >
              <SocialIcon type="twitter" className="h-3.5 w-3.5" />
            </a>
            <a
              href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Pinterest"
              className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-[#4a4a43] transition hover:bg-[#3c6e35] hover:text-white"
            >
              <PinterestIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {(prevPost || nextPost) && (
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-black/10 pt-6 sm:grid-cols-2">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost._id}`}
                className="group flex items-center gap-3 rounded-xl border border-black/10 p-4 hover:border-[#3CA43C]/40"
              >
                {prevPost.image?.url && (
                  <img src={prevPost.image.url} alt="" className="h-14 w-14 shrink-0 rounded-md object-cover" />
                )}
                <div className="min-w-0">
                  <p className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-[#9a988e]">
                    <ChevronIcon direction="left" className="h-3 w-3" /> Previous Post
                  </p>
                  <p className="truncate text-sm font-bold text-[#1a1a17] group-hover:text-[#3c6e35]">
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            ) : (
              <span />
            )}
            {nextPost && (
              <Link
                to={`/blog/${nextPost._id}`}
                className="group flex items-center justify-end gap-3 rounded-xl border border-black/10 p-4 text-right hover:border-[#3CA43C]/40 sm:flex-row-reverse sm:text-left"
              >
                {nextPost.image?.url && (
                  <img src={nextPost.image.url} alt="" className="h-14 w-14 shrink-0 rounded-md object-cover" />
                )}
                <div className="min-w-0">
                  <p className="flex items-center justify-end gap-1 text-[11px] font-bold uppercase tracking-wide text-[#9a988e] sm:justify-start">
                    Next Post <ArrowRightIcon className="h-3 w-3" />
                  </p>
                  <p className="truncate text-sm font-bold text-[#1a1a17] group-hover:text-[#3c6e35]">
                    {nextPost.title}
                  </p>
                </div>
              </Link>
            )}
          </div>
        )}
      </section>

      {otherPosts.length > 0 && (
        <section className="border-t border-black/10 bg-[#f6f5f1] px-5 py-12 lg:px-10">
          <h2 className="text-center text-2xl font-bold text-[#1a1a17]">You May Also Like</h2>
          <div className="mx-auto mt-8 max-w-[1100px]">
            <RelatedCarousel posts={otherPosts} />
          </div>
        </section>
      )}

      <VisitUs />
    </>
  )
}
