import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { estadosBrasileiros } from "../../content/dadosFormulario";

export default function FormEditarImovel(props) {
    const navigate = useNavigate();
    let {id_imovel} = useParams();
    const [imovel, setImovel] = useState({});
    const [loadButton, setLoadButton] = useState(false);
    
    function getImovel() {
        axios.get(process.env.REACT_APP_BASE_URL_LOCAL +"imovel/?id_imovel="+ id_imovel).then((response) => {
            setImovel(response.data[0]);
            console.log(response.data[0]);
        }).catch((err) => {
            console.log(err);
            alert("Erro ao carregar imóvel");
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        setLoadButton(true);
        let data = {
            bairro: imovel.bairro,
            cep: imovel.cep,
            cidade: imovel.cidade,
            estado: imovel.estado,
            garagem_vaga: imovel.garagem_vaga== 0 ? false : true,
            numero: imovel.numero,
            ponto_referencia: imovel.ponto_referencia,
            rua: imovel.rua,
            quantidade_banheiros: imovel.quantidade_banheiros,
            quantidade_quartos: imovel.quantidade_quartos,
            tipo_imovel: imovel.tipo_imovel
        }
        axios.put(process.env.REACT_APP_BASE_URL_LOCAL + "imovel/?id_imovel="+ id_imovel, data).then((response) => {
            alert("Imóvel editado com sucesso");
            setLoadButton(false);
            navigate("/minha-conta");
            
        }).catch((err) => {
            console.log(err);
            alert("Erro ao editar imóvel");
            setLoadButton(false);
        });
    }



    useEffect(() => {
        getImovel();
    }, []);


    return(
        <form onSubmit={handleSubmit} id="formCadastroPet">
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
                <label for="rua" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Rua
                </label>
                <input
                    type="text"
                    id="rua"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Joly"
                    required
                    value={imovel.rua}
                    onChange={(e) => setImovel({ ...imovel, rua: e.target.value })}
                />
            </div>
            <div>
                <label for="bairro" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Bairro
                </label>
                <input
                    id="bairro"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Centro"
                    value={imovel.bairro}
                    onChange={(e) => setImovel({ ...imovel, bairro: e.target.value })}
                    required
                />
            </div>
            <div>
                <label for="cidade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Cidade
                </label>
                <input
                    id="cidade"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Garanhuns"
                    value={imovel.cidade}
                    onChange={(e) => setImovel({ ...imovel, cidade: e.target.value })}
                    required
                />
            </div>
            <div>
                <label for="estado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Estado
                </label>
                <select
                    id="estado"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="flowbite.com"
                    value={imovel.estado}
                    onChange={(e) => setImovel({ ...imovel, estado: e.target.value })}
                    required
                >
                    {estadosBrasileiros.map((estado) => (
                        <option key={Object.keys(estado)} value={Object.keys(estado)}>
                            {Object.values(estado)}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label for="cep" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Cep
                </label>
                <input
                    type="tel"
                    id="cep"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="55120000"
                    pattern="[0-9]{8}"
                    value={imovel.cep}
                    onChange={(e) => setImovel({ ...imovel, cep: e.target.value })}
                    required
                />
            </div>
            <div>
                <label
                    for="pontoReferencia"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Ponto de referência
                </label>
                <input
                    type="text"
                    id="pontoReferencia"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="próximo ao mercado"
                    value={imovel.ponto_referencia}
                    onChange={(e) => setImovel({ ...imovel, ponto_referencia: e.target.value })}
                />
            </div>
            <div>
                <label
                    for="quantidadeQuartos"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Quantidade de quartos
                </label>
                <input
                    type="number"
                    id="quantidadeQuartos"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1"
                    value={imovel.quantidade_quartos}
                    onChange={(e) => setImovel({ ...imovel, quantidade_quartos: e.target.value })}
                    required
                />
            </div>
            <div>
                <label
                    for="quantidadeBanheiros"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Quantidade de banheiros
                </label>
                <input
                    type="number"
                    id="quantidadeBanheiros"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1"
                    value={imovel.quantidade_banheiros}
                    onChange={(e) => setImovel({ ...imovel, quantidade_banheiros: e.target.value })}
                    required
                />
            </div>
            <div>
                <label
                    for="vagaGaragem"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Há garagem?
                </label>
                <select
                    id="vagaGaragem"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={imovel.garagem_vaga}
                    onChange={(e) => setImovel({ ...imovel, garagem_vaga: e.target.value })}
                >
                    <option value={0}>Sim</option>
                    <option value={1}>Não</option>
                </select>
            </div>
            <div>
                <label for="tipoImovel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Tipo de imóvel
                </label>
                <select
                    id="tipoImovel"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={imovel.tipo_imovel}
                    onChange={(e) => setImovel({ ...imovel, tipo_imovel: e.target.value })}
                >
                    <option>Casa</option>
                    <option>Apartamento</option>
                    <option>Kitnet</option>
                    <option>Flat</option>
                    <option>Outro</option>
                </select>
            </div>
            <div>
                <label for="numeroCasa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Número da casa
                </label>
                <input
                    type="number"
                    id="numeroCasa"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1"
                    value={imovel.numero}
                    onChange={(e) => setImovel({ ...imovel, numero: e.target.value })}
                    required
                />
            </div>
            {/* <div>
                <label for="fotos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Fotos
                </label>
                <input
                    type="file"
                    id="fotos"
                    multiple
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1"
                    required
                />
            </div> */}
        </div>
        {loadButton ? (
            <button
                type="submit"
                className="mt-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </button>
        ) : (
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-10 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Enviar
            </button>
        )}
    </form>
    )
}