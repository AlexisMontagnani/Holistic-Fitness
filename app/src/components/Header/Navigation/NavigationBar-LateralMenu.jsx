import React from 'react'
import { BurgerMenuLogo, CloseMenuLogo, FacebookLogo, HolisticFitnessLogo, HolisticFitnessLogoBlack, InstagramLogo } from "../../../site/logo";
import Link from 'next/link';
export default function NavigationBarLateralMenu({activeMenu, handleClickMenu, navigationLinks}) {
  return (
    <div
    className={`lg:hidden fixed right-0 top-0 z-50 flex flex-col p-4 justify-between bg-primary text-blackContrast w-[60%] h-lvh transition-transform duration-200 ease-in-out ${
      activeMenu ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="flex items-center justify-between">
      <HolisticFitnessLogoBlack width={100} height={100} />
      <CloseMenuLogo
        size={40}
        onClick={handleClickMenu}
        expanded={activeMenu}
      />
    </div>
    <ul className="flex flex-col gap-4 font-semibold">
      {navigationLinks.map((link, index) => (
        <li key={index} className="p-2">
          <Link href={link.url}>{link.name}</Link>
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
