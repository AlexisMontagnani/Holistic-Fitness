"use client";

import { useState } from "react";
import servicesArray from "../../../../data/services";
import Index from "../rendering/Index";

export default function IndexLogic() {
  const [openModale, setOpenModale] = useState(false);
  const [serviceSelected, setServiceSelected] = useState(null);
  const handleClick = (e) => {
    console.log("click");
    const buttonServiceClicked = e.target.getAttribute("data-id");
    setServiceSelected(
      servicesArray.find((service) => service.id === parseInt(buttonServiceClicked))
    );
    setOpenModale(!openModale);
  };
  return (
    <Index
      handleClick={handleClick}
      openModale={openModale}
      serviceSelected={serviceSelected}
      servicesArray={servicesArray}
    />
  );
}
