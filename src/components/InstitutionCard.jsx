import { Link } from 'react-router-dom'
import Icon from './Icon'

const categoryStyle = {
  'Özel Okul': 'bg-gold text-navy-950',
  Premium: 'bg-gradient-to-r from-royal to-sky text-white',
  Kurs: 'bg-sky/10 text-royal',
}

export default function InstitutionCard({ inst, footer = 'brand' }) {
  return (
    <Link
      to={`/kurumlarimiz/${inst.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-sky/40 hover:shadow-card"
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${categoryStyle[inst.category]}`}>
          {inst.category}
        </span>
        <span className="flex items-center gap-1 text-sm font-medium text-navy-500">
          <Icon name="pin" className="h-4 w-4 text-royal" /> {inst.district}
        </span>
      </div>
      <h3 className="mt-5 flex-1 font-display text-lg font-bold leading-snug text-navy-900">{inst.name}</h3>
      <p className="mt-3 text-sm text-navy-500">{inst.focus}</p>
      <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4">
        <span className="text-sm font-semibold text-royal">
          {footer === 'brand' ? `${inst.brand} markası` : inst.brand}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-royal">
          Detay <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
