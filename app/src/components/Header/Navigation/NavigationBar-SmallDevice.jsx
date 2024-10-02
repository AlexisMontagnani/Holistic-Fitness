"use client";
import { navigationLinks } from "@/app/src/site/navigationLinks";
import { useState } from "react";
import { BurgerMenuLogo, HolisticFitnessLogo } from "../../../site/logo";
import BackgroundBlur from "../../UI/BackgroundBlur";
import NavigationBarLateralMenu from "./NavigationBar-SmallDevice-LateralMenu";
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

      <BackgroundBlur open={activeMenu} />
    </>
  );
}
