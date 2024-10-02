import experiences from "../../../data/experiences";
import specialty from "../../../data/specialty";
import TitleAndSubTitleOrtherPage from "../../UI/TitleAndSubTitle-OrtherPage";
import AboutCardExperience from "./About-CardExperience";
import AboutPresentation from "./About-Presentation";
export default function About() {
  return (
    <div className="flex flex-col px-6 pb-6 sm:w-[90%] md:w-3/4 sm:mx-auto lg:w-4/5 2xl:w-3/5 m-auto justify-center mb-10">
      <TitleAndSubTitleOrtherPage
        title={"Alexis Montagnani"}
        subTitle={
          "Coach diplômé et passionné, je vous accompagne dans votre transformation physique et mentale."
        }
      />

      <AboutPresentation specialty={specialty}/>

      <AboutCardExperience experiences={experiences}/>
    </div>
  );
}
