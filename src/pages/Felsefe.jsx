import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTABanner from '../components/CTABanner'
import { philosophy } from '../data/content'

const icons = ['star', 'spark', 'palette', 'heart']

const approach = [
  { title: 'Öğrenci merkezli', text: 'Her öğrenci biriciktir. Öğrenme yolculuğunu onun ihtiyaçlarına göre tasarlarız.' },
  { title: 'Bütünsel gelişim', text: 'Akademik başarıyı liderlik, iletişim ve zaman yönetimi atölyeleriyle tamamlarız.' },
  { title: 'Teknoloji entegrasyonu', text: 'Yapay zekâ destekli sistemler ve dijital araçlarla öğrenmeyi kişiselleştiririz.' },
  { title: 'Psikolojik destek', text: 'Sınav kaygısını yöneten, motivasyonu yüksek tutan uzman rehberlik hizmeti.' },
]

export default function Felsefe() {
  return (
    <>
      <PageHero
        crumb="Eğitim Felsefemiz"
        eyebrow="Eğitim Felsefemiz"
        title="Kendine güven, yapabileceğine inan"
        desc="Atakent’in eğitim anlayışı; akademik başarıyı, güçlü karakteri ve çağın becerilerini bir araya getiren bütünsel bir felsefeye dayanır."
      />

      {/* Manifesto */}
      <section className="container-x py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-navy-100 bg-white p-8 shadow-card sm:p-14">
            <Icon name="quote" className="h-12 w-12 text-sky/20" fill="currentColor" stroke={0} />
            <p className="mt-4 max-w-4xl font-display text-2xl font-extrabold leading-snug text-navy-900 sm:text-3xl">
              Biz eğitimi; not ortalamasından ibaret görmeyiz. Amacımız, sorgulayan, üreten,
              empati kuran ve topluma değer katan <span className="gradient-text">özgüvenli bireyler</span> yetiştirmektir.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-navy-600">
              Atatürk’ün aydınlanma ilkelerinden ilham alır; bilime, sanata ve insana yatırım yaparız.
              Her öğrencimizin içindeki potansiyeli açığa çıkarmak için sabırla, sevgiyle ve bilimsel
              yöntemlerle çalışırız.
            </p>
          </div>
        </Reveal>
      </section>

      {/* İlkeler */}
      <section className="container-x py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {philosophy.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex h-full items-start gap-5 rounded-3xl border border-navy-100 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-royal to-sky text-white shadow-glow">
                  <Icon name={icons[i % icons.length]} className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Yaklaşım */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-navy-50/40 to-white" />
        <div className="container-x">
          <SectionHeading eyebrow="Yaklaşımımız" title="Eğitimi nasıl ele alıyoruz?" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-navy-100 bg-white p-7 shadow-soft">
                  <span className="font-display text-3xl font-extrabold text-sky/30">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <div className="h-8" />
    </>
  )
}
