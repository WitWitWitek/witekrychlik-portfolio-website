import React from 'react';
import { Card, CardContent, CardFooter } from '@witekrychlik/ui-components';
import { Technology } from '../../../types';

type Props = {
  technology: Technology;
};

export default function TechCard({ technology }: Props) {
  const { logo, alt, name } = technology;
  return (
    <Card className="p-5 md:p-8 bg-transparent flex flex-col items-center justify-between z-[1]">
      <CardContent className="relative p-0 w-[80%] aspect-square grid justify-center">
        <img src={logo} alt={alt} className="w-full aspect-square" />
      </CardContent>
      <CardFooter className="text-center text-secondary justify-center text-xl sm:text-2xl lg:text-2xl font-bold mt-6 tracking-wider">
        {name}
      </CardFooter>
    </Card>
  );
}
