import React from "react";

//Import component
import { CartWidget } from "../CartWidget/CartWidget";

//Import css
import "./NavBar.css";

//Import image - Logo
import Logo from "./logo.png";

//Import Link
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} className="logo" alt="Logo" />
      </Link>
      <h1 className="tituloHeader">Resultados en el día</h1>
      <nav>
        <div className="menu">
          <ul>
            <Link to="/">
              <li className="nav-link ">Inicio</li>
            </Link>
            <Link to="/covid19">
              <li className="nav-link ">COVID-19</li>{" "}
            </Link>
            <Link to="/category/CABA">
              <li className="nav-link ">CABA</li>{" "}
            </Link>
            <Link to="/category/GBA">
              <li className="nav-link ">GBA</li>{" "}
            </Link>
            <Link to="/precios">
              <li className="nav-link">Precios</li>
            </Link>
            <Link to="/contacto">
              <li className="nav-link">Contacto</li>
            </Link>
          </ul>
        </div>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
