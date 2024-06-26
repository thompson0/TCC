function Navbar() {
  return (
    <>
      <nav className="flex items-center">
        <ul className="flex gap-10">
          <li><a className="font-texto font-medium" href="#home">Home</a></li>
          <li><a className="font-texto font-medium" href="#software">Software</a></li>
          <li><a className="font-texto font-medium" href="#solucao">Soluções</a></li>
          <li><a className="font-texto font-medium" href="#sobre">Sobre</a></li>
          <li><a className="font-texto font-medium" href="#contato">Contato</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
