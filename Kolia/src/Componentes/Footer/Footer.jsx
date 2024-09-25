import Barra from "../Barra/Barra";
import Link from "../Link/Link";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black text-white to-[#252525] px-[250px] w-full h-[500px] place-content-center font-montserrat">
      <div className="flex justify-between">
        <div>
          <img className="mb-10" src="KoliaBranco.png" alt="Logo Kolia Branco"/>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="flex items-end gap-10 mb-10">
          <div className="flex flex-row gap-5">
            <img className="w-12 h-12" src="linkedin.png" alt="" />
            <img className="w-12 h-12" src="instagram.png" alt="" />
          </div>
          <ul className="textend">
            <li><Link to="/">Home</Link></li>
            <li><Link to="produtos">Produtos</Link></li>
            <li><Link to="sobre">Sobre Nós</Link></li>
            <li><Link to="contato">Contato</Link></li>
          </ul>
        </div>
      </div>
      <Barra tamanho="100%" />
      <p className="text-center mt-10">Lorem Ipsum is simply dummy 2024.</p>
    </footer>
  );
}

export default Footer;
