import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import PrimaryButton from '../components/PrimaryButton';
import heroPoster from '../assets/atolye22-poster.png';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Atölye 22:{' '}
            <span className="text-atelierAccent md:whitespace-nowrap">
              Bir Sahne, Bin Yüz
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base mb-6 max-w-xl text-justify">
          Atölye 22, bağımsız bir tiyatro topluluğudur. Bizim için tiyatro; ulaşılmaz bir sanat değil, halktan beslenen, herkesin duygusuna dokunan bir ifade alanıdır. Kendi yolumuzu çizerken hem cesur olanı deniyor hem de en içten olanı sahneye taşıyoruz. Çünkü Atölye 22’de tiyatro sadece izlenen bir şey değil, birlikte yaşanan bir deneyimdir.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/repertuar">
              <PrimaryButton>Repertuarı Gör</PrimaryButton>
            </Link>
            <Link
              to="/iletisim"
              className="text-xs md:text-sm text-slate-300 hover:text-white underline-offset-4 hover:underline"
            >
              Bizimle İletişime Geç
            </Link>
          </div>
        </div>

        <div className="relative">
            <div className="aspect-[16/9] rounded-3xl bg-gradient-to-br from-atelierAccent via-[#4F6043] to-slate-900 border border-[#4F6043]/60 shadow-[0_0_80px_rgba(79,96,67,0.35)] p-4">
                <img
                src={heroPoster}
                alt="Atölye 22 Logo"
                className="h-full w-full object-cover rounded-2xl"
                />
            </div>
            </div>
      </section>

      {/* KISA HAKKIMIZDA */}
      <section>
        <SectionTitle
          title="Atölye 22 Nedir?"
          subtitle="Küçük bir sahnede, büyük duygular ve samimi bir atmosferle seyirciyle buluşan bağımsız bir tiyatro atölyesi."
        />
        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl text-justify">
          Atölye 22, bağımsız bir tiyatro topluluğu olarak yenilikçi sahne dili arayışından doğdu. Bizim için tiyatro; yalnızca bir temsil değil, düşüncenin, duygunun ve deneyimin dışavurumu.
          <br />
          <br />
          <Link
            to="/hakkimizda"
            className="text-atelierAccent text-sm underline-offset-4 hover:underline"
          >
            Hakkımızda sayfasında daha fazlasını keşfedin →
          </Link>
        </p>
      </section>

      {/* OYUN TEASER */}
      <section className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
        <div>
          <SectionTitle
            title="Gündemdeki Oyunumuz"
            subtitle="Repertuarımızda şu an tek bir prodüksiyon yer alıyor, tüm odağımız bu hikâyede."
          />
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Anton Çehov - Martı
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-4 max-w-3xl text-justify">
          Martı; hayallerin, aşkın ve insan ruhunun kırılganlığı üzerine derin bir yüzleşme sunan evrensel bir hikâyedir.
          </p>
          <Link to="/repertuar">
            <PrimaryButton>Oyun Detaylarını Gör</PrimaryButton>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="bg-atelierCard/70 border border-slate-800 rounded-3xl px-6 py-5 text-sm text-slate-200 shadow-xl shadow-black/40 max-w-sm">
            <em className="leading-relaxed">
              “Bir hayat düşünün: herkes sizi okuyor, ama kimse sizi tanımıyor.”
            </em>
          </div>
        </div>
      </section>
    </div>
  );
}