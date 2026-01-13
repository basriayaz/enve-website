import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO ve performans optimizasyonları
  poweredByHeader: false,

  // Gzip sıkıştırma
  compress: true,

  // Statik export için gerekli ayarlar
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',

  // Resim optimizasyonu (statik export'ta çalışmaz)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  // Robots.txt için
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;
