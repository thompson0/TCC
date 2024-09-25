import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-between px-[250px] h-24 items-center border-b-2 boder-[#DEDEDE]">
            <h1 className=""><img src="KoliaPreto.png" alt="" /></h1>
            <Navbar/>
        </header>
    );
}

export default Header;