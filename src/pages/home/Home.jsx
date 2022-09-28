import GridPrincipal from "../../components/gridPrincipal/GridPrincipal";
import { useState, useEffect, useContext } from "react";
import LateralSearch from "../../components/lateralSearch/LateralSearch";
import axios from "axios";
import UserContext from "../../redux/UserReducer";
import ReactPaginate from "react-paginate";
import "./style.css";

export default function Home() {
    const [anuncios, setAnuncios] = useState([]);
    const { state, dispatch } = useContext(UserContext);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 3;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(anuncios.length / usersPerPage);

    function filtrarAnuncios() {
        try {
            let filtros = state.filtrosPesquisa;
            if (filtros.estado != null || filtros.cidade != null || filtros.valorMaxAluguel != null) {
                let parametros = {
                    estado: filtros.estado,
                    cidade: filtros.cidade,
                    valor_alugel_maximo: filtros.valorMaxAluguel,
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
            }
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
                        <GridPrincipal
                            key={anuncio.id}
                            img={anuncio.img_principal}
                            title={anuncio.titulo}
                            description={anuncio.descricao_anuncio}
                            local={anuncio.estado}
                        />
                    ) : null;
                })}
            </div>
        );
    }

    return (
        <>
            <div className="mt-14">
                <div className="flex flex-row">
                    <div className="flex fle-col-3 place-items-start mt-20 mx-5 ">
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
        </>
    );
}
