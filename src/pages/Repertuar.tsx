import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import martiPoster from '../assets/marti-poster-1920x1080.png';

export default function Repertuar() {
  const [ticketOpen, setTicketOpen] = useState(false);
  const [paid, setPaid] = useState(false);

  const dialogTitleId = useId();

  // Close modal on ESC (desktop)
  useEffect(() => {
    if (!ticketOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeTicket();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [ticketOpen]);

  useEffect(() => {
    if (!ticketOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [ticketOpen]);

  function openTicket() {
    setPaid(false);
    setTicketOpen(true);
  }

  function closeTicket() {
    setTicketOpen(false);
  }

  function handlePay(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo ödeme: gerçek ödeme yok
    setPaid(true);
  }

  const primaryBtn =
    'rounded-full bg-atelierAccent/80 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-atelierAccent focus:outline-none focus:ring-2 focus:ring-atelierAccent/50';

  return (
    <div>
      <SectionTitle title="Repertuar" subtitle="Şu anda sahnemizde yer alan oyunumuz." />

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
            Anton Çehov’un unutulmaz eseri Martı, Atölye 22 yorumuyla sahneye taşınırken aşkın,
            sanatın, tutkunun ve hayal kırıklığının iç içe geçtiği derin bir hikâyeye dönüşüyor.
            İnsan ruhunun kırılgan yönlerini incelikle ortaya koyan oyun; sevilmeyi bekleyen,
            anlaşılmak isteyen ve hayallerinin peşinde koşarken kendisiyle savaşan karakterleriyle
            seyirciyi hem düşündürüyor hem de duygusal bir yolculuğa davet ediyor. Bu sahnede martı
            yalnızca bir kuş değil; özgürlüğün, kaybedilmiş cesaretin ve yarım kalan hayallerin
            simgesi haline geliyor. Martı, her izleyene şu soruyu sessizce fısıldıyor: “Hayat mı bizi
            şekillendirir, yoksa hayallerimiz mi hayatı?”
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
            <button type="button" onClick={openTicket} className={primaryBtn}>
              Bilet Al
            </button>
            <Link
              to="/ekibimiz"
              className="text-xs md:text-sm text-atelierAccent underline-offset-4 hover:underline"
            >
              Oyunun yaratıcı ekibini gör →
            </Link>
          </div>
        </div>
      </div>

      {ticketOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <button
            type="button"
            aria-label="Kapat"
            className="absolute inset-0 bg-black/80"
            onClick={closeTicket}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="relative w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] rounded-3xl bg-atelierCard border border-slate-800 p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id={dialogTitleId} className="text-lg font-semibold">Bilet Al</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Kart bilgilerinizi giriniz.
                </p>
              </div>

              <button
                type="button"
                onClick={closeTicket}
                className="rounded-full p-2 text-slate-300 hover:text-white"
                aria-label="Kapat"
              >
                ✕
              </button>
            </div>

            {!paid ? (
              <form onSubmit={handlePay} className="mt-6 space-y-4">
                <div>
                  <label className="text-xs text-slate-400">Kart Üzerindeki İsim</label>
                  <input
                    required
                    placeholder="Ad Soyad"
                    className="mt-2 w-full rounded-xl bg-[#2b2b2b] border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-atelierAccent/40"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400">Kart Numarası</label>
                  <input
                    required
                    inputMode="numeric"
                    placeholder="1234 5678 9012 3456"
                    className="mt-2 w-full rounded-xl bg-[#2b2b2b] border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-atelierAccent/40"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400">Son Kullanma</label>
                    <input
                      required
                      inputMode="numeric"
                      placeholder="MM/YY"
                      className="mt-2 w-full rounded-xl bg-[#2b2b2b] border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-atelierAccent/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">CVC</label>
                    <input
                      required
                      inputMode="numeric"
                      placeholder="123"
                      className="mt-2 w-full rounded-xl bg-[#2b2b2b] border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-atelierAccent/40"
                    />
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={closeTicket}
                    className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/10"
                  >
                    Vazgeç
                  </button>
                  <button type="submit" className={primaryBtn}>
                    Ödemeyi Tamamla
                  </button>
                </div>

              </form>
            ) : (
              <div className="mt-6">
                <div className="rounded-2xl border border-emerald-700/40 bg-emerald-500/10 p-4 text-emerald-200">
                  Ödeme alındı. Teşekkürler!
                </div>
                <div className="mt-4 flex justify-end">
                  <button type="button" onClick={closeTicket} className={primaryBtn}>
                    Kapat
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}