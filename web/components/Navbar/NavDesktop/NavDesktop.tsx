import React from 'react';
import { NavLink } from '@witekrychlik/ui-components';
import { Routes } from '../../../constants';

type Props = {
  routes: Routes;
};

export default function NavDesktop({ routes }: Props) {
  return (
    <>
      <nav className="hidden md:flex flex-row justify-end gap-0 lg:gap-2 grow shrink-1">
        {routes.map((route, i) => (
          <NavLink
            key={i}
            target={route.target}
            label={route.label}
            variant={route.target === '/kontakt' ? 'secondary' : 'link'}
            className="text-lg"
          />
        ))}
      </nav>
    </>
  );
}
