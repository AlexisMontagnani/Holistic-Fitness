import ProfileMaxDevice from "./Profile-MaxDevice";
import ProfileSmallDivice from "./Profile-SmallDivice";

export default function Index() {
  return (
    <section className="mb-10">
      {/* SD => Small Device */}
      <ProfileSmallDivice />

      {/* MD => Max Device */}
      <ProfileMaxDevice />
    </section>
  );
}
