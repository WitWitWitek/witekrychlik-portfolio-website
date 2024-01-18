import { Button, Section } from '@witekrychlik/ui-components';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Section className="w-full h-screen flex flex-col items-center justify-center gap-3 md:gap-6 text-center">
      <h2 className="text-7xl font-bold uppercase text-secondary">Not Found</h2>
      <p className=" text-muted-foreground">
        Could not find requested resource
      </p>
      <Link href="/">
        <Button variant="secondary" className="font-bold tracking-wider">
          Return Home
        </Button>
      </Link>
    </Section>
  );
}
