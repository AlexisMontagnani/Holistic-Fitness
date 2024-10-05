import { DiplomaIcon } from "../../../UI/Icons";
export default function CardExperience({ experiences }) {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="flex text-xl relative text-primary font-bold mb-4 m-auto">
        <DiplomaIcon size={70} color={"#fabc5b"} className={"absolute -top-8 -left-10 opacity-30 -rotate-6"}/>
        Mes diplômes et formations
      </h3>
   

      <div className="flex flex-col md:flex-row gap-8 md:flex-wrap md:justify-center">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className=" relative flex flex-col text-center border border-primary rounded-xl p-4 md:max-w-[45%] lg:w-[40%"
          >
            <h4 className="mb-4 uppercase font-semibold text-primary">
              {experience.name}
            </h4>

            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
