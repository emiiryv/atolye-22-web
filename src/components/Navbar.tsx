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
  return (
    <header className="border-b border-slate-800 bg-black/40 backdrop-blur sticky top-0 z-20">
      <nav className="max-w-6xl mx-auto flex flex-col gap-2 md:flex-row md:items-center md:justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full overflow-hidden bg-atelierAccent/90 flex items-center justify-center">
            <img
              src={logo}
              alt="Atölye 22"
              className="h-7 w-7 object-contain"
            />
          </div>
        </div>

        <ul className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-xs md:text-sm md:gap-6 mt-1 md:mt-0">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? 'text-atelierAccent'
                      : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}