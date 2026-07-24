import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import SectionHeading from '../components/SectionHeading'
import SuccessMarquee from '../components/SuccessMarquee'
import CTABanner from '../components/CTABanner'
import { stats, pillars, programs, whyUs, philosophy, testimonials, atamega, brand } from '../data/content'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Pillars />
      <SuccessSection />
      <ProgramsSection />
      <PhilosophyTeaser />
      <WhySection />
      <AtaMega />
      <Testimonials />
      <CTABanner />
      <div className="h-8" />
    </>
  )
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-[74px]">
      <div className="absolute inset-0 -z-10 hero-grid" />
      <div className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-sky/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[26rem] w-[26rem] rounded-full bg-royal/10 blur-3xl" />

      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow">
              <Icon name="infinity" className="h-4 w-4" /> {brand.founded}’dan beri · {brand.slogan}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
              Geleceğin liderlerini <span className="gradient-text">bilimle</span> yetiştiriyoruz
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600">
              Atakent Eğitim Kurumları; özel okulları, kursları ve kanıtlanmış Başarı Modeli ile
              her öğrenciye özel bir yol haritası çizer. Çünkü inanıyoruz:{' '}
              <span className="font-semibold text-navy-800">başarmak bir sanattır.</span>
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/iletisim" className="btn-primary">
                Ücretsiz Ön Kayıt <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to="/basari-modeli" className="btn-ghost">
                <Icon name="play" className="h-4 w-4" fill="currentColor" /> Başarı Modeli’ni keşfet
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {['#1E5AA8', '#2E8BE6', '#4DA3E8', '#0B2A5B'].map((c, i) => (
                  <span key={i} className="grid h-11 w-11 place-items-center rounded-full border-2 border-white text-xs font-bold text-white shadow" style={{ backgroundColor: c }}>
                    <Icon name="cap" className="h-5 w-5" />
                  </span>
                ))}
              </div>
              <p className="text-sm text-navy-600">
                <span className="font-bold text-navy-900">25.000+</span> mezun öğrenci ve
                <span className="font-bold text-navy-900"> %98</span> veli memnuniyeti
              </p>
            </div>
          </Reveal>
        </div>

        {/* Hero görsel kompozisyonu */}
        <div className="lg:col-span-6">
          <HeroVisual />
        </div>
      </div>

      {/* Alt logo şeridi */}
      <div className="border-y border-navy-100 bg-white/60 backdrop-blur">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-xs font-bold uppercase tracking-[0.2em] text-navy-400 sm:justify-between">
          <span>Anaokulu</span>
          <span>İlkokul</span>
          <span>Ortaokul</span>
          <span>Lise</span>
          <span>YKS Kursları</span>
          <span>LGS Kursları</span>
          <span>Yurt Dışı Eğitim</span>
        </div>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-md lg:max-w-none"
    >
      {/* Ana kart */}
      <div className="relative overflow-hidden rounded-[2.5rem] mesh-bg noise p-8 shadow-card">
        <div className="absolute right-6 top-6 h-20 w-20 animate-spin-slow rounded-full border border-white/20" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-white">
            <Icon name="infinity" className="h-8 w-8 text-azure" />
            <span className="font-display text-xl font-extrabold lowercase">atakent</span>
          </div>
          <p className="mt-6 font-display text-2xl font-extrabold leading-snug text-white">
            Kendine güven,<br />yapabileceğine inan.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { k: 'YKS', v: 'Deneme & Analiz' },
              { k: 'LGS', v: 'Dikkat Atölyesi' },
              { k: 'Global', v: 'Yurt Dışı Eğitim' },
              { k: '360°', v: 'Ölçme Değerlendirme' },
            ].map((b) => (
              <div key={b.k} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="font-display text-lg font-bold text-white">{b.k}</p>
                <p className="text-xs text-white/70">{b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Yüzen rozet */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-7 -left-4 hidden rounded-2xl border border-white/70 bg-white/95 p-4 shadow-card backdrop-blur lg:block"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold">
            <Icon name="star" className="h-6 w-6" fill="currentColor" stroke={0} />
          </span>
          <div>
            <p className="font-display text-lg font-extrabold text-navy-900">%98</p>
            <p className="text-[11px] text-navy-500">Veli memnuniyeti</p>
          </div>
        </div>
      </motion.div>

      {/* Yüzen rozet 2 */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/70 bg-white/90 p-4 shadow-card backdrop-blur sm:block"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky/15 text-sky">
            <Icon name="chart" className="h-6 w-6" />
          </span>
          <div>
            <p className="font-display text-lg font-extrabold text-navy-900">40+</p>
            <p className="text-[11px] text-navy-500">Kampüs & şube</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ---------------- STATS ---------------- */
function StatsStrip() {
  return (
    <section className="container-x -mt-2 py-16">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="card-glass h-full p-6 text-center">
              <p className="font-display text-4xl font-extrabold text-royal sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-navy-600">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- PILLARS ---------------- */
function Pillars() {
  return (
    <section className="container-x py-16">
      <SectionHeading
        eyebrow="Neye inanıyoruz"
        title="Üç temel taşımız"
        desc="Atakent’in tüm eğitim yaklaşımı üç değerin üzerinde yükselir: ayrıcalık, bilgi ve değer."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-navy-100 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky/5 transition-transform duration-500 group-hover:scale-150" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal to-sky text-white shadow-glow">
                <Icon name={p.icon} className="h-7 w-7" />
              </span>
              <h3 className="relative mt-6 font-display text-xl font-bold text-navy-900">{p.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-navy-600">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- SUCCESS MODEL ---------------- */
function SuccessSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-navy-50/40 to-white" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Atakent Başarı Modeli"
          title="Başarıyı tesadüfe bırakmayan bilimsel sistem"
          desc="Ölçme, analiz, dikkat, kazanım takibi ve rehberliği tek çatı altında birleştiren dokuz adımlık modelimiz. Her adımın kendi rengi, her öğrencinin kendi hikâyesi var."
        />
      </div>
      <div className="mt-14">
        <SuccessMarquee />
      </div>
      <div className="container-x mt-12 text-center">
        <Link to="/basari-modeli" className="btn-primary">
          Tüm modeli incele <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

/* ---------------- PROGRAMS ---------------- */
function ProgramsSection() {
  return (
    <section className="container-x py-16">
      <SectionHeading
        eyebrow="Kurumlarımız"
        title="Her yaşa, her hedefe uygun eğitim"
        desc="Anaokulundan üniversite hazırlığına kadar bütünsel bir eğitim ekosistemi."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {programs.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
              <div className="relative h-2 bg-gradient-to-r from-royal to-sky" />
              <div className="flex flex-1 flex-col p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-sky">{p.kicker}</p>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-navy-900">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{p.text}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-navy-700">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-royal" stroke={3} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link to="/kampuslerimiz" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-royal link-underline">
                  Detaylı bilgi <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- PHILOSOPHY TEASER ---------------- */
function PhilosophyTeaser() {
  return (
    <section className="container-x py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] mesh-bg noise p-10 shadow-card">
              <Icon name="infinity" className="h-12 w-12 text-azure" />
              <p className="mt-6 font-display text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                “Eğitim, bir insanı içindeki en iyi versiyona dönüştürme sanatıdır.”
              </p>
              <p className="mt-6 text-sm text-white/70">— Atakent Eğitim Felsefesi</p>
            </div>
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-card backdrop-blur sm:block">
              <p className="font-display text-lg font-extrabold text-navy-900">Atatürk’ün</p>
              <p className="text-xs text-navy-500">aydınlanma ilkeleri ışığında</p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Eğitim Felsefemiz"
            title="Akademik başarı kadar iyi insan yetiştirmek"
          />
          <div className="mt-8 space-y-5">
            {philosophy.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky/10 text-royal">
                    <Icon name="check" className="h-5 w-5" stroke={3} />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-bold text-navy-900">{p.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Link to="/egitim-felsefemiz" className="btn-ghost mt-8">
            Felsefemizin tamamı <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ---------------- WHY ---------------- */
function WhySection() {
  return (
    <section className="container-x py-16">
      <SectionHeading
        eyebrow="Neden Atakent?"
        title="Farkımızı hissettiren altı neden"
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyUs.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.06}>
            <div className="group h-full rounded-3xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-500 hover:border-sky/40 hover:shadow-card">
              <span className="font-display text-3xl font-extrabold text-navy-100 transition-colors group-hover:text-sky/30">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-navy-900">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{w.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- ATA/MEGA ---------------- */
function AtaMega() {
  return (
    <section className="container-x py-16">
      <Reveal>
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-navy-100 bg-white shadow-card lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
            <img src={atamega.image} alt={atamega.name} className="h-full w-full object-cover" />
          </div>
          <div className="p-8 sm:p-12">
            <span className="eyebrow">{atamega.name}</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-navy-900">
              {atamega.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">{atamega.desc}</p>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky/10 text-royal">
                  <Icon name="clock" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-navy-900">Her ayın 1’i & 15’i</p>
                  <p className="text-xs text-navy-500">Sürekli öğretmen gelişimi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section className="container-x py-16">
      <SectionHeading eyebrow="Onların sözleriyle" title="Başarı hikâyeleri" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <figure className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-8 shadow-soft">
              <Icon name="quote" className="h-9 w-9 text-sky/30" fill="currentColor" stroke={0} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-700">“{t.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-royal to-sky font-bold text-white">
                  {t.name[0]}
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy-900">{t.name}</p>
                  <p className="text-xs text-navy-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
