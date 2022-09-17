import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/index';
import './styles.scss'

function PerfilUsuario() {

    const nome = 'Ana Júlia'; //Pegamos esses valores da API
    const sexo = 'F';
    const sobre = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id nulla finibus, bibendum ex cursus, dictum arcu. Sed sollicitudin, dui et fermentum sagittis.'
    const tags = 'gosta de gatos, não aceita fumantes, tranquila'
    const preferencias = 'Manter a moradia limpa é essencial, não gosto de bagunça'

    return (
    <>
        <Header/>
        <div className='container blue col-lg-6 col-sm-12'>
            <div>
                <button type="submit" className="botao_voltar">Voltar</button>

            </div>

            <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>

            </div>
            <div className='perfil'>
                <h3>
                    {sexo === 'M' ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                        </svg>  
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
                        </svg>
    
                        }
                    {nome}
                </h3>

                <h6>Sobre</h6>
                <p>{sobre}</p>

                <h6>Tags</h6>
                <p className='tags'>{tags}</p>

                <h6>Preferências</h6>
                <p className='espaco_bottom'>{preferencias}</p>

                <button type="submit" className="botao white">Conversar</button>
            </div>


        </div>
    </>
    );
}

export default PerfilUsuario;