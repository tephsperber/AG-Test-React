import React from "react";
import { Item } from "../Item/Item";

export const ItemList = (props) => {
  return (
    <div>
      {props.items.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </div>
  );
};
