import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { brand, ecosystem, principles, images } from '../data/site'

const sections = [
  {
    to: '/hakkimizda',
    title: 'Hakkımızda',
    desc: '2009’dan bu yana eğitime yön veren köklü hikâyemiz ve kurumsal kimliğimiz.',
    img: images.graduation,
  },
  {
    to: '/egitim-felsefemiz',
    title: 'Eğitim Felsefemiz',
    desc: 'Ayrıcalık, Bilgi ve Değer ekseninde şekillenen çağdaş eğitim anlayışımız.',
    img: images.reading,
  },
  {
    to: '/bolgelerimiz',
    title: 'Bölgelerimiz',
    desc: 'İstanbul genelinde hizmet verdiğimiz bölgeler ve yaygın şube ağımız.',
    img: images.campus,
  },
  {
    to: '/kurumlarimiz',
    title: 'Kurumlarımız',
    desc: 'Özel okullarımız, premium ve butik kurslarımızla marka ailemiz.',
    img: images.library,
  },
]

export default function Kurumsal() {
  return (
    <>
      <PageHero
        crumb="Kurumsal"
        eyebrow="Kurumsal"
        title={<>Güçlü bir çatı, <span className="text-azure">tek bir vizyon</span></>}
        desc="Final, Nazmi Arıkan Fen Bilimleri ve Sevinç markalarını; özel okullarımızla birlikte tek bir kalite standardında buluşturuyoruz."
      />

      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Keşfedin"
          title={<>Kurumsal <span className="gradient-text">dünyamız</span></>}
          desc="Kurumumuzu daha yakından tanımak için ilgili bölümlere göz atın."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {sections.map((s, i) => (
            <Reveal key={s.to} delay={i * 0.1}>
              <Link to={s.to} className="group relative block overflow-hidden rounded-[2rem] mesh-bg shadow-card">
                <img
                  src={s.img}
                  alt={s.title}
                  width={620}
                  height={360}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="flex items-center gap-2 font-display text-2xl font-extrabold text-white">
                    {s.title}
                    <Icon name="arrow" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-white/75">{s.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-navy-50/40 to-white" />
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <SectionHeading
              align="left"
              eyebrow="Neden Atakent?"
              title={<>Bir eğitim değil, bir <span className="gradient-text">gelecek yatırımı</span></>}
              desc={`${brand.name} olarak öğrenciyi merkeze alan, veliyle şeffaf iletişim kuran ve teknolojiyi eğitime entegre eden bir yaklaşım benimsiyoruz.`}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {ecosystem.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
                    <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-royal to-sky" />
                    <h4 className="font-display font-bold text-navy-900">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.1}>
                <div className="relative h-full overflow-hidden rounded-3xl mesh-bg noise p-8 text-white shadow-card">
                  <span className="relative text-sm font-bold uppercase tracking-widest text-azure">0{i + 1}</span>
                  <h3 className="relative mt-2 font-display text-2xl font-extrabold">{p.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-white/75">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
