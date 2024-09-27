import Link from "next/link"
import adress from "../../data/adress"
import { FacebookLogo, InstagramLogo } from "../../site/logo"
export default function FooterBar() {
  return (
    <div className="bg-primary p-2 text-blackContrast">
      <div className=" flex items-center justify-around mb-4">

      <div className="flex flex-col gap-2">

      <h2 className="font-semibold">
        Retrouvez moi ici:
      </h2>

        <div>
          <p>{adress.structure}</p>
          <p>{adress.street}</p>
          <p>{adress.postalCode} {adress.city}</p>
        </div>
      </div>

      <div>
      <FacebookLogo width={30} height={30} />
      <InstagramLogo width={30} height={30}  />
      </div>
    </div>

    <p className="text-center text-sm">© Alexis Montagnani - Site créé par <Link href="https://romain-hernandez.com/" target="_blank">Roms</Link></p>
      </div>
  )
}
