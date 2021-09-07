import React from "react";
import { Icon } from "semantic-ui-react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { totalItems } = useCartContext(0);

  return (
    <div>
      {totalItems ? (
        <Link to="/cartview">
          {totalItems}
          <Icon name="cart" color="teal" size="large" className="iconCart" />;
        </Link>
      ) : null}
    </div>
  );
};
export default CartWidget;
