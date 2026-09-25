# Atakent Eğitim Kurumları — Web Sitesi

Kurumsal eğitim sitesi. **Slogan:** _Kendine Güven, Yapabileceğine İnan_ · **Motto:** _Ayrıcalık, Bilgi ve Değer_

## Teknoloji

- **Vite + React 18**: sayfalar lazy-load ile ayrı paketlere bölünür
- **Tailwind CSS**: Atakent logosundan türetilmiş lacivert / royal / parlak mavi renk sistemi
- **Framer Motion**: scroll animasyonları, banner slider, filtre geçişleri
- **React Router**: çok sayfalı yapı

## Sayfalar

| Sayfa | Yol |
|-------|-----|
| Anasayfa | `/` |
| Kurumsal | `/kurumsal` |
| Hakkımızda | `/hakkimizda` |
| Eğitim Felsefemiz | `/egitim-felsefemiz` |
| Bölgelerimiz | `/bolgelerimiz` |
| Kurumlarımız | `/kurumlarimiz` (`?bolge=sariyer`, `?ilce=Halkalı` filtreleri) |
| Kurum Detay | `/kurumlarimiz/:slug` |
| İletişim & Ön Kayıt | `/iletisim` (`?program=LGS Hazırlık`, `?kurum=<slug>` ön seçimleri) |

## Çalıştırma

```bash
npm install
npm run dev        # geliştirme sunucusu → http://localhost:5173
npm run build      # üretim derlemesi → dist/
npm run preview    # derlemeyi önizle → http://localhost:4173
```

## İçerik

- **`src/data/site.js`**: marka ve iletişim bilgileri, menü, değerler, programlar, kurum listesi, bölgeler, istatistikler, zaman çizelgesi, referanslar, SSS, sınav geri sayım tarihleri
- **`src/data/kurumDetay.js`**: her kurumun tanıtım metni, adresi, telefonu, Instagram ve harita bağlantısı, program ve rehberlik sekmeleri
- **`public/banner/`**: anasayfa duyuru bannerları (1920px ve 960px `-sm` sürümleri)
- **`public/media/atakent-logo.jpeg`**: logo ve favicon

Yeni kurum eklerken `site.js › institutions` listesine bir kayıt, `kurumDetay.js › institutionDetails` içine aynı `slug` ile detay ekleyin.

## Ön kayıt formu

Form bir sunucuya gönderilmez. Bilgileri doldurulmuş bir mesajla WhatsApp'ı açar (`brand.whatsapp`).

## Yayın

`vercel.json` tüm yolları `index.html`'e yönlendirir, böylece `/kurumlarimiz/tarabya-final` gibi alt sayfalar doğrudan açılabilir ve yenilenebilir.
