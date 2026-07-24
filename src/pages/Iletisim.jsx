import { useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { brand, faqs } from '../data/content'

export default function Iletisim() {
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        crumb="İletişim"
        eyebrow="İletişim & Ön Kayıt"
        title="Geleceğe ilk adımı birlikte atalım"
        desc="Formu doldurun, danışmanlarımız en kısa sürede size ulaşsın. Sorularınız için telefon ve WhatsApp hattımız da açık."
      />

      <section className="container-x py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-[2rem] border border-navy-100 bg-white p-7 shadow-card sm:p-10">
                <h2 className="font-display text-2xl font-extrabold text-navy-900">Ön Kayıt Formu</h2>
                <p className="mt-2 text-sm text-navy-500">Alanları doldurun; size özel bir yol haritası hazırlayalım.</p>

                {sent ? (
                  <div className="mt-8 flex flex-col items-center rounded-3xl bg-sky/5 p-10 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-royal to-sky text-white shadow-glow">
                      <Icon name="check" className="h-8 w-8" stroke={3} />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-navy-900">Talebiniz alındı!</h3>
                    <p className="mt-2 max-w-sm text-sm text-navy-600">
                      Teşekkürler. Danışmanlarımız en kısa sürede sizinle iletişime geçecek. {brand.slogan}.
                    </p>
                    <button onClick={() => setSent(false)} className="btn-ghost mt-6">Yeni form doldur</button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                    <Field label="Öğrenci Adı Soyadı" name="ogrenci" placeholder="Ad Soyad" />
                    <Field label="Veli Adı Soyadı" name="veli" placeholder="Ad Soyad" />
                    <Field label="Telefon" name="tel" type="tel" placeholder="05__ ___ __ __" />
                    <Field label="E-posta" name="mail" type="email" placeholder="ornek@eposta.com" />
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-navy-800">İlgilenilen Program</label>
                      <select className="w-full rounded-2xl border border-navy-200 bg-navy-50/40 px-4 py-3.5 text-sm text-navy-800 outline-none transition focus:border-sky focus:ring-4 focus:ring-sky/15">
                        <option>Özel Okul (Anaokulu / İlkokul / Ortaokul / Lise)</option>
                        <option>YKS Kursu (TYT / AYT)</option>
                        <option>LGS Kursu</option>
                        <option>Yurt Dışı Eğitim (atakent global)</option>
                        <option>Kariyer & Üniversite Danışmanlığı</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-navy-800">Mesajınız</label>
                      <textarea rows={4} placeholder="Eklemek istedikleriniz..." className="w-full resize-none rounded-2xl border border-navy-200 bg-navy-50/40 px-4 py-3.5 text-sm text-navy-800 outline-none transition focus:border-sky focus:ring-4 focus:ring-sky/15" />
                    </div>
                    <div className="sm:col-span-2">
                      <button type="submit" className="btn-primary w-full">
                        Ön Kaydı Gönder <Icon name="arrow" className="h-4 w-4" />
                      </button>
                      <p className="mt-3 text-center text-xs text-navy-400">
                        Göndererek KVKK aydınlatma metnini okuduğunuzu kabul edersiniz.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* İletişim bilgileri */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-[2rem] mesh-bg noise p-8 text-white shadow-card">
                <h3 className="font-display text-xl font-extrabold">İletişim Bilgileri</h3>
                <ul className="mt-6 space-y-5 text-sm">
                  <ContactRow icon="pin" title="Adres" value={brand.address} />
                  <ContactRow icon="phone" title="Telefon" value={brand.phone} href={brand.phoneHref} />
                  <ContactRow icon="mail" title="E-posta" value={brand.email} href={`mailto:${brand.email}`} />
                  <ContactRow icon="globe" title="Web" value={brand.web} />
                </ul>
                <a href={brand.whatsapp} className="btn-white mt-8 w-full">
                  <Icon name="phone" className="h-4 w-4" /> WhatsApp’tan Yaz
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 flex items-center gap-4 rounded-3xl border border-navy-100 bg-white p-6 shadow-soft">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky/10 text-royal">
                  <Icon name="clock" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-navy-900">Çalışma Saatleri</p>
                  <p className="text-sm text-navy-500">Pzt–Cmt · 09:00 – 19:00</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="container-x py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-extrabold text-navy-900">Sıkça Sorulan Sorular</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i
              return (
                <Reveal key={f.q} delay={i * 0.05}>
                  <div className={`overflow-hidden rounded-2xl border bg-white shadow-soft transition-colors ${open ? 'border-sky/40' : 'border-navy-100'}`}>
                    <button
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-base font-bold text-navy-900">{f.q}</span>
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
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-navy-800">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-navy-200 bg-navy-50/40 px-4 py-3.5 text-sm text-navy-800 outline-none transition focus:border-sky focus:ring-4 focus:ring-sky/15"
      />
    </div>
  )
}

function ContactRow({ icon, title, value, href }) {
  const content = (
    <div className="flex items-start gap-3.5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-sky">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{title}</p>
        <p className="mt-0.5 text-white/90">{value}</p>
      </div>
    </div>
  )
  return <li>{href ? <a href={href} className="block transition-opacity hover:opacity-80">{content}</a> : content}</li>
}
