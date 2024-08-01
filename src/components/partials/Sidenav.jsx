import { PiTelevisionSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
function Sidenav(){
    return(
        <>
           <div className="w-[20%] border-r-2 h-auto border-zinc-400 p-10 overflow-auto                 ">
               <h1 className="text-2xl text-white font-bold">
                  <i className="ri-tv-fill text-[#6556CD] mr-2 "></i><span>SCSDB</span>
                </h1>
                <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                    <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>
                    <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="ri-fire-fill"></i><span className="ml-2">
                    Trending</span></Link>
                    <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="ri-bard-fill"></i><span className="ml-2">Popular</span></Link>
                    <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="ri-movie-2-fill mr-2"></i>Movies</Link>
                    <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="ri-tv-2-fill mr-2"></i>TV Shows</Link>
                    <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="ri-team-fill mr-2"></i>People</Link>
                
                </nav>
                <hr className="border-none h-[1px] bg-zinc-400"/>

                <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                    <h1 className="text-white font-semibold text-xl mt-10 mb-5">Website Information</h1>
                    <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="ri-information-2-fill"></i><span className="ml-2">
                    About SCSDB</span></Link>
                    <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="ri-phone-fill"></i><span className="ml-2">Contact Us</span></Link>
                    
                
                </nav>
            </div>
                
                
        </>
    )
}

export default Sidenav