'use client';

import Link from 'next/link';
import {
  NavLink,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from '@witekrychlik/ui-components';
import Image from 'next/image';

const routes: { target: string; label: string }[] = [
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
    <header className="fixed z-10 top-0 bg-slate-950 px-4 md:px-[100px] h-14 w-full flex items-center border-b border-white border-opacity-20">
      <Link
        href="/"
        className="w-9 h-9 relative rounded-md overflow-hidden hover:grayscale"
      >
        <Image src="/logo.svg" alt="Logo strony witekrychlik.com.pl" fill />
      </Link>
      <nav className="hidden md:flex flex-row gap-2 grow px-2">
        {routes.map((route, i) => (
          <NavLink key={i} target={route.target} label={route.label} />
        ))}
      </nav>
      <div className="hidden md:block">
        <NavLink target="/kontakt" label="Kontakt" type="secondary" />
      </div>
      <div>
        <Sheet>
          <SheetTrigger className="md:hidden">Hamburger</SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-[540px] bg-slate-950 md:hidden"
          >
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
