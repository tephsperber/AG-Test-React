import React from "react";
import { Button, Image } from "semantic-ui-react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const CartItem = () => {
  const { cart, removeItem, clear, totalItems, totalPrice } = useCartContext();

  return (
    <div className="grid">
      {totalItems ? (
        <div>
          {cart.map((cartElement) => {
            return (
              <div className="itemsCart">
                <Image className="img" src={cartElement.img} />
                <p className="testNameCart">{cartElement.description}</p>
                <div className="alignLeft">
                  <p>
                    <span> Precio por Test:</span> ${cartElement.price}
                  </p>
                  <p>
                    <span>Cantidad seleccionada: </span>
                    {cartElement.quantity}
                  </p>
                  <p>
                    <span>Precio Total:</span> $
                    {cartElement.price * cartElement.quantity}
                  </p>
                </div>

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
          <div className="selection">
            <p>
              Has seleccionado un total de
              <span className="spanCart">{totalItems}</span>Test.
            </p>
            <p>
              El monto total es de $
              <span className="spanCart">{totalPrice}</span>
            </p>
          </div>
          <div className="buttonsCart">
            <Button color="red" size="large" onClick={clear}>
              Vaciar Carrito
            </Button>
            <Link to="/checkOut">
              <Button color="green" size="large">
                Iniciar Compra
              </Button>
            </Link>
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
