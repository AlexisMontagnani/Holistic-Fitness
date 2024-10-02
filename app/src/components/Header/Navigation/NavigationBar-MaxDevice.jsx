"use client";
import { HolisticFitnessLogo } from "../../../site/logo";
import NavigationBarClassicMenu from "./NavigationBar-MaxDevice-ClassicMenu";
export default function NavigationBar() {


  return (
    <>
      <nav className="hidden lg:flex gap-2 justify-between flex-col items-center p-8 mb-8">
        <HolisticFitnessLogo width={70} height={70} />
        <NavigationBarClassicMenu />
      </nav>
    </>
  );
}
