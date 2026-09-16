import api from './client'

// The announcement ribbon polls this for whatever coupon the admin portal
// currently has flagged "show on ribbon" for this storefront — returns
// { coupon: null } when nothing is featured (or the featured one has
// expired), so the ribbon simply doesn't render.
export function fetchRibbonCoupon(site = 'doubleapple') {
  return api.get('/Coupon/ribbon', { params: { site } }).then((r) => r.data)
}

// Previews a coupon's discount against the current cart total before
// checkout. The actual discount is re-validated and re-applied server-side
// when the order is created, so this is just for showing the customer what
// they'll get — never trusted as the final charged amount.
export function validateCoupon(code, cartTotal, site = 'doubleapple') {
  return api.post('/Coupon/validate', { code, cartTotal, site }).then((r) => r.data)
}
