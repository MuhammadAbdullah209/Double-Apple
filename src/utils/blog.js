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
