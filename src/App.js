import React from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Inicio from "./views/home/home";
import Covid19 from "./views/covid19/covid19";
import Precios from "./views/prices/prices";
import Contacto from "./views/contact/contact";
import Detail from "./views/detail/detail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

//el componente provider envuelve la app para poder acceder al context desde donde queramos
const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Inicio}></Route>
            <Route path="/covid19" component={Covid19}></Route>
            <Route path="/prices" component={Precios}></Route>
            <Route path="/contact" component={Contacto}></Route>
            <Route path="/home/:categoryId" component={Inicio}></Route>
            <Route path="/detail/:itemId" component={Detail}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
