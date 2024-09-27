"use client";
import { navigationLinks } from "@/app/src/site/navigationLinks";
import { useState } from "react";
import { BurgerMenuLogo, HolisticFitnessLogo } from "../../../site/logo";
import NavigationBarClassicMenu from "./NavigationBar-ClassicMenu";
import NavigationBarLateralMenu from "./NavigationBar-LateralMenu";
export default function NavigationBar() {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <>
      <nav className="flex justify-between lg:flex-col lg:items-center p-2">
        <HolisticFitnessLogo width={100} height={100} />

        <BurgerMenuLogo
          size={40}
          color={"#FFF"}
          onClick={handleClickMenu}
          expanded={activeMenu}
        />

        {/* Lateral navigation bar (Small device) */}
        <NavigationBarLateralMenu
          activeMenu={activeMenu}
          handleClickMenu={handleClickMenu}
          navigationLinks={navigationLinks}
        />

        {/* Classic navigation bar (Desktop device) */}
        <NavigationBarClassicMenu />
      </nav>

      <div
        className={`lg:hidden ${
          activeMenu ? "block" : "hidden"
        } h-full fixed top-0 left-0 w-full z-40 backdrop-blur`}
      ></div>
    </>
  );
}
