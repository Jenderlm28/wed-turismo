import logo from '../../public/cabeza.png'

function Cabezera() {
    
    return(
        <header className=' w-full h-20 px-8 flex justify-between gap-3 items-center border-b-2'>
            

            <img src={logo} className=' h-full m-auto'/>
            
        
        </header>
    )

}

export default Cabezera