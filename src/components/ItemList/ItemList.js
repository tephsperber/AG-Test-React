import React from "react";
import { Item } from "../Item/Item";

export const ItemList = (props) => {
  return (
    <div>
      {props.productos.map((producto) => {
        return <Item producto={producto} key={producto.id} />;
      })}
    </div>
  );
};
