"use client";
export default function NewButtonModale({
  text,
  ariaLabel,
  handleClick,
  dataId,
  width,
}) {
  return (
    <button
      onClick={handleClick}
      aria-label={ariaLabel}
      data-id={dataId}
      className={`px-4 py-2 font-medium text-sm rounded-xl bg-whiteContrast text-blackContrast hover:bg-primary hover:text-whiteContrast transition-all duration-100 ${width}`}
    >
      {text}
    </button>
  );
}
