import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SuccessExplorer from '../components/SuccessExplorer'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTABanner from '../components/CTABanner'
import { successModel } from '../data/content'

const steps = [
  { icon: 'target', title: 'Seviye Tespiti', text: 'Öğrenci nereden başlıyor? Hazır bulunuşluk sınavıyla net bir başlangıç noktası.' },
  { icon: 'chart', title: 'Ölçme & Analiz', text: 'Düzenli denemeler ve kapsamlı analizlerle güçlü ve gelişime açık alanlar belirlenir.' },
  { icon: 'spark', title: 'Kişisel Yol Haritası', text: 'Her öğrenciye özel çalışma planı, etüt ve hedef takibi oluşturulur.' },
  { icon: 'shield', title: 'Kazanım & Rehberlik', text: 'Kazanım kitapçığı, dikkat atölyeleri ve rehberlikle başarı kalıcı hale gelir.' },
]

export default function BasariModeli() {
  return (
    <>
      <PageHero
        crumb="Başarı Modeli"
        eyebrow="Atakent Başarı Modeli"
        title="Başarıyı ölçen, analiz eden, büyüten bilimsel sistem"
        desc="Dokuz adımlık modelimiz; ölçme-değerlendirmeden dikkat gelişimine, yurt dışı danışmanlıktan kariyer planlamasına kadar öğrencinin tüm yolculuğunu kapsar."
      />

      {/* Adımlar */}
      <section className="container-x py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl border border-navy-100 bg-white p-7 shadow-soft">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal to-sky p-3 text-white shadow-glow">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.text}</p>
                {i < steps.length - 1 && (
                  <Icon name="arrow" className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-navy-200 lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Explorer */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-50/40 to-white" />
        <div className="container-x">
          <SectionHeading
            eyebrow="Dokuz adım, tek hedef"
            title="Modelin bileşenlerini keşfedin"
            desc="Her bir bileşen, öğrencinin başarısına farklı bir açıdan katkı sağlar. Aşağıdan seçerek detayları inceleyin."
          />
          <div className="mt-14">
            <SuccessExplorer />
          </div>
        </div>
      </section>

      {/* Tüm posterler galeri */}
      <section className="container-x py-16">
        <SectionHeading eyebrow="Görsel galeri" title="Başarı Modeli’nin tüm yüzleri" />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {successModel.map((s, i) => (
            <Reveal key={s.key} delay={(i % 4) * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white shadow-soft">
                <div className="relative aspect-square overflow-hidden">
                  <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-white">{s.title}</p>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{ backgroundColor: s.accent }}>
                    {s.name}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
      <div className="h-8" />
    </>
  )
}
