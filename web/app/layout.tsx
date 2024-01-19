import Navbar from '../components/Navbar/Navbar';
import './global.css';

export const metadata = {
  title: 'Witek Rychlik | web dev',
  description:
    'Jestem pasjonatem web developmentu, gotowym przekształcić Twoj pomysły w wirtualną rzeczywistość. Razem możemy stworzyć projekt, który nie tylko zachwyci wizualnie, ale także dostarczy niezapomniane wrażenia użytkownikom. Daj mi szansę pomóc Ci w urzeczywistnieniu Twoich internetowych marzeń!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="main-font bg-slate-950 relative">
        <img src="/color-sharp.png" className="fixed top-0 z-0 left-0" />
        <img
          src="/color-sharp2.png"
          className="hidden sm:block fixed bottom-10 z-0 right-0"
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
