import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

import { useNavigate } from 'react-router-dom'

function Header() {
    const Navigate = useNavigate();
    
    return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
       <h2>Encontree</h2>
      </a>


      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Entrar</button>
      </div>
    </header>
    );
  }
  
  export default Header;