import FormCadastroAnuncio from "../../components/formCadastroAnuncio/FormCadastroAnuncio";

export default function CadastroAnuncio() {
    return (
        <div className="CadastroAnuncio">
            <div className="max-w-5xl mx-auto bg-white p-16">
                <p className="mb-10 text-xl">Cadastro do Anuncio</p>
                <FormCadastroAnuncio />
            </div>
        </div>
    );
}