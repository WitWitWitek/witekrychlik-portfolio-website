'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavDesktop from './NavDesktop/NavDesktop';
import NavMobile from './NavMobile/NavMobile';

export type Routes = { target: string; label: string }[];
const routes: Routes = [
  {
    target: '/',
    label: 'Strona główna',
  },
  {
    target: '/projekty',
    label: 'Projekty',
  },
  {
    target: '/technologie',
    label: 'Technologie',
  },
  {
    target: '/uslugi',
    label: 'Usługi',
  },
];

export default function Navbar() {
  return (
    <header className="fixed z-10 top-0 bg-slate-950 px-4 md:px-[100px] h-14 w-full flex items-center justify-between border-b border-white border-opacity-20">
      <Link
        href="/"
        className="w-9 h-9 relative rounded-md overflow-hidden hover:grayscale"
      >
        <Image src="/logo.svg" alt="Logo strony witekrychlik.com.pl" fill />
      </Link>
      <NavMobile routes={routes} />
      <NavDesktop routes={routes} />
    </header>
  );
}
