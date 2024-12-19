import React from "react";

import NewButton from "../../../UX/NewButton";

import Image from "next/image";

export default function ServiceModaleImageAndTextLargeDevice({
  serviceSelected,
}) {
  return (
    <div className="hidden md:flex h-full">
      <figure className="relative w-2/4 h-auto overflow-hidden p-4">
        <div className="relative w-full h-full">
          <Image
            src={serviceSelected.img}
            alt="Image liée au coaching de Alexis Montagnani"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </figure>
      <div className="flex flex-col justify-around w-2/4 p-4 gap-4">
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
