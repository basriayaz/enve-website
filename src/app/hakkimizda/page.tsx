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
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#9bbc5d] mr-3 sm:mr-4">visibility</span>
              <h2 className="text-slate-900 text-2xl sm:text-3xl font-bold leading-tight tracking-tight">Vizyonumuz</h2>
            </div>
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              Mühendislik temelli bina tasarımında öncü bir firma olmak. Yenilikçi teknolojileri kullanarak sürdürülebilir ve güvenli yapı çözümleri geliştirmek.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-25 p-6 sm:p-8 lg:p-10 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4 sm:mb-6">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-blue-600 mr-3 sm:mr-4">target</span>
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
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#9bbc5d] mb-3 sm:mb-4">gavel</span>
              <h3 className="text-slate-900 text-base sm:text-lg font-bold leading-tight mb-2">Teknik Doğruluk</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">En yüksek mühendislik standartlarında çalışırız</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-xl hover:border-[#9bbc5d]/30 transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#9bbc5d] mb-3 sm:mb-4">verified</span>
              <h3 className="text-slate-900 text-base sm:text-lg font-bold leading-tight mb-2">Güvenilirlik</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Sözümüzde durur, taahhütlerimizi yerine getiririz</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-xl hover:border-[#9bbc5d]/30 transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#9bbc5d] mb-3 sm:mb-4">eco</span>
              <h3 className="text-slate-900 text-base sm:text-lg font-bold leading-tight mb-2">Sürdürülebilirlik</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Çevre dostu ve uzun ömürlü çözümler sunarız</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-xl hover:border-[#9bbc5d]/30 transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#9bbc5d] mb-3 sm:mb-4">groups</span>
              <h3 className="text-slate-900 text-base sm:text-lg font-bold leading-tight mb-2">İş Birliği</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Takım çalışmasıyla daha güçlü sonuçlar elde ederiz</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-xl hover:border-[#9bbc5d]/30 transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#9bbc5d] mb-3 sm:mb-4">lightbulb</span>
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
                  <h3 className="text-slate-900 text-lg sm:text-xl font-bold mb-2">Enes Baş</h3>
                  <p className="text-[#9bbc5d] font-semibold mb-2">Kurucu Ortak & İnşaat Mühendisi</p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    10+ yıllık inşaat mühendisliği deneyimiyle projelerin teknik koordinasyonundan sorumludur.
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
                  <h3 className="text-slate-900 text-lg sm:text-xl font-bold mb-2">Vedat Baş</h3>
                  <p className="text-blue-600 font-semibold mb-2">Kurucu Ortak & Mimar</p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Modern tasarım anlayışıyla estetik ve fonksiyonelliği bir araya getiren mimari çözümler üretir.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#9bbc5d] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-slate-900 text-lg sm:text-xl font-bold mb-2">Teslim & Destek</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Projenizi teslim eder ve sürekli destek sağlarız.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#9bbc5d]/10 to-blue-50 p-6 sm:p-8 lg:p-12 rounded-3xl">
          <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-center mb-8 sm:mb-12">
            Rakamlarla ENVE
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#9bbc5d] mb-2">150+</div>
              <p className="text-slate-600 text-sm sm:text-base font-medium">Tamamlanan Proje</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#9bbc5d] mb-2">12+</div>
              <p className="text-slate-600 text-sm sm:text-base font-medium">Yıl Deneyim</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#9bbc5d] mb-2">500+</div>
              <p className="text-slate-600 text-sm sm:text-base font-medium">Mutlu Müşteri</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#9bbc5d] mb-2">24/7</div>
              <p className="text-slate-600 text-sm sm:text-base font-medium">Teknik Destek</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
