import { Button } from '@witekrychlik/ui-components';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 px-[100px] py-14 gap-2">
      <h2 className="text-7xl font-bold uppercase text-white">Not Found</h2>
      <p className=" text-muted-foreground">
        Could not find requested resource
      </p>
      <Link href="/">
        <Button variant="secondary">Return Home</Button>
      </Link>
    </div>
  );
}
