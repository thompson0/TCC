import Barra from "../Barra/Barra";
import Link from "../Link/Link";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black text-white to-[#252525] px-[250px] w-full h-[500px] place-content-center font-montserrat">
      <div className=" w-full flex justify-between">
        <div className="w-2/4">
          <img className="mb-5 w-6/12" src="KoliaBrancoELaranja.png" alt="Logo Kolia Branco"/>
          <p className="mb-10 font-medium text-xl max-xl:w-3/4">
            Conectando seu Hotel, ao futuro
          </p>
        </div>
        <div className="flex w-3/5 justify-end items-end gap-10 mb-10 max-xl:gap-20">
          <div className="flex flex-row gap-5">
            <img className="w-12 h-12 max-lg:hidden" src="linkedin.png" alt="" />
            <img className="w-12 h-12 max-lg:hidden" src="instagram.png" alt="" />
          </div>
          <ul className="textend max-xl:text-nowrap">
            <li><Link to="/">Home</Link></li>
            <li><Link to="produtos">Produtos</Link></li>
            <li><Link to="sobre">Sobre Nós</Link></li>
            <li><Link to="contato">Contato</Link></li>
          </ul>
        </div>
      </div>
      <Barra tamanho="100%" />
      <p className="text-center text-base mt-10">Copyright © 2024 | Kolia Softwares.</p>
    </footer>
  );
}

export default Footer;
