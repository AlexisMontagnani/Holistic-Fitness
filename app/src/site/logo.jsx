import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import facebookLogo from "../../../public/icons/facebook.svg";
import holisticFitnessLogoBlack from "../../../public/icons/holistic-fitness-black.svg";
import holisticFitnessLogo from "../../../public/icons/holistic-fitness.svg";
import instagramLogo from "../../../public/icons/instagram.svg";
import { homeLink } from "../site/navigationLinks";
import socialLinks from "./socialLinks";
const HolisticFitnessLogo = ({ width, height }) => {
  return (
    <Link href={homeLink.url}  aria-label={homeLink.aria}>
      <Image
        src={holisticFitnessLogo}
        alt="Logo Alexis Montagnani - Holistic Fitness"
        width={width}
        height={height}
        
      ></Image>
    </Link>
  );
};
const HolisticFitnessLogoBlack = ({ width, height }) => {
  return (
    <Link href={homeLink.url}  aria-label={homeLink.aria}>
      <Image
        src={holisticFitnessLogoBlack}
        alt="Logo Alexis Montagnani - Holistic Fitness"
        width={width}
        height={height}
       
      ></Image>
    </Link>
  );
};

const FacebookLogo = ({ width, height }) => {
  return (
    <Link
      href={socialLinks.facebook.link}
      aria-label={socialLinks.facebook.aria}
      target="_blank"
      className="p-2"
    >
      <Image
        src={facebookLogo}
        alt={socialLinks.facebook.alt}
        width={width}
        height={height}
      ></Image>
    </Link>
  );
};

const InstagramLogo = ({ width, height }) => {
  return (
    <Link
      href={socialLinks.instagram.link}
      aria-label={socialLinks.instagram.aria}
      target="_blank"
      className="p-2"
    >
      <Image
        src={instagramLogo}
        alt={socialLinks.instagram.alt}
        width={width}
        height={height}
      ></Image>
    </Link>
  );
};

const BurgerMenuLogo = ({ size, color, onClick, expanded }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Ouvrir le menu"
      aria-expanded={expanded}
      className="lg:hidden"
    >
      <IoMenu size={size} color={color} />
    </button>
  );
};

const CloseMenuLogo = ({ size, color, onClick, expanded }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Fermer le menu"
      aria-expanded={expanded}
    >
      <IoClose size={size} color={color} />
    </button>
  );
};

const StarIcon = ({ size, color }) => {
  return <FaStar size={size} color={color} />;
};
export {
  BurgerMenuLogo,
  CloseMenuLogo,
  FacebookLogo,
  HolisticFitnessLogo,
  HolisticFitnessLogoBlack,
  InstagramLogo,
  StarIcon
};

