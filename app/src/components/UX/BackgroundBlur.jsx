
export default function BackgroundBlur({open}) {
  return (
    <div
    className={`${
      open ? "block" : "hidden"
    } h-full fixed top-0 left-0 w-full z-30 backdrop-blur`}
  ></div>
  )
}
