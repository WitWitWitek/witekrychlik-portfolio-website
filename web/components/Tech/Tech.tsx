import {
  Section,
  Card,
  CardFooter,
  CardContent,
} from '@witekrychlik/ui-components';
import Image from 'next/image';
import { technologies } from '../../constants';

export default function Tech() {
  return (
    <Section className="min-h-screen">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-secondary mb-12 sm:mb-16 lg:mb-20">
        Technologie:
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {technologies.map((tech, i) => (
          <Card
            key={i}
            className="p-5 md:p-8 bg-transparent flex flex-col items-center justify-between z-[1]"
          >
            <CardContent className="relative w-[45%] aspect-square">
              <Image src={tech.logo} alt={tech.alt} fill />
            </CardContent>
            <CardFooter className="text-center text-secondary justify-center text-xl sm:text-2xl md:text-3xl font-bold mt-6 tracking-wider">
              {tech.name}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
