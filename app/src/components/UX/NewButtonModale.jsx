"use client";
export default function NewButtonModale({
  text,
  ariaLabel,
  handleClick,
  dataId,
}) {
  return (
    <button
      onClick={handleClick}
      aria-label={ariaLabel}
      data-id={dataId}
      className={`px-4 py-2 font-medium text-sm rounded-xl border border-blackContrast bg-whiteContrast text-blackContrast hover:bg-primary hover:border-primary hover:text-whiteContrast hover:shadow-lg transition-all duration-100`}
    >
      {text}
    </button>
    // <button
    //   onClick={handleClick}
    //   aria-label={ariaLabel}
    //   data-id={dataId}
    //   className={`px-4 py-2 font-medium text-sm rounded-xl bg-whiteContrast text-blackContrast hover:bg-primary hover:text-whiteContrast hover:shadow-lg transition-all duration-100`}
    // >
    //   {text}
    // </button>
  );
}
