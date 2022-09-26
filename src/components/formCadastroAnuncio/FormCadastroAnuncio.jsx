import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function FormCadastroAnuncio() {
    const navigate = useNavigate();
    let { id_usuario, id_imovel } = useParams();


    function handleSubmit(e) {
        try {
            e.preventDefault();
            let data = {
                titulo: e.target.tituloAnuncio.value,
                descricao_anuncio: e.target.descricaoAnuncio.value,
                aceita_animal: e.target.aceitaAnimal.value,
                restricao_sexo: e.target.restricaoSexo.value,
                restricao_fumante: e.target.restricaoFumante.value,
                valor_aluguel: Number(e.target.valorAluguel.value),
                status: 1,
                imovel_usuario_id_usuario: id_usuario,
                imovel_id_imovel: id_imovel,
            };
            axios
                .post("http://localhost:3003/anuncio", data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    navigate("/minha-conta");
                    alert("Anuncio cadastrado com sucesso!");
                })
                .catch((error) => {
                    alert(error.response.data);
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id="formCadastroPet">
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label
                            for="tituloAnuncio"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Título do anúncio
                        </label>
                        <input
                            type="text"
                            id="tituloAnuncio"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Casa com quintal"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="aceitaAnimal"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Aceita animais?
                        </label>
                        <select
                            id="aceitaAnimal"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        >
                            <option value="aceita">Sim</option>
                            <option value="pequeno-porte">Apenas animais de pequeno porte</option>
                            <option value="nao">Não</option>
                        </select>
                    </div>
                    <div>
                        <label
                            for="restricaoSexo"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Possui restrição de gênero?
                        </label>
                        <select
                            id="restricaoSexo"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Não"
                            required
                        >
                            <option value="nao-possui">Não</option>
                            <option value="apenas-homem"> Apenas homens</option>
                            <option value="apenas-mulher">Apenas mulheres</option>
                        </select>
                    </div>
                    <div>
                        <label
                            for="restricaoFumante"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Possui restrição de fumantes?
                        </label>
                        <select
                            id="restricaoFumante"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Não"
                            required
                        >
                            <option value="nao-aceita-fumante">Sim</option>
                            <option value="aceita-fumante">Não</option>
                        </select>
                    </div>
                    <div>
                        <label
                            for="valorAluguel"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Valor do aluguel
                        </label>
                        <input
                            type="number"
                            id="valorAluguel"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Casa com quintal"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label
                        for="descricaoAnuncio"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Descrição do anúncio
                    </label>
                    <textarea
                        id="descricaoAnuncio"
                        className="bg-gray-50 border h-40 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Descrição do anúncio"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-10 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
