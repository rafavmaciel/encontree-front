import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/index';
import './styles.scss'
import img_lp from '../../img/landingpageCropped.jpg'

function LandingPage() {
    return (
    <>
        <Header/>

        <div className="card container blue" >
            <div className="row">
                <div className="col-12 col-lg-7">
                    <div className="card-body p-4">
                        <h5 className="card-title title">Bem-vindo ao Encontree</h5>
                        <p className="card-text texto">Agora você vai poder encontrar, de forma fácil e rápida, imóveis próximos da sua faculdade. Filtre por diversas categorias e encontre a moradia ideal para você ou se já possui um local, anuncie para que outras pessoas possam morar com você e dividir os custos. </p>
                        <div className='col-lg-6 offset-3'>

                            <button type="submit" className="botao white mt-5">Cadastre-se Gratuitamente</button>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-lg-5">
                    <img src={img_lp} className="card-img img" />
                </div>                
            </div>
        </div>

    </>
    );
  }
  
  export default LandingPage;