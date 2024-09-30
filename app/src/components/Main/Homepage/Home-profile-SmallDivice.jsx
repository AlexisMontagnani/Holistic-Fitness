import TitleAndSubTitleHomePage from "../../UI/TitleAndSubTitle-HomePage";
import NewButton from "../../UX/NewButton";
import CommentGoogle from "./GoogleComments/GoogleComments";
import PresentationCard from "./Presentation/PresentationCard";
// SD => Small Device
export default function HomePprofileSmallDevice() {
  return (
    <div className="lg:hidden flex flex-col gap-12 px-4 pb-4 md:w-3/4 sm:m-auto">
      <section className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row">
          <div className="w-40 h-40 m-auto  rounded-full bo bg-profile bg-cover shadow-inner-2xl shadow-blackContrast mb-8 sm:w-60 sm:h-60"></div>
          <div  className="sm:w-2/4">

          <TitleAndSubTitleHomePage title={" Alexis Montagnani - Coach sportif"} subTitle={"Apprenez à vous entraîner comme vos héros et devenez-en un."}/>
            <NewButton
              href={"/"}
              ariaLabel={"Test"}
              text={"Mes services"}
              width={"w-40"}
            />
        </div>
          </div>
        <PresentationCard />
      </section>

      <section>
        <CommentGoogle />
      </section>
    </div>
  );
}
