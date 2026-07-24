import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { successModel } from '../data/content'
import Icon from './Icon'

// Başarı Modeli sayfası için etkileşimli keşif — sol seçim, sağ detay + görsel
export default function SuccessExplorer() {
  const [active, setActive] = useState(0)
  const item = successModel[active]

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Seçim listesi */}
      <div className="lg:col-span-5">
        <div className="flex flex-col gap-2.5">
          {successModel.map((s, i) => {
            const on = i === active
            return (
              <button
                key={s.key}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-4 rounded-2xl border p-3.5 text-left transition-all duration-300 ${
                  on ? 'border-transparent bg-white shadow-card' : 'border-navy-100 bg-white/50 hover:bg-white'
                }`}
              >
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-extrabold text-white transition-transform group-hover:scale-105"
                  style={{ backgroundColor: s.accent }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base font-bold lowercase text-navy-900">{s.name}</span>
                  <span className="block truncate text-xs font-semibold uppercase tracking-wider text-navy-400">{s.tag}</span>
                </span>
                <Icon name="arrow" className={`h-5 w-5 shrink-0 transition-all ${on ? 'text-royal opacity-100' : 'text-navy-300 opacity-0 group-hover:opacity-100'}`} />
              </button>
            )
          })}
        </div>
      </div>

      {/* Detay paneli */}
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-card"
          >
            <div className="grid sm:grid-cols-2">
              <div className="relative aspect-square sm:aspect-auto">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-7">
                <span
                  className="inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: item.accent }}
                >
                  {item.tag}
                </span>
                <h3 className="mt-4 font-display text-2xl font-extrabold lowercase text-navy-900">{item.name}</h3>
                <p className="mt-1 font-display text-lg font-semibold" style={{ color: item.accent }}>
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy-600">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
