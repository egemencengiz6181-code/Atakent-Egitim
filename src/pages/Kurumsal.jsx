import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import Icon from '../components/Icon'
import CTABanner from '../components/CTABanner'
import { stats, pillars, brand } from '../data/content'

const timeline = [
  { year: '2009', title: 'İlk kampüs', text: 'Atakent Eğitim, İstanbul’da ilk kampüsünü açtı ve “başarmak sanattır” yolculuğu başladı.' },
  { year: '2014', title: 'Başarı Modeli', text: 'Ölçme-değerlendirme temelli bilimsel Başarı Modeli geliştirildi ve tüm kurumlara yaygınlaştırıldı.' },
  { year: '2018', title: 'Dijital dönüşüm', text: 'Yapay zekâ destekli takip sistemleri ve dijital öğrenme platformları devreye alındı.' },
  { year: '2021', title: 'Franchise ağı', text: 'Güçlü kurumsal kimlik ile şube ağı büyüdü; Atakent İstanbul genelinde yaygınlaştı.' },
  { year: '2026', title: 'Bugün', text: '40’ı aşkın kampüs ve şube, 25.000’den fazla mezun ile bölgenin öncü eğitim markası.' },
]

const values = [
  { icon: 'heart', title: 'Empati', text: 'Her öğrenciyi anlamaya çalışan, kapsayıcı bir eğitim anlayışı.' },
  { icon: 'shield', title: 'Güven', text: 'Şeffaf iletişim ve tutulan sözlerle inşa edilen köklü güven.' },
  { icon: 'spark', title: 'Yenilikçilik', text: 'Teknoloji ve pedagojiyi buluşturan sürekli gelişim kültürü.' },
  { icon: 'users', title: 'Sosyal Sorumluluk', text: 'Topluma değer katan, farklılıklara saygılı bireyler yetiştirmek.' },
]

export default function Kurumsal() {
  return (
    <>
      <PageHero
        crumb="Kurumsal"
        eyebrow="Hakkımızda"
        title="Bir eğitim değil, bir dönüşüm hareketi"
        desc="2009’dan bu yana Atakent Eğitim Kurumları; bilgiyi, değeri ve özgüveni buluşturan bir eğitim ekosistemi inşa ediyor."
      />

      {/* Misyon / Vizyon */}
      <section className="container-x py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-navy-100 bg-white p-9 shadow-soft">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal to-sky p-3 text-white shadow-glow">
                <Icon name="target" className="h-7 w-7" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-extrabold text-navy-900">Misyonumuz</h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                Her öğrencinin biricik potansiyelini keşfetmesini sağlayacak, akademik başarıyı kişisel
                gelişim ve güçlü karakterle harmanlayan; teknolojiyle güçlendirilmiş, bilimsel bir eğitim
                deneyimi sunmak.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-navy-100 bg-white p-9 shadow-soft">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky to-azure p-3 text-white shadow-glow">
                <Icon name="globe" className="h-7 w-7" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-extrabold text-navy-900">Vizyonumuz</h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                Türkiye’de eğitimin standartlarını yeniden tanımlayan; öğrencilerini sadece sınavlara değil,
                hayata ve geleceğe hazırlayan, ilham veren ve örnek alınan öncü bir eğitim markası olmak.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="container-x py-8">
        <div className="grid grid-cols-2 gap-4 rounded-[2rem] mesh-bg noise p-8 lg:grid-cols-4 lg:p-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Değerler */}
      <section className="container-x py-16">
        <SectionHeading eyebrow="Değerlerimiz" title="Bizi biz yapan ilkeler" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-navy-100 bg-white p-7 text-center shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-sky/10 text-royal transition-colors group-hover:bg-royal group-hover:text-white">
                  <Icon name={v.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-x py-16">
        <SectionHeading eyebrow="Dünden bugüne" title="Yolculuğumuz" align="left" />
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="sticky top-28 rounded-3xl border border-navy-100 bg-white p-8 shadow-soft">
                <Icon name="infinity" className="h-10 w-10 text-sky" />
                <p className="mt-5 font-display text-xl font-extrabold leading-snug text-navy-900">
                  {brand.founded}’dan bugüne kadar durmadan büyüdük.
                </p>
                <p className="mt-3 text-sm text-navy-600">{brand.slogan}. Her yıl daha fazla öğrenciye, daha fazla ilhamla.</p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="relative border-l-2 border-navy-100 pl-8">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <div className="relative mb-10 last:mb-0">
                    <span className="absolute -left-[42px] grid h-6 w-6 place-items-center rounded-full border-4 border-white bg-gradient-to-br from-royal to-sky shadow" />
                    <span className="font-display text-sm font-extrabold text-royal">{t.year}</span>
                    <h3 className="mt-1 font-display text-xl font-bold text-navy-900">{t.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-600">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars mini */}
      <section className="container-x py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-3xl border border-navy-100 bg-white p-6 shadow-soft">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-royal to-sky text-white">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="py-8" />
      <CTABanner />
      <div className="h-8" />
    </>
  )
}
