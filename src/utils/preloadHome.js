// Everything the home page renders that comes from the backend: Collections'
// one-representative-product-per-category strip and the three CategoryShowcase
// sections (Kratom / Disposable Hookah / Hookah Pot). Each of those normally
// fires its own getProducts() call on mount; this warms all of them up front
// (app boot, or a hover over a link to "/") and caches the promise per
// (category, limit) pair so whichever component mounts afterward reuses the
// already-in-flight/settled request instead of firing a second, redundant one.

import { getProducts } from '../api/products'
import { CATEGORY_ORDER, CATEGORY_REAL_NAME } from '../data/categories'

const CATEGORY_SHOWCASE_SECTIONS = [
  { category: 'Kratom', limit: 6 },
  { category: 'Disposable Hookah', limit: 6 },
  { category: 'Hookah Pot', limit: 6 },
]

const cache = new Map()

// Used by Collections.jsx and CategoryShowcase.jsx directly, not just by the
// preloader below, so both ever call getProducts() through this one cache.
export function getHomeCategoryProducts(category, limit) {
  const realCategory = CATEGORY_REAL_NAME[category]
  const key = `${realCategory}::${limit}`
  let promise = cache.get(key)
  if (!promise) {
    promise = getProducts({ category: realCategory, limit }).catch((err) => {
      cache.delete(key)
      throw err
    })
    cache.set(key, promise)
  }
  return promise
}

// Call as early as possible: on app boot, and again on hover/focus of any
// link to "/" as a cheap safety net for whichever page the user started on.
// Cheap to call repeatedly — getHomeCategoryProducts already dedupes via the
// cache above, so a repeat call is just a handful of Map lookups.
export function preloadHomePage() {
  for (const category of CATEGORY_ORDER) {
    getHomeCategoryProducts(category, 1)
  }
  for (const { category, limit } of CATEGORY_SHOWCASE_SECTIONS) {
    getHomeCategoryProducts(category, limit)
  }
}
