import Botao from "../Componentes/Botao/Botao";
import Card from "../Componentes/Card/Card";
import SectionCard from "../Componentes/SectionCard/SectionCard";
import SecitonContato from "../Componentes/SectionContato/SectionContato";

function Home() {
    return ( 
        <main>
            <section className="flex items-center py-40 justify-between px-[250px] max-xl:items-center">
                <div className="w-3/5 font-bold flex flex-col gap-y-10 max-xl:text-center max-xl:items-center max-xl:w-full">
                    <h2 className="text-5xl font-black">CONSTRUINDO SOLUÇÕES <em className="text-laranja not-italic">PERSONALIZADAS</em>  <em className="not-italic text-cinza">PARA HOTÉIS</em></h2>
                    <p className="text-lg font-semibold">Transforme a gestão do seu hotel com automação inteligente, aumentando eficiência e proporcionando uma experiência única para seus hóspedes.</p>
                    <Botao children="Saiba Mais" to="produtos" cor="#E76B38"/>
                </div>
                <img className="w-[400px] h-[400px] max-xl:hidden" src="SolucoesPersonalizadas.png" alt="" />
            </section>
            <SectionCard className="px-[250px]">
                <Card img="icon3.png" h3="Inovação Tecnológica" p="Implementação das mais recentes tecnologias"/>
                <Card img="icon2.png" h3="Soluções Projetadas" p="Soluções projetadas para otimizar processos e e melhorar a eficiência operacional"/>
                <Card img="icon1.png" h3="Atendimento Excepcional" p="Garantindo que sua equipe tenha o apoio necessário para usar nossas soluções."/>
            </SectionCard>
            <section className="flex py-40 justify-between items-center px-[250px] max-xl:items-center">
                <img className="w-4/12 h-auto max-xl:hidden" src="GestaoHotel.png" alt="" />
                <div className="w-6/12 h-3/6 font-bold flex flex-col gap-y-7 max-xl:text-center max-xl:items-center max-xl:w-full">
                    <h2 className="text-5xl font-black">Simplifique a Gestão do Seu Hotel</h2>
                    <p className="text-lg font-semibold">
                        Com nossos softwares, você gerencia todos os aspectos operacionais do seu hotel de forma integrada e eficiente.
                    </p>
                    <p className="text-lg font-semibold">
                    Elevando a experiência tanto da sua equipe quanto dos seus hóspedes, elevando a qualidade e estrutura do hotel.
                    </p>
                    <Botao children="Nossos Produtos" to="produtos" cor="#E76B38"/>
                </div>
            </section>
            <section className="bg-gradient-to-b from-black to-[#252525] text-white  px-[250px] flex w-full py-40 justify-between items-center max-xl:items-center">
                <div className="w-6/12 font-bold flex flex-col gap-y-8 max-xl:text-center max-xl:items-center max-xl:w-full">
                    <h2 className="text-5xl font-black">Sobre a Startup Kolia</h2>
                    <p className="text-lg font-semibold">Na Kolia, somos uma startup dedicada a transformar a gestão hoteleira por meio de soluções tecnológicas inovadoras.</p>
                    <p className="text-lg font-semibold">Conheça mais sobre nossa visão e como podemos ajudar seu negócio a alcançar novos patamares."</p>
                    <Botao children="Sobre Nós" to="sobre" cor="#E76B38"/>
                </div>
                <img className="w-5/12 h-1/5 max-xl:hidden" src="Kolia.png" alt="" />
            </section>
            <SecitonContato/>
        </main>
     );
}

export default Home;