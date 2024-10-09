import Botao from "../Componentes/Botao/Botao";
import Subtitulo from "../Componentes/Subitulo/Subtitulo";

function Produtos() {
    return (
        <>
            <Subtitulo nome="Produtos" />
            <section className="flex py-40 justify-between px-[250px] max-xl:flex-col-reverse max-xl:items-center max-xl:gap-y-10 *: ">
                <div className="w-2/5 font-bold flex flex-col gap-y-10 max-xl:w-full max-xl:items-center max-xl:text-center ">
                    <h2 className="text-5xl font-black max-xl:hidden">Kolia Check</h2>
                    <p className="text-lg font-semibold">Transforme a gestão do seu hotel com automação inteligente, aumentando eficiência e proporcionando uma experiência única para seus hóspedes.</p>
                    <Botao children="Saiba Mais" to="/kcheck"cor="#E76B38" />
                </div>
                <img className="w-3/6 max-xl:w-5/6" src="KCheck.png" alt="" />
            </section>
            <h2 className="text-center font-medium text-6xl text-[#5B5B5B] opacity-75 mb-60 mt-20 max-xl:text-5xl">Em breve novos produtos...</h2>
        </>
    );
}

export default Produtos;