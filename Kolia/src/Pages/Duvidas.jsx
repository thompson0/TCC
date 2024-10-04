import Formulario from "../Componentes/Formulario/Formulario";
import Subtitulo from "../Componentes/Subitulo/Subtitulo"
import { useEffect, useState } from "react";

function Contato() {

    const [contatos, setContatos] = useState([]);
    
useEffect(() => {
    fetch('http://localhost:5173/duvidas')
        .then(res => res.json())
        .then(data => setContatos(data))
        .catch(err => console.log(err))
})

    return (
            <div>
            {contatos}
            </div>

    );
}

export default Contato;