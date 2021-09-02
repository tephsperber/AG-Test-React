import React from "react";
import { Icon } from "semantic-ui-react";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalItems } = useCartContext();

  return (
    <div>
      {totalItems}
      <Icon name="cart" color="teal" size="large" className="iconCart" />;
    </div>
  );
};
export default CartWidget;
