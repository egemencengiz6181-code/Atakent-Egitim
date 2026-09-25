import { Link } from 'react-router-dom'
import Icon from './Icon'
import { brand, nav, footerPrograms } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden mesh-bg noise text-white">
      <div className="container-x relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label={brand.name} className="inline-flex">
              <img
                src="/media/atakent-logo.jpeg"
                alt={brand.name}
                width={64}
                height={64}
                loading="lazy"
                className="h-16 w-auto rounded-2xl object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {brand.founded}’dan bu yana İstanbul genelinde özel okul ve kurslarımızla öğrencilerimizi
              geleceğe hazırlıyoruz. {brand.motto}.
            </p>
            <p className="mt-6 font-display text-lg font-bold text-white">“{brand.slogan}”</p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-azure">Kurumsal</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {nav.slice(1).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-underline hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-azure">Programlar</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {footerPrograms.map((p) => (
                <li key={p.label}>
                  <Link to={p.to} className="link-underline hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-azure">İletişim</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-sky" />
                <span>
                  <a href={brand.phoneHref} className="block font-semibold text-white hover:text-azure">
                    {brand.phone}
                  </a>
                  <span className="text-white/50">Telefon & WhatsApp</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-sky" />
                <a href={`mailto:${brand.email}`} className="break-all hover:text-white">{brand.email}</a>
              </li>
              <li className="flex gap-3">
                <Icon name="pin" className="h-5 w-5 shrink-0 text-sky" />
                <span>{brand.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {brand.name}. Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-2">
            <Icon name="infinity" className="h-4 w-4 text-sky" /> Ayrıcalık · Bilgi · Değer
          </p>
        </div>
      </div>
    </footer>
  )
}
