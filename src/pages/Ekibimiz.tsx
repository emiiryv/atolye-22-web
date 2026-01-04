import { useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';

// Oyuncu fotoğrafları
import oyuncu1 from '../assets/team/oyuncu1.jpg';
import oyuncu2 from '../assets/team/oyuncu2.jpg';
import oyuncu3 from '../assets/team/oyuncu3.jpg';
import oyuncu4 from '../assets/team/oyuncu4.jpg';
import oyuncu5 from '../assets/team/oyuncu5.jpg';

// Prodüksiyon ekibi fotoğrafları
import prod1 from '../assets/team/prod1.jpg';
import prod2 from '../assets/team/prod2.jpg';
import prod3 from '../assets/team/prod3.jpg';
import prod4 from '../assets/team/prod4.jpg';
import prod5 from '../assets/team/prod5.jpg';
import prod6 from '../assets/team/prod6.jpg';

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

const actors: TeamMember[] = [
  { name: 'Ezel Gürbüzer', role: 'Oyuncu', imageUrl: oyuncu1 },
  { name: 'Taner Dinletener', role: 'Oyuncu', imageUrl: oyuncu2 },
  { name: 'Sude Türkoğlu', role: 'Oyuncu', imageUrl: oyuncu3 },
  { name: 'Barlas Uzun', role: 'Oyuncu', imageUrl: oyuncu4 },
  { name: 'İnci Alkan', role: 'Oyuncu', imageUrl: oyuncu5 },
];

const production: TeamMember[] = [
  { name: 'Elif Ömeroğlu', role: 'Yönetmen', imageUrl: prod1 },
  { name: 'Mehmet Özgül', role: 'Çevirmen', imageUrl: prod2 },
  { name: 'Osman Keleş', role: 'Dekor Tasarımı', imageUrl: prod3 },
  { name: 'Ayşe Kılıç', role: 'Kostüm Tasarımı', imageUrl: prod4 },
  { name: 'Yılmaz Şahin', role: 'Işık Tasarımı', imageUrl: prod5 },
  { name: 'Eren Gülsever', role: 'Ses Tasarımı', imageUrl: prod6 },
];

type SliderProps = {
  title: string;
  members: TeamMember[];
};

function TeamSlider({ title, members }: SliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    // Prevent rapid spamming from stacking smooth scroll animations.
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    // Scroll by ~one viewport width (keeps 2 cards visible on mobile).
    const step = Math.max(240, Math.floor(container.clientWidth * 0.92));

    const maxLeft = Math.max(0, container.scrollWidth - container.clientWidth);
    const nextLeft = direction === 'left' ? container.scrollLeft - step : container.scrollLeft + step;
    const clampedLeft = Math.min(maxLeft, Math.max(0, nextLeft));

    container.scrollTo({
      left: clampedLeft,
      behavior: 'smooth',
    });

    // Release the lock shortly after the smooth scroll should have settled.
    window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 350);
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {/*
        Mobil uyumlu slider:
        - Yatay taşma yok (wrapper overflow-hidden)
        - Swipe ile kaydırılabilir (overflow-x-auto + snap)
        - Scrollbar gizli
        - Oklar içeride overlay (layout bozmaz)
      */}
      <div className="relative overflow-hidden">
        {/* Sol ok (overlay) */}
        <button
          type="button"
          onClick={() => scroll('left')}
          onPointerDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full border border-slate-700 bg-black/35 backdrop-blur flex items-center justify-center text-xs text-slate-200/90 hover:bg-black/60 hover:border-slate-400 transition-colors opacity-80 hover:opacity-100 touch-none select-none"
          aria-label="Sola kaydır"
        >
          &#8249;
        </button>

        {/* Sağ ok (overlay) */}
        <button
          type="button"
          onClick={() => scroll('right')}
          onPointerDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full border border-slate-700 bg-black/35 backdrop-blur flex items-center justify-center text-xs text-slate-200/90 hover:bg-black/60 hover:border-slate-400 transition-colors opacity-80 hover:opacity-100 touch-none select-none"
          aria-label="Sağa kaydır"
        >
          &#8250;
        </button>

        {/* Kartların olduğu scroll alanı */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-10 py-2 touch-pan-x overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {members.map((person) => (
            <div
              key={person.name}
              className="snap-center flex-shrink-0 w-[46vw] max-w-[240px] sm:w-64 md:w-64"
            >
              <TeamCard
                name={person.name}
                role={person.role}
                imageUrl={person.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Ekibimiz() {
  return (
    <div className="space-y-10 overflow-x-hidden">
      <SectionTitle
        title="Ekibimiz"
        subtitle="Atölye 22’nin arkasındaki yaratıcı ekip."
      />

      <TeamSlider title="Oyuncular" members={actors} />

      <TeamSlider title="Prodüksiyon Ekibi" members={production} />
    </div>
  );
}