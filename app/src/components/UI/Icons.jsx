import Image from "next/image";
import Link from "next/link";

import { CgArrowRightO } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { GiDiploma, GiMuscleUp } from "react-icons/gi";
import { IoClose, IoMenu } from "react-icons/io5";
import holisticFitnessLogoBlack from "../../../../public/assets/icons/holistic-fitness-black.svg";
import holisticFitnessLogoBlackAndYellow from "../../../../public/assets/icons/holistic-fitness-BlackAndYellow.svg";
import holisticFitnessLogo from "../../../../public/assets/icons/holistic-fitness.svg";
import instagramLogo from "../../../../public/assets/icons/instagram.svg";
import { homeLink } from "../../constants/navigationLinks";
import socialLinks from "../../constants/socialLinks";
import facebookLogo from "/public/assets/icons/facebook.svg";

const HolisticFitnessLogo = ({ width, height }) => {
  return (
    <Link href={homeLink.url} aria-label={homeLink.aria}>
      <Image
        src={holisticFitnessLogo}
        alt="Logo Alexis Montagnani - Holistic Fitness"
        width={width}
        height={height}
      ></Image>
    </Link>
  );
};

const HolisticFitnessLogoBlackAndYellow = ({ width, height }) => {
  return (
    <Link href={homeLink.url} aria-label={homeLink.aria}>
      <Image
        src={holisticFitnessLogoBlackAndYellow}
        alt="Logo Alexis Montagnani - Holistic Fitness"
        width={width}
        height={height}
      ></Image>
    </Link>
  );
};

const HolisticFitnessLogoBlack = ({ width, height }) => {
  return (
    <Link href={homeLink.url} aria-label={homeLink.aria}>
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

const MuscleIcon = ({ size, color }) => {
  return <GiMuscleUp size={size} color={color} />;
};
const DiplomaIcon = ({ size, color, className }) => {
  return <GiDiploma size={size} color={color} className={className} />;
};

const ArrowRightIcon = ({ size, color, handleClick }) => {
  return (
    <button onClick={handleClick}>
      <CgArrowRightO size={size} color={color} />
    </button>
  );
};

export {
  ArrowRightIcon,
  BurgerMenuLogo,
  CloseMenuLogo,
  DiplomaIcon,
  FacebookLogo,
  HolisticFitnessLogo,
  HolisticFitnessLogoBlack,
  HolisticFitnessLogoBlackAndYellow,
  InstagramLogo,
  MuscleIcon,
  StarIcon
};

