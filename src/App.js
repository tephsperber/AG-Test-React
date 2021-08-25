import React from "react";

//Import css
import "./App.css";

//Import components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

//Import views
import Inicio from "./views/inicio/inicio";
import Covid19 from "./views/covid19/covid19";
import Precios from "./views/precios/precios";
import Contacto from "./views/contacto/contacto";
import Detail from "./views/detail/detail";
import Category from "./views/category/category";

//Import BrowserRouter as Router, Route and Switch
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Inicio}>
            <ItemListContainer />
          </Route>
          <Route path="/covid19" component={Covid19}></Route>
          <Route path="/precios" component={Precios}></Route>
          <Route path="/contacto" component={Contacto}></Route>
          <Route path="/category/:categoryId" component={Category}>
            <ItemListContainer />
          </Route>
          <Route path="/detail/:itemId" component={Detail}>
            <ItemDetailContainer />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
