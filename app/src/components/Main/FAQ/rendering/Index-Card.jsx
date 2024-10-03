import { ArrowRightIcon } from "../../../UI/Icons";

export default function IndexCard({ question, handleClick, open }) {
  return (
    <div className={`p-4 flex gap-4 items-start`}>
      <div className={`${open ? "rotate-90" : "rotate-0"} transition-all duration-200 flex`}>
        <ArrowRightIcon size={25} handleClick={handleClick} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="uppercase text-justify cursor-pointer" onClick={handleClick}>
          {question.question}
        </h2>

        <p
          className={`font-light text-justify text-sm transition-all duration-300 ease-in-out ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {question.response}
        </p>
      </div>
    </div>

  );
}
