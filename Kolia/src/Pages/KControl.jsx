import Botao from "../Componentes/Botao/Botao";
import CardPassoAPasso from "../Componentes/CardPassoAPasso/CardPassoAPasso";
import SectionContato from "../Componentes/SectionContato/SectionContato";

function KControl() {
  return (
    <>
      <section className="w-full h-[900px] flex flex-col text-center items-center py-32 bg-gradient-to-b  from-[#39B54A] to-[#000000] relative">
        <div className="w-full flex flex-col items-center gap-y-10">
          <h2 className="text-4xl font-bold text-white w-2/4">
            UMA PLATAFORMA QUE FACILITA O PROCESSO DE CHECK-IN
          </h2>
          <p className="w-2/4 text-white">
            Entregamos um serviço completo que facilita o processo de Check-In,
            desde formulário até uma plataforma de controle de hóspedes com{" "}
            <em className="font-bold not-italic">reconhecimento facial.</em>
          </p>
        </div>
        <iframe
        className="absolute -bottom-44 w-full h-3/4 px-[250px] rounded-3xl "
          width="560"
          height="315"
          src="https://www.youtube.com/embed/brBTzXoeum4?si=KgVdRvYTfoyUtFM7"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
      <section className="pt-80 mb-32 mx-[250px]">
        <h2 className="text-center text-4xl font-bold mb-20">
          Processos para realizar o{" "}
          <em className="not-italic text-[#39B54A]">Check-In</em>
        </h2>
        <div className="flex items-center justify-around w-ful max-lg:flex-col max-lg:gap-10">
          <CardPassoAPasso
            img="PreCheck-in.png"
            h3="Preencher o Pré-Check-In"
            p="Para facilitar o processo de check-in, o hóspede informa os dados do titular da reserva em um pré-check-in."
          />
          <img
            src="seta-direita 1.png"
            alt=""
            className="-mt-32 max-lg:mt-1 max-lg:rotate-90"
          />
          <CardPassoAPasso
            img="Software.png"
            h3="Conexão com Software"
            p="Os dados do pré-check-in são enviados para o software, onde serão armazenados para reconhecimento facial e gestão de informações."
          />
          <img
            src="seta-direita 1.png"
            alt=""
            className="-mt-32 max-lg:mt-1 max-lg:rotate-90"
          />
          <CardPassoAPasso
            img="FaceID.png"
            h3="Reconhecimento Facial"
            p="O hóspede ao chegar no hotel, um reconhecimento facial identificará sua reserva com todos os seus dados, tornando o check-in mais ágil."
          />
        </div>
      </section>
      <section className="bg-gradient-to-b from-black to-[#252525] text-white  px-[250px] flex w-full py-40 justify-between items-center max-lg:flex-col-reverse">
        <div className="w-5/12 font-bold flex flex-col gap-y-8 max-lg:w-full max-lg:text-center max-lg:gap-y-4">
          <h2 className="text-5xl font-black max-lg:hidden">Kolia Control</h2>
          <p className="text-lg font-semibold max-lg:text-sm max-lg:w-full">
            A Kolia Control, ou K-Control, é um dos produtos da Kolia, um
            software que simplifica o processo de check-in em seu hotel.
          </p>
          <p className="text-lg font-semibold max-lg:text-sm max-lg:w-full">
            A demora no check-in é um desafio comum na hotelaria, e nós
            desenvolvemos uma solução eficiente para esse problema.
          </p>
          <p className="text-lg font-semibold max-lg:text-sm max-lg:w-full">
            Oferecendo diversos benefícios em sistematização e tecnologia para o
            seu estabelecimento.
          </p>
        </div>
        <img
          className="w-6/12 max-lg:mb-10 max-lg:w-3/4"
          src="KoliaControlBranco.png"
          alt=""
        />
      </section>
      <SectionContato />
    </>
  );
}

export default KControl;
