export default function Hizmetlerimiz() {
  return (
    <>
      <section className="bg-slate-50 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold uppercase tracking-wider text-[#9bbc5d]">Hizmetlerimiz</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Mühendislik Çözümlerimiz</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Her projeye özel, yenilikçi ve sürdürülebilir mühendislik hizmetleri sunuyoruz.</p>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#9bbc5d] text-white">
                <span className="material-symbols-outlined">domain</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Yapı Projeleri</h3>
              <p className="mt-2 text-base text-slate-600">Betonarme, çelik, ahşap, yığma ve prefabrik yapı sistemlerine yönelik, güvenli ve estetik projeler.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#9bbc5d] text-white">
                <span className="material-symbols-outlined">layers</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Geoteknik Projeler</h3>
              <p className="mt-2 text-base text-slate-600">Zemin etütleri, istinat yapıları, zemin iyileştirme ve şev stabilitesi analizleri ile sağlam temeller.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#9bbc5d] text-white">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Elektrik Projeleri</h3>
              <p className="mt-2 text-base text-slate-600">Aydınlatma, kuvvetli ve zayıf akım sistemlerinde verimli ve güvenilir mühendislik çözümleri.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#9bbc5d] text-white">
                <span className="material-symbols-outlined">thermostat</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Mekanik Projeler</h3>
              <p className="mt-2 text-base text-slate-600">Isıtma, soğutma, havalandırma ve sıhhi tesisat sistemlerinde konfor ve enerji verimliliği odaklı projeler.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#9bbc5d] text-white">
                <span className="material-symbols-outlined">mic</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Akustik Raporları</h3>
              <p className="mt-2 text-base text-slate-600">Yönetmeliklere tam uyumlu, yaşam kalitesini artıran akustik raporlama ve danışmanlık hizmetleri.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#9bbc5d] text-white">
                <span className="material-symbols-outlined">document_scanner</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">EKB Raporları</h3>
              <p className="mt-2 text-base text-slate-600">Binalarınız için enerji verimliliğini belgeleyen, yönetmeliklere uygun Enerji Kimlik Belgesi hazırlama.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
