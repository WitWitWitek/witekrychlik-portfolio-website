'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@witekrychlik/ui-components';
import BentoGrid from './BentoGrid/BentoGrid';

export default function Cooperation() {
  return (
    <Section className="min-h-screen overflow-hidden flex flex-col gap-10 justify-center items-center">
      <motion.h2
        initial="offscreen"
        whileInView="onscreen"
        variants={{
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
            transition: {
              duration: 0.8,
            },
          },
        }}
        transition={{
          type: 'spring',
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl md:text-5xl lg:text-6xl text-secondary font-semibold text-center"
      >
        Jak wygląda <span className="text-linear-gradient">współpraca</span>?
      </motion.h2>
      <BentoGrid />
    </Section>
  );
}
