import { cn } from '../../utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'min-h-full w-full md:h-screen px-4 py-20 md:px-[100px] md:py-14',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
