"use client";
import { HolisticFitnessLogoBlackAndYellow } from "../../../UI/Icons";

import NavigationBarClassicMenu from "./NavigationBar-MaxDevice-ClassicMenu";
export default function NavigationBarBarMaxDevice() {


  return (
    <>
      <nav className="hidden lg:flex gap-2 justify-between flex-col items-center p-8 mb-8">
        <HolisticFitnessLogoBlackAndYellow width={70} height={70} />
        <NavigationBarClassicMenu />
      </nav>
    </>
  );
}
