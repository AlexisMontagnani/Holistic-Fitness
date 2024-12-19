import Image from "next/image";
import ImageFromAlexis from "../../../../public/assets/images/home.jpeg";
import AboutImage from "../../../../public/assets/images/who.jpeg";
const AlexisImage = () => {
  return (
    <Image
      src={ImageFromAlexis}
      width={600}
      height={600}
      alt="Photo de Alexis Montagnani - Coach sportif"
      className="rounded-2xl"
    />
  );
};

const AboutAlexisImage = () => {
  return (
    <Image
      src={AboutImage}
      width={600}
      height={600}
      alt="Photo de Alexis Montagnani - Coach sportif"
      className="rounded-2xl"
    />
  );
};

export { AlexisImage, AboutAlexisImage };
