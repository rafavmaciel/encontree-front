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
                <div className="relative w-2/3 p-10 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex flex-col mb-4 items-between justify-between">
                        <h2 className="text-2xl font-bold ">{props.anuncio.titulo}</h2>
                    </div>
                    <div className="flex flex-row items-start justify-start bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 pt-3 rounded-xl">
                        <div className="ml-4">
                        <CarrouselImagens 
                            tratarImagem={tratarImagem}
                            imgs={props.anuncio.url_imagens.imagens.split(",")} //split para transformar a string em array
                            img_principal={props.anuncio.img_principal}
                        />
                        </div>
                        <div className="px-3 sm: hidden md:hidden lg:block " >
                            
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-gray-100  capitalize">Localização:</p>
                            </div>
                                <p className="text-l  text-gray-300 ">{props.anuncio.cidade + "-" + props.anuncio.estado}</p>
                            <div className="flex flex-row  ">
                                <p className="text-l font-bold text-gray-100 capitalize">Bairro:</p>
                            </div>
                                <p className="text-l capitalize  text-gray-300">{props.anuncio.bairro}</p>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-gray-100">Número:</p>
                            </div>
                                <p className="text-l   text-gray-300" >{props.anuncio.numero}</p>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-gray-100">Cep:</p>
                            </div>
                                <p className="text-l   text-gray-300">{props.anuncio.cep}</p>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-gray-100 capitalize">Tipo do imóvel:</p>
                            </div>
                                <p className="text-l capitalize  text-gray-300">{props.anuncio.tipo_imovel}</p>
                        </div>
                        <div className="flex flex-col mx-3 sm:hidden md:hidden lg:block ">
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-gray-100 ">Possui garagem:</p>
                            </div>
                                <p className="text-l  text-gray-300">{props.anuncio.garagem_vaga ? "Sim" : "Não"}</p>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-gray-100">Banheiro(s):</p>
                            </div>
                                <p className="text-l  text-gray-300">{props.anuncio.quantidade_banheiros}</p>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-gray-100">Quarto(s):</p>
                            </div>
                                <p className="text-l text-gray-300 ">{props.anuncio.quantidade_quartos}</p>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-gray-100">Acetia animais ?:</p>
                            </div>
                                <p className="text-l capitalize  text-gray-300">{props.anuncio.aceita_animal}</p>
                            <div className="flex flex-row ">
                                <p className="text-l font-bold text-gray-100"> Restrição de gênenro: </p>
                            </div>
                                <p className="text-l   text-gray-300 capitalize">{props.anuncio.restricao_sexo}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-3">
                        <div className="flex flex-col ">
                            <p className="text-lg font-bold">Descrição:</p>
                        </div>
                        <p className="text-l flex-wrap ">{props.anuncio.descricao_anuncio}</p>
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
