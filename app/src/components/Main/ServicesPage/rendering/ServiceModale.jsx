import { CloseMenuLogo } from "../../../UI/Icons";
import ServiceModaleImageAndTextLargeDevice from "./ServiceModale-ImageAndText-LargeDevice";
import ServiceModaleImageAndTextSmallDevice from "./ServiceModale-ImageAndText-SmallDevice";
export default function ServiceModale({
  openModale,
  handleClick,
  serviceSelected,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 text-blackContrast ">
      <div className="relative flex flex-col gap-2 w-full h-screen sm:w-3/4 sm:h-3/4 sm:border sm:border-blackContrast sm:rounded-xl bg-[#fffae2]  p-4 lg:p-8 2xl:p-12 overflow-y-auto max-h-full">
        <div className="flex justify-between">
          <h1 className="font-bold uppercase text-2xl text-center">
            Pour en savoir plus
          </h1>
          <CloseMenuLogo
            size={40}
            color={"#000"}
            onClick={handleClick}
            expanded={openModale}
          />
        </div>

        <ServiceModaleImageAndTextSmallDevice
          serviceSelected={serviceSelected}
        />
        <ServiceModaleImageAndTextLargeDevice
          serviceSelected={serviceSelected}
        />
      </div>
    </div>
  );
}
