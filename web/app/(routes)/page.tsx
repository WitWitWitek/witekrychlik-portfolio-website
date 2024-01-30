import { Metadata } from 'next';
import Hero from '../../components/Hero/Hero';
import { MetadataEnum } from '../../constants';

export const metadata: Metadata = {
  title: `${MetadataEnum.title} | ${MetadataEnum.subtitle}`,
  description: MetadataEnum.desciption,
  keywords: MetadataEnum.keywords,
  metadataBase: new URL('https://witekrychlik.com.pl'),
  openGraph: {
    title: `${MetadataEnum.title} | ${MetadataEnum.subtitle}`,
    description: MetadataEnum.desciption,
    images: '/opengraph-image.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function Index() {
  return (
    <>
      <Hero />
    </>
  );
}
