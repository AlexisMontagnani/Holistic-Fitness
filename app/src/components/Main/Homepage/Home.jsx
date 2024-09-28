import MDHomeProfile from "./MD-Home-profile";
import SDHomeProfile from "./SD-Home-profile";
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
