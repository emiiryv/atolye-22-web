import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-atelierBg">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}