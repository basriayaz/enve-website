'use client';

import { useState } from 'react';

export default function Projelerimiz() {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const projects = [
    {
      id: 1,
      title: 'Konut Kompleksi',
      description: 'Konfor ve sürdürülebilirlik için tasarlanmış modern bir konut kompleksi.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCTa_BGqsKV6N8BSnYBH-SWPOEOl6taG0bniP4DIQNxUuqxmOvZHNVEhknBXcPJw_7NscytUlwHEXQcPjNUKfDAVpIRMB8__Py9GWIPUenF8Yxax4bO9wWoySdcish1QZwnYwHhk7wbuuBKn7wDEv2JHvfw5zT-B1OjadJsVwcVFbSlZdwH_L6uZ2pf4dRcrQDdCHrEeb7CnwVZmlMM4-wgn0wwklLl2AyoEGevdeLWo87hG-4k3vv71X5CQtU876nnyeIV2Aq-go',
      category: 'Tamamlanan',
      status: 'completed',
      year: '2023'
    },
    {
      id: 2,
      title: 'Ticari Bina',
      description: 'Yenilikçi tasarımla öne çıkan, modern bir ticari bina.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO_jcxc5nMPv3pxIRfbXoTq8L2xhQTGj7p5D42P5PplhchYwN9khj2AkZotkVi8UQtfIFdo4OlGaG7YLUyQq1_H_kK9upAQ09gVr4mBC9I7CrcbtaM8sZnZyPLhNUT0Q3OBN8gMDPaiV99i_6s5bZOefbL68SvZ4u6Ok8LkCLYkzCnGGDXIae66yGmW3aUb4cxnMAFBTNduV9gIN5YSYZ7KFwCfxnEYXt_ctS2wGoJNFcudglQZwNd-flR1ZkM-idlgi7x8nIUIgk',
      category: 'Tamamlanan',
      status: 'completed',
      year: '2023'
    },
    {
      id: 3,
      title: 'Altyapı Projesi',
      description: 'Topluluk bağlantısını geliştiren önemli bir altyapı projesi.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWJ2xJN5Ge2tOBjzqqj9VuL9OqmgbObhB7rbt0efklEXDcYBiTc2-lw9xhicK6s7kM4k0CLvYNVgy4jIllRClsRfsrF450u3___1Hnr3dape5UAun2JXMbVOJFz7Kvw4TblKIVgBzgrR4fmzqJVBzzQpuFPnPcV2PcF8UgNi-gyXjR_fuIPaZKP45ucy16ICIgWbN0_9h7YPVtOLS38EygsuDXKVmGSIF4YAICZ1Sht4rWklttEisYA8ZDnTumMGNYqGBb7xv0Cx4',
      category: 'Devam Eden',
      status: 'ongoing',
      year: '2024'
    },
    {
      id: 4,
      title: 'Yenileme Projesi',
      description: 'Mevcut bir yapıyı canlandıran yenileme projesi.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpE_D_ykODR6_wUkApF08Uys6A6ELKCvOPBfIqNvvImdnwmq5Ibc478ELLTwIUyzhaPUJi_SqdT8_CyZD98Bx3TUMWU9Oh9foDC73b0_L-QOvtOsq3nTa9MGIHmdoP4e9_PFTOsDIwmNcD1pirIyeV5Uj1j4iDTdAMhhyfwJ7-LjXjjeiOpBHm1uqqNtSGwP7Wwz1i0tIFBcK9ir9gnHqH0v4oaqVaRQsQ5PKHBqUR9RnUeRTMYQJSA9Trds9EJnnAAaDRP4ZpGOQ',
      category: 'Tamamlanan',
      status: 'completed',
      year: '2022'
    },
    {
      id: 5,
      title: 'Kentsel Gelişim',
      description: 'Büyüyen bir şehir için kapsamlı kentsel gelişim planı.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5M-6dyzyBfMyrMG0Cp2Lp00qncPhcRJifWyjq9yLC2A6YQWJwFzoYZYKLC9pyzkMWLyKvKTFvxxQueRJFPCccJ6QiYQEInp99UmGC5CKxZOBRJNKnEpeNE4yPyokHleU_x-6nCWI2v73Tkc4mW9qydSE_itJBRK2Feh03mx9AX28tDP8FW2g586rK8NDjL2oZc5wgWKEp4l7LxugPPi3GDdJPHF91QRvZ1ocoJgCBFGrHXzR-cEK5i36HUMEYnINfDmVdw1kVEko',
      category: 'Gelecek',
      status: 'planned',
      year: '2025'
    },
    {
      id: 6,
      title: 'Sürdürülebilir Tasarım',
      description: 'Çevre dostu ve sürdürülebilir bina uygulamalarına odaklanan bir proje.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM2duw__UHaIimFeOF0JYF2PISSFvkxmL0S-jzFtYjh5S7uOxG4nfP92DhmAgyzFCNxFkvoLWVSv07oEuHJHjb5-mu5W0P5JLTfzuzyedfBU6iwviVpVkQCYWN2BpnfKy2hLOAP2YA0WAUG2ded1R4k228Grqkcni112GGhB1REGguw8N7ScXa90t0eHeR4Eqz4zPoC8axsNbWAYKyl1ISQGiDrNhMnWkvJvLaOet93CpljQCOHRmY1ndkXHF7AGO9pkF1G0DhKtk',
      category: 'Devam Eden',
      status: 'ongoing',
      year: '2024'
    },
    {
      id: 7,
      title: 'Köprü İnşaatı',
      description: 'Modern mühendislik teknikleriyle inşa edilen güvenli ve dayanıklı bir köprü projesi.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      category: 'Tamamlanan',
      status: 'completed',
      year: '2023'
    },
    {
      id: 8,
      title: 'Endüstriyel Tesis',
      description: 'Üretim verimliliğini artırmak için tasarlanmış kapsamlı endüstriyel tesis kompleksi.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      category: 'Devam Eden',
      status: 'ongoing',
      year: '2024'
    },
    {
      id: 9,
      title: 'Akıllı Şehir Planlaması',
      description: 'Geleceğin şehir yaşamını şekillendirecek akıllı teknoloji entegrasyonu ile kent planlaması.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      category: 'Gelecek',
      status: 'planned',
      year: '2025'
    },
    {
      id: 10,
      title: 'Enerji Verimli Sistemler',
      description: 'Güneş enerjisi ve akıllı otomasyon sistemleriyle enerji tasarrufu sağlayan kompleks.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
      category: 'Tamamlanan',
      status: 'completed',
      year: '2022'
    },
    {
      id: 11,
      title: 'Deprem Dayanıklı Yapılar',
      description: 'Son deprem mühendisliği standartlarına uygun, güvenilir konut projesi.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      category: 'Devam Eden',
      status: 'ongoing',
      year: '2024'
    },
    {
      id: 12,
      title: 'Yeşil Bina Sertifikası',
      description: 'LEED standartlarında çevre dostu ve sürdürülebilir yeşil bina projesi.',
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
      category: 'Gelecek',
      status: 'planned',
      year: '2026'
    }
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
            <div className="relative">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                style={{ backgroundImage: `url("${project.image}")` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                  {getStatusText(project.status)}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-black bg-opacity-75 text-white">
                  {project.year}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              </div>
              <p className="text-gray-600 mt-2 flex-1">{project.description}</p>
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
