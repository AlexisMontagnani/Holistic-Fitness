import React from 'react'
import { navigationLinks } from "@/app/src/site/navigationLinks";
import Link from "next/link";
export default function NavigationBarClassicMenu() {
  return (
    <div className="hidden lg:flex">
    <ul className="flex gap-6 font-semibold">
      {navigationLinks.map((link, index) => (
        <li key={index} className="p-4">
          <Link href={link.url}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </div>
  )
}
