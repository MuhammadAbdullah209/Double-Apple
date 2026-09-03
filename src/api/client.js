import axios from 'axios'

// Always same-origin: the frontend's own domain proxies /Api, /Product, /Order
// and /Address to the real backend (see vite.config.js for dev, vercel.json for
// prod). The backend's domain is a different *site* from the frontend's (both
// are vercel.app subdomains, which is a public suffix), so the refreshToken
// cookie would be a genuinely cross-site cookie if requests went straight to
// it — browsers increasingly block those outright regardless of SameSite
// config. Routing through the frontend's own origin makes it a first-party
// cookie instead, which no browser blocks.
const api = axios.create({
  baseURL: '',
  withCredentials: true,
})

let accessToken = null
let onTokenChange = null

export function setAccessToken(token) {
  accessToken = token
}

export function onAccessTokenChange(handler) {
  onTokenChange = handler
}

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

let refreshPromise = null

function refreshAccessToken() {
  if (!refreshPromise) {
    refreshPromise = api
      .post('/Api/refresh-token')
      .then((res) => res.data.accessToken)
      .finally(() => {
        refreshPromise = null
      })
  }
  return refreshPromise
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config
    const status = error.response?.status
    const expired = error.response?.data?.expired

    if (status === 401 && expired && original && !original._retried) {
      original._retried = true
      try {
        const newToken = await refreshAccessToken()
        accessToken = newToken
        if (onTokenChange) onTokenChange(newToken)
        original.headers.Authorization = `Bearer ${newToken}`
        return api(original)
      } catch (refreshError) {
        accessToken = null
        if (onTokenChange) onTokenChange(null)
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export { refreshAccessToken }
export default api
