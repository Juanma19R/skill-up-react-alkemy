// Styles
import '../css/bootstrap.min.css';

function Footer() {
    return (
        <footer>
            <nav className="navbar fixed-bottom bg-light">
                <div className="container-fluid">
                    <ul>
                        <li>
                            <a href="https://instagram.com" target='_blank' rel='noreferrer'>IG</a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target='_blank' rel='noreferrer'>TW</a>
                        </li>
                    </ul>
                </div>
                <p>Copyright Alkemy Challenge - Ruggeri Juan</p>
            </nav>
        </footer>
    );
}

export default Footer;