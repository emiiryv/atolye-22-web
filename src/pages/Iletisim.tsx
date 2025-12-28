import SectionTitle from '../components/SectionTitle';

export default function Iletisim() {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="İletişim"
        subtitle="Oyunlar, işbirlikleri veya atölye çalışmaları hakkında bizimle iletişime geçin."
      />

      <div className="grid md:grid-cols-2 gap-10">
        {/* İLETİŞİM BİLGİLERİ */}
        <div className="space-y-4 text-sm md:text-base text-slate-300">
          <div>
            <h2 className="text-lg font-semibold mb-2">İletişim Bilgileri</h2>
            <p>
              E-posta: <span className="font-mono">atolyee22@gmail.com</span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Adres</h3>
            <p>
              Efeler Belediyesi Milli Aydın Bankası Kültür Merkezi,
              <br />
              Hasanefendi - Ramazan Paşa, 1905. Sk. No:2,
              <br />
              09100 Aydın Merkez / Aydın
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-atelierCard/70 border border-slate-800 rounded-3xl p-6">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Mesajınız alındı. Teşekkür ederiz! (Demo form)');
            }}
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="text-slate-200">
                Ad Soyad
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-xl bg-neutral-800 border border-neutral-600 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-atelierAccent"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="text-slate-200">
                E-posta
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl bg-neutral-800 border border-neutral-600 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-atelierAccent"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="subject" className="text-slate-200">
                Konu
              </label>
              <input
                id="subject"
                type="text"
                className="w-full rounded-xl bg-neutral-800 border border-neutral-600 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-atelierAccent"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="message" className="text-slate-200">
                Mesaj
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-xl bg-neutral-800 border border-neutral-600 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-atelierAccent"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-atelierAccent px-5 py-2 text-sm font-medium text-white shadow-lg shadow-[#4F6043]/40 hover:bg-[#3f4b37] transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>

      {/* MAP PLACEHOLDER */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Konum</h2>
        <div className="h-64 rounded-3xl overflow-hidden border border-slate-800">
          <iframe
            title="Atölye 22 Konum"
            src="https://www.google.com/maps?q=Efeler%20Belediyesi%20Milli%20Ayd%C4%B1n%20Bankas%C4%B1%20K%C3%BClt%C3%BCr%20Merkezi%2C%20Hasanefendi%20-%20Ramazan%20Pa%C5%9Fa%2C%201905.%20Sk.%20No%3A2%2C%2009100%20Ayd%C4%B1n%20Merkez%2FAyd%C4%B1n&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}