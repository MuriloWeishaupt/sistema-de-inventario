import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cadastra from './components/Cadastra';
import App from './App';
import ProductsList from './components/QuadroProdutos';

function Rotas() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastra" element={<Cadastra />} />
      <Route path="/inventario" element={<ProductsList/>} />
    </Routes>
    </div>
    
  );
}

export default Rotas;
