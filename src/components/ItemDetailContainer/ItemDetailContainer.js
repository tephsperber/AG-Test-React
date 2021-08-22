import React, { useState } from "react";

//Import Component
import { ItemDetail } from "../ItemDetail/ItemDetail";

//Import image
import Foto1 from "./foto1.png";

function ItemDetailContainer() {
  const [getItems, setGetItems] = useState({});

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const getItems = {
        id: 1,
        title: "Test PCR",
        description:
          "El método consiste en colocar un hisopo en el interior de la nariz para poder detectar la presencia del virus.",
        certificate:
          "Se entregará un Certificado Bilingüe (español - ingles), válido para Viaje Internacional.",
        location: "CABA",
        price: 7000,
        picture: Foto1,
        stock: 20,
      };
      resolve(getItems);
    }, 2000);
  });
  myPromise.then((getItems) => {
    setGetItems(getItems);
  });
  return <ItemDetail getItems={getItems} />;
}

export default ItemDetailContainer;
