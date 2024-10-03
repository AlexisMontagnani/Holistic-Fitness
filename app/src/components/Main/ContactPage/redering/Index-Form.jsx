import SubmitButton from "../../../UX/SubmitButton";
export default function IndexForm() {
  return (
    <form action="" className="text-whiteContrast">
      <div>
        <label htmlFor="">Nom :</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Prénom :</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">E-mail :</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="">Tèl :</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Programme / Service :</label>
        <input type="select" />
      </div>
      <div>
        <label htmlFor="">Tèl :</label>
        <input type="text" />
      </div>

      <SubmitButton
        type="submit"
        text={"Envoyer"}
        ariaLabel={"Bouton pour soumettre le formulaire"}
      />
    </form>
  );
}
