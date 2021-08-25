import React, { useState, useEffect } from "react";

//Import Component
import { ItemDetail } from "../ItemDetail/ItemDetail";
import productosArray from "../../utils/productos";

import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  //null porque un objeto vacio pasa como true si haces un if, null no.
  //getitems cambiar a item
  const [getItems, setGetItems] = useState(null);
  const [loading, setLoading] = useState(true);
  //use Params siempre devuelve string, si es nro parsear
  const { itemId } = useParams();

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        //hay un return implicito en la fc flecha
        //el find una vez que encuentra un true, deja de ciclar, no devuelve un array
        //+ es como parsear
        const productFound = productosArray.find(
          (product) => product.id === +itemId
        );
        resolve(productFound);
      }, 2000);
    });

    myPromise
      .then((productosArray) => {
        setGetItems(productosArray);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <h1>Loading</h1>;

  return <ItemDetail getItems={getItems} />;
}

export default ItemDetailContainer;
