import Image from "next/image";
import IamgeFromAlexis from "../../../../public/images/Alexis.jpg";
const AlexisImage = () => {
  return (
    <Image
      src={IamgeFromAlexis}
      width={600}
      height={600}
      alt="Photo de Alexis Montagnani - Coach sportif"
      className="rounded-2xl"
    />
  );
};

export { AlexisImage };
