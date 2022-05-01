import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Plataforma';
import {Home} from './pages/Home'
import {Cadastro} from './pages/cadastro'
import {Login} from './pages/login'
import Pesquisa from './pages/Pesquisa'
import { BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/app" element={<App />} />
        <Route path="/Pesquisa" element={<Pesquisa />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

