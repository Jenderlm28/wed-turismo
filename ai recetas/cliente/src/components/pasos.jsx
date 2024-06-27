import PasoItems from "./itemPasos"

function Pasos(param) {
    const {pasos} = param

    return(
        <section className=" col-span-3" >
            <h2 className=" text-3xl mb-4 ">Pasos</h2>
            <ul className=" pr-8 pl-0">       
               { pasos.length > 0 ? 
                (pasos.map((paso, i)=>{
                    return <PasoItems i={i} paso={paso} />
                })) : ("nada")
               } 
            </ul>
        </section>
    )
}

export default Pasos