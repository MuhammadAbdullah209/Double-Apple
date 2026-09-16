import { useEffect, useState } from 'react'
import { fetchRibbonCoupon } from '../api/coupons'

// Green header ribbon — only appears while an admin has a coupon flagged
// "show on ribbon" for Double Apple and it's actually live (see
// getRibbonCoupon in the backend's couponController.js). No coupon featured
// means no bar at all, rather than a placeholder message.
export default function AnnouncementBar() {
  const [ribbonText, setRibbonText] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetchRibbonCoupon('doubleapple')
      .then((data) => {
        if (!cancelled) setRibbonText(data?.coupon?.ribbonText || null)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  if (!ribbonText) return null

  return (
    <div className="w-full bg-[#3CA43C] py-2.5 text-center text-[13px] font-semibold text-white">
      {ribbonText}
    </div>
  )
}
