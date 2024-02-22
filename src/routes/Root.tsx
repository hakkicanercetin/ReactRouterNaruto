import { Outlet } from "react-router-dom";
import { MyNavbar } from "../components/layouts/Navbar";

export function RootLayout(){
    return(
       <>
       <div className="hero container">
        <MyNavbar/>
        <Outlet/>
       </div>
       </>
    )
}