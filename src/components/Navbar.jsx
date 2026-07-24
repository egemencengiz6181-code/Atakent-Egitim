import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import Icon from './Icon'
import { nav, brand } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  // Koyu (mesh) hero'ya sahip sayfalar — en üstteyken menü beyaz olmalı
  const darkHeroPaths = ['/kurumsal', '/basari-modeli', '/egitim-felsefemiz', '/kampuslerimiz', '/iletisim']
  const onDark = !scrolled && darkHeroPaths.includes(location.pathname)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled ? 'bg-white/85 shadow-soft backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="container-x flex h-[74px] items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
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

          <div className="hidden items-center gap-3 lg:flex">
            <a href={brand.phoneHref} className={`text-sm font-semibold transition-colors ${onDark ? 'text-white/90 hover:text-white' : 'text-navy-700 hover:text-royal'}`}>
              {brand.phone}
            </a>
            <Link to="/iletisim" className="btn-primary py-2.5 text-sm">
              Ön Kayıt <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-xl border transition-colors lg:hidden ${onDark ? 'border-white/30 bg-white/10 text-white' : 'border-navy-200 bg-white/80 text-navy-900'}`}
            aria-label="Menü"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="container-x lg:hidden"
          >
            <div className="mt-2 rounded-3xl border border-white/60 bg-white/95 p-4 shadow-card backdrop-blur-xl">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-base font-semibold ${
                      isActive ? 'bg-sky/10 text-royal' : 'text-navy-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/iletisim" className="btn-primary mt-3 w-full">
                Ön Kayıt Formu <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
