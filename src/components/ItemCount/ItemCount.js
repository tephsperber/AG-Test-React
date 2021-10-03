import React, { useState } from "react";
import "./ItemCount.css";
import { Button, Icon } from "semantic-ui-react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(stock > 0 ? initial : 0);

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
    if (stock > 0) {
      setCount(1);
    } else setCount(0);
  };

  return (
    <div className="itemCount">
      <div className="button">
        <Button onClick={handleDecrement}> - </Button>
        <p className="initialNumber"> {count}</p>
        <Button onClick={handleIncrement}>+</Button>
        <div className="buttonAdd">
          <Button onClick={onAddCount}>
            Agregar al
            <Icon name="cart" color="teal" size="large" className="iconCart" />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ItemCount;
