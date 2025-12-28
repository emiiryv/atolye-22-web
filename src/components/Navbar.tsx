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
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full overflow-hidden bg-atelierAccent/90 flex items-center justify-center">
            <img
              src={logo}
              alt="Atölye 22"
              className="h-7 w-7 object-contain"
            />
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm">
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