import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Aboutus from './components/aboutus/aboutus';
import Productos from './components/productos/productos';
import Registrarme from './components/Registrarme/registrarme';
import Iniciarsesion from './components/iniciarsesion/iniciarsesion';
import Logout from './components/logout/logout';
import Carrito from './components/carrito/carrito';
import Checkout from './components/checkout/checkout';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='aboutus' element={<Aboutus/>} />
          <Route path='productos' element={<Productos/>} />
          <Route path='registrarme' element={<Registrarme/>}/>
          <Route path='iniciarsesion' element={<Iniciarsesion/>}/>
          <Route path='logout' element={<Logout/>}/>
          <Route path='carrito' element={<Carrito/>}/>
          <Route path='checkout' element={<Checkout/>}/>




        </Routes>
      </div>
    </>
  )
}

export default App