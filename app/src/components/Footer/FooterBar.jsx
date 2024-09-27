import Link from "next/link"
import adress from "../../data/adress"
import { FacebookLogo, InstagramLogo } from "../../site/logo"
export default function FooterBar() {
  return (
    <div className="bg-primary p-4 text-blackContrast">
      <div className=" flex-col m-auto mb-4 sm:w-3/4">

      <h2 className="font-semibold lg:text-center lg:mb-8">
        Retrouvez moi ici:
      </h2>
      <div className="flex gap-2 items-center justify-between lg:flex-row-reverse lg:justify-center lg:gap-10 lg:mb-8">


        <div>
          <p>{adress.structure}</p>
          <p>{adress.street}</p>
          <p>{adress.postalCode} {adress.city}</p>
        </div>

      <div className="lg:flex">
      <FacebookLogo width={30} height={30} />
      <InstagramLogo width={30} height={30}  />
      </div>
      </div>

    </div>

    <p className="text-center text-sm">© Alexis Montagnani - Site créé par <Link href="https://romain-hernandez.com/" target="_blank">Roms</Link></p>
      </div>
  )
}
