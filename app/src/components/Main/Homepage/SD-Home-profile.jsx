import NewButton from "../../UX/NewButton";
import CommentGoogle from "./GoogleComments/CommentGoogle";
import Presentation from "./Presentation/Presentation";
// SD => Small Device
export default function SMHomePprofile() {
  return (
    <div className="lg:hidden flex flex-col gap-12 p-8 sm:w-3/4 sm:m-auto">

      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-40 h-40 m-auto  rounded-full bo bg-profile bg-cover shadow-inner-2xl shadow-blackContrast mb-8 sm:w-60 sm:h-60"></div>
          <div className="sm:w-2/4">
            <h1 className="font-bold text-3xl uppercase mb-4 title-gradient">
              Alexis Montagnani - Coach sportif
            </h1>
            <h2 className="mb-6">
              Apprenez à vous entraîner comme vos héros et devenez-en un.
            </h2>
            <NewButton
              href={"/"}
              ariaLabel={"Test"}
              text={"Mes services"}
              width={"w-40"}
            />
          </div>
        </div>
        <Presentation />
      </div>

      <div>
      <CommentGoogle />

      </div>

    </div>
  );
}
