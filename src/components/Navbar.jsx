import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Icon, { WhatsAppIcon } from './Icon'
import { nav, brand } from '../data/site'

// Koyu (mesh) hero'ya sahip sayfalar — en üstteyken menü beyaz olmalı
const darkHeroPaths = ['/kurumsal', '/hakkimizda', '/egitim-felsefemiz', '/bolgelerimiz', '/kurumlarimiz', '/iletisim']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const onDark =
    !scrolled && !open && darkHeroPaths.some((p) => pathname === p || pathname.startsWith(p + '/'))

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled || open ? 'bg-white/90 shadow-soft backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="container-x flex h-[74px] items-center justify-between gap-4">
          <Link to="/" aria-label={brand.name} className="group inline-flex shrink-0 items-center">
            <img
              src="/media/atakent-logo.jpeg"
              alt={brand.name}
              width={56}
              height={56}
              className="h-12 w-auto rounded-2xl object-contain transition-transform duration-500 group-hover:scale-[1.04] sm:h-14"
              fetchpriority="high"
            />
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? onDark ? 'text-white' : 'text-royal'
                      : onDark ? 'text-white/80 hover:text-white' : 'text-navy-700 hover:text-royal'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-sky"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={brand.phoneHref} className="btn-primary hidden py-2.5 text-sm md:inline-flex">
              Hemen Kayıt <Icon name="arrow" className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`grid h-11 w-11 place-items-center rounded-xl border transition-colors xl:hidden ${
                onDark ? 'border-white/30 bg-white/10 text-white' : 'border-navy-200 bg-white/80 text-navy-900'
              }`}
              aria-label="Menü"
              aria-expanded={open}
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="container-x xl:hidden"
          >
            <div className="mt-2 max-h-[calc(100dvh-96px)] overflow-y-auto rounded-3xl border border-white/60 bg-white/95 p-4 shadow-card backdrop-blur-xl">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-base font-semibold ${
                      isActive ? 'bg-sky/10 text-royal' : 'text-navy-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a href={brand.phoneHref} className="btn-primary mt-3 w-full">
                Hemen Kayıt Ol <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-2 w-full">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
