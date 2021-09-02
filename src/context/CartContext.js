import React, { useState, useContext, createContext, useEffect } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity };
        } else return cartElement;
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const removeItem = (itemid) => {
    setCart(cart.filter((elem) => elem.item.id !== itemid));
  };

  const clear = () => setCart([]);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
    console.log(JSON.parse(localStorage.getItem("dataCart")));
  });

  return (
    <CartContext.Provider
      value={{ cart, addToCart, totalItems, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
