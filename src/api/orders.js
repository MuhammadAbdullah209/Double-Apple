import api from './client'

export function createOrder({ items, shippingAddress, paymentMethod, guestInfo }) {
  return api.post('/Order/create', { items, shippingAddress, paymentMethod, guestInfo }).then((r) => r.data)
}

export function getMyOrders(params) {
  return api.get('/Order', { params }).then((r) => r.data)
}

export function getOrderById(id) {
  return api.get(`/Order/${id}`).then((r) => r.data)
}

export function cancelOrder(id) {
  return api.put(`/Order/${id}`).then((r) => r.data)
}
