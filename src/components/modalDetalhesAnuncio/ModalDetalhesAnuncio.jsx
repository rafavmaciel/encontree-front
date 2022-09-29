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
                <div className="relative w-3/3 p-10 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex flex-col mb-4 items-between justify-between">
                        <h2 className="text-2xl font-bold mx-2">{props.anuncio.titulo}</h2>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                        {console.log(props)}
                        <CarrouselImagens
                            tratarImagem={tratarImagem}
                            imgs={props.anuncio.url_imagens.imagens}
                            img_principal={props.anuncio.img_principal}
                        />
                        <div className="px-3">
                            <div className="flex flex-col  ">
                                <p className="text-xl font-bold text-blue-700 ">Caracteristicas:</p>
                            </div>
                            <i className="fas fa-map-marker-alt mb-3 fa-lg mt-[3px] inline-flex items-center text-black capitalize">
                                {props.anuncio.cidade + "-" + props.anuncio.estado}
                            </i>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-blue-700 capitalize">Bairro:</p>
                                <p className="text-l font-bold ml-2 capitalize">{props.anuncio.bairro}</p>
                            </div>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-blue-700">Número:</p>
                                <p className="text-l font-bold ml-2">{props.anuncio.numero}</p>
                            </div>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-blue-700">Cep:</p>
                                <p className="text-l font-bold ml-2">{props.anuncio.cep}</p>
                            </div>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-blue-700 capitalize">Tipo do imóvel:</p>
                                <p className="text-l font-bold ml-2 capitalize">{props.anuncio.tipo_imovel}</p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-11 mx-3">
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-blue-700">Possui garagem:</p>
                                <p className="text-l font-bold ml-2">{props.anuncio.garagem_vaga ? "Sim" : "Não"}</p>
                            </div>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-blue-700">Banheiro(s):</p>
                                <p className="text-l font-bold ml-2">{props.anuncio.quantidade_banheiros}</p>
                            </div>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-blue-700">Quarto(s):</p>
                                <p className="text-l font-bold ml-2">{props.anuncio.quantidade_quartos}</p>
                            </div>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-blue-700">Acetia animais ?:</p>
                                <p className="text-l font-bold ml-2 capitalize">{props.anuncio.aceita_animal}</p>
                            </div>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-blue-700"> Restrição de gênenro: </p>
                                <p className="text-l font-bold ml-2 capitalize">{props.anuncio.restricao_sexo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col ">
                            <p className="text-lg font-bold">Descrição:</p>
                        </div>
                        <p className="text-l ">{props.anuncio.descricao_anuncio}</p>
                        {props.anuncio.ponto_referencia ? (
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-blue-700">Ponto de referência:</p>
                                <p className="text-l font-bold ml-2 capitalize text-left break-all max-w-30 ">
                                    {props.anuncio.ponto_referencia}
                                </p>
                            </div>
                        ) : null}
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


