import { useState } from 'react'
import logo from '../../public/robot-minimal.png'
import cara from '../../public/cabeza.png'
import { verRespuesta } from '../api'

function PedirReceta({funciones=()=>{}}) {
    const [activo, setActivo] = useState(true)
    
    const pedida = async(texto) =>{
        funciones( await verRespuesta({texto: texto}))
    }

    var estiloInput = 'relative m-auto bg-[#0c0000] border-2 w-[80vh] h-[55vh] pr-[23vh] pl-8 rounded-xl'

    return(
        
        
        <section className={` absolute - w-full h-[100vh] content-center`}  >
            {activo ? 
            <form onSubmit={ev => {
                ev.preventDefault()
                pedida(ev.target.promt.value)
                setActivo(!activo)
            }} className={estiloInput}>
                <img src={logo} className=" absolute w-[70vh] h-[80vh] right-[-250px] top-[-100px]" />
                <h2 className=" text-center text-2xl font-bold my-2"> Describele al checf box tu receta</h2>
                <p className=' border-2 rounded-xl p-2'> por favor tome en cuenta que entre mas informacion y especifica sea mejores seran los resultados</p>
               <textarea name='promt' className=" bg-[#0c0000]  border-2 rounded-2xl p-4 w-full h-1/2 mt-4"></textarea>
                <button className=" flex border-2 bg-[#08AF5F] border-[#08AF5F] p-2 rounded-3xl m-auto" type='submit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                    generar 
                    </button>
            </form>:
            <div className={`${estiloInput}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[100%] animate-spin relative left-[15%]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <img src={cara} className=' absolute top-[20vh] right-[35vh] h-1/4'/>
            </div>}
        </section>

        
    )
}

export default PedirReceta