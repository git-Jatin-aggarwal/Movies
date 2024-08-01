import axios from "axios"


const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3" ,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJlZDk4N2Q0MTFlYTliM2U3MmU5ZGQzNjQ2MTBjZiIsIm5iZiI6MTcyMjQ5MjAzNS40MjQzMTYsInN1YiI6IjY2YWIyMGU4OWM1MWE0ODdkYmExMzBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d4r-2ikxpqzuaZ9tuDx-fUXTUcXlvlSPX70to6TSbwo'
      }
})


export default instance