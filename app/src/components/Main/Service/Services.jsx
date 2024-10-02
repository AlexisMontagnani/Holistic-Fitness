"use client";
import { useState } from "react";
import services from "../../../data/services";
import TitleAndSubTitleOrtherPage from "../../UI/TitleAndSubTitle-OrtherPage";
import BackgroundBlur from "../../UX/BackgroundBlur";
import ServiceCard from "./Service-Card";
import ServiceModale from "./Service-Modale";
export default function Services() {
  const [openModale, setOpenModale] = useState(false);
  const [serviceSelected, setServiceSelected] = useState(null);
  const handleClick = (e) => {
    const buttonServiceClicked = e.target.getAttribute("data-id");
    setServiceSelected(
      services.find((service) => service.id === parseInt(buttonServiceClicked))
    );
    setOpenModale(!openModale);
  };
  return (
    <section className="p-4 xl:w-4/5 mx-auto mb-10">
      <TitleAndSubTitleOrtherPage
        title={"Les services proposés"}
        subTitle={
          "Pour plus d'informations concernant les services proposés, contactez moi via la rubrique contact."
        }
      />

      <section className="flex flex-col gap-6 sm:flex-row flex-wrap justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            handleClick={handleClick}
          />
        ))}
        {openModale && (
          <ServiceModale
            openModale={openModale}
            handleClick={handleClick}
            serviceSelected={serviceSelected}
          />
        )}
      </section>
     <BackgroundBlur open={openModale} />
    </section>
  );
}
