import React from "react";

//Import CSS
import "./ItemListContainer.css";

//Import List
import { List } from "semantic-ui-react";

//Import Component
import CardComponent from "../CardComponent/CardComponent";
import ItemCount from "../ItemCount/ItemCount";

//Import images
import Foto1 from "../CardComponent/foto1.png";
import Foto2 from "../CardComponent/foto2.jpeg";
import Foto3 from "../CardComponent/foto3.jpeg";


const ItemListContainer = ({ greeting }) => (
  <div>
    <List>
    <div className="itemListContainer">
      <List.Item>{greeting}</List.Item>
    </div>
    <div>
      <ItemCount stock={20} initial={0} onAdd={count =>console.log ("Agregaste", count, "productos al carrito")} />
    </div>
  </List>
  
   <div className="Cards-Container">
   <CardComponent
     titleCard="Resultados"
     tests="RT PCR - Antígenos - Anticuerpos"
     description="Realizando el estudio hasta las 13hs, el resultado será notificado a las 22hs del mismo día.

   En caso de hacerlo luego de ese horario, se comunicará el resultado a las 22hs del día siguiente.
   
   Turnos en el día. Consultar por urgencias.
   
   "
     img={Foto1}
     stock="0"

   />

   <CardComponent
     titleCard="A domicilio"
     tests="CABA y GBA"
     description="Realizamos todos nuestros estudios a domicilio en C.A.B.A. y G.B.A.

   Se coordina con el paciente el día y horario en el cual el enfermero se acercará al domicilio a efectuar el estudio.
   Se informarán al paciente los datos del enfermero asignado.
   "
     img={Foto2}
     stock="0"

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
     stock="0"

   />
 </div>
 </div>
);

export default ItemListContainer;
