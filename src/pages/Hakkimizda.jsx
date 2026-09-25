import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CountUp from '../components/CountUp'
import { brand, principles, timeline, stats, images } from '../data/site'

export default function Hakkimizda() {
  return (
    <>
      <PageHero
        crumb="Hakkımızda"
        eyebrow="Hakkımızda"
        title={<>Eğitim, hayatımızı dönüştüren <span className="text-azure">en güçlü kuvvettir</span></>}
        desc="Ayrıcalık, Bilgi ve Değer ilkeleriyle her öğrencinin biricik potansiyelini keşfediyor ve geliştiriyoruz."
      />

      <section className="container-x grid items-center gap-14 py-20 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] mesh-bg shadow-card">
            <img
              src={images.graduation}
              alt="Mezuniyet"
              width={640}
              height={520}
              loading="lazy"
              className="h-[360px] w-full object-cover sm:h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/40 to-transparent" />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow={`${brand.founded}’dan bu yana`}
            title={<>Köklü deneyim, <span className="gradient-text">çağdaş anlayış</span></>}
          />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 leading-relaxed text-navy-600">
              <p>
                {brand.name}, {brand.founded} yılından bu yana İstanbul genelinde doğrudan işlettiği ve
                markalaştırdığı okul ve kurslarıyla eğitime yön veriyor. Amacımız; öğrencilerin akademik
                başarısını artırmak, kişisel gelişimlerine katkı sağlamak ve güçlü bir rehberlik desteği
                sunmaktır.
              </p>
              <p>
                Eğitimin, bireyleri ve toplumları dönüştüren en güçlü kuvvet olduğuna inanıyoruz. Bu
                inançla, her öğrenciyi kendine özgü yetenekleriyle görüyor; onları başarılı, merhametli ve
                teknolojiyle donanmış bireyler olarak geleceğe hazırlıyoruz.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/egitim-felsefemiz" className="btn-ghost mt-8">
              Eğitim Felsefemiz <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-navy-100 bg-white p-8 shadow-soft">
                <span className="text-sm font-bold uppercase tracking-widest text-sky">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl font-extrabold text-navy-900">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-600">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="Yolculuğumuz" title={<>Dünden bugüne <span className="gradient-text">Atakent</span></>} />
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-royal via-sky to-transparent sm:left-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className={`relative flex items-center gap-6 sm:gap-10 ${i % 2 ? 'sm:flex-row-reverse' : ''}`}>
                  <div className="flex-1 pl-12 sm:pl-0">
                    <div className={`rounded-2xl border border-navy-100 bg-white p-6 shadow-soft ${i % 2 ? 'sm:text-left' : 'sm:text-right'}`}>
                      <span className="font-display text-2xl font-extrabold gradient-text">{t.year}</span>
                      <h4 className="mt-1 font-display text-lg font-bold text-navy-900">{t.title}</h4>
                      <p className="mt-2 text-sm text-navy-600">{t.desc}</p>
                    </div>
                  </div>
                  <span className="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#f7f9fd] bg-sky shadow-glow sm:left-1/2" />
                  <div className="hidden flex-1 sm:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card-glass h-full p-6 text-center">
                <p className="font-display text-4xl font-extrabold text-royal lg:text-5xl">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-2 text-sm font-medium text-navy-600">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
