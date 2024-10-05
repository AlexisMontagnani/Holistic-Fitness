import NewButton from "../../../UX/NewButton";
export default function ProfilePresentationCard() {
  return (
    <div className="flex border border-primary rounded-2xl lg:w-2/4 p-6 flex-col gap-6">
      <h3 className="font-bold text-center text-lg">Qui suis-je ?</h3>
      <p className="text-justify text-sm font-light">
        Je suis Alexis, coach passionné et dévoué, et mon objectif est
        d&apos;aider les gens à atteindre leur plein potentiel. À travers des
        séances personnalisées, j&apos;accompagne chaque personne sur son
        chemin, qu&apos;il s&apos;agisse de développement personnel, de réussite
        professionnelle ou de bien-être global. Mon approche est basée sur
        l&apos;écoute active, la bienveillance et des méthodes adaptées à
        chacun. J&apos;aime voir mes clients dépasser leurs limites, transformer
        leurs défis en opportunités et renforcer leur confiance en eux.
        Ensemble, nous construisons un avenir plus épanouissant et aligné avec
        leurs aspirations.
      </p>
      <div className="text-end">
        <NewButton
          text={"En savoir plus"}
          ariaLabel={"En savoir plus sur Alexis"}
          href={"/about"}
          width={"w-40"}
        />
      </div>
    </div>
  );
}
