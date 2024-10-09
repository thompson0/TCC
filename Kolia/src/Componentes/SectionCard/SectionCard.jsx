export default function SectionCard({children}){
    return(
        <section className="bg-gradient-to-b from-black to-[#252525] text-white mx-[250px] flex justify-center place-content-center rounded-2xl" >
            <div className="flex flex-col text-center">
                <h2 className="text-5xl py-20 px-10 text-center font-bold max-lg:text-4xl">Os principais pilares de sucesso da <em className="not-italic text-laranja">Kolia</em></h2>
                <div className="flex justify-around max-lg:flex-col max-lg:items-center">
                    {
                        children
                    }
                </div>
            </div>
        </section>
    )
}