import services from "../../../data/services";
import TitleAndSubTitleOrtherPage from "../../UI/TitleAndSubTitle-OrtherPage";
import ServiceCard from "./Service-Card";
export default function Services() {
  return (
    <section className="p-4 xl:w-4/5 m-auto">
      <TitleAndSubTitleOrtherPage
        title={"Les services proposés"}
        subTitle={
          "Pour plus d'informations concernant les services proposés, contactez moi via la rubrique contact."
        }
      />

      <section className="flex flex-col gap-6 sm:flex-row flex-wrap justify-center">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </section>
    </section>
  );
}
