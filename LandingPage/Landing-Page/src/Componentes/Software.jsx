function Software() {
    return (

        <>
            <section className="p-96" id="software">
                <div className="flex items-center justify-center mb-10 ">
                    <h2 className="text-4xl font-titulo w-2/5 font-bold"><em className="text-customGreenLight ">Funcionalidades</em> do Software de Check-In</h2>
                    <p className="font-texto text-xl w-2/4">Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most Mr by wound hours oh lorem </p>
                </div>
                <div className="flex items-center justify-center gap-10 mb-8">
                    <div className=" w-1/4 shadow-2xl flex flex-col h-full p-4 border-1">
                        <img src="AppleFaceId.jpg" alt="" />
                        <h2 className="font-bold text-xl my-2">Reconhecimento facial</h2>
                        <p className="text-md mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                    </div>

                    <div className="w-3/5 shadow-2xl flex flex-col p-4 border-1 ">
                        <img className="w-full h-[255px]" src="software.jpeg" alt="" />
                        <h2 className="font-bold text-xl my-2">Reconhecimento facial</h2>
                        <p className="text-md mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div className="flex items-center mx-[60px]">
                    <div className="flex gap-11 flex-col">
                        <div className="flex p-4 border-1 shadow-2xl w-[90%] h-[180px]">
                            <img className="w-2/5" src="hospedes.jpg" alt="" />
                            <div className="ml-4">
                                <h2 className="font-bold text-xl my-2">Controle dos Hospedes</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                            </div>
                        </div>
                        <div className="flex p-4 border-1 shadow-2xl w-[90%] h-[180px]">
                            <img className="w-2/5" src="informacao.jpg" alt="" />
                            <div className="ml-4">
                                <h2 className="font-bold text-xl my-2">Informações</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-2xl flex flex-col p-4 border-1">
                        <img className="" src="formulario.webp" alt="" />
                        <h2 className="font-bold text-xl my-2">Formulário</h2>
                        <p className="text-md mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                    </div> 

                </div>
            </section>
        </>

    );
}

export default Software;