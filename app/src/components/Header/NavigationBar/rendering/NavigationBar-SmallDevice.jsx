"use client";
import { navigationLinks } from "@/app/src/constants/navigationLinks";
import BackgroundBlur from "../../../UI/BackgroundBlur";
import { BurgerMenuLogo, HolisticFitnessLogoBlackAndYellow } from "../../../UI/Icons";
import NavigationBarLateralMenu from "./NavigationBar-SmallDevice-LateralMenu";
export default function NavigationBarSmallDevice({handleClickMenu, activeMenu}) {

  return (
    <>
      <nav className="flex justify-between lg:hidden p-4 mb-10">
        {/* <HolisticFitnessLogo width={50} height={50} /> */}
        <HolisticFitnessLogoBlackAndYellow width={50} height={50} />

        {/* <BurgerMenuLogo
          size={40}
          color={"#FFF"}
          onClick={handleClickMenu}
          expanded={activeMenu}
        /> */}
        <BurgerMenuLogo
          size={40}
          color={"#000"}
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
