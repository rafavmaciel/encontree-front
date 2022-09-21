import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../redux/UserReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MinhaConta() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext);
    const [user, setUser] = useState();
    const [imoveis, setImoveis] = useState();

    const getUser = async () => {
        let id_usuario;
        try {
            await axios.get("http://localhost:3003/user/?email=" + state.user.email).then((response) => {
                id_usuario = response.data[0].id_usuario;
                setUser(response.data[0]);
            });
            await axios.get("http://localhost:3003/imovel/?id_usuario=" + id_usuario).then((response) => {
                console.log(response.data);
                if (response.data.length > 0) {
                    setImoveis(response.data);
                }
                setLoading(false);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (state.user.email) {
            getUser();
        }
    }, [state.user.email]);

    return (
        <div>
            <nav className="flex-col ">
                {/* infromações do usuário */}
                <div className="flex justify-between items-center bg-blue-500 mb-7 border-8 border-t-8 shadow-md">
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
                            // onClick={logout}
                        >
                            Sair
                        </button>
                    </div>
                </div>

                {/* lista de pets */}
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 mb-4"></div>
                    </div>
                ) : (
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <p className="text-4xl text-black mb-5 text-blue-600 ">Meus pets </p>
                            {imoveis?.map((imovel, i) => (
                                <div key={i} className="flex items-center">
                                    <div
                                        className="flex items-center m-2 bg-[#fafafa] border-8 border-t-8 shadow-md transition duration-500 hover:scale-105 "
                                        id={i}
                                    >
                                        <img
                                            className="w-500"
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
                                    {/* editar pets */}
                                    <button
                                        className="bg-black hover:bg-stone-300 text-white font-bold py-2 px-4 mx-5 rounded"
                                        onClick={() => navigate(`/editarPet/${imovel.id_imovel}`)}
                                    >
                                        Editar
                                    </button>
                                    {/* editar imagem principal */}
                                </div>
                            ))}
                        </div>
                    <button
                        //onClick={handleClickModal}
                        className="bg-black hover:bg-stone-300 text-white font-bold py-2 px-4 rounded content-end"
                    >
                        Adicionar Imóvel
                    </button>
                    </div>
                )}
            </nav>
        </div>
    );
}
