import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "../../utilis/Axios"
import noimage from "/noimage.webp"

function Topnav(){
const [qurey , setqurey]=   useState("")
const [search , setsearch] = useState([])
console.log(search)

const getsearches= async ()=>{
  
try {
    const response = await axios(`/search/multi?query=${qurey}`)
    setsearch(response.data.results )
} catch (error) {
    console.log(error)
}
}

useEffect(()=>{
    getsearches()
},[qurey])







    return(
        <>
        <div className="w-full h-[10vh] relative flex justify-start items-center ml-[20%]">
        <i className="ri-search-line text-3xl text-zinc-400"></i>
        <input onChange={(e)=>setqurey(e.target.value)} value={qurey} type="text" className="w-[50%] mx-10 p-5 text-xl outline-none border-none text-zinc-200 bg-transparent" placeholder="search anything" />   
        {qurey.length>0 &&  <i onClick={()=>setqurey("")} className="ri-close-line text-3xl text-zinc-400"></i>   } 
       

          <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded">
            {search.map((s , i)=>{
              return  <Link key={i} className="hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold  w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
                <img className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg" src={s.backdrop_path || s.profile_path || s.poster_path? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path || s.poster_path}`:noimage}alt="" />
                <span>{s.name || s.original_name || s.title || s.original_title}</span>
                </Link>  
            })}
            
             
            </div> 
        
        </div></>
    )
}


export default Topnav