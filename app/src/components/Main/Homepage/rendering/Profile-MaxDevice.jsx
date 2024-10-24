import TitleAndSubTitleHomePage from "../../../UI/TitleAndSubTitle-HomePage";
import CommentGoogle from "./GoogleComments/Index";
import PresentationCard from "./Profile-PresentationCard";

// MD => Max Device
export default function ProfileMaxDevice() {
  return (
    <div className="hidden lg:flex flex-col p-4 w-4/5 m-auto gap-10 justify-center">
      <section className="flex flex-col gap-10">
        <TitleAndSubTitleHomePage title={" Alexis Montagnani - Coach Sportif"} subTitle={"Une approche holistique du corps, de la santé et de la performance"}/>
       
        <div className="flex flex-col sm:flex-row items-center gap-10 mb-10 justify-center">
          <div className="rounded-full bg-profile bg-cover shadow-inner-2xl shadow-blackContrast mb-6 w-80 h-80"></div>
          <PresentationCard />
        </div>
      </section>
        <section>
          <CommentGoogle />
        </section>
    </div>
  );
}
