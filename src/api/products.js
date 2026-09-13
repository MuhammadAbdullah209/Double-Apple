import api from './client'

// The Product collection is shared with Triple Buzz, distinguished only by
// `site` — every listing call here must pass it, or results would include
// Triple Buzz's (much larger, Lightspeed-synced) catalogue too.
export function getProducts({ page, limit, category, search, site = 'doubleapple' } = {}) {
  return api
    .get('/Product/allproducts', { params: { page, limit, category, search, site } })
    .then((r) => r.data)
}

export function getProductById(id) {
  return api.get(`/Product/${id}`).then((r) => r.data)
}
