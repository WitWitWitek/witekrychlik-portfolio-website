import Link from 'next/link';
import { Button } from '@witekrychlik/ui-components';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed z-10 top-0 bg-slate-950 px-4 md:px-[100px] h-14 w-full flex items-center border-b border-white border-opacity-20">
      <Link
        href="/"
        className="w-9 h-9 relative rounded-md overflow-hidden hover:grayscale"
      >
        <Image src="/logo.svg" alt="Logo strony witekrychlik.com.pl" fill />
      </Link>
      <ul className="hidden md:flex flex-row gap-2 grow px-2">
        <Button variant="secondary">Strona główna</Button>
        <Button variant="secondary">Projekty</Button>
        <Button variant="secondary">Technologie</Button>
        <Button variant="secondary">Usługi</Button>
      </ul>
      <div className="hidden md:block">
        <Button variant="secondary">Kontakt</Button>
      </div>
    </nav>
  );
}
