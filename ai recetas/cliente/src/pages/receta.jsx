import { useEffect, useState } from 'react'
import { verRespuesta } from './api'
import Ingredientes from './components/ingredientes'
import './App.css'
import Pasos from './components/pasos'
import Arriba from './components/Arriba'


function App() {
  const [count, setCount] = useState()
  const [respuesta, setRespuesta] = useState(null)
  const [a, setA] = useState(null)



  const manejar = (e) =>{
    setCount(e.target.value)
  }

  const vista = async (r) => {
    const resul = await r
    setRespuesta(resul)
  }


  useEffect(()=>{

    setA(respuesta !== null ? JSON.parse(respuesta.data.respuesta) : null)

  }, [respuesta])

  useEffect(()=>{
    console.log(a)
  }, [a])

  return (
    <>
      
  
      {
        a !== null ? (<>
          <Arriba texto={ a.nombre }/>
          <main className=' flex w-[90%] m-auto'>
            
            <Pasos pasos={a.pasos !== undefined ? a.pasos : []}/>
            <Ingredientes ingredientes={ a.ingrediente !== undefined ? a.ingrediente: a.ingredientes} />
          </main>
        </>) : 
        ('nada')
      } 
    </>
  )
}