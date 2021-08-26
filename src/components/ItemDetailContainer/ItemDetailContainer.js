import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import productsArray from "../../utils/products";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const productFound = productsArray.find(
          (product) => product.id === +itemId
        );
        resolve(productFound);
      }, 2000);
    });

    myPromise
      .then((productsArray) => {
        setItems(productsArray);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <h1>Loading</h1>;

  return <ItemDetail items={items} />;
}

export default ItemDetailContainer;
