import GridPrincipal from "../../components/gridPrincipal/GridPrincipal";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    const [anuncios, setAnuncios] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL_LOCAL+ "anuncio-all").then((response) => {
            setAnuncios(response.data);
        });
    }, []);


    return(
        <>
        <div className="mt-14">
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        anuncios.map((anuncio) => {
                            return (
                                anuncio.status?(
                                <GridPrincipal
                                    key={anuncio.id}
                                    img={anuncio.img_principal}
                                    title={anuncio.titulo}
                                    description={anuncio.descricao_anuncio}
                                    local={anuncio.estado}
                                />):null
                            );
                        })
                    }
                </div>
        </div>
    </>
    )
}
