'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavDesktop from './NavDesktop/NavDesktop';
import NavMobile from './NavMobile/NavMobile';
import { routes } from '../../constants';

export default function Navbar() {
  return (
    <header className="fixed z-10 top-0 backdrop-blur-lg px-4 md:px-24 lg:px-36 h-16 w-full flex items-center justify-between border-b border-white border-opacity-20">
      <Link
        href="/"
        className="w-12 h-12 relative rounded-md overflow-hidden hover:grayscale shrink-0"
      >
        <Image src="/logo.svg" alt="Logo strony witekrychlik.com.pl" fill />
      </Link>
      <NavMobile routes={routes} />
      <NavDesktop routes={routes} />
    </header>
  );
}
