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
        dispatch({ type: "SET_FILTROS_PESQUISA", payload: filtros });
    }

    function handleLimparPesquisa() {
        document.getElementById("buscaEstado").value = "";
        document.getElementById("buscaCidade").value = "";
        document.getElementById("valorMaxAluguel").value = "";
        document.getElementById("restricaoSexo").value = "";
        document.getElementById("restricaoAnimal").value = "";
        let filtrosVazios = {
            estado: null,
            cidade: null,
            valorMaxAluguel: null,
            restricaoSexo: null,
            restricaoAnimal: null,
        };
        setFiltros(filtrosVazios);

        dispatch({ type: "SET_FILTROS_PESQUISA", payload: filtrosVazios });

    }

    return (
        <div className="w-60 max-h-300 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg p-10 transition duration-500 hover:scale-105 ">
            <div color="blue" size="sm">
                <h2 className="text-white text-3xl px-2 mb-4">Pesquisar</h2>
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
                            <option value={null} disabled="disabled" selected="true">
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
                            id = "buscaCidade"
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
                            id = "valorMaxAluguel"
                            type="text"
                            className="w-40 h-10 border-2 border-gray-300 rounded-md"
                            onChange={(e) => setFiltros({ ...filtros, valorMaxAluguel: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col items-center my-1">
                        <div color="gray" size="sm">
                            <h2 className="text-white text-sm">Restrição de gênenro</h2>
                        </div>
                        <select
                            className="w-40 h-10 border-2 border-gray-300 rounded-md"
                            onChange={(e) => setFiltros({ ...filtros, restricaoSexo: e.target.value })}
                            id="restricaoSexo"
                        >
                            <option value={null} disabled="disabled" selected="true">
                                Selecione
                            </option>
                            <option value="nao-possui">Não</option>
                            <option value="apenas-mulher">Aceita apenas mulher</option>
                            <option value="apenas-homem">Aceita apenas homem</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-center my-1">
                        <div color="gray" size="sm">
                            <h2 className="text-white text-sm">Aceita animal?</h2>
                        </div>
                        <select
                            className="w-40 h-10 border-2 border-gray-300 rounded-md"
                            onChange={(e) => setFiltros({ ...filtros, restricaoAnimal: e.target.value })}
                            id="restricaoAnimal"
                        >
                            <option value={null} disabled="disabled" selected="true">
                                Selecione
                            </option>
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
                    className=" bg-gradient-to-r text-white from-gray-900 via-gray-800 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-300 shadow-lg shadow-gray-100/50 dark:shadow-lg dark:shadow-gray-800/80 rounded-lg px-5 py-2.5 my-3"
                    onClick={handleClick}
                >
                    Pesquisar
                </button>
                {/* limpar pesquisa */}
                <button
                    className="bg-gradient-to-r text-gray-900 from-gray-100 via-gray-200 to-gray-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-800 dark:focus:ring-gray-300 shadow-lg shadow-gray-100/50 dark:shadow-lg py-2 px-4 mt-2 rounded"
                    onClick={handleLimparPesquisa}
                >
                    Limpar
                </button>
            </div>
        </div>
    );
}
