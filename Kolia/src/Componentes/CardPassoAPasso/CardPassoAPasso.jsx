function CardPassoAPasso({img, h3, p}) {
    return ( 
        <div className="flex flex-col gap-y-4 text-center w-1/3 justify-center items-center">
            <img className="w-3/4 h-auto max-xl:w-3/4" src={img} alt="" />
            <h3 className="font-bold text-lg">{h3}</h3>
            <p className="text-balance max-xl:hidden">{p}</p>
        </div>
     );
}

export default CardPassoAPasso;