import FormEditarImovel from "../../components/formEditarImovel/FormEditarImovel"

export default function EditarImovel(props) {
    return(
        <div className="EditarImovel">
            <div className="max-w-5xl mx-auto bg-white p-16">
                <p className="mb-10 text-xl">Editar Imovel</p>
                <FormEditarImovel />
            </div>
        </div>

    )
}