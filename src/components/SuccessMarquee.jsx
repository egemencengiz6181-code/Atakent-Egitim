import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { successModel } from '../data/content'

// Otomatik kayan iki sıralı poster şeridi (hover'da durur)
function Row({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className="group relative flex overflow-hidden">
      <div
        className={`flex w-max gap-5 py-2 ${reverse ? 'animate-marquee [animation-direction:reverse]' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((item, i) => (
          <Link
            key={item.key + i}
            to="/basari-modeli"
            className="relative block w-[220px] shrink-0 overflow-hidden rounded-3xl border border-white/70 bg-white shadow-soft sm:w-[260px]"
          >
            <div className="relative aspect-square overflow-hidden">
              <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{ backgroundColor: item.accent }}>
                {item.tag}
              </span>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="font-display text-sm font-bold lowercase text-navy-900">{item.name}</span>
              <span className="text-royal">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function SuccessMarquee() {
  const half = Math.ceil(successModel.length / 2)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-5"
    >
      <Row items={successModel.slice(0, half)} />
      <Row items={successModel.slice(half)} reverse />
    </motion.div>
  )
}
