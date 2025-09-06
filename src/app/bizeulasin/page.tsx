export default function BizeUlasin() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tighter mb-6 sm:mb-8">
            Bize Ulaşın
          </h1>
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-4xl mx-auto px-4">
            Projeniz hakkında bilgi almak, teklif istemek veya sorularınızı iletmek için bizimle iletişime geçin.
            Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-slate-900 text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">İletişim Bilgileri</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#9bbc5d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl text-[#9bbc5d]">phone</span>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">Telefon</h3>
                    <p className="text-slate-600">+90 532 123 45 67</p>
                    <p className="text-slate-600">+90 216 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#9bbc5d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl text-[#9bbc5d]">mail</span>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">E-posta</h3>
                    <p className="text-slate-600">info@enve.com.tr</p>
                    <p className="text-slate-600">teklif@enve.com.tr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#9bbc5d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl text-[#9bbc5d]">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">Adres</h3>
                    <p className="text-slate-600">
                      Bağdat Caddesi No:123<br />
                      Kadıköy, İstanbul 34740<br />
                      Türkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#9bbc5d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl text-[#9bbc5d]">schedule</span>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">Çalışma Saatleri</h3>
                    <p className="text-slate-600">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 09:00 - 13:00<br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-slate-900 text-xl font-bold mb-4">Hızlı İletişim</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/905321234567?text=Merhaba%2C%20ENVE%20Yap%C4%B1%20Proje%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <span className="material-symbols-outlined text-2xl text-green-600">chat</span>
                  <div>
                    <p className="font-semibold text-green-800">WhatsApp</p>
                    <p className="text-sm text-green-600">Hemen iletişime geçin</p>
                  </div>
                </a>

                <a
                  href="tel:+905321234567"
                  className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <span className="material-symbols-outlined text-2xl text-blue-600">call</span>
                  <div>
                    <p className="font-semibold text-blue-800">Telefon</p>
                    <p className="text-sm text-blue-600">Şimdi ara</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-lg">
              <h2 className="text-slate-900 text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Mesaj Gönderin</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      Ad *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9bbc5d] focus:border-transparent transition-colors"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Soyad *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9bbc5d] focus:border-transparent transition-colors"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9bbc5d] focus:border-transparent transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9bbc5d] focus:border-transparent transition-colors"
                    placeholder="+90 532 123 45 67"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9bbc5d] focus:border-transparent transition-colors"
                  >
                    <option value="">Konu seçin</option>
                    <option value="teklif">Teklif İsteği</option>
                    <option value="bilgi">Bilgi Talebi</option>
                    <option value="is-birligi">İş Birliği</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9bbc5d] focus:border-transparent transition-colors resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9bbc5d] text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-lg">send</span>
                    Gönder
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-slate-50 p-6 sm:p-8 lg:p-12 rounded-3xl">
          <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
            Bizi Ziyaret Edin
          </h2>
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl text-slate-400 mb-4">location_on</span>
                <p className="text-slate-600 text-lg">Harita burada görüntülenecek</p>
                <p className="text-slate-500 text-sm">Google Maps entegrasyonu eklenebilir</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">
              Bağdat Caddesi No:123, Kadıköy, İstanbul
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.google.com/?q=Bağdat+Caddesi+No:123+Kadıköy+İstanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#9bbc5d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                <span className="material-symbols-outlined">directions</span>
                Yol Tarifi Al
              </a>
              <a
                href="tel:+905321234567"
                className="inline-flex items-center gap-2 bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                <span className="material-symbols-outlined">call</span>
                Telefon Et
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
