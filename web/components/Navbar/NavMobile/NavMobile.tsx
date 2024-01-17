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
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
type Props = {
  routes: Routes;
};

export default function NavMobile({ routes }: Props) {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="flex justify-center md:hidden">
          <HamburgerMenuIcon className="h-7 w-7 text-secondary" />
        </SheetTrigger>
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
                variant="link"
              />
            ))}
            <NavLink
              target="/kontakt"
              label="Kontakt"
              variant="link"
              className="text-4xl"
            />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
