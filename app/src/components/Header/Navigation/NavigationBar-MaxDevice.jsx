"use client";
import { HolisticFitnessLogo } from "../../../site/logo";
import NavigationBarClassicMenu from "./NavigationBar-MaxDevice-ClassicMenu";
export default function NavigationBar() {


  return (
    <>
      <nav className="hidden lg:flex justify-between flex-col items-center p-4 mb-8">
        <HolisticFitnessLogo width={80} height={80} />
        <NavigationBarClassicMenu />
      </nav>
    </>
  );
}
