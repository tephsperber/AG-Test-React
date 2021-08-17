import React, { useState } from "react";

//Import CSS
import "./ItemCount.css";

//Import Button and Icon
import { Button, Icon } from "semantic-ui-react";

function ItemCount({ stockTests, initialTests, onAddTests }) {
  //Definimos el stock de tests diarios
  const [stock, setStock] = useState( stockTests );

  //Definimos la cantidad de 1 tipo de test seleccionado por el usuario
  const [initial, setInitial] = useState( initialTests );

  //Definimos el onAdd
  const [onAdd, setOnAdd] = useState( onAddTests );

  //Definimos una funcion para que al apretar el botón de sumar, la variable initial aumente
  const handleIncrement = () => {
    //Establecemos un if para que cuando aumente el Initial, baje el stock
    if (stock > 0) {
      setInitial(initial + 1);
      setStock(stock - 1);
    }
  };

  //Definimos una funcion para que al apretar el botón de restar, la variable initial disminuya
  const handleDecrement = () => {
    //Establecemos un if para que cuando disminuya el Initial, suba el stock
    if ((stock >= 0) && (stock < 20)) {
      setInitial(initial - 1);
      setStock(stock + 1);
    }
  };

     //Definimos una funcion para agregar al carrito con onAdd
     const handleOnAdd = () => {
      setOnAdd(onAdd);
      console.log ("Has agregado productos al carrito");
  }

  return (
    <div className="itemCount">
      <Icon name="cart" size="big" className="iconCart" />
      <div className="button">
        <Button onClick={handleDecrement}> - </Button>
        <p className="initialNumber"> {initial}</p>
        <Button color="teal" onClick={handleIncrement}> + </Button>
      </div>
      <div className="buttonAdd">
        <Button onClick={handleOnAdd}> Agregar al Carrito </Button>
      </div>
      <p className="stockText">
        Quedan disponibles<span className="stockNumber"> {stock} </span>tests
      </p>
    </div>
  );
}
export default ItemCount;
