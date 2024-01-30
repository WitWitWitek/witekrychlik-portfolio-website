import { Button, Section, SocialMediaLink } from '@witekrychlik/ui-components';
import { hero } from '../../constants';
import Link from 'next/link';

export default function Hero() {
  return (
    <Section className="min-h-screen md:h-screen flex flex-col-reverse justify-evenly md:flex-row gap-x-40 gap-y-2 relative overflow-hidden">
      <div className="h-full lg:max-w-2xl flex flex-col justify-center gap-2 md:gap-4 text-white z-[1]">
        <div className="text-4xl md:text-5xl lg:text-6xl flex flex-col gap-2 md:gap-4">
          <h1 className="flex flex-col gap-2 md:gap-4">
            <p>Cześć! 👋</p>
            <div>
              Jestem{' '}
              <div className="font-bold text-linear-gradient break-keep lg:inline">
                Witold Rychlik
              </div>
            </div>
          </h1>
          <div className="flex items-center gap-5 text-[18px] sm:text-[20px] w-[92%]">
            <div className="grow h-[1px] linear-gradient" />
            <span className="italic">Web developer</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 w-[92%] text-xl">
          <p className="hidden sm:block text-justify">{hero.description}</p>
          <div className="flex flex-wrap md:flex-nowrap w-full gap-2 md:gap-4">
            <Link href="/kontakt">
              <Button
                variant="default"
                className="linear-gradient font-bold tracking-wider"
              >
                Formularz kontaktowy
              </Button>
            </Link>
            <Link href="/technologie">
              <Button variant="secondary" className="font-bold tracking-wider">
                Technologie
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex flex-col gap-2 md:gap-4 text-xl">
          <p>Sprawdź:</p>
          <div className="flex w-full gap-2 md:gap-4">
            <SocialMediaLink
              target="https://github.com/WitWitWitek"
              icon="github"
              title="Konto na GitHub"
            ></SocialMediaLink>
            <SocialMediaLink
              target="https://www.linkedin.com/in/witold-rychlik-86b579195/"
              icon="linkedin"
              title="Konto na LinkediIn"
            ></SocialMediaLink>
          </div>
        </div>
      </div>
      <div className="h-full flex justify-center md:justify-end items-center md:grow z-[1]">
        <div className="relative aspect-square w-[250px] sm:w-[200px] md:min-w-32 md:w-[60%] rounded-md glow">
          <img
            src="/logo.webp"
            alt="Logo strony witekrychlick.com.pl"
            className="w-full h-full"
          />
        </div>
      </div>
    </Section>
  );
}
