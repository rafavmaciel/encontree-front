import axios from "axios";
import React, { useState, useContext } from "react";
import UserContext from "../../redux/UserReducer";
import { useNavigate } from "react-router-dom";

export default function FormCadastroUsuario() {
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        let usuario = {
            nome: event.target.nomeUser.value,
            email: event.target.email.value,
            cpf: event.target.cpfUser.value,
            telefone: event.target.telUser.value,
            idade: event.target.idadeUser.value,
            sexo: event.target.sexoUser.value,
        };
        axios
            .post(process.env.REACT_APP_BASE_URL_LOCAL+"user", usuario, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/minha-conta");
            })
            .catch((error) => {
                console.log(error);
                tratarErros(error)
            });
    }

    function tratarErros(error){
        if(error){
            alert(error.response.data);
        }
    }

    return (
        <form onSubmit={handleSubmit} id="formCadastroPet">
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                    <label for="nomeUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Nome do Usuario
                    </label>
                    <input
                        type="text"
                        id="nomeUser"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Joly"
                        required
                    />
                </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Email
                    </label>
                    <input
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="exemple@gmail.com"
                        disabled
                        value={state.user.email}
                        required
                    />
                </div>
                <div>
                    <label for="cpfUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        CPF
                    </label>
                    <input
                        id="cpfUser"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="12345678900"
                        pattern="[0-9]{11}"
                    />
                </div>
                <div>
                    <label for="telUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Telefone para contato
                    </label>
                    <input
                        type="tel"
                        id="telUser"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="81999124678"
                        pattern="[0-9]{11}"
                        required
                    />
                </div>
                <div>
                    <label for="estadoUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Idade
                    </label>
                    <input
                        type="number"
                        id="idadeUser"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="18"
                        required
                    />
                </div>
                <div>
                    <label for="sexoUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Sexo
                    </label>
                    <select
                        id="sexoUser"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                    >
                        <option value="1">Feminino</option>
                        <option value="0">Masculino</option>
                    </select>
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
