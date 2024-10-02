import MDHomeProfile from "./Home-profile-MaxDevice";
import SDHomeProfile from "./Home-profile-SmallDivice";
export default function Home() {
  return (
    <section className="mb-10">
      {/* SD => Small Device */}
      <SDHomeProfile />

      {/* MD => Small Device */}
      <MDHomeProfile />
    </section>
  );
}
