import Link from 'next/link';
import { CloseMenuLogo, FacebookLogo, HolisticFitnessLogoBlack, InstagramLogo } from "../../../UI/Icons";
export default function NavigationBarSmallDeviceLateralMenu({activeMenu, handleClickMenu, navigationLinks}) {
  return (
    <div
    className={`fixed right-0 top-0 z-50 flex flex-col p-4 justify-between bg-primary text-blackContrast w-[50%] sm:w-[30%] h-lvh transition-transform duration-200 ease-in-out ${
      activeMenu ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="flex items-center justify-between">
      <HolisticFitnessLogoBlack width={50} height={50} />
      <CloseMenuLogo
        size={40}
        onClick={handleClickMenu}
        expanded={activeMenu}
      />
    </div>
    <ul className="flex flex-col gap-4">
      {navigationLinks.map((link, index) => (
        <li key={index} className="p-2 text-xl">
          <Link href={link.url} aria-label={link.aria}>{link.name}</Link>
        </li>
      ))}
    </ul>

    <div className="flex flex-col gap-2">
      <FacebookLogo width={30} height={30} />
      <InstagramLogo width={30} height={30} />
    </div>
  </div>
  )
}
