import googleComments from "../../../../../data/googleComments";
import CommentaryGoogleCard from "./CommentaryGoogleCard";

export default function Index() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Ce qu&apos;ils pensent :</h2>

      <div className="flex flex-col gap-4 lg:flex-row">
        
      {googleComments.map((commentary) => (
        <CommentaryGoogleCard
          key={commentary.id}
          card={commentary}
        />
      ))}
      </div>
    </div>
  );
}
