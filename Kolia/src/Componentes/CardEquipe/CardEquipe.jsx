export default function CardEquipe({img, h2, p}){
    return(
        <div className="h-1/6 flex flex-col gap-y-3 items-center ">
            <img className="w-3/6 rounded-xl max-xl:w-3/4 max-lg:w-2/4" src={img} alt="" />
            <h2 className="text-laranja text-2xl font-bold max-xl:text-center max-xl:text-wrap max-lg:text-wrap">{h2}</h2>
            <p className="text-lg font-semibold text-white">{p}</p>
        </div>
    )
}