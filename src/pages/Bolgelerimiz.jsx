import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { institutions, regions } from '../data/site'

export default function Bolgelerimiz() {
  const districts = Array.from(new Set(institutions.map((i) => i.district)))

  return (
    <>
      <PageHero
        crumb="Bölgelerimiz"
        eyebrow="Bölgelerimiz"
        title={<>İstanbul’un dört bir yanında <span className="text-azure">yanınızdayız</span></>}
        desc="Avrupa Yakası’nın önemli merkezlerinde yaygın kurum ağımızla ailenize en yakın kalitede eğitim sunuyoruz."
      />

      <section className="container-x py-20">
        <SectionHeading
          align="left"
          eyebrow="Bölge Ağımız"
          title={<>Size en yakın <span className="gradient-text">Atakent kurumu</span></>}
          desc="Her bölgede, o bölgenin ihtiyaçlarına özel programlar ve deneyimli kadrolarla hizmet veriyoruz."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((r, i) => {
            const list = institutions.filter((inst) => r.districts.includes(inst.district))
            return (
              <Reveal key={r.slug} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-sky/40 hover:shadow-card">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky/10 text-royal transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-royal group-hover:to-sky group-hover:text-white">
                      <Icon name="pin" className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-gradient-to-r from-royal to-sky px-3 py-1 text-xs font-bold text-white">
                      {r.count} Kurum
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                    <Link to={`/kurumlarimiz?bolge=${r.slug}`} className="after:absolute after:inset-0 after:content-['']">
                      {r.name}
                    </Link>
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.districts.map((d) => (
                      <span key={d} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600">
                        {d}
                      </span>
                    ))}
                  </div>
                  <ul className="relative z-10 mt-5 flex-1 space-y-1 border-t border-navy-100 pt-4">
                    {list.map((inst) => (
                      <li key={inst.slug}>
                        <Link
                          to={`/kurumlarimiz/${inst.slug}`}
                          className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-sm text-navy-600 transition-colors hover:bg-sky/10 hover:text-royal"
                        >
                          <span>{inst.name}</span>
                          <Icon name="arrow" className="h-4 w-4 shrink-0 text-navy-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-royal transition-all duration-300 group-hover:gap-2">
                    Bölgedeki kurumları gör <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="container-x py-8">
        <Reveal>
          <div className="rounded-[2rem] border border-navy-100 bg-white p-8 shadow-soft sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                align="left"
                eyebrow="Tüm İlçeler"
                title={<>Hizmet verdiğimiz <span className="gradient-text">noktalar</span></>}
              />
              <Link to="/kurumlarimiz" className="group inline-flex items-center gap-2 font-semibold text-royal">
                Kurumları Gör <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {districts.map((d) => (
                <Link
                  key={d}
                  to={`/kurumlarimiz?ilce=${encodeURIComponent(d)}`}
                  className="rounded-xl border border-navy-100 bg-[#f7f9fd] px-4 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:border-sky hover:text-royal"
                >
                  {d}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
