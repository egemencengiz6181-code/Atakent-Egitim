import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { brand, nav, successModel } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden mesh-bg noise text-white">
      <div className="container-x relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo imgClass="h-16" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {brand.slogan}. {brand.founded}’dan bu yana bilimsel Başarı Modeli ile geleceğin
              özgüvenli, üretken ve değerli bireylerini yetiştiriyoruz.
            </p>
            <div className="mt-6 flex gap-3">
              {brand.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-xs font-bold text-white/80 transition-colors hover:border-sky hover:bg-sky/20 hover:text-white"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-azure">Kurumsal</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-underline hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-azure">Başarı Modeli</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-white/70">
              {successModel.map((s) => (
                <li key={s.key}>
                  <Link to="/basari-modeli" className="hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-azure">İletişim</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                <span>{brand.address}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-sky" />
                <a href={brand.phoneHref} className="hover:text-white">{brand.phone}</a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-sky" />
                <a href={`mailto:${brand.email}`} className="hover:text-white">{brand.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {brand.founded}–2026 {brand.name}. Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-2">
            <Icon name="infinity" className="h-4 w-4 text-sky" /> {brand.slogan}
          </p>
        </div>
      </div>
    </footer>
  )
}
