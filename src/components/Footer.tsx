export default function Footer() {
    return (
      <footer className="mt-16 border-t border-slate-800 bg-black/40 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Atölye 22. Tüm hakları saklıdır.</span>
          <span>“Bir Sahne, Bin Yüz”</span>
        </div>
      </footer>
    );
  }