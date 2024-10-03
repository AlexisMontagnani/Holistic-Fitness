"use client";
export default function SubmitButton({
  text,
  ariaLabel,
  handleClick,
  
}) {
  return (
    <button
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`px-4 py-2 font-medium text-sm rounded-xl bg-whiteContrast text-blackContrast hover:bg-primary hover:text-whiteContrast transition-all duration-100`}
    >
      {text}
    </button>
  );
}