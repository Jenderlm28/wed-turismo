import IngredientesItems from "./ItemIngrediente"

function Ingredientes(param) {
    const {ingredientes} = param

    return(
        <section className=" col-span-2">
            <h2 className=" mb-4 text-3xl">ingredientes</h2>
            <ul>
               { ingredientes.length > 0 ? 
                (ingredientes.map((ing)=>{
                    return <IngredientesItems ing={ing}/>
                })) : ("nada")
               } 
            </ul>
        </section>
    )
}

export default Ingredientes