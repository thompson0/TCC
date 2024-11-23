import Formulario from "../Componentes/Formulario/Formulario";
import Subtitulo from "../Componentes/Subitulo/Subtitulo"

function Contato() {
    return (
        <section>
            <Subtitulo nome="Entre em Contato" />
            <div className="px-[250px]  flex justify-between py-28 items-center max-xl:flex-col max-xl:gap-y-20">
                <div className="w-full flex flex-col gap-y-10">
                <h2 className="text-5xl w-5/6 font-semibold place-items-end max-xl:w-full max-xl:text-center">Está com alguma dúvida? </h2>
                <h2 className="text-5xl w-5/6 font-semibold place-items-end max-xl:w-full max-xl:text-center">Entre em contato e fale com a equipe <em className="text-laranja not-italic">Kolia</em></h2>
                </div>
                <Formulario/>
            </div>
        </section>

    );
}

export default Contato;