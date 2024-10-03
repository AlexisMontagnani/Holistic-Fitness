import IamgeFromAlexis from "@/public/Images/Alexis.jpg";
import Image from "next/image";
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
