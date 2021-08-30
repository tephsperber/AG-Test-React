import React from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Inicio from "./views/inicio/inicio";
import Covid19 from "./views/covid19/covid19";
import Precios from "./views/precios/precios";
import Contacto from "./views/contacto/contacto";
import Detail from "./views/detail/detail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Inicio}></Route>
          <Route path="/covid19" component={Covid19}></Route>
          <Route path="/precios" component={Precios}></Route>
          <Route path="/contacto" component={Contacto}></Route>
          <Route path="/inicio/:categoryId" component={Inicio}></Route>
          <Route path="/detail/:itemId" component={Detail}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
