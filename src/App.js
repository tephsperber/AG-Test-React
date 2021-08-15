import React from "react";

//Import css
import "./App.css";

//Import components
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CardComponent from "./components/CardComponent/CardComponent";
import Footer from "./components/Footer/Footer";

//Import images
import Foto1 from "./components/CardComponent/foto1.png";
import Foto2 from "./components/CardComponent/foto2.jpeg";
import Foto3 from "./components/CardComponent/foto3.jpeg";

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavBar title="Resultados en el día" />
<div> 
  <ItemCount></ItemCount>
</div>
        <div className="List-Container">
          <ItemListContainer greeting="Estudios de COVID-19" />
          <ItemListContainer greeting="Enfermeros a domicilio en CABA y GBA" />
        </div>
        <div className="Cards-Container">
          <CardComponent
            titleCard="Resultados"
            tests="RT PCR - Antígenos - Anticuerpos"
            description="Realizando el estudio hasta las 13hs, el resultado será notificado a las 22hs del mismo día.

          En caso de hacerlo luego de ese horario, se comunicará el resultado a las 22hs del día siguiente.
          
          Turnos en el día. Consultar por urgencias.
          
          "
            img={Foto1}
          />

          <CardComponent
            titleCard="A domicilio"
            tests="CABA y GBA"
            description="Realizamos todos nuestros estudios a domicilio en C.A.B.A. y G.B.A.

          Se coordina con el paciente el día y horario en el cual el enfermero se acercará al domicilio a efectuar el estudio.
          Se informarán al paciente los datos del enfermero asignado.
          "
            img={Foto2}
          />

          <CardComponent
            titleCard="Precios"
            tests="CABA y GBA"
            description="Podes calcular el costo de tu Test COVID-19 en nuestro 

          Se abona a través de MercadoPago.
          
          Empresas, grupos y agencias de viaje, consultar precios especiales.
          
          Otro tipo de análisis clínicos se cotizarán enviando la órden médica por wWhatsapp o Mail.
          "
            img={Foto3}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
