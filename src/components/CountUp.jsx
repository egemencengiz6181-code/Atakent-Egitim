import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// "25.000+", "%94", "15+" gibi değerleri önek/sonekleriyle birlikte sayarak gösterir
export default function CountUp({ value, duration = 1500 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const match = value.match(/^(\D*)([\d.]+)(\D*)$/)
  const prefix = match?.[1] ?? ''
  const suffix = match?.[3] ?? ''
  const target = match ? parseInt(match[2].replace(/\./g, ''), 10) : 0
  const [display, setDisplay] = useState(match ? `${prefix}0${suffix}` : value)

  useEffect(() => {
    if (!inView || !match) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(prefix + Math.round(target * eased).toLocaleString('tr-TR') + suffix)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value])

  return <span ref={ref}>{display}</span>
}
