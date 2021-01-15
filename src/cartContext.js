import React, { useReducer, useEffect } from "react";
import cartReducer from "./cartReducer";

const Context = React.createContext(null);

let initialCart;
try {
  initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
  console.error("The cart could not be parsed into JSON.");
  initialCart = [];
}

export const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  const contextValue = {
    cart,
    dispatch,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export const useCart = () => {
  const cartContext = React.useContext(Context);
  if (!cartContext) {
    throw new Error("No context provider provided");
  }
  return cartContext;
};
