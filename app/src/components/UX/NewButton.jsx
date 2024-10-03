import Link from 'next/link'
export default function NewButton({text, ariaLabel, href, width}) {
  return (
    <button aria-label={ariaLabel} type='submit' className={`px-4 py-2 font-medium text-sm rounded-xl bg-whiteContrast text-blackContrast hover:bg-primary hover:text-whiteContrast transition-all duration-100`}>
      <Link href={href} > 
      {text}
      </Link>
    </button>
  )
}
