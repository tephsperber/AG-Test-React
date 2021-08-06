const NavBar = () => {
    return <nav>
        <h1>AG-Test</h1>
        <div className="menu">
            <ul>
                <li>
                    <a className="nav-link " href="index.html">Inicio</a>
                </li>

                <li>
                    <a className="nav-link " href="covid.html">COVID-19</a>
                </li>
                <li>
                    <a className="nav-link" href="precios.html">Precios</a>
                </li>
                <li>
                    <a className="nav-link" href="contacto.html">Contacto</a>
                </li>
            </ul>
        </div>
    </nav>
        ;
};
export default NavBar;