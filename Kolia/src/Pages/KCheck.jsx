import Subtitulo from "../Componentes/Subitulo/Subtitulo";

function KCheck() {
  return (
    <>
      <section className="w-full h-[900px] flex flex-col text-center py-32 bg-gradient-to-b  from-[#39B54A] to-[#000000]">
        <div className="w-full flex flex-col items-center gap-y-10">
          <h2 className="text-4xl font-bold text-white w-2/4">UMA PLATAFORMA QUE FACILITA O PROCESSO DE CHECK-IN</h2>
          <p className="w-2/4">Entregamos um serviço completo que facilita o processo de Check-In, desde formulário até uma plataforma de controle de hóspedes com reconhecimento facial.</p>
        </div>
        <img className="w-2/4" src="Kolia.png" alt="" />
      </section>
    </>
  );
}

export default KCheck;
