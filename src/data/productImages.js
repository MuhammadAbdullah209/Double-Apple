// Product photography stays on the existing local frontend assets rather than
// whatever image URL the backend returns for a product — this maps a
// product's category to one of our existing product photos.
import kratomBox from '../assets/images/kratom-box.jpg'
import vapePens from '../assets/images/vape-pens.jpg'

const CATEGORY_IMAGE_RULES = [
  { match: /kratom/i, image: kratomBox },
  { match: /vape|pod|refill|hookah|shisha|coil/i, image: vapePens },
]

const DEFAULT_IMAGE = vapePens

export function getImageForCategory(category) {
  const rule = CATEGORY_IMAGE_RULES.find((r) => r.match.test(category || ''))
  return rule ? rule.image : DEFAULT_IMAGE
}
