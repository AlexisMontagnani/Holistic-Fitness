import { StarIcon } from "../../../../UI/Icons";

export default function CommentaryGoogleCard({ card }) {
  return (
    // <div className="flex flex-col gap-4 bg-[#fffdf6] p-4 text-blackContrast w-full rounded-xl">
    //   <div className="flex flex-col gap-2">
    //     <h2 className="font-semibold">
    //       {card.firstname} {card.lastname}
    //     </h2>
    //     <p className="font-light text-sm">Visite: {card.visitDate}</p>
    //     <div className="flex gap-2">

    //       {/* Implement the StarIcon component within the card to display dynamic ratings. */}
    //       {Array.from({ length: card.stars }, (_, index) => (
    //         <StarIcon key={index} size={20} color={"#fabc5b"} />
    //       ))}
    //     </div>
    //   </div>

    //   <p className="text-justify text-sm">{card.commentary}</p>
    // </div>
    <div className="flex flex-col gap-4 bg-[#fffae2] p-4 text-blackContrast w-full rounded-xl">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">
          {card.firstname} {card.lastname}
        </h2>
        <p className="font-light text-sm">Visite: {card.visitDate}</p>
        <div className="flex gap-2">

          {/* Implement the StarIcon component within the card to display dynamic ratings. */}
          {Array.from({ length: card.stars }, (_, index) => (
            <StarIcon key={index} size={20} color={"#fabc5b"} />
          ))}
        </div>
      </div>

      <p className="text-justify text-sm">{card.commentary}</p>
    </div>
  );
}
