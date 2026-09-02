import api from './client'

export function getProducts({ page, limit, category, search } = {}) {
  return api
    .get('/Product/allproducts', { params: { page, limit, category, search } })
    .then((r) => r.data)
}

export function getProductById(id) {
  return api.get(`/Product/${id}`).then((r) => r.data)
}
