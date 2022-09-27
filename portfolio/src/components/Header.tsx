import elipseURL from '../assets/elipse.svg'
function Header(){
 
  return(
    
    <>
    <div className="flex w-full align-middle justify-center relative">
      <img src={elipseURL} className="absolute -z-10"/>
    </div>
    <div className='flex w-full justify-center pt-4'>
        <p className='text-zinc-50 font-display text-xl'>Bruno Petito</p>
        
    </div>
    
    </>
  )
}
export default Header