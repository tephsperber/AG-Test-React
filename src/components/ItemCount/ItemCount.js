import React, { useState } from "react";
import "./ItemCount.css";
import { Button, Icon } from "semantic-ui-react";

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

  const onAddCount = () => {
    onAdd(count);
    setCount(1);
  };
  return (
    <div className="itemCount">
      <div className="button">
        <Button onClick={handleDecrement}> - </Button>
        <p className="initialNumber"> {count}</p>
        <Button onClick={handleIncrement}>+</Button>
      </div>
      <div className="buttonAdd">
        <Button onClick={onAddCount}>
          Agregar al
          <Icon name="cart" color="teal" size="large" className="iconCart" />
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
