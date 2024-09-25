import { NavLink } from "react-router-dom";

export default function Link({children, to}){
    return(
        <NavLink className="text-2xl" to={to}>{children}</NavLink>
    )
}