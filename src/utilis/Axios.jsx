import axios from "axios"


const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3" ,
    headers: {
        accept: 'application/json',
        Authorization: 'PX70to6TSbwo'
      }
})


export default instance
