import BackgroundBlur from "../../../UI/BackgroundBlur";
import TitleAndSubTitleOrtherPage from "../../../UI/TitleAndSubTitle-OrtherPage";

import ServiceCard from "./Index-Card";
import ServiceModale from "./Index-Modale";

export default function Index({
  handleClick,
  openModale,
  serviceSelected,
  servicesArray,
}) {
  return (
    <section className="p-4 xl:w-4/5 mx-auto mb-10">
      <TitleAndSubTitleOrtherPage
        title={"Les services proposés"}
        subTitle={
          "Pour plus d'informations concernant les services proposés, contactez moi via la rubrique contact."
        }
      />

      <section className="flex flex-col gap-6 sm:flex-row flex-wrap justify-center">
        {servicesArray.map((service, index) => (
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
