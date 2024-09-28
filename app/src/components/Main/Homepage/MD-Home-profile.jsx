import CommentGoogle from "./GoogleComments/CommentGoogle";
import Presentation from "./Presentation/Presentation";
// MD => Max Device
export default function MDHomePprofile() {
  return (
    <div className="hidden lg:flex flex-col p-4 w-4/5 2xl:w-3/5 m-auto">
      <div className="flex flex-col gap-10 justify-center">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl uppercase mb-2 title-gradient text-center">
          Alexis Montagnani - Coach sportif
        </h1>
        <h2 className="mb-4 text-center">
          Apprenez à vous entraîner comme vos héros et devenez-en un.
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-10 mb-10 justify-center">
        <div className="rounded-full bg-profile bg-cover shadow-inner-2xl shadow-blackContrast mb-6 w-80 h-80"></div>
        <Presentation />
      </div>
      <div>
      <CommentGoogle />
      </div>
      </div>
    </div>
  );
}
