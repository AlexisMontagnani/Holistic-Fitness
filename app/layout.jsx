import { Barlow } from "next/font/google";
import "./globals.css";
import FooterBar from "./src/components/Footer/FooterBar";
import NavigationBarMaxDevice from "./src/components/Header/Navigation/NavigationBar-MaxDevice";
import NavigationBarSmallDevice from "./src/components/Header/Navigation/NavigationBar-SmallDevice";

const barlow = Barlow({ subsets: ["latin"], weight: ["200", "300", "400", "600", "700"] });
export const metadata = {
  title: "Alexis Montagnani - Coach sportif",
  description: "Apprenez à vous entraîner comme vos héros et devenez-en un. Je suis Alexis Montagnani coach sportif diplômé et passionné. Je vous accompagne dans votre transformation et vous promez des résultats à la hauteur de vos attentes",}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${barlow.className}`}>
        <header>
          <NavigationBarSmallDevice />
          <NavigationBarMaxDevice />
        </header>
        <main>{children}</main>
        <footer>
          <FooterBar />
        </footer>
      </body>
    </html>
  );
}
