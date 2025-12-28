import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function PrimaryButton({ children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className="inline-flex items-center justify-center rounded-full bg-atelierAccent px-5 py-2 text-sm font-medium text-white shadow-lg shadow-[#4F6043]/40 hover:bg-[#3f4b37] transition-colors"
    >
      {children}
    </button>
  );
}