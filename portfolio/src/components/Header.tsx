import React from 'react';
import elipse from '../assets/elipse.svg'


function Header(){
 
  return(
    
    <>
    <div className="flex w-full align-center justify-center  absolute bg-blue-50">
      <div className='elipse  fixed'></div>
    </div>
    <div className='flex w-full justify-center pt-4'>
        <p className='text-zinc-50 font-display text-xl'>Bruno Petito</p>
    </div>
    </>
  )
}
export default Header