import Barra from "../Componentes/Barra/Barra";
import CardEquipe from "../Componentes/CardEquipe/CardEquipe";
import Subtitulo from "../Componentes/Subitulo/Subtitulo";
import SectionContato from "../Componentes/SectionContato/SectionContato"
import Botao from "../Componentes/Botao/Botao";


function Sobre() {
    return ( 
        <main>
            <Subtitulo nome="Sobre Nós"/>
            <section className="my-20 h-[550px] px-[250px] gap-y-6 flex flex-col">
                <p className="text-laranja font-bold">Sobre Nós</p>
                <h3 className="text-4xl font-bold">Kolia, a melhor Startup no ramo Hoteleiro </h3>
                <Barra tamanho="100%"/>
                <div className="flex w-full justify-between">
                    <img className="w-2/6 h-auto"  src="KoliaPretoQualidade.png" alt="" />
                    <div className="w-3/5 h-auto flex flex-col gap-y-7">
                        <h3 className="text-5xl font-bold">Criando soluções que fazem a diferença</h3>
                        <p className="text-lg font-medium">Desde o início, a Kolia sempre priorizou a criação de soluções personalizadas para hotéis, buscando entender suas necessidades específicas.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5">
                    <p className="text-lg font-medium">A ideia da Kolia surgiu durante um projeto de TCC na FIAP School, uma instituição de ensino médio técnico. Seis alunos perceberam, por meio de contatos e experiências anteriores, qu e o setor de hotelaria enfrentava diversos desafios que poderiam ser resolvidos com o uso da tecnologia.</p>
                    <p className="text-lg font-medium">Com o desenvolvimento do Kolia Check, nosso primeiro produto, buscamos resolver o problema da alta demanda no check-in, proporcionando um melhor controle de dados. Continuamos a explorar novos desafios para desenvolver soluções inovadoras.</p>
                </div>
            </section>
            <section className="bg-gradient-to-b from-black to-[#252525] px-[250px] py-20">
                <h2 className="text-center text-4xl font-bold text-white">Time principal da <em className="not-italic text-laranja">Kolia</em></h2>
                <div className="grid grid-cols-3 gap-10 py-20">
                    <CardEquipe img="linkedin.png" h2="Gabriel Thompson" p="Back-End"/>
                    <CardEquipe img="linkedin.png" h2="Guilherme Sena" p="Design"/>
                    <CardEquipe img="linkedin.png" h2="João Vitor" p="Negócios"/>
                    <CardEquipe img="linkedin.png" h2="José Kaneto" p="Front-End"/>
                    <CardEquipe img="linkedin.png" h2="Nícolas Baradel" p="Marketing"/>
                    <CardEquipe img="linkedin.png" h2="Thomas Soares" p="Back-End"/>
                </div>
            </section>
            <SectionContato/>
        </main>
     );
}

export default Sobre;