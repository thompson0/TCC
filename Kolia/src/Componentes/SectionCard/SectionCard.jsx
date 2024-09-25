import { Children } from "react";
import Card from "../Card/Card";

export default function SectionCard({children}){
    return(
        <section className="bg-gradient-to-b from-black text-white to-[#252525] w-full rounded-xl flex flex-col">
            <h2 className="text-5xl px-64 py-20 text-center font-bold">Os principais pilares de sucesso da <em className="not-italic text-laranja">Kolia</em></h2>
            <div className="flex justify-around">
                {
                    children
                }
            </div>
        </section>
    )
}