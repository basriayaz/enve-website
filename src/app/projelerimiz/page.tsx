'use client';

import { useState } from 'react';

export default function Projelerimiz() {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const projects = [
    { id: 1, title: 'Lotus Meydan', image: '/images/projeler/lotus-meydan.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 2, title: 'Lotus KORU', image: '/images/projeler/lotus-koru.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 3, title: 'Nefes Atakent', image: '/images/projeler/nefes-atakent.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 4, title: 'Brand Atakent 2', image: '/images/projeler/brand-atakent-2.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 5, title: 'Brand Atakent 1', image: '/images/projeler/brand-atakent-1.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 6, title: 'Panorama Büyükçekmece', image: '/images/projeler/panorama-buyukcekmece.jpg', category: 'Tamamlanan', status: 'completed' },
    { id: 7, title: 'Kağıthane Gül Yapı', image: '/images/projeler/kagithane-gul-yapi.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 8, title: 'İsmail Altun', image: '/images/projeler/ismail-altun.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 9, title: 'Alya Trio', image: '/images/projeler/alya-trio.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 10, title: 'Batıköy Konut', image: '/images/projeler/batikoy-konut.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 11, title: 'Hüseyin Öztürk Fabrika', image: '/images/projeler/huseyin-ozturk-fabrika.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 12, title: 'Marmara Konakları', image: '/images/projeler/marmara-konaklari.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 13, title: 'Modern Eğitim Koleji', image: '/images/projeler/modern-egitim-koleji.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 14, title: 'Sahil Konakları', image: '/images/projeler/sahil-konaklari.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 15, title: 'Tesa', image: '/images/projeler/tesa.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 16, title: 'Hadımköy Cami', image: '/images/projeler/hadimkoy-cami.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 17, title: 'Avcılar Otel', image: '/images/projeler/avcilar-otel.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 18, title: 'Kuğulu Park', image: '/images/projeler/kugulu-park.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 19, title: 'Alya Onist', image: '/images/projeler/alya-onist.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 20, title: 'Zigana AVM', image: '/images/projeler/zigana-avm.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 21, title: 'Beyoğlu Konut', image: '/images/projeler/beyoglu-konut.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 22, title: 'Engin Grup', image: '/images/projeler/engin-grup.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 23, title: 'Bomonti Otel', image: '/images/projeler/bomonti-otel.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 24, title: 'İmamoğlu İnşaat', image: '/images/projeler/imamoglu-insaat.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 25, title: 'Palm Marin', image: '/images/projeler/palm-marin.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 26, title: 'Pagev', image: '/images/projeler/pagev.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 27, title: 'Oto Galeri', image: '/images/projeler/oto-galeri.webp', category: 'Tamamlanan', status: 'completed' },
    { id: 28, title: 'Mabeyn Sahil', image: '/images/projeler/mabeyn-sahil.webp', category: 'Tamamlanan', status: 'completed' },
  ];

  const filteredProjects = activeFilter === 'Tümü'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'planned':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Tamamlandı';
      case 'ongoing':
        return 'Devam Ediyor';
      case 'planned':
        return 'Planlandı';
      default:
        return '';
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">Projelerimiz</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Çeşitli sivil mühendislik projelerimizde uzmanlığımızı ve kalite taahhüdümüzü gösteren başarılı projelerimizin portföyünü keşfedin.
        </p>
      </div>
      <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
        <button
          onClick={() => setActiveFilter('Tümü')}
          className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            activeFilter === 'Tümü'
              ? 'bg-[#9bbc5d] text-white shadow-lg'
              : 'text-gray-600 bg-white hover:bg-gray-100'
          }`}
        >
          Tümü
        </button>
        <button
          onClick={() => setActiveFilter('Tamamlanan')}
          className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            activeFilter === 'Tamamlanan'
              ? 'bg-[#9bbc5d] text-white shadow-lg'
              : 'text-gray-600 bg-white hover:bg-gray-100'
          }`}
        >
          Tamamlanan
        </button>
        <button
          onClick={() => setActiveFilter('Devam Eden')}
          className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            activeFilter === 'Devam Eden'
              ? 'bg-[#9bbc5d] text-white shadow-lg'
              : 'text-gray-600 bg-white hover:bg-gray-100'
          }`}
        >
          Devam Eden
        </button>
        <button
          onClick={() => setActiveFilter('Gelecek')}
          className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            activeFilter === 'Gelecek'
              ? 'bg-[#9bbc5d] text-white shadow-lg'
              : 'text-gray-600 bg-white hover:bg-gray-100'
          }`}
        >
          Gelecek
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log('Image failed to load:', project.image);
                  e.currentTarget.style.display = 'none';
                }}
              />
                            <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                  {getStatusText(project.status)}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Bu kategoride henüz proje bulunmamaktadır.</p>
        </div>
      )}
    </div>
  );
}
