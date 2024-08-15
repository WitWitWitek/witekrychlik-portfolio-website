'use client';

import { Section, Button, cn } from '@witekrychlik/ui-components';
import Link from 'next/link';
import { offers } from 'web/constants/offer';
import { useEffect, useState } from 'react';
import { CheckIcon, PlusIcon } from '@radix-ui/react-icons';
import { Card } from '@witekrychlik/ui-components';
import { Offer } from 'web/constants/offer';
import { motion } from 'framer-motion';

export default function Offer() {
  const [activeOffers, setActiveOffers] = useState<number[]>([]);

  return (
    <Section className="min-h-screen overflow-hidden flex flex-col md:flex-row text-secondary gap-5 md:gap-10">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={{
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
            transition: {
              duration: 0.5,
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
        className="md:w-1/2 flex-grow flex flex-col justify-center gap-5"
      >
        <h2 className="text-4xl md:text-4xl lg:text-5xl text-secondary font-semibold text-center">
          W czym mogę <span className="text-linear-gradient">pomóc</span>?
        </h2>
        <p className="text-justify">
          Tworzę nowoczesne strony internetowe, dostosowane do indywidualnych
          potrzeb klienta. Moje strony są zoptymalizowane pod kątem wydajności i
          responsywności, aby zapewnić najlepsze wrażenia użytkownikom na każdym
          urządzeniu. Pamiętaj rozmawiasz z człowiekiem, a nie z agencją!
        </p>
        <div className="flex flex-wrap justify-center md:flex-nowrap w-full gap-2 md:gap-5">
          <Link href="/kontakt">
            <Button
              variant="default"
              className="linear-gradient font-bold tracking-wider"
            >
              Formularz kontaktowy
            </Button>
          </Link>
          <Link href="/technologie">
            <Button
              variant="ghost"
              className="font-bold tracking-wider border-secondary border-2"
            >
              Projekty
            </Button>
          </Link>
        </div>
      </motion.div>
      <motion.ul
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          staggerChildren: 0.1,
        }}
        className="md:w-1/2 flex-grow flex flex-col gap-5 list-none justify-center"
      >
        {offers.map((offer, i) => (
          <motion.li
            key={i}
            animate={{
              maxHeight: activeOffers?.includes(i) ? '300px' : '50px',
            }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            variants={{
              offscreen: {
                y: 50,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
              },
            }}
            className={
              'w-full bg-transparent text-secondary px-4 py-2 flex flex-col items-center border-2 border-secondary rounded-lg'
            }
          >
            <div className="w-full flex flex-row flex-nowrap justify-between  gap-5">
              <div className="flex flex-row flex-nowrap justify-start items-center gap-5">
                <div className="rounded-full bg-transparent border-2 border-secondary linear-gradient">
                  <CheckIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl">{offer.name}</h3>
              </div>
              <motion.button
                animate={{
                  rotate: activeOffers?.includes(i) ? '45deg' : '0',
                }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
                onClick={() =>
                  setActiveOffers((prev) =>
                    prev?.includes(i)
                      ? prev.filter((number) => number !== i)
                      : [...prev, i]
                  )
                }
              >
                <PlusIcon
                  className={cn('w-5 h-5 cursor-pointer bg-transparent', {
                    'stroke-gray-100': activeOffers.includes(i),
                  })}
                />
              </motion.button>
            </div>
            <div className="overflow-hidden">{offer.description}</div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
