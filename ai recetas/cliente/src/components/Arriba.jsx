import { useFechs } from "../uses/useFechs"
import robot from '../../public/robot.jpeg'

//imagen !== '' ? imagen : ''

function Arriba(params) {
    const { texto } = params
    const { imagen } = useFechs({prompts: texto})

    return(
        <div className=" grid sm:grid-cols-1 md:grid-cols-5 gap-6 w-[90%] my-4 items-center m-auto">
            <img className=" w-full col-span-2 bg-slate-50 rounded-3xl" src={robot} alt="" />
            <h2 className=" w-full col-span-3 text-center p-3 text-4xl">{texto}</h2>
        </div>
        
        
    )
}
export default Arriba