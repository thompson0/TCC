import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-between px-[250px] h-24 items-center border-b-2 border-[#DEDEDE]">
            <NavLink className="h-full w-1/4 flex items-center" to="/"><img src="KoliaPretoELaranja.png" alt="" className="w-3/4 " /></NavLink>
            <Navbar/>
        </header>
    );
}

export default Header;