import { useState } from 'react'
import Ingredientes from './components/ingredientes'
import './App.css'
import Pasos from './components/pasos'
import Arriba from './components/Arriba'
import PedirReceta from './components/pedirReceta'
import Cabezera from './components/cabezera'
import Nueva from './components/nueva'

function App() {
  const [respuesta, setRespuesta] = useState(null)

  return (
    <>
      <Cabezera/>
      {
        respuesta !== null ? (<>
          <Arriba texto={ respuesta.data.nombre }/>
          
          <main className=' grid sm:grid-cols-1  md:grid-cols-5 gap-6 w-[90%] m-auto'>
            <Ingredientes ingredientes={ respuesta.data.ingrediente !== undefined ? respuesta.data.ingrediente: respuesta.data.ingredientes} />
            <Pasos pasos={respuesta.data.pasos !== undefined ? respuesta.data.pasos : []}/>
            
          </main>
          <Nueva setValor={setRespuesta}/>
        </>) : 
        <PedirReceta funciones={setRespuesta}/>
      } 
    </>
  )
}

export default App
