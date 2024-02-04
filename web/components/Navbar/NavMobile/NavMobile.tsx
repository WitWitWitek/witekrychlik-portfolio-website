import { useState } from 'react';
import { Routes } from '../../../constants';

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
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger className="flex justify-center md:hidden">
          <HamburgerMenuIcon className="h-7 w-7 text-secondary" />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="h-full w-full md:w-[540px] bg-slate-950 flex flex-col items-center justify-center gap-2 md:hidden"
        >
          <SheetHeader>
            <SheetTitle className="text-3xl text-slate-100 mb-6">
              Menu:
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col items-center justify-center gap-5">
            {routes.map((route, i) => (
              <NavLink
                key={i}
                target={route.target}
                label={route.label}
                className="text-3xl"
                onClick={() => setSheetOpen(false)}
                variant="link"
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
