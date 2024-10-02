
import Questions from "../src/components/Main/FAQ/Questions";
export const metadata = {
  title: "F.A.Q - Alexis Montagnani",
  description: "Vous avez des questions concernant l'alimentation, le format des entraînements ou encore quel programme est fait pour vous ? Retrouvez ici les réponses aux questions les plus fréquentes."
}
export default function page() {
  return (
    <section>
      <Questions></Questions>
    </section>
  )
}