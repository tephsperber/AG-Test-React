import React from "react";

//Import Component
import { Item } from "../Item/Item";


//array de items y map
export const ItemList = (props) => {
    return (
      <div>
        {props.productos.map((producto) => {
          return    (
            <Item producto={producto}    
            key={producto.id}
    />
          )
        })
        }
      </div>
    )
  }

