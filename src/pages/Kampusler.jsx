import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTABanner from '../components/CTABanner'
import { campuses } from '../data/content'

const filters = ['Tümü', 'Okul', 'Kurs', 'Premium', 'Merkez']

const badgeColor = {
  Merkez: '#0B2A5B',
  Okul: '#1E5AA8',
  Kurs: '#2E8BE6',
  Premium: '#F5B301',
}

export default function Kampusler() {
  const [filter, setFilter] = useState('Tümü')
  const list = filter === 'Tümü' ? campuses : campuses.filter((c) => c.badge === filter)

  return (
    <>
      <PageHero
        crumb="Kampüslerimiz"
        eyebrow="Kampüsler & Şubeler"
        title="Size en yakın Atakent’i bulun"
        desc="İstanbul genelinde 40’ı aşkın kampüs ve şube ile hep yanınızdayız. Okul, kurs ve premium eğitim seçenekleriyle."
      />

      {/* Filtreler */}
      <section className="container-x py-14">
        <div className="flex flex-wrap justify-center gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-royal to-sky text-white shadow-glow'
                  : 'border border-navy-200 bg-white text-navy-700 hover:border-sky hover:text-royal'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.07}>
              <div className="group h-full overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative h-32 overflow-hidden mesh-bg noise">
                  <div className="absolute inset-0 hero-grid opacity-40" />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow"
                    style={{ backgroundColor: badgeColor[c.badge] || '#1E5AA8' }}
                  >
                    {c.badge}
                  </span>
                  <Icon name="cap" className="absolute bottom-4 right-4 h-12 w-12 text-white/40" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-navy-900">{c.name}</h3>
                  <p className="mt-1 text-sm text-navy-500">{c.type}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-4">
                    <span className="flex items-center gap-1.5 text-sm text-navy-600">
                      <Icon name="pin" className="h-4 w-4 text-royal" /> {c.region}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-royal link-underline">
                      İncele <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-10 text-center text-navy-500">Bu kategoride şube bulunamadı.</p>
        )}
      </section>

      {/* Bölge şeridi */}
      <section className="container-x py-8">
        <div className="rounded-[2rem] border border-navy-100 bg-white p-8 shadow-soft">
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-navy-400">Hizmet verdiğimiz bölgeler</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-navy-700">
            {['Küçükçekmece', 'Başakşehir', 'Beylikdüzü', 'Bakırköy', 'Esenyurt', 'Avcılar', 'Bahçelievler', 'Florya'].map((r) => (
              <span key={r} className="font-display text-lg font-bold">{r}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="py-8" />
      <CTABanner />
      <div className="h-8" />
    </>
  )
}
