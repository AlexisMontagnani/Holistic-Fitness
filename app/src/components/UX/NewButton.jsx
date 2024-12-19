import Link from 'next/link'
export default function NewButton({text, ariaLabel, href, width}) {
  return (
    <button aria-label={ariaLabel} >
      <Link href={href} className={`px-4 py-2 font-medium text-sm rounded-xl bg-whiteContrast border border-blackContrast text-blackContrast hover:bg-primary hover:border-primary hover:text-whiteContrast hover:shadow-lg transition-all duration-100`}> 
      {text}
      </Link>
    </button>
  )
}
