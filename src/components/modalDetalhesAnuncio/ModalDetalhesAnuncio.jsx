import CarrouselImagens from "../carrouselImagens/CarrouselImagens";

export default function ModalDetalhesAnuncio(props) {
    function tratarImagem(arrayImgs) {
        return arrayImgs.map((img) => {
            return {
                image: img,
            };
        });
    }

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => props.changeModal()}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-2/3 p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex flex-col items-between justify-between">
                        <h2 className="text-2xl font-bold">{props.anuncio.titulo}</h2>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                        {console.log(props)}
                        <CarrouselImagens tratarImagem={tratarImagem} imgs={props.anuncio.url_imagens.imagens} />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col ">
                            <p className="text-lg font-bold">Descrição:</p>
                        </div>
                        <p className="text-l">{props.anuncio.descricao_anuncio}</p>
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
