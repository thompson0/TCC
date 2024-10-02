import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './Pages/Sobre.jsx'
import Contato from './Pages/Contato.jsx'
import Produtos from './Pages/Produtos.jsx'
import Home from './Pages/Home.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import Duvidas from './Pages/Duvidas.jsx'
import KCheck from './Pages/KCheck.jsx'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {index:true, element:<Home/>},
        {path:"contato", element: <Contato/>},
        {path:"sobre", element:<Sobre/>},
        {path:"produtos", element:<Produtos/>},
        {path: "*", element:<PageNotFound/>},
        {path: "duvidas", element:<Duvidas/>},
        {path: "kcheck", element:<KCheck/>}
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
