import NewButton from "../../../UX/NewButton";

export default function ProfilePresentationCard() {
  return (
    <div className="flex border border-primary rounded-2xl lg:w-2/4 p-6 flex-col gap-6">
      <h3 className="font-bold text-center text-lg">Qui suis-je ?</h3>
      <p className="text-justify text-sm font-light">
        Je suis Alexis, <strong>coach sportif</strong> et cela fait maintenant plus de 6 ans que
        j’aide mes clients à se sentir mieux dans leurs corps, bouger sans
        douleur et mieux performer. Tout a commencé il y a 10 ans, lorsque lassé
        par ma perception de mon propre corps et de mon mode de vie, je décide
        de passer la porte d’une salle pour la première fois. J’ai tout d’abord
        fait mes armes en musculation pour ensuite m’orienter vers la pratique
        de la callisthénie (musculation au poids du corps), puis de la course à
        pied. Mon entrainement personnel est orienté vers ces trois disciplines,
        cela me permet de développer un corps esthétique, fort et endurant. Je
        peux ainsi prendre part, sans contraintes, à toute activité dans ma vie
        de tous les jours. C’est l’ambition que j’ai pour celles et ceux que
        j’accompagne quotidiennement !
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
