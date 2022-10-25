import GridPrincipal from "../../components/gridPrincipal/GridPrincipal";
import { useState, useEffect, useContext } from "react";
import LateralSearch from "../../components/lateralSearch/LateralSearch";
import axios from "axios";
import UserContext from "../../redux/UserReducer";
import ReactPaginate from "react-paginate";
import "./style.css";
import ModalDetalhesAnuncio from "../../components/modalDetalhesAnuncio/ModalDetalhesAnuncio";

export default function Home() {
    const [anuncios, setAnuncios] = useState([]);
    const { state, dispatch } = useContext(UserContext);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 6;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(anuncios.length / usersPerPage);
    const [modalStatus, setModalStatus] = useState(false);
    const [anuncioModal, setAnuncioModal] = useState({});

    function changeModal() {
        setModalStatus(!modalStatus);
    }
    function abrirModal(anuncio) {
        setModalStatus(true);
        setAnuncioModal(anuncio);
        //console.log(anuncioModal);
    }

    //formata o tamanho do texto do anuncio
    function descriptionLength(description) {
        if (description) {
            if (description.length > 70) {
                return description.substring(0, 70) + "...";
            } else {
                return description;
            }
        }
    }

    function tituloLength(titulo) {
        if (titulo) {
            if (titulo.length > 30) {
                return titulo.substring(0, 30) + "...";
            } else {
                return titulo;
            }
        }
    }

    function filtrarAnuncios() {
        try {
            let filtros = state.filtrosPesquisa;
            let parametros = {
                estado: filtros.estado,
                cidade: filtros.cidade,
                valor_alugel_maximo: filtros.valorMaxAluguel,
                restricao_sexo: filtros.restricaoSexo,
                aceita_animal: filtros.restricaoAnimal,
            };
            console.log(parametros);
            axios
                .post(
                    process.env.REACT_APP_BASE_URL_LOCAL + "anuncio-busca-personalizada",
                    { parametros: parametros },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    console.log(response);
                    setAnuncios(response.data);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL_LOCAL + "anuncio-all").then((response) => {
            setAnuncios(response.data);
        });
    }, []);

    useEffect(() => {
        filtrarAnuncios();
    }, [state.filtrosPesquisa]);

    function itensGrid() {
        return (
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {anuncios.slice(pagesVisited, pagesVisited + usersPerPage).map((anuncio) => {
                    return anuncio.status ? (
                        <a onClick={() => abrirModal(anuncio)}  >
                            <GridPrincipal
                                key={anuncio.id}
                                id={anuncio.id}
                                img={anuncio.img_principal}
                                title={tituloLength(anuncio.titulo)}
                                description={descriptionLength(anuncio.descricao_anuncio)}
                                local={anuncio.estado + " - " + anuncio.cidade}
                            />
                        </a>
                    ) : null;
                })}
            </div>
        );
    }

    return (
        <>
            <div className="mt-14">
                <div className="flex flex-row">
                    <div className="flex flex-col-3 place-items-start mt-20 mx-4 ">
                        <LateralSearch />
                    </div>
                    <div className="col-9">
                        {itensGrid()}
                        <div className="flex justify-center text-white">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {modalStatus ? <ModalDetalhesAnuncio changeModal={changeModal} anuncio={anuncioModal} /> : null}
        </>
    );
}
