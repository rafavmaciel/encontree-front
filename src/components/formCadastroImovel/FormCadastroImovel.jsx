import { estadosBrasileiros } from "../../content/dadosFormulario";
import { storage } from "../../services/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function FormCadastroImovel() {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();
    let { id_usuario } = useParams();

    async function handleSubmit(e) {
        try {
            console.log(id_usuario);
            e.preventDefault();
            const { files } = e.target.fotos;
            var urlsImagens = [];
            let imagens = [];
            Object.keys(files).forEach(async (key) => {
                const imagem = files[key];
                imagens.push(imagem);
            });
            console.log(imagens);
            await Promise.all(
                imagens.map(async (imagem) => {
                    await new Promise((resolve, reject) => {
                        const storageRef = ref(storage, `images/${imagem.name}`);
                        const uploadTask = uploadBytesResumable(storageRef, imagem);
                        uploadTask.on(
                            "state_changed",
                            (snapshot) => {
                                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                setProgress(progress);
                            },
                            (error) => {
                                reject(error);
                            },
                            () => {
                                getDownloadURL(uploadTask.snapshot.ref)
                                    .then((downloadURL) => {
                                        urlsImagens.push(downloadURL);
                                        console.log(urlsImagens);
                                        resolve(urlsImagens);
                                    })
                                    .catch((error) => {
                                        reject(error);
                                    });
                            }
                        );
                    });
                })
            );
            const data = {
                rua: e.target.rua.value,
                bairro: e.target.bairro.value,
                cidade: e.target.cidade.value,
                estado: e.target.estado.value,
                cep: e.target.cep.value,
                ponto_referencia: e.target.pontoReferencia.value,
                quantidade_quartos: e.target.quantidadeQuartos.value,
                quantidade_banheiros: e.target.quantidadeBanheiros.value,
                garagem_vaga: e.target.vagaGaragem.value =="0"? false : true,
                tipo_imovel: e.target.tipoImovel.value,
                numero: e.target.numeroCasa.value,
                url_imagens: { imagens: urlsImagens },
                img_principal: urlsImagens[0],
                usuario_id_usuario: id_usuario,
            };
            await axios
                .post(`http://localhost:3003/imovel`, data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    alert("Imovel cadastrado com sucesso!");
                    navigate('/minha-conta');

                })
                .catch((error) => {
                    alert('Erro ao cadastrar imóvel:   '+error.response.data );
                }
            );
        } catch (error) {
            console.log(error);
        }
    }
    return (
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
                        required
                    />
                </div>
                {/* há vaga de garagem*/}
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
                        required
                    />
                </div>
                {/* upload de fotos */}
                <div>
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
                </div>
            </div>

            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-10 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
}
