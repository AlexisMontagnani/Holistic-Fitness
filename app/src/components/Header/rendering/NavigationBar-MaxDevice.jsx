"use client";
import { HolisticFitnessLogo } from "../../UI/Icons";
import NavigationBarClassicMenu from "./NavigationBar-MaxDevice-ClassicMenu";
export default function NavigationBarMaxDevice() {


  return (
    <>
      <nav className="hidden lg:flex gap-2 justify-between flex-col items-center p-8 mb-8">
        <HolisticFitnessLogo width={70} height={70} />
        <NavigationBarClassicMenu />
      </nav>
    </>
  );
}
