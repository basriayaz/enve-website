export default function Referanslar() {
  const referanslar = [
    { name: 'ARTAŞ YAPI', image: '/images/referanslar/artas-yapi.webp' },
    { name: 'KİPTAŞ', image: '/images/referanslar/kiptas.webp' },
    { name: 'GÜL İNŞAAT', image: '/images/referanslar/gul-insaat.webp' },
    { name: 'KİLER GYO', image: '/images/referanslar/kiler-gyo.webp' },
    { name: 'BOSS4 GAYRİMENKUL', image: '/images/referanslar/boss4-gayrimenkul.webp' },
    { name: 'CEVAHİR HOLDİNG', image: '/images/referanslar/cevahir-holding.webp' },
    { name: 'BEYAZLAR İNŞAAT', image: '/images/referanslar/beyazlar-insaat.webp' },
    { name: 'FOLKART', image: '/images/referanslar/folkart.webp' },
    { name: 'İMAMOĞLU İNŞAAT', image: '/images/referanslar/imamoglu-insaat.webp' },
    { name: 'MUTLU İNŞAAT', image: '/images/referanslar/mutlu-insaat.webp' },
    { name: 'AKKUŞ GRUP', image: '/images/referanslar/akkus-grup.webp' },
    { name: 'BEYAZ İNŞAAT', image: '/images/referanslar/beyaz-insaat.webp' },
    { name: 'FIRAT', image: '/images/referanslar/firat.webp' },
    { name: 'HAKAN PLASTİK', image: '/images/referanslar/hakan-plastik.webp' },
    { name: 'KOROZO', image: '/images/referanslar/korozo.webp' },
    { name: 'BAKIRCI YAPI', image: '/images/referanslar/bakirci-yapi.webp' },
    { name: 'LOTUS', image: '/images/referanslar/lotus.webp' },
    { name: 'DEMİR GRUP', image: '/images/referanslar/demir-grup.webp' },
    { name: 'BELEDİYE', image: '/images/referanslar/belediye.webp' },
    { name: 'PAGEV', image: '/images/referanslar/pagev.webp' },
    { name: 'BİLGİÇLER', image: '/images/referanslar/bilgicler.webp' },
    { name: 'MUYA', image: '/images/referanslar/muya.webp' },
    { name: 'SANICA', image: '/images/referanslar/sanica.webp' },
    { name: 'CANAN İNŞAAT', image: '/images/referanslar/canan-insaat.webp' },
    { name: 'CEYLAN ŞEHİRCİLİK', image: '/images/referanslar/ceylan-sehircilik.webp' },
    { name: 'GÖKÇEADA BELEDİYESİ', image: '/images/referanslar/gokceada-belediyesi.webp' },
    { name: 'MARMARA MÜH. YAPI', image: '/images/referanslar/marmara-muh.webp' },
    { name: 'SİNBO', image: '/images/referanslar/sinbo.webp' },
    { name: 'DORA PARK', image: '/images/referanslar/dora-park.webp' },
    { name: 'ÖZEN MOTOR', image: '/images/referanslar/ozen-motor.webp' },
    { name: 'YUKİ MOTOR', image: '/images/referanslar/yuki-motor.webp' },
    { name: 'TESA YAPI', image: '/images/referanslar/tesa-yapi.webp' },
    { name: 'AK YAPI', image: '/images/referanslar/ak-yapi.webp' },
    { name: 'BATIBEYLİ', image: '/images/referanslar/batibeyli.webp' },
    { name: 'BÜYÜKÇEKMECE', image: '/images/referanslar/buyukcekmece.webp' },
    { name: 'EMS', image: '/images/referanslar/ems.webp' },
    { name: 'YEMAR', image: '/images/referanslar/yemar.webp' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Referanslarımız</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Yılların deneyimi ve güvenilirliğiyle birçok prestijli firma ile çalışmaktan gurur duyuyoruz.
        </p>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">İş Ortaklarımız</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {referanslar.map((referans, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div
                className="w-full aspect-[4/3] bg-center bg-no-repeat bg-contain rounded-lg"
                style={{ backgroundImage: `url("${referans.image}")` }}
              ></div>
              <p className="mt-3 text-sm font-medium text-gray-700 text-center">{referans.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 bg-gradient-to-r from-[#9bbc5d]/10 to-[#9bbc5d]/5 rounded-2xl p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sizinle de Çalışmak İsteriz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Projelerinizde güvenilir bir iş ortağı arıyorsanız, sizinle tanışmak isteriz.
            Deneyimimiz ve uzmanlığımızla yanınızdayız.
          </p>
          <a
            href="/bizeulasin"
            className="inline-flex items-center px-6 py-3 bg-[#9bbc5d] text-white font-medium rounded-full hover:bg-[#8aab4c] transition-colors duration-300"
          >
            İletişime Geçin
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
