import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import PrimaryButton from '../components/PrimaryButton';
import heroPoster from '../assets/atolye22-poster.png';


const HERO_GALLERY = [
  '/perde/perde1.png',
  '/perde/perde2.png',
  '/perde/perde3.png',
  '/perde/perde4.png',
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  const prevHero = useCallback(() => {
    setHeroIndex((i) => (i - 1 + HERO_GALLERY.length) % HERO_GALLERY.length);
  }, []);

  const nextHero = useCallback(() => {
    setHeroIndex((i) => (i + 1) % HERO_GALLERY.length);
  }, []);

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
          <div className="aspect-[16/9] rounded-3xl overflow-hidden relative">
            <img
              src={HERO_GALLERY[heroIndex]}
              alt="Atölye 22 - Hero"
              className="h-full w-full object-cover"
              loading="eager"
              onError={(e) => {
                // Eğer public/hero görselleri henüz yoksa fallback
                e.currentTarget.src = heroPoster;
              }}
            />

            {/* Sol ok */}
            <button
              type="button"
              onClick={prevHero}
              aria-label="Önceki görsel"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/40 backdrop-blur border border-white/10 text-white hover:bg-black/55 active:scale-95 transition flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Sağ ok */}
            <button
              type="button"
              onClick={nextHero}
              aria-label="Sonraki görsel"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/40 backdrop-blur border border-white/10 text-white hover:bg-black/55 active:scale-95 transition flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
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