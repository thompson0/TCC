export default function Card({img, h3, p}){
    return(
        <div className="flex flex-col items-center text-center w-1/4 gap-3 pt-10 pb-20">
            <img className="w-28 h-28 mb-3" src={img}/>
            <h3 className="text-xl font-bold">{h3}</h3>
            <p className="text-base max-lg:hidden max-xl:hidden">{p}</p>
        </div>
    )
}