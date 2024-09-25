import { NavLink } from "react-router-dom";

function Navbar() {
    return ( 
        <nav className="flex items-center"> 
            <ul className="flex gap-10 items-center">
                <li><NavLink className='font-montserrat text-2xl' to="/">Home</NavLink></li>
                <li><NavLink className='font-montserrat text-2xl' to="produtos">Produtos</NavLink></li>
                <li><NavLink className='font-montserrat text-2xl' to="sobre">Sobre</NavLink></li>
                <li><NavLink className='font-montserrat text-2xl' to="contato">Contato</NavLink></li>
            </ul>
        </nav>
     );
}

export default Navbar;