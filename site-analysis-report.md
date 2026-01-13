# ENVE Yapı Proje Mühendislik Web Sitesi Analiz Raporu

## Giriş
Bu rapor, ENVE Yapı Proje Mühendislik web sitesinin (Next.js tabanlı) kapsamlı bir incelemesini sunar. Proje yapısı, kod kalitesi, SEO, performans, erişilebilirlik ve geliştirme fırsatları değerlendirilmiştir. Analiz, mevcut dosyaların incelenmesi, kod arama sonuçları ve en iyi uygulamalara dayalı önerilerle hazırlanmıştır.

Analiz tarihi: 2025-09-07  
Proje: Next.js 15.5.2, React 19.1.0  
Ana sayfalar: Ana Sayfa, Hakkımızda, Hizmetlerimiz, Projelerimiz, Ekibimiz, Referanslar, İletişim, Gizlilik Politikası, Kullanım Şartları  
Özellikler: WhatsApp entegrasyonu, Google Analytics, Yapılandırılmış Veri

## Mevcut Durum

### Proje Yapısı ve Teknoloji Yığını
- **Güçlü Yönler**:
  - Modern Next.js 15 kurulumu ile Turbopack desteği (hızlı geliştirme ve build).
  - Tailwind CSS 4 ile responsive tasarım (sm:, md:, lg: sınıfları yaygın kullanımda).
  - Google Fonts (Noto Sans, Work Sans) ve custom animasyonlar (fade-in, slide-up) ile profesyonel görünüm.
  - Bileşen tabanlı yapı: Header.tsx, Footer.tsx, WhatsAppPopup.tsx gibi yeniden kullanılabilir bileşenler.
  - SEO temelleri: Metadata, OpenGraph, Twitter Card, robots.txt ve sitemap.ts mevcut.
  - Responsive navigasyon: Masaüstü menü ve mobil drawer (hamburger menü ile).

- **Genel Kod Kalitesi**:
  - Temiz, okunabilir kod; TypeScript kullanımı (tsconfig.json).
  - Bağımlılıklar güncel: framer-motion, react-icons, eslint-config-next.
  - Hero bölümü (page.tsx): Dinamik arka plan görüntüsü ve CTA butonları.
  - Hizmetler sayfası (hizmetlerimiz/page.tsx): Kart tabanlı liste, Material Symbols ikonları.
  - Footer: Sosyal bağlantılar, hızlı linkler, iletişim bilgileri ile kapsamlı.

- **İçerik ve UX**:
  - Türkçe odaklı iş sitesi: Mühendislik hizmetleri (yapı, geoteknik, elektrik vb.) için uygun bölümler.
  - Bölümler: Hero, Hakkımızda, Neden Biz, Müşteri Yorumları, CTA.
  - İnteraktif öğeler: WhatsApp butonları, hover efektleri, animasyonlar.

- **Potansiyel Sorunlar (Arama Sonuçlarından)**:
  - Sabit kodlanmış telefon numaraları: Farklı yerlerde tutarsız (+905321234567, +90 216 123 45 67, +90 532 123 45 67). Yorumlarda "Buraya gerçek telefon numarası gelecek" notu.
  - Console.log veya TODO yok (temiz kod).
  - External görüntü: page.tsx'te Unsplash URL (performans etkisi).

### Performans Değerlendirmesi
- İyi: Next.js Image bileşeni bazı yerlerde (logo), Tailwind optimizasyonu.
- Zayıf: External hero görüntüsü (yavaş yükleme), framer-motion (kullanılmıyorsa gereksiz bundle).

### Erişilebilirlik Değerlendirmesi
- İyi: Alt metinler (logo için), aria-label (mobil menü butonu).
- Zayıf: Navigasyon linklerinde ARIA role eksik, form input'larında label eksik (sadece placeholder), ikonlar için aria-hidden yok.

### Mobil Uyumluluk
- Güçlü: Tailwind responsive sınıfları, mobil drawer menü, esnek grid'ler.
- Test Edilmesi Gereken: Dokunmatik hedef boyutları, klavye navigasyonu.

### SEO Durumu
- İyi: Kapsamlı metadata, keywords, OG tags, manifest.json.
- Eksik: Alt sayfalarda canonical yok, doğrulama kodları placeholder ("your-google-site-verification-code").

## Öneriler

### 1. Kod Optimizasyonu ve Kalite İyileştirmeleri
- **Merkezi Konfigürasyon Oluşturun**:
  - constants.ts dosyası ekleyin: Telefon numaraları, e-posta, adres gibi değerleri tek yerden yönetin.
  - Örnek:
    ```tsx
    // src/constants/contact.ts
    export const CONTACT = {
      phone: '+90 216 123 45 67',
      whatsapp: '+90 532 123 45 67',
      email: 'info@enveproje.com',
      address: 'İstanbul, Türkiye'
    };
    ```
  - Tüm dosyalarda (Header.tsx, page.tsx, Footer.tsx vb.) bu sabitleri kullanın.

- **Gereksiz Bağımlılıkları Kaldırın**:
  - framer-motion kullanılıyorsa doğrulayın; yoksa kaldırın (bundle boyutu küçültmek için).

- **Yardımcı Kütüphaneler Ekleyin**:
  - clsx veya cn utility'si için: Conditional class'lar için (npm install clsx).
  - Lucide React ikonları: Material Symbols yerine (daha hafif, özelleştirilebilir).

### 2. Performans İyileştirmeleri
- **Görüntü Optimizasyonu**:
  - Hero arka planını local asset'e taşıyın ve Next.js Image ile sarın (layout shift önlemek için).
  - Örnek:
    ```tsx
    import Image from 'next/image';
    // style={{ backgroundImage: ... }} yerine
    <Image src="/hero-bg.jpg" fill className="object-cover" alt="Hero Background" priority />
    ```
  - Lazy loading: Below-the-fold bölümler için loading="lazy".

- **Build Optimizasyonu**:
  - next.config.ts'te image domains ekleyin (external görüntüler için).
  - Turbopack'ı production'da etkinleştirin.

### 3. SEO Geliştirmeleri
- **Doğrulama Kodlarını Güncelleyin**:
  - layout.tsx'te Google Search Console, Yandex vb. için gerçek kodları ekleyin.

- **Yapılandırılmış Veri Genişletin**:
  - StructuredData.tsx'i hizmetler ve projeler için genişletin (örneğin, Service schema.org).

- **Alt Sayfa İyileştirmeleri**:
  - Her page.tsx'e metadata ekleyin (örneğin, hizmetlerimiz için unique title/description).
  - Canonical link'ler: alternates.canonical her sayfada.

- **İçerik Stratejisi**:
  - Blog sayfası ekleyin (SEO için düzenli içerik).
  - Hreflang tags: tr_TR için.

### 4. Erişilebilirlik İyileştirmeleri
- **ARIA ve Semantik HTML**:
  - Nav'a role="navigation" ekleyin.
  - Form input'larına label ekleyin:
    ```tsx
    <label htmlFor="phone">Telefon</label>
    <input id="phone" type="tel" placeholder="+90 532 123 45 67" />
    ```

- **İkon Erişilebilirliği**:
  - SVG'lere aria-hidden="true" ekleyin (dekoratifse).
  - Renk kontrastı: #9bbc5d ile metinler AA standartlarını sağlıyor, ancak araçla doğrulayın (WAVE).

- **Klavye ve Ekran Okuyucu**:
  - Mobil drawer için focus trap ekleyin.
  - Skip link ekleyin: Ana içeriğe atlama bağlantısı.

### 5. Yeni Özellikler
- **İletişim Formu Entegrasyonu**:
  - Bizeulasın sayfasına backend entegrasyonu (örneğin, Next.js API route + Nodemailer veya Formspree).

- **Portföy Galerisi**:
  - Projelerimiz sayfasına lightbox galerisi (react-photo-gallery) ve filtreleme ekleyin.

- **Çok Dilli Destek**:
  - next-intl ile İngilizce versiyon ekleyin (global pazar için).

- **Analitik ve İzleme**:
  - Google Analytics'e event tracking ekleyin (WhatsApp tıklamaları için).
  - Newsletter signup (Mailchimp entegrasyonu).

- **Güvenlik Özellikleri**:
  - CSP headers ekleyin (next.config.ts).
  - Form validation ve reCAPTCHA (spam önleme).

### 6. Güvenlik İyileştirmeleri
- **Bağımlılık Güncellemeleri**:
  - npm audit çalıştırın ve vulnerabilities düzeltin.
  
- **HTTPS ve Güvenlik Headers**:
  - Metadata'da HTTPS zorlayın.
  - Security headers: next-secure-headers paketi.

- **Veri Doğrulama**:
  - İletişim formunda input sanitization (XSS önleme).

## Öncelikli Yol Haritası

### Yüksek Öncelik (Hemen Yapılmalı - 1-2 Hafta)
1. **Telefon Numaralarını Merkezi hale getirin** (Kod tutarlılığı için).
2. **External görüntüleri optimize edin** (Performans için).
3. **Doğrulama kodlarını güncelleyin** (SEO için).
4. **Form label'ları ekleyin** (Erişilebilirlik için).

### Orta Öncelik (Kısa Vadeli - 2-4 Hafta)
1. **Blog sayfası ekleyin** (SEO ve içerik için).
2. **ARIA rolleri ve ikon iyileştirmeleri** (Erişilebilirlik).
3. **İletişim formu entegrasyonu** (Kullanıcı deneyimi).
4. **Portföy galerisi geliştirin** (Projeler için).

### Düşük Öncelik (Uzun Vadeli - 1-3 Ay)
1. **Çok dilli destek** (Uluslararası genişleme).
2. **Gelişmiş analitik** (Kullanıcı davranışları).
3. **Güvenlik audit** (Tam tarama).
4. **Performans monitoring** (Core Web Vitals entegrasyonu).

## Sonuç
Site genel olarak profesyonel ve modern bir yapıya sahip, ancak tutarlılık, optimizasyon ve erişilebilirlik alanlarında iyileştirmeler ile daha etkili hale gelebilir. Bu öneriler uygulandığında, SEO sıralamaları yükselecek, kullanıcı deneyimi artacak ve bakım kolaylaşacaktır. Toplam geliştirme süresi: 4-8 hafta (kaynaklara bağlı).

Raporu uygulamak için Code moduna geçmeyi öneririm.