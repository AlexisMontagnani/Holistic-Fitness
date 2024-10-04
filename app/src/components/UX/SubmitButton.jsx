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
      className={`px-4 py-2 font-medium text-sm rounded-xl bg-whiteContrast border border-blackContrast text-blackContrast hover:bg-primary hover:border-primary hover:text-whiteContrast hover:shadow-lg transition-all duration-100 w-40`}
    >
      {text}
    </button>
    // <button
    //   onClick={handleClick}
    //   aria-label={ariaLabel}
    //   className={`px-4 py-2 font-medium text-sm rounded-xl bg-whiteContrast text-blackContrast hover:bg-primary hover:text-whiteContrast hover:shadow-lg transition-all duration-100`}
    // >
    //   {text}
    // </button>
  );
}