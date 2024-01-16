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
      <body className="main-font">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
