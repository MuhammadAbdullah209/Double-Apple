import api from './client'

export function getWishlist() {
  return api.get('/Wishlist').then((r) => r.data)
}

export function addToWishlist(productId) {
  return api.post(`/Wishlist/${productId}`).then((r) => r.data)
}

export function removeFromWishlist(productId) {
  return api.delete(`/Wishlist/${productId}`).then((r) => r.data)
}
