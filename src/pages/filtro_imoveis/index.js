import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/index';
import './styles.scss'

function FiltroImoveis() {

    return (
    <>
        <Header/>
        <div className='container blue col-lg-6 col-sm-12'>
   
            <h4 className='d-flex justify-content-center mb-4'>Procurar Imóvel - Filtros</h4>
   
            <form className='container col-sm-12 col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="inputFaixaPreco" className="form-label text">Faixa de Preço</label>
                        
                            <table>
                                <tr>
                                    <td><label htmlFor="inputMenorValor">De:  </label></td>
                                    <td><input type="number" className="form-control" /></td>
                                    <td><label htmlFor="inputMaiorValor">Até:  </label></td>
                                    <td><input type="number" className="form-control" /></td>        
                                </tr>
                            </table>
                                
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputBairro" className="form-label text">Bairro</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className='alinhamento'>
                        <button type="submit" className="botao green">Entrar</button>
                    </div>                 
                    <p className='text d-flex justify-content-center mt-3'>Ou</p>
                    <div className='alinhamento'>
                        <button type="submit" className="botao white ">Entrar com Google</button>
                    </div>
                </form>

        </div>
    </>
    );
}

export default FiltroImoveis;