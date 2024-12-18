import Barra from "../Componentes/Barra/Barra";
import CardEquipe from "../Componentes/CardEquipe/CardEquipe";
import Subtitulo from "../Componentes/Subitulo/Subtitulo";
import SectionContato from "../Componentes/SectionContato/SectionContato"
import Botao from "../Componentes/Botao/Botao";


function Sobre() {
    return (

        <>
            <Subtitulo nome="Sobre Nós" />
            <section className="mt-32 h-[550px] px-[250px] gap-y-6 flex flex-col max-xl:text-center max-xl:items-center max-lg:mb-[500px]">
                <p className="text-laranja font-bold">Sobre Nós</p>
                <h3 className="text-4xl font-bold">Kolia, a melhor Startup no ramo Hoteleiro </h3>
                <Barra tamanho="100%" />
                <div className="flex w-full justify-between gap-x-14 max-xl:flex-col max-xl:items-center max-xl:text-center max-xl:gap-y-10">
                    <img className="w-3/6 h-auto max-xl:w-2/4" src="KoliaPretoELaranja.png" alt="" />
                    <div className="w-3/6 h-auto flex flex-col gap-y-7 max-xl:w-full">
                        <h3 className="text-5xl font-bold max-xl:text-4xl">Criando soluções que fazem a diferença</h3>
                        <p className="text-lg font-medium">Desde o início, a Kolia sempre priorizou a criação de soluções personalizadas para hotéis, buscando entender suas necessidades específicas.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 max-xl:text-center max-xl:items-center max-xl:w-full">
                    <p className="text-lg font-medium ">A ideia da Kolia surgiu durante um projeto de TCC na FIAP School, uma instituição de ensino médio técnico. Seis alunos perceberam, por meio de contatos e experiências anteriores, qu e o setor de hotelaria enfrentava diversos desafios que poderiam ser resolvidos com o uso da tecnologia.</p>
                    <p className="text-lg font-medium ">Com o desenvolvimento do Kolia Control, nosso primeiro produto, buscamos resolver o problema da alta demanda no check-in, proporcionando um melhor controle de dados. Continuamos a explorar novos desafios para desenvolver soluções inovadoras.</p>
                </div>
            </section>
            <section className="bg-gradient-to-b from-black to-[#252525] px-[250px] py-20 mt-24 max-xl:mt-96 max-lg:mt-[250px]">
                <h2 className="text-center text-4xl font-bold text-white">Time principal da <em className="not-italic text-laranja">Kolia</em></h2>
                <div className="grid grid-cols-3 gap-10 py-20 max-lg:grid-cols-1">
                    <CardEquipe img="thompson.jpg" h2="Gabriel Thompson" p="Back-End" />
                    <CardEquipe img="guilherme.jpg" h2="Guilherme Sena" p="Design" />
                    <CardEquipe img="joaovitor.jpg" h2="João Vitor" p="Negócios" />
                    <CardEquipe img="josekaneto.jpg" h2="José Kaneto" p="Front-End" />
                    <CardEquipe img="nicolas.jpg" h2="Nícolas Baradel" p="Marketing" />
                    <CardEquipe img="thomas.jpg" h2="Thomas Soares" p="Back-End" />
                </div>
            </section>
            <SectionContato />
        </>
    );
}

export default Sobre;