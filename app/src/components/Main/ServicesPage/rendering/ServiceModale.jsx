import { CloseMenuLogo } from "../../../UI/Icons";
import NewButton from "../../../UX/NewButton";

export default function ServiceModale({
  openModale,
  handleClick,
  serviceSelected,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 text-blackContrast ">
      <div className="relative flex flex-col gap-8 w-full h-lvh sm:w-[80%] sm:h-[80%] sm:border sm:border-blackContrast sm:rounded-xl bg-[#fffae2]  p-4 lg:p-8 2xl:p-12 overflow-y-auto max-h-full">
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

        <div className="w-full mb-2">
          <iframe
            className="w-full h-80"
            src={`https://www.youtube.com/embed/${serviceSelected.media}?si=XV6WAcD85oJNSeyl`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h2 className="text-xl font-bold uppercase mb-2">
            {serviceSelected.title}
          </h2>
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
    // <div className="fixed inset-0 flex items-center justify-center z-40">
    //   <div className="relative flex flex-col gap-8 w-full h-lvh sm:w-[80%] sm:h-[80%] sm:border sm:border-primary sm:rounded-xl bg-[#100901] text-white  p-4 lg:p-8 2xl:p-12 overflow-y-auto max-h-full">
    //     <div className="flex justify-between">
    //       <h1 className="font-bold uppercase text-2xl text-center">
    //         Pour en savoir plus
    //       </h1>
    //       <CloseMenuLogo
    //         size={40}
    //         color={"#FFF"}
    //         onClick={handleClick}
    //         expanded={openModale}
    //       />
    //     </div>

    //     <div className="w-full mb-2">
    //       <iframe
    //         className="w-full h-80"
    //         src={`https://www.youtube.com/embed/${serviceSelected.media}?si=XV6WAcD85oJNSeyl`}
    //         title="YouTube video player"
    //         frameborder="0"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //         referrerpolicy="strict-origin-when-cross-origin"
    //         allowfullscreen
    //       ></iframe>
    //     </div>
    //     <div>
    //       <h2 className="text-xl font-bold uppercase mb-2">
    //         {serviceSelected.title}
    //       </h2>
    //       <p className="text-justify text-lg">{serviceSelected.details}</p>
    //     </div>
    //     <div>
    //       <NewButton
    //         href={"/contact"}
    //         text={"Contactez moi"}
    //         ariaLabel={"Bouton de contact"}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
