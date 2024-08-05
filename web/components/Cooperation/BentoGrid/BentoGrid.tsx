'use client';

import { motion } from 'framer-motion';
import { cn } from '@witekrychlik/ui-components';
import Block from '../Block/Block';

export default function BentoGrid() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        staggerChildren: 0.05,
      }}
      className="grid grid-col-1 md:grid-cols-6 lg:grid-cols-12 md:grid-row-2 gap-4 bg-transparent w-full"
    >
      <Block
        step={1}
        title="Konsultacja"
        destription="Omówienie Twoich potrzeb i oczekiwań dotyczących projektu. To moment, aby zrozumieć jakie są Twoje wymagania."
        className="md:col-span-3 lg:col-span-4 xl:col-span-3"
      />
      <Block
        step={2}
        title="Projekt"
        destription="Tworzenie szczegółowego planu projektu, który obejmuje wszystkie aspekty realizacji. Opracowanie propozycji rozwiązań i przedstawienie wstępnej koncepcji do zatwierdzenia."
        className="md:col-span-3 lg:col-span-4 xl:col-span-5"
      />
      <Block
        step={3}
        title="Realizacja"
        destription="Rozpoczęcie pracy nad projektem zgodnie z ustalonym planem. Na bieżąco informuję Cię o postępach i wprowadzam ewentualne korekty zgodnie z Twoimi uwagami."
        className="md:col-span-6 lg:col-span-4 xl:col-span-4"
      />
      <Block
        step={4}
        title="Uruchomienie"
        destription="Po zakończeniu realizacji projektu następuje etap uruchomienia, w którym wdrażam gotowy produkt. Przeprowadzam testy, aby upewnić się, że wszystko działa poprawnie i zgodnie z oczekiwaniami."
        className="md:col-span-3 lg:col-span-6"
      />
      <Block
        step={5}
        title="Wsparcie"
        destription="Oferuję wsparcie techniczne i pomoc po uruchomieniu projektu. Zapewniam aktualizację, rozwiązuję problemy i odpowiadam na pytania, abyś mógł w pełni korzystać z dostarczonego rozwiązania."
        className="md:col-span-3 lg:col-span-6"
      />
    </motion.div>
  );
}
