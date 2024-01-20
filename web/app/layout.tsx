import Navbar from '../components/Navbar/Navbar';
import './global.css';
import { Chakra_Petch } from 'next/font/google';

export const metadata = {
  title: 'Witek Rychlik | web dev',
  description:
    'Jestem pasjonatem web developmentu, gotowym przekształcić Twoj pomysły w wirtualną rzeczywistość. Razem możemy stworzyć projekt, który nie tylko zachwyci wizualnie, ale także dostarczy niezapomniane wrażenia użytkownikom. Daj mi szansę pomóc Ci w urzeczywistnieniu Twoich internetowych marzeń!',
};

const font = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-family',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.variable} font-sans bg-slate-950 relative`}>
        <img src="/color-sharp.png" className="fixed top-0 z-[-1] left-0" />
        <img
          src="/color-sharp2.png"
          className="hidden sm:block fixed bottom-10 z-[-1] right-0"
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
