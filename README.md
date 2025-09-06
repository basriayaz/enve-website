# ENVE Yapı Proje Mühendislik - Web Sitesi

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

ENVE Yapı Proje Mühendislik için geliştirilmiş profesyonel web sitesi. Modern teknolojilerle oluşturulmuş, SEO optimizasyonu yapılmış ve tamamen responsive tasarıma sahip.

## 🌟 Özellikler

- ⚡ **Next.js 15** - En yeni React framework'ü
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Tasarım** - Mobil uyumlu
- 🔍 **SEO Optimizasyonu** - Arama motoru dostu
- 🚀 **Performans Odaklı** - Hızlı yükleme
- 🌐 **Çok Dilli Destek** - Türkçe odaklı
- 📊 **Analytics Hazır** - Google Analytics entegrasyonu

## 📋 Sayfalar

- 🏠 **Ana Sayfa** - Şirket tanıtımı ve öne çıkan hizmetler
- 👥 **Hakkımızda** - Şirket geçmişi ve değerler
- 🛠️ **Hizmetlerimiz** - Sunduğumuz mühendislik hizmetleri
- 📁 **Projelerimiz** - Tamamlanan ve devam eden projeler
- 👨‍💼 **Ekibimiz** - Uzman mühendis kadromuz
- 🤝 **Referanslar** - Müşteri referansları
- 📞 **Bize Ulaşın** - İletişim bilgileri ve formu

## 🛠️ Teknoloji Stack

- **Frontend Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Work Sans & Noto Sans
- **Icons**: Material Symbols
- **Deployment**: Vercel (önerilen)

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js 18+
- npm veya yarn

### Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/basriayaz/enve-website.git
cd enve-website

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### Build

```bash
# Production build oluşturun
npm run build

# Build'i test edin
npm start
```

## 📁 Proje Yapısı

```
enve-website/
├── public/                 # Statik dosyalar
│   ├── favicon-*.png      # Favicon dosyaları
│   ├── logo.png           # Şirket logosu
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # Arama motoru yönergeleri
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Ana layout
│   │   ├── page.tsx       # Ana sayfa
│   │   ├── globals.css    # Global stiller
│   │   └── sitemap.ts     # Dinamik sitemap
│   └── components/        # React bileşenleri
│       ├── Header.tsx     # Üst navigasyon
│       ├── Footer.tsx     # Alt kısım
│       └── WhatsAppPopup.tsx # WhatsApp widget
└── next.config.ts         # Next.js konfigürasyonu
```

## 🔧 Yapılandırma

### Environment Variables

Proje için aşağıdaki environment variable'ları ayarlayabilirsiniz:

```env
# Google Analytics (opsiyonel)
GA_MEASUREMENT_ID=GA-XXXXXXXXXX

# WhatsApp Numarası
WHATSAPP_NUMBER=+905321234567
```

### SEO Ayarları

SEO ayarları `src/app/layout.tsx` dosyasında yapılandırılmıştır:
- Meta verileri
- Open Graph etiketleri
- Twitter Card'lar
- Structured Data (JSON-LD)

## 📊 SEO & Performans

- ✅ **Robots.txt** - Arama motoru erişim kontrolü
- ✅ **Sitemap.xml** - Otomatik site haritası
- ✅ **Meta Tags** - Kapsamlı meta verileri
- ✅ **Open Graph** - Sosyal medya paylaşımı
- ✅ **Twitter Cards** - Twitter optimizasyonu
- ✅ **Structured Data** - Google Rich Snippets
- ✅ **Core Web Vitals** - Performans optimizasyonu

## 🎨 Tasarım Özellikleri

- **Modern UI/UX** - Kullanıcı dostu arayüz
- **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- **Smooth Animations** - Akıcı geçişler
- **Accessibility** - Erişilebilirlik standartları
- **Dark Mode Ready** - Karanlık tema desteği

## 📞 İletişim

**ENVE Yapı Proje Mühendislik**
- Website: [enveproje.com](https://enveproje.com)
- Email: info@enveproje.com
- Phone: +90 216 123 45 67
- Address: İstanbul, Türkiye

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Google Fonts](https://fonts.google.com/) - Font library

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
