import axios from 'axios';
export const request = axios.create({
      baseURL:`${import.meta.env.VITE_API_URL}`,
      headers:{
            'Accept': 'application/json'
      }
})
console.log(import.meta.env.VITE_API_URL);