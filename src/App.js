import React from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Inicio from "./views/home/home";
import Information from "./views/information/information";
import Precios from "./views/prices/prices";
import Contacto from "./views/contact/contact";
import Item from "./views/item/item";
import Category from "./views/category/category";
import CartView from "./views/cartview/cartview";
import CheckOut from "./views/checkout/checkout";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Inicio}></Route>
            <Route path="/information" component={Information}></Route>
            <Route path="/prices" component={Precios}></Route>
            <Route path="/contact" component={Contacto}></Route>
            <Route path="/category/:categoryId" component={Category} />
            <Route path="/item/:itemId" component={Item}></Route>
            <Route path="/cartview" component={CartView}></Route>
            <Route path="/checkout" component={CheckOut}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
