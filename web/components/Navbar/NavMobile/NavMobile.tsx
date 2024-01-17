import React from 'react';
import { Routes } from '../Navbar';

import {
  NavLink,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@witekrychlik/ui-components';

type Props = {
  routes: Routes;
};

export default function NavMobile({ routes }: Props) {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="md:hidden">Hamburger</SheetTrigger>
        <SheetContent
          side="top"
          className="h-full w-full sm:w-[540px] bg-slate-950 flex flex-col items-center justify-center gap-2 md:hidden"
        >
          <SheetHeader>
            <SheetTitle className="text-4xl text-slate-100 mb-6">
              Menu:
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col items-center justify-center gap-5">
            {routes.map((route, i) => (
              <NavLink
                key={i}
                target={route.target}
                label={route.label}
                className="text-4xl"
              />
            ))}
            <NavLink
              target="/kontakt"
              label="Kontakt"
              type="link"
              className="text-4xl"
            />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
