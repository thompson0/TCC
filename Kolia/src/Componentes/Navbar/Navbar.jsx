import Link from "../Link/Link";

function Navbar() {
    return ( 
        <nav className="flex items-center"> 
            <ul className="flex gap-10 items-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="produtos">Produtos</Link></li>
                <li><Link to="sobre">Sobre</Link></li>
                <li><Link to="contato">Contato</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;