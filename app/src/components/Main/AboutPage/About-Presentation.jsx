import { AlexisImage } from "../../../site/Image";

export default function AboutPresentation({specialty}) {
  return (
    <section className="flex w-full sm:flex-col-reverse lg:flex-row gap-20 items-center mb-10">
    <div className="flex flex-col gap-6 lg:w-[60%]">
      <h3 className="text-xl text-primary font-bold">
        Au dela d'un métier, une passion.
      </h3>

      <p className="text-justify">
        Titulaire d'un Master STAPS spécialité Entraînement, Performance et
        Intervention ainsi que du CAPEPS je suis coach et enseignant au
        STAPS. J'ai également pratiqué des sports de combat et techniques
        d'auto-défense (boxe française, krav maga).
      </p>

      <p className="text-justify">
        Au cours de mes études j'ai suivi des cours de préparation mentale
        incluant des méthodes de relaxation de visualisation et de
        méditation inspirés des techniques de pleine de conscience
        (mindfulness). J’ai également pu réaliser une étude approfondie
        visant à démontrer l’impact positif de l’activité sportive sur le
        stress et la dépression.
      </p>

      <p className="text-justify">
        De plus j'accorde aussi de l'importance à la qualité de
        l'alimentation. La nutrition a en effet une place prépondérante dans
        la pratique sportive et de façon plus globale, elle participe au
        bien-être et à l'équilibre personnel.
      </p>
   

      <div className="flex flex-wrap gap-2 md:gap-4">
        {specialty.map((specialty, index) => (
   <p key={index} className="px-4 py-2 border border-primary rounded-full text-xs">
   {specialty}
 </p>
        ))}
     
       
      </div>
    </div>
    <div className="hidden sm:flex w-[50%] lg:w-[40%] rounded-xl">
      <AlexisImage></AlexisImage>
    </div>
  </section>
  )
}
