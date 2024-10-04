import { AlexisImage } from '../../../UI/Images'
export default function IndexPresentationImageWithStyle() {
  return (
    <div className="hidden sm:flex sm:relative w-[50%] lg:w-[40%] rounded-xl p-10 lg:p-0 xl:p-10">
    <div className="absolute h-3/4 w-2/6 top-0 left-0 lg:-top-10 lg:-left-10 xl:-top-0 -z-10 xl:-left-0 bg-primary opacity-30 rounded-xl"></div>
    <div className="absolute h-2/5 w-3/4 bottom-3 left-20 lg:-bottom-10 lg:left-28 xl:bottom-0 z-0 xl:left-20 bg-primary opacity-40 rounded-xl"></div>
    <AlexisImage />
  </div>
  )
}
