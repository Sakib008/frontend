import { createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((cart) => [...cart, item]);
  };

  const removeFromCart = (item) => {
    const filterCart = cart.filter(({ id }) => id !== item.id);
    setCart(filterCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
