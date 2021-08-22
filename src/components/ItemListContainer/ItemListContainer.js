import React, { useState } from "react";

//Import Component
import { ItemList } from "../ItemList/ItemList";

//Import css
import "./ItemListContainer.css";

//Import images
import Foto1 from "./foto1.png";
import Foto2 from "./foto2.jpeg";
import Foto3 from "./foto4.jpeg";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const productos = [
        {
          id: 1,
          title: "PCR CABA",
          description: "Test PCR CABA",
          price: 7000,
          picture: Foto1,
          stock: 20,
        },
        {
          id: 2,
          title: "PCR GBA",
          description: "Test PCR GBA",
          price: 8000,
          picture: Foto1,
          stock: 10,
        },
        {
          id: 3,
          title: "Antígenos CABA",
          description: "Test Antigenos CABA",
          price: 4000,
          picture: Foto2,
          stock: 30,
        },
        {
          id: 4,
          title: "Antígenos GBA",
          description: "Test Antigenos GBA",
          price: 5000,
          picture: Foto2,
          stock: 20,
        },
        {
          id: 5,
          title: "Anticuerpos CABA",
          description: "Test Anticuerpos CABA",
          price: 4000,
          picture: Foto3,
          stock: 25,
        },
        {
          id: 6,
          title: "Anticuerpos GBA",
          description: "Test Anticuerpos GBA",
          price: 5000,
          picture: Foto3,
          stock: 15,
        },
      ];
      resolve(productos);
    }, 2000);
  });
  myPromise.then((productos) => {
    setProductos(productos);
  });
  return (
    <div className="itemListContainer">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
