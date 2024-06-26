import Navbar from "./Navbar";

function Header() {
    return (
        
        <header className="flex justify-around w-full my-6 items-center">
            <img  src="Logo.png" alt="" />
            <Navbar/>
            <a className="border-2 py-1 px-4 rounded-full border-black font-texto font-medium" href="#contato">Contatar</a>
        </header>
    );
}

export default Header;