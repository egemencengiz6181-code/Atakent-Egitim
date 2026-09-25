import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import InstitutionCard from '../components/InstitutionCard'
import { brand, institutions, regions } from '../data/site'

const categories = ['Tümü', 'Özel Okul', 'Premium', 'Kurs']

export default function Kurumlarimiz() {
  const [category, setCategory] = useState('Tümü')
  const [params, setParams] = useSearchParams()

  const region = regions.find((r) => r.slug === params.get('bolge'))
  const district = params.get('ilce')
  const location = region
    ? { label: region.name, districts: region.districts }
    : district && institutions.some((i) => i.district === district)
      ? { label: district, districts: [district] }
      : null

  const list = institutions.filter(
    (i) =>
      (category === 'Tümü' || i.category === category) &&
      (!location || location.districts.includes(i.district)),
  )

  return (
    <>
      <PageHero
        crumb="Kurumlarımız"
        eyebrow="Kurumlarımız"
        title={<>Bir marka ailesi, <span className="text-azure">{institutions.length} kurum</span></>}
        desc="Özel okullarımız, premium ve butik kurslarımızla İstanbul genelinde geniş bir eğitim ağı sunuyoruz."
      />

      <section className="container-x py-14">
        <div className="flex flex-wrap justify-center gap-2.5 sm:justify-start">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                category === c
                  ? 'bg-gradient-to-r from-royal to-sky text-white shadow-glow'
                  : 'border border-navy-200 bg-white text-navy-700 hover:border-sky hover:text-royal'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {location && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <span className="text-sm text-navy-500">Konum:</span>
            <button
              onClick={() => setParams({}, { replace: true })}
              aria-label={`${location.label} filtresini kaldır`}
              className="inline-flex items-center gap-2 rounded-full border border-sky/40 bg-sky/10 px-4 py-2 text-sm font-semibold text-royal transition-colors hover:bg-sky/20"
            >
              {location.label} <Icon name="x" className="h-3.5 w-3.5" stroke={2.5} />
            </button>
            <Link to="/bolgelerimiz" className="text-sm font-semibold text-royal hover:underline">
              Başka bölge seç
            </Link>
          </div>
        )}

        {list.length === 0 && (
          <p className="mt-10 rounded-3xl border border-dashed border-navy-200 bg-white p-10 text-center text-navy-500">
            Bu seçime uygun kurum bulunamadı. Filtreleri değiştirerek tekrar deneyin.
          </p>
        )}

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((inst) => (
              <motion.div
                key={inst.slug}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <InstitutionCard inst={inst} footer="plain" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="container-x pb-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] mesh-bg noise px-8 py-14 shadow-card sm:px-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky/30 blur-3xl" />
            <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <SectionHeading
                align="left"
                light
                eyebrow="Kayıt & Bilgi"
                title={<>Size en uygun kurumu <span className="text-azure">birlikte belirleyelim</span></>}
                desc="Öğrencinizin hedeflerine ve konumunuza en uygun kurumumuz için bize ulaşın."
              />
              <div className="flex shrink-0 flex-wrap gap-3">
                <a href={brand.phoneHref} className="btn-white">
                  <Icon name="phone" className="h-4 w-4" /> {brand.phone}
                </a>
                <Link to="/iletisim" className="btn border border-white/25 text-white hover:bg-white/10">
                  İletişim <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
