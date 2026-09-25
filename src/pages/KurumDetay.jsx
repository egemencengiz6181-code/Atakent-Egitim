import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { brand, institutions } from '../data/site'
import { institutionDetails, institutionTabs } from '../data/kurumDetay'

export default function KurumDetay() {
  const { slug = '' } = useParams()
  const detail = institutionDetails[slug]
  const inst = institutions.find((i) => i.slug === slug)
  const tabs = institutionTabs[slug] ?? {}

  if (!detail || !inst) return <Navigate to="/kurumlarimiz" replace />

  const sameBrand = institutions.filter((i) => i.brand === inst.brand && i.slug !== slug).slice(0, 3)
  const related = sameBrand.length ? sameBrand : institutions.filter((i) => i.slug !== slug).slice(0, 3)
  const directions =
    detail.maps || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(detail.address)}`
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(detail.address)}&z=15&output=embed`
  const telHref = `tel:+${detail.phoneDigits}`

  return (
    <>
      <PageHero
        crumb={inst.name}
        parent={{ label: 'Kurumlarımız', to: '/kurumlarimiz' }}
        eyebrow={`${inst.category} · ${inst.district}`}
        title={detail.name}
        desc={inst.focus}
      />

      <section className="container-x grid grid-cols-1 gap-12 py-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,340px)]">
        <div className="min-w-0">
          <Reveal>
            <span className="eyebrow">Kurum Hakkında</span>
            <div className="mt-6 space-y-5 text-[1.02rem] leading-relaxed text-navy-600">
              {detail.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          {tabs['Programlarımız'] && (
            <Reveal delay={0.05} className="mt-14">
              <TabbedPanel
                key={`program-${slug}`}
                title="Programlarımız"
                subtitle="Seviyenize uygun programı seçin, ders düzenini ve içeriğini inceleyin."
                variant="program"
                tabs={tabs['Programlarımız']}
              />
            </Reveal>
          )}

          {tabs['Rehberlik'] && (
            <Reveal delay={0.05} className="mt-14">
              <TabbedPanel
                key={`rehberlik-${slug}`}
                title="Rehberlik & Destek"
                subtitle="Öğrenci ve velilerimize sunduğumuz psikolojik danışmanlık ve rehberlik hizmetleri."
                variant="rehberlik"
                tabs={tabs['Rehberlik']}
              />
            </Reveal>
          )}

          {detail.groups.length > 0 && !tabs['Rehberlik'] && (
            <Reveal delay={0.1} className="mt-12">
              <h2 className="font-display text-2xl font-extrabold text-navy-900">Gruplarımız & Hizmetlerimiz</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {detail.groups.map((g) => (
                  <div key={g} className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-soft">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky/10 text-royal">
                      <Icon name="check" className="h-5 w-5" stroke={2.5} />
                    </span>
                    <span className="text-sm font-semibold text-navy-800">{g}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal delay={0.1} className="mt-12">
            <h2 className="font-display text-2xl font-extrabold text-navy-900">Konum</h2>
            <div className="mt-6 overflow-hidden rounded-3xl border border-navy-100 bg-navy-50 shadow-card">
              <iframe
                title={`${detail.name} konumu`}
                src={mapEmbed}
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        <aside>
          <div className="sticky top-28 space-y-4">
            <Reveal>
              <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-card">
                <h3 className="font-display text-lg font-bold text-navy-900">İletişim Bilgileri</h3>
                <div className="mt-5 space-y-4 text-sm">
                  <InfoRow icon="pin" label="Adres" value={detail.address} />
                  <a href={telHref} className="block">
                    <InfoRow icon="phone" label="Telefon" value={detail.phone} accent />
                  </a>
                </div>
                <div className="mt-6 space-y-2.5">
                  <a href={telHref} className="btn-primary w-full">
                    Hemen Ara <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <a href={directions} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
                    <Icon name="route" className="h-4 w-4" /> Yol Tarifi Al
                  </a>
                  <Link to={`/iletisim?kurum=${slug}`} className="btn-ghost w-full">
                    <Icon name="mail" className="h-4 w-4" /> Ön Kayıt Formu
                  </Link>
                  {detail.instagram && (
                    <a href={detail.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
                      <Icon name="instagram" className="h-4 w-4" /> Instagram
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl mesh-bg noise p-7 text-white shadow-card">
                <p className="relative text-sm text-white/70">Genel Merkez</p>
                <a href={brand.phoneHref} className="relative mt-1 block font-display text-xl font-bold hover:text-azure">
                  {brand.phone}
                </a>
                <a href={`mailto:${brand.email}`} className="relative mt-2 block break-all text-sm text-white/70 hover:text-white">
                  {brand.email}
                </a>
              </div>
            </Reveal>
          </div>
        </aside>
      </section>

      <section className="container-x py-12">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-extrabold text-navy-900">Diğer Kurumlarımız</h2>
          <Link to="/kurumlarimiz" className="group inline-flex items-center gap-2 font-semibold text-royal">
            Tümü <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.08}>
              <Link
                to={`/kurumlarimiz/${r.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-sky/10 px-3 py-1 text-xs font-bold text-royal">{r.category}</span>
                  <span className="text-sm text-navy-500">{r.district}</span>
                </div>
                <h3 className="mt-5 flex-1 font-display text-lg font-bold leading-snug text-navy-900">{r.name}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-royal">
                  Detayları Gör <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

// Ardışık madde (li) öğelerini tek bir listede toplar
function groupContent(content) {
  const blocks = []
  for (const item of content) {
    if (item.type === 'li') {
      const last = blocks[blocks.length - 1]
      if (last && last.type === 'ul') last.items.push(item.text)
      else blocks.push({ type: 'ul', items: [item.text] })
    } else blocks.push({ type: item.type, text: item.text })
  }
  return blocks
}

function CheckItem({ children }) {
  return (
    <li className="flex gap-3 text-sm text-navy-600">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-sky/10 text-royal">
        <Icon name="check" className="h-3.5 w-3.5" stroke={2.5} />
      </span>
      <span className="leading-snug">{children}</span>
    </li>
  )
}

function TabbedPanel({ title, subtitle, variant, tabs }) {
  const [active, setActive] = useState(0)
  const tab = tabs[active] ?? tabs[0]
  const onlyList = tab.content.length > 0 && tab.content.every((c) => c.type === 'li')
  const blocks = groupContent(tab.content)

  return (
    <div className="min-w-0">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-navy-900 sm:text-[1.75rem]">{title}</h2>
          {subtitle && <p className="mt-1.5 text-sm text-navy-500">{subtitle}</p>}
        </div>
        <span className="hidden shrink-0 rounded-full bg-sky/10 px-3 py-1 text-xs font-bold text-royal sm:inline-flex">
          {tabs.length} {variant === 'program' ? 'program' : 'hizmet'}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[248px_minmax(0,1fr)]">
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:thin] lg:mx-0 lg:max-h-[440px] lg:flex-col lg:gap-1.5 lg:overflow-y-auto lg:overflow-x-visible lg:px-0 lg:pb-0 lg:pr-1.5">
          {tabs.map((t, i) => {
            const on = active === i
            return (
              <button
                key={t.label + i}
                onClick={() => setActive(i)}
                aria-pressed={on}
                className={`relative isolate shrink-0 overflow-hidden rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors duration-300 lg:w-full ${
                  on ? 'text-white' : 'bg-white text-navy-600 ring-1 ring-navy-100 hover:text-royal hover:ring-sky/40'
                }`}
              >
                {on && (
                  <motion.span
                    layoutId={`rail-${variant}`}
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-royal to-sky"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="flex items-center gap-2.5 whitespace-nowrap lg:whitespace-normal">
                  <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg text-[0.7rem] font-bold ${on ? 'bg-white/20 text-white' : 'bg-sky/10 text-royal'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 flex-1 lg:truncate">{t.label || `Bölüm ${i + 1}`}</span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="relative min-w-0 overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-sky/10 blur-2xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3 border-b border-navy-100 pb-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-royal to-sky text-white">
                  <Icon name={variant === 'program' ? 'calendar' : 'compass'} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-lg font-bold text-navy-900">{tab.label || title}</h3>
                  <p className="text-xs font-semibold text-royal">
                    {tab.content.length} {onlyList ? 'madde' : 'başlık'}
                  </p>
                </div>
              </div>

              {onlyList ? (
                <ul className="grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {tab.content.map((c, i) => (
                    <CheckItem key={i}>{c.text}</CheckItem>
                  ))}
                </ul>
              ) : (
                <div className="space-y-4">
                  {blocks.map((b, i) =>
                    b.type === 'ul' ? (
                      <ul key={i} className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                        {b.items.map((text, j) => (
                          <CheckItem key={j}>{text}</CheckItem>
                        ))}
                      </ul>
                    ) : b.type === 'h' ? (
                      <h4 key={i} className="pt-1 font-display text-base font-bold text-navy-900">{b.text}</h4>
                    ) : (
                      <p key={i} className="leading-relaxed text-navy-600">{b.text}</p>
                    ),
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ icon, label, value, accent }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky/10 text-royal">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-widest text-navy-400">{label}</span>
        <span className={`block font-semibold ${accent ? 'text-royal' : 'text-navy-900'}`}>{value}</span>
      </span>
    </div>
  )
}
