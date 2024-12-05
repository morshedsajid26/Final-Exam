import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import VisaoGeral from './Pages/VisaoGeral'
import RootLayout from './Layer/RootLayout'
import Home from './Pages/Home'
import Financeiro from './Pages/Financeiro'
import Produto from './Pages/Produto'
import EquipeVenda from './Pages/EquipeVenda'
import Clientes from './Pages/Clientes'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
       <Route index element={<Home/>}/>
       <Route path='/visaogeral' element={<VisaoGeral/>}/>
       <Route path='/financeiro' element={<Financeiro/>}/>
       <Route path='/equipevenda' element={<EquipeVenda/>}/>
       <Route path='/produto' element={<Produto/>}/>
       <Route path='/clients' element={<Clientes/>}/>
       
    </Route>

  ))

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App