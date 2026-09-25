import { useEffect, useState } from 'react'
import Icon from './Icon'

function remaining(target) {
  const ms = Math.max(0, target - Date.now())
  return {
    days: Math.floor(ms / 864e5),
    hours: Math.floor((ms / 36e5) % 24),
    minutes: Math.floor((ms / 6e4) % 60),
    seconds: Math.floor((ms / 1e3) % 60),
  }
}

function useCountdown(date) {
  const target = new Date(date).getTime()
  const [left, setLeft] = useState(() => remaining(target))
  useEffect(() => {
    const id = setInterval(() => setLeft(remaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])
  return left
}

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="grid min-w-[3.4rem] place-items-center rounded-xl bg-white/10 px-2.5 py-2.5 font-display text-2xl font-bold tabular-nums text-white ring-1 ring-white/15 sm:min-w-[4.2rem] sm:text-3xl">
        {String(value).padStart(2, '0')}
      </div>
      <span className="mt-2 text-[0.68rem] font-semibold uppercase tracking-widest text-white/60">{label}</span>
    </div>
  )
}

export default function Countdown({ label, date }) {
  const t = useCountdown(date)
  const sep = <span className="pt-2 text-2xl font-bold text-azure">:</span>
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky/20 text-azure">
          <Icon name="clock" className="h-4 w-4" />
        </span>
        <p className="text-sm font-semibold uppercase tracking-widest text-white">{label}</p>
      </div>
      <div className="flex items-start gap-2 sm:gap-3">
        <Unit value={t.days} label="Gün" />
        {sep}
        <Unit value={t.hours} label="Saat" />
        {sep}
        <Unit value={t.minutes} label="Dakika" />
        {sep}
        <Unit value={t.seconds} label="Saniye" />
      </div>
    </div>
  )
}
