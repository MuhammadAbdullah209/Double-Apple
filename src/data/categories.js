// The site's own category labels (used in the UI, in URLs, and as the
// checkbox/state values) vs. the real category names Lightspeed uses on the
// synced catalogue — pulled from the account's full 93-category list, not
// just casing but sometimes different wording entirely (e.g. "Shisha" here
// vs. "SHISHA AND COAL" on Lightspeed). The backend's category filter is an
// exact single-value match, so every getProducts({ category }) call and the
// client-side re-filter after it must go through CATEGORY_REAL_NAME rather
// than sending/comparing the UI label directly — otherwise POS-synced
// products (which use the real Lightspeed names) never match.
export const CATEGORY_ORDER = [
  'Flower',
  'Vapes',
  'Kratom',
  'Refill Pods',
  'Ash Catcher',
  'Shisha',
  'Disposable Hookah',
  'Hookah Pot',
  'Coils / Pods',
]

export const CATEGORY_REAL_NAME = {
  Flower: 'FLOWER',
  Vapes: 'VAPES',
  Kratom: 'KRATOM',
  'Refill Pods': 'Refill pods',
  'Ash Catcher': 'ASH CATCHER',
  Shisha: 'SHISHA AND COAL',
  'Disposable Hookah': 'DISPOSABLE HOOKAH',
  'Hookah Pot': 'HOOKAH POT',
  'Coils / Pods': 'COIL',
}
