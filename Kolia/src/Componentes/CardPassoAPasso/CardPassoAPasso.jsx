function CardPassoAPasso({img, h3, p}) {
    return ( 
        <div className="flex flex-col gap-y-4 text-center w-1/4">
            <img className="w-full" src={img} alt="" />
            <h3 className="font-bold text-lg">{h3}</h3>
            <p className="text-balance">{p}</p>
        </div>
     );
}

export default CardPassoAPasso;