import api from './client'

export function subscribeNewsletter(email) {
  return api.post('/Newsletter/subscribe', { email }).then((r) => r.data)
}
