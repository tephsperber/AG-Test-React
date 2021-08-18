import React from "react";

//Import css
import "./App.css";

//Import components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
