import { useState } from "react"

function PasoItems(param) {
    const {paso, i} = param
    const [state, setState ] = useState(false)
    return(
    <li onClick={()=>{
        setState(!state)
    }} className={` mb-4 ${ !state ? ' opacity-100' : ' opacity-70'}`}>
        <h3 className=" text-2xl">{`Paso ${i + 1}`}</h3>
        <p className=" text-xl">{paso}</p>
    </li>)
}

export default PasoItems