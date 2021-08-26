import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from "semantic-ui-react";
import CartWidget from "../CartWidget/CartWidget";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemCount">
      <div className="button">
        <Button onClick={handleDecrement}> - </Button>
        <p className="initialNumber"> {count}</p>
        <Button onClick={handleIncrement}> + </Button>
      </div>
      <div className="buttonAdd">
        <Button onClick={() => onAdd(count)}>
          Agregar al
          <CartWidget />
        </Button>
      </div>
      <p className="stockText">
        Quedan disponibles<span className="stockNumber"> {stock - count} </span>
        tests
      </p>
    </div>
  );
}
export default ItemCount;
