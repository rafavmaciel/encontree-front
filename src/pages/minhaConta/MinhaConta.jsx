import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../redux/UserReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ModalEditarImgs from "../../components/modalEditarImgs/ModalEditarImgs";

export default function MinhaConta() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext);
    const [user, setUser] = useState();
    const [imoveis, setImoveis] = useState();
    const [anuncios, setAnuncios] = useState();
    const [showModal, setShowModal] = useState(false);
    const [selectedImovel, setSelectedImovel] = useState();
    let id_usuario;

    const getUser = async () => {
        try {
            await axios
                .get(process.env.REACT_APP_BASE_URL_LOCAL + "user/?email=" + state.user.email)
                .then((response) => {
                    if (response.data.length === 0 || response.data[0].id_usuario === undefined)   {
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

    async function handleDeleteImovel(id_imovel) {
        try {
            const anuncio = anuncios.filter((anuncio) => anuncio.imovel_id_imovel === id_imovel);
            const id_anuncio = anuncio[0]?.id_anuncio ? anuncio[0].id_anuncio : null;
            if (id_anuncio) {
                await axios.delete(process.env.REACT_APP_BASE_URL_LOCAL + "anuncio/?id_anuncio=" + id_anuncio);
            }
            await axios.delete(process.env.REACT_APP_BASE_URL_LOCAL + "imovel/?id_imovel=" + id_imovel);
            alert("Imóvel excluído com sucesso!");
            window.location.reload();
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
            const id_anuncio = anuncio[0]?.id_anuncio 
            axios
                .put(process.env.REACT_APP_BASE_URL_LOCAL + "anuncio-status/?id_anuncio=" + id_anuncio)
                .then((response) => {
                    alert("Status alterado com sucesso!");
                });
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
    }, [state.user.email, anuncios, imoveis]);

    return (
        <div className="py-5">
            <nav className="flex-col max-w-7xl mx-auto ">
                {/* infromações do usuário */}
                <div className="flex justify-between items-center bg-blue-500 mb-7 border-8 border-t-8 shadow-md p-3">
                    <div className="flex items-center">
                        <img src={state.user.photoUrl} style={{}} referrerPolicy="no-referrer" />
                        <div className="ml-8 mr-8">
                            <p className="text-4xl text-black">{state.user.user ? state.user.user : state.nomeUser}</p>
                            <p className="text-base text-black">{state.user.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="bg-black hover:bg-stone-300 text-white font-bold py-2 px-4 rounded"
                            onClick={logout}
                        >
                            Sair
                        </button>
                    </div>
                </div>

                {/* lista de imoveis */}
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 mb-4"></div>
                    </div>
                ) : (
                    <div className="flex justify-between items-center m-2">
                        <div className="flex flex-col">
                            <p className="text-4xl text-black mb-5 ">Meus imvóveis </p>

                            <button
                                onClick={() => navigate("/cadastro-imovel/" + user.id_usuario)}
                                className="bg-black max-w-sm hover:bg-stone-300 text-white font-bold py-2 px-4 my-3 rounded content-end"
                            >
                                Adicionar Imóvel
                            </button>

                            {imoveis?.map((imovel, i) => (
                                <div key={i} className="flex items-center bg-[#fafafa] m-2 shadow-md">
                                    <div
                                        className="flex items-center max-w-lg transition duration-500 hover:scale-105 hover:bg-blue-200"
                                        id={i}
                                        onClick={() => navigate("/imovel/" + imovel.id_imovel)}
                                    >
                                        <img
                                            className="w-300"
                                            src={imovel.img_principal}
                                            style={{ width: "100px" }}
                                            alt="user"
                                        />
                                        <div className="ml-8 mr-8">
                                            <p className="text-2xl text-blue-600">Rua do imovel:</p>
                                            <p className="text-xl text-black ">{imovel.rua}</p>
                                            <p className="text-l text-blue-600 mt-2">Cidade do imovel:</p>
                                            <p className="text-l text-black mx-2">{imovel.cidade}</p>
                                        </div>
                                    </div>
                                    {/* publicar anuncio */}
                                    {/* verifica se já tem anuncio desse imóvel */}
                                    {anuncios?.filter((anuncio) => anuncio.imovel_id_imovel === imovel.id_imovel)
                                        .length === 0|| anuncios == undefined ? (
                                        <button
                                            className="bg-black hover:bg-stone-300 text-white font-bold py-2 px-4 mx-5 rounded"
                                            onClick={() =>
                                                navigate(`/cadastro-anuncio/${user.id_usuario}/${imovel.id_imovel}`)
                                            }
                                        >
                                            Cadastrar anúncio
                                        </button>
                                    ) : (
                                        <>
                                        { anuncios?.filter((anuncio) => anuncio.imovel_id_imovel === imovel.id_imovel)[0].status === 1 ? (
                                            <button
                                                className="bg-red-400 hover:bg-stone-300 text-white font-bold py-2 px-4 mx-5 rounded"
                                                onClick={() => {
                                                    handleChangeStatus(imovel.id_imovel);
                                                }}
                                            >
                                                Inativar anúncio
                                            </button>
                                        ) : (
                                            <button
                                                className="bg-green-400 hover:bg-stone-300 text-white font-bold py-2 px-4 mx-5 rounded"
                                                onClick={() => {
                                                    handleChangeStatus(imovel.id_imovel);
                                                }}
                                            >
                                                Ativar anúncio
                                            </button>
                                        )}
                                        </>
                                    )}
                                    {/* editar imagem principal */}
                                    <i
                                        className="fas fa-duotone fa-images mx-4 text-2xl text-black hover:text-blue-800 cursor-pointer"
                                        onClick={() => {
                                            setShowModal(true);
                                            setSelectedImovel(imovel);
                                        }}
                                    />
                                    {/* deletar imóvel */}
                                    <i
                                        className="fas fa-trash-alt text-2xl mx-4 text-black hover:text-blue-800 cursor-pointer"
                                        onClick={() => handleDeleteImovel(imovel.id_imovel)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
            {showModal ? <ModalEditarImgs changeModal={changeModal} imovel={selectedImovel} /> : null}
        </div>
    );
}
