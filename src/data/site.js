// Atakent Eğitim Kurumları — site genelindeki tüm metin ve veriler.
// Kurum detay sayfalarının içerikleri için bkz. kurumDetay.js

export const brand = {
  name: 'Atakent Eğitim Kurumları',
  slogan: 'Kendine Güven, Yapabileceğine İnan',
  motto: 'Ayrıcalık, Bilgi ve Değer',
  founded: 2009,
  phone: '+90 546 569 6565',
  phoneHref: 'tel:+905465696565',
  whatsapp: 'https://wa.me/905465696565',
  email: 'info@atakentegitimkurumlari.com',
  address: 'İstanbul, Türkiye',
}

export const nav = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Kurumsal', to: '/kurumsal' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Eğitim Felsefemiz', to: '/egitim-felsefemiz' },
  { label: 'Bölgelerimiz', to: '/bolgelerimiz' },
  { label: 'Kurumlarımız', to: '/kurumlarimiz' },
  { label: 'İletişim', to: '/iletisim' },
]

export const footerPrograms = [
  { label: 'YKS Hazırlık', to: '/iletisim?program=YKS Hazırlık' },
  { label: 'LGS Hazırlık', to: '/iletisim?program=LGS Hazırlık' },
  { label: 'Özel Okul (K12)', to: '/kurumlarimiz/tarabya-yildiz-schools' },
  { label: 'Yapay Zeka Destekli Sistem', to: '/egitim-felsefemiz' },
]

// Unsplash görselleri
const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`

export const images = {
  hero: unsplash('1523240795612-9a054b0db644', 900),
  classroom: unsplash('1427504494785-3a9ca7044f45', 900),
  campus: unsplash('1562774053-701939374585', 1200),
  library: unsplash('1481627834876-b7833e8f5570', 1000),
  graduation: unsplash('1627556704302-624286467c65', 1200),
  reading: unsplash('1503676260728-1c00da094a0b', 900),
}

export const banners = [
  {
    id: 'final',
    src: '/banner/final.webp',
    srcSm: '/banner/final-sm.webp',
    alt: 'Final’de başarı geleneği devam ediyor — YKS 2026 ilk 100’de 44 derece, LGS 2026’da 26 Türkiye birinciliği',
  },
  {
    id: 'fen-bilimleri',
    src: '/banner/fen-bilimleri.webp',
    srcSm: '/banner/fen-bilimleri-sm.webp',
    alt: 'Nazmi Arıkan Fen Bilimleri — 2026 sınav sonuçlarında LGS’de 6 Türkiye 1.si, YKS’de 4 ilk 100 derecesi ve 16 Türkiye derecesi',
  },
  {
    id: 'sevinc',
    src: '/banner/sevinc.webp',
    srcSm: '/banner/sevinc-sm.webp',
    alt: '2026 LGS’de Sevinç’le kazandılar — %1’lik dilimde 62, %2’lik dilimde 96, %3’lük dilimde 127 öğrenci',
  },
]

export const brandMarquee = [
  'Final Dershaneleri',
  'Nazmi Arıkan Fen Bilimleri',
  'Sevinç VİP',
  'Yıldız Schools TED',
  'YKS Hazırlık',
  'LGS Hazırlık',
]

export const principles = [
  {
    key: 'ayricalik',
    icon: 'star',
    title: 'Ayrıcalık',
    desc: 'Her öğrencinin kendine özgü yeteneklerini keşfeder, ona özel bir yol haritası tasarlarız. Kalabalıkta kaybolmayan, fark edilen bir eğitim ayrıcalığı.',
  },
  {
    key: 'bilgi',
    icon: 'book',
    title: 'Bilgi',
    desc: 'Akademik başarının ötesinde; eleştirel düşünme, problem çözme ve iletişim becerileriyle donatılmış, yaşam boyu öğrenen bireyler yetiştiririz.',
  },
  {
    key: 'deger',
    icon: 'heart',
    title: 'Değer',
    desc: 'Güçlü etik değerlere, empatiye ve topluma karşı sorumluluk bilincine sahip; merhametli ve saygılı nesiller inşa ederiz.',
  },
]

export const ecosystem = [
  {
    title: 'Mutlu Veli',
    desc: 'Şeffaf iletişim ve düzenli geri bildirimlerle velilerimizi sürecin her adımında yanımızda tutuyoruz.',
  },
  {
    title: 'Mutlu Öğrenci',
    desc: 'Öğrenmeyi keyifli, güven verici ve motive edici bir deneyime dönüştüren sıcak bir öğrenme ortamı.',
  },
  {
    title: 'Deneyimli Öğretmen',
    desc: 'Alanında uzman, ölçme-değerlendirme odaklı ve öğrenciyi merkeze alan güçlü bir akademik kadro.',
  },
  {
    title: 'Yapay Zeka Destekli Sistem',
    desc: 'Kişiye özel çalışma planları ve anlık analiz sunan yapay zeka destekli öğrenme platformu.',
  },
]

export const philosophy = [
  {
    title: 'Atatürk’ün Fikirleriyle Aydınlanıyoruz',
    desc: 'Eğitim felsefemizin temelinde Mustafa Kemal Atatürk’ün aydınlanmacı düşüncesi yer alır. Akademik başarının yanında milli ve manevi değerlerle donanmış bireyler yetiştiririz.',
  },
  {
    title: 'Başarılı ve Özgüvenli Bireyler',
    desc: 'Öğrencilerimizin potansiyellerini keşfetmelerine, benzersiz yeteneklerini geliştirmelerine ve kendilerine güvenmelerine olanak tanıyan bir ortam sunarız.',
  },
  {
    title: 'Teknolojik Becerilerle Donatıyoruz',
    desc: 'Yapay zeka destekli sistemler, interaktif içerikler ve dijital araçlarla öğrenme deneyimini zenginleştirir, öğrencileri geleceğe hazırlarız.',
  },
  {
    title: 'Sanat ve Sporla Gelişim',
    desc: 'Drama, resim, müzik ve spor faaliyetleriyle öğrencilerimizin yaratıcılığını, disiplinini ve özgüvenini artırırız.',
  },
  {
    title: 'Merhamet ve Saygıya Değer Veriyoruz',
    desc: 'Farklılıklara saygı ve hoşgörü, eğitim anlayışımızın temel taşıdır. Empati kurabilen, sorumluluk sahibi bireyler yetiştiririz.',
  },
]

export const institutions = [
  {
    slug: 'tarabya-yildiz-schools',
    name: 'Tarabya Yıldız Schools TED AD',
    brand: 'Yıldız Schools',
    district: 'Tarabya',
    category: 'Özel Okul',
    focus: 'Anaokulu · İlkokul · Ortaokul · Lise',
  },
  {
    slug: 'tarabya-final',
    name: 'Tarabya Final Dershanesi',
    brand: 'Final',
    district: 'Tarabya',
    category: 'Premium',
    focus: 'YKS · LGS',
  },
  {
    slug: 'zekeriyakoy-nazmi-arikan',
    name: 'Zekeriyaköy Nazmi Arıkan Fen Bilimleri',
    brand: 'Nazmi Arıkan',
    district: 'Zekeriyaköy',
    category: 'Premium',
    focus: 'Fen Bilimleri · YKS',
  },
  {
    slug: 'florya-sevinc-vip',
    name: 'Florya Sevinç VİP Dershanesi',
    brand: 'Sevinç',
    district: 'Florya',
    category: 'Premium',
    focus: 'VIP Butik Eğitim',
  },
  {
    slug: 'sirinevler-final',
    name: 'Şirinevler Final Dershanesi',
    brand: 'Final',
    district: 'Şirinevler',
    category: 'Kurs',
    focus: 'YKS',
  },
  {
    slug: 'sirinevler-final-lgs',
    name: 'Şirinevler Final LGS Dershanesi',
    brand: 'Final',
    district: 'Şirinevler',
    category: 'Kurs',
    focus: 'LGS',
  },
  {
    slug: 'mimaroba-final',
    name: 'Mimaroba Final Dershanesi',
    brand: 'Final',
    district: 'Mimaroba',
    category: 'Kurs',
    focus: 'YKS · LGS',
  },
  {
    slug: 'sefakoy-final',
    name: 'Sefaköy Final Dershanesi',
    brand: 'Final',
    district: 'Sefaköy',
    category: 'Kurs',
    focus: 'YKS',
  },
  {
    slug: 'sefakoy-final-lgs',
    name: 'Sefaköy Final LGS Dershanesi',
    brand: 'Final',
    district: 'Sefaköy',
    category: 'Kurs',
    focus: 'LGS',
  },
  {
    slug: 'halkali-final-lgs',
    name: 'Halkalı Final LGS Dershanesi',
    brand: 'Final',
    district: 'Halkalı',
    category: 'Kurs',
    focus: 'LGS',
  },
  {
    slug: 'esenler-nazmi-arikan',
    name: 'Esenler Nazmi Arıkan Fen Bilimleri',
    brand: 'Nazmi Arıkan',
    district: 'Esenler',
    category: 'Kurs',
    focus: 'Fen Bilimleri',
  },
  {
    slug: 'halkali-nazmi-arikan',
    name: 'Halkalı Nazmi Arıkan Fen Bilimleri',
    brand: 'Nazmi Arıkan',
    district: 'Halkalı',
    category: 'Kurs',
    focus: 'Fen Bilimleri',
  },
  {
    slug: 'bakirkoy-nazmi-arikan',
    name: 'Bakırköy Nazmi Arıkan Fen Bilimleri',
    brand: 'Nazmi Arıkan',
    district: 'Bakırköy',
    category: 'Kurs',
    focus: 'Fen Bilimleri',
  },
  {
    slug: 'bahcelievler-sevinc',
    name: 'Bahçelievler Sevinç Dershanesi',
    brand: 'Sevinç',
    district: 'Bahçelievler',
    category: 'Kurs',
    focus: 'YKS · LGS',
  },
]

const regionList = [
  { slug: 'sariyer', name: 'Sarıyer Bölgesi', districts: ['Tarabya', 'Zekeriyaköy'] },
  { slug: 'bakirkoy', name: 'Bakırköy Bölgesi', districts: ['Florya', 'Bakırköy'] },
  { slug: 'bahcelievler', name: 'Bahçelievler Bölgesi', districts: ['Şirinevler', 'Bahçelievler'] },
  { slug: 'kucukcekmece', name: 'Küçükçekmece Bölgesi', districts: ['Halkalı', 'Sefaköy'] },
  { slug: 'buyukcekmece', name: 'Büyükçekmece Bölgesi', districts: ['Mimaroba'] },
  { slug: 'esenler', name: 'Esenler Bölgesi', districts: ['Esenler'] },
]

export const regions = regionList.map((r) => ({
  ...r,
  count: institutions.filter((i) => r.districts.includes(i.district)).length,
}))

export const stats = [
  { value: '15+', label: 'Yıllık Deneyim' },
  { value: String(institutions.length), label: 'Kurum & Şube' },
  { value: '25.000+', label: 'Mezun Öğrenci' },
  { value: '%94', label: 'Veli Memnuniyeti' },
]

export const programs = [
  {
    tag: 'YKS',
    title: 'Üniversiteye Hazırlık',
    desc: 'TYT ve AYT odaklı, birebir etüt ve deneme sınavı sistemiyle desteklenen yoğun hazırlık programı.',
    points: ['Haftalık deneme & analiz', 'Birebir rehberlik', 'Konu tarama & pekiştirme'],
  },
  {
    tag: 'LGS',
    title: 'Liseye Geçiş Sistemi',
    desc: 'Ortaokul öğrencileri için kademeli, ölçme-değerlendirme odaklı ve motivasyonu yüksek tutan program.',
    points: ['Kazanım takibi', 'Veli bilgilendirme', 'Sınav kaygısı yönetimi'],
  },
  {
    tag: 'K12',
    title: 'Özel Okul Eğitimi',
    desc: 'Anaokulundan liseye, akademik başarıyı sanat ve sporla harmanlayan bütüncül okul eğitimi.',
    points: ['Bütüncül gelişim', 'Sanat & spor', 'Yabancı dil'],
  },
  {
    tag: 'AI',
    title: 'Yapay Zeka Destekli Öğrenme',
    desc: 'Öğrencinin eksiklerini analiz eden, kişiye özel çalışma planı üreten dijital öğrenme platformu.',
    points: ['Kişisel yol haritası', 'Anlık analiz', 'Akıllı tekrar sistemi'],
  },
]

export const timeline = [
  { year: '2009', title: 'Kuruluş', desc: 'Atakent Eğitim Kurumları, İstanbul’da eğitime tutkuyla başladı.' },
  { year: '2014', title: 'Büyüme', desc: 'Farklı ilçelerde yeni kurs ve şubelerle bölgesel ağ genişledi.' },
  { year: '2018', title: 'Marka Ailesi', desc: 'Final, Nazmi Arıkan ve Sevinç markalarıyla güçlü bir çatı oluştu.' },
  { year: '2021', title: 'Özel Okul', desc: 'Tarabya Yıldız Schools ile K12 özel okul eğitimine adım atıldı.' },
  { year: '2024', title: 'Dijital Dönüşüm', desc: 'Yapay zeka destekli öğrenme sistemi tüm kurumlarda kullanılmaya başlandı.' },
]

export const testimonials = [
  {
    quote: 'Kızımın özgüveni ve akademik başarısı bir yıl içinde gözle görülür şekilde arttı. Rehberlik desteği gerçekten fark yaratıyor.',
    author: 'Ayşe K.',
    role: 'YKS Öğrenci Velisi',
  },
  {
    quote: 'Öğretmenlerin ilgisi ve düzenli deneme analizleri sayesinde hedefimin çok üzerinde bir sonuç aldım.',
    author: 'Mert D.',
    role: 'LGS Mezunu',
  },
  {
    quote: 'Yapay zeka destekli sistem eksiklerimi net gösterdi, boşa çalışmadım. Zamanımı en verimli şekilde kullandım.',
    author: 'Zeynep A.',
    role: 'YKS Mezunu',
  },
]

export const faqs = [
  {
    q: 'Kayıt dönemi ne zaman başlıyor?',
    a: 'Kayıtlarımız yıl boyunca devam etmektedir. Kontenjan durumu ve size en uygun kurumumuz için iletişim formundan veya telefonla bize ulaşabilirsiniz.',
  },
  {
    q: 'Hangi sınavlara hazırlık veriyorsunuz?',
    a: 'YKS (TYT-AYT) ve LGS başta olmak üzere tüm kademelerde hazırlık programları sunuyoruz. Ayrıca özel okulumuzda anaokulundan liseye bütüncül eğitim veriyoruz.',
  },
  {
    q: 'Deneme sınavları ve analiz sistemi nasıl işliyor?',
    a: 'Öğrencilerimiz düzenli deneme sınavlarına girer; sonuçlar yapay zeka destekli sistemle analiz edilir ve kişiye özel çalışma planına dönüştürülür.',
  },
  {
    q: 'Ücretsiz seviye belirleme imkânı var mı?',
    a: 'Evet. Öğrencinin mevcut durumunu görmek için ücretsiz seviye belirleme ve tanışma görüşmesi düzenliyoruz. Randevu için bize ulaşabilirsiniz.',
  },
]

export const formPrograms = ['YKS Hazırlık', 'LGS Hazırlık', 'Özel Okul (K12)', 'Diğer']

export const examCountdowns = [
  { label: 'YKS 2027’ye Kalan Süre', date: '2027-06-19T10:00:00+03:00' },
  { label: 'LGS 2027’ye Kalan Süre', date: '2027-06-13T09:30:00+03:00' },
]
