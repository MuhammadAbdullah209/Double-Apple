import api from './client'

export function getAddresses() {
  return api.get('/Address').then((r) => r.data)
}

export function createAddress(payload) {
  return api.post('/Address', payload).then((r) => r.data)
}

export function updateAddress(id, payload) {
  return api.put(`/Address/${id}`, payload).then((r) => r.data)
}

export function deleteAddress(id) {
  return api.delete(`/Address/${id}`).then((r) => r.data)
}
