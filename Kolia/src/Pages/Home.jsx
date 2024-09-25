import Botao from "../Componentes/Botao/Botao";
import Card from "../Componentes/Card/Card";
import SectionCard from "../Componentes/SectionCard/SectionCard";
import SecitonContato from "../Componentes/SectionContato/SectionContato";

function Home() {
    return ( 
        <main>
            <section className="flex py-40 justify-between relative px-[250px]">
                <div className="w-3/5 font-bold flex flex-col gap-y-10 ">
                    <h2 className="text-5xl font-black">CONSTRUINDO SOLUÇÕES <em className="text-laranja not-italic">PERSONALIZADAS</em>  <em className="not-italic text-cinza">PARA HOTÉIS</em></h2>
                    <p className="text-md font-semibold">Transforme a gestão do seu hotel com automação inteligente, aumentando eficiência e proporcionando uma experiência única para seus hóspedes.</p>
                    <Botao children="Saiba Mais" to="produtos"/>
                </div>
                <img className="w-[550px] h-auto absolute bottom-12 right-40" src="SolucoesPersonalizadas.png" alt="" />
            </section>
            <SectionCard className="px-[250px]">
                <Card img="icon3.png" h3="Inovação Tecnológica" p="Implementação das mais recentes tecnologias"/>
                <Card img="icon2.png" h3="Soluções Projetadas" p="Soluções projetadas para otimizar processos e e melhorar a eficiência operacional"/>
                <Card img="icon1.png" h3="Atendimento Excepcional" p="Garantindo que sua equipe tenha o apoio necessário para usar nossas soluções."/>
            </SectionCard>
            <section className="flex py-40 justify-between items-center px-[250px]">
                <img className="w-4/12 h-auto" src="GestaoHotel.png" alt="" />
                <div className="w-6/12 h-3/6 font-bold flex flex-col gap-y-7">
                    <h2 className="text-5xl font-black">Simplifique a Gestão do Seu Hotel</h2>
                    <p className="text-md font-semibold">
                        Com nossos softwares, você gerencia todos os aspectos operacionais do seu hotel de forma integrada e eficiente.
                    </p>
                    <p>
                    Elevando a experiência tanto da sua equipe quanto dos seus hóspedes, elevando a qualidade e estrutura do hotel.
                    </p>
                    <Botao children="Nossos Produtos" to="produtos"/>
                </div>
            </section>
            <section className="bg-gradient-to-b from-black text-white to-[#252525] px-[250px] flex w-full py-40 justify-between items-center">
                <div className="w-6/12 font-bold flex flex-col gap-y-8 ">
                    <h2 className="text-5xl font-black">Sobre a Startup Kolia</h2>
                    <p className="text-md font-semibold">Na Kolia, somos uma startup dedicada a transformar a gestão hoteleira por meio de soluções tecnológicas inovadoras.</p>
                    <p className="text-md font-semibold">Conheça mais sobre nossa visão e como podemos ajudar seu negócio a alcançar novos patamares."</p>
                    <Botao children="Sobre Nós" to="sobre"/>
                </div>
                <img className="w-5/12 h-1/5  bottom-36 -right-24" src="Kolia.png" alt="" />
            </section>
            <SecitonContato/>
        </main>
     );
}

export default Home;