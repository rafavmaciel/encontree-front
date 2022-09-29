import { estadosBrasileiros } from "../../content/dadosFormulario";
import { useState, useContext } from "react";
import UserContext from "../../redux/UserReducer";

export default function LateralSearch(props) {
    const { state, dispatch } = useContext(UserContext);
    const [filtros, setFiltros] = useState({
        estado: null,
        cidade: null,
        valorMaxAluguel: null,
        restricaoSexo: null,
        restricaoAnimal: null,
    });

    function handleClick() {
        console.log(filtros);
        dispatch({ type: "SET_FILTROS_PESQUISA", payload: filtros });
    }

    function handleLimparPesquisa(e) {
        setFiltros({
            estado: null,
            cidade: null,
            valorMaxAluguel: null,
            restricaoSexo: null,
            restricaoAnimal: null,
        });

        dispatch({ type: "SET_FILTROS_PESQUISA", payload: filtros });
    }

    return (
        <div className="w-60 max-h-300 bg-blue-500 rounded-lg border-4 border-blue-200 p-10 transition duration-500 hover:scale-105 ">
            <div color="blue" size="sm">
                <h2 className="text-black text-2xl px-2 mb-4">Pesquisar</h2>
            </div>
            <div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center my-1">
                        <div color="gray" size="sm">
                            <h2 className="text-white text-sm">Estado</h2>
                        </div>
                        <select
                            className="w-40 h-10 border-2 border-gray-300 rounded-md"
                            id="buscaEstado"
                            onChange={(e) => setFiltros({ ...filtros, estado: e.target.value })}
                            placeholder="Estado"
                        >
                            <option value={null} disabled>
                                Selecione
                            </option>
                            {estadosBrasileiros.map((estado) => (
                                <option key={Object.keys(estado)} value={Object.keys(estado)}>
                                    {Object.values(estado)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col items-center my-1">
                        <div color="gray" size="sm">
                            <h2 className="text-white text-sm">Cidade</h2>
                        </div>
                        <input
                            type="text"
                            className="w-40 h-10 border-2 border-gray-300 rounded-md"
                            onChange={(e) => setFiltros({ ...filtros, cidade: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col items-center my-1">
                        <div color="gray" size="sm">
                            <h2 className="text-white text-sm">Valor máximo</h2>
                        </div>
                        <input
                            type="text"
                            className="w-40 h-10 border-2 border-gray-300 rounded-md"
                            onChange={(e) => setFiltros({ ...filtros, valorMaxAluguel: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col items-center my-1">
                        <div color="gray" size="sm">
                            <h2 className="text-white text-sm">Restrição de gênenro</h2>
                        </div>
                        <select className="w-40 h-10 border-2 border-gray-300 rounded-md" onChange={ (e)=> setFiltros({ ...filtros, restricaoSexo: e.target.value })} >
                            <option value="nao-possui">Não</option>
                            <option value="apenas-mulher">Aceita apenas mulher</option>
                            <option value="apenas-homem">Aceita apenas homem</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-center my-1">
                        <div color="gray" size="sm">
                            <h2 className="text-white text-sm">Aceita animal?</h2>
                        </div>
                        <select className="w-40 h-10 border-2 border-gray-300 rounded-md" onChange={ (e)=> setFiltros({ ...filtros, restricaoAnimal: e.target.value })} >
                            <option value="nao-">Não</option>
                            <option value="pequeno-porte">Aceita pequeno porte</option>
                            <option value="aceita">Aceita</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <button
                    type="button"
                    class="text-white bg-gray-800 mt-3 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={handleClick}
                >
                    Pesquisar
                </button>
                {/* limpar pesquisa */}
                <button
                    className="bg-neutral-100 hover:bg-stone-300 text-black font-bold py-2 px-4 mt-3 rounded"
                    onClick={(e) => handleLimparPesquisa(e)}
                >
                    Limpar
                </button>
            </div>
        </div>
    );
}
