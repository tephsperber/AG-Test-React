import React from "react";
import { Icon } from "semantic-ui-react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

export const CartWidget = () => {
  const { totalItems } = useCartContext(0);

  return (
    <div>
      {totalItems ? (
        <Link to="/cartview">
          <p className="cartNumber">
            {totalItems}
            <Icon name="cart" color="teal" size="large" className="iconCart" />
          </p>
        </Link>
      ) : null}
    </div>
  );
};
export default CartWidget;
