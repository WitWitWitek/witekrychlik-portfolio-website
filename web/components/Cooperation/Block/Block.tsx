import { motion } from 'framer-motion';
import { Card, cn } from '@witekrychlik/ui-components';

interface BlockProps extends React.ComponentProps<'div'> {
  step: number;
  title: string;
  destription: string;
}

export default function Block({
  className,
  step,
  title,
  destription,
}: BlockProps) {
  return (
    <motion.div
      variants={{
        offscreen: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        onscreen: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={cn('col-span-4 row-span-1 h-full w-full', className)}
    >
      <Card className="bg-transparent text-secondary p-4 md:p-6 flex flex-col justify-start items-center gap-5 w-full h-full">
        <div className="w-full flex flex-row justify-start items-center gap-5">
          <div className="w-10 md:w-16 h-10 linear-gradient text-primary rounded-sm flex justify-center items-center font-bold text-3xl">
            {step}
          </div>
          <h3 className="flex-1 text-3xl">{title}</h3>
        </div>
        <p className="grid content-center text-center text-md">{destription}</p>
      </Card>
    </motion.div>
  );
}
