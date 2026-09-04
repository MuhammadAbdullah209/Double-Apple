// Product photography stays on the existing local frontend assets rather than
// whatever image URL the backend returns for a product — this maps a
// product's category to one of our existing product photos.
import kratomBox from '../assets/images/kratom-opms-black-shots.jpg'
import vapePens from '../assets/images/vape-geekbar-pulse.jpg'
import flowerBud from '../assets/images/flower-thca-bud.jpg'
import refillPods from '../assets/images/refill-pods-lostmary.jpg'
import ashCatcher from '../assets/images/ash-catcher-raw.jpg'
import shisha from '../assets/images/shisha-hookah.jpg'
import disposableHookah from '../assets/images/disposable-hookah.jpg'
import coilsPods from '../assets/images/coils-pods-mod.jpeg'

const CATEGORY_IMAGE_RULES = [
  { match: /^flower$/i, image: flowerBud },
  { match: /^vapes?$/i, image: vapePens },
  { match: /kratom/i, image: kratomBox },
  { match: /refill/i, image: refillPods },
  { match: /ash.?catcher/i, image: ashCatcher },
  { match: /^shisha$/i, image: shisha },
  { match: /disposable.?hookah/i, image: disposableHookah },
  { match: /coil/i, image: coilsPods },
]

const DEFAULT_IMAGE = vapePens

export function getImageForCategory(category) {
  const rule = CATEGORY_IMAGE_RULES.find((r) => r.match.test(category || ''))
  return rule ? rule.image : DEFAULT_IMAGE
}
