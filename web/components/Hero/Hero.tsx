import { Button, Section, SocialMediaLink } from '@witekrychlik/ui-components';
import Image from 'next/image';

export default function Hero() {
  return (
    <Section className="bg-slate-950 flex flex-col-reverse justify-evenly md:flex-row gap-x-40 gap-y-2 relative overflow-hidden">
      <img src="/color-sharp.png" className="absolute top-0 z-0 left-0" />
      <img
        src="/color-sharp2.png"
        className="hidden sm:block absolute bottom-10 z-0 right-0"
      />
      <div className="h-full lg:max-w-2xl flex flex-col justify-center gap-2 md:gap-4 text-white z-[1]">
        <div className="text-4xl md:text-5xl lg:text-6xl flex flex-col gap-2 md:gap-4">
          <p>Cześć! 👋</p>
          <div>
            Jestem{' '}
            <div className="font-bold text-linear-gradient break-keep lg:inline">
              Witold Rychlik
            </div>
          </div>
          <div className="flex items-center gap-5 text-[18px] sm:text-[20px] w-[92%]">
            <div className="grow h-[1px] linear-gradient" />
            <span className="italic">Web developer</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 w-[92%] text-xl">
          <p className="hidden sm:block text-justify">
            Jestem pasjonatem web developmentu, gotowym przekształcić Twoje
            pomysły w wirtualną rzeczywistość. Daj mi szansę pomóc Ci w
            urzeczywistnieniu Twoich internetowych marzeń!
          </p>
          <div className="flex flex-wrap md:flex-nowrap w-full gap-2 md:gap-4">
            <Button
              variant="default"
              className="linear-gradient font-bold tracking-wider"
            >
              Formularz kontaktowy
            </Button>
            <Button variant="secondary" className="font-bold tracking-wider">
              Technologie
            </Button>
          </div>
        </div>
        <div className="hidden sm:flex flex-col gap-2 md:gap-4 text-xl">
          <p>Sprawdź:</p>
          <div className="flex w-full gap-2 md:gap-4">
            <SocialMediaLink
              target="https://github.com/WitWitWitek"
              icon="github"
            ></SocialMediaLink>
            <SocialMediaLink
              target="https://www.linkedin.com/in/witold-rychlik-86b579195/"
              icon="linkedin"
            ></SocialMediaLink>
          </div>
        </div>
      </div>
      <div className="h-full flex justify-center md:justify-end items-center md:grow z-[1]">
        <div className="relative aspect-square w-[250px] sm:w-[200px] md:min-w-32 md:w-[60%] overflow-hidden rounded-md glow">
          <Image src="/logo.svg" alt="Logo strony witekrychlick.com.pl" fill />
        </div>
      </div>
    </Section>
  );
}
