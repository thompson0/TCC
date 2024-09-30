import { Outlet } from 'react-router-dom'
import Header from './Componentes/Header/Header.jsx'
import Footer from './Componentes/Footer/Footer.jsx'

function App() {

  return (
    <>

      <section className="w-full">
        <Header/>
        <Outlet/>
      </section>
      <Footer/>
      
      

    </>
  )
}

export default App
