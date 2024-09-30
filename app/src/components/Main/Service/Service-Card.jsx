import NewButton from "../../UX/NewButton";
export default function ServiceCard({service}) {
  return (
    <div className="border border-primary p-6 rounded-2xl w-full sm:max-w-80 flex flex-col">
      <h1 className="font-bold text-center text-xl mb-8">{service.title}</h1>

      <p className="mb-6">
        <span className="font-bold">Catégorie :</span> {service.category}
      </p>

      <div className="flex flex-col gap-4 mb-8 text-justify">
        {service.objectives.map((objective, index) => (
          <p className="font-light" key={index}>
            <span className="font-semibold">{objective.name} :</span> {objective.description}
          </p>
        ))}
      </div>

      <div className="mt-auto text-end">
        <NewButton text={"En savoir plus"} ariaLabel={"Bouton pour en savoir plus"} href={"/"} width={"w-40"} />
      </div>
    </div>
  );
}