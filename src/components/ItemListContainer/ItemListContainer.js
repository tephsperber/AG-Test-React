import React, { useState, useEffect } from "react";

//Import Component
import { ItemList } from "../ItemList/ItemList";

//Import css
import "./ItemListContainer.css";

import { useParams } from "react-router-dom";
import productosArray from "../../utils/productos";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        categoryId
          ? resolve(productosArray.filter((e) => e.category === categoryId))
          : resolve(productosArray);
      }, 2000);
    });
    myPromise.then((productosArray) => {
      setProductos(productosArray);
    });
  }, [categoryId]);

  return (
    <div>
      <h4>{categoryId}</h4>
      <div className="itemListContainer">
        <ItemList productos={productos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
