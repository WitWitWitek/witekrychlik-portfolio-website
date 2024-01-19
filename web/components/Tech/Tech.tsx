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
    <Section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {technologies.map((tech, i) => (
        <Card
          key={i}
          className="h-[300px] p-5 md:p-8 bg-transparent flex flex-col items-center justify-between z-[1]"
        >
          <CardContent className="relative w-[70%] aspect-square">
            <Image src={tech.logo} alt={tech.alt} fill />
          </CardContent>
          <CardFooter className="text-center text-secondary justify-center text-4xl font-bold">
            {tech.name}
          </CardFooter>
        </Card>
      ))}
    </Section>
  );
}
