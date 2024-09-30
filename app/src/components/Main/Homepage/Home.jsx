import MDHomeProfile from "./Home-profile-MaxDevice";
import SDHomeProfile from "./Home-profile-SmallDivice";
export default function Home() {
  return (
    <section>
      {/* SD => Small Device */}
      <SDHomeProfile />

      {/* MD => Small Device */}
      <MDHomeProfile />
    </section>
  );
}
