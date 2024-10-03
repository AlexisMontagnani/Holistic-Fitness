import MDHomeProfile from "./Index-profile-MaxDevice";
import SDHomeProfile from "./Index-profile-SmallDivice";
export default function Index() {
  return (
    <section className="mb-10">
      {/* SD => Small Device */}
      <SDHomeProfile />

      {/* MD => Max Device */}
      <MDHomeProfile />
    </section>
  );
}
