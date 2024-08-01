import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";

function Home(){
   document.title = "SCSDB | Homepage"

    return (
        <>
        <Sidenav/>
        <div className="w-[80%]">
            <Topnav/>
        </div>
        </>
    )
}

export default Home