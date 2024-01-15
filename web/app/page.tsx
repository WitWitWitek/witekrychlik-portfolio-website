import { Button } from '@witekrychlik/ui-components';
import Image from 'next/image';
import Link from 'next/link';

export default async function Index() {
  return (
    <section className="bg-slate-950 h-screen px-[100px] py-14 flex flex-row gap-x-40">
      <div className="h-full w-3/5 p-4 flex flex-col justify-center gap-2 text-white">
        <div className="text-6xl flex flex-col gap-2">
          <p>Cześć! 👋</p>
          <p className="font-bold">
            Jestem <span className="text-linear-gradient">Witold Rychlik</span>
          </p>
          <div className="flex items-center gap-5 text-[15px]">
            <div className="grow h-[1px] linear-gradient" />
            <span className="italic">Web developer</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Jestem młodym pasjonatem web developmentu, gotowym przekształcić
            Twoje pomysły w wirtualną rzeczywistość. Razem możemy stworzyć
            projekt, który nie tylko zachwyci wizualnie, ale także dostarczy
            niezapomniane wrażenia użytkownikom. Daj mi szansę pomóc Ci w
            urzeczywistnieniu Twoich internetowych marzeń!
          </p>
          <div className="flex w-full gap-2">
            <Button variant="default">Formularz kontaktowy</Button>
            <Button variant="default">Technologie</Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Sprawdź:</p>
          <div className="flex w-full gap-2">
            <Link href="https://github.com/WitWitWitek">
              <Button variant="destructive">Git</Button>
            </Link>
            <Link href="https://www.linkedin.com/in/witold-rychlik-86b579195/">
              <Button variant="destructive">LinkedIn</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full w-2/5 flex justify-end items-center">
        <div className="relative w-[300px] h-[300px] rounded-md overflow-hidden">
          <Image src="/logo.svg" alt="Logo strony witekrychlick.com.pl" fill />
        </div>
      </div>
    </section>
  );
}
