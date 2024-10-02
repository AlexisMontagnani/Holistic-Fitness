import { ArrowRightIcon } from "../../../site/logo";

export default function QuestionCard({ question, handleClick, open }) {
  return (
    <div className="p-4 flex gap-4">
      <div>
        <ArrowRightIcon size={25} handleClick={handleClick} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="uppercase text-justify cursor-pointer" onClick={handleClick}>
          {question.question}
        </h2>

        {open && (
          <p className="font-light text-justify text-sm">
            {question.response}
          </p>
        )}
      </div>
    </div>

  );
}
