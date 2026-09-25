import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon, { WhatsAppIcon } from '../components/Icon'
import { brand, faqs, institutions, formPrograms } from '../data/site'

export default function Iletisim() {
  const [openFaq, setOpenFaq] = useState(0)

  const channels = [
    { label: 'Telefon', value: brand.phone, href: brand.phoneHref, icon: 'phone' },
    { label: 'WhatsApp', value: 'Hızlı mesaj gönderin', href: brand.whatsapp, icon: 'whatsapp' },
    { label: 'E-posta', value: brand.email, href: `mailto:${brand.email}`, icon: 'mail' },
    { label: 'Kurumlarımız', value: `${brand.address} · Size en yakın şubeyi bulun`, href: '/bolgelerimiz', icon: 'pin' },
  ]

  return (
    <>
      <PageHero
        crumb="İletişim"
        eyebrow="İletişim"
        title={<>Geleceğe ilk adımı <span className="text-azure">birlikte atalım</span></>}
        desc="Ücretsiz seviye belirleme ve tanışma görüşmesi için formu doldurun; en kısa sürede size dönelim."
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Bize Ulaşın"
            title={<>Sorularınız için <span className="gradient-text">buradayız</span></>}
            desc="Telefon, WhatsApp veya e-posta ile bize dilediğiniz zaman ulaşabilirsiniz."
          />
          <div className="mt-8 space-y-4">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <ChannelLink href={c.href}>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-royal to-sky text-white shadow-glow">
                    {c.icon === 'whatsapp' ? <WhatsAppIcon className="h-5 w-5" /> : <Icon name={c.icon} className="h-5 w-5" />}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-widest text-navy-400">{c.label}</span>
                    <span className="block break-words font-semibold text-navy-900">{c.value}</span>
                  </span>
                </ChannelLink>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </section>

      <section className="container-x py-16">
        <SectionHeading eyebrow="S.S.S." title={<>Sıkça sorulan <span className="gradient-text">sorular</span></>} />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const open = openFaq === i
            return (
              <Reveal key={f.q} delay={i * 0.06}>
                <div className={`overflow-hidden rounded-2xl border bg-white shadow-soft transition-colors ${open ? 'border-sky/40' : 'border-navy-100'}`}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-bold text-navy-900 sm:text-lg">{f.q}</span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky/10 text-royal transition-transform ${open ? 'rotate-45' : ''}`}>
                      <Icon name="plus" className="h-4 w-4" stroke={3} />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-navy-600">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [params] = useSearchParams()
  const defaultProgram = formPrograms.find((p) => p === params.get('program')) ?? formPrograms[0]
  const defaultInstitution = institutions.find((i) => i.slug === params.get('kurum'))?.name ?? ''

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const lines = [
      'Merhaba, ön kayıt / bilgi talebim var.',
      `Ad Soyad: ${data.get('name')}`,
      `Telefon: ${data.get('phone')}`,
      data.get('email') && `E-posta: ${data.get('email')}`,
      `Program: ${data.get('program')}`,
      data.get('institution') && `Kurum: ${data.get('institution')}`,
      data.get('message') && `Mesaj: ${data.get('message')}`,
    ].filter(Boolean)
    const url = `${brand.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
    // Açılır pencere engellenirse aynı sekmede WhatsApp'a yönlendir
    const win = window.open(url, '_blank')
    if (win) win.opener = null
    else window.location.href = url
    setSent(true)
  }

  return (
    <div className="rounded-[2rem] border border-navy-100 bg-white p-7 shadow-card sm:p-10">
      {sent ? (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="grid min-h-[380px] place-items-center text-center">
          <div>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-royal to-sky text-white shadow-glow">
              <Icon name="check" className="h-8 w-8" stroke={3} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-navy-900">Talebiniz alındı</h3>
            <p className="mx-auto mt-2 max-w-sm text-navy-600">
              WhatsApp penceresinde mesajı göndermeyi unutmayın; en kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <button onClick={() => setSent(false)} className="btn-ghost mt-6">
              Yeni form gönder
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
          <h3 className="font-display text-2xl font-extrabold text-navy-900">Ön kayıt & bilgi formu</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Ad Soyad" name="name" placeholder="Adınız Soyadınız" required autoComplete="name" />
            <Field label="Telefon" name="phone" type="tel" placeholder="05xx xxx xx xx" required autoComplete="tel" pattern="[0-9 +()\-]{10,}" />
          </div>
          <Field label="E-posta" name="email" type="email" placeholder="ornek@eposta.com" autoComplete="email" />
          <div>
            <label htmlFor="program" className="mb-2 block text-sm font-semibold text-navy-800">İlgilendiğiniz Program</label>
            <select id="program" name="program" defaultValue={defaultProgram} className={inputClass}>
              {formPrograms.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="institution" className="mb-2 block text-sm font-semibold text-navy-800">Tercih Ettiğiniz Kurum</label>
            <select id="institution" name="institution" defaultValue={defaultInstitution} className={inputClass}>
              <option value="">Fark etmez / Önerin</option>
              {institutions.map((i) => (
                <option key={i.slug} value={i.name}>{i.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy-800">Mesajınız</label>
            <textarea id="message" name="message" rows={4} placeholder="Bize kısaca ihtiyacınızdan bahsedin..." className={`${inputClass} resize-none`} />
          </div>
          <button type="submit" className="btn-primary w-full">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp ile Gönder
          </button>
          <p className="text-center text-xs text-navy-400">
            Formu göndererek size ulaşmamız için iletişim bilgilerinizi paylaşmayı kabul edersiniz.
          </p>
        </form>
      )}
    </div>
  )
}

const inputClass =
  'w-full rounded-2xl border border-navy-200 bg-navy-50/40 px-4 py-3.5 text-sm text-navy-800 outline-none transition placeholder:text-navy-300 focus:border-sky focus:bg-white focus:ring-4 focus:ring-sky/15'

function Field({ label, name, type = 'text', placeholder, required, ...rest }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-navy-800">
        {label} {required && <span className="text-sky">*</span>}
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} className={inputClass} {...rest} />
    </div>
  )
}

function ChannelLink({ href, children }) {
  const className =
    'group flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-all duration-300 hover:border-sky/40 hover:shadow-card'
  if (href.startsWith('/')) return <Link to={href} className={className}>{children}</Link>
  const external = href.startsWith('http')
  return (
    <a href={href} className={className} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
      {children}
    </a>
  )
}
