import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO ve performans optimizasyonları
  poweredByHeader: false,

  // Gzip sıkıştırma
  compress: true,

  // Resim optimizasyonu
  images: {
    domains: ['lh3.googleusercontent.com', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // Güvenlik başlıkları
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Robots.txt için
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },

  // Experimental özellikler
  experimental: {
    optimizeCss: true,
    webVitalsAttribution: ['CLS', 'LCP'],
  },
};

export default nextConfig;
