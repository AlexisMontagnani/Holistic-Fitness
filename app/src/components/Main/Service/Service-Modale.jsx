"use client";
import { CloseMenuLogo } from '../../../site/logo';
export default function ServiceModale({openModale, handleClick, serviceSelected}) {
  return (
    <div className='fixed top-0 left-0 z-40 h-lvh w-full bg-primary transition-all duration-100'>
      <CloseMenuLogo  size={30} color={"#000"} onClick={handleClick} expanded={openModale}/>
      <div>
        
      </div>
      <div>
        <h2>{serviceSelected.title}</h2>
        <p>{serviceSelected.description}</p>
      </div>
    </div>
  )
}
