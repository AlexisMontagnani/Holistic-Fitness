import googleComments from "../../../../data/googleComments";
import CommentGoogleCard from "./GoogleComment-Card";
export default function GoogleComments() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Ils m&apos;`ont fait confiance et ont donné leur avis:</h2>

      <div className="flex flex-col gap-4 lg:flex-row">
        
      {googleComments.map((comment) => (
        <CommentGoogleCard
          key={comment.id}
          firstname={comment.firstname}
          lastname={comment.lastname}
          commentary={comment.commentary}
          visitDate={comment.visitDate}
        />
      ))}
      </div>
    </div>
  );
}
