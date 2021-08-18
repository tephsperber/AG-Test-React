import React, { useState } from "react";

//Import CSS
import "./ItemCount.css";

//Import Button and Icon
import { Button, Icon } from "semantic-ui-react";

function ItemCount({ stock, initial, onAdd }) {

  const [count, setCount] = useState(initial);

    //Definimos una funcion para que al apretar el botón de sumar, la variable initial aumente
    const handleIncrement = () => {
      //Establecemos un if para que cuando aumente el Initial, baje el stock
      if (count < stock) {
        setCount (count + 1);
      }
    };
  
    //Definimos una funcion para que al apretar el botón de restar, la variable initial disminuya
    const handleDecrement = () => {
      //Establecemos un if para que cuando disminuya el Initial, suba el stock
      if (count > 0) {
        setCount (count - 1);
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
        <Button onClick={()=> onAdd (count)}> Agregar al       
        <Icon name="cart" color="teal" size="large" className="iconCart" />
 </Button>
      </div>
      <p className="stockText">
        Quedan disponibles<span className="stockNumber"> {stock - count} </span>tests
      </p>
    </div>
  );
}
export default ItemCount;
