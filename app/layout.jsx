import { Barlow } from "next/font/google";
import "./globals.css";
import FooterBar from "./src/components/Footer/FooterBar";
import NavigationBar from "./src/components/Header/Navigation/NavigationBar";

const barlow = Barlow({ subsets: ["latin"], weight: ["200", "300", "400", "600", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${barlow.className}`}>
        <header>
          <NavigationBar />
        </header>
        <main>{children}</main>
        <footer>
          <FooterBar />
        </footer>
      </body>
    </html>
  );
}
