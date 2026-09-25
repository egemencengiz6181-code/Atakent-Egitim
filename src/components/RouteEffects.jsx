import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { brand, nav, institutions } from '../data/site'

// Sayfa değişiminde en üste kaydırır ve sekme başlığını günceller
export default function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })

    const base = `${brand.name} | ${brand.slogan}`
    if (pathname === '/') {
      document.title = base
      return
    }
    const slug = pathname.match(/^\/kurumlarimiz\/([^/]+)/)?.[1]
    const label = slug
      ? institutions.find((i) => i.slug === slug)?.name
      : nav.find((n) => n.to === pathname)?.label
    document.title = `${label ?? 'Sayfa Bulunamadı'} | ${brand.name}`
  }, [pathname])

  return null
}
