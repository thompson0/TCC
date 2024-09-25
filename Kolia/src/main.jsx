import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './Pages/Sobre.jsx'
import Contato from './Pages/Contato.jsx'
import Produtos from './Pages/Produtos.jsx'
import Home from './Pages/Home.jsx'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {index:true, element:<Home/>},
        {path:"contato", element: <Contato/>},
        {path:"sobre", element:<Sobre/>},
        {path:"produtos", element:<Produtos/>}
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
