"use client";
import { navigationLinks } from "@/app/src/site/navigationLinks";
import { useState } from "react";
import { BurgerMenuLogo, HolisticFitnessLogo } from "../../../site/logo";
import NavigationBarLateralMenu from './NavigationBar-SmallDevice-LateralMenu';
export default function NavigationBarSmallDevice() {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <>
    
    <nav className="flex justify-between lg:hidden p-4 mb-10">
    <HolisticFitnessLogo width={50} height={50} />

    <BurgerMenuLogo
      size={40}
      color={"#FFF"}
      onClick={handleClickMenu}
      expanded={activeMenu}
    />

    <NavigationBarLateralMenu
      activeMenu={activeMenu}
      handleClickMenu={handleClickMenu}
      navigationLinks={navigationLinks}
    />
  </nav>

  <div
    className={`lg:hidden ${
      activeMenu ? "block" : "hidden"
    } h-full fixed top-0 left-0 w-full z-40 backdrop-blur`}
  ></div>
    </>
  )
}
