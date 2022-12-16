import { useNavigate } from "react-router-dom";

export default function TabelaImoveis(props) {
    const navigate = useNavigate();
    function compAnuncios(anuncios, imovel) {
        return (
            <>
                {/* publicar anuncio */}
                {/* verifica se já tem anuncio desse imóvel */}
                {anuncios?.filter((anuncio) => anuncio.imovel_id_imovel === imovel.id_imovel).length === 0 ||
                anuncios == undefined ? (
                    <button
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2"
                        onClick={() => navigate(`/cadastro-anuncio/${props.user.id_usuario}/${imovel.id_imovel}`)}
                    >
                        Cadastrar anúncio
                    </button>
                ) : (
                    <>
                        {anuncios?.filter((anuncio) => anuncio.imovel_id_imovel === imovel.id_imovel)[0].status ===
                        1 ? (
                            <button
                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2"
                                onClick={() => {
                                    props.handleChangeStatus(imovel.id_imovel);
                                }}
                            >
                                Inativar anúncio
                            </button>
                        ) : (
                            <button
                                className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2"
                                onClick={() => {
                                    props.handleChangeStatus(imovel.id_imovel);
                                }}
                            >
                                Ativar anúncio
                            </button>
                        )}
                    </>
                )}
            </>
        );
    }

    function editarImagens(setShowModal, setSelectedImovel, imovel) {
        return (
            <>
                <i
                    className="fas fa-images mx-4 text-2xl text-gray-100 hover:scale-110 transition duration-500 cursor-pointer hover:translate-x-2 "
                    onClick={() => {
                        props.setShowModal(true);
                        props.setSelectedImovel(imovel);
                    }}
                />
            </>
        );
    }

    function comPaginacao(){
        return(
            <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                    <span className="flex items-center col-span-3"> Showing 21-30 of 100 </span>
                    <span className="col-span-2"></span>
                    {/* /* <!-- Pagination --> */}
                    <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                        <nav aria-label="Table navigation">
                            <ul className="inline-flex items-center">
                                <li>
                                    <button
                                        className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Previous"
                                    >
                                        <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </span>
                </div>
        )
    }

    return (
        <div className="mt-4 mx-4">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-100 uppercase border-b dark:border-gray-700 bg-blue-700 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">Imóvel</th>
                                <th className="px-4 py-3">Cadastrar anuncio</th>
                                <th className="px-4 py-3">Editar imagens</th>
                                <th className="px-4 py-3">Deletar </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            {props.imoveis?.map((imovel, i) => (
                                <tr key={i} className=" first-letter:capitalize bg-gray-800 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-900 text-gray-100 dark:text-gray-400 " >
                                    
                                    <td className="px-4 py-3" onClick={ ()=>{ navigate("/editar-imovel/"+imovel.id_imovel)}}>
                                        <div className="flex items-center text-sm">
                                            <div className="relative hidden w-14 h-14 mr-3  md:block">
                                                <img
                                                    className="object-cover w-full h-full "
                                                    src={imovel.img_principal}
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <div
                                                    className="absolute inset-0 rounded-full shadow-inner"
                                                    aria-hidden="true"
                                                ></div>
                                            </div>
                                            <div>
                                                <p className="first-letter:capitalize font-semibold text-base" >{imovel.cidade}</p>
                                                <p className="first-letter:capitalize text-xs text-gray-100 dark:text-gray-400">{imovel.rua}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">{compAnuncios(props.anuncios, imovel)}</td>
                                    <td className="px-4 py-3 text-xs">
                                        {editarImagens(props.setShowModal, props.setSelectedImovel, imovel)}
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        {/* deletar imóvel */}
                                        <i
                                            className="fas fa-trash-alt text-2xl mx-4 hover:scale-110 transition duration-500 cursor-pointer hover:translate-x-2"
                                            onClick={() => props.handleDeleteImovel(imovel.id_imovel)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {comPaginacao()}
            </div>
        </div>
    );
}
