function Contato() {
    return (
        <>
            <section className="bg-customGreenLight py-16 px-16 mb-52" id="contato">
                <div className="flex my-20 justify-center">
                    <form className="w-2/4 flex flex-col justify-center items-center">
                        <div className="w-4/5 flex justify-around mb-4">
                            <label className="text-2xl text-white" htmlFor="nome">Nome:</label>
                            <input placeholder='exemplo' className="w-3/4 rounded-full bg-secondary-kaneto focus:outline-none p-2" type="text" id="nome" />
                        </div>
                        <div className="w-4/5 flex justify-around mb-4">
                            <label className="text-2xl text-white" htmlFor="email">E-mail:</label>
                            <input placeholder="exemplo@gmail.com" className="w-3/4 rounded-full bg-secondary-kaneto focus:outline-none p-2" type="email" id="email" />
                        </div>
                        <div className="w-[74%] flex flex-col mb-4">
                            <label className="text-2xl text-white mb-4" htmlFor="mensagem">Mensagem :</label>
                            <textarea className="rounded-2xl bg-secondary-kaneto focus:outline-none p-2" id="mensagem" cols="30" rows="10"></textarea>
                        </div>
                        <input className="rounded-lg py-3 px-[35%] text-white bg-black mt-5" type="button" value="Enviar" />
                    </form>
                    <div className="w-2/5">
                        <h2 className="text-6xl text-white font-titulo mb-9">Ready to take the first step?</h2>
                        <p className="font-texto text-white text-2xl">Still court no small think death so an wrote. Incommode necessary no it ehaviour convinced distrusts an unfeeling he. Incommode necessary no it ehaviour convinced </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contato;