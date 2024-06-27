import axios from 'axios'

export const verRespuesta = texto => axios.post('http://localhost:4000/', texto)