import { navigationLinks } from "@/app/src/constants/navigationLinks";
import Link from "next/link";
export default function NavigationBarMaxDeviceClassicMenu() {
  return (
    <div className="flex">
    <ul className="flex gap-6 font-semibold">
      {navigationLinks.map((link, index) => (
        <li key={index} className="p-4">
          <Link href={link.url} aria-label={link.aria} className='hover:text-primary transition-all duration-100'>{link.name}</Link>
        </li>
      ))}
    </ul>
  </div>
  )
}
