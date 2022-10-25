import { storage  } from "../../services/firebase";
import { ref, uploadBytesResumable, getDownloadURL,deleteObject  } from "firebase/storage";
import { useState } from "react";
import axios from "axios";
export default function ModalEditarImgs(props) {
    async function handleClick(img, imovel) {
        try {
            await axios.put(
                process.env.REACT_APP_BASE_URL_LOCAL + "imovel-alt-imagem/?id_imovel=" + imovel.id_imovel,
                {
                    img_principal: img,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            alert("Imagem principal alterada com sucesso!");
            props.changeModal();
            props.renderComponent();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleDelete(img, imovel) {
        try {
            //deleta a imagem do firebase
            const storageRef = ref(storage, "images/" + img);
            deleteObject(storageRef);
            //deleta a imagem do banco de dados
            imovel.url_imagens.imagens = imovel.url_imagens.imagens.filter((item) => item !== img); 
            let data = {
                url_imagens:{"imagens":[imovel.url_imagens.imagens]} 
            };
            console.log(data);
            await axios.put(process.env.REACT_APP_BASE_URL_LOCAL + "imovel?id_imovel=" + imovel.id_imovel, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            alert("Imagem excluída com sucesso!");
            props.renderComponent();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => props.changeModal()}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-2/3 p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex flex-row items-center justify-center">
                        {props.imovel.url_imagens.imagens.map((img, i) => (
                            <>
                                <div className="mx-2 my-2   hover:scale-105 hover:bg-blue-500 hover:border-2 hover:border-blue-500">
                                    <a
                                        onClick={() => handleDelete(img, props.imovel)}
                                        className="flex flex-col transition duration-500 rounded-xl  items-center my-2 hover:scale-105"
                                    >
                                        <i className="fas fa-trash-alt text-red-500 "></i>
                                    </a>
                                    <a key={i} onClick={() => handleClick(img, props.imovel)}>
                                        <img
                                            key={i}
                                            src={img}
                                            style={{ width: "150px" }}
                                            alt="img-blur-shadow"
                                            title="Definir como imagem principal"
                                        />
                                    </a>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="flex-end">
                        <button
                            className="bg-black hover:bg-stone-300 text-white font-bold py-2 px-4 rounded"
                            onClick={() => props.changeModal()}
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
