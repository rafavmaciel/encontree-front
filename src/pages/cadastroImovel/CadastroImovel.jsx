import FormCadastroImovel from "../../components/formCadastroImovel/FormCadastroImovel";

export default function CadastroImovel() {
    return (
        <div className="CadastroImovel">
            <div className="max-w-5xl mx-auto bg-white p-16">
                <p className="mb-10 text-xl">Cadastro do Imovel</p>
                    <FormCadastroImovel />
               
            </div>
        </div>
    );
}