import { cn } from '../../utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'min-h-full w-full md:h-screen px-4 py-20 md:p-section-lg',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
