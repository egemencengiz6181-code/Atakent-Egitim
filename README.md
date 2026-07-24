# Atakent Eğitim Kurumları — Web Sitesi

Premium, modern ve tamamen responsive kurumsal eğitim sitesi.
**Slogan:** _Başarmak sanattır._

## Teknoloji

- **Vite + React 18** — hızlı, modüler yapı
- **Tailwind CSS** — logodan türetilmiş marka renk sistemi (lacivert / royal / parlak mavi)
- **Framer Motion** — scroll animasyonları, mikro etkileşimler
- **React Router** — çok sayfalı yapı

## Sayfalar

| Sayfa | Yol |
|-------|-----|
| Anasayfa | `/` |
| Kurumsal | `/kurumsal` |
| Başarı Modeli | `/basari-modeli` |
| Eğitim Felsefemiz | `/egitim-felsefemiz` |
| Kampüslerimiz | `/kampuslerimiz` |
| İletişim & Ön Kayıt | `/iletisim` |

## Çalıştırma

```bash
cd site
npm install        # bağımlılıklar (kurulu)
npm run dev        # geliştirme sunucusu → http://localhost:5173
npm run build      # üretim derlemesi → dist/
npm run preview    # derlemeyi önizle → http://localhost:4173
```

## İçerik & Görseller

- **Logo & Başarı Modeli posterleri** `public/media/` altında.
- Marka renkleri Atakent logosundaki ∞ mavi geçişinden alınmıştır.
- Metin içerikleri Atakent Eğitim için özgün olarak yazılmıştır; iletişim
  bilgileri (telefon, adres, e-posta) örnektir — gerçek bilgilerle
  `src/data/content.js` dosyasından güncelleyebilirsiniz.

## Özelleştirme

Tüm metinler, istatistikler, kampüsler ve program bilgileri tek dosyada:
**`src/data/content.js`** — buradan kolayca düzenlenebilir.
