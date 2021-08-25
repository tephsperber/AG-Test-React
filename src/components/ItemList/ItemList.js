import React from "react";

//Import Component
import { Item } from "../Item/Item";

//array de items y map
export const ItemList = (props) => {
  //cuando mapeo, loopeo los objetos dentro del array,
  //devuelvo de forma dinamica el componente Item
  //y le paso una prop que tiene la info del mapeo
  return (
    <div>
      {props.productos.map((producto) => {
        return <Item producto={producto} key={producto.id} />;
        
      })
      }
    </div>
  );
};
