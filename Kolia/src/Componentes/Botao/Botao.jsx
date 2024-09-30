import { NavLink } from "react-router-dom";

export default function Botao({children,to}){
    return(
        <NavLink to={to} className="text-white text-center font-extrabold p-2 w-72 bg-laranja rounded-md">{children}</NavLink>
    )
}