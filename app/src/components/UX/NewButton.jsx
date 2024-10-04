import Link from 'next/link'
export default function NewButton({text, ariaLabel, href, width}) {
  return (
    // <button aria-label={ariaLabel} type='submit' className={`px-4 py-2 font-medium text-sm rounded-xl bg-whiteContrast text-blackContrast hover:bg-primary hover:text-whiteContrast hover:shadow-lg transition-all duration-100`}>
    //   <Link href={href} > 
    //   {text}
    //   </Link>
    // </button>
    <button aria-label={ariaLabel} type='submit' className={`px-4 py-2 font-medium text-sm rounded-xl bg-whiteContrast border border-blackContrast text-blackContrast hover:bg-primary hover:border-primary hover:text-whiteContrast hover:shadow-lg transition-all duration-100`}>
      <Link href={href} > 
      {text}
      </Link>
    </button>
  )
}
