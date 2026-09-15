export function authorName(author) {
  if (!author || typeof author === 'string') return 'Double Apple Team'
  const name = [author.firstname, author.lastname].filter(Boolean).join(' ')
  return name || 'Double Apple Team'
}

export function formatBlogDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}

// Generates a clean URL slug from a blog title, e.g.
// "Al Fakher Rose 250g – Review" → "al-fakher-rose-250g-review"
export function slugifyBlog(title) {
  return (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
