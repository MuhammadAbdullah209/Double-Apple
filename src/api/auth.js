import api from './client'

export function register({ firstname, lastname, email, password, phno }) {
  return api.post('/Api/register', { firstname, lastname, email, password, phno }).then((r) => r.data)
}

export function login(email, password) {
  return api.post('/Api/login', { email, password }).then((r) => r.data)
}

export function verifyOtp(email, otp) {
  return api.post('/Api/verify', { email, otp }).then((r) => r.data)
}

export function reverify(email) {
  return api.post('/Api/reverify', { email }).then((r) => r.data)
}

export function logout() {
  return api.post('/Api/logout').then((r) => r.data)
}

export function getProfile() {
  return api.get('/Api/').then((r) => r.data)
}

export function updateProfile(payload) {
  return api.put('/Api/update', payload).then((r) => r.data)
}
