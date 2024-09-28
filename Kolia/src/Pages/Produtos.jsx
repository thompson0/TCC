import Botao from "../Componentes/Botao/Botao";
import Subtitulo from "../Componentes/Subitulo/Subtitulo";

function Produtos() {
    return (
        <>
            <Subtitulo nome="Produtos" />
            <section className="flex py-40 justify-between px-[250px]">
                <div className="w-2/5 font-bold flex flex-col gap-y-10 ">
                    <h2 className="text-5xl font-black">Kolia Check</h2>
                    <p className="text-lg font-semibold">Transforme a gestão do seu hotel com automação inteligente, aumentando eficiência e proporcionando uma experiência única para seus hóspedes.</p>
                    <Botao children="Saiba Mais" to="produtos" />
                </div>
                <img className="w-[550px] h-auto bottom-12 right-40" src="KoliaPretoQualidade.png" alt="" />
            </section>
            <h2 className="text-center font-thin text-6xl text-[#5B5B5B] opacity-75 mb-60 mt-20">Em breve novos produtos...</h2>
        </>
    );
}

export default Produtos;