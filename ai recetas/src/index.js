import express from 'express'
import cors from 'cors'
import rutas from './rutas.js'
const app = express()

app.use(express.json())
app.use(cors())

app.use(rutas)

app.listen(4000, ()=> {
    console.log('conectado en el 4000')
})