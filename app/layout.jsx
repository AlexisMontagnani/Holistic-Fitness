import { Barlow } from "next/font/google";
import "./globals.css";
import Footer from "./src/components/Footer/Index";
import Header from "./src/components/Header/rendering/index";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});
export const metadata = {
  title: "Alexis Montagnani - Coach sportif",
  description:
    "Apprenez à vous entraîner comme vos héros et devenez-en un. Je suis Alexis Montagnani coach sportif diplômé et passionné. Je vous accompagne dans votre transformation et vous promez des résultats à la hauteur de vos attentes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${barlow.className}`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
