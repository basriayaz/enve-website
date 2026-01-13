export default function Hakkimizda() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tighter mb-6 sm:mb-8">
            Hakkımızda
          </h1>
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-4xl mx-auto px-4">
            ENVE Yapı Proje Mühendislik, iki mühendis ortak tarafından kurulmuş olup, mühendislik temelli bina tasarımında öncü bir firma olma vizyonuyla hareket etmektedir. Misyonumuz, bilimsel, ekonomik ve uygulanabilir mühendislik çözümleri sunmaktır.
          </p>
        </div>
        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
          <div className="bg-gradient-to-br from-[#9bbc5d]/10 to-[#9bbc5d]/5 p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#9bbc5d]/20 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#9bbc5d] mr-3 sm:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h2 className="text-slate-900 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">Vizyonumuz</h2>
            </div>
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              Mühendislik temelli bina tasarımında öncü bir firma olmak. Yenilikçi teknolojileri kullanarak sürdürülebilir ve güvenli yapı çözümleri geliştirmek.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-25 p-6 sm:p-8 lg:p-10 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mr-3 sm:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-slate-900 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">Misyonumuz</h2>
            </div>
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              Bilimsel, ekonomik ve uygulanabilir mühendislik çözümleri sunmak. Müşteri memnuniyetini en üst düzeyde tutarak güvenilir projeler gerçekleştirmek.
            </p>
          </div>
        </div>
        {/* Values Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-center mb-8 sm:mb-12 lg:mb-16">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-xl hover:border-[#9bbc5d]/30 transition-all duration-300 hover:-translate-y-1">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#9bbc5d] mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-slate-900 text-base sm:text-lg font-bold leading-tight mb-2">Teknik Doğruluk</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">En yüksek mühendislik standartlarında çalışırız</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-xl hover:border-[#9bbc5d]/30 transition-all duration-300 hover:-translate-y-1">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#9bbc5d] mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-slate-900 text-base sm:text-lg font-bold leading-tight mb-2">Güvenilirlik</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Sözümüzde durur, taahhütlerimizi yerine getiririz</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-xl hover:border-[#9bbc5d]/30 transition-all duration-300 hover:-translate-y-1">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#9bbc5d] mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-slate-900 text-base sm:text-lg font-bold leading-tight mb-2">Sürdürülebilirlik</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Çevre dostu ve uzun ömürlü çözümler sunarız</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-xl hover:border-[#9bbc5d]/30 transition-all duration-300 hover:-translate-y-1">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#9bbc5d] mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-slate-900 text-base sm:text-lg font-bold leading-tight mb-2">İş Birliği</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Takım çalışmasıyla daha güçlü sonuçlar elde ederiz</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-xl hover:border-[#9bbc5d]/30 transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#9bbc5d] mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-slate-900 text-base sm:text-lg font-bold leading-tight mb-2">Yenilikçilik</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Modern teknolojilerle geleceğe adım atarız</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-center mb-8 sm:mb-12 lg:mb-16">
            Ekibimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#9bbc5d] to-[#7a9b4a] rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                  E
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-slate-900 text-lg sm:text-xl font-bold mb-2">Yük. İnş. Müh. Enes Yangın</h3>
                  <p className="text-[#9bbc5d] font-semibold mb-2">Geoteknik Uzmanı</p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Geoteknik mühendisliğinde kapsamlı bilgiyle, en karmaşık temel ve zemin mekaniği projelerimizde liderlik yapıyor, kararlılık ve güvenliği temelden sağlıyor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                  V
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-slate-900 text-lg sm:text-xl font-bold mb-2">İnş. Müh. Vedat Yıldız</h3>
                  <p className="text-blue-600 font-semibold mb-2">Yapısal Projeler Uzmanı</p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Yapısal projelerde sahada ve ofiste geniş deneyimle, proje yürütmeyi ustalıkla yönetiyor ve her detayın tasarım ile uyumlu olmasını sağlıyor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-center mb-8 sm:mb-12 lg:mb-16">
            Çalışma Sürecimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#9bbc5d] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-slate-900 text-lg sm:text-xl font-bold mb-2">İlk Görüşme</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Proje ihtiyaçlarınızı detaylıca dinler ve analiz ederiz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#9bbc5d] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-slate-900 text-lg sm:text-xl font-bold mb-2">Tasarımlar</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Teknik ve estetik gereksinimlere uygun çözümler geliştiririz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#9bbc5d] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-slate-900 text-lg sm:text-xl font-bold mb-2">Uygulama</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Profesyonel ekibimizle projenizi hayata geçiririz.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
