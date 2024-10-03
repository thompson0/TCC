import Botao from "../Botao/Botao";

export default function SecitonContato(){
    return(
        <section className="bg-gradient-to-b from-black text-white to-[#252525] mx-[250px] flex flex-col justify-center place-items-center rounded-2xl h-[400px] my-32 gap-y-20 p-5 text-center place-content-center">
            <h2 className="text-5xl font-bold">Entre em contato para fazer a diferença no seu negócio!</h2>
            <Botao children="Entre em Contato" to="/contato" cor="#E76B38"/>
        </section>
    )
}