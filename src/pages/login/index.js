import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/index';
import './styles.scss'

function Login() {
    return (
    <>
        <Header/>
        <div className='container'>
            <h1 className='d-flex justify-content-center'>Entrar</h1>
            <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>

            </div>

            <form className='container w-25'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text">Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text">Senha</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="botao green">Entrar</button>
                
                <p className='text d-flex justify-content-center'>Ou</p>
                <button type="submit" className="botao white">Entrar com Google</button>
            </form>

            <div className='container d-flex justify-content-center'>
                <p className='text'>Não possui conta?</p>
                <a href='?#' className='text'>Cadastre-se!</a>
            </div>

        </div>
    </>
    );
}

export default Login;