import { CohereClient } from "cohere-ai";
import { formato } from "./formato.js";


const cohere = new CohereClient({
  token: "HGf5CAjjhnIjGzPqkjigng6bU6EEMxa1BNFFnkh8", // This is your trial API key
});



export const consulta = async (req, res) => {
   try {
    
      const {texto} = req.body
      const response = await cohere.chat({
        
        message:  `dame una receta que cumpla con lo siguiente ${texto} ${formato} `
    
      });
      const respuesta = JSON.parse(response.text)
      res.json(respuesta)

   } catch (error) {
      console.log('algo no salio bien')
      console.log(error)
   }
};



