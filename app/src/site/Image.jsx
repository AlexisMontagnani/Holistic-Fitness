import Image from 'next/image';
import IamgeFromAlexis from "../../../public/Images/Alexis.jpg";
const AlexisImage = () => {
  return (
    <Image src={IamgeFromAlexis} width={250} height={250} alt="Photo de Alexis Montagnani - Coach sportif">

    </Image>
  )
}

export { AlexisImage };
