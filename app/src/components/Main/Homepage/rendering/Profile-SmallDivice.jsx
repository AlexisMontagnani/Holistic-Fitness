import TitleAndSubTitleHomePage from "../../../UI/TitleAndSubTitle-HomePage";
import NewButton from "../../../UX/NewButton";
import CommentGoogle from "./GoogleComments/Index";
import PresentationCard from "./Profile-PresentationCard";

// SD => Small Device
export default function ProfileSmallDevice() {
  return (
    <div className="lg:hidden flex flex-col gap-12 px-4 pb-4 sm:w-[90%] md:w-3/4 sm:m-auto">
      <section className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row">
          <div className="w-60 h-60 m-auto  rounded-xl bo bg-profile bg-cover mb-8 sm:w-60 sm:h-60" aria-hidden="true"></div>
          <div  className="sm:w-2/4">

          <TitleAndSubTitleHomePage title={" Alexis Montagnani - Coach Sportif"} subTitle={"Une approche holistique du corps, de la santé et de la performance"}/>
            <NewButton
              href={"/services"}
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
