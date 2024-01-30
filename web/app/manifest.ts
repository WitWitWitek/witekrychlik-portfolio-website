import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Witek Rychlik | web dev',
    short_name: 'Witek Rychlik',
    description:
      'Jestem pasjonatem web developmentu, gotowym przekształcić Twoj pomysły w wirtualną rzeczywistość. Razem możemy stworzyć projekt, który nie tylko zachwyci wizualnie, ale także dostarczy niezapomniane wrażenia użytkownikom. Daj mi szansę pomóc Ci w urzeczywistnieniu Twoich internetowych marzeń!',
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
