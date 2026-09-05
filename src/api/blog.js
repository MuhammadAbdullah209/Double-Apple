import api from './client'

// Double Apple and Triple Buzz share this backend but publish separate blogs —
// this tag is how the backend knows which storefront's posts to return.
const SITE = 'doubleapple'

export function getBlogs({ page, limit, category } = {}) {
  return api.get('/Blog', { params: { page, limit, category, site: SITE } }).then((r) => r.data)
}

export function getBlogById(id) {
  return api.get(`/Blog/${id}`).then((r) => r.data)
}
