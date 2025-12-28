import SectionTitle from '../components/SectionTitle';
import PrimaryButton from '../components/PrimaryButton';
import { Link } from 'react-router-dom';
import martiPoster from '../assets/marti-poster-1920x1080.png';

export default function Repertuar() {
  return (
    <div>
      <SectionTitle
        title="Repertuar"
        subtitle="Şu anda sahnemizde yer alan oyunumuz."
      />

      <div className="grid md:grid-cols-[1fr,1.2fr] gap-10 items-start bg-atelierCard/60 border border-slate-800 rounded-3xl p-6">
      <div className="aspect-[2/3] bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden flex items-center justify-center">
        <img
          src={martiPoster}
          alt="Anton Çehov - Martı afişi"
          className="h-full w-full object-cover"
        />
      </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Anton Çehov - Martı</h2>
          <p className="text-slate-300 text-sm md:text-base text-justify">
          Anton Çehov’un unutulmaz eseri Martı, Atölye 22 yorumuyla sahneye taşınırken aşkın, sanatın, tutkunun ve hayal kırıklığının iç içe geçtiği derin bir hikâyeye dönüşüyor. İnsan ruhunun kırılgan yönlerini incelikle ortaya koyan oyun; sevilmeyi bekleyen, anlaşılmak isteyen ve hayallerinin peşinde koşarken kendisiyle savaşan karakterleriyle seyirciyi hem düşündürüyor hem de duygusal bir yolculuğa davet ediyor. Bu sahnede martı yalnızca bir kuş değil; özgürlüğün, kaybedilmiş cesaretin ve yarım kalan hayallerin simgesi haline geliyor. Martı, her izleyene şu soruyu sessizce fısıldıyor: “Hayat mı bizi şekillendirir, yoksa hayallerimiz mi hayatı?”
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div>
              <div className="text-slate-400">Süre</div>
              <div className="font-medium mt-1">120 dakika (Dört Perde)</div>
            </div>
            <div>
              <div className="text-slate-400">Tür</div>
              <div className="font-medium mt-1">Realist Psikolojik Drama / Modern Klasik</div>
            </div>
            <div>
              <div className="text-slate-400">Yaş Sınırı</div>
              <div className="font-medium mt-1">18+</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <PrimaryButton>Bilet Al</PrimaryButton>
            <Link
              to="/ekibimiz"
              className="text-xs md:text-sm text-atelierAccent underline-offset-4 hover:underline"
            >
              Oyunun yaratıcı ekibini gör →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}