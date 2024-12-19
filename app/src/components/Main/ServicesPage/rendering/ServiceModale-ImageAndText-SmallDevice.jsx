import React from "react";

import NewButton from "../../../UX/NewButton";

import Image from "next/image";

export default function ServiceModaleImageAndTextSmallDevice({
  serviceSelected,
}) {
  return (
    <div className="md:hidden flex flex-col h-full">
      <figure className="relative w-full h-auto overflow-hidden p-4">
        <div className="relative w-full h-96">
          <Image
            src={serviceSelected.img}
            alt="Image liée au coaching de Alexis Montagnani"
            objectFit="cover"
            layout="fill"
            objectPosition="top"
          />
        </div>
      </figure>
      <div className="flex flex-col justify-around w-full p-4 gap-4">
        <h2 className="text-xl font-bold uppercase mb-2">
          {serviceSelected.title}
        </h2>
        <div>
          <p className="text-justify text-lg">{serviceSelected.details}</p>
        </div>
        <div>
          <NewButton
            href={"/contact"}
            text={"Contactez moi"}
            ariaLabel={"Bouton de contact"}
          />
        </div>
      </div>
    </div>
  );
}
