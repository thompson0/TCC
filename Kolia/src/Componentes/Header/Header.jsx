import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-between my-5 mx-[250px]">
            <h1 className=""><img src="KoliaPreto.png" alt="" /></h1>
            <Navbar/>
        </header>
    );
}

export default Header;