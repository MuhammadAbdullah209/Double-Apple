import { useEffect, useRef } from 'react'

const AWAY_TITLE = "🔥 Don't forget to come back!"

export default function TabAttentionGrabber() {
  const previousTitleRef = useRef(document.title)

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        previousTitleRef.current = document.title
        document.title = AWAY_TITLE
      } else {
        document.title = previousTitleRef.current
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  return null
}
