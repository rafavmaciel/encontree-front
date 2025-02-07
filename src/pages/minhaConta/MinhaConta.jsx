import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../redux/UserReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ModalEditarImgs from "../../components/modalEditarImgs/ModalEditarImgs";
import CardInformacoesUser from "../../components/cardInformaçõesUser/CardInformacoesUser";
import TabelaImoveis from "../../components/tabelaImvoveis/TabelaImoveis";

export default function MinhaConta() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext);
    const [user, setUser] = useState();
    const [imoveis, setImoveis] = useState();
    const [anuncios, setAnuncios] = useState();
    const [showModal, setShowModal] = useState(false);
    const [selectedImovel, setSelectedImovel] = useState();
    const [render, setRender] = useState(false);
    let id_usuario;

    const getUser = async () => {
        try {
            await axios
                .get(process.env.REACT_APP_BASE_URL_LOCAL + "user/?email=" + state.user.email)
                .then((response) => {
                    if (response.data.length === 0 || response.data[0].id_usuario === undefined) {
                        navigate("/login");
                    }
                    id_usuario = response.data[0]?.id_usuario;
                    setUser(response.data[0]);
                });
            await axios
                .get(process.env.REACT_APP_BASE_URL_LOCAL + "imovel/?id_usuario=" + id_usuario)
                .then((response) => {
                    if (response.data.length > 0) {
                        setImoveis(response.data);
                    }
                    setLoading(false);
                });
            await axios
                .get(process.env.REACT_APP_BASE_URL_LOCAL + "anuncio/?id_usuario=" + id_usuario)
                .then((response) => {
                    if (response.data.length > 0) {
                        setAnuncios(response.data);
                    }
                    setLoading(false);
                });
        } catch (error) {
            console.log(error);
        }
    };

    function renderComponent() {
        setRender(!render);
    }
    async function handleDeleteImovel(id_imovel) {
        try {
            const anuncio = anuncios.filter((anuncio) => anuncio.imovel_id_imovel === id_imovel);
            const id_anuncio = anuncio[0]?.id_anuncio ? anuncio[0].id_anuncio : null;
            if (id_anuncio) {
                await axios.delete(process.env.REACT_APP_BASE_URL_LOCAL + "anuncio/?id_anuncio=" + id_anuncio);
            }
            await axios.delete(process.env.REACT_APP_BASE_URL_LOCAL + "imovel/?id_imovel=" + id_imovel);
            alert("Imóvel excluído com sucesso!");
            setAnuncios(anuncios.filter((anuncio) => anuncio.imovel_id_imovel !== id_imovel));
            renderComponent();
        } catch (error) {
            console.log(error);
        }
    }

    function changeModal() {
        setShowModal(!showModal);
    }

    async function handleChangeStatus(id_imovel) {
        try {
            const anuncio = anuncios?.filter((anuncio) => anuncio.imovel_id_imovel === id_imovel);
            const id_anuncio = anuncio[0]?.id_anuncio;
            axios
                .put(process.env.REACT_APP_BASE_URL_LOCAL + "anuncio-status/?id_anuncio=" + id_anuncio)
                .then((response) => {
                    alert("Status alterado com sucesso!");
                });
            renderComponent();
        } catch (error) {
            console.log(error);
        }
    }
    function logout() {
        dispatch({ type: "LOGOUT" });
        navigate("/");
        // refresh page
        window.location.reload();
    }

    useEffect(() => {
        if (state.user.email) {
            getUser();
        }
    }, [state.user.email, render]);

    return (
        <div className="py-5">
            <nav className="flex-col max-w-7xl mx-auto ">
                {/* infromações do usuário */}
                <CardInformacoesUser user={state.user} logout={logout} />

                {/* lista de imoveis */}
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-500 h-12 w-12 mb-4 my-10"></div>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col">
                            <p className="text-4xl text-gray-900 mb-3 mx-4 my-2">Meus imvóveis </p>
                            <div className="flex flex-col-6 mx-4">
                                <button
                                    onClick={() => navigate("/cadastro-imovel/" + user.id_usuario)}
                                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Adicionar Imóvel
                                </button>
                            </div>
                        </div>
                        <TabelaImoveis
                            imoveis={imoveis}
                            user={user}
                            anuncios={anuncios}
                            handleDeleteImovel={handleDeleteImovel}
                            changeModal={changeModal}
                            setSelectedImovel={setSelectedImovel}
                            handleChangeStatus={handleChangeStatus}
                            setShowModal={setShowModal}
                        />
                    </>
                )}
            </nav>
            {showModal ? (
                <ModalEditarImgs changeModal={changeModal} imovel={selectedImovel} renderComponent={renderComponent} />
            ) : null}
        </div>
    );
}
