import api from './client'

// Double Apple and Triple Buzz share this backend but moderate reviews
// separately — this tag is how admin moderation tells them apart.
const SITE = 'doubleapple'

export function getProductReviews(productId, sort) {
  return api.get(`/Review/${productId}`, { params: { sort } }).then((r) => r.data)
}

export function writeReview(productId, { rating, comment }) {
  return api.post(`/Review/${productId}`, { rating, comment, site: SITE }).then((r) => r.data)
}

export function deleteReview(productId) {
  return api.delete(`/Review/${productId}`).then((r) => r.data)
}

export function getMyReviews() {
  return api.get('/Review/mine').then((r) => r.data)
}
