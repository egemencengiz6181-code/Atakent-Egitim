import { Link } from 'react-router-dom'
import Icon from './Icon'
import Reveal from './Reveal'
import { brand } from '../data/content'

export default function CTABanner() {
  return (
    <section className="container-x">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] mesh-bg noise px-6 py-16 text-center shadow-card sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-royal/40 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="eyebrow border-white/20 bg-white/10 text-white">Ücretsiz Seviye Tespiti</span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Çocuğunuzun potansiyelini birlikte keşfedelim
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              Ön kayıt formunu doldurun; danışmanlarımız size özel bir yol haritası hazırlasın.
              {' '}{brand.slogan}.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/iletisim" className="btn-white">
                Ön Kayıt Oluştur <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href={brand.phoneHref} className="btn border border-white/25 text-white hover:bg-white/10">
                <Icon name="phone" className="h-4 w-4" /> {brand.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
