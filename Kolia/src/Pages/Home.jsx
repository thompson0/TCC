import Botao from "../Componentes/Botao/Botao";
import Card from "../Componentes/Card/Card";
import SectionCard from "../Componentes/SectionCard/SectionCard";

function Home() {
    return ( 
        <main>
            <section className="flex py-40 justify-between relative">
                <div className="w-3/5 font-bold flex flex-col gap-y-10 ">
                    <h2 className="text-5xl font-black">CONSTRUINDO SOLUÇÕES <em className="text-laranja not-italic">PERSONALIZADAS</em>  <em className="not-italic text-cinza">PARA HOTEIS</em></h2>
                    <p className="text-md font-semibold">Transforme a gestão do seu hotel com automação inteligente, aumentando eficiência e proporcionando uma experiência única para seus hóspedes.</p>
                    <Botao value="Saiba Mais"/>
                </div>
                <img className="w-2/5 absolute bottom-36 -right-24" src="SolucoesPersonalizadas.png" alt="" />
            </section>
            <SectionCard>
                <Card img="/public/linkedin.png" h3="Inovação Tecnológica" p="Implementação das mais recentes tecnologias"/>
                <Card img="linkedin.png" h3="Soluções Projetadas" p="Soluções projetadas para otimizar processos e e melhorar a eficiência operacional"/>
                <Card img="linkedin.png" h3="Atendimento Excepcional" p="Garantindo que sua equipe tenha o apoio necessário para usar nossas soluções."/>
            </SectionCard>
            <section className="flex py-40 justify-between items-center">
                <img className="w-2/6 h-2/6" src="GestaoHotel.png" alt="" />
                <div className="w-3/6 h-3/6 font-bold flex flex-col gap-y-7">
                    <h2 className="text-5xl font-black">Simplifique a Gestão do Seu Hotel</h2>
                    <p className="text-md font-semibold">
                        Com nossos softwares, você gerencia todos os aspectos operacionais do seu hotel de forma integrada e eficiente.
                    </p>
                    <p>
                    Elevando a experiência tanto da sua equipe quanto dos seus hóspedes, elevando a qualidade e estrutura do hotel.
                    </p>
                    <Botao value="Nossos Produtos"/>
                </div>
            </section>
            <section className="bg-gradient-to-b from-black text-white to-[#252525] flex w-full py-40 justify-around  -left-0">
                <div className="w-3/5 font-bold flex flex-col gap-y-10 ">
                    <h2 className="text-5xl font-black">Sobre a Startup Kolia</h2>
                    <p className="text-md font-semibold">Transforme a gestão do seu hotel com automação inteligente, aumentando eficiência e proporcionando uma experiência única para seus hóspedes.</p>
                    <Botao value="Sobre Nós"/>
                </div>
                <img className="w-2/5  bottom-36 -right-24" src="Kolia.png" alt="" />
            </section>
        </main>
     );
}

export default Home;