import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from './Icon'

export default function PageHero({ eyebrow, title, desc, crumb }) {
  return (
    <section className="relative overflow-hidden mesh-bg noise pt-[74px]">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-sky/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-royal/30 blur-3xl" />
      <div className="container-x relative z-10 py-16 sm:py-20">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-medium text-white/60"
        >
          <Link to="/" className="hover:text-white">Anasayfa</Link>
          <Icon name="arrow" className="h-3.5 w-3.5" />
          <span className="text-white/90">{crumb}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl"
        >
          {eyebrow && (
            <span className="eyebrow border-white/20 bg-white/10 text-white">{eyebrow}</span>
          )}
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {desc && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{desc}</p>}
        </motion.div>
      </div>

      {/* Dalga geçişi */}
      <svg viewBox="0 0 1440 80" className="block w-full text-[#f7f9fd]" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,48 C240,80 480,80 720,56 C960,32 1200,16 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </section>
  )
}
