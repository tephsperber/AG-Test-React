import React from "react";

//Import css
import "./NavBar.css";

//Import image - Logo
import Logo from "./logo.png";

const NavBar = () => {
  return (
    <header>
      <img src={Logo} className="logo" alt="Logo" />
      <h1 className="tituloHeader">Resultados en el día</h1>
      <nav>
        <div className="menu">
          <ul>
            <li>
              <a className="nav-link " href="index.html">
                Inicio
              </a>
            </li>
            <li>
              <a className="nav-link " href="covid.html">
                COVID-19
              </a>
            </li>
            <li>
              <a className="nav-link" href="precios.html">
                Precios
              </a>
            </li>
            <li>
              <a className="nav-link" href="contacto.html">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
