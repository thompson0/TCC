function Rodape() {
    return ( 
        <>
        <div className="flex w-full justify-around">
         <div className="flex flex-col w-1/4 gap-3">
               <img className="w-4/5" src="Logo2.png" alt="" />
               <p className="text-xl text-wrap">
                  Uma plataforma que automatiza o processo de Check-In de Hoteis
               </p>
         </div>
            <div className="flex flex-col">
               <div className="flex justify-start gap-3">
                  <a href=""><img className="w-full" src="insta.png" alt="" /></a>
                  <a href=""><img className="w-full" src="Linkedin.png" alt="" /></a>
               </div>
               <p>
               Email: loremipsum@gmail.com
               </p>
               <p>
               Telefone: (55) 11977395596
               </p>
            </div>
            <div>
               <ul className="flex flex-col gap-1">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#software">Software</a></li>
                  <li><a href="#solucao">Soluções</a></li>
                  <li><a href="#sobre">Sobre</a></li>
                  <li><a href="#contato">Contato</a></li>
               </ul>
            </div>
         </div>
         <div className="linha flex flex-col items-center mb-10">
            <hr className="my-4 w-[80%] bg-black h-0.5" />   
            <p>
            © 2024 Nome da Empresa. Todos os direitos reservados.
            </p>
         </div>
        </>
     );
}

export default Rodape;