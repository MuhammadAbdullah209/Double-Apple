import { useEffect, useRef, useState } from 'react'
import { getProducts } from '../api/products'

// Social proof popup — there's no real recent-orders feed to draw from, so
// the "someone just bought this" framing (location, timing) is simulated,
// but the product itself is real: a random pick from the actual synced
// Double Apple catalogue, with its real name and photo.
const LOCATIONS = [
  'Austin, TX',
  'Round Rock, TX',
  'Georgetown, TX',
  'Cedar Park, TX',
  'San Marcos, TX',
  'Pflugerville, TX',
  'Kyle, TX',
  'Buda, TX',
  'Hutto, TX',
  'Waco, TX',
]

const DISPLAY_MS = 6000
const INTERVAL_MIN_MS = 20000
const INTERVAL_MAX_MS = 25000

function randomInterval() {
  return INTERVAL_MIN_MS + Math.random() * (INTERVAL_MAX_MS - INTERVAL_MIN_MS)
}

function randomMinutesAgo() {
  return Math.floor(Math.random() * 45) + 2
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function RecentPurchasePopup() {
  const [pool, setPool] = useState([])
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(null)
  const poolRef = useRef([])

  useEffect(() => {
    let cancelled = false
    // A generous page of real products to rotate through — filtered to ones
    // with an actual photo so the popup never shows a blank/placeholder image.
    getProducts({ page: 1, limit: 100 })
      .then((data) => {
        if (cancelled) return
        const withImages = (data.products || []).filter((p) => p.image?.[0]?.url)
        poolRef.current = withImages
        setPool(withImages)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (pool.length === 0) return

    let showTimer
    let hideTimer

    const showNext = () => {
      const product = pickRandom(poolRef.current)
      setCurrent({
        name: product.name,
        image: product.image[0].url,
        location: pickRandom(LOCATIONS),
        minutesAgo: randomMinutesAgo(),
      })
      setVisible(true)

      hideTimer = setTimeout(() => setVisible(false), DISPLAY_MS)
      showTimer = setTimeout(showNext, randomInterval())
    }

    showTimer = setTimeout(showNext, 4000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [pool])

  if (!visible || !current) return null

  return (
    <div className="fixed bottom-5 left-5 z-40 flex w-[320px] items-start gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-xl">
      <img src={current.image} alt={current.name} className="h-14 w-14 shrink-0 rounded-md object-contain bg-[#f2f1ec]" />
      <div className="min-w-0 flex-1">
        <p className="text-sm leading-snug text-[#1a1a17]">
          Someone recently bought <span className="font-bold">{current.name}</span> in{' '}
          {current.location}
        </p>
        <p className="mt-1 text-xs text-[#9a988e]">about {current.minutesAgo} minutes ago</p>
      </div>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setVisible(false)}
        className="shrink-0 text-lg leading-none text-[#9a988e] hover:text-[#1a1a17]"
      >
        &times;
      </button>
    </div>
  )
}
