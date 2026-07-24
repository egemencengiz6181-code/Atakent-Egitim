import { motion } from 'framer-motion'

// Başarı Modeli poster kartı — marka görselini premium çerçevede sunar
export default function PosterCard({ item, onClick, active = false }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`group relative block w-[280px] shrink-0 overflow-hidden rounded-[1.75rem] border bg-white text-left shadow-soft sm:w-[320px] ${
        active ? 'border-sky ring-2 ring-sky/40' : 'border-white/70'
      }`}
      style={{ boxShadow: active ? `0 26px 60px -26px ${item.accent}88` : undefined }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={`${item.name} — ${item.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow"
          style={{ backgroundColor: item.accent }}
        >
          {item.tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold lowercase text-navy-900">{item.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-navy-500">{item.title}</p>
      </div>
    </motion.button>
  )
}
