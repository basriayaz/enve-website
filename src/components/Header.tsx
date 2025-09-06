'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+905321234567'; // Buraya gerçek telefon numarası gelecek
    const message = 'Merhaba, ENVE Yapı Proje hakkında teklif almak istiyorum.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-10 py-4 shadow-sm relative z-50 bg-white">
        <Link href="/" className="flex items-center text-slate-800 hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="ENVE Yapı Proje Logo"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-slate-600">
            <Link className="text-sm font-medium hover:text-[#9bbc5d] transition-colors" href="/">Ana Sayfa</Link>
            <Link className="text-sm font-medium hover:text-[#9bbc5d] transition-colors" href="/hakkimizda">Hakkımızda</Link>
            <Link className="text-sm font-medium hover:text-[#9bbc5d] transition-colors" href="/hizmetlerimiz">Hizmetlerimiz</Link>
            <Link className="text-sm font-medium hover:text-[#9bbc5d] transition-colors" href="/projelerimiz">Projelerimiz</Link>
            <Link className="text-sm font-medium hover:text-[#9bbc5d] transition-colors" href="/ekibimiz">Ekibimiz</Link>
            <Link className="text-sm font-medium hover:text-[#9bbc5d] transition-colors" href="/referanslar">Referanslar</Link>
            <Link className="text-sm font-medium hover:text-[#9bbc5d] transition-colors" href="/bizeulasin">Bize Ulaşın</Link>
          </nav>
          <button
            onClick={handleWhatsAppClick}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-[#9bbc5d] text-white text-sm font-bold shadow-md hover:bg-opacity-90 transition-all"
          >
            <span className="truncate">Teklif Al</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleDrawer}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Menü"
        >
          <svg
            className="w-6 h-6 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isDrawerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeDrawer}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-xl transform transition-transform duration-300 ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ENVE Yapı Proje Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-bold text-slate-800">ENVE Yapı</span>
            </div>
            <button
              onClick={closeDrawer}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex flex-col p-4">
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-[#9bbc5d] hover:text-white rounded-lg transition-all duration-200"
              href="/"
              onClick={closeDrawer}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Ana Sayfa
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-[#9bbc5d] hover:text-white rounded-lg transition-all duration-200"
              href="/hakkimizda"
              onClick={closeDrawer}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hakkımızda
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-[#9bbc5d] hover:text-white rounded-lg transition-all duration-200"
              href="/hizmetlerimiz"
              onClick={closeDrawer}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Hizmetlerimiz
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-[#9bbc5d] hover:text-white rounded-lg transition-all duration-200"
              href="/projelerimiz"
              onClick={closeDrawer}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Projelerimiz
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-[#9bbc5d] hover:text-white rounded-lg transition-all duration-200"
              href="/ekibimiz"
              onClick={closeDrawer}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Ekibimiz
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-[#9bbc5d] hover:text-white rounded-lg transition-all duration-200"
              href="/referanslar"
              onClick={closeDrawer}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Referanslar
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-[#9bbc5d] hover:text-white rounded-lg transition-all duration-200"
              href="/bizeulasin"
              onClick={closeDrawer}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Bize Ulaşın
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => {
                handleWhatsAppClick();
                closeDrawer();
              }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#9bbc5d] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Teklif Al
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
