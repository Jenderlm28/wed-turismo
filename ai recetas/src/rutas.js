import { Router } from "express";
import { consulta } from "./app.js";


const routes = Router()

routes.post('/', consulta)


//routes.post('/imagen', crearImagen)

export default routes