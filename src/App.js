import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingPage/index";
import Login from "./pages/login/index";
import Menu from "./pages/menu/index";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import AnuncioDetais from "./pages/anuncioDetais/AnuncioDetais";
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario";
import { UserProvider } from "./redux/UserReducer";
import MinhaConta from "./pages/minhaConta/MinhaConta";
import CadastroImovel from "./pages/cadastroImovel/CadastroImovel";
import PerfilUsuario from './pages/perfil_usuario/index';
import FiltroImoveis from './pages/filtro_imoveis/index';


function App() {
    return (
        <>
            <UserProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/anuncioDetais:id" element={<AnuncioDetais />} />
                        <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
                        <Route path="/minha-conta" element={<MinhaConta />} />
                        <Route path="/cadastro-imovel/:id_usuario" element={<CadastroImovel />} />
                        <Route path="/perfil_usuario" element={<PerfilUsuario/>}/>
                        <Route path="/filtro_imoveis" element={<FiltroImoveis/>}/>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    );
}

export default App;
