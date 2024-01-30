import { MetadataRoute } from 'next';
import { MetadataEnum } from '../constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${MetadataEnum.title} | ${MetadataEnum.subtitle}`,
    short_name: MetadataEnum.title,
    description: MetadataEnum.desciption,
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#ff5e69',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
