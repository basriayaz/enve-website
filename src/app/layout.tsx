import type { Metadata } from "next";
import { Noto_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";
import StructuredData, { structuredData } from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "ENVE Yapı Proje Mühendislik - İstanbul'un Lider Mühendislik Firması",
    template: "%s | ENVE Yapı Proje Mühendislik"
  },
  description: "ENVE Yapı Proje Mühendislik - İstanbul merkezli uzman mühendislik ekibi ile yapı, geoteknik, elektrik ve mekanik projelerde güvenilir çözümler sunuyoruz. 20+ yıllık deneyim.",
  keywords: [
    "mühendislik",
    "yapı mühendisliği",
    "geoteknik mühendislik",
    "elektrik projeleri",
    "mekanik projeler",
    "akustik rapor",
    "EKB raporu",
    "İstanbul mühendislik",
    "yapı denetim",
    "proje danışmanlığı"
  ],
  authors: [{ name: "ENVE Yapı Proje Mühendislik" }],
  creator: "ENVE Yapı Proje Mühendislik",
  publisher: "ENVE Yapı Proje Mühendislik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://enveproje.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ENVE Yapı Proje Mühendislik - İstanbul'un Lider Mühendislik Firması",
    description: "İstanbul merkezli uzman mühendislik ekibi ile yapı, geoteknik, elektrik ve mekanik projelerde güvenilir çözümler sunuyoruz.",
    url: "https://enveproje.com",
    siteName: "ENVE Yapı Proje Mühendislik",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ENVE Yapı Proje Mühendislik Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENVE Yapı Proje Mühendislik - İstanbul'un Lider Mühendislik Firması",
    description: "İstanbul merkezli uzman mühendislik ekibi ile yapı, geoteknik, elektrik ve mekanik projelerde güvenilir çözümler sunuyoruz.",
    images: ["/logo.png"],
    creator: "@enveproje",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    ...structuredData.other,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      </head>
      <body
        className={`${workSans.variable} ${notoSans.variable} antialiased`}
        style={{ fontFamily: "var(--font-work-sans), var(--font-noto-sans), sans-serif" }}
      >
        <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
          <GoogleAnalytics />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppPopup />
        </div>
      </body>
    </html>
  );
}
