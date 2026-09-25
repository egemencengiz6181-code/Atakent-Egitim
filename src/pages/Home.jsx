import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import SectionHeading from '../components/SectionHeading'
import BannerSlider from '../components/BannerSlider'
import Countdown from '../components/Countdown'
import InstitutionCard from '../components/InstitutionCard'
import CTABanner from '../components/CTABanner'
import {
  brand,
  stats,
  brandMarquee,
  principles,
  programs,
  ecosystem,
  institutions,
  testimonials,
  examCountdowns,
  images,
} from '../data/site'

export default function Home() {
  return (
    <>
      <BannerSection />
      <Hero />
      <StatsStrip />
      <Principles />
      <Programs />
      <Ecosystem />
      <CountdownSection />
      <InstitutionsPreview />
      <Testimonials />
      <CTABanner />
    </>
  )
}

/* ---------------- BANNER ---------------- */
function BannerSection() {
  return (
    <section className="relative pt-[92px] sm:pt-[100px]" aria-label="Duyuru bannerları">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <BannerSlider />
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 hero-grid" />
      <div className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-sky/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[26rem] w-[26rem] rounded-full bg-royal/10 blur-3xl" />

      <div className="container-x grid items-center gap-14 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">
              <Icon name="infinity" className="h-4 w-4" /> {brand.motto}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl"
          >
            Kendine Güven, <span className="gradient-text">Yapabileceğine</span> İnan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600"
          >
            {brand.founded}’dan bu yana İstanbul genelinde özel okullarımız ve kurslarımızla her
            öğrencinin potansiyelini keşfediyor; onları akademik başarıya, güçlü değerlere ve
            geleceğin teknolojilerine hazırlıyoruz.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link to="/kurumlarimiz" className="btn-primary">
              Kurumlarımızı Keşfedin <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/iletisim" className="btn-ghost">
              Ücretsiz Görüşme <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-sky/10 text-royal">
                <Icon name="cap" className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display font-bold text-navy-900">25.000+ mezun</p>
                <p className="text-sm text-navy-500">Bize güvenen aileler</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-navy-100 sm:block" />
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold">
                <Icon name="star" className="h-6 w-6" fill="currentColor" stroke={0} />
              </span>
              <div>
                <p className="font-display font-bold text-navy-900">%94 memnuniyet</p>
                <p className="text-sm text-navy-500">Veli değerlendirmesi</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

function HeroVisual() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-md lg:max-w-none"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] mesh-bg shadow-card">
        <motion.img
          style={{ y }}
          src={images.hero}
          alt={`${brand.name} öğrencileri`}
          width={720}
          height={840}
          fetchpriority="high"
          className="h-[420px] w-full scale-110 object-cover sm:h-[520px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -left-3 bottom-10 w-52 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-card backdrop-blur sm:-left-8"
      >
        <p className="font-display text-3xl font-extrabold text-royal">%94</p>
        <p className="text-sm text-navy-500">Veli memnuniyet oranı</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.75 }}
        className="absolute -right-2 top-8 rounded-2xl bg-gradient-to-br from-royal to-sky p-4 text-white shadow-glow sm:-right-6"
      >
        <p className="font-display text-3xl font-extrabold">{institutions.length}</p>
        <p className="text-sm text-white/80">Kurum & Şube</p>
      </motion.div>
    </motion.div>
  )
}

/* ---------------- STATS + MARKA ŞERİDİ ---------------- */
function StatsStrip() {
  const doubled = [...brandMarquee, ...brandMarquee]
  return (
    <section className="border-y border-navy-100 bg-white/70 backdrop-blur">
      <div className="container-x py-10">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="flex flex-col-reverse text-center lg:text-left">
              <dt className="mt-1 text-sm font-medium text-navy-600">{s.label}</dt>
              <dd className="font-display text-4xl font-extrabold text-royal lg:text-5xl">
                <CountUp value={s.value} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
      <div className="border-t border-navy-100 py-5">
        <div className="container-x">
          <div className="marquee-mask overflow-hidden py-1">
            <div className="flex w-max animate-marquee items-center gap-12 pr-12">
              {doubled.map((name, i) => (
                <div key={i} className="flex shrink-0 items-center gap-12">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-navy-400">{name}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-sky/50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- DEĞERLER ---------------- */
function Principles() {
  return (
    <section className="container-x py-24">
      <SectionHeading
        eyebrow="Değerlerimiz"
        title={<>Üç ilke üzerine kurulu bir <span className="gradient-text">eğitim anlayışı</span></>}
        desc="Her öğrenciyi biricik gören yaklaşımımız; ayrıcalık, bilgi ve değer ekseninde şekillenir."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.key} delay={i * 0.12}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-navy-100 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky/5 transition-transform duration-500 group-hover:scale-150" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal to-sky font-display text-xl font-extrabold text-white shadow-glow">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="relative mt-6 font-display text-2xl font-bold text-navy-900">{p.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-navy-600">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- PROGRAMLAR ---------------- */
function Programs() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-navy-50/40 to-white" />
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Programlarımız"
            title={<>Her hedefe uygun <span className="gradient-text">hazırlık programı</span></>}
          />
          <Reveal delay={0.1}>
            <p className="max-w-sm text-navy-600">
              Anaokulundan üniversiteye; sınav odaklı, ölçme-değerlendirmeye dayalı ve teknolojiyle
              güçlendirilmiş programlar sunuyoruz.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                <div className="h-1.5 bg-gradient-to-r from-royal to-sky" />
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-gradient-to-r from-royal to-sky px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                      {p.tag}
                    </span>
                    <Icon name="arrow" className="h-5 w-5 text-navy-200 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-navy-900">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{p.desc}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold text-royal">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- DÜNDEN BUGÜNE ---------------- */
function Ecosystem() {
  return (
    <section className="container-x py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] mesh-bg shadow-card">
              <img
                src={images.classroom}
                alt="Öğrenme ortamı"
                width={640}
                height={560}
                loading="lazy"
                className="h-[380px] w-full object-cover sm:h-[480px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 hidden rounded-2xl bg-gradient-to-br from-royal to-sky p-6 text-white shadow-glow sm:block">
              <p className="font-display text-4xl font-extrabold">{new Date().getFullYear() - brand.founded}</p>
              <p className="max-w-[7rem] text-sm text-white/80">Yıllık köklü deneyim</p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Dünden Bugüne"
            title={<>Başarı, birlikte kurulan bir <span className="gradient-text">güven ilişkisi</span></>}
            desc="Mutlu veli, mutlu öğrenci ve deneyimli öğretmenlerden oluşan güçlü bir ekosistem kuruyoruz."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {ecosystem.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:border-sky/40 hover:shadow-card">
                  <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-royal to-sky" />
                  <h4 className="font-display text-lg font-bold text-navy-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- GERİ SAYIM ---------------- */
function CountdownSection() {
  return (
    <section className="relative overflow-hidden mesh-bg noise">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-sky/25 blur-3xl" />
      <div className="container-x relative z-10 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              light
              eyebrow="Hedefe Geri Sayım"
              title={<>Planladığınız başarıya <span className="text-azure">kalan zaman</span></>}
              desc="Sınav gününe kadar her saniye değerli. Doğru planlama ve düzenli takip ile hedefinize birlikte ulaşıyoruz."
            />
            <Reveal delay={0.15}>
              <Link to="/iletisim" className="btn-white mt-8">
                Hazırlığa Başlayın <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5">
            {examCountdowns.map((c, i) => (
              <Reveal key={c.label} delay={0.1 + i * 0.1}>
                <Countdown label={c.label} date={c.date} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- KURUMLAR ---------------- */
function InstitutionsPreview() {
  return (
    <section className="container-x py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Kurumlarımız"
          title={<>İstanbul’un dört bir yanında <span className="gradient-text">yanınızdayız</span></>}
        />
        <Reveal delay={0.1}>
          <Link to="/kurumlarimiz" className="group inline-flex items-center gap-2 font-semibold text-royal">
            Tümünü Gör <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {institutions.slice(0, 6).map((inst, i) => (
          <Reveal key={inst.slug} delay={i * 0.07}>
            <InstitutionCard inst={inst} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- REFERANSLAR ---------------- */
function Testimonials() {
  return (
    <section className="container-x py-16">
      <SectionHeading
        eyebrow="Referanslar"
        title={<>Velilerimiz ve öğrencilerimiz <span className="gradient-text">ne diyor?</span></>}
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.12}>
            <figure className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-8 shadow-soft">
              <Icon name="quote" className="h-9 w-9 text-sky/30" fill="currentColor" stroke={0} />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-navy-800">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-royal to-sky font-bold text-white">
                  {t.author[0]}
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy-900">{t.author}</p>
                  <p className="text-xs text-royal">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
