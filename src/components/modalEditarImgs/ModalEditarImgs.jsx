import axios from "axios";
export default function ModalEditarImgs(props) {
    async function handleClick(img, imovel) {
        try {
            await axios.put(process.env.REACT_APP_BASE_URL_LOCAL+"imovel-alt-imagem/?id_imovel=" + imovel.id_imovel, {
                img_principal: img,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            alert("Imagem principal alterada com sucesso!");
            window.location.reload();
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
                            <div className="mx-2 my-2 hover:scale-105 hover:bg-blue-500 hover:border-2 hover:border-blue-500">
                                {/* icone de deletar */}
                                <a key={i} onClick={() => handleClick(img, props.imovel)}>
                                    <img key={i} src={img} style={{ width: "150px" }} alt="img-blur-shadow" />
                                </a>
                            </div>
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
