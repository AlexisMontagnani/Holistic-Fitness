"use client";
import { useState } from "react";
import NavigationBarSmallDevice from '../rendering/NavigationBar-SmallDevice';
export default function NavigationBarSmallDeviceLogic() {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <NavigationBarSmallDevice handleClickMenu={handleClickMenu} activeMenu={activeMenu} />
  )
}
