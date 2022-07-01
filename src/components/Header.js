import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/list'}>Listado</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;