import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/index';
import './styles.scss'
import img_lp from '../../img/landingpage.jpg'

function LandingPage() {
    return (
    <>
        <Header/>

        <div className="card mb-3 cotainer col-lg-8 offset-lg-2" >
            <div className="row no-gutters">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Bem-vindo ao Encontree</h5>
                        <p className="card-text">Agora você vai poder encontrar, de forma fácil e rápida, imóveis próximos da sua faculdade. Filtre por diversas categorias e encontre a moradia ideal para você ou se já possui um local, anuncie para que outras pessoas possam morar com você e dividir os custos.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={img_lp} className="card-img"  />
                </div>
                
            </div>
        </div>

    </>
    );
  }
  
  export default LandingPage;