import { useState } from "react"
//<input type="checkbox" className={`appearance-none h-[15px] border-2  border-[#07CD00] w-[15px] rounded-full ${state == true ? ' opacity-100' : ' bg-[#07CD00]'} `} checked={state} />

function IngredientesItems(param) {
    const {ing} =param
    const [state, setState] = useState(true)
    return(
        <li onClick={()=>{
            setState(!state)
        }} className={` flex items-center w-full ${ state == true ? ' opacity-100' : 'opacity-70'}`}>
        
            
            <p className=" mb-1 w-[80%] text-xl">{`${ing.cantidad} ${ing.unidad} ${ing.ingrediente}`}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#08AF5F" className={`size-6  ${state ? 'hidden' : ''}`} >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z " />
            </svg>

            


           


        </li> 
    )
}

export default IngredientesItems