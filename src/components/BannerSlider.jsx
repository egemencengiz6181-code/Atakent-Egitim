import { useCallback, useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useReducedMotion } from 'framer-motion'
import Icon from './Icon'
import { banners } from '../data/site'

const spring = { type: 'spring', stiffness: 300, damping: 38, mass: 0.9 }

// Sürüklenebilir, otomatik ilerleyen duyuru banner'ı
export default function BannerSlider() {
  const count = banners.length
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const [dragging, setDragging] = useState(false)
  const frameRef = useRef(null)
  const x = useMotionValue(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const el = frameRef.current
    if (!el) return
    setWidth(el.clientWidth)
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const controls = animate(x, -index * width, reduceMotion ? { duration: 0 } : spring)
    return () => controls.stop()
  }, [index, width, reduceMotion, x])

  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count])

  const onDragEnd = (_, info) => {
    setDragging(false)
    const threshold = Math.min(110, width * 0.18)
    let next = index
    if (info.offset.x < -threshold || info.velocity.x < -450) next = index + 1
    else if (info.offset.x > threshold || info.velocity.x > 450) next = index - 1
    next = Math.min(Math.max(next, 0), count - 1)
    animate(x, -next * width, spring)
    setIndex(next)
  }

  return (
    <div className="banner-slider group relative" role="region" aria-roledescription="carousel" aria-label="Öne çıkan sınav başarılarımız">
      <div ref={frameRef} className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-card sm:rounded-[2rem]">
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -(count - 1) * width, right: 0 }}
          dragElastic={0.12}
          dragMomentum={false}
          onDragStart={() => setDragging(true)}
          onDragEnd={onDragEnd}
        >
          {banners.map((b, i) => (
            <div key={b.id} className="w-full shrink-0" role="group" aria-roledescription="slide" aria-label={`${i + 1} / ${count}`} aria-hidden={i !== index}>
              <img
                src={b.src}
                srcSet={`${b.srcSm} 960w, ${b.src} 1920w`}
                sizes="(max-width: 1279px) 100vw, 1200px"
                alt={b.alt}
                width={1920}
                height={828}
                draggable={false}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchpriority={i === 0 ? 'high' : 'low'}
                className="pointer-events-none block aspect-[1920/828] w-full select-none object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <Arrow side="left" onClick={() => go(index - 1)} />
      <Arrow side="right" onClick={() => go(index + 1)} />

      <div className="mt-4 flex items-center justify-center gap-2.5">
        {banners.map((b, i) => {
          const active = i === index
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`${i + 1}. banner`}
              aria-current={active}
              className={`h-2 overflow-hidden rounded-full transition-all duration-500 ${active ? 'w-10 bg-navy-100' : 'w-2 bg-navy-200 hover:bg-sky/60'}`}
            >
              {active &&
                (reduceMotion ? (
                  <span className="block h-full w-full rounded-full bg-gradient-to-r from-royal to-sky" />
                ) : (
                  <span
                    key={index}
                    data-paused={dragging || undefined}
                    onAnimationEnd={() => go(index + 1)}
                    className="banner-progress block h-full w-full rounded-full bg-gradient-to-r from-royal to-sky"
                  />
                ))}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Arrow({ side, onClick }) {
  const left = side === 'left'
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={left ? 'Önceki banner' : 'Sonraki banner'}
      className={`absolute top-[calc(50%-14px)] hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/90 text-navy-800 shadow-card backdrop-blur transition-all duration-300 hover:bg-white hover:text-royal sm:grid ${
        left ? 'left-3 lg:-left-5' : 'right-3 lg:-right-5'
      }`}
    >
      <Icon name={left ? 'chevronLeft' : 'chevronRight'} className="h-5 w-5" stroke={2.4} />
    </button>
  )
}
