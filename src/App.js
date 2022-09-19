import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/landingPage/index';
import Login from './pages/login/index';
import Menu from './pages/menu/index';
import PerfilUsuario from './pages/perfil_usuario/index';
import FiltroImoveis from './pages/filtro_imoveis/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/perfil_usuario" element={<PerfilUsuario/>}/>
        <Route path="/filtro_imoveis" element={<FiltroImoveis/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
