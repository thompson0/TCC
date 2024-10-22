import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-between px-[250px] h-24 items-center border-b-2 border-[#DEDEDE]">
            <NavLink to="/"><img src="KoliaPreto.png" alt="" /></NavLink>
            <Navbar/>
        </header>
    );
}

export default Header;