import { cn } from '../../utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'min-h-screen w-full md:h-screen px-4 md:px-24 lg:px-36 pt-20 pb-10',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
