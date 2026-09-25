import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { philosophy, images } from '../data/site'

export default function EgitimFelsefemiz() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <PageHero
        crumb="Eğitim Felsefemiz"
        eyebrow="Eğitim Felsefemiz"
        title={<>Türkiye’nin geleceğine <span className="text-azure">yön veren nesiller</span></>}
        desc="Atatürk’ün aydınlanmacı felsefesinden ilham alarak başarılı, merhametli ve teknolojiyle donanmış bireyler yetiştiriyoruz."
      />

      <section className="container-x py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative pb-8">
              <div className="overflow-hidden rounded-[2.5rem] mesh-bg shadow-card">
                <img
                  src={images.reading}
                  alt="Öğrenme"
                  width={560}
                  height={620}
                  loading="lazy"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />
              </div>
              <div className="absolute bottom-0 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-6 shadow-card backdrop-blur">
                <p className="font-display text-lg font-bold text-navy-900">“Ayrıcalık, Bilgi ve Değer”</p>
                <p className="mt-1 text-sm text-navy-500">Eğitim anlayışımızın özü</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Misyonumuz"
              title={<>Akademik başarı ile <span className="gradient-text">değerleri</span> buluşturuyoruz</>}
              desc="Öğrencilerimizin yalnızca sınavlara değil, hayata da hazır olmalarını sağlıyoruz. Bilgiyi, karakter ve empati ile birleştiriyoruz."
            />
            <div className="mt-8 space-y-3">
              {philosophy.map((p, i) => {
                const isOpen = open === i
                return (
                  <Reveal key={p.title} delay={i * 0.08}>
                    <div className={`overflow-hidden rounded-2xl border bg-white shadow-soft transition-colors ${isOpen ? 'border-sky/40' : 'border-navy-100'}`}>
                      <button
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="font-display text-base font-bold text-navy-900 sm:text-lg">{p.title}</span>
                        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky/10 text-royal transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                          <Icon name="plus" className="h-4 w-4" stroke={3} />
                        </span>
                      </button>
                      <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm leading-relaxed text-navy-600">{p.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] mesh-bg noise px-6 py-16 text-center shadow-card sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky/30 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <Icon name="quote" className="mx-auto h-10 w-10 text-azure/60" fill="currentColor" stroke={0} />
              <p className="mt-6 font-display text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
                “Eğitimdir ki bir milleti ya hür, bağımsız, şanlı, yüksek bir topluluk halinde yaşatır; ya da
                bir milleti esarete ve sefalete terk eder.”
              </p>
              <p className="mt-6 text-azure">— Mustafa Kemal Atatürk</p>
              <Link to="/iletisim" className="btn-white mt-10">
                Bize Ulaşın <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
