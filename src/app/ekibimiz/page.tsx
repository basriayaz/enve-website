import Image from 'next/image';

export default function Ekibimiz() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Uzman Ekibimiz</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Başarımızın arkasındaki tutkulu profesyonelleri tanıyın. Ekibimiz deneyim, yenilikçilik ve mükemmellik taahhüdü ile bir araya geliyor.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105">
          <div className="relative h-40 w-40">
            <Image
              src="/enes.jpeg"
              alt="Yük. İnş. Müh. Enes Yangın"
              fill
              className="rounded-full object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-[#9bbc5d] ring-offset-4 ring-offset-white"></div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-900">Yük. İnş. Müh. Enes Yangın</h2>
            <p className="mt-1 text-base font-semibold text-[#9bbc5d]">Jeoteknik Uzmanı</p>
            <p className="mt-4 text-gray-600">
              Jeoteknik mühendisliğinde kapsamlı bilgiyle, en karmaşık temel ve zemin mekaniği projelerimizde liderlik yapıyor, kararlılık ve güvenliği temelden sağlıyor.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105">
          <div className="relative h-40 w-40">
            <Image
              src="/vedat.jpeg"
              alt="İnş. Müh. Vedat Yıldız"
              fill
              className="rounded-full object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-[#9bbc5d] ring-offset-4 ring-offset-white"></div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-900">İnş. Müh. Vedat Yıldız</h2>
            <p className="mt-1 text-base font-semibold text-[#9bbc5d]">Yapısal Projeler Uzmanı</p>
            <p className="mt-4 text-gray-600">
              Yapısal projelerde sahada ve ofiste geniş deneyimle, proje yürütmeyi ustalıkla yönetiyor ve her detayın tasarım ile uyumlu olmasını sağlıyor.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-center text-gray-900">Taahhüdümüz</h3>
        <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
          Ekibimiz, üstün sonuçlar sunmaya adanmış yüksek vasıflı ve deneyimli inşaat mühendislerinden oluşmaktadır. Yenilikçilik ve hassasiyet odaklı yaklaşımımızla, her projede kalite ve güvenliğin en yüksek standartlarını sağlıyoruz. İş birlikçi yaklaşımımız ve müşteri memnuniyetine olan taahhüdümüz başarımızın temelini oluşturmaktadır.
        </p>
      </div>
    </div>
  );
}
