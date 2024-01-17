import React from 'react';
import { Routes } from '../Navbar';
import { NavLink } from '@witekrychlik/ui-components';

type Props = {
  routes: Routes;
};

export default function NavDesktop({ routes }: Props) {
  return (
    <>
      <nav className="hidden md:flex flex-row gap-2 grow px-2">
        {routes.map((route, i) => (
          <NavLink key={i} target={route.target} label={route.label} />
        ))}
      </nav>
      <div className="hidden md:block">
        <NavLink target="/kontakt" label="Kontakt" type="secondary" />
      </div>
    </>
  );
}
