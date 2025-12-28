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
  
    const scroll = (direction: 'left' | 'right') => {
      const container = containerRef.current;
      if (!container) return;
  
      const firstChild = container.firstElementChild as HTMLElement | null;
      const cardWidth = firstChild ? firstChild.clientWidth + 16 : 260; // 16px ≈ gap-4
  
      container.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    };
  
    return (
      <section className="space-y-4">
        {/* Başlık satırı */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
  
        {/* Oklar iki uçta, ortada slider */}
        <div className="flex items-center gap-3">
          {/* Sol ok */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="h-8 w-8 rounded-full border border-slate-600 flex items-center justify-center text-xs text-slate-200 hover:bg-slate-700/70 hover:border-slate-400 transition-colors shrink-0"
            aria-label="Sola kaydır"
          >
            &#8249;
          </button>
  
          {/* Kartların olduğu scroll alanı */}
          <div className="relative flex-1 max-w-full">
            <div
              ref={containerRef}
              className="flex gap-4 overflow-x-hidden scroll-smooth snap-x snap-mandatory pt-1 pb-3 justify-center md:justify-start"
            >
              {members.map((person) => (
                <div
                  key={person.name}
                  className="snap-start flex-shrink-0 w-64 sm:w-72"
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
  
          {/* Sağ ok */}
          <button
            type="button"
            onClick={() => scroll('right')}
            className="h-8 w-8 rounded-full border border-slate-600 flex items-center justify-center text-xs text-slate-200 hover:bg-slate-700/70 hover:border-slate-400 transition-colors shrink-0"
            aria-label="Sağa kaydır"
          >
            &#8250;
          </button>
        </div>
      </section>
    );
  }

export default function Ekibimiz() {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Ekibimiz"
        subtitle="Atölye 22’nin arkasındaki yaratıcı ekip."
      />

      <TeamSlider title="Oyuncular" members={actors} />

      <TeamSlider title="Prodüksiyon Ekibi" members={production} />
    </div>
  );
}