import PresentationImageWithStyle from "./Presentation-ImageWithStyle";

export default function Presentation({ specialty }) {
  return (
    <section className="flex w-full sm:flex-col-reverse lg:flex-row lg:gap-40 gap-10 items-center mb-10">
      <div className="flex flex-col gap-6 lg:w-[60%] xl:p-4">
        <h3 className="text-xl text-primary font-bold">Mon approche</h3>

        <p className="text-justify">
          Depuis l’obtention de mon diplôme, j’ai continué de me former afin de
          pouvoir élargir mon champ d’action et proposer à mes coachés un
          accompagnement global sur différents points cruciaux : la nutrition,
          l’entrainement, la récupération, et le mindset.
        </p>

        <p className="text-justify">
          J’ai à cœur que chaque personne travaillant avec moi puisse faire
          l’expérience d’un corps en pleine santé capable de tout.
        </p>

        <p className="text-justify">
          Que votre objectif soit d’avoir une meilleure composition corporelle
          (perte de masse graisseuse, prise de masse musculaire), de gagner en
          force, en explosivité, en endurance cardio-vasculaire, d’apprendre des
          mouvements de callisthénie, en bref d’améliorer votre fitness de
          manière holistique, ma méthode est alors celle qu’il vous faut !
        </p>
        <p className="text-justify">
          Vous pouvez travailler avec moi directement au sein du club Basic Fit
          d’Artigues- près-Bordeaux, mais aussi en ligne, via un suivi
          personnalisé ou un programme d’entrainement.
        </p>

        <div className="flex flex-wrap gap-2 md:gap-4">
          {specialty.map((specialty, index) => (
            <p
              key={index}
              className="px-4 py-2 border border-primary rounded-full text-xs"
            >
              {specialty}
            </p>
          ))}
        </div>
      </div>
      <PresentationImageWithStyle />
    </section>
  );
}
