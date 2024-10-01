import Formulario from "../Componentes/Formulario/Formulario";
import Subtitulo from "../Componentes/Subitulo/Subtitulo"
import { useEffect, useState } from "react";

function Contato() {

    const [Duvidas, setDuvidas] = useState([]);
    
useEffect(() => {
    fetch('http://localhost:5173/duvidas')
        .then(res => res.json())
        .then(data => setDuvidas(data))
        .catch(err => console.log(err))
        console.log(Duvidas)
})

    return (
        <section>
            <Subtitulo nome="Tire suas Dúvidas" />
            <div>
                {Duvidas.map}
            </div>
        </section>

    );
}

export default Contato;