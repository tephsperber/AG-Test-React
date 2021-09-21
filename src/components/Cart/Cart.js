import React from "react";
import { Button } from "semantic-ui-react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const CartItem = () => {
  const { cart, removeItem, clear, totalItems, totalPrice } = useCartContext();

  return (
    <div>
      {totalItems ? (
        <div>
          {cart.map((cartElement) => {
            return (
              <div className="itemsCart">
                <p className="testNameCart">{cartElement.description}</p>
                <p> Precio por Test: ${cartElement.price}</p>
                <p> Cantidad seleccionada: {cartElement.quantity}</p>
                <p>Precio Total: ${cartElement.price * cartElement.quantity}</p>

                <Button
                  basic
                  color="brown"
                  onClick={() => removeItem(cartElement.id)}
                >
                  Remover Test
                </Button>
              </div>
            );
          })}
          <div className="seleccion">
            <p>
              Has seleccionado un total de
              <span className="spanCart">{totalItems}</span> Tests
            </p>
            <p>
              El monto total es de $
              <span className="spanCart">{totalPrice}</span>
            </p>
          </div>
          <div className="buttonsCart">
            <Button color="red" onClick={clear}>
              Vaciar Carrito
            </Button>
            <Button color="green">Iniciar Compra</Button>
          </div>
        </div>
      ) : (
        <div className="buttonHome">
          <Link to="/">
            <p className="noTests">No hay tests en tu carrito.</p>
            <Button color="teal">Ir al inicio</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default CartItem;
