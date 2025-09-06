'use client';

import Link from 'next/link';

export default function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+905321234567'; // Buraya gerçek telefon numarası gelecek
    const message = 'Merhaba, ENVE Yapı Proje hakkında bilgi almak istiyorum.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] bg-cover bg-center flex items-center animate-fade-in" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-3 sm:mb-4 md:mb-6 leading-tight animate-slide-up">
              Yapı • Proje • Mühendislik
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2 animate-slide-up animation-delay-200">
              Güvenilir, yenilikçi ve sürdürülebilir mühendislik çözümleri sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up animation-delay-400 px-4">
              <Link
                href="/hizmetlerimiz"
                className="w-full sm:w-auto flex min-w-[140px] sm:min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 sm:h-12 px-4 sm:px-6 bg-[#9bbc5d] text-white text-sm sm:text-base font-bold shadow-lg hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 no-underline"
              >
                <span>Hizmetlerimizi Keşfet</span>
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto flex min-w-[140px] sm:min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 sm:h-12 px-4 sm:px-6 border-2 border-white text-white text-sm sm:text-base font-bold hover:bg-white hover:text-slate-800 transition-all hover:scale-105 active:scale-95"
              >
                <span>İletişime Geç</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-slide-up">
              <div className="inline-block px-3 sm:px-4 py-2 bg-[#9bbc5d] text-white text-xs sm:text-sm font-medium rounded-full">
                Hakkımızda
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                Mühendislikte Güven ve Kalite
              </h2>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                ENVE Yapı Proje Mühendislik, inşaat mühendisliği alanında uzmanlaşmış bir firmadır. Yüksek standartlarda hizmet sunarak müşteri memnuniyetini en üst düzeyde tutmayı hedefliyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#9bbc5d] rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-xs sm:text-sm md:text-base">Kalite Odaklı Çalışma</span>
                </div>
                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#9bbc5d] rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-xs sm:text-sm md:text-base">Zamanında Teslim</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up animation-delay-200">
              <div className="aspect-square bg-gradient-to-br from-[#9bbc5d] to-[#8ba84e] rounded-2xl p-6 sm:p-8 text-white">
                <div className="h-full flex flex-col justify-center items-center text-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Güvenilir Partneriniz</h3>
                  <p className="text-xs sm:text-sm md:text-base opacity-90">Projelerinizde kalite ve güven garantisi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-[#9bbc5d] text-white text-sm font-medium rounded-full mb-4">
              Neden Bizi Seçmelisiniz
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Fark Yaratmak İçin Buradayız
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Müşterilerimizin başarısı için sürekli gelişen ve yenilikçi çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="group flex flex-col items-center text-center gap-4 p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up">
              <div className="w-16 h-16 bg-[#9bbc5d] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Yapı Tasarımı</h3>
              <p className="text-slate-600 text-sm md:text-base">Konut, ticari ve endüstriyel yapılar için özgün ve işlevsel tasarımlar.</p>
            </div>

            <div className="group flex flex-col items-center text-center gap-4 p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up animation-delay-100">
              <div className="w-16 h-16 bg-[#9bbc5d] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M235.32,73.37,182.63,20.69a16,16,0,0,0-22.63,0L20.68,160a16,16,0,0,0,0,22.63l52.69,52.68a16,16,0,0,0,22.63,0L235.32,96A16,16,0,0,0,235.32,73.37ZM84.68,224,32,171.31l32-32,26.34,26.35a8,8,0,0,0,11.32-11.32L75.31,128,96,107.31l26.34,26.35a8,8,0,0,0,11.32-11.32L107.31,96,128,75.31l26.34,26.35a8,8,0,0,0,11.32-11.32L139.31,64l32-32L224,84.69Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Proje Yönetimi</h3>
              <p className="text-slate-600 text-sm md:text-base">Projelerin başlangıcından tamamlanmasına kadar tüm süreçlerin yönetimi.</p>
            </div>

            <div className="group flex flex-col items-center text-center gap-4 p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up animation-delay-200">
              <div className="w-16 h-16 bg-[#9bbc5d] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Mühendislik Danışmanlığı</h3>
              <p className="text-slate-600 text-sm md:text-base">Teknik konularda uzman görüş ve danışmanlık hizmetleri.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#9bbc5d] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              <span>Tüm Hizmetlerimiz</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-[#9bbc5d] text-white text-sm font-medium rounded-full mb-4">
              Müşteri Yorumları
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Mutlu Müşterilerimizin Sözleri
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Projelerimizde müşteri memnuniyetini her zaman ön planda tutuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic text-sm md:text-base">
                "ENVE Yapı ile çalışmak harika bir deneyimdi. Projemiz zamanında ve bütçe dahilinde tamamlandı. Profesyonel yaklaşım ve kaliteli hizmet için teşekkür ederiz."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#9bbc5d] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Ahmet Yılmaz</div>
                  <div className="text-slate-500 text-xs">İnşaat Firması Sahibi</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up animation-delay-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic text-sm md:text-base">
                "Teknik konularda gösterdikleri uzmanlık ve çözüm odaklı yaklaşımları için ENVE Yapı ekibine güveniyorum. Her zaman yanımızda oldukları için minnettarım."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#9bbc5d] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  M
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Mehmet Öztürk</div>
                  <div className="text-slate-500 text-xs">Mimar</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up animation-delay-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic text-sm md:text-base">
                "ENVE Yapı'nın uzmanlığı ve detaylara verdiği önem takdire şayandı. Projemiz beklentilerimizin ötesinde başarılı oldu. Kesinlikle tavsiye ederim."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#9bbc5d] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Ayşe Demir</div>
                  <div className="text-slate-500 text-xs">İşletme Sahibi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#9bbc5d] to-[#8ba84e] text-white animate-fade-in">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 animate-slide-up">
            Projenizi Başlatmaya Hazır mısınız?
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 opacity-90 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Ücretsiz danışmanlık için bizimle iletişime geçin. Projenizi detaylı olarak inceleyelim ve en uygun çözümü birlikte geliştirelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#9bbc5d] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 active:scale-95">
              Ücretsiz Danışmanlık Alın
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#9bbc5d] transition-all hover:scale-105 active:scale-95">
              Bize Ulaşın
            </button>
          </div>
        </div>
      </section>
    </>
  );
}