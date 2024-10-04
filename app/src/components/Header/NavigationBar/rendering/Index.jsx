import NavigationBarSmallDeviceLogic from "../logic/NavigationBar-SmallDevice-Logic";
import NavigationBarMaxDevice from "./NavigationBar-MaxDevice";

export default function index() {
  return (
    <header>
      <NavigationBarSmallDeviceLogic />
      <NavigationBarMaxDevice />
    </header>
  );
}
