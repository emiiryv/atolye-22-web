import { useEffect, useState } from 'react';
import logo from '../assets/atolye22-logo.png';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Anasayfa' },
  { to: '/repertuar', label: 'Repertuar' },
  { to: '/ekibimiz', label: 'Ekibimiz' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Menü açıkken arkayı kaydırmayı engelle
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className="border-b border-slate-800 sticky top-0 z-[60] bg-black"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full overflow-hidden bg-atelierAccent/90 flex items-center justify-center">
            <img src={logo} alt="Atölye 22" className="h-7 w-7 object-contain" />
          </div>
        </div>

        {/* Desktop navigation (mobilde gizli) */}
        <ul className="hidden lg:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive ? 'text-atelierAccent' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger (desktopta gizli) */}
        <button
          type="button"
          aria-label="Menüyü aç"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-slate-200 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-atelierAccent touch-manipulation select-none"
        >
          <span className="sr-only">Menüyü aç</span>
          <span aria-hidden className="flex flex-col gap-1">
            <span className="block h-0.5 w-6 bg-slate-200 rounded" />
            <span className="block h-0.5 w-6 bg-slate-200 rounded" />
            <span className="block h-0.5 w-6 bg-slate-200 rounded" />
          </span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black lg:hidden z-50 transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Right drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 lg:hidden z-[70] bg-black border-l border-white/10 shadow-2xl transform transition-transform duration-200 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
          <span className="text-sm font-medium text-slate-200">Menü</span>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-atelierAccent touch-manipulation select-none"
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Menüyü kapat</span>
            <span aria-hidden className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 bg-slate-200 rounded" />
              <span className="block h-0.5 w-5 bg-slate-200 rounded" />
              <span className="block h-0.5 w-5 bg-slate-200 rounded" />
            </span>
          </button>
        </div>

        <nav className="px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? 'text-atelierAccent font-medium'
                        : 'text-slate-200 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  );
}