import { Outlet } from 'react-router-dom'
import Header from './Componentes/Header/Header.jsx'
import Footer from './Componentes/Footer/Footer.jsx'

function App() {

  return (
    <>

      <section className=' px-[250px] w-full h-screen font-montserrat'>
        <Header/>
        <Outlet/>
        <Footer/>
      </section>
      
      

    </>
  )
}

export default App
