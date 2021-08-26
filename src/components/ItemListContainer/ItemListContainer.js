import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import productsArray from "../../utils/products";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        categoryId
          ? resolve(
              productsArray.filter((product) => product.category === categoryId)
            )
          : resolve(productsArray);
      }, 2000);
    });

    myPromise.then((productsArray) => {
      setProductos(productsArray);
    });
  }, [categoryId]);

  return (
    <div>
      <div className="itemListContainer">
        <ItemList productos={productos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
