// Libraries
import { NavLink } from 'react-router-dom';

// Styles
import '../css/bootstrap.min.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={"/"}>AlkeFlix</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/list'}>Listado</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/contact'}>Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;