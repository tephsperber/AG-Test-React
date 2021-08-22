import React from "react";

//Import css
import "./App.css";

//Import components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
