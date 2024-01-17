'use client';

import Link from 'next/link';
import { Button } from './button';
import { usePathname } from 'next/navigation';
import { cn } from '../../utils';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  target: string;
  label: string;
  variant?: 'link' | 'secondary';
}

export function NavLink({
  target,
  label,
  variant = 'link',
  className,
}: NavLinkProps) {
  const pathname = usePathname();
  const activeLinkStyles =
    pathname === target ? 'text-linear-gradient' : 'text-slate-100';
  return (
    <Link href={target}>
      <Button
        variant={variant}
        className={cn(
          variant === 'link' ? activeLinkStyles : '',
          'relative font-bold tracking-wider',
          className
        )}
      >
        {label}
      </Button>
    </Link>
  );
}
