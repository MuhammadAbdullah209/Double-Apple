import api from './client'

export function getProductReviews(productId, sort) {
  return api.get(`/Review/${productId}`, { params: { sort } }).then((r) => r.data)
}

export function writeReview(productId, { rating, comment }) {
  return api.post(`/Review/${productId}`, { rating, comment }).then((r) => r.data)
}

export function deleteReview(productId) {
  return api.delete(`/Review/${productId}`).then((r) => r.data)
}

export function getMyReviews() {
  return api.get('/Review/mine').then((r) => r.data)
}
