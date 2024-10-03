export default function IndexCardExperience({experiences}) {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-xl text-primary font-bold mb-4 text-center">
        Mes diplômes et formations
      </h3>
      <div
        className="flex flex-col md:flex-row gap-8 md:flex-wrap md:justify-center"
      >
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col text-center border border-primary rounded-xl p-4 md:max-w-[45%] lg:w-[40%">
          <h4 className="mb-4 uppercase font-semibold text-primary">
            {experience.name}
          </h4>
          <p>
           {experience.description}
          </p>
        </div>
        ))}
     
      </div>
    </section>
  );
}
