import { StarIcon } from "../../../../UI/Icons";

export default function IndexCard({firstname, lastname, commentary, visitDate}) {
  return (
    <div className="flex flex-col gap-4 bg-[#fffdf6] p-4 text-blackContrast w-full rounded-xl">
        <div className="flex flex-col gap-2">

        <h2 className="font-semibold">{firstname} {lastname}</h2>
        <p className="font-light text-sm">Visite: {visitDate}</p>
        <div className="flex gap-3">
          {/* ajouter les etoiles dynamiques */}
          <StarIcon size={20} color={"#fabc5b"}/>
          <StarIcon size={20} color={"#fabc5b"}/>
          <StarIcon size={20} color={"#fabc5b"}/>
          <StarIcon size={20} color={"#fabc5b"}/>
          <StarIcon size={20} color={"#fabc5b"}/>
        </div>
        </div>

        <p className="text-justify text-sm">{commentary}</p>
    </div>
  )
}
