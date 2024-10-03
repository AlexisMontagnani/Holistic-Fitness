import googleComments from "../../../../../data/googleComments";
import CommentGoogleCard from "./Index-Card";
export default function Index() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Ils m&apos;`ont fait confiance et ont donné leur avis:</h2>

      <div className="flex flex-col gap-4 lg:flex-row">
        
      {googleComments.map((commentary) => (
        <CommentGoogleCard
          key={commentary.id}
          card={commentary}
        />
      ))}
      </div>
    </div>
  );
}
