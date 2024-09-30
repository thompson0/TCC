import { useState } from "react";
import emailjs from "@emailjs/browser"

function Formulario() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function EnviarEmail(e){
        e.preventDefault();
        if(name === "" || email === "" || mensagem === ""){
            alert("Preencha todos os campos corretamente!")
            return
        }

        const templateParms = { 
            from_name: name, 
            message:mensagem,
            email:email
        }

        emailjs.send("service_5v1p42q", "template_9rvcz2a",templateParms, "Rkmh0Mj2yBUfq8CCY")
        .then((Response) => {
            alert("Email enviado com sucesso! Analisaremos e responderemos em breve.")
            console.log(Response.status, Response.text)
            setName('')
            setEmail('')
            setMensagem('')
        }, (err)=>{
            console.log("ERRO: ", err)
        })
        
    }

    return ( 
        <form onSubmit={EnviarEmail} className="w-2/5 border-2 border-black shadow-2xl shadow-laranja p-10  rounded-lg ">
            <div className="w-full flex flex-col  mb-5">
                <label className="text-xl mb-2 font-bold text-black"  htmlFor="nome">Nome:</label>
                <input onChange={(e) => setName(e.target.value)} placeholder='exemplo' className="rounded-lg border-2 border-laranja focus:outline-none p-2" type="text" value={name} />
            </div>
            <div className="w-full flex flex-col mb-5">
                <label className="text-xl mb-2 font-bold text-black" htmlFor="email">E-mail:</label>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="exemplo@gmail.com" className="rounded-lg border-2 border-laranja focus:outline-none p-2" type="email" value={email} />
            </div>
            <div className="w-full flex flex-col mb-5">
                <label className="text-xl font-bold text-black mb-2" htmlFor="mensagem">Mensagem :</label>
                <textarea onChange={(e) => setMensagem(e.target.value)} className="rounded-xl border-2 border-laranja focus:outline-none p-2" id="mensagem" cols="30" rows="10" value={mensagem} ></textarea>
            </div>
            <input className="rounded-lg py-3 block w-full font-bold text-black border-2 border-laranja mt-5 hover:bg-laranja hover:bg-opacity-80 hover:border-black" type="submit" value="Enviar" />
        </form>
     );
}

export default Formulario;