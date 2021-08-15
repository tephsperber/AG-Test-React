import React from "react";

//Import CSS
import "./ItemCount.css";

//Import Icon
import { Button } from "semantic-ui-react";

const ItemCount = () => {

  //Definimos la cantidad seleccionada por el usuario
  const [initial, setInitial] = React.useState(0);

  //Definimos el stock de tests diarios
  const [stock, setStock] = React.useState(10);

  const handleIncrement = () => {
    setInitial(initial + 1);
  };

  const handleDecrement = () => {
    setInitial(initial - 1);
  };

  const changeStock = () => {
    setStock(stock - initial);
  };
  
  
  return (
    <div className="itemCount">
      <p className="cart">Carrito</p>
      <p>{initial}</p>
      <Button onClick={handleIncrement}> + </Button>
      <Button onClick={handleDecrement}> - </Button>
      <p onChange={changeStock}>{stock}</p>
    </div>
  );
};

export default ItemCount;
