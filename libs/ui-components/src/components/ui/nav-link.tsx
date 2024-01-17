'use client';

import Link from 'next/link';
import { Button } from './button';
import { usePathname } from 'next/navigation';
import { cn } from '../../utils';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  target: string;
  label: string;
  type?: 'link' | 'secondary';
}

export function NavLink({
  target,
  label,
  type = 'link',
  className,
}: NavLinkProps) {
  const pathname = usePathname();
  const activeLinkStyles =
    pathname === target ? 'text-linear-gradient' : 'text-slate-100';
  return (
    <Link href={target}>
      <Button
        variant={type}
        className={cn(
          type === 'link' ? activeLinkStyles : '',
          'relative',
          className
        )}
      >
        {label}
      </Button>
    </Link>
  );
}
